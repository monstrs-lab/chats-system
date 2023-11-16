import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecureValueHashValues {
  type: any
  hash: Buffer
}

export class SecureValueHash extends TLConstructor<SecureValueHashValues> {
  static override CONSTRUCTOR_ID: number = -316748368
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'type',
      type: 'SecureValueType',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'hash',
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

  get type(): any {
    return this.getParamValue<any>('type')
  }

  get hash(): Buffer {
    return this.getParamValue<Buffer>('hash')
  }
}
