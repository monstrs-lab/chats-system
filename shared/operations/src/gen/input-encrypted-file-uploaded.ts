import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputEncryptedFileUploadedValues {
  id: bigint
  parts: number
  md5Checksum: string
  keyFingerprint: number
}

export class InputEncryptedFileUploaded extends TLConstructor<InputEncryptedFileUploadedValues> {
  static override CONSTRUCTOR_ID: number = 1690108678
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'parts',
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
      name: 'md5_checksum',
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
      name: 'key_fingerprint',
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

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get parts(): number {
    return this.getParamValue<number>('parts')
  }

  get md5Checksum(): string {
    return this.getParamValue<string>('md5Checksum')
  }

  get keyFingerprint(): number {
    return this.getParamValue<number>('keyFingerprint')
  }
}
