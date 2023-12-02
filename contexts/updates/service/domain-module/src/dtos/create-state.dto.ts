export class CreateStateDto {
  constructor(
    public readonly pts: number,
    public readonly qts: number,
    public readonly seq: number
  ) {}
}
