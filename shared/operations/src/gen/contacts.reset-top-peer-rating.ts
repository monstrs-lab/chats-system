import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsResetTopPeerRatingValues {
  category: any
  peer: any
}

export class ContactsResetTopPeerRating extends TLMethod<ContactsResetTopPeerRatingValues> {
  static override CONSTRUCTOR_ID = 451113900
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'category',
      type: 'TopPeerCategory',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'peer',
      type: 'InputPeer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get category(): any {
    return this.getParamValue<any>('category')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }
}
