import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputCheckPasswordSRPValues {
  srpId: bigint
  a: Buffer
  m1: Buffer
}

export class InputCheckPasswordSRP extends TLConstructor<InputCheckPasswordSRPValues> {
  static override CONSTRUCTOR_ID: number = -763367294
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'srp_id',
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
      name: 'A',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'M1',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get srpId(): bigint {
    return this.getParamValue<bigint>('srpId')
  }

  get a(): Buffer {
    return this.getParamValue<Buffer>('a')
  }

  get m1(): Buffer {
    return this.getParamValue<Buffer>('m1')
  }
}