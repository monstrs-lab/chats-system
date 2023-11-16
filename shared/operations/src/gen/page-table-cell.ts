import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageTableCellValues {
  flags: any
  header: boolean
  alignCenter: boolean
  alignRight: boolean
  valignMiddle: boolean
  valignBottom: boolean
  text: any
  colspan: number
  rowspan: number
}

export class PageTableCell extends TLConstructor<PageTableCellValues> {
  static override CONSTRUCTOR_ID: number = 878078826
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'header',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'align_center',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'align_right',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'valign_middle',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'valign_bottom',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'text',
      type: 'RichText',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'colspan',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'rowspan',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get header(): boolean {
    return this.getParamValue<boolean>('header')
  }

  get alignCenter(): boolean {
    return this.getParamValue<boolean>('alignCenter')
  }

  get alignRight(): boolean {
    return this.getParamValue<boolean>('alignRight')
  }

  get valignMiddle(): boolean {
    return this.getParamValue<boolean>('valignMiddle')
  }

  get valignBottom(): boolean {
    return this.getParamValue<boolean>('valignBottom')
  }

  get text(): any {
    return this.getParamValue<any>('text')
  }

  get colspan(): number {
    return this.getParamValue<number>('colspan')
  }

  get rowspan(): number {
    return this.getParamValue<number>('rowspan')
  }
}
