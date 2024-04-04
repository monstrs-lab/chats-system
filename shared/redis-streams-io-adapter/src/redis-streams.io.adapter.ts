import type { Redis }            from '@monstrs/nestjs-redis'
import type { INestApplication } from '@nestjs/common'
import type { ServerOptions }    from 'socket.io'

import { RedisFactory }          from '@monstrs/nestjs-redis'
import { IoAdapter }             from '@nestjs/platform-socket.io'
import { createAdapter }         from '@socket.io/redis-streams-adapter'

export class RedisStreamsIoAdapter extends IoAdapter {
  protected redis: Redis

  constructor(app: INestApplication) {
    super(app)

    this.redis = app.get(RedisFactory).create()
  }

  override createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    server.adapter(createAdapter(this.redis))

    return server
  }
}
