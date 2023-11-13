import type { TLSchemaConstructorParsed } from '@chats-system/tl-json-schema-parser'
import type { Project }                   from 'ts-morph'

import { join }                           from 'node:path'

import { Scope }                          from 'ts-morph'
import camelcase                          from 'camelcase'

import { TLObjectGenerator }              from './tl-object.generator.js'

export class TLConstructorGenerator extends TLObjectGenerator {
  constructor(
    private readonly project: Project,
    private readonly outDir: string
  ) {
    super()
  }

  generate(schema: TLSchemaConstructorParsed): void {
    const sourceFile = this.project.createSourceFile(
      join(
        this.outDir,
        schema.namespace ? `${schema.namespace}.${schema.name}.ts` : `${schema.predicate}.ts`
      )
        .toLowerCase()
        .replaceAll('_', '-'),
      '',
      { overwrite: true }
    )

    sourceFile.addImportDeclaration({
      moduleSpecifier: '@chats-system/tl-json-schema-parser',
      namedImports: ['TLSchemaParamParsed'],
      isTypeOnly: true,
    })

    sourceFile.addImportDeclaration({
      moduleSpecifier: '@chats-system/tl-types',
      namedImports: ['TLConstructor'],
    })

    const classDeclaration = sourceFile.addClass({
      name: camelcase(schema.predicate, {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      extends: 'TLConstructor',
      isExported: true,
    })

    classDeclaration.addProperty({
      isStatic: true,
      hasOverrideKeyword: true,
      type: 'number',
      name: 'CONSTRUCTOR_ID',
      initializer: schema.id,
    })

    classDeclaration.addProperty({
      isStatic: true,
      hasOverrideKeyword: true,
      type: 'Array<TLSchemaParamParsed>',
      name: 'PARAMS',
      initializer: JSON.stringify(schema.params, null, 2),
    })

    if (schema.params.length > 0) {
      classDeclaration.addConstructor({
        statements: 'super()',
        parameters: schema.params.map((param) => ({
          isReadonly: true,
          scope: Scope.Public,
          name: param.name,
          type: this.getTypeForParam(sourceFile, param),
        })),
      })
    }
  }
}
