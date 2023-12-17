'use client'

import type { ReactElement } from 'react'

import { FlowInputNode }     from '@monstrs/next-identity-integration'
import { FlowSubmit }        from '@monstrs/next-identity-integration'
import { FlowMessages }      from '@monstrs/next-identity-integration'
import { FlowNodeMessages }  from '@monstrs/next-identity-integration'
import { RegistrationFlow }  from '@monstrs/next-identity-integration'
import { Button }            from '@ui-proto/button'
import { Input }             from '@ui-proto/input'
import { Column }            from '@ui-proto/layout'
import { Row }               from '@ui-proto/layout'
import { Layout }            from '@ui-proto/layout'
import { Text }              from '@ui-proto/text'
import NextLink              from 'next/link.js'
import React                 from 'react'

import { FieldMessages }     from './field-messages.component.jsx'
import { GeneralMessages }   from './general-messages.component.jsx'

export const RegistrationForm = (): ReactElement => (
  <RegistrationFlow>
    <Column>
      <FlowMessages>
        {(messages): ReactElement => (
          <Layout>
            <GeneralMessages messages={messages} />
          </Layout>
        )}
      </FlowMessages>
      <Layout justifyContent='center' mb='4x'>
        <Text fontSize='massive'>Регистрация</Text>
      </Layout>
      <Layout>
        <FlowInputNode name='traits.phone'>
          {({ attributes }, value, onChange): ReactElement => (
            <Column>
              <Layout mb='1x'>
                <Text>Телефон</Text>
              </Layout>
              <Layout>
                <Input
                  id='traits.phone'
                  placeholder='Введите телефон'
                  {...attributes}
                  value={value}
                  onValueChange={onChange}
                />
              </Layout>
              <Layout flexBasis='4x' py='1x'>
                <FlowNodeMessages name='traits.phone'>
                  {(messages): ReactElement => <FieldMessages messages={messages} />}
                </FlowNodeMessages>
              </Layout>
            </Column>
          )}
        </FlowInputNode>
      </Layout>
      <Layout>
        <FlowInputNode name='password'>
          {({ attributes }, value, onChange): ReactElement => (
            <Column>
              <Layout mb='1x'>
                <Text>Пароль</Text>
              </Layout>
              <Layout>
                <Input
                  id='password'
                  placeholder='Введите пароль'
                  {...attributes}
                  value={value}
                  onValueChange={onChange}
                />
              </Layout>
              <Layout flexBasis='4x' py='1x'>
                <FlowNodeMessages name='password'>
                  {(messages): ReactElement => <FieldMessages messages={messages} />}
                </FlowNodeMessages>
              </Layout>
            </Column>
          )}
        </FlowInputNode>
      </Layout>
      <Layout>
        <FlowInputNode name='traits.name.first'>
          {({ attributes }, value, onChange): ReactElement => (
            <Column>
              <Layout mb='1x'>
                <Text>Имя</Text>
              </Layout>
              <Layout>
                <Input
                  id='traits.name.first'
                  placeholder='Введите имя'
                  {...attributes}
                  value={value}
                  onValueChange={onChange}
                />
              </Layout>
              <Layout flexBasis='4x' py='1x'>
                <FlowNodeMessages name='traits.name.first'>
                  {(messages): ReactElement => <FieldMessages messages={messages} />}
                </FlowNodeMessages>
              </Layout>
            </Column>
          )}
        </FlowInputNode>
      </Layout>
      <Layout>
        <FlowInputNode name='traits.name.last'>
          {({ attributes }, value, onChange): ReactElement => (
            <Column>
              <Layout mb='1x'>
                <Text>Фамилия</Text>
              </Layout>
              <Layout>
                <Input
                  id='traits.name.last'
                  placeholder='Введите фамилию'
                  {...attributes}
                  value={value}
                  onValueChange={onChange}
                />
              </Layout>
              <Layout flexBasis='4x' py='1x'>
                <FlowNodeMessages name='traits.name.last'>
                  {(messages): ReactElement => <FieldMessages messages={messages} />}
                </FlowNodeMessages>
              </Layout>
            </Column>
          )}
        </FlowInputNode>
      </Layout>
      <Layout>
        <Row alignItems='center'>
          <Layout>
            <FlowSubmit>
              {({ submitting, onSubmit }): ReactElement => (
                <Button
                  disabled={submitting}
                  onClick={(): void => {
                    onSubmit()
                  }}
                >
                  Зарегистрироваться
                </Button>
              )}
            </FlowSubmit>
          </Layout>
          <Layout flexGrow={1} />
          <Layout>
            {/* @ts-expect-error */}
            <NextLink href='/auth/login'>Войти</NextLink>
          </Layout>
        </Row>
      </Layout>
    </Column>
  </RegistrationFlow>
)
