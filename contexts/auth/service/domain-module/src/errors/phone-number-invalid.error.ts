import { CoreError } from '@chats-system/core-errors'

export class PhoneNumberInvalidError extends CoreError {
  override id: string = 'PHONE_NUMBER_INVALID'

  override code: number = 400

  override name: string = 'BAD_REQUEST'

  override message: string = 'The phone number is invalid'
}
