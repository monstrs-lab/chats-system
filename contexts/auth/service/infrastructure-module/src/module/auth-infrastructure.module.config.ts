import type { MikroOrmModuleOptions }           from '@mikro-orm/nestjs'

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { AuthInfrastructureModuleOptions } from './auth-infrastructure.module.interfaces.js'

import { Inject }                               from '@nestjs/common'

import { AUTH_INFRASTRUCTURE_MODULE_OPTIONS }   from './auth-infrastructure.module.constants.js'

export class AuthInfrastructureModuleConfig {
  constructor(
    @Inject(AUTH_INFRASTRUCTURE_MODULE_OPTIONS)
    private readonly options: AuthInfrastructureModuleOptions
  ) {}

  get db(): Partial<MikroOrmModuleOptions> {
    return this.options.db || {}
  }
}
