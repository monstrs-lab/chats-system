import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface CdnPublicKeyValues {
  dcId: number
  publicKey: string
}

export class CdnPublicKey extends TLConstructor<CdnPublicKeyValues> {
  static override CONSTRUCTOR_ID: number = -914167110
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'dc_id',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'public_key',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get dcId(): number {
    return this.getParamValue<number>('dcId')
  }

  get publicKey(): string {
    return this.getParamValue<string>('publicKey')
  }
}
