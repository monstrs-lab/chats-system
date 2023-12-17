'use client'

import type { ReactElement } from 'react'

import { useEffect }         from 'react'
import React                 from 'react'

import { client }            from './client.js'

export const DialogPage = (): ReactElement => {
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

  return <div>dialog</div>
}
