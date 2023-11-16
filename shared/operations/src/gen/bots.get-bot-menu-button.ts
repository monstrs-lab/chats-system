import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsGetBotMenuButtonValues {
  userId: any
}

export class BotsGetBotMenuButton extends TLMethod<BotsGetBotMenuButtonValues> {
  static override CONSTRUCTOR_ID = -1671369944
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'user_id',
      type: 'InputUser',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get userId(): any {
    return this.getParamValue<any>('userId')
  }
}
