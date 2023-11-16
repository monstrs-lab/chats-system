import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageMediaWebPageValues {
  webpage: any
}

export class MessageMediaWebPage extends TLConstructor<MessageMediaWebPageValues> {
  static override CONSTRUCTOR_ID: number = -1557277184
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'webpage',
      type: 'WebPage',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get webpage(): any {
    return this.getParamValue<any>('webpage')
  }
}
