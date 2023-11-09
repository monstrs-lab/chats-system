import { Module }         from '@nestjs/common'

import { MTProtoGateway } from './gateway/index.js'

@Module({
  providers: [MTProtoGateway],
})
export class GatewayServiceEntrypointModule {}
