import type { TLSchemaMethodParsed } from '@chats-system/tl-json-schema-parser'
import type { Project }              from 'ts-morph'

import { join }                      from 'node:path'

import { Scope }                     from 'ts-morph'
import camelcase                     from 'camelcase'

export class TLMethodGenerator {
  constructor(
    private readonly project: Project,
    private readonly outDir: string
  ) {}

  generate(schema: TLSchemaMethodParsed): void {
    const sourceFile = this.project.createSourceFile(
      join(
        this.outDir,
        schema.namespace ? `${schema.namespace}.${schema.name}.ts` : `${schema.name}.ts`
      ),
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
      namedImports: ['TLMethod'],
    })

    const classDeclaration = sourceFile.addClass({
      name: camelcase(schema.method, {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      extends: 'TLMethod',
      isExported: true,
    })

    classDeclaration.addProperty({
      isStatic: true,
      hasOverrideKeyword: true,
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
          type: 'any',
        })),
      })
    }
  }
}
