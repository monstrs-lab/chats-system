export abstract class IdGenPort {
  abstract createMessageIds(
    fromId: bigint,
    toId: bigint
  ): Promise<{
    dialogMessageId: bigint
    outboxMessageId: bigint
    inboxMessageId: bigint
  }>
}
