import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatePeerLocatedValues {
  peers: Array<any>
}

export class UpdatePeerLocated extends TLConstructor<UpdatePeerLocatedValues> {
  static override CONSTRUCTOR_ID: number = -1263546448
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peers',
      type: 'PeerLocated',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get peers(): Array<any> {
    return this.getParamValue<Array<any>>('peers')
  }
}
