/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { TLObject } from '@monstrs/mtproto-tl-core'

import { TLRegistry }    from '@monstrs/mtproto-tl-core'

export const registry = new TLRegistry(
  new Map<number, () => Promise<typeof TLObject>>([
    [0x6643b654, async () => (await import('./client-dh-inner-data.js')).ClientDHInnerData],
    [0xa69dae02, async () => (await import('./dh-gen-fail.js')).DhGenFail],
    [0x3bcbf734, async () => (await import('./dh-gen-ok.js')).DhGenOk],
    [0x46dc1fb9, async () => (await import('./dh-gen-retry.js')).DhGenRetry],
    [0xdde8a54c, async () => (await import('./input-peer-user.js')).InputPeerUser],
    [0x76bec211, async () => (await import('./message.js')).Message],
    [0x280d096f, async () => (await import('./messages.send-message.js')).SendMessage],
    [0xa9f55f95, async () => (await import('./p-q-inner-data.js')).PQInnerData],
    [0x59511722, async () => (await import('./peer-user.js')).PeerUser],
    [0x7abe77ec, async () => (await import('./ping.js')).Ping],
    [0x347773c5, async () => (await import('./pong.js')).Pong],
    [0xd712e4be, async () => (await import('./req-dh-params.js')).ReqDHParams],
    [0xbe7e8ef1, async () => (await import('./req-pq-multi.js')).ReqPqMulti],
    [0x05162463, async () => (await import('./res-pq.js')).ResPQ],
    [0xb5890dba, async () => (await import('./server-dh-inner-data.js')).ServerDHInnerData],
    [0xd0e8075c, async () => (await import('./server-dh-params-ok.js')).ServerDHParamsOk],
    [0xf5045f1f, async () => (await import('./set-client-dh-params.js')).SetClientDHParams],
    [0x4e90bfd6, async () => (await import('./update-message-id.js')).UpdateMessageID],
    [0x1f2b0afd, async () => (await import('./update-new-message.js')).UpdateNewMessage],
    [0x74ae4240, async () => (await import('./updates.js')).Updates],
  ])
)
