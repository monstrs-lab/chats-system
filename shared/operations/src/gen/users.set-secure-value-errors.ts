import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface UsersSetSecureValueErrorsValues {
  id: any
  errors: Array<any>
}

export class UsersSetSecureValueErrors extends TLMethod<UsersSetSecureValueErrorsValues> {
  static override CONSTRUCTOR_ID = -1865902923
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
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
      name: 'errors',
      type: 'SecureValueError',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get id(): any {
    return this.getParamValue<any>('id')
  }

  get errors(): Array<any> {
    return this.getParamValue<Array<any>>('errors')
  }
}
