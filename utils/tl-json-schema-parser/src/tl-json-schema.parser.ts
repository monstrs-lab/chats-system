import type { TLSchema }            from '@chats-system/tl-json-schema'
import type { TLSchemaParam }       from '@chats-system/tl-json-schema'
import type { TLSchemaConstructor } from '@chats-system/tl-json-schema'
import type { TLSchemaMethod }      from '@chats-system/tl-json-schema'

export interface TLSchemaParamParsed extends TLSchemaParam {
  isVector: boolean
  useVectorId: boolean

  skipConstructorId: boolean

  isFlag: boolean
  flagGroup: number
  flagIndex: number
  flagIndicator: boolean
}

export interface TLSchemaConstructorParsed extends TLSchemaConstructor {
  params: Array<TLSchemaParamParsed>
  name: string
  namespace?: string
}

export interface TLSchemaMethodParsed extends TLSchemaMethod {
  params: Array<TLSchemaParamParsed>
  name: string
  namespace?: string
}

export interface TLSchemaParsed {
  constructors: Array<TLSchemaConstructorParsed>
  methods: Array<TLSchemaMethodParsed>
}

export class TLJsonSchemaParser {
  parseParam(param: TLSchemaParam): TLSchemaParamParsed {
    const config: TLSchemaParamParsed = {
      ...param,
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      type: param.type,
      useVectorId: false,
    }

    if (param.type !== '#') {
      config.flagIndicator = false
      config.type = param.type.replace(/^!+/, '')

      const flagMatch = config.type.match(/flags(\d*)\.(\d+)\?([\w<>.]+)/)

      if (flagMatch) {
        config.isFlag = true
        config.flagGroup = Number(flagMatch[1] || 1)
        config.flagIndex = Number(flagMatch[2])
        ;[, , , config.type] = flagMatch
      }

      const vectorMatch = config.type.match(/[Vv]ector<([\w\d.]+)>/)

      if (vectorMatch) {
        config.isVector = true
        config.useVectorId = config.type.charAt(0) === 'V'
        ;[, config.type] = vectorMatch
      }

      if (/^[a-z]$/.test(config.type.split('.').pop()!.charAt(0))) {
        config.skipConstructorId = true
      }
    }

    return config
  }

  parseConstructor(ctr: TLSchemaConstructor): TLSchemaConstructorParsed {
    const [namespace, name] = ctr.predicate.includes('.')
      ? ctr.predicate.split('.')
      : [undefined, ctr.predicate]

    return {
      ...ctr,
      name,
      namespace,
      params: ctr.params.map((param) => this.parseParam(param)),
    }
  }

  parseMethod(method: TLSchemaMethod): TLSchemaMethodParsed {
    const [namespace, name] = method.method.includes('.')
      ? method.method.split('.')
      : [undefined, method.method]

    return {
      ...method,
      name,
      namespace,
      params: method.params.map((param) => this.parseParam(param)),
    }
  }

  parse(schema: TLSchema): TLSchemaParsed {
    return {
      constructors: schema.constructors.map((ctr) => this.parseConstructor(ctr)),
      methods: schema.methods.map((method) => this.parseMethod(method)),
    }
  }
}
