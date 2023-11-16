import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecureValueErrorReverseSideValues {
  type: any
  fileHash: Buffer
  text: string
}

export class SecureValueErrorReverseSide extends TLConstructor<SecureValueErrorReverseSideValues> {
  static override CONSTRUCTOR_ID: number = -2037765467
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'type',
      type: 'SecureValueType',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'file_hash',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'text',
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

  get type(): any {
    return this.getParamValue<any>('type')
  }

  get fileHash(): Buffer {
    return this.getParamValue<Buffer>('fileHash')
  }

  get text(): string {
    return this.getParamValue<string>('text')
  }
}