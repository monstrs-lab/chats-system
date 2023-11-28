import { CoreError } from '@chats-system/core-errors'

export class PhoneCodeInvalidError extends CoreError {
  override id: string = 'PHONE_CODE_INVALID'

  override code: number = 400

  override name: string = 'BAD_REQUEST'

  override message: string = 'The confirmation code is invalid'
}
