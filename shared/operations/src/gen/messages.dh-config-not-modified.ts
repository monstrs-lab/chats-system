import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesDhConfigNotModifiedValues {
  random: Buffer
}

export class MessagesDhConfigNotModified extends TLConstructor<MessagesDhConfigNotModifiedValues> {
  static override CONSTRUCTOR_ID: number = -1058912715
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'random',
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

  get random(): Buffer {
    return this.getParamValue<Buffer>('random')
  }
}
