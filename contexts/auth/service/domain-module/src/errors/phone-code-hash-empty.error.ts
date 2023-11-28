import { CoreError } from '@chats-system/core-errors'

export class PhoneCodeHashEmptyError extends CoreError {
  override id: string = 'PHONE_CODE_HASH_EMPTY'

  override code: number = 400

  override name: string = 'BAD_REQUEST'

  override message: string = 'The phone code hash is missing'
}
