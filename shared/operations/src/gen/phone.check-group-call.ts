import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneCheckGroupCallValues {
  call: any
  sources: Array<number>
}

export class PhoneCheckGroupCall extends TLMethod<PhoneCheckGroupCallValues> {
  static override CONSTRUCTOR_ID = -1248003721
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'call',
      type: 'InputGroupCall',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'sources',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get sources(): Array<number> {
    return this.getParamValue<Array<number>>('sources')
  }
}
