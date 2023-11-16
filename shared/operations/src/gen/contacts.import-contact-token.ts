import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsImportContactTokenValues {
  token: string
}

export class ContactsImportContactToken extends TLMethod<ContactsImportContactTokenValues> {
  static override CONSTRUCTOR_ID = 318789512
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'token',
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

  get token(): string {
    return this.getParamValue<string>('token')
  }
}
