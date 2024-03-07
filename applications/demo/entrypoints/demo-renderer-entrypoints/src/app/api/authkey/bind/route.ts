import type { NextRequest }        from 'next/server.js'

import { NextResponse }            from 'next/server.js'

import { client as authKeyClient } from '@chats-system/authkey-rpc-client'
import { client as userClient }    from '@chats-system/user-rpc-client'

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const data: { authKeyId: string } = await request.json()

  if (!data.authKeyId) {
    throw new Error('Unknown auth key id')
  }

  if (!request.cookies.get('ory_kratos_session')?.value) {
    throw new Error('Authentication required')
  }

  const response = await fetch('http://localhost:4433/sessions/whoami', {
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  })

  const {
    error,
    identity,
  }: {
    identity: { id: string; traits: { phone: string; name: { first: string; last: string } } }
    error?: { code: number }
  } = await response.json()

  if (error?.code === 401) {
    throw new Error('Authentication required')
  }

  const { authKeyUser } = await authKeyClient.getAuthKeyUser({
    authKeyId: BigInt(data.authKeyId),
  })

  if (!authKeyUser) {
    const { user } = await userClient.createUser({
      phone: identity.traits.phone,
      firstName: identity.traits.name.first,
      lastName: identity.traits.name.last,
    })

    await authKeyClient.createAuthKeyUser({
      authKeyId: BigInt(data.authKeyId),
      userId: user!.id,
    })
  }

  return NextResponse.json({
    success: true,
  })
}
