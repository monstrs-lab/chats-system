'use client'

import { getDomain }         from 'tldjs'

import { ChatsSystemClient } from '@chats-system/client'

const getEndpoint = (): string => {
  if (process.env.CHATS_SYSTEM_GATEWAY_URL) {
    return process.env.CHATS_SYSTEM_GATEWAY_URL
  }

  if (process.env.NEXT_PUBLIC_CHATS_SYSTEM_GATEWAY_URL) {
    return process.env.NEXT_PUBLIC_CHATS_SYSTEM_GATEWAY_URL
  }

  const { hostname } = window.location

  const domain: string | null = getDomain(hostname)

  if (!domain) {
    throw new Error('Unknown chats system gateway domain domain')
  }

  return `wss://chats.${domain}/`
}

const createClient = (): ChatsSystemClient | undefined => {
  if (typeof window === 'undefined') {
    return undefined
  }

  const client = new ChatsSystemClient(getEndpoint(), {
    io: {
      transports: ['websocket'],
    },
  })

  client.connect()

  return client
}

export const client = createClient()

export * as Transport from '@chats-system/transport'
