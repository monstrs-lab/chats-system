import type { TLSchemaConstructorParsed } from '@chats-system/tl-json-schema-parser'
import type { Project }                   from 'ts-morph'

import camelcase                          from 'camelcase'

import { join } from 'node:path'

export class TLConstructorGenerator {
  constructor(private readonly project: Project, private readonly outDir: string) {}

  generate(schema: TLSchemaConstructorParsed): void {
    const sourceFile = this.project.createSourceFile(
      join(this.outDir, schema.namespace ? `${schema.namespace}.${schema.name}.ts` : `${schema.predicate}.ts`)
    )

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
        isStatic: false,
        name: 'type',
        initializer: writter => writter.quote(schema.type),
      })

    classDeclaration.addProperty({
      isStatic: false,
      name: 'constructorId',
      initializer: schema.id,
    })

    classDeclaration.addProperty({
        isStatic: false,
        name: 'params',
        initializer: JSON.stringify(schema.params, null, 2),
      })
  }
}
