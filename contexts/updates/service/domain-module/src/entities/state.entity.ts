export class State {
  constructor(
    public readonly pts: number,
    public readonly qts: number,
    public readonly seq: number,
    public readonly unreadCount: number = 0,
    public readonly date: number = Math.floor(Date.now() / 1000)
  ) {}
}
