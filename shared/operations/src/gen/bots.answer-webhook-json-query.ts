import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsAnswerWebhookJSONQueryValues {
  queryId: bigint
  data: any
}

export class BotsAnswerWebhookJSONQuery extends TLMethod<BotsAnswerWebhookJSONQueryValues> {
  static override CONSTRUCTOR_ID = -434028723
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'query_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
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

  get queryId(): bigint {
    return this.getParamValue<bigint>('queryId')
  }

  get data(): any {
    return this.getParamValue<any>('data')
  }
}
