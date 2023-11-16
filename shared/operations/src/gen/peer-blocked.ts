import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PeerBlockedValues {
  peerId: any
  date: number
}

export class PeerBlocked extends TLConstructor<PeerBlockedValues> {
  static override CONSTRUCTOR_ID: number = -386039788
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
      name: 'date',
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

  get peerId(): any {
    return this.getParamValue<any>('peerId')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }
}
