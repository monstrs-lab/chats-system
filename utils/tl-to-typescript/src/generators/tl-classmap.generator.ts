import { Project }                 from 'ts-morph'
import { VariableDeclarationKind } from 'ts-morph'
import { SyntaxKind }              from 'ts-morph'
import { StructureKind }           from 'ts-morph'

import { basename, join } from 'node:path'

export class TLClassMapGenerator {
  constructor(private readonly project: Project, private readonly outDir: string) {}

  generate(): void {
    const sourceFile = this.project.createSourceFile(join(this.outDir, 'class.map.ts'), '', { overwrite: true })

    const classMap: Map<string, string> = new Map()

    this.project.getSourceFiles().forEach((sf) => {
      sf.getClasses().forEach((clazz) => {
        const idConstructor = clazz
          .getProperties()
          .find((property) => property.getName() === 'constructorId')

        if (idConstructor) {
          classMap.set(idConstructor.getInitializer()!.getText()!, clazz.getName()!)

          sourceFile.addImportDeclaration({
            moduleSpecifier: `./${basename(sf.getFilePath().replace('.ts', '.js'))}`,
            namedImports: [clazz.getName()!],
          })
        }
      })
    })

    sourceFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: 'classmap',
          initializer: '{}',
        },
      ],
    })

    const objectLiteralExpression = sourceFile
      .getVariableDeclarationOrThrow('classmap')
      .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)

    objectLiteralExpression.insertProperties(
      0,
      Array.from(classMap.keys()).map((key) => ({
        kind: StructureKind.PropertyAssignment,
        name: `[Number(${key})]`,
        initializer: classMap.get(key)!,
      }))
    )
  }
}
