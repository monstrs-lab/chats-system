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

  abstract getCurrentPtsId(userId: bigint): Promise<number>

  abstract getNextPtsId(userId: bigint): Promise<number>
}
