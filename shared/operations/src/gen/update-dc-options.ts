import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateDcOptionsValues {
  dcOptions: Array<any>
}

export class UpdateDcOptions extends TLConstructor<UpdateDcOptionsValues> {
  static override CONSTRUCTOR_ID: number = -1906403213
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'dc_options',
      type: 'DcOption',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get dcOptions(): Array<any> {
    return this.getParamValue<Array<any>>('dcOptions')
  }
}
