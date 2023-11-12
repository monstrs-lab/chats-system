import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { BinaryReader } from './binary.reader.js';
import { getArgFromReader } from './convert.utils.js'

export abstract class TLObject {
  static CONSTRUCTOR_ID: number

  static PARAMS: Array<TLSchemaParamParsed> = []

  static fromReader(reader: BinaryReader) {
    const values: Record<string, any> = {}

    for (const param of this.PARAMS) {
      if (param.isFlag) {
        const flagGroupSuffix = param.flagGroup > 1 ? param.flagGroup : '';
        const flagGroup: any = this.PARAMS.find(flag => flag.name === `flags${flagGroupSuffix}`)
        const flagValue = flagGroup & (1 << param.flagIndex);

        if (param.type === 'true') {
          values[param.name] = Boolean(flagValue)
          
          continue
        }

        values[param.name] = flagValue ? getArgFromReader(reader, param) : undefined
      } else {
        values[param.name] = getArgFromReader(reader, param)
      }
    }

    // @ts-expect-error
    return new this.prototype.constructor(...Object.values(values))
  }
}

export interface TLObjectConstructor {
  new (...args: any[]): TLObject
}
