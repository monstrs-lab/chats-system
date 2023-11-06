import type { DecodeBuffer } from './decode.js'
import type { EncodeBuffer } from './encode.js'

export interface TLObject {
    encode(encodeBuffer: EncodeBuffer, layer: number): void

    decode(decodeBuffer: DecodeBuffer): Error | undefined

    toString(): string

    toDebugString(): string
}
