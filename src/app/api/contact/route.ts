import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();

  const { title, message } = body as { title: string; message: string };

  const html = `
        <div>
          <h1>${title}</h1>
          <br/>
          <p>${message}</p>
        </div>
      `;

  const hostEmail = process.env.HOST_EMAIL!,
    password = process.env.HOST_EMAIL_PASSWORD!;

  const transporter = nodemailer.createTransport({
    host: 'smtp.outlook.com',
    auth: {
      user: hostEmail,
      pass: password,
    },
  });

  const data = {
    from: hostEmail,
    to: hostEmail,
    subject: `Contact message from portfolio app.`,
    html,
  };

  await transporter.sendMail(data);

  return NextResponse.json({ ok: true });
}
