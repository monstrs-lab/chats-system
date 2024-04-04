export class DialogNewMessageEvent {
  constructor(
    public readonly dialogId: bigint,
    public readonly topMessageId: bigint,
    public readonly unreadCount: number
  ) {}
}
