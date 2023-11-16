import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsSendCustomRequestValues {
  customMethod: string
  params: any
}

export class BotsSendCustomRequest extends TLMethod<BotsSendCustomRequestValues> {
  static override CONSTRUCTOR_ID = -1440257555
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'custom_method',
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

  get customMethod(): string {
    return this.getParamValue<string>('customMethod')
  }

  get params(): any {
    return this.getParamValue<any>('params')
  }
}
