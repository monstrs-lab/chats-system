import type { ReactElement }                       from 'react'

import { Row }                                     from '@ui-proto/layout'
import { Column }                             from '@ui-proto/layout'
import { Layout }                     from '@ui-proto/layout'
import { BackgroundPlaceholder }                   from '@ui-proto/placeholder'
import { ImagePlaceholder } from '@ui-proto/placeholder'
import { Text }                                    from '@ui-proto/text'
import React                                       from 'react'

export interface AuthLayoutProps {
  children: ReactElement
}

export const AuthLayout = ({ children }: AuthLayoutProps): ReactElement => (
  <BackgroundPlaceholder>
    <Row height='100%'>
      <Layout flexBasis={['100%', '50%']} background='white'>
        <Column alignItems='center' width='100%'>
          <Layout mt='6x'>
            <Row alignItems='center'>
              <Layout>
                <ImagePlaceholder size={28} />
              </Layout>
              <Layout pl='1x'>
                <Text fontSize='massive'>Chats System</Text>
              </Layout>
            </Row>
          </Layout>
          <Layout flexGrow={1} />
          <Layout width='100%'>
            <Row>
            <Layout flexGrow={1} />
              <Layout flexGrow={1}>{children}</Layout>
              <Layout flexGrow={1} />
            </Row>
          </Layout>
          <Layout flexGrow={1} />
        </Column>
      </Layout>
    </Row>
  </BackgroundPlaceholder>
)
