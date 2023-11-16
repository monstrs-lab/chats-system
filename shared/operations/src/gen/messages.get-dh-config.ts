import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetDhConfigValues {
  version: number
  randomLength: number
}

export class MessagesGetDhConfig extends TLMethod<MessagesGetDhConfigValues> {
  static override CONSTRUCTOR_ID = 651135312
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'version',
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
      name: 'random_length',
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

  get version(): number {
    return this.getParamValue<number>('version')
  }

  get randomLength(): number {
    return this.getParamValue<number>('randomLength')
  }
}
