import { BadMsgNotification } from "./bad_msg_notification.ts";
import { BadServerSalt } from "./bad_server_salt.ts";
import { BindAuthKeyInner } from "./bind_auth_key_inner.ts";
import { ClientDHInnerData } from "./client_DH_inner_data.ts";
import { DestroyAuthKeyFail } from "./destroy_auth_key_fail.ts";
import { DestroyAuthKeyNone } from "./destroy_auth_key_none.ts";
import { DestroyAuthKeyOk } from "./destroy_auth_key_ok.ts";
import { DestroySessionNone } from "./destroy_session_none.ts";
import { DestroySessionOk } from "./destroy_session_ok.ts";
import { DhGenFail } from "./dh_gen_fail.ts";
import { DhGenOk } from "./dh_gen_ok.ts";
import { DhGenRetry } from "./dh_gen_retry.ts";
import { FutureSalt } from "./future_salt.ts";
import { FutureSalts } from "./future_salts.ts";
import { GzipPacked } from "./gzip_packed.ts";
import { Message } from "./message.ts";
import { MsgContainer } from "./msg_container.ts";
import { MsgCopy } from "./msg_copy.ts";
import { MsgDetailedInfo } from "./msg_detailed_info.ts";
import { MsgNewDetailedInfo } from "./msg_new_detailed_info.ts";
import { MsgResendReq } from "./msg_resend_req.ts";
import { MsgsAck } from "./msgs_ack.ts";
import { MsgsAllInfo } from "./msgs_all_info.ts";
import { MsgsStateInfo } from "./msgs_state_info.ts";
import { MsgsStateReq } from "./msgs_state_req.ts";
import { NewSessionCreated } from "./new_session_created.ts";
import { PQInnerDataDc } from "./p_q_inner_data_dc.ts";
import { PQInnerDataTempDc } from "./p_q_inner_data_temp_dc.ts";
import { Pong } from "./pong.ts";
import { ResPQ } from "./resPQ.ts";
import { RpcAnswerDroppedRunning } from "./rpc_answer_dropped_running.ts";
import { RpcAnswerDropped } from "./rpc_answer_dropped.ts";
import { RpcAnswerUnknown } from "./rpc_answer_unknown.ts";
import { RpcError } from "./rpc_error.ts";
import { RpcResult } from "./rpc_result.ts";
import { ServerDHInnerData } from "./server_DH_inner_data.ts";
import { ServerDHParamsOk } from "./server_DH_params_ok.ts";
import { Vector } from "./vector.ts";

export const classmap = {
    [Number(-1477445615)]: BadMsgNotification,
    [Number(-307542917)]: BadServerSalt,
    [Number(1973679973)]: BindAuthKeyInner,
    [Number(1715713620)]: ClientDHInnerData,
    [Number(-368010477)]: DestroyAuthKeyFail,
    [Number(178201177)]: DestroyAuthKeyNone,
    [Number(-161422892)]: DestroyAuthKeyOk,
    [Number(1658015945)]: DestroySessionNone,
    [Number(-501201412)]: DestroySessionOk,
    [Number(-1499615742)]: DhGenFail,
    [Number(1003222836)]: DhGenOk,
    [Number(1188831161)]: DhGenRetry,
    [Number(155834844)]: FutureSalt,
    [Number(-1370486635)]: FutureSalts,
    [Number(812830625)]: GzipPacked,
    [Number(1538843921)]: Message,
    [Number(1945237724)]: MsgContainer,
    [Number(-530561358)]: MsgCopy,
    [Number(661470918)]: MsgDetailedInfo,
    [Number(-2137147681)]: MsgNewDetailedInfo,
    [Number(2105940488)]: MsgResendReq,
    [Number(1658238041)]: MsgsAck,
    [Number(-1933520591)]: MsgsAllInfo,
    [Number(81704317)]: MsgsStateInfo,
    [Number(-630588590)]: MsgsStateReq,
    [Number(-1631450872)]: NewSessionCreated,
    [Number(-1443537003)]: PQInnerDataDc,
    [Number(1459478408)]: PQInnerDataTempDc,
    [Number(880243653)]: Pong,
    [Number(85337187)]: ResPQ,
    [Number(-847714938)]: RpcAnswerDroppedRunning,
    [Number(-1539647305)]: RpcAnswerDropped,
    [Number(1579864942)]: RpcAnswerUnknown,
    [Number(558156313)]: RpcError,
    [Number(-212046591)]: RpcResult,
    [Number(-1249309254)]: ServerDHInnerData,
    [Number(-790100132)]: ServerDHParamsOk,
    [Number(481674261)]: Vector
};
