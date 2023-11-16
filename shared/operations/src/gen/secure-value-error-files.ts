import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecureValueErrorFilesValues {
  type: any
  fileHash: Array<Buffer>
  text: string
}

export class SecureValueErrorFiles extends TLConstructor<SecureValueErrorFilesValues> {
  static override CONSTRUCTOR_ID: number = 1717706985
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
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
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

  get fileHash(): Array<Buffer> {
    return this.getParamValue<Array<Buffer>>('fileHash')
  }

  get text(): string {
    return this.getParamValue<string>('text')
  }
}
