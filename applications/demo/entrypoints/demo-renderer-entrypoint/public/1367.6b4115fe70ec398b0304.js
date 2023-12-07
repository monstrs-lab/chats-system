;(() => {
  'use strict'
  const e = 'tt-media-progressive',
    t = 'tt-assets',
    n =
      ('undefined' != typeof window && window.innerHeight,
      Math.round(425),
      new Set([
        'newMessage',
        'newScheduledMessage',
        'deleteMessages',
        'deleteScheduledMessages',
        'deleteHistory',
      ]),
      new Set(['image/png', 'image/jpeg', 'image/gif'])),
    s = new Set(['video/mp4'])
  new Set([
    'audio/mp3',
    'audio/ogg',
    'audio/wav',
    'audio/mpeg',
    'audio/flac',
    'audio/aac',
    'audio/m4a',
    'audio/mp4',
    'audio/x-m4a',
  ]),
    new Set([...n, ...s]),
    new Set(['teamgram.me', 'web.teamgram.me', 'k.teamgram.me', 'z.teamgram.me']),
    new Set([
      'AU',
      'BD',
      'CA',
      'CO',
      'EG',
      'HN',
      'IE',
      'IN',
      'JO',
      'MX',
      'MY',
      'NI',
      'NZ',
      'PH',
      'PK',
      'SA',
      'SV',
      'US',
    ])
  const a = (e) =>
      new Promise((t) => {
        setTimeout(() => t(), e)
      }),
    i = 524288,
    r = new Map()
  async function o(e, t) {
    const n = t.url.includes('/download/')
      ? (await self.clients.matchAll()).find(
          (e) => 'window' === e.type && 'top-level' === e.frameType
        )
      : await self.clients.get(e.clientId)
    if (!n) return
    const s = (function (e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        do {
          t = String(Math.random()).replace('0.', 'id')
        } while (e[t])
        return n && (e[t] = !0), t
      })(r),
      i = {}
    let o = !1
    const c = Promise.race([
      a(6e4).then(() => (o ? void 0 : Promise.reject(new Error('ERROR_PART_TIMEOUT')))),
      new Promise((e, t) => {
        Object.assign(i, { resolve: e, reject: t })
      }),
    ])
    return (
      r.set(s, i),
      c
        .catch(() => {})
        .finally(() => {
          r.delete(s), (o = !0)
        }),
      n.postMessage({ type: 'requestPart', messageId: s, params: t }),
      c
    )
  }
  self.addEventListener('message', (e) => {
    const { type: t, messageId: n, result: s } = e.data
    if ('partResponse' === t) {
      const e = r.get(n)
      e && e.resolve(s)
    }
  })
  const c = 1048576
  class u {
    constructor() {
      var e, t, n
      ;(e = this),
        (n = void 0),
        (t = (function (e) {
          var t = (function (e, t) {
            if ('object' != typeof e || null === e) return e
            var n = e[Symbol.toPrimitive]
            if (void 0 !== n) {
              var s = n.call(e, t)
              if ('object' != typeof s) return s
              throw new TypeError('@@toPrimitive must return a primitive value.')
            }
            return String(e)
          })(e, 'string')
          return 'symbol' == typeof t ? t : String(t)
        })((t = 'queue'))) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        (this.queue = [])
    }
    push(e) {
      this.queue.push(e)
    }
    async pop() {
      return await this.queue.shift()
    }
    get size() {
      return this.queue.length
    }
  }
  async function l(e) {
    const n = await d(async () => {
        const n = await self.caches.open(t),
          s = await n.match(e.request)
        return { cache: n, cached: s }
      }, 3e3),
      { cache: s, cached: a } = n || {}
    if (s && a) {
      if (a.ok) return a
      await s.delete(e.request)
    }
    const i = await fetch(e.request)
    return i.ok && s && s.put(e.request, i.clone()), i
  }
  async function d(e, t) {
    let n = !1
    try {
      return await Promise.race([
        a(t).then(() => (n ? void 0 : Promise.reject(new Error('TIMEOUT')))),
        e(),
      ])
    } catch (e) {
      return void console.error(e)
    } finally {
      n = !0
    }
  }
  var f, p
  ;((p = f || (f = {})).True = '1'), (p.False = '0')
  let m = new Date().valueOf()
  const h = new Set(),
    g = {}
  function w(e) {
    return e.custom.from_id
      ? e.custom.from_id
      : e.custom.chat_id || e.custom.channel_id
      ? `-${e.custom.chat_id || e.custom.channel_id}`
      : void 0
  }
  function y(e) {
    if (e.custom.msg_id) return parseInt(e.custom.msg_id, 10)
  }
  async function v() {
    const e = new URL(self.registration.scope).origin
    return (await self.clients.matchAll({ type: 'window' })).filter(
      (t) => new URL(t.url).origin === e
    )
  }
  async function b(e) {
    const t = (await v())[0]
    t && t.postMessage({ type: 'playNotificationSound', payload: { id: e } })
  }
  function S(e) {
    let {
      chatId: t,
      messageId: n,
      body: s,
      title: a,
      icon: i,
      reaction: r,
      isSilent: o,
      shouldReplaceHistory: c,
    } = e
    const u = new Date().valueOf() - m < 1e3,
      l = {
        body: s,
        data: { chatId: t, messageId: n, reaction: r, count: 1, shouldReplaceHistory: c },
        icon: i || 'icon-192x192.png',
        badge: 'icon-192x192.png',
        tag: String(u ? 0 : t || 0),
        vibrate: [200, 100, 200],
      }
    return Promise.all([
      r || o ? void 0 : b(String(n) || t || ''),
      self.registration.showNotification(a, l),
    ])
  }
  async function R(e, t) {
    if (t.chatId && (e.postMessage({ type: 'focusMessage', payload: t }), !e.focused))
      try {
        await e.focus()
      } catch (e) {}
  }
  function I(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ('object' != typeof e || null === e) return e
          var n = e[Symbol.toPrimitive]
          if (void 0 !== n) {
            var s = n.call(e, t)
            if ('object' != typeof s) return s
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return String(e)
        })(e, 'string')
        return 'symbol' == typeof t ? t : String(t)
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    )
  }
  self.addEventListener('sync', () => {
    m = Date.now()
  })
  class P {
    constructor() {
      I(this, 'promise', void 0),
        I(this, 'reject', void 0),
        I(this, 'resolve', void 0),
        (this.promise = new Promise((e, t) => {
          ;(this.reject = t), (this.resolve = e)
        }))
    }
  }
  const T = new P()
  T.resolve()
  const q = new Map()
  const M = /\.(wasm|html)$/,
    E = /[\da-f]{20}.*\.(js|css|woff2?|svg|png|jpg|jpeg|tgs|json|wasm)$/
  self.addEventListener('install', (e) => {
    e.waitUntil(self.skipWaiting())
  }),
    self.addEventListener('activate', (e) => {
      e.waitUntil(
        Promise.race([a(3e3), Promise.all([self.caches.delete(t), self.clients.claim()])])
      )
    }),
    self.addEventListener('fetch', (n) => {
      const { url: s } = n.request
      if (s.includes('/progressive/'))
        return (
          n.respondWith(
            (async function (t) {
              const { url: n } = t.request,
                s = t.request.headers.get('range'),
                a = /^bytes=(\d+)-(\d+)?$/g.exec(s || ''),
                r = Number(a[1])
              let c = Number(a[2])
              if (((!c || c - r + 1 > i) && (c = r + i - 1), 0 === r && 1 === c)) {
                const e = t.request.url.match(/fileSize=(\d+)&mimeType=([\w/]+)/),
                  n = e && Number(e[1]),
                  s = e?.[2]
                if (n && s)
                  return new Response(new Uint8Array(2).buffer, {
                    status: 206,
                    statusText: 'Partial Content',
                    headers: [
                      ['Content-Range', `bytes 0-1/${n}`],
                      ['Accept-Ranges', 'bytes'],
                      ['Content-Length', '2'],
                      ['Content-Type', s],
                    ],
                  })
              }
              const u = `${n}?start=${r}&end=${c}`,
                [l, d] = await (async function (t) {
                  const n = await self.caches.open(e)
                  return Promise.all([
                    n.match(`${t}&type=arrayBuffer`).then((e) => (e ? e.arrayBuffer() : void 0)),
                    n.match(`${t}&type=headers`).then((e) => (e ? e.json() : void 0)),
                  ])
                })(u)
              if (l)
                return new Response(l, { status: 206, statusText: 'Partial Content', headers: d })
              let f
              try {
                f = await o(t, { url: n, start: r, end: c })
              } catch (e) {}
              if (!f)
                return new Response('', {
                  status: 500,
                  statusText: 'Failed to fetch progressive part',
                })
              const { arrayBuffer: p, fullSize: m, mimeType: h } = f,
                g = Math.min(c - r + 1, p.byteLength)
              c = r + g - 1
              const w = p.slice(0, g),
                y = [
                  ['Content-Range', `bytes ${r}-${c}/${m}`],
                  ['Accept-Ranges', 'bytes'],
                  ['Content-Length', String(g)],
                  ['Content-Type', h],
                ]
              return (
                g <= 524288 &&
                  c < 2097151 &&
                  (async function (t, n, s) {
                    const a = await self.caches.open(e)
                    Promise.all([
                      a.put(new Request(`${t}&type=arrayBuffer`), new Response(n)),
                      a.put(new Request(`${t}&type=headers`), new Response(JSON.stringify(s))),
                    ])
                  })(u, w, y),
                new Response(w, { status: 206, statusText: 'Partial Content', headers: y })
              )
            })(n)
          ),
          !0
        )
      if (s.includes('/download/'))
        return (
          n.respondWith(
            (async function (e) {
              const { url: t } = e.request
              let n
              try {
                n = await o(e, { url: t, start: 0, end: 65536 })
              } catch (e) {}
              if (!n)
                return new Response('', {
                  status: 500,
                  statusText: 'Failed to fetch file to download',
                })
              const s = e.request.url.match(/filename=(.*)/),
                a = s ? `filename="${decodeURIComponent(s[1])}"` : '',
                { fullSize: i, mimeType: r } = n,
                l = [
                  ['Content-Length', String(i)],
                  ['Content-Type', r],
                  ['Content-Disposition', `attachment; ${a}`],
                ],
                d = new u(),
                f = (n) => (
                  d.push(o(e, { url: t, start: n, end: n + c - 1 }).then((e) => e?.arrayBuffer)),
                  n + c
                )
              let p = 0
              const m = new ReadableStream({
                start() {
                  for (let e = 0; e < 8 && !(p >= i); e++) p = f(p)
                },
                async pull(e) {
                  const t = await d.pop()
                  t
                    ? (e.enqueue(new Uint8Array(t)),
                      t.byteLength < c ? e.close() : p < i && (p = f(p)))
                    : e.close()
                },
              })
              return new Response(m, { status: 200, statusText: 'OK', headers: l })
            })(n)
          ),
          !0
        )
      if (
        (s.includes('/share/') &&
          n.respondWith(
            (async function (e) {
              if ('POST' === e.request.method)
                try {
                  !(async function (e, t) {
                    const n = await self.clients.get(t)
                    n &&
                      (await (function (e) {
                        const t = q.get(e)
                        if (t) return t.promise
                        const n = new P()
                        return q.set(e, n), n.promise
                      })(t),
                      n.postMessage({ type: 'share', payload: e }))
                  })(
                    (function (e) {
                      const t = e.getAll('files')
                      return {
                        title: e.get('title'),
                        text: e.get('text'),
                        url: e.get('url'),
                        files: t,
                      }
                    })(await e.request.formData()),
                    e.resultingClientId
                  )
                } catch (e) {
                  console.warn('[SHARE] Failed to parse input data', e)
                }
              return Response.redirect('.')
            })(n)
          ),
        s.startsWith('http'))
      ) {
        if ('/' === new URL(s).pathname || s.match(M))
          return (
            n.respondWith(
              (async function (e) {
                const n = await d(() => fetch(e.request), 3e3)
                if (!n?.ok) return l(e)
                const s = n.clone()
                return self.caches.open(t).then((t) => t?.put(e.request, s)), n
              })(n)
            ),
            !0
          )
        if (s.match(E)) return n.respondWith(l(n)), !0
      }
      return !1
    }),
    self.addEventListener('push', function (e) {
      const t = (function (e) {
        try {
          return e.data.json()
        } catch (e) {
          return
        }
      })(e)
      if (!t || t.mute === f.True) return
      const n = (function (e) {
        let t = e.title || 'Teamgram WebZ'
        const n = e.custom?.silent === f.True
        return (
          n && (t += ' 🔕'),
          { chatId: w(e), messageId: y(e), body: e.description, isSilent: n, title: t }
        )
      })(t)
      h.has(n.messageId) ? h.delete(n.messageId) : e.waitUntil(S(n))
    }),
    self.addEventListener('notificationclick', function (e) {
      const t = self.registration.scope
      e.notification.close()
      const { data: n } = e.notification
      e.waitUntil(
        (async () => {
          const e = await v()
          if (
            (await Promise.all(e.map((e) => ((g[e.id] = n), R(e, n)))),
            self.clients.openWindow && !(e.length > 0))
          ) {
            g[0] = n
            try {
              const e = await self.clients.openWindow(t)
              e && (g[e.id] = n)
            } catch (e) {}
          }
        })()
      )
    }),
    self.addEventListener('message', (e) => {
      ;(function (e) {
        if (!e.data) return
        const t = e.source
        if ('clientReady' === e.data.type) {
          const n = g[t.id] || g[0]
          n && (delete g[t.id], delete g[0], e.waitUntil(R(t, n)))
        }
        if ('showMessageNotification' === e.data.type) {
          const t = e.data.payload
          e.waitUntil(
            (async () => (
              t.chatId &&
                (await self.registration.getNotifications({ tag: t.chatId })).forEach((e) =>
                  e.close()
                ),
              h.add(t.messageId),
              S(t)
            ))()
          )
        }
        'closeMessageNotifications' === e.data.type &&
          e.waitUntil(
            (async function (e) {
              let { chatId: t, lastReadInboxMessageId: n } = e
              const s = await self.registration.getNotifications(),
                a = n || Number.MAX_VALUE
              s.forEach((e) => {
                ;('0' === e.tag || (e.data.chatId === t && e.data.messageId <= a)) && e.close()
              })
            })(e.data.payload)
          )
      })(e),
        (function (e) {
          const { source: t, data: n } = e
          if (t && 'clientReady' === n.type) {
            const { id: e } = t,
              n = q.get(e)
            n ? n.resolve() : q.set(e, T)
          }
        })(e)
    })
})()
//# sourceMappingURL=1367.6b4115fe70ec398b0304.js.map
