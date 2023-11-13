/*
1 - tempkey f9mBrt2WMFB5lYsds2k8OCVt3hS2vOUVMwj7Xu+afVQ=
2 - shaDigestKeyWithData 2DHxkuk1I46cApl7cZ0FkzizHegh4xwxFs/c6FdXN3M=
3 - dataWithHash 50THiG011Mz03HucFAakALv/e0t+20zTW+0eT9RjkD3lFlDs0eCaKdW7+Qv32Wr/eMyXcf8gRfNJHAX8HeWFvuodDAKWnwSp81sT/3zSIHtKXfjKqQqmtv75djd6V5YFTZF+MpZn1084+xFIGoo0nLMrXzWgreTaa0n9UilgOlVbo4EzNxs7+U4rxP120OJ2FHKIFlfRcftSae0qvSRf/QAAAHMQkVMEAAAAO1VMSQQAAACB+QgalEjtFwiDyVrs2DHxkuk1I46cApl7cZ0FkzizHegh4xwxFs/c6FdXN3M=
4 - aesEncrypted Q3e2hHTn/wu1MsGvgeSNC1DGvejLUsmdpPdeipf3N3UuN5W4BVJQehph9YuJNl4ludkEJA0ShOGqusPNi6VUe3JFiqn6e5+cEyvO8l7Uj3Fi8nPerhMm5AqTZ5fY3aDSfu7LhJNfbz0JbLryXa8/r8KzAuKegoZc1HQB8hmgubOVkQjVPVSQaP+wzaSI4NwOqMpovG5fOfj6tvCQCpiQOpLfx8fM35qrdjL0+KsHwmpXLW4C4nLt0z4X4fYOEFzqCl8t7WIjT1O1bTKwDNnacWOuc27vRP2Eg9IYCIzE33g=
5 - tempKeyXor YAkg1Vzy5bA0UI/17aTMvimC4NLqKIEg+MYH353KrEU=
6 - keyAesEncrypted YAkg1Vzy5bA0UI/17aTMvimC4NLqKIEg+MYH353KrEVDd7aEdOf/C7Uywa+B5I0LUMa96MtSyZ2k916Kl/c3dS43lbgFUlB6GmH1i4k2XiW52QQkDRKE4aq6w82LpVR7ckWKqfp7n5wTK87yXtSPcWLyc96uEybkCpNnl9jdoNJ+7suEk19vPQlsuvJdrz+vwrMC4p6ChlzUdAHyGaC5s5WRCNU9VJBo/7DNpIjg3A6oymi8bl85+Pq28JAKmJA6kt/Hx8zfmqt2MvT4qwfCalctbgLicu3TPhfh9g4QXOoKXy3tYiNPU7VtMrAM2dpxY65zbu9E/YSD0hgIjMTfeA==
7 - keyAesEncryptedInt NativeBigInt {value: 12123378587374828762439407150569671885857803808519…889342201129167350764449584754854973216974495608n}
8 - encryptedDataBuffer NativeBigInt {value: 19217773552786637570496779830123076249212289409424…026103848941008087827018529475889058539663192668n}
9 - encryptedData mDvtXDacq8ND4K0dhOvRLyVkl4SYW2Fq5JdGOt8iw1LxazwgLmH8m76Did+3vI2LbzkPYToW9ZWnAGvFcJLi/DVhdyDKC2Du6shWqym506ngQgGN1m069fCip75FRnS/Zz8TP2TeAUZZKG6mlazmoI9uQRrHatK7d0K4P9IXBdDeCqfoYb8ZQMCgm8So694qmuR1RZ2ur7h0oL0dWPaTac2oGZxq1ZBaJnuxbGISgE9n+B8ZzDADMCWv9fgC5yd9G7EHJY1yVBbgW9CVxQbCq2e8hNKPY/PGSdUbhhR5MxTKwnXr7mOxjf6BayB9NBH5XM8ccOezCnmvCDlzMlLyXA==
*/

import { privateDecrypt, createPrivateKey, createHash } from 'node:crypto'
import { IGE as AESIGE } from '@cryptography/aes'
import BigInt from 'big-integer'
import { readFileSync } from 'node:fs'
import NodeRSA from 'node-rsa'

const key = {
  n: BigInt(
    '2381306448659649164302690303076381265632668704723497020470395109308660514362364170229081106692857621740' +
      '7662304029739903180202186741388339194122731428033163392461508934209366018606125548366054726592597621897' +
      '3082720149482025777155599562826488748588535295468401288090233825534456644976428692936545848200589727693' +
      '5210354467286312442332644832723879423343018224783552507234685708030057684494633385257705768861429070097' +
      '9666942677163711643994719528044002167040190181767491250722153710492547051038733909766620291079011906347' +
      '813649336894843319316782175618810042958656414976948048313098163484344821927424378043409879056691914519'
  ),
  d: BigInt(
    '4985566288060034207149734294903798975501754321606283872907562338041736868878038173812231543240108553626966972452081438142355527477281373912180264551689015898011266369932812169328694457316182261982956680501899183672079959222558786611534770056791405302026522321854656298457601476457148752759177785957795278474205828371446826386541038304104660656682752542241060206104482761804975454856255839762703743516248729864114716795657887572827279890757957508346319042013971238164241570375994996035000223590703701146009443676459028082762989839830555540239701630721627143879275076825460435502944970634697274160624768896675979475425'
  ),
  e: 65537,
}

const encryptedData = Buffer.from(
  'mDvtXDacq8ND4K0dhOvRLyVkl4SYW2Fq5JdGOt8iw1LxazwgLmH8m76Did+3vI2LbzkPYToW9ZWnAGvFcJLi/DVhdyDKC2Du6shWqym506ngQgGN1m069fCip75FRnS/Zz8TP2TeAUZZKG6mlazmoI9uQRrHatK7d0K4P9IXBdDeCqfoYb8ZQMCgm8So694qmuR1RZ2ur7h0oL0dWPaTac2oGZxq1ZBaJnuxbGISgE9n+B8ZzDADMCWv9fgC5yd9G7EHJY1yVBbgW9CVxQbCq2e8hNKPY/PGSdUbhhR5MxTKwnXr7mOxjf6BayB9NBH5XM8ccOezCnmvCDlzMlLyXA==',
  'base64'
)

function modExp(a, b, n) {
  a = a.remainder(n)
  let result = BigInt.one
  let x = a
  while (b.greater(BigInt.zero)) {
    const leastSignificantBit = b.remainder(BigInt(2))
    b = b.divide(BigInt(2))
    if (leastSignificantBit.eq(BigInt.one)) {
      result = result.multiply(x)
      result = result.remainder(n)
    }
    x = x.multiply(x)
    x = x.remainder(n)
  }
  return result
}

function readBigIntFromBuffer(buffer, little = true, signed = false) {
  let randBuffer = Buffer.from(buffer)
  const bytesNumber = randBuffer.length
  if (little) {
    randBuffer = randBuffer.reverse()
  }
  let bigInt = BigInt(randBuffer.toString('hex'), 16)
  if (signed && Math.floor(bigInt.toString('2').length / 8) >= bytesNumber) {
    bigInt = bigInt.subtract(BigInt(2).pow(BigInt(bytesNumber * 8)))
  }
  return bigInt
}

function readBufferFromBigInt(bigInt, bytesNumber, little = true, signed = false) {
  bigInt = BigInt(bigInt)
  const bitLength = bigInt.bitLength()

  const bytes = Math.ceil(bitLength / 8)
  if (bytesNumber < bytes) {
    throw new Error('OverflowError: int too big to convert')
  }
  if (!signed && bigInt.lesser(BigInt(0))) {
    throw new Error('Cannot convert to unsigned')
  }
  let below = false
  if (bigInt.lesser(BigInt(0))) {
    below = true
    bigInt = bigInt.abs()
  }

  const hex = bigInt.toString('16').padStart(bytesNumber * 2, '0')
  let l = Buffer.from(hex, 'hex')
  if (little) {
    l = l.reverse()
  }

  if (signed && below) {
    if (little) {
      let reminder = false
      if (l[0] !== 0) {
        l[0] -= 1
      }
      for (let i = 0; i < l.length; i++) {
        if (l[i] === 0) {
          reminder = true
          continue
        }
        if (reminder) {
          l[i] -= 1
          reminder = false
        }
        l[i] = 255 - l[i]
      }
    } else {
      l[l.length - 1] = 256 - l[l.length - 1]
      for (let i = 0; i < l.length - 1; i++) {
        l[i] = 255 - l[i]
      }
    }
  }
  return l
}

function sha256(data) {
  const shaSum = createHash('sha256')
  shaSum.update(data)
  return shaSum.digest()
}

function bufferXor(a, b) {
  const res = []
  for (let i = 0; i < a.length; i++) {
    res.push(a[i] ^ b[i])
  }
  return Buffer.from(res)
}

function convertToLittle(buf) {
  const correct = Buffer.alloc(buf.length * 4)

  for (let i = 0; i < buf.length; i++) {
    correct.writeUInt32BE(buf[i], i * 4)
  }
  return correct
}

class IGE {
  constructor(key, iv) {
    this.ige = new AESIGE(key, iv)
  }

  decryptIge(cipherText) {
    return convertToLittle(this.ige.decrypt(cipherText))
  }
}

const encryptedDataBuffer = readBigIntFromBuffer(encryptedData, false)
const keyAesEncryptedInt = modExp(encryptedDataBuffer, key.d, key.n)
const keyAesEncrypted = readBufferFromBigInt(keyAesEncryptedInt, 256, false)
const tempKeyXor = keyAesEncrypted.subarray(0, 32) // key
const aesEncrypted = keyAesEncrypted.subarray(32, keyAesEncrypted.length)
const aesEncryptedHash = sha256(aesEncrypted) // hash
const tempKey = bufferXor(tempKeyXor, aesEncryptedHash)

const ige = new IGE(tempKey, Buffer.alloc(32))

const dataWithHash = ige.decryptIge(aesEncrypted)

const dataPadReversed = dataWithHash.subarray(0, dataWithHash.length - 32)
const shaDigestKeyWithData = dataWithHash.subarray(dataWithHash.length - 32, dataWithHash.length)
const dataWithPadding = Buffer.from(dataPadReversed).reverse()

//console.log(dataPadReversed.toString('base64'), shaDigestKeyWithData.toString('base64'))

/*
loaded_value = load_pq_inner_data(unencrypted_data[20:])
loaded_hash = sha1(unencrypted_data[20:20 + loaded_value.offset]).digest()
*/
