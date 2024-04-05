import './layout.css.js'

import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import { Roboto }            from 'next/font/google'
import React                 from 'react'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['400', '500', '700', '900'] })

export default ({ children }: { children: ReactNode }): ReactElement => (
  <html className={roboto.className}>
    <body>{children}</body>
  </html>
)
