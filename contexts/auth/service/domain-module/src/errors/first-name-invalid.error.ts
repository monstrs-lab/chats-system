import { CoreError } from '@chats-system/core-errors'

export class FirstNameInvalidError extends CoreError {
  override id: string = 'FIRSTNAME_INVALID'

  override code: number = 400

  override name: string = 'BAD_REQUEST'

  override message: string = 'The first name is invalid'
}
