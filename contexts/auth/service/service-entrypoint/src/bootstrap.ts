import { NestLogger }                  from '@monstrs/nestjs-logger'
import { MicroservisesRegistry }       from '@monstrs/nestjs-microservices-registry'
import { NestFactory }                 from '@nestjs/core'

import { AuthServiceEntrypointModule } from './auth-service-entrypoint.module.js'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AuthServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  app
    .get<typeof MicroservisesRegistry>(MicroservisesRegistry, { strict: false })
    .connect(app, { inheritAppConfig: true })

  await app.startAllMicroservices()
  await app.listen(3001)

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
    import.meta.webpackHot.dispose(() => {
      app.close()
    })
  }
}

bootstrap()
