import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

export class RpcAnswerUnknown extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 1579864942
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
