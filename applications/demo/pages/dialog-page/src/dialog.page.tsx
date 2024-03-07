'use client'

import type { ReactElement } from 'react'

import { Column }            from '@ui-proto/layout'
import { Layout }    from '@ui-proto/layout'
import { useEffect }         from 'react'
import React                 from 'react'

import { Composer }          from './composer.component.jsx'
import { Messages }          from './messages.component.jsx'
import { client }            from './client.js'

export const DialogPage = ({ params }: { params: { dialogId: string } }): ReactElement => {
  useEffect(() => {
    const start = async (): Promise<void> => {
      const authKey = await client.start()

      await fetch('/api/authkey/bind', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authKeyId: authKey.authKeyId.toString(),
        }),
      })
    }

    start()
  }, [])

  return (
    <Column>
      <Layout>
        <Messages treadId={BigInt(params.dialogId)} client={client} />
      </Layout>
      <Layout>
        <Composer treadId={BigInt(params.dialogId)} client={client} />
      </Layout>
    </Column>
  )
}
