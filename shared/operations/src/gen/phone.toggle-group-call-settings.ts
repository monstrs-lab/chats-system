import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneToggleGroupCallSettingsValues {
  flags: any
  resetInviteHash: boolean
  call: any
  joinMuted: any
}

export class PhoneToggleGroupCallSettings extends TLMethod<PhoneToggleGroupCallSettingsValues> {
  static override CONSTRUCTOR_ID = 1958458429
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'reset_invite_hash',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
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
      name: 'join_muted',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get resetInviteHash(): boolean {
    return this.getParamValue<boolean>('resetInviteHash')
  }

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get joinMuted(): any {
    return this.getParamValue<any>('joinMuted')
  }
}
