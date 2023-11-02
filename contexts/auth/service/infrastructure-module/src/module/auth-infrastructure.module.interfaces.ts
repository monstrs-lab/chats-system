import type { MikroOrmModuleOptions } from '@mikro-orm/nestjs'

export interface AuthInfrastructureModuleOptions {
  db?: Partial<MikroOrmModuleOptions>
}
