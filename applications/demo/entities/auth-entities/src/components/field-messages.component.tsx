import type { UiText }       from '@ory/kratos-client'
import type { ReactElement } from 'react'

import { Column }            from '@ui-proto/layout'
import { Layout }            from '@ui-proto/layout'
import { Text }              from '@ui-proto/text'
import React                 from 'react'

export interface FieldMessagesProps {
  messages?: Array<UiText>
}

export const FieldMessages = ({ messages = [] }: FieldMessagesProps): ReactElement => (
  <Column>
    {messages.map((message) => (
      <Layout key={message?.text}>
        <Text>{message?.text}</Text>
      </Layout>
    ))}
  </Column>
)
