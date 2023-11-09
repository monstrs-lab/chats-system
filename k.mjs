import { createDecipheriv, createCipheriv } from 'node:crypto'
//import BigInt from 'big-integer'

class BinaryReader {
  constructor(data) {
    this.stream = data
    this._last = undefined
    this.offset = 0
  }

  read(length = -1) {
    if (length === -1) {
      length = this.stream.length - this.offset
    }
    const result = this.stream.slice(this.offset, this.offset + length)
    this.offset += length
    if (result.length !== length) {
      throw Error(
        `No more data left to read (need ${length}, got ${result.length}: ${result}); last read ${this._last}`
      )
    }
    this._last = result
    return result
  }
}

/*
let body = request.getBytes();
        let msgId = this._state._getNewMsgId();
        const m = toSignedLittleBuffer(msgId, 8);
        const b = Buffer.alloc(4);
        b.writeInt32LE(body.length, 0);

        const res = Buffer.concat([
                Buffer.concat([Buffer.alloc(8), m, b]),
                body
        ]);

        // NativeBigInt {value: 7298814510833313652n} 20 'AAAAAAAAAAB0p693IJlKZRQAAADxjn6+N0PWquRj30jfgq0bORyXfQ==' 


        const crypto = require('./crypto');

class CTR {
    constructor(key, iv) {
        if (!Buffer.isBuffer(key) || !Buffer.isBuffer(iv) || iv.length !== 16) {
            throw new Error('Key and iv need to be a buffer');
        }

        this.cipher = crypto.createCipheriv('AES-256-CTR', key, iv);
    }

    encrypt(data) {
        return Buffer.from(this.cipher.update(data));
    }
}

module.exports = CTR;

*/

//const body = Buffer.from('AAAAAAAAAAB0p693IJlKZRQAAADxjn6+N0PWquRj30jfgq0bORyXfQ==', 'base64')

//const length = body.readInt32LE(16)
//const msgId = body.readBigInt64LE(8)

/*
random = random.toJSON().data;
console.log(random, 'guguguuookok')
        const randomReversed = Buffer.from(random.slice(8, 56))
            .reverse();
        // Encryption has "continuous buffer" enabled
        const encryptKey = Buffer.from(random.slice(8, 40));
        const encryptIv = Buffer.from(random.slice(40, 56));
        const decryptKey = Buffer.from(randomReversed.slice(0, 32));
        const decryptIv = Buffer.from(randomReversed.slice(32, 48));
        const encryptor = new CTR(encryptKey, encryptIv);
        const decryptor = new CTR(decryptKey, decryptIv);
        
*/

/*
const header = Buffer.from('nxQD7esRIt8DWApC5X0/W1DBlKgIQNZnqiRtxNIkf3RruA+7QScfQopo3GTNF13uN2NDS7V5II4pk1/8DqmUwg==', 'base64')
const data = Buffer.from('qCtu94ISj9IKrtUch/A6IJ8qfAPe+Hr70zfweJeet+gO0CLeLzTCiqM=', 'base64')

const randomReversed = Buffer.from(header.slice(8,56)).reverse()

const decryptKey = Buffer.from(randomReversed.slice(0, 32));
const decryptIv = Buffer.from(randomReversed.slice(32, 48));

const d = createCipheriv('aes-256-ctr', decryptKey, decryptIv)

const d1 = Buffer.from(d.update(data))


const e = createDecipheriv('aes-256-ctr', header.slice(8, 40), header.slice(40,56));
//const d = createDecipheriv('aes-256-ctr', header.slice(8, 40), header.slice(40,56));

const e1 = Buffer.from(e.update(data))
//const d1 = Buffer.from(d.update(header))


const br = new BinaryReader(e1)

const readData = await br.read(1);
let length = readData[0];

console.log(length)
        
        if (length >= 127) {
            length = Buffer.concat([await br.read(3), Buffer.alloc(1)])
                .readInt32LE(0);
        }

//console.log(br.read(length << 2))
console.log(length << 2)


const crypto = require('./crypto');

class CTR {
    constructor(key, iv) {
        if (!Buffer.isBuffer(key) || !Buffer.isBuffer(iv) || iv.length !== 16) {
            throw new Error('Key and iv need to be a buffer');
        }

        this.cipher = crypto.createCipheriv('AES-256-CTR', key, iv);
    }

    encrypt(data) {
        return Buffer.from(this.cipher.update(data));
    }
}

module.exports = CTR;

        random = Buffer.concat([
            Buffer.from(random.slice(0, 56)), packetCodec.obfuscateTag, Buffer.from(random.slice(60)),
        ]);
        random = Buffer.concat([
            Buffer.from(random.slice(0, 56)), Buffer.from(encryptor.encrypt(random)
                .slice(56, 64)), Buffer.from(random.slice(64)),
        ]);
        const decryptKey = Buffer.from(randomReversed.slice(0, 32));
        const decryptIv = Buffer.from(randomReversed.slice(32, 48));

*/

const header = Buffer.from(
  'aW2smrPi3NbG3WHbBreBw+gH8LM9RlBN/pCrOnEHICeb5vlJ23B8dqQgfMPBVsSH98LVqyCcrSJ8b4akKiNW6A==',
  'base64'
)
const data = Buffer.from('OLDxasnVav6a5bFV98DStTZdRzqOH8VY//qHjmMY8zEEZL9hG1Asc/0=')

const clientKey = header.subarray(8, 40)
const clientIv = header.subarray(40, 56)

const reservedHeader = Buffer.from(header.subarray(8, 56)).reverse()

const serverKey = reservedHeader.subarray(0, 32)
const serverIv = reservedHeader.subarray(32, 48)

const e = createCipheriv('AES-256-CTR', clientKey, clientIv)
const d = createCipheriv('AES-256-CTR', serverKey, serverIv)

//console.log(e.update(header).readUInt32BE(56) === 0xefefefef)

const readData = Buffer.from(e.update(data.subarray(0, 1)))

let length = readData[0]
console.log(length, length << 2)

const ll = Buffer.from(e.update(data.subarray(0, length << 2)))

//const readData = e.update(data.subarray(0, 1))
//let length = readData[0]

//console.log(length, length << 2)

/*
const readData = await reader.read(1);
        let length = readData[0];
        if (length >= 127) {
            length = Buffer.concat([await reader.read(3), Buffer.alloc(1)])
                .readInt32LE(0);
        }

        return reader.read(length << 2);

//const br = new BinaryReader(Buffer.from(d.update(data)))

//const readData = await br.read(1)
//console.log(readData[0])
/*

const data = await this.connection.readExactly(n);
        return this._decrypt.encrypt(data);
let length = readData[0]

console.log(length, length << 2)

if (length >= 127) {
    length = Buffer.concat([await br.read(3), Buffer.alloc(1)])
        .readInt32LE(0);
        console.log(length, 'asdfadsk')
}

console.log(length, length << 2)

//console.log(br.read(length << 2))

//console.log(Buffer.from(e.update(header)).readUInt32BE(56))
//nsole.log(0xefefefef, 0xdddddddd, 0xeeeeeeee, 0xef, 0x02010316, 0x47725650, 0x00000000)

/*
const br = new BinaryReader(e1)

const readData = await br.read(1);
let length = readData[0];

console.log(length)
        
        if (length >= 127) {
            length = Buffer.concat([await br.read(3), Buffer.alloc(1)])
                .readInt32LE(0);
        }

        */
