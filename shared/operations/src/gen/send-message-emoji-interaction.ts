import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageEmojiInteractionValues {
  emoticon: string
  msgId: number
  interaction: any
}

export class SendMessageEmojiInteraction extends TLConstructor<SendMessageEmojiInteractionValues> {
  static override CONSTRUCTOR_ID: number = 630664139
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'emoticon',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'msg_id',
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
      name: 'interaction',
      type: 'DataJSON',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get emoticon(): string {
    return this.getParamValue<string>('emoticon')
  }

  get msgId(): number {
    return this.getParamValue<number>('msgId')
  }

  get interaction(): any {
    return this.getParamValue<any>('interaction')
  }
}
