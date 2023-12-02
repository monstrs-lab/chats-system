import type { Config }   from '@chats-system/help-domain-module'

import { Injectable }    from '@nestjs/common'

import { ConfigFactory } from '@chats-system/help-domain-module'

@Injectable()
export class GetConfigUseCase {
  constructor(private readonly configFactory: ConfigFactory) {}

  async execute(): Promise<Config> {
    return this.configFactory.createConfig()
  }
}
