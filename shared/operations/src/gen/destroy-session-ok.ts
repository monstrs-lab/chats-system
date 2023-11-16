import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DestroySessionOkValues {
  sessionId: bigint
}

export class DestroySessionOk extends TLConstructor<DestroySessionOkValues> {
  static override CONSTRUCTOR_ID: number = -501201412
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'session_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get sessionId(): bigint {
    return this.getParamValue<bigint>('sessionId')
  }
}
