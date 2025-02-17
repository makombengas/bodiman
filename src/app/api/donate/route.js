import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const myUrl = process.env.NEXT_PUBLIC_MY_SECRET_URL;

    // Vérifiez que `myUrl` est défini
    if (!myUrl) {
      return NextResponse.json({ error: 'MY_SECRET_URL is not defined' }, { status: 500 });
    }

    return new NextResponse(JSON.stringify({ myUrl }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}