import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputBotInlineMessageID64Values {
  dcId: number
  ownerId: bigint
  id: number
  accessHash: bigint
}

export class InputBotInlineMessageID64 extends TLConstructor<InputBotInlineMessageID64Values> {
  static override CONSTRUCTOR_ID: number = -1227287081
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'dc_id',
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
      name: 'owner_id',
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
      name: 'id',
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
      name: 'access_hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get dcId(): number {
    return this.getParamValue<number>('dcId')
  }

  get ownerId(): bigint {
    return this.getParamValue<bigint>('ownerId')
  }

  get id(): number {
    return this.getParamValue<number>('id')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }
}
