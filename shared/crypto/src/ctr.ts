import { Counter } from './counter.js'

export class CTR {
  constructor(key: Buffer, counter: Buffer | Counter) {
    if (!(counter instanceof Counter)) {
      counter = new Counter(counter)
    }

    this._counter = counter

    this._remainingCounter = undefined
    this._remainingCounterIndex = 16

    this._aes = new AES(getWords(key))
  }

  update(plainText) {
    return this.encrypt(plainText)
  }

  encrypt(plainText) {
    const encrypted = Buffer.from(plainText)

    for (let i = 0; i < encrypted.length; i++) {
      if (this._remainingCounterIndex === 16) {
        this._remainingCounter = Buffer.from(i2ab(this._aes.encrypt(ab2i(this._counter._counter))))
        this._remainingCounterIndex = 0
        this._counter.increment()
      }
      encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++]
    }

    return encrypted
  }
}
