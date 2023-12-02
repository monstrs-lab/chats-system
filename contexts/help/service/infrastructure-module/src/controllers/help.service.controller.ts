import type { ServiceImpl }         from '@connectrpc/connect'

import { ConnectRpcMethod }         from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }        from '@monstrs/nestjs-connectrpc'
import { Controller }               from '@nestjs/common'

import { HelpUseCases }             from '@chats-system/help-application-module'
import { GetCountriesListRequest }  from '@chats-system/help-rpc'
import { GetCountriesListResponse } from '@chats-system/help-rpc'
import { GetConfigResponse }        from '@chats-system/help-rpc'
import { HelpService }              from '@chats-system/help-rpc'

@Controller()
@ConnectRpcService(HelpService)
export class HelpServiceController implements ServiceImpl<typeof HelpService> {
  constructor(private readonly helpUseCases: HelpUseCases) {}

  @ConnectRpcMethod()
  async getConfig(): Promise<GetConfigResponse> {
    return new GetConfigResponse({
      config: await this.helpUseCases.getConfig.execute(),
    })
  }

  @ConnectRpcMethod()
  async getCountriesList(request: GetCountriesListRequest): Promise<GetCountriesListResponse> {
    return new GetCountriesListResponse({
      countries: await this.helpUseCases.getCountries.execute(),
      hash: request.hash,
    })
  }
}
