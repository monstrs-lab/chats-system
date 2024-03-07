import type { Client }                from '@chats-system/client'
import type { ReactElement }          from 'react'

import { randomBytes }                from 'node:crypto'

import { Column }                     from '@ui-proto/layout'
import { Layout }             from '@ui-proto/layout'
import React                          from 'react'

import { useEffect }           from 'react'

import { useState } from 'react'

import TL                             from '@chats-system/tl'

export interface MessagesProps {
  client: Client
  treadId: bigint
}

export const Messages = ({ treadId, client }: MessagesProps): ReactElement => {
  const [messages, setMessages] = useState<Array<TL.TypeMessage>>([])

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      // eslint-disable-next-line
      setTimeout(async () => {
        const result = await client.invoke(
          new TL.messages.GetHistory({
            peer: new TL.InputPeerUser({
              userId: treadId,
              accessHash: randomBytes(8).readBigInt64BE(),
            }),
            offsetId: 0,
            offsetDate: Math.floor(Date.now() / 1000),
            limit: 100,
            hash: 234n,
            addOffset: 0,
            maxId: 0,
            minId: 0,
          })
        )

        if (result instanceof TL.messages.Messages) {
          setMessages(result.messages)
        }
      }, 1000)
    }

    fetch()
  }, [treadId, client])

  return (
    <Column>
      {messages.map((message) => (
        <Layout key={message.id}>{(message as any).message}</Layout>
      ))}
    </Column>
  )
}
