import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputReportReasonFakeValues {}

export class InputReportReasonFake extends TLConstructor<InputReportReasonFakeValues> {
  static override CONSTRUCTOR_ID: number = -170010905
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
