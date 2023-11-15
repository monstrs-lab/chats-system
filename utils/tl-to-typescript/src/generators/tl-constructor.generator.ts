import type { TLSchemaConstructorParsed } from '@chats-system/tl-json-schema-parser'
import type { Project }                   from 'ts-morph'

import { join }                           from 'node:path'

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
      moduleSpecifier: '@monstrs/mtproto-tl-types',
      namedImports: ['TLExtendedSchemaParam'],
      isTypeOnly: true,
    })

    sourceFile.addImportDeclaration({
      moduleSpecifier: '@monstrs/mtproto-tl-core',
      namedImports: ['TLConstructor'],
    })

    const interfaceDeclaration = sourceFile.addInterface({
       name: camelcase(`${schema.predicate}Values`, {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      properties: schema.params.map(param => ({
        name: camelcase(param.name, {
          pascalCase: false,
          preserveConsecutiveUppercase: true,
        }),
        type: this.getTypeForParam(sourceFile, param),
      }))
    })

    const classDeclaration = sourceFile.addClass({
      name: camelcase(schema.predicate, {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      extends: `TLConstructor<${interfaceDeclaration.getName()}>`,
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
      type: 'Array<TLExtendedSchemaParam>',
      name: 'PARAMS',
      initializer: JSON.stringify(schema.params, null, 2),
    })

    schema.params.forEach(param => {
      classDeclaration.addGetAccessor({
        name: camelcase(param.name, {
          pascalCase: false,
          preserveConsecutiveUppercase: true,
        }),
        returnType: this.getTypeForParam(sourceFile, param),
        statements: [`return this.values.${camelcase(param.name, {
          pascalCase: false,
          preserveConsecutiveUppercase: true,
        })}`],
      })
    })
  }
}
