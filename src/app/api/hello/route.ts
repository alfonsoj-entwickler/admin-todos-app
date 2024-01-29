import { NextResponse } from 'next/server'

export async function GET(request: Request) { 

  return NextResponse.json({
    hello: 'World!',
  })
}

export async function POST(request: Request) { 

    return NextResponse.json({
      hello: 'World!',
      method: 'post'
    })
  }