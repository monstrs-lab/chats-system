import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateLangPackValues {
  difference: any
}

export class UpdateLangPack extends TLConstructor<UpdateLangPackValues> {
  static override CONSTRUCTOR_ID: number = 1442983757
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'difference',
      type: 'LangPackDifference',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get difference(): any {
    return this.getParamValue<any>('difference')
  }
}
