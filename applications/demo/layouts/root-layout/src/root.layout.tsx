import type { ReactElement } from 'react'

import React                 from 'react'

export interface RootLayoutProps {
  children: ReactElement
}

export const RootLayout = ({ children }: RootLayoutProps): ReactElement => (
  <html>
    <body>{children}</body>
  </html>
)
