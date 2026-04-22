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
            content: `Tu es un expert en rédaction de CV. 
            Règle CRITIQUE : Réponds UNIQUEMENT avec le texte final de la bio. 
            INTERDICTION de faire des introductions (ex: "Voici une bio..."), des conclusions ou d'utiliser des guillemets. 
            Ta réponse doit être prête à être copiée-collée directement. 
            Ton style est percutant, professionnel et utilise des verbes d'action. 
            Langue : Français.`
          },
          {
            role: "user",
            content: `Rédige la bio pour un poste de ${poste}. 
            Compétences à inclure : ${skills?.join(', ') || 'générales'}. 
            Bio actuelle comme base : ${bio || 'Rédige une bio complète'}.`
          }
        ],
        temperature: 0.6, // Légèrement baissée pour plus de précision et moins de "bavardage"
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erreur API Groq:", data);
      return NextResponse.json({ error: data.error?.message || "Erreur API" }, { status: response.status });
    }

    if (data.choices && data.choices[0]?.message?.content) {
      let cleanedSuggestion = data.choices[0].message.content;

      // NETTOYAGE : Supprime les guillemets au début et à la fin si l'IA en a mis
      cleanedSuggestion = cleanedSuggestion.replace(/^["'«]|["'»]$/g, '').trim();
      
      // Suppression de phrases d'intro résiduelles au cas où
      cleanedSuggestion = cleanedSuggestion.replace(/^(Voici|Rdaction|Bio|Profil).*:\s*/i, '');

      return NextResponse.json({ suggestion: cleanedSuggestion });
    } else {
      throw new Error("Format de réponse inattendu");
    }

  } catch (error) {
    console.error("Erreur Serveur:", error);
    return NextResponse.json({ error: "Le serveur a rencontré un problème." }, { status: 500 });
  }
}