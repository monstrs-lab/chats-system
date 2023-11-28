export class HandshakeState {
  #nonce?: bigint

  #serverNonce?: bigint

  #newNonce?: bigint

  #a?: bigint

  #timeOffset?: number

  getNonce(): bigint | undefined {
    return this.#nonce
  }

  setNonce(nonce: bigint): void {
    this.#nonce = nonce
  }

  getServerNonce(): bigint | undefined {
    return this.#serverNonce
  }

  setServerNonce(serverNonce: bigint): void {
    this.#serverNonce = serverNonce
  }

  getNewNonce(): bigint | undefined {
    return this.#newNonce
  }

  setNewNonce(newNonce: bigint): void {
    this.#newNonce = newNonce
  }

  getA(): bigint | undefined {
    return this.#a
  }

  setA(a: bigint): void {
    this.#a = a
  }

  getTimeOffset(): number | undefined {
    return this.#timeOffset
  }

  setTimeOffset(timeOffset: number): void {
    this.#timeOffset = timeOffset
  }
}
