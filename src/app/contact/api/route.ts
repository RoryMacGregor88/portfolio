import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('VALUES: ', req.body);
  return NextResponse.json({ ok: true });
}
