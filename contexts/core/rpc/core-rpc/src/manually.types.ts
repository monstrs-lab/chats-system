import { TLObject } from "./core.types.js";
import { DecodeBuffer } from "./decode.js";
import { EncodeBuffer } from './encode.js'

export class TLMessage2 implements TLObject {
    private msgId: bigint
    
    private seqNo: number
    
    private bytes: number
    
    private object: TLObject

    toString(): string {
        return `{message2#5bb8e511 - msg_id: ${this.msgId}, seq_no: ${this.seqNo}, object: ${JSON.stringify(this.object)}}`
    }

    toDebugString(): string {
        return this.toString()
    }

    encode(encodeBuffer: EncodeBuffer, layer: number): void {
        encodeBuffer.long(this.msgId)
        encodeBuffer.int(this.seqNo)

        const offset = encodeBuffer.offset()

        encodeBuffer.int(this.bytes)
        
        this.object.encode(encodeBuffer, layer)

        encodeBuffer.intOffset(offset, encodeBuffer.offset() - offset - 4)
    }

    decode(decodeBuffer: DecodeBuffer): Error | undefined {
        this.msgId = decodeBuffer.long()
        this.seqNo = decodeBuffer.int()
        this.bytes = decodeBuffer.int()

        const buffer = decodeBuffer.bytes(this.bytes)        

        if (!buffer) {
            return new Error('Decode')
        }

        const decodeBuffer2 = new DecodeBuffer(buffer)
        
        this.object = decodeBuffer2.object()

        if (!this.object) {
            return new Error(`decode core_message error: ${decodeBuffer2.error}`)
        }

        return decodeBuffer2.error
    }
}
