import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface KeyboardButtonSwitchInlineValues {
  flags: any
  samePeer: boolean
  text: string
  query: string
  peerTypes: Array<any>
}

export class KeyboardButtonSwitchInline extends TLConstructor<KeyboardButtonSwitchInlineValues> {
  static override CONSTRUCTOR_ID: number = -1816527947
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
      name: 'same_peer',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'text',
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
      name: 'query',
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
      name: 'peer_types',
      type: 'InlineQueryPeerType',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get samePeer(): boolean {
    return this.getParamValue<boolean>('samePeer')
  }

  get text(): string {
    return this.getParamValue<string>('text')
  }

  get query(): string {
    return this.getParamValue<string>('query')
  }

  get peerTypes(): Array<any> {
    return this.getParamValue<Array<any>>('peerTypes')
  }
}
