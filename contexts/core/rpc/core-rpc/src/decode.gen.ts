import { Binary } from 'binary';
import { CRC32_vector, CRC32_boolTrue, CRC32_boolFalse } from './crc32';

class DecodeBuf {
    private buf: Uint8Array;
    private off: number;
    private size: number;
    private err: Error | null;

    constructor(b: Uint8Array) {
        this.buf = b;
        this.off = 0;
        this.size = b.length;
        this.err = null;
    }

    public getOffset(): number {
        return this.off;
    }

    public getSize(): number {
        return this.size;
    }

    public getError(): Error | null {
        return this.err;
    }

    public setError(err: Error): void {
        this.err = err;
    }

    public long(): number {
        if (this.err !== null) {
            return 0;
        }
        if (this.off + 8 > this.size) {
            this.err = new Error("DecodeLong");
            return 0;
        }
        const x = Binary.readLong(this.buf, this.off);
        this.off += 8;
        return x;
    }

    public double(): number {
        if (this.err !== null) {
            return 0;
        }
        if (this.off + 8 > this.size) {
            this.err = new Error("DecodeDouble");
            return 0;
        }
        const x = Binary.readDouble(this.buf, this.off);
        this.off += 8;
        return x;
    }

    public int(): number {
        if (this.err !== null) {
            return 0;
        }
        if (this.off + 4 > this.size) {
            this.err = new Error("DecodeInt");
            return 0;
        }
        const x = Binary.readInt32(this.buf, this.off);
        this.off += 4;
        return x;
    }

    public uint(): number {
        if (this.err !== null) {
            return 0;
        }
        if (this.off + 4 > this.size) {
            this.err = new Error("DecodeUInt");
            return 0;
        }
        const x = Binary.readUint32(this.buf, this.off);
        this.off += 4;
        return x;
    }

    public bytes(size: number): Uint8Array | null {
        if (this.err !== null) {
            return null;
        }
        if (this.off + size > this.size) {
            this.err = new Error("DecodeBytes");
            return null;
        }
        const x = this.buf.slice(this.off, this.off + size);
        this.off += size;
        return x;
    }

    public stringBytes(): Uint8Array | null {
        if (this.err !== null) {
            return null;
        }
        let size: number;
        let padding: number;
        if (this.off + 1 > this.size) {
            this.err = new Error("DecodeStringBytes");
            return null;
        }
        size = this.buf[this.off];
        this.off++;
        padding = (4 - ((size + 1) % 4)) & 3;
        if (size === 254) {
            if (this.off + 3 > this.size) {
                this.err = new Error("DecodeStringBytes");
                return null;
            }
            size = this.buf[this.off] | (this.buf[this.off + 1] << 8) | (this.buf[this.off + 2] << 16);
            this.off += 3;
            padding = (4 - size % 4) & 3;
        }
        if (this.off + size > this.size) {
            this.err = new Error(`DecodeStringBytes - Wrong size, (${this.off}, ${size}, ${this.size})`);
            return null;
        }
        const x = this.buf.slice(this.off, this.off + size);
        this.off += size;
        if (this.off + padding > this.size) {
            this.err = new Error("DecodeStringBytes: Wrong padding");
            return null;
        }
        this.off += padding;
        return x;
    }

    public string(): string {
        const b = this.stringBytes();
        if (this.err !== null) {
            return "";
        }
        const x = new TextDecoder().decode(b);
        return x;
    }

    public bigInt(): bigint | null {
        const b = this.stringBytes();
        if (this.err !== null) {
            return null;
        }
        const y = new Uint8Array(b.length + 1);
        y[0] = 0;
        y.set(b, 1);
        const x = BigInt(`0x${Array.from(y).map((byte) => byte.toString(16).padStart(2, '0')).join('')}`);
        return x;
    }

    public vectorInt(): number[] | null {
        const constructor = this.int();
        if (this.err !== null) {
            return null;
        }
        if (constructor !== CRC32_vector) {
            this.err = new Error(`DecodeVectorInt: Wrong constructor (0x${constructor.toString(16)})`);
            return null;
        }
        const size = this.int();
        if (this.err !== null) {
            return null;
        }
        if (size < 0) {
            this.err = new Error("DecodeVectorInt: Wrong size");
            return null;
        }
        const x: number[] = [];
        let i = 0;
        while (i < size) {
            const y = this.int();
            if (this.err !== null) {
                return null;
            }
            x[i] = y;
            i++;
        }
        return x;
    }

    public vectorLong(): bigint[] | null {
        const constructor = this.int();
        if (this.err !== null) {
            return null;
        }
        if (constructor !== CRC32_vector) {
            this.err = new Error(`DecodeVectorLong: Wrong constructor (0x${constructor.toString(16)})`);
            return null;
        }
        const size = this.int();
        if (this.err !== null) {
            return null;
        }
        if (size < 0) {
            this.err = new Error("DecodeVectorLong: Wrong size");
            return null;
        }
        const x: bigint[] = [];
        let i = 0;
        while (i < size) {
            const y = this.long();
            if (this.err !== null) {
                return null;
            }
            x[i] = y;
            i++;
        }
        return x;
    }

    public vectorString(): string[] | null {
        const constructor = this.int();
        if (this.err !== null) {
            return null;
        }
        if (constructor !== CRC32_vector) {
            this.err = new Error(`DecodeVectorString: Wrong constructor (0x${constructor.toString(16)})`);
            return null;
        }
        const size = this.int();
        if (this.err !== null) {
            return null;
        }
        if (size < 0) {
            this.err = new Error("DecodeVectorString: Wrong size");
            return null;
        }
        const x: string[] = [];
        let i = 0;
        while (i < size) {
            const y = this.string();
            if (this.err !== null) {
                return null;
            }
            x[i] = y;
            i++;
        }
        return x;
    }

    public vectorBytes(): Uint8Array[] | null {
        const constructor = this.int();
        if (this.err !== null) {
            return null;
        }
        if (constructor !== CRC32_vector) {
            this.err = new Error(`DecodeVectorBytes: Wrong constructor (0x${constructor.toString(16)})`);
            return null;
        }
        const size = this.int();
        if (this.err !== null) {
            return null;
        }
        if (size < 0) {
            this.err = new Error("DecodeVectorBytes: Wrong size");
            return null;
        }
        const x: Uint8Array[] = [];
        let i = 0;
        while (i < size) {
            const y = this.stringBytes();
            if (this.err !== null) {
                return null;
            }
            x[i] = y;
            i++;
        }
        return x;
    }

    public bool(): boolean {
        const constructor = this.int();
        if (this.err !== null) {
            return false;
        }
        switch (constructor) {
            case CRC32_boolTrue:
                return true;
            case CRC32_boolFalse:
                return false;
        }
        return false;
    }

    public object(): TLObject | null {
        const classID = this.int();
        if (this.err !== null) {
            return null;
        }
        const r = newTLObjectByClassID(classID);
        if (r === null) {
            this.err = new Error(`can't find registered classId: ${classID.toString(16)}`);
            return null;
        }
        const err = r.decode(this);
        if (err !== null) {
            this.err = new Error(`object(${classID.toString(16)}) decode error: ${err}`);
        }
        return r;
    }
}

function newTLObjectByClassID(classID: number): TLObject | null {
    // Implement this function to return the appropriate TLObject based on the classID
    return null;
}

interface TLObject {
    decode(buf: DecodeBuf): Error | null;
}

export { DecodeBuf, TLObject };


