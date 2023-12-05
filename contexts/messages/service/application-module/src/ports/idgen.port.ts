export abstract class IdGenPort {
  abstract createMessageIds(
    fromId: bigint,
    toId: bigint
  ): Promise<{
    dialogMessageId: bigint
    outboxMessageId: number
    inboxMessageId: number
    pts: number
  }>

  abstract getCurrentPtsId(key: bigint): Promise<number>

  abstract getNextPtsId(key: bigint): Promise<number>
}
