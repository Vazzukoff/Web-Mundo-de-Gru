import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Mensaje de ${name}`,
      text: message,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}