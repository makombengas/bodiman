// app/api/test/route.ts
import { NextResponse } from 'next/server'


export async function GET( ) {
  const myUrl= process.env.MY_SECRET_URL
  return new NextResponse(JSON.stringify({ myUrl }), {
    headers: { 'Content-Type': 'application/json' },
  })
}