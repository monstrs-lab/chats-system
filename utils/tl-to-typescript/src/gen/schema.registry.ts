import { TLObject }                from '@chats-system/tl-types'

import { BadMsgNotification }      from './bad_msg_notification.js'
import { BadServerSalt }           from './bad_server_salt.js'
import { BindAuthKeyInner }        from './bind_auth_key_inner.js'
import { ClientDHInnerData }       from './client_DH_inner_data.js'
import { DestroyAuthKeyFail }      from './destroy_auth_key_fail.js'
import { DestroyAuthKeyNone }      from './destroy_auth_key_none.js'
import { DestroyAuthKeyOk }        from './destroy_auth_key_ok.js'
import { DestroyAuthKey }          from './destroy_auth_key.js'
import { DestroySessionNone }      from './destroy_session_none.js'
import { DestroySessionOk }        from './destroy_session_ok.js'
import { DestroySession }          from './destroy_session.js'
import { DhGenFail }               from './dh_gen_fail.js'
import { DhGenOk }                 from './dh_gen_ok.js'
import { DhGenRetry }              from './dh_gen_retry.js'
import { FutureSalt }              from './future_salt.js'
import { FutureSalts }             from './future_salts.js'
import { GetFutureSalts }          from './get_future_salts.js'
import { GzipPacked }              from './gzip_packed.js'
import { HttpWait }                from './http_wait.js'
import { Message }                 from './message.js'
import { MsgContainer }            from './msg_container.js'
import { MsgCopy }                 from './msg_copy.js'
import { MsgDetailedInfo }         from './msg_detailed_info.js'
import { MsgNewDetailedInfo }      from './msg_new_detailed_info.js'
import { MsgResendReq }            from './msg_resend_req.js'
import { MsgsAck }                 from './msgs_ack.js'
import { MsgsAllInfo }             from './msgs_all_info.js'
import { MsgsStateInfo }           from './msgs_state_info.js'
import { MsgsStateReq }            from './msgs_state_req.js'
import { NewSessionCreated }       from './new_session_created.js'
import { PQInnerDataDc }           from './p_q_inner_data_dc.js'
import { PQInnerDataTempDc }       from './p_q_inner_data_temp_dc.js'
import { PingDelayDisconnect }     from './ping_delay_disconnect.js'
import { Ping }                    from './ping.js'
import { Pong }                    from './pong.js'
import { ReqDHParams }             from './req_DH_params.js'
import { ReqPqMulti }              from './req_pq_multi.js'
import { ResPQ }                   from './resPQ.js'
import { RpcAnswerDroppedRunning } from './rpc_answer_dropped_running.js'
import { RpcAnswerDropped }        from './rpc_answer_dropped.js'
import { RpcAnswerUnknown }        from './rpc_answer_unknown.js'
import { RpcDropAnswer }           from './rpc_drop_answer.js'
import { RpcError }                from './rpc_error.js'
import { RpcResult }               from './rpc_result.js'
import { ServerDHInnerData }       from './server_DH_inner_data.js'
import { ServerDHParamsOk }        from './server_DH_params_ok.js'
import { SetClientDHParams }       from './set_client_DH_params.js'
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
