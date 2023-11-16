import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputSecureFileLocationValues {
  id: bigint
  accessHash: bigint
}

export class InputSecureFileLocation extends TLConstructor<InputSecureFileLocationValues> {
  static override CONSTRUCTOR_ID: number = -876089816
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'access_hash',
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

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }
}
