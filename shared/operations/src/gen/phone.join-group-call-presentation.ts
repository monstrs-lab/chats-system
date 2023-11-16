import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneJoinGroupCallPresentationValues {
  call: any
  params: any
}

export class PhoneJoinGroupCallPresentation extends TLMethod<PhoneJoinGroupCallPresentationValues> {
  static override CONSTRUCTOR_ID = -873829436
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
      name: 'params',
      type: 'DataJSON',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get params(): any {
    return this.getParamValue<any>('params')
  }
}
