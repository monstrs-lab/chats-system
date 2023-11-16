import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsToggleUsernameValues {
  bot: any
  username: string
  active: any
}

export class BotsToggleUsername extends TLMethod<BotsToggleUsernameValues> {
  static override CONSTRUCTOR_ID = 87861619
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'bot',
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
      name: 'username',
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
      name: 'active',
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

  get bot(): any {
    return this.getParamValue<any>('bot')
  }

  get username(): string {
    return this.getParamValue<string>('username')
  }

  get active(): any {
    return this.getParamValue<any>('active')
  }
}
