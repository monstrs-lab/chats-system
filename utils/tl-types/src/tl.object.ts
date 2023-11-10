import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'

import { paramToBytes }             from './param.utils.js'

export abstract class TLObject {
  abstract constructorId: number

  abstract type: string

  abstract params: Array<TLSchemaParamParsed>

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
