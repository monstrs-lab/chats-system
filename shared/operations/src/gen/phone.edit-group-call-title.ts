import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneEditGroupCallTitleValues {
  call: any
  title: string
}

export class PhoneEditGroupCallTitle extends TLMethod<PhoneEditGroupCallTitleValues> {
  static override CONSTRUCTOR_ID = 480685066
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
      name: 'title',
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

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
