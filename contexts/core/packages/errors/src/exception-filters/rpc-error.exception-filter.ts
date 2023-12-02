import type { ArgumentsHost }     from '@nestjs/common'
import type { Observable }        from 'rxjs'

import { Code }                   from '@connectrpc/connect'
import { ConnectError }           from '@connectrpc/connect'
import { Catch }                  from '@nestjs/common'
import { RpcException }           from '@nestjs/microservices'
import { BaseRpcExceptionFilter } from '@nestjs/microservices'

import { RpcError }               from '@chats-system/rpc'

import { CoreError }              from '../errors/index.js'

@Catch()
export class RpcErrorExceptionFilter extends BaseRpcExceptionFilter {
  override catch(exception: unknown, host: ArgumentsHost): Observable<any> {
    if (exception instanceof CoreError) {
      return super.catch(
        new RpcException(
          new ConnectError('Invalid request', Code.InvalidArgument, undefined, [
            new RpcError({
              id: exception.id,
              code: exception.code,
              name: exception.name,
              message: exception.message,
            }),
          ])
        ),
        host
      )
    }

    return super.catch(exception, host)
  }
}
