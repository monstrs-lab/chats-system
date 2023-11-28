export class CoreError extends Error {
  id!: string

  code!: number

  override message!: string

  override name!: string
}
