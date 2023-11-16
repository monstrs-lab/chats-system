import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputFileLocationValues {
  volumeId: bigint
  localId: number
  secret: bigint
  fileReference: Buffer
}

export class InputFileLocation extends TLConstructor<InputFileLocationValues> {
  static override CONSTRUCTOR_ID: number = -539317279
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'volume_id',
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
      name: 'local_id',
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
      name: 'secret',
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
      name: 'file_reference',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get volumeId(): bigint {
    return this.getParamValue<bigint>('volumeId')
  }

  get localId(): number {
    return this.getParamValue<number>('localId')
  }

  get secret(): bigint {
    return this.getParamValue<bigint>('secret')
  }

  get fileReference(): Buffer {
    return this.getParamValue<Buffer>('fileReference')
  }
}
