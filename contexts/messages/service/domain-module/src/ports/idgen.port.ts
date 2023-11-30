export abstract class IdGenPort {
  abstract createMessageIds(key: bigint): Promise<{
    dialogMessageId: bigint
    outboxMessageId: bigint
    pts: bigint
  }>
}
