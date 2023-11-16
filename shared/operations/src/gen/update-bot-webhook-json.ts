import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateBotWebhookJSONValues {
  data: any
}

export class UpdateBotWebhookJSON extends TLConstructor<UpdateBotWebhookJSONValues> {
  static override CONSTRUCTOR_ID: number = -2095595325
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'data',
      type: 'DataJSON',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get data(): any {
    return this.getParamValue<any>('data')
  }
}
