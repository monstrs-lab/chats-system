import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatePhoneCallSignalingDataValues {
  phoneCallId: bigint
  data: Buffer
}

export class UpdatePhoneCallSignalingData extends TLConstructor<UpdatePhoneCallSignalingDataValues> {
  static override CONSTRUCTOR_ID: number = 643940105
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'phone_call_id',
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
      name: 'data',
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

  get phoneCallId(): bigint {
    return this.getParamValue<bigint>('phoneCallId')
  }

  get data(): Buffer {
    return this.getParamValue<Buffer>('data')
  }
}
