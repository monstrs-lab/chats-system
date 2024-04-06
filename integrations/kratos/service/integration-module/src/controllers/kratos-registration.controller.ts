// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { IdentityBody } from '../types/index.js'

import { Logger }            from '@monstrs/logger'
import { Body }              from '@nestjs/common'
import { Controller }        from '@nestjs/common'
import { Post }              from '@nestjs/common'

import { UsersClient }       from '@chats-system/users-client-module'

@Controller('kratos/registration')
export class RegistrationPasswordWebhooksController {
  #logger = new Logger(RegistrationPasswordWebhooksController.name)

  constructor(private readonly client: UsersClient) {}

  @Post('password/after')
  async passwordAfter(@Body() body: IdentityBody): Promise<object> {
    try {
      await this.client.createUser({
        externalId: body.id,
        firstName: body.firstName,
        lastName: body.lastName,
      })

      return {}
    } catch (error) {
      if (error instanceof Error) {
        this.#logger.error(error)
      }

      throw error
    }
  }
}
