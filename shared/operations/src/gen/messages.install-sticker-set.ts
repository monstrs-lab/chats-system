import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesInstallStickerSetValues {
  stickerset: any
  archived: any
}

export class MessagesInstallStickerSet extends TLMethod<MessagesInstallStickerSetValues> {
  static override CONSTRUCTOR_ID = -946871200
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'stickerset',
      type: 'InputStickerSet',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'archived',
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

  get stickerset(): any {
    return this.getParamValue<any>('stickerset')
  }

  get archived(): any {
    return this.getParamValue<any>('archived')
  }
}