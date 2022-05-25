import { promises as fs } from 'fs'
import { dirname, resolve } from 'path'
import cpy from 'cpy'
import fg from 'fast-glob'
import less from 'less'

import { ES_DIR, LIB_DIR, SRC_DIR } from './tools'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sass = require('sass')

export const bundleLess = async() => {
  await Promise.all([
    cpy(`${SRC_DIR}/**/*.(less|scss)`, ES_DIR),
    cpy(`${SRC_DIR}/**/*.(less|scss)`, LIB_DIR)
  ])

  const lessFiles = await fg('**/index.(less|scss)', {
    cwd: SRC_DIR,
    onlyFiles: true
  })

  for (const lessFile of lessFiles) {
    const filePath = `${SRC_DIR}/${lessFile}`

    if (filePath.slice(-4) === 'scss') {
      const code = await sass.compile(filePath)
      await Promise.all([
        fs.writeFile(resolve(ES_DIR, lessFile.replace('.scss', '.css')), code.css),
        fs.writeFile(resolve(LIB_DIR, lessFile.replace('.scss', '.css')), code.css)
      ])
    } else {
      const lessContent = await fs.readFile(filePath, 'utf8')
      const code = await less.render(lessContent, {
        paths: [SRC_DIR, dirname(filePath)]
      })
      await Promise.all([
        fs.writeFile(resolve(ES_DIR, lessFile.replace('.less', '.css')), code.css),
        fs.writeFile(resolve(LIB_DIR, lessFile.replace('.less', '.css')), code.css)
      ])
    }
  }
}

bundleLess()
