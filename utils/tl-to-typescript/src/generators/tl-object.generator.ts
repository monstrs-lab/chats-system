import type { TLSchemaParamParsed } from '@chats-system/tl-json-schema-parser'
import type { SourceFile }          from 'ts-morph'

import decamelize                   from 'decamelize'

export class TLObjectGenerator {
  resolvePlainTypeForParam(param: TLSchemaParamParsed): string | undefined {
    switch (param.type) {
      case 'int':
        return 'number'
      case 'long':
        return 'bigint'
      case 'int128':
        return 'bigint'
      case 'int256':
        return 'bigint'
      case 'double':
        return 'number'
      case 'string':
        return 'string'
      case 'Bool':
        return 'boolean'
      case 'true':
        return 'boolean'
      case 'bytes':
        return 'Buffer'
      case 'date':
        return 'Date'
    }

    return undefined
  }

  resolveCustomTypeForParam(sourceFile: SourceFile, param: TLSchemaParamParsed): string {
    sourceFile.addImportDeclaration({
      moduleSpecifier: `./${decamelize(param.type, {
        separator: '-',
        preserveConsecutiveUppercase: false,
      })}.js`,
      namedImports: [param.type],
    })

    return param.type
  }

  resolveTypeForParam(sourceFile: SourceFile, param: TLSchemaParamParsed): string {
    if (!param.skipConstructorId) {
      return 'any'
    }

    const paramType = this.resolvePlainTypeForParam(param)

    if (paramType) {
      return paramType
    }

    return this.resolveCustomTypeForParam(sourceFile, param)
  }

  getTypeForParam(sourceFile: SourceFile, param: TLSchemaParamParsed): string {
    const paramType = this.resolveTypeForParam(sourceFile, param)

    if (param.isVector) {
      return `Array<${paramType}>`
    }

    return paramType
  }
}
