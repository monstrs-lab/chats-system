export class Counter {
  #counter: Buffer

  constructor(initialValue: Buffer) {
    this.#counter = Buffer.from(initialValue)
  }

  get counter(): Buffer {
    return this.#counter
  }

  increment() {
    for (let i = 15; i >= 0; i--) {
      if (this.#counter[i] === 255) {
        this.#counter[i] = 0
      } else {
        this.#counter[i]++
        break
      }
    }
  }
}
