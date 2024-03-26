import type { TLObject }     from '@monstrs/mtproto-tl-core'

import { TLRegistry }        from '@monstrs/mtproto-tl-core'

import { ClientDHInnerData } from './client-dh-inner-data.js'
import { DhGenFail }         from './dh-gen-fail.js'
import { DhGenOk }           from './dh-gen-ok.js'
import { DhGenRetry }        from './dh-gen-retry.js'
import { InputPeerUser }     from './input-peer-user.js'
import { SendMessage }       from './messages.send-message.js'
import { SentMessage }       from './messages.sent-message.js'
import { PQInnerData }       from './p-q-inner-data.js'
import { Ping }              from './ping.js'
import { Pong }              from './pong.js'
import { ReqDHParams }       from './req-dh-params.js'
import { ReqPqMulti }        from './req-pq-multi.js'
import { ResPQ }             from './res-pq.js'
import { ServerDHInnerData } from './server-dh-inner-data.js'
import { ServerDHParamsOk }  from './server-dh-params-ok.js'
import { SetClientDHParams } from './set-client-dh-params.js'

export const registry = new TLRegistry(
  new Map<number, typeof TLObject>([
    [0x6643b654, ClientDHInnerData],
    [0xa69dae02, DhGenFail],
    [0x3bcbf734, DhGenOk],
    [0x46dc1fb9, DhGenRetry],
    [0xdde8a54c, InputPeerUser],
    [0x9664f57f, SentMessage],
    [0xa9f55f95, PQInnerData],
    [0x7abe77ec, Ping],
    [0x347773c5, Pong],
    [0xd712e4be, ReqDHParams],
    [0xbe7e8ef1, ReqPqMulti],
    [0x05162463, ResPQ],
    [0xb5890dba, ServerDHInnerData],
    [0xd0e8075c, ServerDHParamsOk],
    [0xf5045f1f, SetClientDHParams],
    [0x280d096f, SendMessage],
  ])
)
