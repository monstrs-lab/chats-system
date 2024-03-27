import { NestLogger }                     from '@monstrs/nestjs-logger'
import { NestFactory }                    from '@nestjs/core'

import { RedisStreamsIoAdapter }          from '@chats-system/redis-streams-io-adapter'

import { GatewayServiceEntrypointModule } from './module/index.js'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(GatewayServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  app.useWebSocketAdapter(new RedisStreamsIoAdapter(app))

  await app.listen(3000)

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
    import.meta.webpackHot.dispose(() => {
      app.close()
    })
  }
}

bootstrap()
