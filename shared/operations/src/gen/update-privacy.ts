import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatePrivacyValues {
  key: any
  rules: Array<any>
}

export class UpdatePrivacy extends TLConstructor<UpdatePrivacyValues> {
  static override CONSTRUCTOR_ID: number = -298113238
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'key',
      type: 'PrivacyKey',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'rules',
      type: 'PrivacyRule',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get key(): any {
    return this.getParamValue<any>('key')
  }

  get rules(): Array<any> {
    return this.getParamValue<Array<any>>('rules')
  }
}
