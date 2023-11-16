import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionRequestedPeerValues {
  buttonId: number
  peer: any
}

export class MessageActionRequestedPeer extends TLConstructor<MessageActionRequestedPeerValues> {
  static override CONSTRUCTOR_ID: number = -25742243
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
      name: 'peer',
      type: 'Peer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get buttonId(): number {
    return this.getParamValue<number>('buttonId')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }
}
