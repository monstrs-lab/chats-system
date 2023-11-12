import { NestLogger }                     from '@monstrs/nestjs-logger'
import { NestFactory }                    from '@nestjs/core'
import { WsAdapter }                      from '@nestjs/platform-ws'

import { GatewayServiceEntrypointModule } from './gateway-service-entrypoint.module.js'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(GatewayServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  app.useWebSocketAdapter(new WsAdapter(app))

  await app.listen(3000)

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
    import.meta.webpackHot.dispose(() => {
      app.close()
    })
  }
}

bootstrap()
