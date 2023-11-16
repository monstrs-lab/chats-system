import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsGetInactiveChannelsValues {}

export class ChannelsGetInactiveChannels extends TLMethod<ChannelsGetInactiveChannelsValues> {
  static override CONSTRUCTOR_ID = 300429806
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
