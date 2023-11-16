import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsToggleTopPeersValues {
  enabled: any
}

export class ContactsToggleTopPeers extends TLMethod<ContactsToggleTopPeersValues> {
  static override CONSTRUCTOR_ID = -2062238246
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'enabled',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get enabled(): any {
    return this.getParamValue<any>('enabled')
  }
}
