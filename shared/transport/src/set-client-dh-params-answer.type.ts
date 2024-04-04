import type { DhGenFail }         from './dh-gen-fail.js'
import type { DhGenOk }           from './dh-gen-ok.js'
import type { DhGenRetry }        from './dh-gen-retry.js'
import type { SetClientDHParams } from './set-client-dh-params.js'

export type TypeSetClientDHParamsAnswer = DhGenFail | DhGenOk | DhGenRetry | SetClientDHParams
