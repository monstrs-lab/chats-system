import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StatsGraphAsyncValues {
  token: string
}

export class StatsGraphAsync extends TLConstructor<StatsGraphAsyncValues> {
  static override CONSTRUCTOR_ID: number = 1244130093
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'token',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get token(): string {
    return this.getParamValue<string>('token')
  }
}
