import type { TLObject }          from '@chats-system/tl'
import type { ExtractProperties } from '@monstrs/base-types'

import type { SessionData }       from '../data/index.js'

import { Injectable }             from '@nestjs/common'

import { RpcMetadata }            from '@chats-system/core-rpc'
import { Primitive }              from '@chats-system/tl'
import { client as auth }         from '@chats-system/auth-rpc-client'
import { client as authSession }  from '@chats-system/auth-session-rpc-client'
import { client as help }         from '@chats-system/help-rpc-client'
import { client as updates }      from '@chats-system/updates-rpc-client'
import TL                         from '@chats-system/tl'

export type InvokeRpcMetadata = ExtractProperties<RpcMetadata>

@Injectable()
export class Invoker {
  async invoke(
    sessionData: SessionData,
    message: InstanceType<typeof TLObject>,
    metadata: InvokeRpcMetadata
  ): Promise<InstanceType<typeof TLObject>> {
    const headers = {
      metadata: Buffer.from(new RpcMetadata(metadata).toBinary()).toString('base64'),
    }

    if (message instanceof TL.langpack.GetLangPack) {
      const result = await authSession.getLangPack({
        authKeyId: sessionData.authKeyId,
      })

      return new TL.LangPackDifference({
        langCode: result.langPack || message.langCode,
        fromVersion: 0,
        version: 0,
        strings: [],
      })
    }

    if (message instanceof TL.langpack.GetStrings) {
      return {
        write() {
          const id = Buffer.alloc(4)
          id.writeInt32LE(481674261)

          const length = Buffer.alloc(4)
          length.writeInt32LE(0)

          return Buffer.concat([id, length])
        },
      } as InstanceType<typeof TLObject>
    }

    if (message instanceof TL.account.RegisterDevice) {
      return new Primitive.BoolTrue()
    }

    if (message instanceof TL.help.GetConfig) {
      const response = await help.getConfig({})

      return new TL.Config({
        ...response.config!,
        dcOptions:
          response.config?.dcOptions.map(
            (dcOption): TL.DcOption =>
              new TL.DcOption({
                ...dcOption,
                secret: Buffer.from(dcOption.secret || []),
              })
          ) || [],
        reactionsDefault: undefined,
      })
    }

    if (message instanceof TL.updates.GetState) {
      const response = await updates.getState({
        authKeyId: metadata.authKeyId,
        userId: metadata.userId,
      })

      return new TL.updates.State(response.state!)
    }

    if (message instanceof TL.help.GetNearestDc) {
      const response = await help.getNearestDc({})

      return new TL.NearestDc(response.nearestDc!)
    }

    if (message instanceof TL.help.GetCountriesList) {
      const response = await help.getCountriesList({
        langCode: message.langCode,
        hash: message.hash,
      })

      return new TL.help.CountriesList({
        countries: response.countries.map(
          (country) =>
            new TL.help.Country({
              ...country,
              countryCodes: country.countryCodes.map(
                (countryCode) => new TL.help.CountryCode(countryCode)
              ),
            })
        ),
        hash: response.hash,
      })
    }

    if (message instanceof TL.auth.ExportLoginToken) {
      return new TL.auth.LoginToken({
        expires: Math.floor(Date.now() / 1000) + 3500,
        token: Buffer.from('YWRzZmFzZGZhc2RmYXNkZmFkZmFk', 'base64'),
      })
    }

    if (message instanceof TL.auth.SendCode) {
      const response = await auth.sendCode(message, { headers })

      return new TL.auth.SentCode({
        type: new TL.auth.SentCodeTypeSms({ length: 5 }),
        phoneCodeHash: response.sentCode!.phoneCodeHash,
        timeout: response.sentCode!.timeout,
      })
    }

    if (message instanceof TL.auth.SignIn) {
      // @ts-expect-error
      const response = await auth.signIn(message, { headers })

      if (!response.authorization) {
        return new TL.auth.AuthorizationSignUpRequired({})
      }

      return new TL.auth.Authorization({
        user: new TL.User({
          id: 1234134123412344n,
        }),
      })
    }

    if (message instanceof TL.auth.SignUp) {
      const response = await auth.signUp(message, { headers})

      return new TL.auth.Authorization({
        // @ts-expect-error
        user: new TL.User(response.authorization!.user!)
      })
    }

    throw new Error(
      `Invoke unknown type: ${message.className} ${message.classType} ${message.constructorId}`
    )
  }
}
