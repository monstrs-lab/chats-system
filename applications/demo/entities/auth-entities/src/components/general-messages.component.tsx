import type { UiText }       from '@ory/kratos-client'
import type { ReactElement } from 'react'

import { Layout }            from '@ui-proto/layout'
import { Column }            from '@ui-proto/layout'
import { Text }              from '@ui-proto/text'
import { Fragment }          from 'react'
import React                 from 'react'

export interface GeneralMessagesProps {
  messages?: Array<UiText>
}

export const GeneralMessages = ({ messages = [] }: GeneralMessagesProps): ReactElement => (
  <Column justifyContent='center' alignItems='center'>
    {messages.map((message) => (
      <Fragment key={message?.id}>
        <Layout width='100%' justifyContent='center'>
          <Text textAlign='center'>{message?.text}</Text>
        </Layout>
        <Layout flexBasis='6x' />
      </Fragment>
    ))}
  </Column>
)
