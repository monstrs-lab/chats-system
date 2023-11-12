import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { BinaryReader }             from './binary.reader.js'

export abstract class TLObject {
  static CONSTRUCTOR_ID: number

  static PARAMS: Array<TLSchemaParamParsed> = []

  static readParamFromReader(reader: BinaryReader, param: TLSchemaParamParsed): any {
    if (param.isVector) {
      if (param.useVectorId) {
        reader.readInt()
      }

      const temp = []
      const len = reader.readInt()

      param.isVector = false

      for (let i = 0; i < len; i++) {
        temp.push(TLObject.readParamFromReader(reader, param))
      }

      param.isVector = true

      return temp
    }

    if (param.flagIndicator) {
      return reader.readInt()
    }

    switch (param.type) {
      case 'int':
        return reader.readInt()
      case 'long':
        return reader.readLong()
      case 'int128':
        return reader.readLargeInt(128)
      case 'int256':
        return reader.readLargeInt(256)
      case 'double':
        return reader.readDouble()
      case 'string':
        return reader.readString()
      case 'Bool':
        return reader.readBool()
      case 'true':
        return true
      case 'bytes':
        return reader.readBytes()
      case 'date':
        return reader.readDate()
      default:
        if (!param.skipConstructorId) {
          return reader.readObject()
        } else {
          throw new Error(`Unknown type ${param.name}`)
        }
    }
  }

  static fromReader(reader: BinaryReader) {
    const values: Record<string, any> = {}

    for (const param of this.PARAMS) {
      if (param.isFlag) {
        const flagGroupSuffix = param.flagGroup > 1 ? param.flagGroup : ''
        const flagGroup: any = this.PARAMS.find((flag) => flag.name === `flags${flagGroupSuffix}`)
        const flagValue = flagGroup & (1 << param.flagIndex)

        if (param.type === 'true') {
          values[param.name] = Boolean(flagValue)

          continue
        }

        values[param.name] = flagValue ? TLObject.readParamFromReader(reader, param) : undefined
      } else {
        values[param.name] = TLObject.readParamFromReader(reader, param)
      }
    }

    // @ts-expect-error
    return new this.prototype.constructor(...Object.values(values))
  }
}
