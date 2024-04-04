import * as Primitive from '@monstrs/mtproto-tl-primitives'
import { TLObject }   from '@monstrs/mtproto-tl-core'

export interface ServerDHInnerDataParams {
  nonce: bigint
  serverNonce: bigint
  g: number
  dhPrime: Buffer
  gA: Buffer
  serverTime: number
}

export class ServerDHInnerData extends TLObject {
  override constructorId: number = 0xb5890dba

  override type: string = 'ServerDHInnerData'

  nonce!: bigint

  serverNonce!: bigint

  g!: number

  dhPrime!: Buffer

  gA!: Buffer

  serverTime!: number

  constructor(params: ServerDHInnerDataParams) {
    super(params)
    this.nonce = params.nonce
    this.serverNonce = params.serverNonce
    this.g = params.g
    this.dhPrime = params.dhPrime
    this.gA = params.gA
    this.serverTime = params.serverTime
  }

  static override async read(b: Primitive.BytesIO): Promise<ServerDHInnerData> {
    const nonce = await Primitive.Int128.read(b)
    const serverNonce = await Primitive.Int128.read(b)
    const g = await Primitive.Int.read(b)
    const dhPrime = await Primitive.Bytes.read(b)
    const gA = await Primitive.Bytes.read(b)
    const serverTime = await Primitive.Int.read(b)
    return new ServerDHInnerData({ nonce, serverNonce, g, dhPrime, gA, serverTime })
  }

  write(): Buffer {
    const b: Primitive.BytesIO = new Primitive.BytesIO()
    b.write(Primitive.Int.write(this.constructorId, false))
    if (this.nonce !== undefined) {
      b.write(Primitive.Int128.write(this.nonce))
    }
    if (this.serverNonce !== undefined) {
      b.write(Primitive.Int128.write(this.serverNonce))
    }
    if (this.g !== undefined) {
      b.write(Primitive.Int.write(this.g))
    }
    if (this.dhPrime !== undefined) {
      b.write(Primitive.Bytes.write(this.dhPrime))
    }
    if (this.gA !== undefined) {
      b.write(Primitive.Bytes.write(this.gA))
    }
    if (this.serverTime !== undefined) {
      b.write(Primitive.Int.write(this.serverTime))
    }
    return b.buffer
  }
}
