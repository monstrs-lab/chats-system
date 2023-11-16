import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatePeerBlockedValues {
  peerId: any
  blocked: any
}

export class UpdatePeerBlocked extends TLConstructor<UpdatePeerBlockedValues> {
  static override CONSTRUCTOR_ID: number = 610945826
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer_id',
      type: 'Peer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'blocked',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get peerId(): any {
    return this.getParamValue<any>('peerId')
  }

  get blocked(): any {
    return this.getParamValue<any>('blocked')
  }
}
