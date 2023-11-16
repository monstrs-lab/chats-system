import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesAcceptEncryptionValues {
  peer: any
  gB: Buffer
  keyFingerprint: bigint
}

export class MessagesAcceptEncryption extends TLMethod<MessagesAcceptEncryptionValues> {
  static override CONSTRUCTOR_ID = 1035731989
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'InputEncryptedChat',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'g_b',
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
      name: 'key_fingerprint',
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

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get gB(): Buffer {
    return this.getParamValue<Buffer>('gB')
  }

  get keyFingerprint(): bigint {
    return this.getParamValue<bigint>('keyFingerprint')
  }
}
