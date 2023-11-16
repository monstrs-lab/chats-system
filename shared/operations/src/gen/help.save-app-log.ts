import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpSaveAppLogValues {
  events: Array<any>
}

export class HelpSaveAppLog extends TLMethod<HelpSaveAppLogValues> {
  static override CONSTRUCTOR_ID = 1862465352
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'events',
      type: 'InputAppEvent',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get events(): Array<any> {
    return this.getParamValue<Array<any>>('events')
  }
}
