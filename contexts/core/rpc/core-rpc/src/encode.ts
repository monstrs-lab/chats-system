export class EncodeBuffer {
    #buffer: Buffer

    constructor(cap: number) {
        this.#buffer = Buffer.alloc(cap)
    }

    offset(): number {
        return this.#buffer.length
    }

    long(s: bigint): void {
        const buffer = Buffer.alloc(8)
        
        buffer.writeBigUInt64LE(s)
        
        this.#buffer = Buffer.concat([this.#buffer, buffer])
    }

    int(s: number): void {
        const buffer = Buffer.alloc(4)

        buffer.writeUint32LE(s)

        this.#buffer = Buffer.concat([this.#buffer, buffer])
    }

    intOffset(offset: number, s: number): void {
        this.#buffer.writeUint32LE(s, offset)
    }

}
