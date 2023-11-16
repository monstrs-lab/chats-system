import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPhoneContactValues {
  clientId: bigint
  phone: string
  firstName: string
  lastName: string
}

export class InputPhoneContact extends TLConstructor<InputPhoneContactValues> {
  static override CONSTRUCTOR_ID: number = -208488460
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'client_id',
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
      name: 'phone',
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
      name: 'first_name',
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
      name: 'last_name',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get clientId(): bigint {
    return this.getParamValue<bigint>('clientId')
  }

  get phone(): string {
    return this.getParamValue<string>('phone')
  }

  get firstName(): string {
    return this.getParamValue<string>('firstName')
  }

  get lastName(): string {
    return this.getParamValue<string>('lastName')
  }
}
