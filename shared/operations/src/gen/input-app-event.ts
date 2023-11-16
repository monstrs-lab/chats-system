import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputAppEventValues {
  time: number
  type: string
  peer: bigint
  data: any
}

export class InputAppEvent extends TLConstructor<InputAppEventValues> {
  static override CONSTRUCTOR_ID: number = 488313413
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'time',
      type: 'double',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'type',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'peer',
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

  get time(): number {
    return this.getParamValue<number>('time')
  }

  get type(): string {
    return this.getParamValue<string>('type')
  }

  get peer(): bigint {
    return this.getParamValue<bigint>('peer')
  }

  get data(): any {
    return this.getParamValue<any>('data')
  }
}
