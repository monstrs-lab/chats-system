import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateBotStoppedValues {
  userId: bigint
  date: number
  stopped: any
  qts: number
}

export class UpdateBotStopped extends TLConstructor<UpdateBotStoppedValues> {
  static override CONSTRUCTOR_ID: number = -997782967
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'user_id',
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
    {
      name: 'stopped',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'qts',
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

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get stopped(): any {
    return this.getParamValue<any>('stopped')
  }

  get qts(): number {
    return this.getParamValue<number>('qts')
  }
}