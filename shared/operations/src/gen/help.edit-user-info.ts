import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpEditUserInfoValues {
  userId: any
  message: string
  entities: Array<any>
}

export class HelpEditUserInfo extends TLMethod<HelpEditUserInfoValues> {
  static override CONSTRUCTOR_ID = 1723407216
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
    {
      name: 'message',
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
      name: 'entities',
      type: 'MessageEntity',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get userId(): any {
    return this.getParamValue<any>('userId')
  }

  get message(): string {
    return this.getParamValue<string>('message')
  }

  get entities(): Array<any> {
    return this.getParamValue<Array<any>>('entities')
  }
}
