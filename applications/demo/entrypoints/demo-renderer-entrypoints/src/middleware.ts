import type { NextRequest } from 'next/server.js'

import { NextResponse }     from 'next/server.js'

export async function middleware(request: NextRequest): Promise<NextResponse> {
  if (request.cookies.get('ory_kratos_session')?.value) {
    const response = await fetch('http://localhost:4433/sessions/whoami', {
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    })

    const data = await response.json()

    if (data?.error?.code !== 401) {
      return NextResponse.next()
    }
  }

  return NextResponse.redirect('http://localhost:3000/?return_to=http://localhost:3000')
}

export const config = {
  matcher: ['/', '/config'],
}
