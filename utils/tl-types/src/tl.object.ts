import type { TLSchemaParamParsed }       from '@chats-system/tl-json-schema-parser'

import { fromDateToBuffer }               from '@monstrs/buffer-utils'
import { fromBigIntToSignedLittleBuffer } from '@monstrs/buffer-utils'
import camelcase from 'camelcase'

import { BinaryReader }                   from './binary.reader.js'
import { serializeBytes }                 from './binary.utils.js'

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

  getParamValue(param: TLSchemaParamParsed): any {
    const name = camelcase(param.name, {
      pascalCase: false,
      preserveConsecutiveUppercase: true,
    })

    // @ts-expect-error
    return this[name]
  }

  getParamValueBytes(paramValue: any, type: string) {
    switch (type) {
      case 'int': {
        const int = Buffer.alloc(4)

        int.writeInt32LE(paramValue, 0)

        return int
      }
      case 'long':
        return fromBigIntToSignedLittleBuffer(paramValue, 8)
      case 'int128':
        return fromBigIntToSignedLittleBuffer(paramValue, 16)
      case 'int256':
        return fromBigIntToSignedLittleBuffer(paramValue, 32)
      case 'double': {
        const double = Buffer.alloc(8)

        double.writeDoubleLE(paramValue, 0)

        return double
      }
      case 'string':
        return serializeBytes(paramValue)
      case 'Bool':
        return paramValue ? Buffer.from('b5757299', 'hex') : Buffer.from('379779bc', 'hex')
      case 'true':
        return Buffer.alloc(0)
      case 'bytes':
        return serializeBytes(paramValue)
      case 'date':
        return fromDateToBuffer(paramValue)
      default:
        return paramValue.getBytes()
    }
  }

  getBytes(): Buffer {
    const params: Array<TLSchemaParamParsed> = (this.constructor as any).PARAMS
    const constructorId: number = (this.constructor as any).CONSTRUCTOR_ID

    const constructorIdBuffer = Buffer.alloc(4)

    constructorIdBuffer.writeInt32LE(constructorId, 0)

    const buffers: Array<Buffer> = [constructorIdBuffer]

    for (const param of params) {
      if (param.isFlag) {
        if (
          (this.getParamValue(param) === false && param.type === 'true') ||
          this.getParamValue(param) === undefined
        ) {
          continue
        }
      }

      if (param.isVector) {
        if (param.useVectorId) {
          buffers.push(Buffer.from('15c4b51c', 'hex'))
        }

        const vectorLength = Buffer.alloc(4)

        vectorLength.writeInt32LE(this.getParamValue(param).length, 0)

        buffers.push(
          vectorLength,
          Buffer.concat(
            this.getParamValue(param).map((x: any) => this.getParamValueBytes(x, param.type))
          )
        )
      } else if (param.flagIndicator) {
        if (!params.some((param) => param.isFlag)) {
          buffers.push(Buffer.alloc(4))
        } else {
          let flagCalculate = 0

          for (const flagParam of params) {
            if (flagParam.isFlag) {
              if (
                (this.getParamValue(flagParam) === false && flagParam.type === 'true') ||
                this.getParamValue(flagParam) === undefined
              ) {
                flagCalculate |= 0
              } else {
                flagCalculate |= 1 << flagParam.flagIndex
              }
            }
          }

          const flagBuffer = Buffer.alloc(4)

          flagBuffer.writeUInt32LE(flagCalculate, 0)

          buffers.push(flagBuffer)
        }
      } else {
        buffers.push(this.getParamValueBytes(this.getParamValue(param), param.type))

        if (typeof this.getParamValue(param)?.getBytes === 'function') {
          const boxed = param.type.charAt(param.type.indexOf('.') + 1)

          if (boxed !== boxed.toUpperCase()) {
            buffers.shift()
          }
        }
      }
    }

    return Buffer.concat(buffers)
  }
}
