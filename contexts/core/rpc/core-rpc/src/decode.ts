export class DecodeBuffer {
    #buffer: Buffer
	#offset: number
	#size: number
	#error?: Error

    constructor(buffer: Buffer) {
        this.#buffer = buffer
        this.#offset = 0
        this.#size = buffer.length
    }

    get error(): Error | undefined {
        return this.#error
    }

    long(): bigint {
        if (this.#error) {
            return BigInt(0)
        }

        if (this.#offset + 8 > this.#size) {
            this.#error = new Error("DecodeLong");

            return BigInt(0)
        }

        const x = this.#buffer.readBigUInt64LE(this.#offset)

        this.#offset += 8;

        return x;
    }

    int(): number {
        if (this.#error) {
            return 0;
        }

        if (this.#offset + 4 > this.#size) {
            this.#error = new Error("DecodeInt")

            return 0;
        }

        const x = this.#buffer.readUInt32LE(this.#offset)

        this.#offset += 4;

        return x;
    }

    bytes(size: number): Buffer | undefined {
        if (this.#error) {
            return undefined
        }

        if (this.#offset + size > this.#size) {
            this.#error = new Error('DecodeBytes')

            return undefined
        }

        const buffer = Buffer.alloc(size)

        this.#buffer.copy(buffer, 0, this.#offset, this.#offset + size)

        this.#offset += size

        return buffer
    }

    object(): TLObject | null {
        const classID = this.int();

        if (this.#error !== null) {
            return null;
        }

        const result = newTLObjectByClassID(classID);

        if (result === null) {
            this.#error = new Error(`can't find registered classId: ${classID.toString(16)}`);

            return null;
        }

        const error = result.decode(this);

        if (error !== null) {
            this.#error = new Error(`object(${classID.toString(16)}) decode error: ${error}`);
        }

        return result;
    }
}

type TLObject = any