import type { ReactElement }     from 'react'
import type { ReactNode }        from 'react'

import { Row }                   from '@ui-proto/layout'
import { Layout }                from '@ui-proto/layout'
import { BackgroundPlaceholder } from '@ui-proto/placeholder'
import React                     from 'react'

export default ({ children }: { children: ReactNode }): ReactElement => (
  <Row height='100%'>
    <Layout flexBasis='50%' alignItems='center' justifyContent='center'>
      {children}
    </Layout>
    <Layout flexBasis='50%'>
      <BackgroundPlaceholder />
    </Layout>
  </Row>
)
