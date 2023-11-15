import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

export class PingDelayDisconnect extends TLMethod {
  static override CONSTRUCTOR_ID = -213746804
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'ping_id',
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
      name: 'disconnect_delay',
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

  constructor(
    public readonly pingId: bigint,
    public readonly disconnectDelay: number
  ) {
    super()
  }
}
