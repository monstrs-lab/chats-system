export interface TLSchemaParam {
  name: string
  type: string
}

export interface TLSchemaConstructor {
  id: string
  predicate: string
  type: string
  params: Array<TLSchemaParam>
}

export interface TLSchemaMethod {
  id: string
  method: string
  type: string
  params: Array<TLSchemaParam>
}

export interface TLSchema {
  constructors: Array<TLSchemaConstructor>
  methods: Array<TLSchemaMethod>
}

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
}

export interface TLSchemaMethodParsed extends TLSchemaMethod {
  params: Array<TLSchemaParamParsed>
}

export interface TLSchemaParsed {
  constructors: Array<TLSchemaConstructorParsed>
  methods: Array<TLSchemaMethodParsed>
}

export class TLParser {
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

  parse(schema: TLSchema): TLSchemaParsed {
    return {
      constructors: schema.constructors.map((ctr) => ({
        ...ctr,
        params: ctr.params.map((param) => this.parseParam(param)),
      })),
      methods: schema.methods.map((ctr) => ({
        ...ctr,
        params: ctr.params.map((param) => this.parseParam(param)),
      })),
    }
  }
}
