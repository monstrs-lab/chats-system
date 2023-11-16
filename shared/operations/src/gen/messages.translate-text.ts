import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesTranslateTextValues {
  flags: any
  peer: any
  id: Array<number>
  text: Array<any>
  toLang: string
}

export class MessagesTranslateText extends TLMethod<MessagesTranslateTextValues> {
  static override CONSTRUCTOR_ID = 1662529584
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'peer',
      type: 'InputPeer',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'id',
      type: 'int',
      isVector: true,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'text',
      type: 'TextWithEntities',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'to_lang',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get id(): Array<number> {
    return this.getParamValue<Array<number>>('id')
  }

  get text(): Array<any> {
    return this.getParamValue<Array<any>>('text')
  }

  get toLang(): string {
    return this.getParamValue<string>('toLang')
  }
}
