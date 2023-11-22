import type { MikroOrmModuleOptions } from '@mikro-orm/nestjs'

export interface AuthSessionInfrastructureModuleOptions {
  db?: Partial<MikroOrmModuleOptions>
}
