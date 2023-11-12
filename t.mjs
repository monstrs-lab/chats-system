import { createCipheriv } from 'node:crypto'
/*
const header = Buffer.from(
    'e3fBpwDdJr78jcwxnCW1tE710B1dZRyJh7cVe7qPIQzv3r6Iz4qhg8Hf/O/QT36mOOVJNkDt4qG8SoqW+jKXOQ==',
    'base64'
  )
const data = Buffer.from('BzwaH2aBgf8x/nbSM2h7svFLwD/i9QikMr7yT9jneVoive0S53KECCo=', 'base64')
*/

const header = Buffer.from(
  'fOu5jv2G8wW4GHpBLqhfKATFh/k5OU9GnSo/pmUH/c8gk7l3agdeBiQwCiNMVE34YHeK1fIpwcONG+bve+3Hjg==',
  'base64'
)
const data = Buffer.from('ENdaLmWAmSKcFt8HgHevQlqObPMDhOVxm+rPxGYjgfcuwEqFIvRNTcI=', 'base64')

const dd = createCipheriv('AES-256-CTR', header.subarray(8, 40), header.subarray(40, 56))
const decryptor = () => dd

const obfuscatedHeader = decryptor().update(header)

const protocolType = obfuscatedHeader.subarray(56, obfuscatedHeader.length).readUint32BE()
const dcId = obfuscatedHeader.subarray(60, obfuscatedHeader.length).readUInt16BE()

const obfuscated = decryptor().update(data)

let length = obfuscated[0]

if (length >= 127) {
  length = Buffer.concat([obfuscated.subarray(0, 3), Buffer.alloc(1)]).readInt32LE(0)
}

const d = obfuscated.subarray(1, length << 2)
console.log(d.length, obfuscated.length)
const authKeyId = d.readBigUint64LE(0)
const msgId = d.readBigUint64LE(8)
const msgLength = d.readUInt32LE(16)
const constructorId = d.readInt32LE(20)
const msgData = d.subarray(24, d.length)
console.log(length << 2, authKeyId, msgId, msgLength, constructorId, msgData.length)

/*
AAAAAAAAAADA5fGGzXROZRQAAADxjn6+gt0VifZ3Li6EP7VQtaXpVA== Cg== encode
CgAAAAAAAAAAwOXxhs10TmUUAAAA8Y5+voLdFYn2dy4uhD+1ULWl6VQ= oYpk8MlFw0R5cnatq0Onp2jEH1diz3jRxyKgnRVlfeh3fByx1qH2R3M= obfuscated
*/
