import type { MikroOrmModuleOptions }                  from '@mikro-orm/nestjs'

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { AuthSessionInfrastructureModuleOptions } from './auth-session-infrastructure.module.interfaces.js'

import { Inject }                                      from '@nestjs/common'

import { AUTH_SESSION_INFRASTRUCTURE_MODULE_OPTIONS }  from './auth-session-infrastructure.module.constants.js'

export class AuthSessionInfrastructureModuleConfig {
  constructor(
    @Inject(AUTH_SESSION_INFRASTRUCTURE_MODULE_OPTIONS)
    private readonly options: AuthSessionInfrastructureModuleOptions
  ) {}

  get db(): Partial<MikroOrmModuleOptions> {
    return this.options.db || {}
  }
}
