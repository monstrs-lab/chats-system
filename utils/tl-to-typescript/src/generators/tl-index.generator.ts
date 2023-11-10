import { Project }                 from 'ts-morph'
import { basename } from 'node:path'

import { join } from 'node:path'

export class TLIndexGenerator {
  constructor(private readonly project: Project, private readonly outDir: string) {}

  generate(): void {
    const sourceFile = this.project.createSourceFile(join(this.outDir, 'index.ts'))

    this.project.getSourceFiles().forEach((sf) => {
        sourceFile.addExportDeclaration({
            moduleSpecifier: `./${basename(sf.getFilePath())}`,
          }).toNamespaceExport()
    })
  }
}
