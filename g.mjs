const data = Buffer.from('CgAAAAAAAAAAjHnwpSB/TmUUAAAA8Y5+vhRY0e1NyrXPHw4Yc1D3rBY=', 'base64')

const authKeyId = data.readBigUint64LE(1)
const msgId = data.readBigUint64LE(9)
const msgLength = data.readUInt32LE(17)
const constructorId = data.readInt32LE(21)
console.log(authKeyId, msgId, msgLength, constructorId)
