import type { Client }                  from '@chats-system/client'
import type { ReactElement }            from 'react'

import { randomBytes }                  from 'node:crypto'

import { Button }                       from '@ui-proto/button'
import { Input }                        from '@ui-proto/input'
import { Row }                          from '@ui-proto/layout'
import { Layout }                  from '@ui-proto/layout'
import React                            from 'react'

import { useCallback }           from 'react'

import { useState } from 'react'

import TL                               from '@chats-system/tl'

export interface ComposerProps {
  client: Client
  treadId: bigint
}

export const Composer = ({ treadId, client }: ComposerProps): ReactElement => {
  const [message, setMessage] = useState('')

  const onSend = useCallback(async () => {
    await client.invoke(
      new TL.messages.SendMessage({
        peer: new TL.InputPeerUser({
          userId: treadId,
          accessHash: randomBytes(8).readBigInt64BE(),
        }),
        randomId: randomBytes(8).readBigInt64BE(),
        message,
      })
    )
  }, [message, treadId, client])

  return (
    <Row>
      <Layout flexGrow={1}>
        <Input value={message} onValueChange={setMessage} />
      </Layout>
      <Layout mx='1x'>
        <Button onClick={() => {
          onSend() }}>Отправить</Button>
      </Layout>
    </Row>
  )
}
