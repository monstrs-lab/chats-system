import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageUploadRoundActionValues {
  progress: number
}

export class SendMessageUploadRoundAction extends TLConstructor<SendMessageUploadRoundActionValues> {
  static override CONSTRUCTOR_ID: number = 608050278
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
