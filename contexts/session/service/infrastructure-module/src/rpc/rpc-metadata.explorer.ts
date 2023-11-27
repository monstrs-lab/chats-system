import type { Type }            from '@nestjs/common'
import type { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper.js'
import type { Module }          from '@nestjs/core/injector/module.js'

import type { IRpcHandler }     from './rpc-handler.interfaces.js'

import { Injectable }           from '@nestjs/common'
import { ModulesContainer }     from '@nestjs/core/injector/modules-container.js'

import { RPC_HANDLER_METADATA } from './rpc-metadata.constants.js'

@Injectable()
export class RpcMetadataExplorer {
  constructor(private readonly modulesContainer: ModulesContainer) {}

  explore(): Array<Type<IRpcHandler>> {
    const modules = [...this.modulesContainer.values()]

    return this.flatMap<IRpcHandler>(modules, (instance) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.filterProvider(instance, RPC_HANDLER_METADATA))
  }

  flatMap<T>(
    modules: Array<Module>,
    callback: (instance: InstanceWrapper) => Type<IRpcHandler> | undefined
  ): Array<Type<T>> {
    const items = modules
      .map((module) => [...module.providers.values()].map(callback))
      .reduce((a, b) => a.concat(b), [])

    return items.filter((element) => !!element) as Array<Type<T>>
  }

  filterProvider(
    wrapper: InstanceWrapper<IRpcHandler>,
    metadataKey: symbol
  ): Type<IRpcHandler> | undefined {
    const { instance } = wrapper

    if (!instance) {
      return undefined
    }

    return this.extractMetadata(instance, metadataKey)
  }

  extractMetadata(
    instance: Record<string, any>,
    metadataKey: symbol
  ): Type<IRpcHandler> | undefined {
    if (!instance.constructor) {
      return undefined
    }

    const metadata = Reflect.getMetadata(metadataKey, instance.constructor)

    return metadata ? (instance.constructor as Type<IRpcHandler>) : undefined
  }
}
