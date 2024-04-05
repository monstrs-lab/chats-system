'use client'

import type { ReactElement } from 'react'

import { useEffect }         from 'react'
import React                 from 'react'

import { Transport }         from '@chats-system/operations'
import { client }            from '@chats-system/operations'

export default (): ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      client?.send(
        new Transport.Ping({
          pingId: 0n,
        })
      )

      // eslint-disable-next-line no-console
      client?.on(Transport.Pong, console.log)
    }, 2000)
  }, [])

  return <div />
}
