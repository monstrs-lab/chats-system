import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhoneCallProtocolValues {
  flags: any
  udpP2P: boolean
  udpReflector: boolean
  minLayer: number
  maxLayer: number
  libraryVersions: Array<string>
}

export class PhoneCallProtocol extends TLConstructor<PhoneCallProtocolValues> {
  static override CONSTRUCTOR_ID: number = -58224696
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
      name: 'udp_p2p',
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
      name: 'udp_reflector',
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
      name: 'min_layer',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'max_layer',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'library_versions',
      type: 'string',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get udpP2P(): boolean {
    return this.getParamValue<boolean>('udpP2P')
  }

  get udpReflector(): boolean {
    return this.getParamValue<boolean>('udpReflector')
  }

  get minLayer(): number {
    return this.getParamValue<number>('minLayer')
  }

  get maxLayer(): number {
    return this.getParamValue<number>('maxLayer')
  }

  get libraryVersions(): Array<string> {
    return this.getParamValue<Array<string>>('libraryVersions')
  }
}