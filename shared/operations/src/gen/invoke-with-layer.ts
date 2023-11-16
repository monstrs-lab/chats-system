import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface InvokeWithLayerValues {
  layer: number
  query: any
}

export class InvokeWithLayer extends TLMethod<InvokeWithLayerValues> {
  static override CONSTRUCTOR_ID = -627372787
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'layer',
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
      name: 'query',
      type: 'X',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get layer(): number {
    return this.getParamValue<number>('layer')
  }

  get query(): any {
    return this.getParamValue<any>('query')
  }
}
