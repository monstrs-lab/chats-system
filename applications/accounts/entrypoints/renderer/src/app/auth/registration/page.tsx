'use client'

import type { ReactElement } from 'react'

import { RegistrationFlow }  from '@monstrs/next-identity-integration'
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
import { Suspense }          from 'react'
import LinkPkg               from 'next/link.js'
import React                 from 'react'

const Link = LinkPkg.default || LinkPkg

export default (): ReactElement => (
  <Suspense>
    <RegistrationFlow>
      <FlowSubmit>
        {({ submitting, onSubmit }): ReactElement => (
          <Row>
            <Layout flexBasis='10x' />
            <Layout flexGrow={1}>
              <Column justifyContent='center'>
                <Layout justifyContent='center'>
                  <Text fontWeight='semibold' fontSize='standard'>
                    Создайте аккаунт
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
                  <FlowInputNode name='traits.email'>
                    {({ attributes }, value, onChange): ReactElement => (
                      <FlowNodeMessages name='traits.email'>
                        {(messages): ReactElement => (
                          <Column>
                            <Layout mb='1x'>
                              <Text fontWeight='bold'>E-mail</Text>
                            </Layout>
                            <Layout>
                              <Input
                                id='traits.email'
                                size='normal'
                                placeholder='Введите e-mail'
                                {...attributes}
                                value={value}
                                onValueChange={onChange}
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
                  <FlowInputNode name='traits.name.first'>
                    {({ attributes }, value, onChange): ReactElement => (
                      <FlowNodeMessages name='traits.name.first'>
                        {(messages): ReactElement => (
                          <Column>
                            <Layout mb='1x'>
                              <Text fontWeight='bold'>Имя</Text>
                            </Layout>
                            <Layout>
                              <Input
                                id='traits.name.first'
                                size='normal'
                                placeholder='Введите Имя'
                                {...attributes}
                                value={value}
                                onValueChange={onChange}
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
                  <FlowInputNode name='traits.name.last'>
                    {({ attributes }, value, onChange): ReactElement => (
                      <FlowNodeMessages name='traits.name.last'>
                        {(messages): ReactElement => (
                          <Column>
                            <Layout mb='1x'>
                              <Text fontWeight='bold'>Фамилия</Text>
                            </Layout>
                            <Layout>
                              <Input
                                id='traits.name.last'
                                size='normal'
                                placeholder='Введите Фамилию'
                                {...attributes}
                                value={value}
                                onValueChange={onChange}
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
                      onSubmit()
                    }}
                  >
                    Зарегистрироваться
                  </Button>
                </Layout>
                <Layout mt='4x'>
                  <Text fontSize='medium' pr='0.5x'>
                    Есть аккаунт?
                  </Text>
                  <Link href='/auth/login'>
                    <Text fontSize='medium' style={{ textDecoration: 'underline' }}>
                      Авторизуйтесь
                    </Text>
                  </Link>
                </Layout>
              </Column>
            </Layout>
            <Layout flexBasis='10x' />
          </Row>
        )}
      </FlowSubmit>
    </RegistrationFlow>
  </Suspense>
)
