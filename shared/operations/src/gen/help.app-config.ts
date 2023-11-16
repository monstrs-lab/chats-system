import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpAppConfigValues {
  hash: number
  config: any
}

export class HelpAppConfig extends TLConstructor<HelpAppConfigValues> {
  static override CONSTRUCTOR_ID: number = -585598930
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'hash',
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
      name: 'config',
      type: 'JSONValue',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get hash(): number {
    return this.getParamValue<number>('hash')
  }

  get config(): any {
    return this.getParamValue<any>('config')
  }
}
