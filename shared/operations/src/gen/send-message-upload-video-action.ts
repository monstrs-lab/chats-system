import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageUploadVideoActionValues {
  progress: number
}

export class SendMessageUploadVideoAction extends TLConstructor<SendMessageUploadVideoActionValues> {
  static override CONSTRUCTOR_ID: number = -378127636
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'progress',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get progress(): number {
    return this.getParamValue<number>('progress')
  }
}
