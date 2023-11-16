import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface GroupCallParticipantVideoValues {
  flags: any
  paused: boolean
  endpoint: string
  sourceGroups: Array<any>
  audioSource: number
}

export class GroupCallParticipantVideo extends TLConstructor<GroupCallParticipantVideoValues> {
  static override CONSTRUCTOR_ID: number = 1735736008
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
      name: 'paused',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'endpoint',
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
      name: 'source_groups',
      type: 'GroupCallParticipantVideoSourceGroup',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'audio_source',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get paused(): boolean {
    return this.getParamValue<boolean>('paused')
  }

  get endpoint(): string {
    return this.getParamValue<string>('endpoint')
  }

  get sourceGroups(): Array<any> {
    return this.getParamValue<Array<any>>('sourceGroups')
  }

  get audioSource(): number {
    return this.getParamValue<number>('audioSource')
  }
}
