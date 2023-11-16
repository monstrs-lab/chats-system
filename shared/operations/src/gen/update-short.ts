import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateShortValues {
  update: any
  date: number
}

export class UpdateShort extends TLConstructor<UpdateShortValues> {
  static override CONSTRUCTOR_ID: number = 2027216577
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'update',
      type: 'Update',
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

  get update(): any {
    return this.getParamValue<any>('update')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }
}
