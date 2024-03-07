import type { ReactElement } from 'react'

import { Roboto }            from 'next/font/google'
import React                 from 'react'

const roboto = Roboto({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '700', '900'] })

export interface RootLayoutProps {
  children: ReactElement
}

export const RootLayout = ({ children }: RootLayoutProps): ReactElement => (
  <html className={roboto.className} style={{ height: '100%' }}>
    <body style={{ height: '100%' }}>{children}</body>
  </html>
)
