import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneConfirmCallValues {
  peer: any
  gA: Buffer
  keyFingerprint: bigint
  protocol: any
}

export class PhoneConfirmCall extends TLMethod<PhoneConfirmCallValues> {
  static override CONSTRUCTOR_ID = 788404002
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'InputPhoneCall',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'g_a',
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
    {
      name: 'protocol',
      type: 'PhoneCallProtocol',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get gA(): Buffer {
    return this.getParamValue<Buffer>('gA')
  }

  get keyFingerprint(): bigint {
    return this.getParamValue<bigint>('keyFingerprint')
  }

  get protocol(): any {
    return this.getParamValue<any>('protocol')
  }
}
