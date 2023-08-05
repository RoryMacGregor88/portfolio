import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

interface Body {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // const { email, subject, message } = body as Body;

    // const html = `
    //     <div>
    //       <h4>Contact email:</h4>
    //       <br />
    //       <p>${email}</p>
    //       <br/>
    //       <h4>Message:</h4>
    //       <br />
    //       <p>${message}</p>
    //     </div>
    //   `;

    // const hostEmail = process.env.HOST_EMAIL!,
    //   password = process.env.HOST_EMAIL_PASSWORD!;

    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.outlook.com',
    //   auth: {
    //     user: hostEmail,
    //     pass: password,
    //   },
    // });

    // const data = {
    //   from: hostEmail,
    //   to: hostEmail,
    //   subject,
    //   html,
    // };

    // await transporter.sendMail(data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: 'An unexpected error has occurred.' },
      { status: 500 }
    );
  }
}
