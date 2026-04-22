import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { poste, skills, bio } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", 
        messages: [
          {
            role: "system",
            content: `Tu es un rédacteur professionnel de profils de CV. 
            TACHE : Rédiger uniquement une courte introduction (Accroche).
            
            CONTRAINTES STRICTES :
            - Longueur : Maximum 250 caractères (environ 2-3 phrases).
            - PAS de dates (ex: pas de "2018-2019").
            - PAS de listes d'expériences passées.
            - PAS de symboles spéciaux, puces (•) ou astérisques (*).
            - PAS d'introduction du type "Voici votre bio".
            - Réponds par le texte brut, prêt à être inséré.
            
            STYLE : Direct, professionnel, utilisant le "Je" ou des phrases nominales.`
          },
          {
            role: "user",
            content: `Métier cible : ${poste}. 
            Mots-clés à intégrer : ${skills?.join(', ') || ''}. 
            Contexte actuel : ${bio}`
          }
        ],
        temperature: 0.4, // Plus bas pour éviter les divagations
        max_tokens: 100,  // Limite physique de la réponse pour éviter les longs textes
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: "Erreur API" }, { status: response.status });
    }

    let cleanedSuggestion = data.choices[0].message.content;

    // Nettoyage final des résidus de mise en forme (guillemets, étoiles)
    cleanedSuggestion = cleanedSuggestion.replace(/[*"'«»]/g, '').trim();

    return NextResponse.json({ suggestion: cleanedSuggestion });

  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}