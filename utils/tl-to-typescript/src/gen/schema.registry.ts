import { TLObject }                from '@chats-system/tl-types'

import { BadMsgNotification }      from './bad-msg-notification.js'
import { BadServerSalt }           from './bad-server-salt.js'
import { BindAuthKeyInner }        from './bind-auth-key-inner.js'
import { ClientDHInnerData }       from './client-dh-inner-data.js'
import { DestroyAuthKeyFail }      from './destroy-auth-key-fail.js'
import { DestroyAuthKeyNone }      from './destroy-auth-key-none.js'
import { DestroyAuthKeyOk }        from './destroy-auth-key-ok.js'
import { DestroyAuthKey }          from './destroy-auth-key.js'
import { DestroySessionNone }      from './destroy-session-none.js'
import { DestroySessionOk }        from './destroy-session-ok.js'
import { DestroySession }          from './destroy-session.js'
import { DhGenFail }               from './dh-gen-fail.js'
import { DhGenOk }                 from './dh-gen-ok.js'
import { DhGenRetry }              from './dh-gen-retry.js'
import { FutureSalt }              from './future-salt.js'
import { FutureSalts }             from './future-salts.js'
import { GetFutureSalts }          from './get-future-salts.js'
import { GzipPacked }              from './gzip-packed.js'
import { HttpWait }                from './http-wait.js'
import { Message }                 from './message.js'
import { MsgContainer }            from './msg-container.js'
import { MsgCopy }                 from './msg-copy.js'
import { MsgDetailedInfo }         from './msg-detailed-info.js'
import { MsgNewDetailedInfo }      from './msg-new-detailed-info.js'
import { MsgResendReq }            from './msg-resend-req.js'
import { MsgsAck }                 from './msgs-ack.js'
import { MsgsAllInfo }             from './msgs-all-info.js'
import { MsgsStateInfo }           from './msgs-state-info.js'
import { MsgsStateReq }            from './msgs-state-req.js'
import { NewSessionCreated }       from './new-session-created.js'
import { PQInnerDataDc }           from './p-q-inner-data-dc.js'
import { PQInnerDataTempDc }       from './p-q-inner-data-temp-dc.js'
import { PingDelayDisconnect }     from './ping-delay-disconnect.js'
import { Ping }                    from './ping.js'
import { Pong }                    from './pong.js'
import { ReqDHParams }             from './req-dh-params.js'
import { ReqPqMulti }              from './req-pq-multi.js'
import { ResPQ }                   from './respq.js'
import { RpcAnswerDroppedRunning } from './rpc-answer-dropped-running.js'
import { RpcAnswerDropped }        from './rpc-answer-dropped.js'
import { RpcAnswerUnknown }        from './rpc-answer-unknown.js'
import { RpcDropAnswer }           from './rpc-drop-answer.js'
import { RpcError }                from './rpc-error.js'
import { RpcResult }               from './rpc-result.js'
import { ServerDHInnerData }       from './server-dh-inner-data.js'
import { ServerDHParamsOk }        from './server-dh-params-ok.js'
import { SetClientDHParams }       from './set-client-dh-params.js'
import { Vector }                  from './vector.js'

export const SchemaRegistry = new Map<number, TLObject>([
  [-1477445615, BadMsgNotification],
  [-307542917, BadServerSalt],
  [1973679973, BindAuthKeyInner],
  [1715713620, ClientDHInnerData],
  [-368010477, DestroyAuthKeyFail],
  [178201177, DestroyAuthKeyNone],
  [-161422892, DestroyAuthKeyOk],
  [-784117408, DestroyAuthKey],
  [1658015945, DestroySessionNone],
  [-501201412, DestroySessionOk],
  [-414113498, DestroySession],
  [-1499615742, DhGenFail],
  [1003222836, DhGenOk],
  [1188831161, DhGenRetry],
  [155834844, FutureSalt],
  [-1370486635, FutureSalts],
  [-1188971260, GetFutureSalts],
  [812830625, GzipPacked],
  [-1835453025, HttpWait],
  [1538843921, Message],
  [1945237724, MsgContainer],
  [-530561358, MsgCopy],
  [661470918, MsgDetailedInfo],
  [-2137147681, MsgNewDetailedInfo],
  [2105940488, MsgResendReq],
  [1658238041, MsgsAck],
  [-1933520591, MsgsAllInfo],
  [81704317, MsgsStateInfo],
  [-630588590, MsgsStateReq],
  [-1631450872, NewSessionCreated],
  [-1443537003, PQInnerDataDc],
  [1459478408, PQInnerDataTempDc],
  [-213746804, PingDelayDisconnect],
  [2059302892, Ping],
  [880243653, Pong],
  [-686627650, ReqDHParams],
  [-1099002127, ReqPqMulti],
  [85337187, ResPQ],
  [-847714938, RpcAnswerDroppedRunning],
  [-1539647305, RpcAnswerDropped],
  [1579864942, RpcAnswerUnknown],
  [1491380032, RpcDropAnswer],
  [558156313, RpcError],
  [-212046591, RpcResult],
  [-1249309254, ServerDHInnerData],
  [-790100132, ServerDHParamsOk],
  [-184262881, SetClientDHParams],
  [481674261, Vector],
])
