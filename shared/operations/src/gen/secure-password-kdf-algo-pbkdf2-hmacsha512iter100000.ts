import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecurePasswordKdfAlgoPBKDF2HMACSHA512Iter100000Values {
  salt: Buffer
}

export class SecurePasswordKdfAlgoPBKDF2HMACSHA512Iter100000 extends TLConstructor<SecurePasswordKdfAlgoPBKDF2HMACSHA512Iter100000Values> {
  static override CONSTRUCTOR_ID: number = -1141711456
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'salt',
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

  get salt(): Buffer {
    return this.getParamValue<Buffer>('salt')
  }
}
