import { ConnectRpcServer }                  from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }                    from '@monstrs/nestjs-connectrpc'
import { NestLogger }                        from '@monstrs/nestjs-logger'
import { NestFactory }                       from '@nestjs/core'
import { WsAdapter }                         from '@nestjs/platform-ws'

import { StandaloneServiceEntrypointModule } from './standalone-service-entrypoint.module.js'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(StandaloneServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  app.useWebSocketAdapter(new WsAdapter(app))

  app.connectMicroservice({
    strategy: new ConnectRpcServer({
      protocol: ServerProtocol.HTTP2_INSECURE,
      port: 50051,
    }),
  })

  await app.startAllMicroservices()
  await app.listen(3000)

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
    import.meta.webpackHot.dispose(() => {
      app.close()
    })
  }
}

bootstrap()