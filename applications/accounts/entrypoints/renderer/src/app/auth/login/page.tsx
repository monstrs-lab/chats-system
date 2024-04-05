'use client'

import type { ReactElement } from 'react'

import { LoginFlow }         from '@monstrs/next-identity-integration'
import { FlowSubmit }        from '@monstrs/next-identity-integration'
import { FlowMessages }      from '@monstrs/next-identity-integration'
import { FlowNodeMessages }  from '@monstrs/next-identity-integration'
import { FlowInputNode }     from '@monstrs/next-identity-integration'
import { Button }            from '@ui-proto/button'
import { Input }             from '@ui-proto/input'
import { Column }            from '@ui-proto/layout'
import { Row }               from '@ui-proto/layout'
import { Layout }            from '@ui-proto/layout'
import { Text }              from '@ui-proto/text'
import { Fragment }          from 'react'
import LinkPkg               from 'next/link.js'
import React                 from 'react'

const Link = LinkPkg.default || LinkPkg

export default (): ReactElement => (
  <LoginFlow>
    <FlowSubmit>
      {({ submitting, onSubmit }): ReactElement => (
        <Row>
          <Layout flexBasis='10x' />
          <Layout flexGrow={1}>
            <Column justifyContent='center'>
              <Layout justifyContent='center'>
                <Text fontWeight='semibold' fontSize='standard'>
                  Войдите в аккаунт
                </Text>
              </Layout>
              <Layout flexBasis='6x' />
              <FlowMessages>
                {(messages): ReactElement => (
                  <Layout>
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
                  </Layout>
                )}
              </FlowMessages>
              <Layout>
                <FlowInputNode name='identifier'>
                  {({ attributes }, value, onChange): ReactElement => (
                    <FlowNodeMessages name='identifier'>
                      {(messages): ReactElement => (
                        <Column>
                          <Layout mb='1x'>
                            <Text fontWeight='bold'>E-mail</Text>
                          </Layout>
                          <Layout>
                            <Input
                              id='identifier'
                              size='normal'
                              placeholder='Введите e-mail'
                              {...attributes}
                              value={value}
                              onValueChange={onChange}
                              onKeyDown={(ev): void => {
                                if (ev.key === 'Enter') {
                                  onSubmit({ method: 'password' })
                                }
                              }}
                            />
                          </Layout>
                          <Layout flexBasis='6x' py='2x'>
                            <Column>
                              {messages.map((message) => (
                                <Layout key={message?.text}>
                                  <Text key={message?.id}>{message?.text}</Text>
                                </Layout>
                              ))}
                            </Column>
                          </Layout>
                        </Column>
                      )}
                    </FlowNodeMessages>
                  )}
                </FlowInputNode>
              </Layout>
              <Layout>
                <FlowInputNode name='password'>
                  {({ attributes }, value, onChange): ReactElement => (
                    <FlowNodeMessages name='password'>
                      {(messages): ReactElement => (
                        <Column>
                          <Layout mb='1x'>
                            <Text fontWeight='bold'>Пароль</Text>
                          </Layout>
                          <Layout>
                            <Input
                              id='password'
                              size='normal'
                              placeholder='Введите пароль'
                              {...attributes}
                              value={value}
                              onValueChange={onChange}
                              onKeyDown={(ev): void => {
                                if (ev.key === 'Enter') {
                                  onSubmit({ method: 'password' })
                                }
                              }}
                            />
                          </Layout>
                          <Layout flexBasis='6x' py='2x'>
                            <Column>
                              {messages.map((message) => (
                                <Layout key={message?.text}>
                                  <Text key={message?.id}>{message?.text}</Text>
                                </Layout>
                              ))}
                            </Column>
                          </Layout>
                        </Column>
                      )}
                    </FlowNodeMessages>
                  )}
                </FlowInputNode>
              </Layout>
              <Layout>
                <Button
                  style={{ width: '100%' }}
                  size='large'
                  disabled={submitting}
                  onClick={(): void => {
                    onSubmit({ method: 'password' })
                  }}
                >
                  Войти
                </Button>
              </Layout>
              <Layout mt='4x'>
                <Text fontSize='medium' pr='0.5x'>
                  Нет аккаунта?
                </Text>
                <Link href='/auth/registration'>
                  <Text fontSize='medium' style={{ textDecoration: 'underline' }}>
                    Зарегистрируйтесь
                  </Text>
                </Link>
              </Layout>
            </Column>
          </Layout>
          <Layout flexBasis='10x' />
        </Row>
      )}
    </FlowSubmit>
  </LoginFlow>
)
