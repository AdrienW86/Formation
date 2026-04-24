import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, formation, message } = data;

    // Configuration du transporteur (Exemple avec Gmail ou un SMTP standard)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Ou ton hôte SMTP (ex: mail.infomaniak.com)
      auth: {
        user: process.env.EMAIL_USER, // Ton adresse email
        pass: process.env.EMAIL_PASS, // Ton mot de passe d'application
      },
    });

    // Contenu de l'email que TU vas recevoir
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Tu t'envoies le lead à toi-même
      replyTo: email,
      subject: `Nouveau Lead Formation : ${formation}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #2563eb;">Nouvelle demande de formation de ${name}</h2>
          <p><strong>Formation choisie :</strong> ${formation}</p>
          <hr />
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Message :</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${message || "Aucun message laissé."}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur API Contact:", error);
    return NextResponse.json({ message: "Erreur lors de l'envoi" }, { status: 500 });
  }
}