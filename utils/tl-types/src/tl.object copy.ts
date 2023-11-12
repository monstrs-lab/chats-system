import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { paramToBytes }             from './param.utils.js'

import { BinaryReader } from './binary.reader.js';

function getArgFromReader(reader: BinaryReader, arg: TLSchemaParamParsed): any {
  if (arg.isVector) {
      if (arg.useVectorId) {
          reader.readInt();
      }

      const temp = [];
      const len = reader.readInt();

      arg.isVector = false;

      for (let i = 0; i < len; i++) {
          temp.push(getArgFromReader(reader, arg));
      }

      arg.isVector = true;

      return temp;
  } else if (arg.flagIndicator) {
      return reader.readInt();
  } else {
      switch (arg.type) {
          case 'int':
              return reader.readInt();
          case 'long':
              return reader.readLong();
          case 'int128':
              return reader.readLargeInt(128);
          case 'int256':
              return reader.readLargeInt(256);
          case 'double':
              return reader.readDouble();
          case 'string':
              return reader.readString();
          case 'Bool':
              return reader.readBool();
          case 'true':
              return true;
          case 'bytes':
              return reader.readBytes();
          case 'date':
              return reader.readDate();
          default:
              if (!arg.skipConstructorId) {
                  return reader.readObject();
              } else {
                  throw new Error(`Unknown type ${arg}`);
              }
      }
  }
}

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
    return new this.constructor(values)
  }

  getParamValue(name: string): any {
    // @ts-expect-error
    return this[name]
  }

  getBytes() {
    const c = Buffer.alloc(4)

    c.writeUInt32LE(this.constructorId, 0)

    const buffers = [c]

    for (const param of this.params) {
      if (param.isFlag) {
        const value = this.getParamValue(param.name)

        if ((value === false && param.type === 'true') || value === undefined) {
          continue
        }
      }

      if (param.isVector) {
        if (param.useVectorId) {
          buffers.push(Buffer.from('15c4b51c', 'hex'))
        }

        const value = this.getParamValue(param.name)
        const l = Buffer.alloc(4)

        l.writeInt32LE(value.length, 0)

        buffers.push(l, Buffer.concat(value.map((x: unknown) => paramToBytes(x, param.type))))
      } else if (param.flagIndicator) {
        if (!Object.values(this.params).some((f) => f.isFlag)) {
          buffers.push(Buffer.alloc(4))
        } else {
          /*
                        let flagCalculate = 0;
                        for (const f in argsConfig) {
                            if (argsConfig[f].isFlag) {
                                if ((this[f] === false && argsConfig[f].type === 'true')
                                    || this[f] === undefined) {
                                    flagCalculate |= 0;
                                } else {
                                    flagCalculate |= 1 << argsConfig[f].flagIndex;
                                }
                            }
                        }
                        const f = Buffer.alloc(4);
                        f.writeUInt32LE(flagCalculate, 0);
                        buffers.push(f);
                        */
        }
      } else {
        const value = this.getParamValue(param.name)

        buffers.push(paramToBytes(value, param.type))

        if (value && typeof value.getBytes === 'function') {
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

export interface TLObjectConstructor {
  new (...args: any[]): TLObject
}
