import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HttpWaitValues {
  maxDelay: number
  waitAfter: number
  maxWait: number
}

export class HttpWait extends TLMethod<HttpWaitValues> {
  static override CONSTRUCTOR_ID = -1835453025
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'max_delay',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'wait_after',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'max_wait',
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

  get maxDelay(): number {
    return this.getParamValue<number>('maxDelay')
  }

  get waitAfter(): number {
    return this.getParamValue<number>('waitAfter')
  }

  get maxWait(): number {
    return this.getParamValue<number>('maxWait')
  }
}
