import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhoneExportedGroupCallInviteValues {
  link: string
}

export class PhoneExportedGroupCallInvite extends TLConstructor<PhoneExportedGroupCallInviteValues> {
  static override CONSTRUCTOR_ID: number = 541839704
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'link',
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

  get link(): string {
    return this.getParamValue<string>('link')
  }
}
