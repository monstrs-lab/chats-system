import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PingDelayDisconnectValues {
  pingId: bigint
  disconnectDelay: number
}

export class PingDelayDisconnect extends TLMethod<PingDelayDisconnectValues> {
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

  get pingId(): bigint {
    return this.getParamValue<bigint>('pingId')
  }

  get disconnectDelay(): number {
    return this.getParamValue<number>('disconnectDelay')
  }
}
