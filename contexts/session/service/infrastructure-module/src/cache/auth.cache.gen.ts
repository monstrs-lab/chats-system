import { Cache }                             from 'cache'
import { Context }                           from 'context'
import { TLFutureSalt }                      from 'github.com/teamgram/proto/mtproto'
import { TLInitConnection }                  from 'github.com/teamgram/proto/mtproto'
import { TLAuthsessionGetUserId }            from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionGetPushSessionId }     from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionGetLayer }             from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionGetClient }            from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionGetLangPack }          from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionGetPermAuthKeyId }     from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionGetFutureSalts }       from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionSetLayer }             from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionSetInitConnection }    from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionSetClientSessionInfo } from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { TLAuthsessionGetAuthStateData }     from 'github.com/teamgram/teamgram-server/app/service/authsession/authsession'
import { logx }                              from 'logx'

class CacheAuthValue {
  UserId: number
  Layer: number
  pushSessionId: number
  client: string
  langpack: string
  SaltList: TLFutureSalt[]
  PermAuthKeyId: number

  Size(): number {
    return 1
  }
}

class Dao {
  cache: Cache

  constructor() {
    this.cache = new Cache()
  }

  getCacheValue(authKeyId: number): CacheAuthValue {
    const cacheK = authKeyId.toString()
    if (!this.cache.has(cacheK)) {
      const cv = new CacheAuthValue()
      this.cache.set(cacheK, cv)
      return cv
    } else {
      return this.cache.get(cacheK)
    }
  }

  GetCacheUserID(ctx: Context, authKeyId: number): [number, boolean] {
    const cv = this.getCacheValue(authKeyId)
    if (cv.UserId == 0) {
      const id = this.AuthsessionClient.AuthsessionGetUserId(
        ctx,
        new TLAuthsessionGetUserId({
          AuthKeyId: authKeyId,
        })
      )
      if (id instanceof Error) {
        logx.WithContext(ctx).Error(id.message)
        return [0, false]
      }
      cv.UserId = id.GetV()
    }
    return [cv.UserId, true]
  }

  GetCachePushSessionID(ctx: Context, userId: number, authKeyId: number): [number, boolean] {
    const cv = this.getCacheValue(authKeyId)
    if (cv.pushSessionId == 0) {
      const id = this.AuthsessionClient.AuthsessionGetPushSessionId(
        ctx,
        new TLAuthsessionGetPushSessionId({
          UserId: userId,
          AuthKeyId: authKeyId,
          TokenType: 7,
        })
      )
      if (id instanceof Error) {
        logx.WithContext(ctx).Error(id.message)
        return [0, false]
      }
      cv.pushSessionId = id.GetV()
    }
    return [cv.pushSessionId, true]
  }

  GetCacheApiLayer(ctx: Context, authKeyId: number): [number, boolean] {
    const cv = this.getCacheValue(authKeyId)
    if (cv.Layer == 0) {
      const id = this.AuthsessionClient.AuthsessionGetLayer(
        ctx,
        new TLAuthsessionGetLayer({
          AuthKeyId: authKeyId,
        })
      )
      if (id instanceof Error) {
        logx.WithContext(ctx).Error(id.message)
        return [0, false]
      }
      cv.Layer = id.GetV()
    }
    return [cv.Layer, true]
  }

  GetCacheClient(ctx: Context, authKeyId: number): string {
    const cv = this.getCacheValue(authKeyId)
    if (cv.client == '') {
      const r = this.AuthsessionClient.AuthsessionGetClient(
        ctx,
        new TLAuthsessionGetClient({
          AuthKeyId: authKeyId,
        })
      )
      if (r instanceof Error) {
        logx.WithContext(ctx).Error(r.message)
        return ''
      }
      cv.client = r.GetV()
    }
    return cv.client
  }

  GetCacheLangpack(ctx: Context, authKeyId: number): string {
    const cv = this.getCacheValue(authKeyId)
    if (cv.langpack == '') {
      const r = this.AuthsessionClient.AuthsessionGetLangPack(
        ctx,
        new TLAuthsessionGetLangPack({
          AuthKeyId: authKeyId,
        })
      )
      if (r instanceof Error) {
        logx.WithContext(ctx).Error(r.message)
        return ''
      }
      cv.langpack = r.GetV()
    }
    return cv.langpack
  }

  GetCachePermAuthKeyId(ctx: Context, authKeyId: number): number {
    const cv = this.getCacheValue(authKeyId)
    if (cv.PermAuthKeyId == 0) {
      const r = this.AuthsessionClient.AuthsessionGetPermAuthKeyId(
        ctx,
        new TLAuthsessionGetPermAuthKeyId({
          AuthKeyId: authKeyId,
        })
      )
      if (r instanceof Error) {
        logx.WithContext(ctx).Error(r.message)
        return 0
      }
      cv.PermAuthKeyId = r.GetV()
    }
    return cv.PermAuthKeyId
  }

  PutCacheApiLayer(ctx: Context, authKeyId: number, layer: number): void {
    const cv = this.getCacheValue(authKeyId)
    cv.Layer = layer
  }

  PutCacheClient(ctx: Context, authKeyId: number, v: string): void {
    const cv = this.getCacheValue(authKeyId)
    cv.client = v
  }

  PutCacheLangpack(ctx: Context, authKeyId: number, v: string): void {
    const cv = this.getCacheValue(authKeyId)
    cv.langpack = v
  }

  PutCacheUserId(ctx: Context, authKeyId: number, userId: number): void {
    const cv = this.getCacheValue(authKeyId)
    cv.UserId = userId
  }

  PutCachePushSessionId(ctx: Context, authKeyId: number, sessionId: number): void {
    const cv = this.getCacheValue(authKeyId)
    cv.pushSessionId = sessionId
  }

  PutCachePermAuthKeyId(ctx: Context, authKeyId: number, kId: number): void {
    const cv = this.getCacheValue(authKeyId)
    cv.PermAuthKeyId = kId
  }

  getFutureSaltList(ctx: Context, authKeyId: number): [TLFutureSalt[], boolean] {
    const cv = this.getCacheValue(authKeyId)
    const date = Math.floor(Date.now() / 1000)
    if (cv.SaltList.length > 0) {
      const futureSalts = cv.SaltList
      for (let i = 0; i < futureSalts.length; i++) {
        const salt = futureSalts[i]
        if (salt.Data2.ValidUntil >= date) {
          if (i > 0) {
            return [futureSalts.slice(i - 1), true]
          } else {
            return [futureSalts.slice(i), true]
          }
        }
      }
    }
    const futureSalts = this.AuthsessionClient.AuthsessionGetFutureSalts(
      ctx,
      new TLAuthsessionGetFutureSalts({
        AuthKeyId: authKeyId,
      })
    )
    if (futureSalts instanceof Error) {
      logx.WithContext(ctx).Error(futureSalts.message)
      return [null, false]
    }
    const saltList = futureSalts.GetSalts()
    for (let i = 0; i < saltList.length; i++) {
      const salt = saltList[i]
      if (salt.Data2.ValidUntil >= date) {
        if (i > 0) {
          const slicedSaltList = saltList.slice(i - 1)
          cv.SaltList = slicedSaltList
          return [slicedSaltList, true]
        } else {
          const slicedSaltList = saltList.slice(i)
          cv.SaltList = slicedSaltList
          return [slicedSaltList, true]
        }
      }
    }
    return [null, false]
  }

  PutLayer(ctx: Context, authKeyId: number, layer: number, ip: string): void {
    this.AuthsessionClient.AuthsessionSetLayer(
      ctx,
      new TLAuthsessionSetLayer({
        AuthKeyId: authKeyId,
        Ip: ip,
        Layer: layer,
      })
    )
  }

  PutInitConnection(
    ctx: Context,
    authKeyId: number,
    ip: string,
    initConnection: TLInitConnection
  ): void {
    let proxy = ''
    let params = ''
    if (initConnection.Proxy != null) {
      proxy = hack.String(mtproto.TLObjectToJson(initConnection.Proxy))
    }
    if (initConnection.Params != null) {
      params = hack.String(mtproto.TLObjectToJson(initConnection.Params))
    }
    this.AuthsessionClient.AuthsessionSetInitConnection(
      ctx,
      new TLAuthsessionSetInitConnection({
        AuthKeyId: authKeyId,
        Ip: ip,
        ApiId: initConnection.ApiId,
        DeviceModel: initConnection.DeviceModel,
        SystemVersion: initConnection.SystemVersion,
        AppVersion: initConnection.AppVersion,
        SystemLangCode: initConnection.SystemLangCode,
        LangPack: initConnection.LangPack,
        LangCode: initConnection.LangCode,
        Proxy: proxy,
        Params: params,
      })
    )
  }

  PutUploadInitConnection(
    ctx: Context,
    authKeyId: number,
    layer: number,
    ip: string,
    initConnection: TLInitConnection
  ): void {
    const session = authsession
      .MakeTLClientSession(
        new authsession.ClientSession({
          AuthKeyId: authKeyId,
          Ip: ip,
          Layer: layer,
          ApiId: initConnection.ApiId,
          DeviceModel: initConnection.DeviceModel,
          SystemVersion: initConnection.SystemVersion,
          AppVersion: initConnection.AppVersion,
          SystemLangCode: initConnection.SystemLangCode,
          LangPack: initConnection.LangPack,
          LangCode: initConnection.LangCode,
          Proxy: '',
          Params: '',
        })
      )
      .To_ClientSession()
    if (initConnection.Proxy != null) {
      session.Proxy = hack.String(mtproto.TLObjectToJson(initConnection.Proxy))
    }
    if (initConnection.Params != null) {
      session.Params = hack.String(mtproto.TLObjectToJson(initConnection.Params))
    }
    this.AuthsessionClient.AuthsessionSetClientSessionInfo(
      ctx,
      new TLAuthsessionSetClientSessionInfo({
        Data: session,
      })
    )
  }

  GetOrFetchNewSalt(ctx: Context, authKeyId: number): [TLFutureSalt, TLFutureSalt, Error] {
    const [cacheSalts, _] = this.getFutureSaltList(ctx, authKeyId)
    if (cacheSalts.length < 2) {
      return [null, null, new Error('get salt error')]
    } else {
      if (cacheSalts[0].ValidUntil >= Math.floor(Date.now() / 1000)) {
        return [cacheSalts[0], null, null]
      } else {
        return [cacheSalts[1], cacheSalts[0], null]
      }
    }
  }

  GetFutureSalts(ctx: Context, authKeyId: number, num: number): [TLFutureSalt[], Error] {
    const [cacheSalts, _] = this.getFutureSaltList(ctx, authKeyId)
    return [cacheSalts, null]
  }

  GetKeyStateData(ctx: Context, authKeyId: number): [authsession.AuthKeyStateData, Error] {
    return this.AuthsessionClient.AuthsessionGetAuthStateData(
      ctx,
      new TLAuthsessionGetAuthStateData({
        AuthKeyId: authKeyId,
      })
    )
  }
}
