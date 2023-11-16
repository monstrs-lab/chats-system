import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatePendingJoinRequestsValues {
  peer: any
  requestsPending: number
  recentRequesters: Array<bigint>
}

export class UpdatePendingJoinRequests extends TLConstructor<UpdatePendingJoinRequestsValues> {
  static override CONSTRUCTOR_ID: number = 1885586395
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
    {
      name: 'requests_pending',
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
      name: 'recent_requesters',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get requestsPending(): number {
    return this.getParamValue<number>('requestsPending')
  }

  get recentRequesters(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('recentRequesters')
  }
}
