import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface KeyboardButtonRequestPeerValues {
  text: string
  buttonId: number
  peerType: any
}

export class KeyboardButtonRequestPeer extends TLConstructor<KeyboardButtonRequestPeerValues> {
  static override CONSTRUCTOR_ID: number = 218842764
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
      name: 'button_id',
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
      name: 'peer_type',
      type: 'RequestPeerType',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get text(): string {
    return this.getParamValue<string>('text')
  }

  get buttonId(): number {
    return this.getParamValue<number>('buttonId')
  }

  get peerType(): any {
    return this.getParamValue<any>('peerType')
  }
}
