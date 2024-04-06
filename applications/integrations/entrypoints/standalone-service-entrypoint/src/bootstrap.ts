import { NestLogger }                          from '@monstrs/nestjs-logger'
import { NestFactory }                         from '@nestjs/core'

import { IntegrationsServiceEntrypointModule } from './module/index.js'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(IntegrationsServiceEntrypointModule.build(), {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  await app.listen(3000)

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
    import.meta.webpackHot.dispose(() => {
      app.close()
    })
  }
}

bootstrap()
