import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesFaveStickerValues {
  id: any
  unfave: any
}

export class MessagesFaveSticker extends TLMethod<MessagesFaveStickerValues> {
  static override CONSTRUCTOR_ID = -1174420133
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'InputDocument',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'unfave',
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

  get id(): any {
    return this.getParamValue<any>('id')
  }

  get unfave(): any {
    return this.getParamValue<any>('unfave')
  }
}
