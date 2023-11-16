import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateGroupCallParticipantsValues {
  call: any
  participants: Array<any>
  version: number
}

export class UpdateGroupCallParticipants extends TLConstructor<UpdateGroupCallParticipantsValues> {
  static override CONSTRUCTOR_ID: number = -219423922
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
      name: 'participants',
      type: 'GroupCallParticipant',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'version',
      type: 'int',
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

  get participants(): Array<any> {
    return this.getParamValue<Array<any>>('participants')
  }

  get version(): number {
    return this.getParamValue<number>('version')
  }
}
