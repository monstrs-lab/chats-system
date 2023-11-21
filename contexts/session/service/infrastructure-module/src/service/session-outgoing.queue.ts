enum QueueState {
  ACKNOWLEDGED = 8,
}

const maxQueueSize = 400

export interface OutboxMessage {
  messageId: bigint
  sent: bigint
  state: QueueState
  message: any //   *mtproto.TLMessageRawData
}

export class SessionOutgoingQueue {
  #minMessageId: bigint = 0n
  #maxMessageId: bigint = 2342342342342234234234234234234234234234n
  #ackedIds: Set<bigint> = new Set()
  #messages: Set<OutboxMessage> = new Set()

  get messages(): Set<OutboxMessage> {
    return this.#messages
  }

  lookup(messageId: bigint): OutboxMessage | undefined {
    return Array.from(this.#messages.values()).find((message) => message.messageId === messageId)
  }

  shrink() {
    if (this.#messages.size > maxQueueSize) {
      const [outboxMessage] = this.#messages

      this.#minMessageId = outboxMessage.messageId

      this.#messages.delete(outboxMessage)
    }
  }

  addRpcResultMsg(
    messageId: bigint,
    message: { messageId: bigint; seqNo: number; messageLength: number; body: Buffer }
  ): OutboxMessage {
    let outboxMessage = this.lookup(messageId)

    if (!outboxMessage) {
      outboxMessage = {
        messageId,
        sent: 0n,
        state: QueueState.ACKNOWLEDGED,
        message,
      }

      this.#messages.add(outboxMessage)
    }

    this.shrink()

    return outboxMessage
  }
}
