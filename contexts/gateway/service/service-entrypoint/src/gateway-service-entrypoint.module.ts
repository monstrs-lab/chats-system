import { Module }        from '@nestjs/common'

import { EventsGateway } from './gateway.js'

@Module({
  providers: [EventsGateway],
})
export class GatewayServiceEntrypointModule {}
