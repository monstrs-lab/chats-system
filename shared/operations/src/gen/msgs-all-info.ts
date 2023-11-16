import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MsgsAllInfoValues {
  msgIds: Array<bigint>
  info: Buffer
}

export class MsgsAllInfo extends TLConstructor<MsgsAllInfoValues> {
  static override CONSTRUCTOR_ID: number = -1933520591
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'msg_ids',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'info',
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

  get msgIds(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('msgIds')
  }

  get info(): Buffer {
    return this.getParamValue<Buffer>('info')
  }
}
