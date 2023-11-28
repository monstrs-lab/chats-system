import { CoreError } from '@chats-system/core-errors'

export class PhoneCodeExpiredError extends CoreError {
  override id: string = 'PHONE_CODE_EXPIRED'

  override code: number = 400

  override name: string = 'BAD_REQUEST'

  override message: string = 'The confirmation code has expired'
}
