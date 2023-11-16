import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface RpcAnswerUnknownValues {}

export class RpcAnswerUnknown extends TLConstructor<RpcAnswerUnknownValues> {
  static override CONSTRUCTOR_ID: number = 1579864942
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
