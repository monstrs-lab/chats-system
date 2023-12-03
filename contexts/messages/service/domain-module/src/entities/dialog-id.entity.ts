import { PeerType } from '../enums/index.js'

export class DialogId {
  constructor(
    public readonly a: bigint,
    public readonly b: bigint
  ) {}

  static create(peerType: PeerType, fromId: bigint, peerId: bigint): DialogId | undefined {
    if (peerType === PeerType.SELF) {
      return new DialogId(fromId, fromId)
    }

    if (peerType === PeerType.USER) {
      if (fromId <= peerId) {
        return new DialogId(fromId, peerId)
      }

      return new DialogId(peerId, fromId)
    }

    if (peerType === PeerType.CHAT) {
      return new DialogId(BigInt(peerType) * -1n, peerId)
    }

    if (peerType === PeerType.CHANNEL) {
      return new DialogId(BigInt(peerType) * -1n, peerId)
    }

    return undefined
  }
}
