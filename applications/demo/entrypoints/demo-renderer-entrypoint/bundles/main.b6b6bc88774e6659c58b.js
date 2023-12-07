;(() => {
  'use strict'
  var e,
    t,
    n,
    r,
    o,
    a,
    s = {
      71226: (e, t, n) => {
        n.d(t, {
          t9: () => y,
          $9: () => b,
          u3: () => v,
          UC: () => w,
          s8: () => C,
          Mk: () => I,
          g8: () => m,
          Zf: () => g,
          mR: () => p,
        })
        var r = n(863),
          o = n(83716),
          a = n(26926),
          s = n(69118),
          d = n(65054)
        let i
        const c = new Map(),
          u = new Map(),
          l = {
            chats: {},
            users: {},
            messages: {},
            documents: {},
            stickerSets: {},
            photos: {},
            webDocuments: {},
          }
        let f = !0
        ;(0, d.Pz)((e) => {
          f = e
        })
        const h = r.Eo ? new BroadcastChannel(o.tuy) : void 0
        function m(e, t) {
          return f
            ? (i ||
                (o.eMD && console.log('>>> START LOAD WORKER'),
                (i = new Worker(new URL(n.p + n.u(8325), n.b))),
                (function (e) {
                  i.addEventListener('message', (t) => {
                    let { data: n } = t
                    if ('update' === n.type) e(n.update)
                    else if ('methodResponse' === n.type) I(n)
                    else if ('methodCallback' === n.type) C(n)
                    else if ('unhandledError' === n.type) throw new Error(n.error?.message)
                  })
                })(e),
                'iOS' === t.platform &&
                  window.addEventListener('focus', () => {
                    A(), setTimeout(() => A(), 1e3)
                  })),
              E({ type: 'initApi', args: [t, l] }))
            : ((function (e) {
                h && h.postMessage({ type: 'initApi', token: (0, d._w)(), initialArgs: e })
              })(t),
              Promise.resolve())
        }
        function p(e, t, n) {
          l[e][t] = n
        }
        function g(e) {
          Object.assign(l, e)
        }
        function b(e) {
          if (!i) return void (o.eMD && console.warn('API is not initialized'))
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          const a = E({ type: 'callMethod', name: e, args: n })
          return (
            o.eMD &&
              (async () => {
                try {
                  await a
                } catch (e) {}
              })(),
            a
          )
        }
        function y(e) {
          if (!i && f) return void (o.eMD && console.warn('API is not initialized'))
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          const a = f ? E({ type: 'callMethod', name: e, args: n }) : S({ name: e, args: n })
          return (
            o.eMD &&
              (async () => {
                try {
                  await a
                } catch (e) {}
              })(),
            a
          )
        }
        function v(e) {
          e.isCanceled = !0
          const { messageId: t } = u.get(e) || {}
          if (t)
            if (f) w(t)
            else {
              if (!h) return
              h.postMessage({ type: 'cancelApiProgress', token: (0, d._w)(), messageId: t })
            }
        }
        function w(e) {
          i.postMessage({ type: 'cancelProgress', messageId: e })
        }
        function I(e) {
          const t = c.get(e.messageId)
          t && (e.error ? t.reject(e.error) : t.resolve(e.response))
        }
        function C(e) {
          c.get(e.messageId)?.callback?.(...e.callbackArgs)
        }
        function S(e) {
          const t = (0, a.Z)(c),
            n = { messageId: t, ...e },
            r = { messageId: t },
            o = new Promise((e, t) => {
              Object.assign(r, { resolve: e, reject: t })
            })
          if ('args' in n && 'name' in n && 'function' == typeof n.args[1]) {
            n.withCallback = !0
            const e = n.args.pop()
            ;(r.callback = e), u.set(e, r)
          }
          return (
            c.set(t, r),
            o
              .catch(() => {})
              .finally(() => {
                c.delete(t), r.callback && u.delete(r.callback)
              }),
            (function (e) {
              h && h.postMessage({ type: 'callApi', token: (0, d._w)(), ...e })
            })(n),
            o
          )
        }
        function E(e) {
          const t = (0, a.Z)(c),
            n = { messageId: t, ...e },
            r = { messageId: t },
            o = new Promise((e, t) => {
              Object.assign(r, { resolve: e, reject: t })
            })
          if ('args' in n && 'name' in n && 'function' == typeof n.args[1]) {
            n.withCallback = !0
            const e = n.args.pop()
            ;(r.callback = e), u.set(e, r)
          }
          return (
            c.set(t, r),
            o
              .catch(() => {})
              .finally(() => {
                c.delete(t), r.callback && u.delete(r.callback)
              }),
            i.postMessage(n),
            o
          )
        }
        const P = Date.now()
        async function A() {
          let e = !1
          try {
            await Promise.race([
              E({ type: 'ping' }),
              (0, s.wO)(150).then(() =>
                e ? void 0 : Promise.reject(new Error('HEALTH_CHECK_TIMEOUT'))
              ),
            ])
          } catch (e) {
            console.error(e), Date.now() - P >= 5e3 && window.location.reload()
          } finally {
            e = !0
          }
        }
      },
      6137: (e, t, n) => {
        n.d(t, { IU: () => o.I, Vv: () => r.Vv, _Q: () => r._Q, _f: () => r._f })
        var r = n(94746),
          o = n(9077)
      },
      9077: (e, t, n) => {
        let r
        n.d(t, { I: () => r }),
          (function (e) {
            ;(e[(e.BlobUrl = 0)] = 'BlobUrl'),
              (e[(e.Progressive = 1)] = 'Progressive'),
              (e[(e.Stream = 2)] = 'Stream'),
              (e[(e.DownloadUrl = 3)] = 'DownloadUrl'),
              (e[(e.Text = 4)] = 'Text')
          })(r || (r = {}))
      },
      94746: (e, t, n) => {
        let r
        n.d(t, { Vv: () => r, _Q: () => a, _f: () => o }),
          (function (e) {
            ;(e.Bold = 'MessageEntityBold'),
              (e.Blockquote = 'MessageEntityBlockquote'),
              (e.BotCommand = 'MessageEntityBotCommand'),
              (e.Cashtag = 'MessageEntityCashtag'),
              (e.Code = 'MessageEntityCode'),
              (e.Email = 'MessageEntityEmail'),
              (e.Hashtag = 'MessageEntityHashtag'),
              (e.Italic = 'MessageEntityItalic'),
              (e.MentionName = 'MessageEntityMentionName'),
              (e.Mention = 'MessageEntityMention'),
              (e.Phone = 'MessageEntityPhone'),
              (e.Pre = 'MessageEntityPre'),
              (e.Strike = 'MessageEntityStrike'),
              (e.TextUrl = 'MessageEntityTextUrl'),
              (e.Url = 'MessageEntityUrl'),
              (e.Underline = 'MessageEntityUnderline'),
              (e.Spoiler = 'MessageEntitySpoiler'),
              (e.CustomEmoji = 'MessageEntityCustomEmoji'),
              (e.Unknown = 'MessageEntityUnknown')
          })(r || (r = {}))
        const o = -1,
          a = 'MESSAGE_DELETED'
      },
      58912: (e, t, n) => {
        n.d(t, { Z: () => u })
        var r = n(60748),
          o = n(46752),
          a = n(70692),
          s = n(60706),
          d = n(97799)
        function i() {
          return (
            (i = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t]
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
                }),
            i.apply(this, arguments)
          )
        }
        const c = 150,
          u = (0, r.X$)(function (e) {
            const {
                size: t = c,
                play: n = !0,
                noLoop: u = !0,
                className: l,
                noTransition: f,
                nonInteractive: h,
                onLoad: m,
                onClick: p,
                ...g
              } = e,
              [b, y] = (0, s.Z)(!1),
              v = (0, a.Z)(f || b),
              w = (0, r.I4)(() => {
                y(), m?.()
              }, [y, m]),
              [I, C] = (0, r.eJ)(String(Math.random())),
              S = (0, r.I4)(() => {
                !0 === n && C(String(Math.random())), p?.()
              }, [p, n])
            return r.ZP.createElement(
              d.Z,
              i(
                {
                  className: (0, o.Z)(l, v),
                  size: t,
                  play: !0 === n ? I : n,
                  noLoop: u,
                  onClick: h ? void 0 : S,
                  onLoad: w,
                },
                g
              )
            )
          })
      },
      97799: (e, t, n) => {
        n.d(t, { Z: () => p })
        var r = n(60748),
          o = n(69118),
          a = n(46752),
          s = n(80036),
          d = n(26926),
          i = n(18674),
          c = n(45332),
          u = n(34446)
        let l, f
        const h = {}
        async function m() {
          return l || ((l = n.e(3748).then(n.bind(n, 3748))), (f = (await l).default)), l
        }
        setTimeout(m, 3e3)
        const p = (0, r.X$)((e) => {
          let {
              ref: t,
              renderId: n,
              className: l,
              style: p,
              tgsUrl: g,
              play: b,
              playSegment: y,
              speed: v,
              noLoop: w,
              size: I,
              quality: C,
              isLowPriority: S,
              color: E,
              forceOnHeavyAnimation: P,
              sharedCanvas: A,
              sharedCanvasCoords: k,
              onClick: M,
              onLoad: T,
              onEnded: N,
              onLoop: L,
            } = e,
            Z = (0, r.sO)(null)
          t && (Z = t)
          const R = (0, r.Ye)(() => (0, d.Z)(h, !0), []),
            [_, B] = (0, r.eJ)(),
            O = (0, r.sO)(),
            D = (0, r.sO)(!1),
            F = (0, r.sO)(!1),
            x = (0, r.sO)(!0),
            j = (0, r.sO)()
          j.current = b
          const U = (0, r.sO)()
          U.current = y
          const $ = (0, r.sO)()
          ;(0, r.d4)(
            () => () => {
              $.current = !0
            },
            []
          ),
            (0, r.d4)(() => {
              if (_ || !g || (A && !k)) return
              const e = () => {
                if ($.current) return
                const t = Z.current || A
                if (!t) return
                if (A && !A.offsetParent) return void setTimeout(e, 500)
                const r = f.init(
                  g,
                  t,
                  n || (0, d.Z)(h, !0),
                  R,
                  { noLoop: w, size: I, quality: C, isLowPriority: S, coords: k },
                  E,
                  T,
                  N,
                  L
                )
                v && r.setSpeed(v), B(r), (O.current = r)
              }
              f
                ? e()
                : m().then(() => {
                    ;(0, o.T2)(() => {
                      Z.current && e()
                    })
                  })
            }, [_, n, g, E, S, w, T, C, I, v, N, L, R, A, k]),
            (0, r.d4)(() => {
              _ && _.setColor(E)
            }, [E, _]),
            (0, r.d4)(
              () => () => {
                O.current?.removeView(R)
              },
              [R]
            )
          const V = (0, r.I4)(
              function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                _ &&
                  (j.current || U.current) &&
                  (U.current ? _.playSegment(U.current) : _.play(e, R))
              },
              [_, R]
            ),
            W = (0, r.I4)(() => {
              _ && _.pause(R)
            }, [_, R]),
            H = (0, r.I4)(() => {
              ;(F.current = !0), _ && (D.current || (D.current = _.isPlaying()), W())
            }, [_, W]),
            G = (0, r.I4)(() => {
              D.current && V(w), (D.current = !1), (F.current = !1)
            }, [w, V]),
            z = (0, r.I4)(() => {
              ;(0, o.T2)(G)
            }, [G])
          if (
            ((0, u.Z)(
              (e) => {
                let [t] = e
                void 0 !== t && w !== t && _?.setNoLoop(w)
              },
              [w, _]
            ),
            (0, u.Z)(
              (e) => {
                let [t] = e
                void 0 !== t && k !== t && _?.setSharedCanvasCoords(R, k)
              },
              [k, R, _]
            ),
            (0, r.d4)(() => {
              _ &&
                (b || y
                  ? F.current
                    ? (D.current = !0)
                    : V(w)
                  : F.current
                  ? (D.current = !1)
                  : W())
            }, [_, b, y, w, V, W]),
            (0, r.d4)(() => {
              _ && (x.current ? (x.current = !1) : g && (_.changeData(g), V()))
            }, [V, _, g]),
            (0, i.ZP)(H, G, P),
            (0, c.Z)(H, z),
            !A)
          )
            return r.ZP.createElement('div', {
              ref: Z,
              className: (0, a.Z)('AnimatedSticker', l),
              style: (0, s.Z)(
                void 0 !== I && `width: ${I}px; height: ${I}px;`,
                M && 'cursor: pointer',
                p
              ),
              onClick: M,
            })
        })
      },
      96459: (e, t, n) => {
        n.d(t, { Z: () => g })
        var r = n(60748),
          o = n(33555),
          a = n(6137),
          s = n(46752),
          d = n(74753),
          i = n(11192),
          c = n(78046),
          u = n(70113),
          l = n(36765)
        const f = 'a51PrE1gNHtEZTsTv199'
        var h = n(53930),
          m = n(69123)
        const p = 20,
          g = (0, r.X$)((e) => {
            let {
                ref: t,
                documentId: n,
                size: g = p,
                isBig: b,
                className: y,
                loopLimit: v,
                style: w,
                withGridFix: I,
                withSharedAnimation: C,
                sharedCanvasRef: S,
                sharedCanvasHqRef: E,
                withTranslucentThumb: P,
                shouldPreloadPreview: A,
                forceOnHeavyAnimation: k,
                observeIntersectionForLoading: M,
                observeIntersectionForPlaying: T,
                onClick: N,
              } = e,
              L = (0, r.sO)(null)
            t && (L = t)
            const Z = (0, c.Z)(n),
              R = (0, r.sO)(0),
              [_, B] = (0, r.eJ)(!0),
              O = Z?.shouldUseTextColor,
              { rgbColor: D } = (0, u.Z)(L, !O),
              F = (0, r.I4)(
                (e) => {
                  v &&
                    ((R.current += 1),
                    R.current >= v
                      ? (B(!1), (e.currentTarget.currentTime = 0))
                      : (0, d.Z)(e.currentTarget))
                },
                [v]
              ),
              x = (0, r.I4)(() => {
                v && ((R.current += 1), R.current >= v - 1 && B(!1))
              }, [v]),
              j = Z?.stickerSetInfo && (0, i.Si)((0, o.Rd)(), Z.stickerSetInfo)
            return r.ZP.createElement(
              'div',
              {
                ref: L,
                className: (0, s.Z)(
                  '_cPVRYXabaTi4NzwuAuv',
                  y,
                  'custom-emoji',
                  'emoji',
                  I && 'ATlIbx7wziKC9hp9tIjf'
                ),
                onClick: N,
                'data-entity-type': a.Vv.CustomEmoji,
                'data-document-id': n,
                'data-alt': Z?.emoji,
                style: w,
              },
              r.ZP.createElement('img', {
                className: 'YK4vvTRvF0f3KvHfTCcq',
                src: m,
                alt: Z?.emoji,
                draggable: !1,
              }),
              Z
                ? r.ZP.createElement(l.Z, {
                    containerRef: L,
                    sticker: Z,
                    isSmall: !b,
                    size: g,
                    customColor: D,
                    thumbClassName: f,
                    fullMediaClassName: 'ZjeZqyl7YXHdvIDo1TbO',
                    shouldLoop: _,
                    loopLimit: v,
                    shouldPreloadPreview: A,
                    forceOnHeavyAnimation: k,
                    observeIntersectionForLoading: M,
                    observeIntersectionForPlaying: T,
                    withSharedAnimation: C,
                    sharedCanvasRef: j ? E : S,
                    withTranslucentThumb: P,
                    onVideoEnded: F,
                    onAnimatedStickerLoop: x,
                  })
                : r.ZP.createElement('img', { className: f, src: h, alt: 'Emoji' })
            )
          })
      },
      45370: (e, t, n) => {
        n.d(t, { Z: () => c })
        var r = n(60748),
          o = n(6137),
          a = n(48035),
          s = n(56112),
          d = n(32340),
          i = n(14612)
        const c = (0, r.X$)(function (e) {
          let {
            lang: t,
            message: n,
            noEmoji: c = !1,
            highlight: u,
            truncateLength: l = s.lN,
            observeIntersectionForLoading: f,
            observeIntersectionForPlaying: h,
            withTranslucentThumbs: m,
          } = e
          const { text: p, entities: g } = n.content.text || {},
            b = g?.some((e) => e.type === o.Vv.Spoiler),
            y = g?.some((e) => e.type === o.Vv.CustomEmoji)
          if (!p || (!b && !y)) {
            const e = (0, a.Z)((0, s.MK)(t, n, c), l)
            return r.ZP.createElement(
              'span',
              null,
              u ? (0, d.Z)(e, ['emoji', 'highlight'], { highlight: u }) : (0, d.Z)(e)
            )
          }
          const v = !c && (0, s.Eb)(n)
          return r.ZP.createElement(
            r.ZP.Fragment,
            null,
            [
              v ? (0, d.Z)(`${v} `) : void 0,
              (0, s.Kk)(
                t,
                n,
                r.ZP.createElement(i.Z, {
                  message: n,
                  highlight: u,
                  isSimple: !0,
                  observeIntersectionForLoading: f,
                  observeIntersectionForPlaying: h,
                  withTranslucentThumbs: m,
                  truncateLength: l,
                })
              ),
            ]
              .flat()
              .filter(Boolean)
          )
        })
      },
      14612: (e, t, n) => {
        n.d(t, { Z: () => c })
        var r = n(60748),
          o = n(6137),
          a = n(48035),
          s = n(56112),
          d = n(20230),
          i = n(34446)
        const c = (0, r.X$)(function (e) {
          let {
            message: t,
            translatedText: n,
            isForAnimation: c,
            emojiSize: u,
            highlight: l,
            isSimple: f,
            truncateLength: h,
            isProtected: m,
            observeIntersectionForLoading: p,
            observeIntersectionForPlaying: g,
            withTranslucentThumbs: b,
            shouldRenderAsHtml: y,
          } = e
          const v = (0, r.sO)(null),
            w = (0, r.sO)(null),
            I = (0, r.sO)(0),
            C = n || t.content.text || void 0,
            S = c && C ? (0, s.If)(C) : C,
            { text: E, entities: P } = S || {}
          ;(0, i.Z)(() => {
            I.current += 1
          }, [E, P])
          const A =
            (0, r.Ye)(() => {
              const e = P?.some((e) => e.type === o.Vv.Spoiler)
              return !e && (P?.filter((e) => e.type === o.Vv.CustomEmoji).length || 0) >= 3
            }, [P]) || 0
          if (!E) {
            const e = (0, s.UD)(t)
            return e ? [(0, a.Z)(e, h)] : void 0
          }
          return r.ZP.createElement(
            r.ZP.Fragment,
            null,
            [
              A && r.ZP.createElement('canvas', { ref: v, className: 'shared-canvas' }),
              A && r.ZP.createElement('canvas', { ref: w, className: 'shared-canvas' }),
              (0, d.H)((0, a.Z)(E, h), P, l, u, y, t.id, f, m, p, g, b, v, w, I.current.toString()),
            ]
              .flat()
              .filter(Boolean)
          )
        })
      },
      10088: (e, t, n) => {
        n.d(t, { Z: () => m })
        var r = n(60748),
          o = n(33555)
        const a = 36,
          s = 2147483647
        function d(e, t, n) {
          let r
          for (e = n ? Math.floor(e / 700) : e >> 1, e += Math.floor(e / t), r = 0; e > 455; r += a)
            e = Math.floor(e / 35)
          return Math.floor(r + (36 * e) / (e + 38))
        }
        function i(e, t) {
          const n = [],
            r = [],
            o = e.length
          let i, c, u, l, f, h, m, p, g, b, y, v, w
          for (
            i = 128, u = 0, l = 72, f = e.lastIndexOf('-'), f < 0 && (f = 0), h = 0;
            h < f;
            ++h
          ) {
            if ((t && (r[n.length] = e.charCodeAt(h) - 65 < 26), e.charCodeAt(h) >= 128))
              throw new RangeError('Illegal input >= 0x80')
            n.push(e.charCodeAt(h))
          }
          for (m = f > 0 ? f + 1 : 0; m < o; ) {
            for (p = u, g = 1, b = a; ; b += a) {
              if (m >= o) throw RangeError('punycode_bad_input(1)')
              if (
                ((y =
                  (I = e.charCodeAt(m++)) - 48 < 10
                    ? I - 22
                    : I - 65 < 26
                    ? I - 65
                    : I - 97 < 26
                    ? I - 97
                    : a),
                y >= a)
              )
                throw RangeError('punycode_bad_input(2)')
              if (y > Math.floor((s - u) / g)) throw RangeError('punycode_overflow(1)')
              if (((u += y * g), (v = b <= l ? 1 : b >= l + 26 ? 26 : b - l), y < v)) break
              if (g > Math.floor(s / (a - v))) throw RangeError('punycode_overflow(2)')
              g *= a - v
            }
            if (((c = n.length + 1), (l = d(u - p, c, 0 === p)), Math.floor(u / c) > s - i))
              throw RangeError('punycode_overflow(3)')
            ;(i += Math.floor(u / c)),
              (u %= c),
              t && r.splice(u, 0, e.charCodeAt(m - 1) - 65 < 26),
              n.splice(u, 0, i),
              u++
          }
          var I
          if (t)
            for (u = 0, w = n.length; u < w; u++)
              r[u] && (n[u] = String.fromCharCode(n[u]).toUpperCase().charCodeAt(0))
          return ((e) => {
            const t = []
            let n = 0
            const r = e.length
            let o
            for (; n < r; ) {
              if (((o = e[n++]), 55296 == (63488 & o)))
                throw new RangeError('UTF-16(encode): Illegal UTF-16 value')
              o > 65535 &&
                ((o -= 65536),
                t.push(String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                (o = 56320 | (1023 & o))),
                t.push(String.fromCharCode(o))
            }
            return t.join('')
          })(n)
        }
        var c = n(6137),
          u = n(83716),
          l = n(46752),
          f = n(81396)
        function h(e) {
          if (!e) return
          const t = (0, f.X)(e)
          if (t)
            try {
              let e = decodeURI(t.replace(/%%/g, '%25'))
              const n = e.match(/^https?:\/\/([^/:?#]+)(?:[/:?#]|$)/i)
              if (!n) return
              const r = n[1]
              return (
                (e = e.replace(
                  r,
                  (function (e) {
                    const t = e.split('.'),
                      n = []
                    for (let e = 0; e < t.length; ++e) {
                      const r = t[e]
                      n.push(r.match(/^xn--/) ? i(r.slice(4)) : r)
                    }
                    return n.join('.')
                  })(r)
                )),
                e
              )
            } catch (t) {
              u.eMD && console.error('SafeLink.getDecodedUrl error ', e, t)
            }
        }
        const m = (0, r.X$)((e) => {
          let { url: t, text: n, className: a, children: s, isRtl: d } = e
          const { openUrl: i } = (0, o.Sv)(),
            u = s || n,
            m = t === n,
            p = (0, r.I4)(
              (e) => !t || (e.preventDefault(), i({ url: t, shouldSkipModal: m }), !1),
              [m, i, t]
            )
          if (!t) return
          const g = (0, l.Z)(a || 'text-entity-link', n.length > 50 && 'long-word-break-all')
          return r.ZP.createElement(
            'a',
            {
              href: (0, f.X)(t),
              title: h(t),
              target: '_blank',
              rel: 'noopener noreferrer',
              className: g,
              onClick: p,
              dir: d ? 'rtl' : 'auto',
              'data-entity-type': c.Vv.Url,
            },
            u
          )
        })
      },
      36765: (e, t, n) => {
        n.d(t, { Z: () => S })
        var r = n(60748),
          o = n(33555),
          a = n(863),
          s = n(40647),
          d = n(46752),
          i = n(26926),
          c = n(56112),
          u = n(11192),
          l = n(6202),
          f = n(3657),
          h = n(2903),
          m = n(70692),
          p = n(60706),
          g = n(799),
          b = n(97799),
          y = n(35148)
        const v = 'daPpv_C6WkmYIJyCxxOx',
          w = 'lLI5VQHfbz7HKFfIcAnu',
          I = 24,
          C = {},
          S = (0, r.X$)((e) => {
            let {
              containerRef: t,
              sticker: n,
              thumbClassName: S,
              fullMediaHash: E,
              fullMediaClassName: P,
              isSmall: A,
              size: k = I,
              customColor: M,
              loopLimit: T,
              shouldLoop: N = !1,
              shouldPreloadPreview: L,
              forceOnHeavyAnimation: Z,
              observeIntersectionForLoading: R,
              observeIntersectionForPlaying: _,
              noLoad: B,
              noPlay: O,
              withSharedAnimation: D,
              withTranslucentThumb: F,
              sharedCanvasRef: x,
              cacheBuster: j,
              onVideoEnded: U,
              onAnimatedStickerLoop: $,
            } = e
            const { id: V, isLottie: W, stickerSetInfo: H, emoji: G } = n,
              z = n.isVideo && !a.Hh,
              K = n.isVideo && !z,
              q = !W && !K,
              J = (0, c.RK)(n.id),
              Y = (0, f.Op)(t, R),
              X = Y && !B,
              Q = (0, f.Op)(t, _) && Y && !O,
              ee = (0, h.Z)(n),
              [te] = (0, r.eJ)(s.UV(J)),
              ne = te || ee
            E || (E = z || (q && A) ? J : `sticker${V}`)
            const re = Boolean(E === J && te),
              oe = (0, l.Z)(E, !X || re, void 0, j),
              [ae, se] = (0, p.Z)(Boolean(W && oe && !te)),
              de = oe && (q || ae),
              ie = x && !F,
              ce = (0, m.Z)(ne && !de),
              ue = (0, m.Z)(de),
              le = W && te,
              fe = (0, g.Z)(t, x),
              he = k || fe.size
            ;(0, l.Z)(J, !X || !L, void 0, j)
            const me = (0, r.Ye)(() => (0, i.Z)(C, !0), []),
              pe = [D ? 'shared' : me, V, he, M?.join(',')].filter(Boolean).join('_')
            return r.ZP.createElement(
              r.ZP.Fragment,
              null,
              r.ZP.createElement('img', {
                src: ne,
                className: (0, d.Z)(
                  'JutR25BuG9LYhLOr69Ix',
                  le && v,
                  ie && 'qH6Cov7zwmysL5nAnEjg',
                  S,
                  ce
                ),
                alt: '',
                draggable: !1,
              }),
              W
                ? r.ZP.createElement(b.Z, {
                    key: pe,
                    renderId: pe,
                    size: he,
                    className: (0, d.Z)(w, (le || ie) && v, P, ue),
                    tgsUrl: oe,
                    play: Q,
                    color: M,
                    noLoop: !N,
                    forceOnHeavyAnimation: Z,
                    isLowPriority: A && !(0, u.Si)((0, o.Rd)(), H),
                    sharedCanvas: x?.current || void 0,
                    sharedCanvasCoords: fe.coords,
                    onLoad: se,
                    onLoop: $,
                    onEnded: $,
                  })
                : K
                ? r.ZP.createElement(y.Z, {
                    canPlay: Q && N,
                    className: (0, d.Z)(w, P, ue),
                    src: oe,
                    playsInline: !0,
                    muted: !0,
                    loop: !T,
                    disablePictureInPicture: !0,
                    onReady: se,
                    onEnded: U,
                  })
                : r.ZP.createElement('img', {
                    className: (0, d.Z)(w, P, ue),
                    src: oe,
                    alt: G,
                    draggable: !1,
                  })
            )
          })
      },
      58987: (e, t, n) => {
        n.d(t, { Z: () => u })
        var r = n(60748),
          o = n(83716),
          a = n(2155),
          s = n(46752),
          d = n(32340),
          i = n(98138)
        const c = 'aJM6jZTv0FGmbmVoeSGw',
          u = (0, r.X$)((e) => {
            let {
              className: t,
              letterClassName: n,
              topicId: u,
              iconColor: l,
              title: f,
              onClick: h,
            } = e
            const m = (0, i.gL)(l)
            return u === o.OxA
              ? r.ZP.createElement('i', {
                  className: (0, s.Z)(c, t, 'icon-hashtag', 'general-forum-icon'),
                  onClick: h,
                })
              : r.ZP.createElement(
                  'div',
                  { className: (0, s.Z)(c, t), onClick: h },
                  r.ZP.createElement('img', {
                    className: 'BYayNMDdPVgrna3NsHfu',
                    src: m,
                    alt: '',
                    draggable: !1,
                  }),
                  r.ZP.createElement(
                    'div',
                    { className: (0, s.Z)('G4SxYH1X0X2e4J1z7GPV', n, 'topic-icon-letter') },
                    (0, d.Z)((0, a.Xv)(f, 1))
                  )
                )
          })
      },
      62821: (e, t, n) => {
        n.d(t, { l: () => h })
        const r = n.p + 'TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab.tgs',
          o = n.p + 'TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12.tgs',
          a = n.p + 'TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3e.tgs',
          s = n.p + 'TwoFactorSetupMonkeyPeek.1905436b042520363d7e.tgs',
          d = n.p + 'FoldersAll.3f9f9e243d19f0fbf9aa.tgs',
          i = n.p + 'FoldersNew.9a40d71c0c8be70f5bd1.tgs',
          c = n.p + 'DiscussionGroupsDucks.9ea453d1be9d1b0ee77a.tgs',
          u = n.p + 'Lock.12547a0228d4fa544e53.tgs',
          l = n.p + 'Congratulations.b6623b8efc6fedec9d33.tgs',
          f = n.p + 'Experimental.43d62096368bf5a00ae3.tgs',
          h = {
            MonkeyIdle: r,
            MonkeyTracking: o,
            MonkeyClose: a,
            MonkeyPeek: s,
            FoldersAll: d,
            FoldersNew: i,
            DiscussionGroups: c,
            Lock: u,
            CameraFlip: n.p + 'CameraFlip.1a9fe44cf01fcb22347d.tgs',
            HandFilled: n.p + 'HandFilled.f87939d160f1dc288586.tgs',
            HandOutline: n.p + 'HandOutline.f9831751ba60df30c484.tgs',
            Speaker: n.p + 'Speaker.04bb3743412b41ff83c5.tgs',
            VoiceAllowTalk: n.p + 'VoiceAllowTalk.a9cc7c39ec438973ddc9.tgs',
            VoiceMini: n.p + 'VoiceMini.bf00ffdf69625c579569.tgs',
            VoiceMuted: n.p + 'VoiceMuted.a4b4ec6bfd7c6c5fb275.tgs',
            VoiceOutlined: n.p + 'VoiceOutlined.91b394ab3562cdfad6bc.tgs',
            JoinRequest: n.p + 'Requests.af9f19772695a8898810.tgs',
            Invite: n.p + 'Invite.4502ec3aa4249d6e6723.tgs',
            QrPlane: n.p + 'QrPlane.a921709f266564f65b7e.tgs',
            Congratulations: l,
            Experimental: f,
          }
      },
      15376: (e, t, n) => {
        n.d(t, { K2: () => o, Oh: () => s, mD: () => a, v6: () => d, yW: () => r })
        function r(e) {
          return e > 536870912
            ? `${(e / 1073741824).toFixed(1)} GB`
            : e > 524288
            ? `${(e / 1048576).toFixed(1)} MB`
            : `${(e / 1024).toFixed(1)} KB`
        }
        function o(e) {
          const { fileName: t, mimeType: n } = e
          return a(t, n)
        }
        function a(e, t) {
          return e && -1 !== e.indexOf('.') ? e.split('.').pop() : t.split('/').pop()
        }
        function s(e) {
          switch (e) {
            case 'apk':
            case 'xls':
            case 'xlsx':
              return 'green'
            case 'zip':
            case 'rar':
            case '7z':
            case 'tar':
            case 'gz':
            case 'ppt':
            case 'pptx':
              return 'orange'
            case 'pdf':
            case 'xps':
              return 'red'
            default:
              return 'default'
          }
        }
        function d(e) {
          return Boolean(e.previewBlobUrl || e.thumbnail)
        }
      },
      74399: (e, t, n) => {
        n.d(t, {
          Eh: () => w,
          Fp: () => l,
          GC: () => I,
          Gw: () => i,
          Kf: () => y,
          L6: () => d,
          PA: () => P,
          Rj: () => c,
          W7: () => C,
          Wr: () => E,
          fM: () => v,
          jg: () => A,
          kc: () => b,
          lE: () => S,
          vY: () => u,
          wB: () => f,
        })
        var r = n(83716),
          o = n(863),
          a = n(43858),
          s = n(56112)
        const d = '(max-height: 640px)',
          i = parseInt(getComputedStyle(document.documentElement).fontSize, 10),
          c = 240,
          u = { width: 640, height: 640 },
          l = { width: 800, height: 800 },
          f = '4986041492570112461',
          h = { width: 100, height: 100 }
        let m, p, g
        function b(e, t, n, r, o) {
          const s = t && n ? 2.25 : t || n ? 1.625 : 0,
            d =
              (function (e, t, n) {
                if (!n) return e ? 30 : 29
                const { width: r } = a.Z.get()
                return (
                  m || (m = Math.min(30, r / i - 4.5)),
                  p || (p = Math.min(29, r / i - 7)),
                  g || (g = Math.min(29, r / i - 4.5)),
                  e ? m : t ? g : p
                )
              })(e, r, o) - s
          return d * i
        }
        function y(e) {
          let {
            width: t,
            height: n,
            fromOwnMessage: r,
            asForwarded: o,
            isWebPageMedia: a,
            isGif: s,
            noAvatars: d,
            isMobile: c,
          } = e
          const u = n / t,
            l = b(r, o, a, d, c),
            f = (function (e, t) {
              return e && t && t >= 0.75 && t <= 1.25 ? 20 * i : 27 * i
            })(s, u),
            h = s ? Math.max(300, t) : t
          return A(l, f, h, s ? n * (h / t) : n)
        }
        function v(e, t) {
          const n = window.matchMedia(d),
            { width: r, height: s } = a.Z.get()
          let c = t && n.matches ? 10 : 8.25
          return e && !o.$b && (c = n.matches ? 10 : 12.5), { width: r, height: s - c * i }
        }
        function w(e, t, n, r, o, a) {
          const { width: d, height: i } = (0, s.HV)(e) || h
          return y({
            width: d,
            height: i,
            fromOwnMessage: t,
            asForwarded: n,
            isWebPageMedia: r,
            noAvatars: o,
            isMobile: a,
          })
        }
        function I(e, t, n, r, o, a) {
          const { width: d, height: i } = (0, s.jC)(e) || h
          return y({
            width: d,
            height: i,
            fromOwnMessage: t,
            asForwarded: n,
            isWebPageMedia: r,
            isGif: e.isGif,
            noAvatars: o,
            isMobile: a,
          })
        }
        function C() {
          return { width: 2 * i, height: 2 * i }
        }
        function S(e) {
          return e ? { width: 3 * i, height: 3 * i } : { width: 3.375 * i, height: 3.375 * i }
        }
        function E(e, t) {
          const { width: n } = e
          let { height: o } = e
          e.id === f && (o = n)
          const a = o && n && o / n,
            s = i * (t ? r.w7O : r.K7x),
            d = a ? s * a : s
          return a && d > s ? { width: Math.round(s / a), height: s } : { width: s, height: d }
        }
        function P(e, t) {
          let { width: n, height: r } = e,
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          const { width: a, height: s } = v(t, o)
          return A(a, s, n, r)
        }
        function A(e, t, n, r) {
          const o = r / n,
            a = Math.min(n, e)
          return Math.round(a * o) > t
            ? { width: Math.round(t / o), height: t }
            : { width: a, height: Math.round(a * o) }
        }
      },
      18005: (e, t, n) => {
        n.d(t, { D: () => w })
        var r = n(60748),
          o = n(56112),
          a = n(48035),
          s = n(9937),
          d = n(32340),
          i = n(46752),
          c = n(8337),
          u = n(33555)
        const l = (e) => {
            let { className: t, sender: n, children: o } = e
            const { openChat: a } = (0, u.Sv)(),
              s = (0, r.I4)(() => {
                n && a({ id: n.id })
              }, [n, a])
            return n
              ? r.ZP.createElement(c.Z, { className: (0, i.Z)('UserLink', t), onClick: s }, o)
              : o
          },
          f = (e) => {
            let { className: t, message: n, children: o } = e
            const { focusMessage: a } = (0, u.Sv)(),
              s = (0, r.I4)(() => {
                n && a({ chatId: n.chatId, messageId: n.id })
              }, [a, n])
            return n
              ? r.ZP.createElement(c.Z, { className: (0, i.Z)('MessageLink', t), onClick: s }, o)
              : o
          },
          h = (0, r.X$)((e) => {
            let { className: t, chatId: n, children: o } = e
            const { openChat: a } = (0, u.Sv)(),
              s = (0, r.I4)(() => {
                n && a({ id: n })
              }, [n, a])
            return n
              ? r.ZP.createElement(c.Z, { className: (0, i.Z)('ChatLink', t), onClick: s }, o)
              : o
          }),
          m = (e) => {
            let { className: t, groupCall: n, children: o } = e
            const { requestMasterAndJoinGroupCall: a } = (0, u.Sv)(),
              s = (0, r.I4)(() => {
                n && a({ id: n.id, accessHash: n.accessHash })
              }, [n, a])
            return n
              ? r.ZP.createElement(c.Z, { className: (0, i.Z)('GroupCallLink', t), onClick: s }, o)
              : o
          }
        var p = n(45370),
          g = n(96459),
          b = n(58987)
        const y = 32,
          v = ' '
        function w(e, t, n, o, a, i, c, u) {
          let l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : {},
            f = arguments.length > 9 ? arguments[9] : void 0,
            h = arguments.length > 10 ? arguments[10] : void 0
          if (!t.content.action) return []
          const {
              text: m,
              translationValues: p,
              amount: y,
              currency: w,
              call: M,
              score: T,
              topicEmojiIconId: N,
            } = t.content.action,
            L = [],
            Z = l.asPlainText || l.isEmbedded,
            R =
              'Chat.Service.Group.UpdatedPinnedMessage1' !== m || i
                ? m
                : 'Message.PinnedGenericMessage'
          let _,
            B = e(R, p?.length ? p : void 0)
          if (
            (R.includes('ScoredInGame') &&
              (B = B.replace('un1', '%action_origin%').replace('un2', '%message%')),
            'ActionGiftOutbound' === R &&
              (B = B.replace('un2', '%gift_payment_amount%').replace(/\*\*/g, '')),
            'ActionGiftInbound' === R &&
              (B = B.replace('un1', '%action_origin%')
                .replace('un2', '%gift_payment_amount%')
                .replace(/\*\*/g, '')),
            B.includes('%payment_amount%') &&
              ((_ = k(B, '%payment_amount%', (0, s.x)(y, w, e.code))), (B = _.pop()), L.push(..._)),
            (_ = k(B, '%action_origin%', n ? E(n, Z) || v : o ? P(e, o, Z) || v : 'User')),
            (B = _.pop()),
            L.push(..._),
            B.includes('%action_topic%') &&
              ((_ = k(
                B,
                '%action_topic%',
                [
                  u?.iconEmojiId ? r.ZP.createElement(g.Z, { documentId: u.iconEmojiId }) : '',
                  u ? `${u.title}` : 'a topic',
                ],
                ''
              )),
              (B = _.pop()),
              L.push(..._)),
            B.includes('%action_topic_icon%'))
          ) {
            const e = N || u?.iconEmojiId
            ;(_ = k(
              B,
              '%action_topic_icon%',
              e && '0' !== e
                ? r.ZP.createElement(g.Z, { documentId: e })
                : u
                ? r.ZP.createElement(b.Z, { topicId: u.id, title: u.title })
                : '...'
            )),
              (B = _.pop()),
              L.push(..._)
          }
          return (
            B.includes('%gift_payment_amount%') &&
              ((_ = k(B, '%gift_payment_amount%', (0, s.x)(y, w, e.code))),
              (B = _.pop()),
              L.push(..._)),
            B.includes('%score%') &&
              ((_ = k(B, '%score%', T.toString())), (B = _.pop()), L.push(..._)),
            (_ = k(B, '%target_user%', a ? a.map((e) => E(e, Z)).filter(Boolean) : 'User')),
            (B = _.pop()),
            L.push(..._),
            (_ = k(B, '%message%', i ? C(e, i, l, f, h) : 'a message')),
            (B = _.pop()),
            L.push(..._),
            (_ = k(B, '%product%', i ? I(i) : 'a product')),
            (B = _.pop()),
            L.push(..._),
            (_ = k(B, '%target_chat%', c ? A(c, Z) : 'another chat')),
            _.forEach((e) => {
              L.push(...(0, d.Z)(e))
            }),
            l.asPlainText ? L.join('').trim() : M ? S(M, L) : L
          )
        }
        function I(e) {
          return e.content && e.content.invoice ? e.content.invoice.title : 'a product'
        }
        function C(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0
          const { asPlainText: d, isEmbedded: i } = n
          if (d) return (0, o.MK)(e, t, void 0, y)
          const c = r.ZP.createElement(p.Z, {
            lang: e,
            message: t,
            truncateLength: y,
            observeIntersectionForLoading: a,
            observeIntersectionForPlaying: s,
            withTranslucentThumbs: !0,
          })
          return i ? c : r.ZP.createElement(f, { className: 'action-link', message: t }, c)
        }
        function S(e, t) {
          return r.ZP.createElement(m, { groupCall: e }, t)
        }
        function E(e, t) {
          const n = (0, a.Z)((0, o.Js)(e), y)
          return t
            ? (0, d.Z)(n)
            : r.ZP.createElement(l, { className: 'action-link', sender: e }, e && (0, d.Z)(n))
        }
        function P(e, t, n) {
          const s = (0, a.Z)((0, o.U)(e, t), y)
          return n
            ? (0, d.Z)(s)
            : r.ZP.createElement(h, { className: 'action-link', chatId: t.id }, t && (0, d.Z)(s))
        }
        function A(e, t) {
          const n = 'another chat'
          return t
            ? n
            : r.ZP.createElement(h, { className: 'action-link underlined-link', chatId: e }, n)
        }
        function k(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ','
          const o = e.indexOf(t)
          if (o < 0 || !n) return [e]
          const a = []
          return (
            a.push(e.substring(0, o)),
            Array.isArray(n)
              ? n.forEach((e, t) => {
                  a.push(e), t + 1 < n.length && a.push(`${r} `)
                })
              : a.push(n),
            a.push(e.substring(o + t.length)),
            a.flat()
          )
        }
      },
      32340: (e, t, n) => {
        n.d(t, { Z: () => h, h: () => I })
        var r = n(60748),
          o = n(33681),
          a = n(83716),
          s = n(863),
          d = n(34284),
          i = n(46752),
          c = n(60782),
          u = n(97373),
          l = n(10088)
        const f = /(\*\*|__).+?\1/g
        function h(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ['emoji'],
            n = arguments.length > 2 ? arguments[2] : void 0
          return 'string' != typeof e
            ? [e]
            : (0, c.oA)(
                t.reduce(
                  (e, t) => {
                    switch (t) {
                      case 'escape_html':
                        return m(e)
                      case 'hq_emoji':
                        return (o.Z.lastIndex = 0), p(e, 'big', 'jsx')
                      case 'emoji':
                        return (o.Z.lastIndex = 0), p(e, 'small', 'jsx')
                      case 'emoji_html':
                        return (o.Z.lastIndex = 0), p(e, 'small', 'html')
                      case 'br':
                        return g(e, 'jsx')
                      case 'br_html':
                        return g(e, 'html')
                      case 'highlight':
                        return b(e, n.highlight)
                      case 'links':
                        return v(e)
                      case 'simple_markdown':
                        return w(e, 'jsx')
                      case 'simple_markdown_html':
                        return w(e, 'html')
                    }
                    return e
                  },
                  [e]
                )
              )
        }
        function m(e) {
          const t = document.createElement('div')
          return e.reduce(
            (e, n) =>
              'string' != typeof n ? (e.push(n), e) : ((t.innerText = n), e.push(t.innerHTML), e),
            []
          )
        }
        function p(e, t, n) {
          return s.op
            ? e
            : e.reduce((e, a) => {
                if ('string' != typeof a) return e.push(a), e
                const s = (a = (0, d.g6)(a)).split(o.Z),
                  c = a.match(o.Z) || []
                return (
                  e.push(s[0]),
                  c.reduce((e, o, a) => {
                    const c = (0, d.DW)(o)
                    if (!c) return e
                    const u = `./img-apple-${'big' === t ? '160' : '64'}/${c}.png`,
                      l = (0, i.Z)('emoji', 'small' === t && 'emoji-small')
                    if ('jsx' === n) {
                      const t = d.Uz.has(u)
                      e.push(
                        r.ZP.createElement('img', {
                          src: u,
                          className: `${l}${t ? '' : ' opacity-transition slow shown'}`,
                          alt: o,
                          'data-path': u,
                          onLoad: t ? void 0 : d.mE,
                        })
                      )
                    }
                    'html' === n &&
                      e.push(
                        `<img            draggable="false"            class="${l}"            src="./img-apple-${
                          'big' === t ? '160' : '64'
                        }/${c}.png"            alt="${o}"          />`
                      )
                    const f = 2 * a + 2
                    return s[f] && e.push(s[f]), e
                  }, e)
                )
              }, [])
        }
        function g(e, t) {
          return e.reduce((e, n) => {
            if ('string' != typeof n) return e.push(n), e
            const o = n.split(/\r\n|\r|\n/g).reduce((e, n, o, a) => {
              const s = n.trimLeft(),
                d = n.length - s.length
              return (
                e.push(String.fromCharCode(160).repeat(d) + s),
                o !== a.length - 1 &&
                  e.push('jsx' === t ? r.ZP.createElement('br', null) : '<br />'),
                e
              )
            }, [])
            return [...e, ...o]
          }, [])
        }
        function b(e, t) {
          return e.reduce((e, n) => {
            if ('string' != typeof n || !t) return e.push(n), e
            const o = n.toLowerCase().indexOf(t.toLowerCase())
            if (o < 0) return e.push(n), e
            const a = []
            return (
              a.push(n.substring(0, o)),
              a.push(
                r.ZP.createElement(
                  'span',
                  { className: 'matching-text-highlight' },
                  n.substring(o, o + t.length)
                )
              ),
              a.push(n.substring(o + t.length)),
              [...e, ...a]
            )
          }, [])
        }
        const y = new RegExp(`${a.FM6}|${a.uWu}`, 'ig')
        function v(e) {
          return e.reduce((e, t) => {
            if ('string' != typeof t) return e.push(t), e
            const n = t.match(y)
            if (!n || !n.length) return e.push(t), e
            const o = []
            let a = n.shift(),
              s = 0
            for (; a; ) {
              const e = t.indexOf(a, s)
              o.push(t.substring(s, e)),
                a.startsWith('@')
                  ? o.push(r.ZP.createElement(u.Z, { username: a }, a))
                  : (a.endsWith('?') && (a = a.slice(0, a.length - 1)),
                    o.push(r.ZP.createElement(l.Z, { text: a, url: a }))),
                (s = e + a.length),
                (a = n.shift())
            }
            return o.push(t.substring(s)), [...e, ...o]
          }, [])
        }
        function w(e, t) {
          return e.reduce((e, n) => {
            if ('string' != typeof n) return e.push(n), e
            const o = n.split(f),
              a = n.match(f) || []
            return (
              e.push(o[0]),
              a.reduce((e, n, a) => {
                'jsx' === t
                  ? e.push(
                      n.startsWith('**')
                        ? r.ZP.createElement('b', null, n.replace(/\*\*/g, ''))
                        : r.ZP.createElement('i', null, n.replace(/__/g, ''))
                    )
                  : e.push(
                      n.startsWith('**')
                        ? `<b>${n.replace(/\*\*/g, '')}</b>`
                        : `<i>${n.replace(/__/g, '')}</i>`
                    )
                const s = 2 * a + 2
                return o[s] && e.push(o[s]), e
              }, e)
            )
          }, [])
        }
        function I(e, t) {
          const n = (e.trim().match(/\n/g) || '').length + 1,
            { lineHeight: r } = getComputedStyle(t),
            o = parseFloat(r.split('px')[0])
          return t.clientHeight >= (n + 1) * o
        }
      },
      20230: (e, t, n) => {
        n.d(t, { z: () => P, H: () => E })
        var r = n(60748),
          o = n(33555),
          a = n(6137),
          s = n(46752),
          d = n(32340),
          i = n(64319),
          c = n(50711),
          u = n(44139),
          l = n(97373),
          f = n(10088),
          h = n(60706)
        const m = new Map(),
          p = (0, s.y)('Spoiler'),
          g = (0, r.X$)((e) => {
            let { children: t, messageId: n } = e
            const o = (0, r.sO)(null),
              [s, d, i] = (0, h.Z)(),
              c = (0, r.I4)(
                () =>
                  o.current
                    ? (o.current.textContent?.length || 0) +
                      4 * o.current.querySelectorAll('.emoji').length
                    : 0,
                []
              ),
              u = (0, r.I4)(
                (e) => {
                  e.preventDefault(), e.stopPropagation(), m.get(n)?.forEach((e) => e.reveal())
                  const t = m.get(n)?.reduce((e, t) => e + t.contentLength, 0) || 0,
                    r = 1e3 * Math.round(t / 23),
                    o = Math.max(5e3, Math.min(r, 6e4))
                  setTimeout(() => {
                    m.get(n)?.forEach((e) => e.conceal()), i()
                  }, o)
                },
                [i, n]
              )
            return (
              (0, r.d4)(() => {
                if (!n) return
                const e = c()
                return (
                  m.has(n)
                    ? m.get(n).push({ reveal: d, conceal: i, contentLength: e })
                    : m.set(n, [{ reveal: d, conceal: i, contentLength: e }]),
                  () => {
                    m.delete(n)
                  }
                )
              }, [i, c, u, s, n, d]),
              r.ZP.createElement(
                'span',
                {
                  className: p('&', !s && 'concealed', !s && Boolean(n) && 'animated'),
                  onClick: n && !s ? u : void 0,
                  'data-entity-type': a.Vv.Spoiler,
                },
                r.ZP.createElement('span', { className: p('content'), ref: o }, t)
              )
            )
          })
        var b = n(96459),
          y = n(77510),
          v = n(12255),
          w = n(59107)
        const I = (0, r.X$)((e) => {
            let { text: t, className: n, noCopy: a, onWordWrapToggle: c } = e
            const { showNotification: u } = (0, o.Sv)(),
              l = (0, r.sO)(null),
              f = (0, v.Z)(),
              h = (0, w.Z)(),
              [m, p] = (0, r.eJ)(!0),
              [g, b] = (0, r.eJ)(!1),
              y = (0, r.I4)(() => {
                const e = (0, d.h)(t, l.current.parentElement)
                b(e)
              }, [t])
            ;(0, r.d4)(() => {
              m && y()
            }, [y, m, t, f])
            const I = (0, r.I4)(() => {
                ;(0, i.TE)(t), u({ message: h('TextCopied') })
              }, [h, u, t]),
              C = (0, r.I4)(() => {
                p(!m), c?.(!m)
              }, [m, c]),
              S = (0, s.Z)('d09hp4fxFTuFw1emBUDA', !g && a && 'We_Wcr7YvkkUM8ICjRAs'),
              E = (0, s.Z)('SwhO2lEtk47g68_ixpDe', n),
              P = (0, s.Z)('iEZTJnlmMCct8jJztTx8', m && 'B4kEjXkw8Sse9g0Xv_OO')
            return r.ZP.createElement(
              'div',
              { className: E, ref: l },
              r.ZP.createElement(
                'div',
                { className: S },
                g &&
                  r.ZP.createElement(
                    'div',
                    { className: P, onClick: C, title: 'Word Wrap' },
                    r.ZP.createElement('i', { className: 'icon-word-wrap' })
                  ),
                !a &&
                  r.ZP.createElement(
                    'div',
                    { className: 'deqdY4TS7mStC8qkslV4', onClick: I, title: h('Copy') },
                    r.ZP.createElement('i', { className: 'icon-copy' })
                  )
              )
            )
          }),
          C = (0, r.X$)((e) => {
            let { text: t, noCopy: n } = e
            const [o, a] = (0, r.eJ)(!0),
              d = (0, r.I4)((e) => {
                a(e)
              }, []),
              i = (0, s.Z)('text-entity-pre', !o && 'no-word-wrap')
            return r.ZP.createElement(
              'pre',
              { className: i },
              r.ZP.createElement('div', { className: 'pre-code custom-scroll-x' }, t),
              r.ZP.createElement(I, {
                text: t,
                className: 'code-overlay',
                onWordWrapToggle: d,
                noCopy: n,
              })
            )
          }),
          S = (0, r.X$)((e) => {
            let { text: t, language: o, noCopy: d } = e
            const [i, c] = (0, r.eJ)(!0),
              { result: u } = (0, y.Z)(
                () =>
                  o
                    ? Promise.all([n.e(3966), n.e(4713)])
                        .then(n.bind(n, 94713))
                        .then((e) => e.default(t, o))
                    : Promise.resolve(void 0),
                [o, t]
              ),
              l = (0, r.I4)((e) => {
                c(e)
              }, [])
            if (!u) return r.ZP.createElement(C, { text: t, noCopy: d })
            const f = (0, s.Z)('code-block', !i && 'no-word-wrap')
            return r.ZP.createElement(
              'pre',
              { className: f, 'data-entity-type': a.Vv.Pre, 'data-language': o },
              u,
              r.ZP.createElement(I, {
                text: t,
                className: 'code-overlay',
                onWordWrapToggle: l,
                noCopy: d,
              })
            )
          })
        function E(e, t, n, o, i, c, h, m, p, y, v, w, I, C) {
          if (!t || !t.length) return A(e, n, o, i, h)
          const E = []
          let P = !1
          const Z = (function (e) {
            const t = new Set(),
              n = []
            return (
              e.forEach((r, o) => {
                if (t.has(o)) return
                const a = k(r, o, e, t)
                a &&
                  (a.organizedIndexes.forEach((e) => {
                    t.add(e)
                  }),
                  n.push(a))
              }),
              n
            )
          })(t)
          function R(t, E, k, Z) {
            const _ = [],
              { entity: B, nestedEntities: O } = k,
              { offset: D, length: F, type: x } = B
            let j = e.substring(t, D)
            const U = j.length
            j &&
              (P && j.length > 0 && '\n' === j[0] && ((j = j.substr(1)), (P = !1)),
              j && _.push(...A(j, n, o, i, h)))
            const $ = t + U,
              V = $ + F
            let W = e.substring(D, D + F)
            const H = []
            if (
              (P && W.length > 0 && '\n' === W[0] && ((W = W.substr(1)), (P = !1)),
              x === a.Vv.Pre && (P = !0),
              O.length)
            ) {
              let e = $
              O.forEach((t, n) => {
                const { renderResult: r, entityEndIndex: o } = R(e, V, t, n === O.length - 1)
                H.push(...r), (e = o)
              })
            }
            const G = i
              ? (function (e, t, n) {
                  const r = 'string' == typeof t ? t : void 0,
                    o = e.type === a.Vv.Pre ? t.trimEnd() : t,
                    s = n.length
                      ? n.join('')
                      : (0, d.Z)(o, ['escape_html', 'emoji_html', 'br_html']).join('')
                  if (!r) return s
                  switch (e.type) {
                    case a.Vv.Bold:
                      return `<b>${s}</b>`
                    case a.Vv.Italic:
                      return `<i>${s}</i>`
                    case a.Vv.Underline:
                      return `<u>${s}</u>`
                    case a.Vv.Code:
                      return `<code class="text-entity-code">${s}</code>`
                    case a.Vv.Pre:
                      return `\`\`\`${(0, d.Z)(e.language || '', [
                        'escape_html',
                      ])}<br/>${s}<br/>\`\`\`<br/>`
                    case a.Vv.Strike:
                      return `<del>${s}</del>`
                    case a.Vv.MentionName:
                      return `<a\n        class="text-entity-link"\n        data-entity-type="${a.Vv.MentionName}"\n        data-user-id="${e.userId}"\n        contenteditable="false"\n        dir="auto"\n      >${s}</a>`
                    case a.Vv.Url:
                    case a.Vv.TextUrl:
                      return `<a\n        class="text-entity-link"\n        href=${M(
                        r,
                        e
                      )}\n        data-entity-type="${e.type}"\n        dir="auto"\n      >${s}</a>`
                    case a.Vv.Spoiler:
                      return `<span\n        class="spoiler"\n        data-entity-type="${a.Vv.Spoiler}"\n        >${s}</span>`
                    case a.Vv.CustomEmoji:
                      return (0, u.z3)(r, e)
                    default:
                      return s
                  }
                })(B, W, H)
              : (function (e, t, n, o, d, i, c, u, h, m, p, y, v, w) {
                  const I = 'string' == typeof t && t,
                    C = n.length ? n : t
                  function E() {
                    return A(C, o, void 0, void 0, i)
                  }
                  if (!I) return E()
                  if (i) {
                    const t = E()
                    return e.type === a.Vv.Spoiler
                      ? r.ZP.createElement(g, null, t)
                      : e.type === a.Vv.CustomEmoji
                      ? r.ZP.createElement(b.Z, {
                          key: w ? `${w}-${e.offset}` : void 0,
                          documentId: e.documentId,
                          size: p,
                          withSharedAnimation: !0,
                          sharedCanvasRef: y,
                          sharedCanvasHqRef: v,
                          withGridFix: !p,
                          observeIntersectionForLoading: u,
                          observeIntersectionForPlaying: h,
                          withTranslucentThumb: m,
                        })
                      : t
                  }
                  switch (e.type) {
                    case a.Vv.Bold:
                      return r.ZP.createElement('strong', { 'data-entity-type': e.type }, E())
                    case a.Vv.Blockquote:
                      return r.ZP.createElement('blockquote', { 'data-entity-type': e.type }, E())
                    case a.Vv.BotCommand:
                      return r.ZP.createElement(
                        'a',
                        {
                          onClick: T,
                          className: 'text-entity-link',
                          dir: 'auto',
                          'data-entity-type': e.type,
                        },
                        E()
                      )
                    case a.Vv.Hashtag:
                    case a.Vv.Cashtag:
                      return r.ZP.createElement(
                        'a',
                        {
                          onClick: N,
                          className: 'text-entity-link',
                          dir: 'auto',
                          'data-entity-type': e.type,
                        },
                        E()
                      )
                    case a.Vv.Code:
                      return r.ZP.createElement(
                        'code',
                        {
                          className: (0, s.Z)('text-entity-code', !c && 'clickable'),
                          onClick: c ? void 0 : L,
                          role: 'textbox',
                          tabIndex: 0,
                          'data-entity-type': e.type,
                        },
                        E()
                      )
                    case a.Vv.Email:
                      return r.ZP.createElement(
                        'a',
                        {
                          href: `mailto:${I}`,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className: 'text-entity-link',
                          dir: 'auto',
                          'data-entity-type': e.type,
                        },
                        E()
                      )
                    case a.Vv.Italic:
                      return r.ZP.createElement('em', { 'data-entity-type': e.type }, E())
                    case a.Vv.MentionName:
                      return r.ZP.createElement(l.Z, { userId: e.userId }, E())
                    case a.Vv.Mention:
                      return r.ZP.createElement(l.Z, { username: I }, E())
                    case a.Vv.Phone:
                      return r.ZP.createElement(
                        'a',
                        {
                          href: `tel:${I}`,
                          className: 'text-entity-link',
                          dir: 'auto',
                          'data-entity-type': e.type,
                        },
                        E()
                      )
                    case a.Vv.Pre:
                      return r.ZP.createElement(S, { text: I, language: e.language, noCopy: c })
                    case a.Vv.Strike:
                      return r.ZP.createElement('del', { 'data-entity-type': e.type }, E())
                    case a.Vv.TextUrl:
                    case a.Vv.Url:
                      return r.ZP.createElement(f.Z, { url: M(I, e), text: I }, E())
                    case a.Vv.Underline:
                      return r.ZP.createElement('ins', { 'data-entity-type': e.type }, E())
                    case a.Vv.Spoiler:
                      return r.ZP.createElement(g, { messageId: d }, E())
                    case a.Vv.CustomEmoji:
                      return r.ZP.createElement(b.Z, {
                        key: w ? `${w}-${e.offset}` : void 0,
                        documentId: e.documentId,
                        size: p,
                        withSharedAnimation: !0,
                        sharedCanvasRef: y,
                        sharedCanvasHqRef: v,
                        withGridFix: !p,
                        observeIntersectionForLoading: u,
                        observeIntersectionForPlaying: h,
                        withTranslucentThumb: m,
                      })
                    default:
                      return E()
                  }
                })(B, W, H, n, c, h, m, p, y, v, o, w, I, C)
            if ((Array.isArray(G) ? _.push(...G) : _.push(G), Z && V < E)) {
              let t = e.substring(V, E)
              P && t.length > 0 && '\n' === t[0] && (t = t.substring(1)),
                t && _.push(...A(t, n, o, i, h))
            }
            return { renderResult: _, entityEndIndex: V }
          }
          let _ = 0
          return (
            Z.forEach((t, n) => {
              const { renderResult: r, entityEndIndex: o } = R(_, e.length, t, n === Z.length - 1)
              E.push(...r), (_ = o)
            }),
            E
          )
        }
        function P(e) {
          const { text: t, entities: n } = e || {}
          if (!t) return ''
          const r = E(t, n, void 0, void 0, !0)
          return Array.isArray(r) ? r.join('') : r
        }
        function A(e, t, n, r, o) {
          if (Array.isArray(e)) {
            const a = []
            return (
              e.forEach((e) => {
                a.push(...A(e, t, n, r, o))
              }),
              a
            )
          }
          if (r) return (0, d.Z)(e, ['escape_html', 'emoji_html', 'br_html'])
          const a = [n && n > 64 ? 'hq_emoji' : 'emoji']
          return (
            o || a.push('br'),
            t ? (0, d.Z)(e, a.concat('highlight'), { highlight: t }) : (0, d.Z)(e, a)
          )
        }
        function k(e, t, n, r) {
          const { offset: o, length: a } = e,
            s = new Set([t])
          if (r.has(t)) return
          const d = []
          return (
            n
              .filter((e, n) => n > t && e.offset >= o && e.offset < o + a)
              .map((e) => k(e, n.indexOf(e), n, r))
              .filter(Boolean)
              .forEach((e) => {
                let t = !1
                e.organizedIndexes.forEach((e) => {
                  t || s.has(e) || (t = !0), s.add(e)
                }),
                  t && d.push(e)
              }),
            { entity: e, organizedIndexes: s, nestedEntities: d }
          )
        }
        function M(e, t) {
          const { type: n } = t
          return n === a.Vv.TextUrl && t.url ? t.url : e
        }
        function T(e) {
          ;(0, o.Sv)().sendBotCommand({ command: e.currentTarget.innerText })
        }
        function N(e) {
          ;(0, o.Sv)().setLocalTextSearchQuery({ query: e.currentTarget.innerText }),
            (0, o.Sv)().searchTextMessagesLocal()
        }
        function L(e) {
          ;(0, i.TE)(e.currentTarget.innerText),
            (0, o.Sv)().showNotification({ message: (0, c.Iu)('TextCopied') })
        }
      },
      78046: (e, t, n) => {
        n.d(t, { Z: () => p })
        var r = n(60748),
          o = n(33555),
          a = n(74288),
          s = n(69118),
          d = n(65116)
        const i = new Set()
        let c
        ;(0, d.ll)((e) => {
          if (e.lastSyncTime && e.lastSyncTime !== c?.lastSyncTime)
            for (const t of i) t(e.lastSyncTime)
          c = e
        })
        let u = new Set()
        const l = new Set(),
          f = (0, s.P2)(
            () => {
              const e = [...u],
                t = e.slice(0, 100),
                n = e.slice(101)
              ;(0, o.Sv)().loadCustomEmojis({ ids: t }), (u = new Set(n)), u.size && f()
            },
            200,
            !1
          ),
          h = (0, s.P2)(
            () => {
              ;(0, o.Sv)().updateLastRenderedCustomEmojis({ ids: [...l].reverse() }), l.clear()
            },
            200,
            !1
          )
        function m(e) {
          l.add(e), h()
        }
        function p(e) {
          const [t, n] = (0, r.eJ)(e ? (0, o.Rd)().customEmojis.byId[e] : void 0)
          !(function (e) {
            const t = (function () {
              const [e, t] = (0, r.eJ)((0, o.Rd)().lastSyncTime)
              return (
                (0, r.d4)(
                  () => (
                    i.add(t),
                    () => {
                      i.delete(t)
                    }
                  ),
                  []
                ),
                e
              )
            })()
            e && (m(e), (0, o.Rd)().customEmojis.byId[e] || (u.add(e), t && f()))
          })(e)
          const s = (0, r.I4)(() => {
            e && n((0, o.Rd)().customEmojis.byId[e])
          }, [e])
          return (
            (0, r.d4)(s, [e, s]),
            (0, r.d4)(() => {
              if (!t && e)
                return (
                  (0, a.k2)(s, e),
                  () => {
                    ;(0, a.sp)(s)
                  }
                )
            }, [t, e, s]),
            t
          )
        }
        ;(0, a.bn)(m)
      },
      44139: (e, t, n) => {
        n.d(t, { fJ: () => i, qo: () => l, yR: () => c, z3: () => u })
        var r = n(6137),
          o = n(33555),
          a = n(83716),
          s = n(74399),
          d = n(74288)
        const i = 'img[data-document-id]'
        function c(e) {
          const [t, n, o] = (0, d.dA)(e)
          return `<img\n    class="custom-emoji emoji emoji-small ${
            t ? 'placeholder' : ''
          }"\n    draggable="false"\n    alt="${e.emoji}"\n    data-document-id="${e.id}"\n    ${
            o ? `data-unique-id="${o}"` : ''
          }\n    data-entity-type="${r.Vv.CustomEmoji}"\n    src="${n}"\n  />`
        }
        function u(e, t) {
          const n = (0, o.Rd)().customEmojis.byId[t.documentId],
            [a, s, i] = (0, d.dA)(n)
          return `<img\n    class="custom-emoji emoji emoji-small ${
            a ? 'placeholder' : ''
          }"\n    draggable="false"\n    alt="${e}"\n    data-document-id="${t.documentId}"\n    ${
            i ? `data-unique-id="${i}"` : ''
          }\n    data-entity-type="${r.Vv.CustomEmoji}"\n    src="${s}"\n  />`
        }
        function l(e) {
          if (e)
            return e > a.L5X
              ? 2.25 * s.Gw
              : 1 === e
              ? 7 * s.Gw
              : Math.min(7.5 - 0.75 * e, 5.625) * s.Gw
        }
      },
      30386: (e, t, n) => {
        n.d(t, { b: () => s, q: () => a })
        var r = n(83716),
          o = n(863)
        function a(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          o.cj ||
            !document.activeElement ||
            document.activeElement.id !== r.R2F ||
            (!t && e.target !== e.currentTarget) ||
            e.preventDefault()
        }
        function s(e) {
          a(e, !0)
        }
      },
      97373: (e, t, n) => {
        n.d(t, { Z: () => d })
        var r = n(60748),
          o = n(33555),
          a = n(6137),
          s = n(11192)
        const d = (0, o.c$)((e, t) => {
          let { userId: n } = t
          return { userOrChat: n ? (0, s.dy)(e, n) : void 0 }
        })((e) => {
          let { userId: t, username: n, userOrChat: s, children: d } = e
          const { openChat: i, openChatByUsername: c } = (0, o.Sv)()
          return r.ZP.createElement(
            'a',
            {
              onClick: () => {
                s ? i({ id: s.id }) : n && c({ username: n.substring(1) })
              },
              className: 'text-entity-link',
              dir: 'auto',
              'data-entity-type': t ? a.Vv.MentionName : a.Vv.Mention,
            },
            d
          )
        })
      },
      231: (e, t, n) => {
        n.d(t, { Z: () => i })
        var r = n(60748),
          o = n(46752),
          a = n(80036),
          s = n(49204),
          d = n(68512)
        const i = (e) => {
          let {
              ref: t,
              type: n = 'button',
              id: i,
              onClick: c,
              onContextMenu: u,
              onMouseDown: l,
              onMouseEnter: f,
              onMouseLeave: h,
              onFocus: m,
              children: p,
              size: g = 'default',
              color: b = 'primary',
              backgroundImage: y,
              className: v,
              round: w,
              pill: I,
              fluid: C,
              isText: S,
              isLoading: E,
              isShiny: P,
              withPremiumGradient: A,
              onTransitionEnd: k,
              ariaLabel: M,
              ariaControls: T,
              hasPopup: N,
              href: L,
              download: Z,
              disabled: R,
              allowDisabledClick: _,
              ripple: B,
              faded: O,
              tabIndex: D,
              isRtl: F,
              noPreventDefault: x,
              shouldStopPropagation: j,
              style: U,
            } = e,
            $ = (0, r.sO)(null)
          t && ($ = t)
          const [V, W] = (0, r.eJ)(!1),
            H = (0, o.Z)(
              'Button',
              v,
              g,
              b,
              w && 'round',
              I && 'pill',
              C && 'fluid',
              R && 'disabled',
              _ && 'click-allowed',
              S && 'text',
              E && 'loading',
              B && 'has-ripple',
              O && 'faded',
              V && 'clicked',
              y && 'with-image',
              P && 'shiny',
              A && 'premium'
            ),
            G = (0, r.I4)(
              (e) => {
                ;(!_ && R) || !c || c(e),
                  j && e.stopPropagation(),
                  W(!0),
                  setTimeout(() => {
                    W(!1)
                  }, 400)
              },
              [_, R, c, j]
            ),
            z = (0, r.I4)(
              (e) => {
                x || e.preventDefault(), (!_ && R) || !l || l(e)
              },
              [_, R, x, l]
            )
          return L
            ? r.ZP.createElement(
                'a',
                {
                  ref: $,
                  id: i,
                  className: H,
                  href: L,
                  title: M,
                  download: Z,
                  tabIndex: D,
                  dir: F ? 'rtl' : void 0,
                  'aria-label': M,
                  'aria-controls': T,
                  style: U,
                  onTransitionEnd: k,
                },
                p,
                !R && B && r.ZP.createElement(d.Z, null)
              )
            : r.ZP.createElement(
                'button',
                {
                  ref: $,
                  id: i,
                  type: n,
                  className: H,
                  onClick: G,
                  onContextMenu: u,
                  onMouseDown: z,
                  onMouseEnter: f && !R ? f : void 0,
                  onMouseLeave: h && !R ? h : void 0,
                  onTransitionEnd: k,
                  onFocus: m && !R ? m : void 0,
                  'aria-label': M,
                  'aria-controls': T,
                  'aria-haspopup': N,
                  title: M,
                  tabIndex: D,
                  dir: F ? 'rtl' : void 0,
                  style: (0, a.Z)(U, y && `background-image: url(${y})`),
                },
                E
                  ? r.ZP.createElement(
                      'div',
                      null,
                      r.ZP.createElement('span', { dir: F ? 'auto' : void 0 }, 'Please wait...'),
                      r.ZP.createElement(s.Z, { color: S ? 'blue' : 'white' })
                    )
                  : p,
                !R && B && r.ZP.createElement(d.Z, null)
              )
        }
      },
      14605: (e, t, n) => {
        n.d(t, { Z: () => i })
        var r = n(60748),
          o = n(46752),
          a = n(59107),
          s = n(32340),
          d = n(49204)
        const i = (0, r.X$)((e) => {
          let {
            id: t,
            name: n,
            value: i,
            label: c,
            subLabel: u,
            checked: l,
            tabIndex: f,
            disabled: h,
            round: m,
            blocking: p,
            isLoading: g,
            className: b,
            rightIcon: y,
            onChange: v,
            onCheck: w,
            onClickLabel: I,
          } = e
          const C = (0, a.Z)(),
            S = (0, r.sO)(null),
            E = (0, r.I4)(
              (e) => {
                v && v(e), w && w(e.currentTarget.checked)
              },
              [v, w]
            ),
            P = (0, o.Z)(
              'Checkbox',
              h && 'disabled',
              m && 'round',
              g && 'loading',
              p && 'blocking',
              b
            )
          return r.ZP.createElement(
            'label',
            {
              className: P,
              dir: C.isRtl ? 'rtl' : void 0,
              onClick: I
                ? function (e) {
                    e.target !== S.current && I?.(e)
                  }
                : void 0,
              ref: S,
            },
            r.ZP.createElement('input', {
              type: 'checkbox',
              id: t,
              name: n,
              value: i,
              checked: l,
              disabled: h,
              tabIndex: f,
              onChange: E,
              onClick: I
                ? function (e) {
                    e.stopPropagation()
                  }
                : void 0,
            }),
            r.ZP.createElement(
              'div',
              { className: 'Checkbox-main' },
              r.ZP.createElement(
                'span',
                { className: 'label', dir: 'auto' },
                'string' == typeof c ? (0, s.Z)(c) : c,
                y && r.ZP.createElement('i', { className: `icon-${y} right-icon` })
              ),
              u && r.ZP.createElement('span', { className: 'subLabel', dir: 'auto' }, (0, s.Z)(u))
            ),
            g && r.ZP.createElement(d.Z, null)
          )
        })
      },
      53106: (e, t, n) => {
        n.d(t, { Z: () => s })
        var r = n(60748),
          o = n(52328),
          a = n(231)
        const s = (e) => {
          let {
            trigger: t,
            className: n,
            children: s,
            positionX: d = 'left',
            positionY: i = 'top',
            footer: c,
            forceOpen: u,
            onOpen: l,
            onClose: f,
            onTransitionEnd: h,
            onMouseEnterBackdrop: m,
            onHide: p,
          } = e
          const g = (0, r.sO)(null),
            b = (0, r.sO)(null),
            [y, v] = (0, r.eJ)(!1),
            w = (0, r.I4)(() => {
              v(!1), f?.()
            }, [f]),
            I = (0, r.Ye)(
              () =>
                t ||
                ((e) => {
                  let { onTrigger: t, isOpen: n } = e
                  return r.ZP.createElement(
                    a.Z,
                    {
                      round: !0,
                      size: 'smaller',
                      color: 'translucent',
                      className: n ? 'active' : '',
                      onClick: t,
                      ariaLabel: 'More actions',
                    },
                    r.ZP.createElement('i', { className: 'icon-more' })
                  )
                }),
              [t]
            )
          return r.ZP.createElement(
            'div',
            {
              ref: b,
              className: `DropdownMenu ${n || ''}`,
              onKeyDown: (e) => {
                const t = g.current
                if (!y || 40 !== e.keyCode || !t) return
                const n = document.activeElement,
                  r = Array.from(t.children)
                ;(n && -1 !== r.indexOf(n)) || r[0].focus()
              },
              onTransitionEnd: h,
            },
            I({
              onTrigger: () => {
                v(!y), y ? f?.() : l?.()
              },
              isOpen: y,
            }),
            r.ZP.createElement(
              o.Z,
              {
                ref: g,
                containerRef: b,
                isOpen: y || Boolean(u),
                className: n || '',
                positionX: d,
                positionY: i,
                footer: c,
                autoClose: !0,
                onClose: w,
                shouldSkipTransition: u,
                onCloseAnimationEnd: p,
                onMouseEnterBackdrop: m,
              },
              s
            )
          )
        }
      },
      97687: (e, t, n) => {
        n.d(t, { Z: () => s })
        var r = n(60748),
          o = n(46752),
          a = n(59107)
        const s = (0, r.X$)((e) => {
          let {
            ref: t,
            id: n,
            className: s,
            value: d,
            label: i,
            error: c,
            success: u,
            disabled: l,
            readOnly: f,
            placeholder: h,
            autoComplete: m,
            inputMode: p,
            maxLength: g,
            tabIndex: b,
            teactExperimentControlled: y,
            onChange: v,
            onInput: w,
            onKeyPress: I,
            onKeyDown: C,
            onBlur: S,
            onPaste: E,
          } = e
          const P = (0, a.Z)(),
            A = c || u || i,
            k = (0, o.Z)(
              'input-group',
              d && 'touched',
              c ? 'error' : u && 'success',
              l && 'disabled',
              f && 'disabled',
              A && 'with-label',
              s
            )
          return r.ZP.createElement(
            'div',
            { className: k, dir: P.isRtl ? 'rtl' : void 0 },
            r.ZP.createElement('input', {
              ref: t,
              className: 'form-control',
              type: 'text',
              id: n,
              dir: 'auto',
              value: d || '',
              tabIndex: b,
              placeholder: h,
              maxLength: g,
              autoComplete: m,
              inputMode: p,
              disabled: l,
              readOnly: f,
              onChange: v,
              onInput: w,
              onKeyPress: I,
              onKeyDown: C,
              onBlur: S,
              onPaste: E,
              'aria-label': A,
              teactExperimentControlled: y,
            }),
            A && r.ZP.createElement('label', { htmlFor: n }, A)
          )
        })
      },
      8337: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(46752)
        const a = (e) => {
          let { children: t, isPrimary: n, className: a, isRtl: s, onClick: d } = e
          const i = (0, r.I4)(
            (e) => {
              e.preventDefault(), d(e)
            },
            [d]
          )
          return r.ZP.createElement(
            'a',
            {
              href: '#',
              className: (0, o.Z)('h_qmZuKBrM7SWOEcmH68', a, n && 'iZ_WxIDQyqM2SOYqu4Y8'),
              dir: s ? 'rtl' : 'auto',
              onClick: d ? i : void 0,
            },
            t
          )
        }
      },
      34288: (e, t, n) => {
        n.d(t, { Z: () => s })
        var r = n(60748),
          o = n(49204),
          a = n(46752)
        const s = (0, r.X$)((e) => {
          let { color: t = 'blue', backgroundColor: n, onClick: s } = e
          return r.ZP.createElement(
            'div',
            { className: (0, a.Z)('Loading', s && 'interactive'), onClick: s },
            r.ZP.createElement(o.Z, { color: t, backgroundColor: n })
          )
        })
      },
      52328: (e, t, n) => {
        n.d(t, { Z: () => g })
        var r = n(60748),
          o = n(31212),
          a = n(72313),
          s = n(58758),
          d = n(274),
          i = n(23989),
          c = n(46752),
          u = n(80036),
          l = n(18674),
          f = n(46590),
          h = n(30386),
          m = n(863),
          p = n(62898)
        const g = (0, r.X$)((e) => {
          let {
              ref: t,
              containerRef: n,
              isOpen: g,
              id: b,
              className: y,
              bubbleClassName: v,
              style: w,
              bubbleStyle: I,
              ariaLabelledBy: C,
              children: S,
              transformOriginX: E,
              transformOriginY: P,
              positionX: A = 'left',
              positionY: k = 'top',
              autoClose: M = !1,
              footer: T,
              noCloseOnBackdrop: N = !1,
              noCompact: L,
              onCloseAnimationEnd: Z,
              onClose: R,
              onMouseEnter: _,
              onMouseLeave: B,
              shouldSkipTransition: O,
              withPortal: D,
              onMouseEnterBackdrop: F,
            } = e,
            x = (0, r.sO)(null)
          t && (x = t)
          const j = n || x,
            { transitionClassNames: U } = (0, o.Z)(g, Z, O, void 0, O)
          ;(0, r.d4)(() => (g ? (0, i.Z)(R) : void 0), [g, R]),
            (0, f.Z)({ isActive: g, onBack: R, shouldBeReplaced: !0 }),
            (0, d.Z)(
              (e) => {
                let [t] = e
                ;(g || (!g && !0 === t)) && (0, l.YW)(200)
              },
              [g]
            )
          const $ = (0, a.Z)(x, g, M ? R : void 0, void 0, !0)
          ;(0, s.Z)(g, j, N ? void 0 : R)
          const V = (0, c.Z)('bubble menu-container custom-scroll', k, A, T && 'with-footer', U, v),
            W = void 0 !== P ? `${P}px` : void 0,
            H = void 0 !== E ? `${E}px` : void 0,
            G = r.ZP.createElement(
              'div',
              {
                id: b,
                className: (0, c.Z)(
                  'Menu no-selection',
                  !L && m.FW && 'compact',
                  !m.gk && 'no-blur',
                  y
                ),
                style: w,
                'aria-labelledby': C,
                role: C ? 'menu' : void 0,
                onKeyDown: g ? $ : void 0,
                onMouseEnter: _,
                onMouseLeave: g ? B : void 0,
              },
              g &&
                r.ZP.createElement('div', {
                  className: 'backdrop',
                  onMouseDown: h.b,
                  onMouseEnter: F,
                }),
              r.ZP.createElement(
                'div',
                {
                  role: 'presentation',
                  ref: x,
                  className: V,
                  style: (0, u.Z)(`transform-origin: ${H || A} ${W || k}`, I),
                  onClick: M ? R : void 0,
                },
                S,
                T && r.ZP.createElement('div', { className: 'footer' }, T)
              )
            )
          return D ? r.ZP.createElement(p.Z, null, G) : G
        })
      },
      58964: (e, t, n) => {
        n.d(t, { Z: () => i })
        var r = n(60748),
          o = n(83716),
          a = n(46752),
          s = n(59107),
          d = n(863)
        const i = (e) => {
          const {
              icon: t,
              customIcon: n,
              className: i,
              children: c,
              onClick: u,
              href: l,
              download: f,
              disabled: h,
              destructive: m,
              ariaLabel: p,
              withWrap: g,
              onContextMenu: b,
              clickArg: y,
            } = e,
            v = (0, s.Z)(),
            w = (0, r.I4)(
              (e) => {
                if (h || !u) return e.stopPropagation(), void e.preventDefault()
                u(e, y)
              },
              [y, h, u]
            ),
            I = (0, r.I4)(
              (e) => {
                if (13 === e.keyCode || 32 === e.keyCode)
                  return h || !u ? (e.stopPropagation(), void e.preventDefault()) : void u(e, y)
              },
              [y, h, u]
            ),
            C = (0, a.Z)(
              'MenuItem',
              i,
              h && 'disabled',
              m && 'destructive',
              d.FW && 'compact',
              g && 'wrap'
            ),
            S = r.ZP.createElement(
              r.ZP.Fragment,
              null,
              !n &&
                t &&
                r.ZP.createElement('i', {
                  className: `icon-${t}`,
                  'data-char': t.startsWith('char-') ? t.replace('char-', '') : void 0,
                }),
              n,
              c
            )
          return l
            ? r.ZP.createElement(
                'a',
                {
                  tabIndex: 0,
                  className: C,
                  href: l,
                  download: f,
                  'aria-label': p,
                  title: p,
                  target: l.startsWith(window.location.origin) || o.Cgt ? '_self' : '_blank',
                  rel: 'noopener noreferrer',
                  dir: v.isRtl ? 'rtl' : void 0,
                  onClick: u,
                },
                S
              )
            : r.ZP.createElement(
                'div',
                {
                  role: 'menuitem',
                  tabIndex: 0,
                  className: C,
                  onClick: w,
                  onKeyDown: I,
                  onContextMenu: b,
                  'aria-label': p,
                  title: p,
                  dir: v.isRtl ? 'rtl' : void 0,
                },
                S
              )
        }
      },
      35148: (e, t, n) => {
        n.d(t, { Z: () => l })
        var r = n(60748),
          o = n(69118),
          a = n(45332),
          s = n(18674)
        var d = n(46898),
          i = n(12019),
          c = n(34446)
        function u() {
          return (
            (u = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t]
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
                }),
            u.apply(this, arguments)
          )
        }
        const l = (0, r.X$)(function (e) {
          let { ref: t, canPlay: n, onReady: l, onTimeUpdate: f, ...h } = e
          const m = (0, r.sO)(null)
          t || (t = m)
          const { handlePlaying: p } = (function (e, t) {
            const n = (0, r.sO)()
            n.current = t
            const { play: d, pause: i } = (function (e) {
                const t = (0, r.sO)(!1),
                  n = (0, r.sO)(!1)
                return {
                  play: (0, r.I4)(() => {
                    ;(t.current = !1),
                      e.current &&
                        !n.current &&
                        document.body.contains(e.current) &&
                        ((n.current = !0),
                        e.current
                          .play()
                          .then(() => {
                            ;(n.current = !1), t.current && (e.current?.pause(), (t.current = !1))
                          })
                          .catch((e) => {
                            console.warn(e)
                          }))
                  }, [e]),
                  pause: (0, r.I4)(() => {
                    n.current ? (t.current = !0) : e.current?.pause()
                  }, [e]),
                }
              })(e),
              c = (0, r.sO)(),
              u = (0, r.I4)(() => {
                ;(c.current = !0), i()
              }, [i]),
              l = (0, r.I4)(() => {
                ;(c.current = !1), n.current && d()
              }, [d]),
              f = (0, r.I4)(() => {
                ;(0, o.T2)(l)
              }, [l])
            ;(0, a.Z)(u, f), (0, s.ZP)(u, l)
            const h = (0, r.I4)(() => {
              ;(n.current && !c.current) || i()
            }, [i])
            return (
              (0, r.d4)(() => {
                t ? c.current || d() : i()
              }, [t, d, i]),
              { handlePlaying: h }
            )
          })(t, n)
          ;(0, d.Z)(t, [])
          const g = (0, r.sO)(!1),
            b = (0, r.I4)(() => {
              g.current || (l?.(), (g.current = !0))
            }, [l]),
            { isBuffered: y, bufferingHandlers: v } = (0, i.Z)(!0, f),
            { onPlaying: w, ...I } = v
          ;(0, c.Z)(
            (e) => {
              let [t] = e
              void 0 !== t && b()
            },
            [y, b]
          )
          const C = (0, r.I4)(
            (e) => {
              p(), w(e), b()
            },
            [p, w, b]
          )
          return r.ZP.createElement('video', u({ ref: t, autoPlay: !0 }, h, I, { onPlaying: C }))
        })
      },
      62898: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(31664)
        const a = (e) => {
          let { containerId: t, className: n, children: a } = e
          const s = (0, r.sO)()
          return (
            s.current || (s.current = document.createElement('div')),
            (0, r.bt)(() => {
              const e = document.querySelector(t || '#portals')
              if (!e) return
              const r = s.current
              return (
                n && r.classList.add(n),
                e.appendChild(r),
                () => {
                  o.Z.render(void 0, r), e.removeChild(r)
                }
              )
            }, [n, t]),
            o.Z.render(a, s.current)
          )
        }
      },
      68512: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(69118)
        const a = (0, r.X$)(() => {
          const [e, t] = (0, r.eJ)([]),
            n = (0, r.Ye)(
              () =>
                (0, o.Ds)(
                  () => {
                    t([])
                  },
                  700,
                  !1
                ),
              []
            ),
            a = (0, r.I4)(
              (r) => {
                if (0 !== r.button) return
                const o = r.currentTarget,
                  a = o.getBoundingClientRect(),
                  s = o.offsetWidth / 2
                t([...e, { x: r.clientX - a.x - s / 2, y: r.clientY - a.y - s / 2, size: s }]),
                  requestAnimationFrame(() => {
                    n()
                  })
              },
              [e, n]
            )
          return r.ZP.createElement(
            'div',
            { className: 'ripple-container', onMouseDown: a },
            e.map((e) => {
              let { x: t, y: n, size: o } = e
              return r.ZP.createElement('span', {
                style: `left: ${t}px; top: ${n}px; width: ${o}px; height: ${o}px;`,
              })
            })
          )
        })
      },
      49204: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(46752)
        const a = (e) => {
          let { color: t = 'blue', backgroundColor: n, className: a } = e
          return r.ZP.createElement(
            'div',
            { className: (0, o.Z)('Spinner', a, t, n && 'with-background', n && `bg-${n}`) },
            r.ZP.createElement('div', null)
          )
        }
      },
      2255: (e, t, n) => {
        n.d(t, { Z: () => h })
        var r = n(60748),
          o = n(33555),
          a = n(83716),
          s = n(46752),
          d = n(82972),
          i = n(1279),
          c = n(65326),
          u = n(87204),
          l = n(18674)
        const f = 'Transition__slide--active',
          h = (e) => {
            let {
              ref: t,
              activeKey: n,
              name: h,
              direction: m = 'auto',
              renderCount: p,
              shouldRestoreHeight: g,
              shouldCleanup: b,
              cleanupExceptionKey: y,
              id: v,
              className: w,
              onStart: I,
              onStop: C,
              children: S,
            } = e
            const { animationLevel: E } = (0, o.Rd)().settings.byKey,
              P = (0, r.sO)()
            let A = (0, r.sO)(null)
            t && (A = t)
            const k = (0, r.sO)({}),
              M = (0, u.Z)(n),
              T = (0, c.Z)(),
              N = void 0 !== M && n !== M
            !p && N && (k.current = { [M]: k.current[M] }),
              (k.current[n] = S),
              (0, r.bt)(() => {
                function e() {
                  if (!b) return
                  const e = void 0 !== y ? k.current[y] : void 0
                  ;(k.current = e ? { [y]: e } : {}), T()
                }
                const t = A.current,
                  r = t.children
                if (1 === r.length && !N)
                  return (
                    h.startsWith('slide-optimized') &&
                      ((r[0].style.transition = 'none'),
                      (r[0].style.transform = 'translate3d(0, 0, 0)')),
                    void r[0].classList.add(f)
                  )
                const o = Array.from(t.childNodes)
                if (!N || !o.length) return
                P.current = n
                const s = -1 === m || ('auto' === m && M > n) || ('inverse' === m && M < n),
                  c = Object.keys(k.current).map(Number),
                  u = p ? M : c.indexOf(M),
                  v = p ? n : c.indexOf(n)
                if ('slide-optimized' === h || 'slide-optimized-rtl' === h)
                  return void (function (e, t, n, r, o, s, c, u, h, m, p, g) {
                    if (!g || !p) return
                    if (e === a.oBh)
                      return (
                        (g.style.transition = 'none'),
                        (g.style.transform = ''),
                        g.classList.remove(f),
                        (p.style.transition = 'none'),
                        (p.style.transform = 'translate3d(0, 0, 0)'),
                        p.classList.add(f),
                        void r()
                      )
                    'slide-optimized-rtl' === t && (n = !n)
                    const b = (0, l.YW)()
                    requestAnimationFrame(() => {
                      h?.(),
                        (g.style.transition = 'none'),
                        (g.style.transform = 'translate3d(0, 0, 0)'),
                        (p.style.transition = 'none'),
                        (p.style.transform = `translate3d(${n ? '-' : ''}100%, 0, 0)`),
                        (0, d.Z)(p),
                        (g.style.transition = ''),
                        (g.style.transform = `translate3d(${n ? '' : '-'}100%, 0, 0)`),
                        (p.style.transition = ''),
                        (p.style.transform = 'translate3d(0, 0, 0)'),
                        g.classList.remove(f),
                        p.classList.add(f),
                        (0, i.L)(g, () => {
                          o === s.current &&
                            ((g.style.transition = 'none'),
                            (g.style.transform = ''),
                            u &&
                              ((p.style.height = 'auto'), (c.style.height = `${p.clientHeight}px`)),
                            m?.(),
                            b(),
                            r())
                        })
                    })
                  })(E, h, s, e, n, P, t, g, I, C, o[v], o[u])
                if (
                  (t.classList.remove('animating'),
                  t.classList.toggle('backwards', s),
                  'none' === h || E === a.oBh)
                )
                  return (
                    o.forEach((e, t) => {
                      e instanceof HTMLElement &&
                        (e.classList.remove('from', 'through', 'to'),
                        e.classList.toggle(f, t === v))
                    }),
                    void e()
                  )
                o.forEach((e, t) => {
                  e instanceof HTMLElement &&
                    (e.classList.remove(f),
                    e.classList.toggle('from', t === u),
                    e.classList.toggle('through', (t > u && t < v) || (t < u && t > v)),
                    e.classList.toggle('to', t === v))
                })
                const w = (0, l.YW)()
                requestAnimationFrame(() => {
                  function r() {
                    requestAnimationFrame(() => {
                      if (n === P.current) {
                        if (
                          (t.classList.remove('animating', 'backwards'),
                          o.forEach((e, t) => {
                            e instanceof HTMLElement &&
                              (e.classList.remove('from', 'through', 'to'),
                              e.classList.toggle(f, t === v))
                          }),
                          g)
                        ) {
                          const e = t.querySelector(`.${f}`)
                          e && ((e.style.height = 'auto'), (t.style.height = `${e.clientHeight}px`))
                        }
                        C?.(), w(), e()
                      }
                    })
                  }
                  t.classList.add('animating'), I?.()
                  const a = 'mv-slide' === h ? o[v]?.firstChild : 'reveal' === h && s ? o[u] : o[v]
                  a ? (0, i.f)(a, r, void 0, 1e3) : r()
                })
              }, [n, M, N, m, h, I, C, p, g, b, y, E, T]),
              (0, r.bt)(() => {
                if (g) {
                  const e = A.current,
                    t = e.querySelector(`.${f}`) || e.querySelector('.from'),
                    n = t?.clientHeight
                  if (!n) return
                  ;(t.style.height = 'auto'),
                    (e.style.height = `${n}px`),
                    (e.style.flexBasis = `${n}px`)
                }
              }, [g, S])
            const L = k.current,
              Z = Object.keys(p ? new Array(p).fill(void 0) : L)
                .map(Number)
                .map((e) => {
                  const t = L[e]
                  if (t)
                    return r.ZP.createElement(
                      'div',
                      { key: e, teactOrderKey: e },
                      'function' == typeof t ? t(e === n, e === M, n) : t
                    )
                })
            return r.ZP.createElement(
              'div',
              { ref: A, id: v, className: (0, s.Z)('Transition', w, h), teactFastList: !p },
              Z
            )
          }
      },
      83716: (e, t, n) => {
        n.d(t, {
          $OQ: () => Ht,
          $RH: () => Fe,
          ARG: () => le,
          BRs: () => ut,
          Bge: () => Gt,
          BtI: () => X,
          C1M: () => Q,
          CXA: () => ie,
          Cgt: () => u,
          CyD: () => A,
          D$f: () => Et,
          DC_: () => ze,
          DUi: () => Ut,
          EGK: () => $t,
          ENB: () => H,
          Edp: () => be,
          F9z: () => Bt,
          FDD: () => _t,
          FM6: () => Pt,
          FSu: () => Mt,
          FVh: () => Dt,
          Hkl: () => z,
          Itv: () => Jt,
          J0S: () => oe,
          JiC: () => o,
          K2q: () => Xe,
          K7x: () => xe,
          L5X: () => st,
          LBg: () => Rt,
          LlA: () => Zt,
          MPN: () => Ne,
          MW8: () => ft,
          Mwe: () => Ge,
          NUd: () => B,
          NfV: () => xt,
          Ngd: () => bt,
          NjN: () => He,
          NuY: () => c,
          Ov0: () => W,
          OxA: () => Kt,
          PMB: () => rt,
          PT8: () => Le,
          PZg: () => Ft,
          QU1: () => Ce,
          Qao: () => Ve,
          QxZ: () => ne,
          R2F: () => pe,
          RBO: () => j,
          Rk9: () => E,
          Ro: () => en,
          SC4: () => ee,
          SGw: () => M,
          SaG: () => h,
          Tih: () => m,
          Tjg: () => l,
          UhJ: () => I,
          V$q: () => _e,
          V61: () => a,
          VC4: () => St,
          VEm: () => ye,
          Vk: () => q,
          Vvx: () => Xt,
          Vxl: () => y,
          WSp: () => jt,
          WfZ: () => Lt,
          XM3: () => K,
          Y7U: () => qe,
          YQ0: () => x,
          Yan: () => gt,
          ZTn: () => i,
          Zkg: () => lt,
          _mX: () => Ee,
          aCB: () => tn,
          avG: () => _,
          awM: () => Ot,
          b6b: () => ue,
          bKs: () => Be,
          bMi: () => et,
          b_O: () => b,
          be_: () => Ie,
          byK: () => Z,
          ckE: () => Oe,
          dII: () => Ct,
          dWG: () => ct,
          e74: () => It,
          eAU: () => g,
          eMD: () => d,
          eXY: () => We,
          eev: () => L,
          fK3: () => Re,
          foQ: () => N,
          g$l: () => kt,
          gJR: () => S,
          ga_: () => Yt,
          gdz: () => nn,
          gnl: () => we,
          hT6: () => F,
          iCi: () => r,
          j7i: () => P,
          jL5: () => Tt,
          jT7: () => Se,
          jVS: () => ot,
          kUR: () => pt,
          ka7: () => it,
          ksF: () => Pe,
          kuM: () => tt,
          l35: () => ke,
          lF$: () => T,
          lHp: () => Ye,
          lOz: () => C,
          lWA: () => k,
          loe: () => D,
          mUA: () => zt,
          moH: () => Qe,
          mok: () => J,
          mwi: () => re,
          mzL: () => se,
          mzl: () => Ze,
          nYf: () => ge,
          oBh: () => ae,
          oDu: () => $,
          oGt: () => vt,
          oX1: () => v,
          o_S: () => he,
          ouc: () => p,
          p3h: () => qt,
          pJM: () => Qt,
          pRL: () => mt,
          pnA: () => G,
          prK: () => rn,
          qUX: () => Y,
          qpg: () => $e,
          rOO: () => Te,
          rSj: () => U,
          r_R: () => fe,
          s11: () => yt,
          s22: () => ve,
          s38: () => dt,
          sRA: () => Wt,
          sdb: () => w,
          sgm: () => Ae,
          sux: () => me,
          t4X: () => Vt,
          t8f: () => ht,
          t_F: () => V,
          tuy: () => R,
          uWu: () => At,
          u_N: () => Me,
          uaz: () => Ke,
          ulW: () => f,
          ulj: () => te,
          w7O: () => je,
          wGh: () => wt,
          xHY: () => s,
          xS7: () => ce,
          xnK: () => De,
          y3O: () => at,
          yK2: () => Je,
          z7m: () => Ue,
          zHP: () => Nt,
          zqK: () => nt,
          zy8: () => de,
        })
        const r = 'Teamgram WebZ',
          o = '1.60.6',
          a = 1701945888918,
          s = 'web.teamgram.net',
          d = !1,
          i = !1,
          c = !1,
          u = !1,
          l = !1,
          f = 'https://www2.teamgram.net/WebZ-Beta-04-01',
          h = 'Shoot!\nSomething went wrong, please see the error details in Dev Tools Console.',
          m = 'Teamgram',
          p = '[Inactive]',
          g = !1,
          b = 'user_auth',
          y = 'GramJs:sessionId',
          v = 'tt-passcode',
          w = !1,
          I = 'tt-global-state',
          C = 500,
          S = 200,
          E = 30,
          P = 150,
          A = !1,
          k = 'tt-media',
          M = 'tt-media-avatars',
          T = 'tt-media-progressive',
          N = 'tt-custom-bg',
          L = 'tt-lang-packs-v17',
          Z = [1, 5, 10, 50, 100, 500],
          R = 'tt-global',
          _ = 'tt-establish',
          B = 'tt-multitab',
          O = 'undefined' != typeof window && window.innerHeight >= 900,
          D = 1,
          F = O ? 60 : 40,
          x = 2 * F,
          j = 36,
          U = 72,
          $ = 65,
          V = O ? 30 : 25,
          W = 100,
          H = 42,
          G = 42,
          z = 20,
          K = 5,
          q = 30,
          J = 200,
          Y = 500,
          X = 600,
          Q = 20,
          ee = 500,
          te = 20,
          ne = 1,
          re = 1,
          oe = 1200,
          ae = 0,
          se = 1,
          de = 2,
          ie = de,
          ce = 16,
          ue = 17,
          le = 15,
          fe = 1e4,
          he = 3e3,
          me = 1e7,
          pe = 'editable-message-text',
          ge = 'editable-message-text-modal',
          be = `.messages-layout .Transition__slide--active #${pe}, .messages-layout .Transition > .to #${pe}`,
          ye = `#${ge}`,
          ve = 'data-has-custom-appendix',
          we = 'message-content',
          Ie = '.message-content',
          Ce = 1440,
          Se = 1150,
          Ee = 1275,
          Pe = 925,
          Ae = 1340,
          ke = 600,
          Me = 950,
          Te = 450,
          Ne = 5e9,
          Le = 2 ** 31 - 1,
          Ze = '0',
          Re = 100,
          _e = 1500,
          Be = 250,
          Oe = 600,
          De = 500,
          Fe =
            (Math.round((Be + Oe) / 2),
            new Set([
              'newMessage',
              'newScheduledMessage',
              'deleteMessages',
              'deleteScheduledMessages',
              'deleteHistory',
            ]),
            200),
          xe = 13,
          je = 11,
          Ue = 160,
          $e = 120,
          Ve = 64,
          We = 40,
          He = 32,
          Ge = 48,
          ze = 32,
          Ke = 20,
          qe = 64,
          Je = 64,
          Ye = 40,
          Xe = 160,
          Qe = 160,
          et = 140,
          tt = 100,
          nt = 100,
          rt = 140,
          ot = 140,
          at = 2,
          st = 7,
          dt = 'recent',
          it = 'favorite',
          ct = 'chatStickers',
          ut = 'premium',
          lt = 'topic-default-icon',
          ft = 'status-default-icon',
          ht = /<img[^>]+alt="([^"]+)"(?![^>]*data-document-id)[^>]*>/gm,
          mt = 'en',
          pt = 200,
          gt = 450,
          bt = 'video/quicktime',
          yt = 'image/gif',
          vt = new Set(['image/png', 'image/jpeg', yt]),
          wt = new Set(['video/mp4']),
          It = new Set([
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
          Ct = new Set([...vt, ...wt]),
          St = 'The message is not supported on this version of Teamgram.',
          Et = [
            'en',
            'ar',
            'be',
            'ca',
            'zh',
            'nl',
            'fr',
            'de',
            'id',
            'it',
            'ja',
            'ko',
            'pl',
            'pt',
            'ru',
            'es',
            'uk',
            'af',
            'sq',
            'am',
            'hy',
            'az',
            'eu',
            'bn',
            'bs',
            'bg',
            'ceb',
            'zh-CN',
            'zh-TW',
            'co',
            'hr',
            'cs',
            'da',
            'eo',
            'et',
            'fi',
            'fy',
            'gl',
            'ka',
            'el',
            'gu',
            'ht',
            'ha',
            'haw',
            'he',
            'iw',
            'hi',
            'hmn',
            'hu',
            'is',
            'ig',
            'ga',
            'jv',
            'kn',
            'kk',
            'km',
            'rw',
            'ku',
            'ky',
            'lo',
            'la',
            'lv',
            'lt',
            'lb',
            'mk',
            'mg',
            'ms',
            'ml',
            'mt',
            'mi',
            'mr',
            'mn',
            'my',
            'ne',
            'no',
            'ny',
            'or',
            'ps',
            'fa',
            'pa',
            'ro',
            'sm',
            'gd',
            'sr',
            'st',
            'sn',
            'sd',
            'si',
            'sk',
            'sl',
            'so',
            'su',
            'sw',
            'sv',
            'tl',
            'tg',
            'ta',
            'tt',
            'te',
            'th',
            'tr',
            'tk',
            'ur',
            'ug',
            'uz',
            'vi',
            'cy',
            'xh',
            'yi',
            'yo',
            'zu',
          ],
          Pt =
            '((ftp|https?):\\/\\/)?((www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,63})\\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)',
          At = '(@[\\w\\d_-]+)',
          kt = /^tg2:(\/\/)?/i,
          Mt = /^(https?:\/\/)?([-a-zA-Z0-9@:%_+~#=]{1,32}\.)?teamgram\.me/i,
          Tt = /^(https?:\/\/)?teamgram\.net\//i,
          Nt = 'https://teamgram.me/',
          Lt = 'USERNAME_PURCHASE_AVAILABLE',
          Zt = 'auction',
          Rt = new Set(['teamgram.me', 'web.teamgram.me', 'k.teamgram.me', 'z.teamgram.me']),
          _t = new Set([
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
          ]),
          Bt = ['bots', 'channels', 'chats', 'users'],
          Ot = '777000',
          Dt = '1271266957',
          Ft = '7173162320003080',
          xt = 0,
          jt = 1,
          Ut = 10,
          $t = 5,
          Vt = 2147483646,
          Wt = 'en',
          Ht = 'android',
          Gt = ['android', 'ios', 'tdesktop', 'macos'],
          zt = 'https://www2.teamgram.net/?tag_ids=41&sort=time',
          Kt = 1,
          qt = '#99BA92',
          Jt = '#0F0F0F',
          Yt = '#4A8E3A8C',
          Xt = '#0A0A0A8C',
          Qt = 524288,
          en = 100,
          tn = 100 * en,
          nn = !0,
          rn = {
            uploadMaxFileparts: [4e3, 8e3],
            stickersFaved: [5, 10],
            savedGifs: [200, 400],
            dialogFiltersChats: [100, 200],
            dialogFilters: [10, 20],
            dialogFolderPinned: [5, 10],
            captionLength: [1024, 2048],
            channels: [500, 1e3],
            channelsPublic: [10, 20],
            aboutLength: [70, 140],
          }
      },
      65456: (e, t, n) => {
        var r = n(33555),
          o = n(71226),
          a = n(83716),
          s = n(863),
          d = n(28406),
          i = n(49524),
          c = n(17358),
          u = n(50214),
          l = n(706),
          f = n(25260),
          h = n(95281),
          m = n(5872),
          p = n(15780),
          g = n(65054),
          b = n(60782)
        ;(0, r.iw)('initApi', async (e, t) => {
          a.Cgt || (await (0, u.Qw)(), (0, u.f3)())
          const n = (0, p.dx)()
          ;(0, o.g8)(t.apiUpdate, {
            userAgent: navigator.userAgent,
            platform: s.Lt,
            sessionData: (0, u.K8)(),
            isTest: window.location.search.includes('test') || '1' === n?.tgWebAuthTest,
            isMovSupported: s.pA,
            isWebmSupported: s.Hh,
            maxBufferSize: s.l0,
            webAuthToken: n?.tgWebAuthToken,
            dcId: n?.tgWebAuthDcId ? Number(n?.tgWebAuthDcId) : void 0,
            mockScenario: n?.mockScenario,
          })
        }),
          (0, r.iw)('setAuthPhoneNumber', (e, t, n) => {
            const { phoneNumber: r } = n
            return (
              (0, o.t9)('provideAuthPhoneNumber', r.replace(/[^\d]/g, '')),
              { ...e, authIsLoading: !0, authError: void 0 }
            )
          }),
          (0, r.iw)('setAuthCode', (e, t, n) => {
            const { code: r } = n
            return (0, o.t9)('provideAuthCode', r), { ...e, authIsLoading: !0, authError: void 0 }
          }),
          (0, r.iw)('setAuthPassword', (e, t, n) => {
            const { password: r } = n
            return (
              (0, o.t9)('provideAuthPassword', r), { ...e, authIsLoading: !0, authError: void 0 }
            )
          }),
          (0, r.iw)('uploadProfilePhoto', async (e, t, n) => {
            const { file: a, isFallback: s, isVideo: d, videoTs: i } = n,
              c = await (0, o.t9)('uploadProfilePhoto', a, s, d, i)
            c &&
              ((e = (0, r.Rd)()),
              (e = (0, f.Sh)(e, (0, b.ee)(c.users, 'id'))),
              (0, r.R3)(e),
              t.loadFullUser({ userId: e.currentUserId }))
          }),
          (0, r.iw)('signUp', (e, t, n) => {
            const { firstName: r, lastName: a } = n
            return (
              (0, o.t9)('provideAuthRegistration', { firstName: r, lastName: a }),
              { ...e, authIsLoading: !0, authError: void 0 }
            )
          }),
          (0, r.iw)(
            'returnToAuthPhoneNumber',
            (e) => ((0, o.t9)('restartAuth'), { ...e, authError: void 0 })
          ),
          (0, r.iw)(
            'goToAuthQrCode',
            (e) => (
              (0, o.t9)('restartAuthWithQr'), { ...e, authIsLoadingQrCode: !0, authError: void 0 }
            )
          ),
          (0, r.iw)('saveSession', (e, t, n) => {
            if (e.passcode.isScreenLocked) return
            const { sessionData: r } = n
            r ? (0, u.wX)(r, e.currentUserId) : (0, u.jv)()
          }),
          (0, r.iw)('signOut', async (e, t, n) => {
            'hangUp' in t && t.hangUp({ tabId: (0, g._w)() }),
              'leaveGroupCall' in t && t.leaveGroupCall({ tabId: (0, g._w)() })
            try {
              ;(0, p.DQ)(), await (0, d.r1)(), await (0, o.t9)('destroy'), await (0, l.IT)(!1)
            } catch (e) {}
            t.reset(), n?.forceInitApi && t.initApi()
          }),
          (0, r.iw)('reset', (e, t) => {
            ;(0, u.jv)(),
              (0, h.C8)(),
              i.clear(a.lWA),
              i.clear(a.SGw),
              i.clear(a.lF$),
              i.clear(a.foQ)
            const n = a.eev.replace(/\d+$/, ''),
              r = (a.eev.match(/\d+$/) || [0])[0]
            for (let e = 0; e < r; e++) i.clear(`${n}${0 === e ? '' : e}`)
            ;(0, u.f3)(),
              (0, c.w)(0),
              t.initShared({ force: !0 }),
              Object.values(e.byTabId).forEach((e) => {
                let { id: n, isMasterTab: r } = e
                t.init({ tabId: n, isMasterTab: r })
              })
          }),
          (0, r.iw)('disconnect', () => {
            ;(0, o.$9)('disconnect')
          }),
          (0, r.iw)('destroyConnection', () => {
            ;(0, o.$9)('destroy', !0, !0)
          }),
          (0, r.iw)('loadNearestCountry', async (e) => {
            if ('connectionStateReady' !== e.connectionState) return
            const t = await (0, o.t9)('fetchNearestCountry')
            ;(e = (0, r.Rd)()), (e = { ...e, authNearestCountry: t }), (0, r.R3)(e)
          }),
          (0, r.iw)('setDeviceToken', (e, t, n) => ({
            ...e,
            push: { deviceToken: n, subscribedAt: Date.now() },
          })),
          (0, r.iw)('deleteDeviceToken', (e) => ({ ...e, push: void 0 })),
          (0, r.iw)('lockScreen', async (e) => {
            const t = JSON.stringify({ ...(0, u.K8)(), userId: e.currentUserId }),
              n = await (0, m.Uf)(e)
            await (0, h.H4)(t, n),
              (0, h.J9)(),
              (0, u.jv)(),
              (0, c.w)(0),
              (e = (0, r.Rd)()),
              (e = (0, f.vu)(e, { isScreenLocked: !0, invalidAttemptsCount: 0 })),
              (0, r.R3)(e),
              setTimeout(() => {
                ;(e = (0, r.Rd)()), (e = (0, f.ZI)(e)), (0, r.R3)(e)
              }, a.$RH)
            try {
              await (0, d.r1)(), await (0, o.t9)('destroy', !0)
            } catch (e) {}
          })
      },
      55282: (e, t, n) => {
        var r = n(33555),
          o = n(91713),
          a = n(83716),
          s = n(71226),
          d = n(60782),
          i = n(28406),
          c = n(50711)
        const u = new Map()
        function l(e, t) {
          clearTimeout(u.get(e))
          const n = window.setTimeout(() => {
            ;(0, r.Sv)()[e]()
          }, t)
          u.set(e, n)
        }
        var f = n(82267),
          h = n(11192),
          m = n(25260),
          p = n(56112),
          g = n(44271),
          b = n(65054)
        function y(e, t) {
          let { visibility: n, allowedIds: r, deniedIds: o } = t
          const {
              users: { byId: a },
              chats: { byId: s },
            } = e,
            d = { visibility: n }
          let i, c
          const u = (e) => {
              if (!(0, p.YC)(e)) return
              const { id: t, accessHash: n } = a[e] || {}
              return t ? { id: t, accessHash: n } : void 0
            },
            l = (e) => {
              if ((0, p.YC)(e)) return
              const t = s[e]
              return t ? { id: t.id } : void 0
            }
          return (
            ('contacts' !== n && 'nobody' !== n) ||
              ((i = r.map(u).filter(Boolean)),
              (c = r.map(l).filter(Boolean)),
              i.length > 0 && (d.allowedUsers = i),
              c.length > 0 && (d.allowedChats = c)),
            ('everybody' !== n && 'contacts' !== n) ||
              ((i = o.map(u).filter(Boolean)),
              (c = o.map(l).filter(Boolean)),
              i.length > 0 && (d.blockedUsers = i),
              c.length > 0 && (d.blockedChats = c)),
            d
          )
        }
        ;(0, r.iw)('updateProfile', async (e, t, n) => {
          const {
              photo: a,
              firstName: i,
              lastName: c,
              bio: u,
              username: l,
              tabId: f = (0, b._w)(),
            } = n,
            { currentUserId: p } = e
          if (p) {
            if (
              ((e = (0, g.i)(e, { profileEdit: { progress: o.rN.InProgress } }, f)),
              (0, r.R3)(e),
              a)
            ) {
              const n = await (0, s.t9)('uploadProfilePhoto', a)
              n &&
                ((e = (0, r.Rd)()),
                (e = (0, m.Sh)(e, (0, d.ee)(n.users, 'id'))),
                (0, r.R3)(e),
                t.loadProfilePhotos({ profileId: p }))
            }
            if (
              (i || c || u) &&
              (await (0, s.t9)('updateProfile', { firstName: i, lastName: c, about: u }))
            ) {
              e = (0, r.Rd)()
              const t = p && (0, h.dy)(e, p)
              t &&
                ((e = (0, m.Nq)(e, t.id, {
                  firstName: i,
                  lastName: c,
                  fullInfo: { ...t.fullInfo, bio: u },
                })),
                (0, r.R3)(e))
            }
            if (void 0 !== l) {
              const t = await (0, s.t9)('updateUsername', l)
              e = (0, r.Rd)()
              const n = p && (0, h.dy)(e, p)
              if (t && n) {
                const t = n.usernames?.find((e) => e.isEditable),
                  o = t
                    ? n.usernames?.map((e) => (e.isEditable ? { ...e, username: l } : e))
                    : [{ username: l, isEditable: !0, isActive: !0 }, ...(n.usernames || [])]
                ;(e = (0, m.Nq)(e, p, { usernames: o })), (0, r.R3)(e)
              }
            }
            ;(e = (0, r.Rd)()),
              (e = (0, g.i)(e, { profileEdit: { progress: o.rN.Complete } }, f)),
              (0, r.R3)(e)
          }
        }),
          (0, r.iw)('updateProfilePhoto', async (e, t, n) => {
            const { photo: o, isFallback: a } = n,
              { currentUserId: i } = e
            if (!i) return
            const c = (0, h.Z1)(e, i)
            if (!c) return
            ;(e = (0, m.Nq)(e, i, {
              avatarHash: void 0,
              fullInfo: { ...c.fullInfo, profilePhoto: void 0 },
            })),
              (0, r.R3)(e)
            const u = await (0, s.t9)('updateProfilePhoto', o, a)
            if (!u) return
            const { photo: l, users: f } = u
            ;(e = (0, r.Rd)()),
              (e = (0, m.Sh)(e, (0, d.ee)(f, 'id'))),
              (e = (0, m.Nq)(e, i, {
                avatarHash: l.id,
                fullInfo: { ...c.fullInfo, profilePhoto: l },
              })),
              (0, r.R3)(e),
              t.loadFullUser({ userId: i }),
              t.loadProfilePhotos({ profileId: i })
          }),
          (0, r.iw)('deleteProfilePhoto', async (e, t, n) => {
            const { photo: o } = n,
              { currentUserId: a } = e
            if (!a) return
            const d = (0, h.Z1)(e, a)
            d &&
              (d.avatarHash === o.id &&
                ((e = (0, m.Nq)(e, a, {
                  avatarHash: void 0,
                  fullInfo: { ...d.fullInfo, profilePhoto: void 0 },
                })),
                (0, r.R3)(e)),
              (await (0, s.t9)('deleteProfilePhotos', [o])) &&
                (t.loadFullUser({ userId: a }), t.loadProfilePhotos({ profileId: a })))
          }),
          (0, r.iw)('checkUsername', async (e, t, n) => {
            const { username: a, tabId: d = (0, b._w)() } = n
            let i = (0, h.jU)(e, d)
            if (i.profileEdit && i.profileEdit.progress === o.rN.InProgress) return
            ;(e = (0, g.i)(
              e,
              {
                profileEdit: {
                  progress: i.profileEdit ? i.profileEdit.progress : o.rN.Idle,
                  checkedUsername: void 0,
                  isUsernameAvailable: void 0,
                  error: void 0,
                },
              },
              d
            )),
              (0, r.R3)(e)
            const { result: c, error: u } = await (0, s.t9)('checkUsername', a)
            ;(e = (0, r.Rd)()),
              (i = (0, h.jU)(e, d)),
              (e = (0, g.i)(
                e,
                {
                  profileEdit: {
                    ...i.profileEdit,
                    checkedUsername: a,
                    isUsernameAvailable: !0 === c,
                    error: u,
                  },
                },
                d
              )),
              (0, r.R3)(e)
          }),
          (0, r.iw)('loadWallpapers', async (e) => {
            const t = await (0, s.t9)('fetchWallpapers')
            t &&
              ((e = (0, r.Rd)()),
              (e = { ...e, settings: { ...e.settings, loadedWallpapers: t.wallpapers } }),
              (0, r.R3)(e))
          }),
          (0, r.iw)('uploadWallpaper', async (e, t, n) => {
            const a = n,
              d = URL.createObjectURL(a)
            ;(e = {
              ...e,
              settings: {
                ...e.settings,
                loadedWallpapers: [
                  {
                    slug: o.mp,
                    document: { fileName: '', size: a.size, mimeType: a.type, previewBlobUrl: d },
                  },
                  ...(e.settings.loadedWallpapers || []),
                ],
              },
            }),
              (0, r.R3)(e)
            const i = await (0, s.t9)('uploadWallpaper', a)
            if (!i) return
            const { wallpaper: c } = i
            if (!(e = (0, r.Rd)()).settings.loadedWallpapers) return
            const u = e.settings.loadedWallpapers[0]
            if (!u || u.slug !== o.mp) return
            const l = { ...c, document: { ...c.document, previewBlobUrl: d } }
            ;(e = {
              ...e,
              settings: {
                ...e.settings,
                loadedWallpapers: [l, ...e.settings.loadedWallpapers.slice(1)],
              },
            }),
              (0, r.R3)(e)
          }),
          (0, r.iw)('loadBlockedContacts', async (e) => {
            const t = await (0, s.t9)('fetchBlockedContacts')
            t &&
              ((e = (0, r.Rd)()),
              t.users?.length && (e = (0, m.Sh)(e, (0, d.ee)(t.users, 'id'))),
              t.chats?.length && (e = (0, m.GL)(e, (0, d.ee)(t.chats, 'id'))),
              (e = {
                ...e,
                blocked: {
                  ...e.blocked,
                  ids: [...(e.blocked.ids || []), ...t.blockedIds],
                  totalCount: t.totalCount,
                },
              }),
              (0, r.R3)(e))
          }),
          (0, r.iw)('blockContact', async (e, t, n) => {
            const { contactId: o, accessHash: a } = n
            ;(await (0, s.t9)('blockContact', o, a)) &&
              ((e = (0, r.Rd)()), (e = (0, m.O4)(e, o)), (0, r.R3)(e))
          }),
          (0, r.iw)('unblockContact', async (e, t, n) => {
            const { contactId: o } = n
            let a
            if ((0, p.YC)(o)) {
              const t = (0, h.dy)(e, o)
              if (!t) return
              a = t.accessHash
            }
            ;(await (0, s.t9)('unblockContact', o, a)) &&
              ((e = (0, r.Rd)()), (e = (0, m.rB)(e, o)), (0, r.R3)(e))
          }),
          (0, r.iw)('loadNotificationExceptions', async (e) => {
            const t = await (0, s.t9)('fetchNotificationExceptions')
            t && ((e = (0, r.Rd)()), (e = (0, m.aJ)(e, t)), (0, r.R3)(e))
          }),
          (0, r.iw)('loadNotificationSettings', async (e) => {
            const t = await (0, s.t9)('fetchNotificationSettings')
            t && ((e = (0, r.Rd)()), (e = (0, m.BI)(e, t)), (0, r.R3)(e))
          }),
          (0, r.iw)('updateNotificationSettings', async (e, t, n) => {
            const { peerType: o, isSilent: a, shouldShowPreviews: d } = n
            ;(await (0, s.t9)('updateNotificationSettings', o, {
              isSilent: a,
              shouldShowPreviews: d,
            })) && ((e = (0, r.Rd)()), (e = (0, m.HN)(e, o, a, d)), (0, r.R3)(e))
          }),
          (0, r.iw)('updateWebNotificationSettings', (e, t, n) => {
            ;(e = (0, m.BI)(e, n)), (0, r.R3)(e)
            const { hasPushNotifications: o, hasWebNotifications: a } = e.settings.byKey
            a && o ? (0, i.Ld)() : (0, i.r1)()
          }),
          (0, r.iw)('updateContactSignUpNotification', async (e, t, n) => {
            const { isSilent: o } = n
            ;(await (0, s.t9)('updateContactSignUpNotification', o)) &&
              ((e = (0, r.Rd)()),
              (e = (0, m.BI)(e, { hasContactJoinedNotifications: !o })),
              (0, r.R3)(e))
          }),
          (0, r.iw)('loadLanguages', async (e) => {
            const t = await (0, s.t9)('fetchLanguages')
            t && ((e = (0, r.Rd)()), (e = (0, m.BI)(e, { languages: t })), (0, r.R3)(e))
          }),
          (0, r.iw)('loadPrivacySettings', async (e) => {
            const t = await Promise.all([
              (0, s.t9)('fetchPrivacySettings', 'phoneNumber'),
              (0, s.t9)('fetchPrivacySettings', 'lastSeen'),
              (0, s.t9)('fetchPrivacySettings', 'profilePhoto'),
              (0, s.t9)('fetchPrivacySettings', 'forwards'),
              (0, s.t9)('fetchPrivacySettings', 'chatInvite'),
              (0, s.t9)('fetchPrivacySettings', 'phoneCall'),
              (0, s.t9)('fetchPrivacySettings', 'phoneP2P'),
              (0, s.t9)('fetchPrivacySettings', 'voiceMessages'),
            ])
            if (t.some((e) => void 0 === e)) return
            const [n, o, a, i, c, u, l, f] = t,
              h = t.flatMap((e) => e.users)
            ;(e = (0, r.Rd)()),
              (e = (0, m.Sh)(e, (0, d.ee)(h, 'id'))),
              (e = {
                ...e,
                settings: {
                  ...e.settings,
                  privacy: {
                    ...e.settings.privacy,
                    phoneNumber: n.rules,
                    lastSeen: o.rules,
                    profilePhoto: a.rules,
                    forwards: i.rules,
                    chatInvite: c.rules,
                    phoneCall: u.rules,
                    phoneP2P: l.rules,
                    voiceMessages: f.rules,
                  },
                },
              }),
              (0, r.R3)(e)
          }),
          (0, r.iw)('setPrivacyVisibility', async (e, t, n) => {
            const { privacyKey: o, visibility: a } = n,
              {
                privacy: { [o]: i },
              } = e.settings
            if (!i) return
            const c = y(e, {
                visibility: a,
                allowedIds: [...i.allowUserIds, ...i.allowChatIds],
                deniedIds: [...i.blockUserIds, ...i.blockChatIds],
              }),
              u = await (0, s.t9)('setPrivacySettings', o, c)
            u &&
              ((e = (0, r.Rd)()),
              (e = (0, m.Sh)(e, (0, d.ee)(u.users, 'id'))),
              (e = {
                ...e,
                settings: { ...e.settings, privacy: { ...e.settings.privacy, [o]: u.rules } },
              }),
              (0, r.R3)(e))
          }),
          (0, r.iw)('setPrivacySettings', async (e, t, n) => {
            const { privacyKey: o, isAllowList: a, contactsIds: i } = n,
              {
                privacy: { [o]: c },
              } = e.settings
            if (!c) return
            const u = y(e, {
                visibility: c.visibility,
                allowedIds: a ? i : [...c.allowUserIds, ...c.allowChatIds],
                deniedIds: a ? [...c.blockUserIds, ...c.blockChatIds] : i,
              }),
              l = await (0, s.t9)('setPrivacySettings', o, u)
            l &&
              ((e = (0, r.Rd)()),
              (e = (0, m.Sh)(e, (0, d.ee)(l.users, 'id'))),
              (e = {
                ...e,
                settings: { ...e.settings, privacy: { ...e.settings.privacy, [o]: l.rules } },
              }),
              (0, r.R3)(e))
          }),
          (0, r.iw)('updateIsOnline', (e, t, n) => {
            ;(0, s.t9)('updateIsOnline', n)
          }),
          (0, r.iw)('loadContentSettings', async (e) => {
            const t = await (0, s.t9)('fetchContentSettings')
            t && ((e = (0, r.Rd)()), (e = (0, m.BI)(e, t)), (0, r.R3)(e))
          }),
          (0, r.iw)('updateContentSettings', async (e, t, n) => {
            ;(e = (0, m.BI)(e, { isSensitiveEnabled: n })),
              (0, r.R3)(e),
              (await (0, s.t9)('updateContentSettings', n)) ||
                ((e = (0, r.Rd)()), (e = (0, m.BI)(e, { isSensitiveEnabled: !n })), (0, r.R3)(e))
          }),
          (0, r.iw)('loadCountryList', async (e, t, n) => {
            let { langCode: o } = n
            o || (o = e.settings.byKey.language)
            const a = await (0, s.t9)('fetchCountryList', { langCode: o })
            a && ((e = (0, r.Rd)()), (e = { ...e, countryList: a }), (0, r.R3)(e))
          }),
          (0, r.iw)('ensureTimeFormat', async (e, t, n) => {
            const { tabId: r = (0, b._w)() } = n || {}
            if (e.authNearestCountry) {
              const n = a.FDD.has(e.authNearestCountry.toUpperCase()) ? '12h' : '24h'
              t.setSettingOption({ timeFormat: n, tabId: r }), (0, c.qf)(n)
            }
            if (e.settings.byKey.wasTimeFormatSetManually) return
            const o = await (0, s.t9)('fetchNearestCountry')
            if (o) {
              const e = a.FDD.has(o.toUpperCase()) ? '12h' : '24h'
              t.setSettingOption({ timeFormat: e, tabId: r }), (0, c.qf)(e)
            }
          }),
          (0, r.iw)('loadAppConfig', async (e) => {
            const t = await (0, s.t9)('fetchAppConfig')
            t &&
              (l('loadAppConfig', a.sux),
              (e = (0, r.Rd)()),
              (e = { ...e, appConfig: t }),
              (0, r.R3)(e))
          }),
          (0, r.iw)('loadConfig', async (e) => {
            const t = await (0, s.t9)('fetchConfig')
            t &&
              ((e = (0, r.Rd)()),
              l('loadConfig', 1e3 * (t.expiresAt - (0, f.bp)())),
              (e = { ...e, config: t }),
              (0, r.R3)(e))
          }),
          (0, r.iw)('loadGlobalPrivacySettings', async (e) => {
            const t = await (0, s.t9)('fetchGlobalPrivacySettings')
            t &&
              ((e = (0, r.Rd)()),
              (e = (0, m.BI)(e, {
                shouldArchiveAndMuteNewNonContact: t.shouldArchiveAndMuteNewNonContact,
              })),
              (0, r.R3)(e))
          }),
          (0, r.iw)('updateGlobalPrivacySettings', async (e, t, n) => {
            const { shouldArchiveAndMuteNewNonContact: o } = n
            ;(e = (0, m.BI)(e, { shouldArchiveAndMuteNewNonContact: o })), (0, r.R3)(e)
            const a = await (0, s.t9)('updateGlobalPrivacySettings', {
              shouldArchiveAndMuteNewNonContact: o,
            })
            ;(e = (0, r.Rd)()),
              (e = (0, m.BI)(e, {
                shouldArchiveAndMuteNewNonContact: a ? a.shouldArchiveAndMuteNewNonContact : !o,
              })),
              (0, r.R3)(e)
          }),
          (0, r.iw)('toggleUsername', async (e, t, n) => {
            const { username: o, isActive: a } = n,
              { currentUserId: d } = e
            if (!d) return
            const i = (0, h.dy)(e, d)
            if (!i?.usernames) return
            const c = i.usernames.map((e) =>
              e.username !== o ? e : { ...e, isActive: a || void 0 }
            )
            ;(e = (0, m.Nq)(e, d, { usernames: c })),
              (0, r.R3)(e),
              (await (0, s.t9)('toggleUsername', { username: o, isActive: a })) ||
                t.loadFullUser({ userId: d })
          }),
          (0, r.iw)('toggleChatUsername', async (e, t, n) => {
            const { chatId: o, username: a, isActive: d, tabId: i = (0, b._w)() } = n,
              c = (0, h.Z1)(e, o)
            if (!c?.usernames) return
            const u = c.usernames.map((e) =>
              e.username !== a ? e : { ...e, isActive: d || void 0 }
            )
            ;(e = (0, m.a4)(e, o, { usernames: u })),
              (0, r.R3)(e),
              (await (0, s.t9)('toggleUsername', {
                chatId: c.id,
                accessHash: c.accessHash,
                username: a,
                isActive: d,
              })) || t.loadFullChat({ chatId: o, tabId: i })
          }),
          (0, r.iw)('sortUsernames', async (e, t, n) => {
            const { usernames: r } = n,
              { currentUserId: o } = e
            o &&
              ((await (0, s.t9)('reorderUsernames', { usernames: r })) || t.loadUser({ userId: o }))
          }),
          (0, r.iw)('sortChatUsernames', async (e, t, n) => {
            const { chatId: o, usernames: a } = n,
              d = (0, h.Z1)(e, o)
            if (!d) return
            const i = [...d.usernames],
              c = d.usernames.reduce(
                (e, t) => ((e[a.findIndex((e) => e === t.username)] = t), e),
                []
              )
            ;(e = (0, m.a4)(e, o, { usernames: c })),
              (0, r.R3)(e),
              (await (0, s.t9)('reorderUsernames', {
                chatId: d.id,
                accessHash: d.accessHash,
                usernames: a,
              })) || ((e = (0, r.Rd)()), (e = (0, m.a4)(e, o, { usernames: i })), (0, r.R3)(e))
          })
      },
      28304: (e, t, n) => {
        var r = n(33555),
          o = n(83716),
          a = n(28406),
          s = n(25260),
          d = n(50711),
          i = n(11192),
          c = n(706),
          u = n(91947),
          l = n(15780),
          f = n(65054),
          h = n(44271),
          m = n(82267)
        ;(0, r.iw)('apiUpdate', (e, t, n) => {
          switch (n['@type']) {
            case 'updateApiReady':
              !(function (e) {
                const { hasWebNotifications: t, hasPushNotifications: n } = (0, i.dZ)(e)
                t && n && (0, a.Ld)(), (0, d.m0)(e.settings.byKey.language)
              })(e)
              break
            case 'updateAuthorizationState':
              !(function (e, t) {
                const n = 'authorizationStateReady' === (e = (0, r.Rd)()).authState,
                  o = t.authorizationState
                switch (
                  ((e = { ...e, authState: o, authIsLoading: !1 }),
                  (0, r.R3)(e),
                  (e = (0, r.Rd)()),
                  o)
                ) {
                  case 'authorizationStateLoggingOut':
                    ;(0, c.IT)(!1), (e = { ...e, isLoggingOut: !0 }), (0, r.R3)(e)
                    break
                  case 'authorizationStateWaitCode':
                    ;(e = { ...e, authIsCodeViaApp: t.isCodeViaApp }), (0, r.R3)(e)
                    break
                  case 'authorizationStateWaitPassword':
                    ;(e = { ...e, authHint: t.hint }),
                      t.noReset && (e = { ...e, hasWebAuthTokenPasswordRequired: !0 }),
                      (0, r.R3)(e)
                    break
                  case 'authorizationStateWaitQrCode':
                    ;(e = { ...e, authIsLoadingQrCode: !1, authQrCode: t.qrCode }), (0, r.R3)(e)
                    break
                  case 'authorizationStateReady':
                    if (n) break
                    ;(0, c.IT)(!0),
                      (e = { ...e, isLoggingOut: !1 }),
                      Object.values(e.byTabId).forEach((t) => {
                        let { id: n } = t
                        e = (0, h.i)(e, { isInactive: !1 }, n)
                      }),
                      (0, r.R3)(e)
                }
              })(e, n)
              break
            case 'updateAuthorizationError':
              !(function (e, t) {
                ;(e = (0, r.Rd)()), (e = { ...e, authError: t.message }), (0, r.R3)(e)
              })(e, n)
              break
            case 'updateWebAuthTokenFailed':
              !(function (e) {
                ;(0, l.Yw)(),
                  (e = (0, r.Rd)()),
                  (e = { ...e, hasWebAuthTokenFailed: !0 }),
                  (0, r.R3)(e)
              })(e)
              break
            case 'updateConnectionState':
              !(function (e, t, n) {
                const { connectionState: o } = n
                e = (0, r.Rd)()
                const a = (0, i.jU)(e, (0, f._w)())
                'connectionStateReady' === o &&
                  a.isMasterTab &&
                  a.multitabNextAction &&
                  (t[a.multitabNextAction.action](a.multitabNextAction.payload),
                  t.clearMultitabNextAction({ tabId: a.id })),
                  o !== e.connectionState &&
                    ((e = { ...e, connectionState: o }),
                    (0, r.R3)(e),
                    'connectionStateBroken' === o && t.signOut({ forceInitApi: !0 }))
              })(e, t, n)
              break
            case 'updateSession':
              !(function (e, t, n) {
                const { sessionData: o } = n
                e = (0, r.Rd)()
                const { authRememberMe: a, authState: s } = e,
                  d = !o || !o.mainDcId
                a && 'authorizationStateReady' === s && !d && t.saveSession({ sessionData: o })
              })(e, t, n)
              break
            case 'updateServerTimeOffset':
              !(function (e) {
                ;(0, m.Y$)(e.serverTimeOffset)
              })(n)
              break
            case 'updateCurrentUser':
              !(function (e, t) {
                const { currentUser: n } = t
                ;(e = { ...(0, s.Nq)(e, n.id, n), currentUserId: n.id }),
                  (0, r.R3)(e),
                  (function (e) {
                    const t = localStorage.getItem(o.b_O)
                    if (!t) return
                    const n = JSON.parse(t)
                    ;(n.id = e), localStorage.setItem(o.b_O, JSON.stringify(n))
                  })(n.id)
              })(e, n)
              break
            case 'error':
              'SESSION_REVOKED' === n.error.message && t.signOut({ forceInitApi: !0 }),
                Object.values(e.byTabId).forEach((e) => {
                  let { id: r } = e
                  const o = (0, u.J_)(n.error)
                  o
                    ? t.addPaymentError({ error: o, tabId: r })
                    : (0, u.pF)(n.error)
                    ? t.closePaymentModal({ tabId: r })
                    : t.showDialog && t.showDialog({ data: n.error, tabId: r })
                })
          }
        })
      },
      89005: (e, t, n) => {
        var r = n(33555),
          o = n(83716),
          a = n(863),
          s = n(50711),
          d = n(27370),
          i = n(11192),
          c = n(706),
          u = n(28406),
          l = n(5872),
          f = n(95281),
          h = n(50214),
          m = n(71226),
          p = n(44271),
          g = n(65054),
          b = n(65116)
        !(function () {
          function e() {
            const e = document.documentElement.className.match(/theme-(\w+)/),
              t = e ? e[1] : 'light'
            let n = (0, r.Rd)()
            const a = (0, i.Pu)(n),
              { animationLevel: s } = n.settings.byKey
            a !== t && ((0, d.Z)(a, s === o.zy8), (n = { ...n }), (0, r.R3)(n))
          }
          const t = window.matchMedia('(prefers-color-scheme: dark)')
          'function' == typeof t.addEventListener
            ? t.addEventListener('change', e)
            : 'function' == typeof t.addListener && t.addListener(e)
        })(),
          (0, r.iw)('switchMultitabRole', async (e, t, n) => {
            const { isMasterTab: o, tabId: a = (0, g._w)() } = n
            if (o !== (0, i.jU)(e, a).isMasterTab)
              if (
                ((e = (0, p.i)(e, { isMasterTab: o }, a)), (0, r.R3)(e, { forceSyncOnIOs: !0 }), o)
              ) {
                if (e.passcode.hasPasscode && !e.passcode.isScreenLocked) {
                  const { sessionJson: e } = await (0, f.o6)(),
                    t = JSON.parse(e)
                  ;(0, h.wX)(t, t.userId)
                }
                if (
                  ((0, l.$S)(),
                  !(e = (0, r.Rd)()).passcode.hasPasscode || !e.passcode.isScreenLocked)
                ) {
                  'connectionStateReady' === e.connectionState &&
                    ((e = { ...e, connectionState: 'connectionStateConnecting' }), (0, r.R3)(e)),
                    t.initApi()
                  const { hasWebNotifications: n, hasPushNotifications: o } = (0, i.dZ)(e)
                  n && o && (0, u.Ld)()
                }
                ;(0, r.R3)(e), (0, c.px)()
              } else
                (0, u.r1)(),
                  t.destroyConnection(),
                  (0, c.NA)(),
                  (0, l.VJ)(),
                  t.onSomeTabSwitchedMultitabRole()
          }),
          (0, r.iw)('onSomeTabSwitchedMultitabRole', async (e) => {
            if (e.passcode.hasPasscode && !e.passcode.isScreenLocked) {
              const { sessionJson: e } = await (0, f.o6)(),
                t = JSON.parse(e)
              ;(0, h.wX)(t, t.userId)
            }
            ;(0, m.t9)('broadcastLocalDbUpdateFull')
          }),
          (0, r.iw)('initShared', () => {
            ;(0, c.px)()
          }),
          (0, b.ll)((e) => {
            let t = !1
            const n = (0, i.jU)(e, (0, g._w)())
            if (!n?.shouldInit) return
            ;(e = (0, r.Rd)()), (e = (0, p.i)(e, { shouldInit: !1 }, n.id))
            const { animationLevel: u, messageTextSize: l, language: f } = e.settings.byKey,
              h = (0, i.Pu)(e)
            ;(0, s.m0)(f, void 0, !0),
              document.documentElement.style.setProperty(
                '--composer-text-size',
                `${Math.max(l, a.cj ? 16 : 15)}px`
              ),
              document.documentElement.style.setProperty(
                '--message-meta-height',
                `${Math.floor(1.3125 * l)}px`
              ),
              document.documentElement.style.setProperty('--message-text-size', `${l}px`),
              document.documentElement.setAttribute('data-message-text-size', l.toString()),
              document.body.classList.add('initial'),
              document.body.classList.add(`animation-level-${u}`),
              document.body.classList.add(a.$b ? 'is-touch-env' : 'is-pointer-env'),
              (0, d.Z)(h, u === o.zy8),
              (0, c.px)(),
              a.cj
                ? document.body.classList.add('is-ios')
                : a.wZ
                ? document.body.classList.add('is-android')
                : a.jm && document.body.classList.add('is-macos'),
              a.s$ && document.body.classList.add('is-safari'),
              (t = !0),
              (0, r.R3)(e)
          }),
          (0, r.iw)('setInstallPrompt', (e, t, n) => {
            const { canInstall: r, tabId: o = (0, g._w)() } = n
            return (0, p.i)(e, { canInstall: r }, o)
          }),
          (0, r.iw)('setIsUiReady', (e, t, n) => {
            const { uiReadyState: r, tabId: o = (0, g._w)() } = n
            return (
              2 === r && document.body.classList.remove('initial'),
              (0, p.i)(e, { uiReadyState: r }, o)
            )
          }),
          (0, r.iw)('setAuthPhoneNumber', (e, t, n) => {
            const { phoneNumber: r } = n
            return { ...e, authPhoneNumber: r }
          }),
          (0, r.iw)('setAuthRememberMe', (e, t, n) => ({ ...e, authRememberMe: Boolean(n) })),
          (0, r.iw)('clearAuthError', (e) => ({ ...e, authError: void 0 })),
          (0, r.iw)('disableHistoryAnimations', (e, t, n) => {
            const { tabId: o = (0, g._w)() } = n || {}
            setTimeout(() => {
              ;(e = (0, r.Rd)()),
                (e = (0, p.i)(e, { shouldSkipHistoryAnimations: !1 }, o)),
                (0, r.R3)(e),
                document.body.classList.remove('no-animate')
            }, 450),
              (e = (0, p.i)(e, { shouldSkipHistoryAnimations: !0 }, o)),
              (0, r.R3)(e, { forceSyncOnIOs: !0 })
          })
      },
      73456: (e, t, n) => {
        var r = n(33555),
          o = n(25260),
          a = n(27370),
          s = n(83716),
          d = n(50711),
          i = n(863),
          c = n(44271),
          u = n(65116),
          l = n(65054)
        let f
        ;(0, u.ll)((e) => {
          const { updatePageTitle: t } = (0, r.Sv)(),
            n = e.settings.byKey,
            o = f?.settings.byKey
          if (((f = e), o)) {
            if (
              (n.animationLevel !== o.animationLevel &&
                [s.oBh, s.mzL, s.zy8].forEach((e) => {
                  document.body.classList.toggle(`animation-level-${e}`, n.animationLevel === e)
                }),
              n.theme !== o.theme)
            ) {
              const t = document.hasFocus() ? e.settings.byKey.animationLevel : s.oBh
              ;(0, a.Z)(n.theme, t === s.zy8)
            }
            n.language !== o.language && (0, d.m0)(n.language),
              n.timeFormat !== o.timeFormat && (0, d.qf)(n.timeFormat),
              n.messageTextSize !== o.messageTextSize &&
                (document.documentElement.style.setProperty(
                  '--composer-text-size',
                  `${Math.max(n.messageTextSize, i.cj ? 16 : 15)}px`
                ),
                document.documentElement.style.setProperty(
                  '--message-meta-height',
                  `${Math.floor(1.3125 * n.messageTextSize)}px`
                ),
                document.documentElement.style.setProperty(
                  '--message-text-size',
                  `${n.messageTextSize}px`
                ),
                document.documentElement.setAttribute(
                  'data-message-text-size',
                  n.messageTextSize.toString()
                )),
              n.canDisplayChatInTitle !== o.canDisplayChatInTitle && t()
          }
        }),
          (0, r.iw)('setSettingOption', (e, t, n) => (0, o.BI)(e, n)),
          (0, r.iw)('setThemeSettings', (e, t, n) => {
            const { theme: r, ...a } = n
            return (0, o.lr)(e, r, a)
          }),
          (0, r.iw)('requestNextSettingsScreen', (e, t, n) => {
            const { screen: r, tabId: o = (0, l._w)() } = n
            return (0, c.i)(e, { nextSettingsScreen: r }, o)
          })
      },
      5872: (e, t, n) => {
        n.d(t, {
          $S: () => C,
          J9: () => I,
          QS: () => w,
          Uf: () => k,
          VJ: () => S,
          jA: () => A,
          nE: () => E,
        })
        var r = n(65116),
          o = n(33555),
          a = n(6137),
          s = n(69118),
          d = n(83716),
          i = n(18674),
          c = n(60782),
          u = n(11192),
          l = n(50214),
          f = n(35369),
          h = n(56112),
          m = n(16974),
          p = n(25260),
          g = n(95281)
        const b = (0, s.P2)(() => (0, s.Q8)(P), 5e3, !1)
        let y,
          v = !1
        function w() {
          d.sdb ||
            ((0, o.iw)('saveSession', () => {
              v || C()
            }),
            (0, o.iw)('reset', () => {
              localStorage.removeItem(d.UhJ), v && S()
            }))
        }
        function I(e) {
          if (d.sdb) return
          const t = (function (e) {
            d.eMD && console.time('global-state-cache-read')
            const t = localStorage.getItem(d.UhJ),
              n = t ? JSON.parse(t) : void 0
            return d.eMD && console.timeEnd('global-state-cache-read'), n && E(n, e), { ...e, ...n }
          })(e)
          return t.passcode.hasPasscode || (0, l.ti)(!0) ? (C(), t) : void S()
        }
        function C() {
          ;(v = !0), (y = (0, s.Gq)(P, !0)), window.addEventListener('blur', P), (0, r.ll)(b)
        }
        function S() {
          ;(v = !1), (0, r.Iq)(b), window.removeEventListener('blur', P), y && y()
        }
        function E(e, t) {
          try {
            !(function (e, t) {
              ;(e.settings.byKey = { ...t.settings.byKey, ...e.settings.byKey }),
                (e.settings.themes = { ...t.settings.themes, ...e.settings.themes }),
                (e.chatFolders = { ...t.chatFolders, ...e.chatFolders }),
                e.stickers.premium || (e.stickers.premium = t.stickers.premium),
                e.attachMenu || (e.attachMenu = { bots: {} }),
                e.trustedBotIds || (e.trustedBotIds = []),
                e.passcode || (e.passcode = {}),
                void 0 === e.activeSessions?.byHash &&
                  (e.activeSessions = { byHash: {}, orderedHashes: [] }),
                e.activeWebSessions || (e.activeWebSessions = { byHash: {}, orderedHashes: [] }),
                e.transcriptions || (e.transcriptions = {}),
                e.appConfig && !e.appConfig.limits && (e.appConfig.limits = d.prK),
                e.customEmojis ||
                  (e.customEmojis = {
                    added: {},
                    byId: {},
                    lastRendered: [],
                    forEmoji: {},
                    statusRecent: {},
                  }),
                e.customEmojis.statusRecent || (e.customEmojis.statusRecent = {}),
                e.recentCustomEmojis || (e.recentCustomEmojis = []),
                e.stickers.premiumSet || (e.stickers.premiumSet = { stickers: [] }),
                e.customEmojis.forEmoji || (e.customEmojis.forEmoji = {})
              const { light: n } = e.settings.themes
              if (
                (('rgba(90, 110, 70, 0.6)' !== n?.patternColor && n?.patternColor) ||
                  (e.settings.themes.light = { ...n, patternColor: d.ga_ }),
                e.serviceNotifications.forEach((e) => {
                  const { isHidden: t } = e
                  t && (e.isDeleted = t)
                }),
                e.users.byId &&
                  Object.values(e.users.byId).some((e) => 'username' in e) &&
                  (e.users.byId = Object.entries(e.users.byId).reduce((e, t) => {
                    let [n, r] = t
                    return 'username' in r && delete r.username, (e[n] = r), e
                  }, {})),
                e.chats.byId &&
                  Object.values(e.chats.byId).some((e) => 'username' in e) &&
                  (e.chats.byId = Object.entries(e.chats.byId).reduce((e, t) => {
                    let [n, r] = t
                    return 'username' in r && delete r.username, (e[n] = r), e
                  }, {})),
                e.messages.byChatId &&
                  !Object.values(e.messages.byChatId).some((e) =>
                    Object.values(e.byId).some((e) => {
                      let { reactions: t } = e
                      return t?.results[0]?.reaction && 'string' != typeof t.results[0].reaction
                    })
                  ))
              )
                for (const t of Object.values(e.messages.byChatId))
                  for (const e of Object.values(t.byId)) delete e.reactions
              'string' == typeof e.config?.defaultReaction &&
                (e.config.defaultReaction = { emoticon: e.config.defaultReaction }),
                'string' == typeof e.availableReactions?.[0].reaction &&
                  (e.availableReactions = e.availableReactions.map((e) => ({
                    ...e,
                    reaction: { emoticon: e.reaction },
                  }))),
                e.archiveSettings || (e.archiveSettings = t.archiveSettings)
            })(e, t)
          } catch (e) {
            console.error(e)
          }
        }
        function P() {
          const e = (0, o.Rd)()
          !v || e.isLoggingOut || (0, i.zG)() || A()
        }
        function A() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          const t = (0, o.Rd)(),
            { hasPasscode: n, isScreenLocked: r } = t.passcode,
            a = k(t)
          if (n) {
            r || e || (0, g.H4)(void 0, a)
            const n = JSON.stringify((0, p.ZI)(t, !1))
            localStorage.setItem(d.UhJ, n)
          } else localStorage.setItem(d.UhJ, a)
        }
        function k(e) {
          const t = {
            ...f.g,
            ...(0, c.ei)(e, [
              'appConfig',
              'authState',
              'authPhoneNumber',
              'authRememberMe',
              'authNearestCountry',
              'currentUserId',
              'contactList',
              'topPeers',
              'topInlineBots',
              'recentEmojis',
              'recentCustomEmojis',
              'push',
              'serviceNotifications',
              'attachmentSettings',
              'leftColumnWidth',
              'lastIsChatInfoShown',
              'archiveSettings',
              'mediaViewer',
              'audioPlayer',
            ]),
            customEmojis: M(e),
            users: T(e),
            chats: N(e),
            messages: L(e),
            recentlyFoundChatIds: e.recentlyFoundChatIds,
            settings: Z(e),
            chatFolders: R(e),
            groupCalls: _(e),
            availableReactions: B(e),
            trustedBotIds: e.trustedBotIds,
            passcode: (0, c.ei)(e.passcode, [
              'isScreenLocked',
              'hasPasscode',
              'invalidAttemptsCount',
            ]),
          }
          return JSON.stringify(t)
        }
        function M(e) {
          const { lastRendered: t, byId: n } = e.customEmojis,
            r = t.slice(0, d.j7i)
          return {
            byId: (0, c.ei)(n, r),
            lastRendered: r,
            forEmoji: {},
            added: {},
            statusRecent: {},
          }
        }
        function T(e) {
          const {
              users: { byId: t, statusesById: n },
              currentUserId: r,
            } = e,
            o = (0, c.oA)(
              Object.values(e.byTabId).map((t) => {
                let { id: n } = t
                return (0, u.Bt)(e, n)
              })
            )
              .map((e) => {
                let { chatId: t } = e
                return t
              })
              .filter((e) => (0, h.YC)(e)),
            a = (0, c.Tw)(
              (0, c.oA)(
                Object.values(e.byTabId).flatMap((t) => {
                  let { id: n } = t
                  return (0, u.P2)(e, n)?.map((e) => e.id) || []
                })
              )
            ),
            s = (0, c.Tw)([
              ...(r ? [r] : []),
              ...o,
              ...(a || []),
              ...(e.topPeers.userIds || []),
              ...((0, m.gO)(d.NfV)?.filter(h.YC) || []),
              ...((0, m.gO)(d.WSp)?.filter(h.YC) || []),
              ...(e.contactList?.userIds || []),
              ...(e.recentlyFoundChatIds?.filter(h.YC) || []),
              ...Object.keys(t),
            ]).slice(0, d.lOz)
          return { byId: (0, c.ei)(t, s), statusesById: (0, c.ei)(n, s) }
        }
        function N(e) {
          const {
              chats: { byId: t },
              currentUserId: n,
            } = e,
            r = (0, c.oA)(
              Object.values(e.byTabId).flatMap((t) => {
                let { id: n } = t
                const r = (0, u.Bt)(e, n)
                if (!r) return
                const { chatId: o, threadId: s } = r,
                  d = (0, u.Cm)(e, o, s)
                return d ? [{ chatId: d.id, threadId: a._f, type: 'thread' }, r] : [r]
              })
            ).map((e) => {
              let { chatId: t } = e
              return t
            }),
            o = (0, c.Tw)([
              ...(n ? [n] : []),
              ...r,
              ...((0, m.gO)(d.NfV) || []),
              ...((0, m.gO)(d.WSp) || []),
              ...(e.recentlyFoundChatIds || []),
              ...Object.keys(t),
            ]).slice(0, d.gJR)
          return { ...e.chats, isFullyLoaded: {}, byId: (0, c.ei)(e.chats.byId, o) }
        }
        function L(e) {
          const { currentUserId: t } = e,
            n = {},
            r = (0, c.oA)(
              Object.values(e.byTabId).map((t) => {
                let { id: n } = t
                return (0, u.Bt)(e, n)
              })
            ).map((e) => {
              let { chatId: t } = e
              return t
            }),
            o = (0, c.oA)(
              Object.values(e.byTabId).map((e) => {
                let { forumPanelChatId: t } = e
                return t
              })
            )
          return (
            (0, c.Tw)([
              ...r,
              ...(t ? [t] : []),
              ...o,
              ...((0, m.gO)(d.NfV)?.slice(0, d.Rk9) || []),
            ]).forEach((t) => {
              const r = e.messages.byChatId[t]
              if (!r) return
              const o = (0, u.Z1)(e, t),
                s = (0, c.oA)(
                  Object.values(e.byTabId).map((n) => {
                    let { id: r } = n
                    const { chatId: o, threadId: s } = (0, u.Bt)(e, r) || {}
                    if (o && o === t && s && s !== a._f) return s
                  })
                ),
                d = s.length ? [a._f, ...s] : [a._f],
                i = (0, c.q0)(r.threadsById, d)
              if (!Object.keys(i).length) return
              const l = (0, c.Tw)(Object.values(i).flatMap((e) => e.lastViewportIds || [])),
                f = o?.topics
                  ? Object.values(o.topics).map((e) => {
                      let { lastMessageId: t } = e
                      return t
                    })
                  : [],
                h = (0, c.ei)(r.byId, l.concat(f)),
                m = Object.keys(i).reduce((e, t) => {
                  const n = i[Number(t)]
                  return (e[Number(t)] = { ...n, listedIds: n.lastViewportIds }), e
                }, {})
              n[t] = { byId: h, threadsById: m }
            }),
            { byChatId: n, sponsoredByChatId: {} }
          )
        }
        function Z(e) {
          const { byKey: t, themes: n } = e.settings
          return { byKey: t, themes: n, privacy: {}, notifyExceptions: {} }
        }
        function R(e) {
          return { ...e.chatFolders }
        }
        function _(e) {
          return { ...e.groupCalls, byId: {}, activeGroupCallId: void 0 }
        }
        function B(e) {
          return e.availableReactions?.map((e) =>
            (0, c.ei)(e, ['reaction', 'staticIcon', 'title', 'isInactive'])
          )
        }
      },
      22825: (e, t, n) => {
        n.d(t, {
          $l: () => H,
          AY: () => z,
          BV: () => P,
          Bf: () => m,
          G9: () => p,
          GM: () => S,
          GU: () => L,
          H5: () => _,
          Hd: () => D,
          Hp: () => M,
          Mg: () => Z,
          Nl: () => T,
          Qm: () => R,
          RT: () => k,
          Ru: () => y,
          SB: () => $,
          Sb: () => G,
          Sm: () => j,
          U: () => C,
          VE: () => N,
          YC: () => h,
          ZV: () => g,
          cc: () => U,
          eA: () => b,
          hu: () => E,
          i4: () => x,
          ih: () => W,
          l6: () => w,
          mt: () => O,
          pA: () => A,
          pE: () => F,
          pK: () => v,
          q8: () => B,
          zF: () => V,
          zX: () => I,
        })
        var r = n(6137),
          o = n(83716),
          a = n(60782),
          s = n(93311),
          d = n(790),
          i = n(85765),
          c = n(76927)
        const u = Date.now() / 1e3 + 31622400,
          l = 3e9,
          f = 3e8
        function h(e) {
          return 'number' == typeof e ? e > 0 : !e.startsWith('-')
        }
        function m(e) {
          return p(e) || g(e)
        }
        function p(e) {
          return 'chatTypeBasicGroup' === e.type
        }
        function g(e) {
          return 'chatTypeSuperGroup' === e.type
        }
        function b(e) {
          return 'chatTypeChannel' === e.type
        }
        function y(e) {
          return 'chatTypePrivate' === e.type || 'chatTypeBasicGroup' === e.type
        }
        function v(e) {
          return e === o.FVh
        }
        function w(e) {
          switch (e.type) {
            case 'chatTypePrivate':
              return 'PrivateChat'
            case 'chatTypeBasicGroup':
            case 'chatTypeSuperGroup':
              return 'AccDescrGroup'
            case 'chatTypeChannel':
              return 'AccDescrChannel'
            default:
              return 'Chat'
          }
        }
        function I(e) {
          if ('chatTypePrivate' === e.type || 'chatTypeSecret' === e.type) return e.id
        }
        function C(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return n ? e('SavedMessages') : t.title || e('HiddenName')
        }
        function S(e) {
          if (e.fullInfo) return e.fullInfo.about
        }
        function E(e) {
          const { usernames: t } = e
          if (t) {
            const e = t.find((e) => e.isActive)
            if (e) return `${o.zHP}${e.username}`
          }
          const { inviteLink: n } = e.fullInfo || {}
          return n
        }
        function P(e, t, n, a) {
          const s = t || `c/${e.replace('-', '')}`,
            d = n && n !== r._f ? `/${n}` : '',
            i = a ? `/${a}` : ''
          return `${o.zHP}${s}${d}${i}`
        }
        function A(e, t, n) {
          return P(e, t, n)
        }
        function k(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'normal',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'photo',
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.avatarHash
          if (!r) return
          const { fullInfo: o } = e
          if ('video' === n) {
            const t = h(e.id) ? o : void 0
            return t?.personalPhoto?.isVideo
              ? (0, c.D)(t.personalPhoto)
              : o?.profilePhoto?.isVideo
              ? (0, c.D)(o.profilePhoto)
              : t?.fallbackPhoto?.isVideo
              ? (0, c.D)(t.fallbackPhoto)
              : void 0
          }
          return 'big' === t ? `profile${e.id}?${r}` : `avatar${e.id}?${r}`
        }
        function M(e) {
          return !e.lastMessage
        }
        function T(e) {
          return Boolean(e.adminRights)
        }
        function N(e, t) {
          return !!e.adminRights && e.adminRights[t]
        }
        function L(e, t) {
          return t.id === o.OxA ? e.isCreator : e.isCreator || N(e, 'manageTopics') || t.isOwner
        }
        function Z(e, t) {
          return Boolean(e.currentUserBannedRights?.[t] || e.defaultBannedRights?.[t])
        }
        function R(e, t, n) {
          if (t !== r._f && e.isForum) {
            if (e.isNotJoined) return !1
            const n = e.topics?.[t]
            if (n?.isClosed && !n.isOwner && !N(e, 'manageTopics')) return !1
          }
          return (
            !(
              e.isRestricted ||
              e.isForbidden ||
              e.migratedTo ||
              (!n && e.isNotJoined) ||
              v(e.id)
            ) &&
            (!!e.isCreator ||
              !!h(e.id) ||
              (b(e) ? N(e, 'postMessages') : T(e) || !Z(e, 'sendMessages')))
          )
        }
        function _(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          if (!e)
            return {
              canAttachMedia: !1,
              canAttachPolls: !1,
              canSendStickers: !1,
              canSendGifs: !1,
              canAttachEmbedLinks: !1,
              canSendPhotos: !1,
              canSendVideos: !1,
              canSendRoundVideos: !1,
              canSendAudios: !1,
              canSendVoices: !1,
              canSendPlainText: !1,
              canSendDocuments: !1,
            }
          const n = T(e)
          return {
            canAttachMedia: n || !Z(e, 'sendMedia'),
            canAttachPolls: (n || !Z(e, 'sendPolls')) && (!h(e.id) || t),
            canSendStickers: n || !Z(e, 'sendStickers'),
            canSendGifs: n || !Z(e, 'sendGifs'),
            canAttachEmbedLinks: n || !Z(e, 'embedLinks'),
            canSendPhotos: n || !Z(e, 'sendPhotos'),
            canSendVideos: n || !Z(e, 'sendVideos'),
            canSendRoundVideos: n || !Z(e, 'sendRoundvideos'),
            canSendAudios: n || !Z(e, 'sendAudios'),
            canSendVoices: n || !Z(e, 'sendVoices'),
            canSendPlainText: n || !Z(e, 'sendPlain'),
            canSendDocuments: n || !Z(e, 'sendDocs'),
          }
        }
        function B(e, t, n) {
          if (t?.sendMessages) {
            const { untilDate: n } = t
            return n && n < u
              ? e(
                  'Channel.Persmission.Denied.SendMessages.Until',
                  e('formatDateAtTime', [
                    (0, d.xH)(new Date(1e3 * n), e.code),
                    (0, d.mr)(e, 1e3 * n),
                  ])
                )
              : e('Channel.Persmission.Denied.SendMessages.Forever')
          }
          if (n?.sendMessages)
            return e('Channel.Persmission.Denied.SendMessages.DefaultRestrictedText')
        }
        function O(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r._f,
            a = arguments.length > 3 ? arguments[3] : void 0
          if (!t?.isForum) return
          if (n === r._f) {
            if (a || (t.topics && !t.topics[o.OxA]?.isClosed)) return
            return e('lng_forum_replies_only')
          }
          const s = t.topics?.[n]
          return s
            ? !s.isClosed || s.isOwner || N(t, 'manageTopics')
              ? void 0
              : e('TopicClosedByAdmin')
            : void 0
        }
        function D(e) {
          if (e && e.fullInfo) return e.fullInfo.slowMode
        }
        function F(e) {
          return e.folderId === o.WSp
        }
        function x(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          return n[e.id] && void 0 !== n[e.id].isMuted
            ? n[e.id].isMuted
            : e.isMuted ||
                (h(e.id) && !t.hasPrivateChatsNotifications) ||
                (b(e) && !t.hasBroadcastNotifications) ||
                (m(e) && !t.hasGroupNotifications)
        }
        function j(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          const {
            hasPrivateChatsMessagePreview: r = !0,
            hasBroadcastMessagePreview: o = !0,
            hasGroupMessagePreview: a = !0,
          } = t
          return n[e.id] && void 0 !== n[e.id].shouldShowPreviews
            ? n[e.id].shouldShowPreviews
            : (h(e.id) && r) || (b(e) && o) || (m(e) && a)
        }
        function U(e) {
          return p(e) || ((g(e) || b(e)) && e.isCreator)
        }
        function $(e, t, n) {
          const {
            id: r,
            title: o,
            emoticon: a,
            description: s,
            pinnedChatIds: d,
            excludedChatIds: i,
            includedChatIds: c,
            excludeArchived: u,
            excludeMuted: l,
            excludeRead: f,
            ...h
          } = t
          return void 0 !== n &&
            (Object.values(h).filter(Boolean).length > 1 || i?.length || c?.length)
            ? e('Chats', n)
            : h.bots
            ? e('FilterBots')
            : h.groups
            ? e('FilterGroups')
            : h.channels
            ? e('FilterChannels')
            : h.contacts
            ? e('FilterContacts')
            : h.nonContacts
            ? e('FilterNonContacts')
            : void 0
        }
        function V(e, t, n) {
          if (n && !h(t)) {
            if (!h(n.id)) {
              if (t === n.id) return
              return n.title
            }
            return n.isSelf ? e('FromYou') : (0, s.Vl)(n)
          }
        }
        function W(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0
          return (0, a.Xo)(
            e,
            (e) => {
              const o = t[e]
              if (!o) return 0
              let a = 0
              return (
                o.lastMessage && (a += o.lastMessage.date),
                n && o.isVerified && (a += l),
                r && r.includes(e) && (a = Date.now() + f + (r.length - r.indexOf(e))),
                a
              )
            },
            'desc'
          )
        }
        function H(e, t, n, r, o) {
          if (!r) return t
          const a = (0, i.W)(r)
          return t.filter((t) => {
            const r = n[t]
            if (!r) return !1
            const s = t === o,
              d = C(e, r, s)
            return s ? a(d) || a(r.title) : a(d)
          })
        }
        function G(e) {
          return e.usernames?.some((e) => {
            let { isActive: t } = e
            return t
          })
        }
        function z(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          if (n) return e.sort((e, t) => t.lastMessageId - e.lastMessageId)
          {
            const n = e.filter((e) => e.isPinned),
              r = e
                .filter((e) => !e.isPinned && !e.isHidden)
                .sort((e, t) => t.lastMessageId - e.lastMessageId),
              o = e
                .filter((e) => !e.isPinned && e.isHidden)
                .sort((e, t) => t.lastMessageId - e.lastMessageId)
            return [
              ...(t ? t.map((e) => n.find((t) => t.id === e)).filter(Boolean) : n),
              ...r,
              ...o,
            ]
          }
        }
      },
      56112: (e, t, n) => {
        n.d(t, {
          lN: () => s.lN,
          JE: () => ee.JE,
          uw: () => Y,
          k6: () => R,
          XU: () => ee.XU,
          yL: () => ee.yL,
          $l: () => o.$l,
          kK: () => r.kK,
          H5: () => o.H5,
          MR: () => x,
          NF: () => te,
          kw: () => r.kw,
          cc: () => o.cc,
          GU: () => o.GU,
          Qm: () => o.Qm,
          RT: () => o.RT,
          GM: () => o.GM,
          hu: () => o.hu,
          N0: () => W,
          BV: () => o.BV,
          Hd: () => o.Hd,
          U: () => o.U,
          l6: () => o.l6,
          ym: () => Z,
          T7: () => a.T7,
          SB: () => o.SB,
          mt: () => o.mt,
          N: () => O,
          Wc: () => D,
          VE: () => o.VE,
          WS: () => r.WS,
          XV: () => J,
          Sc: () => K,
          N5: () => g,
          g8: () => h,
          oP: () => b,
          nl: () => S,
          qp: () => u,
          w6: () => a.w6,
          R5: () => q,
          $D: () => a.$D,
          aE: () => w,
          ep: () => U,
          c0: () => $,
          d0: () => a.d0,
          eO: () => P,
          NE: () => L,
          Tp: () => a.Tp,
          nf: () => A,
          kG: () => j,
          Ti: () => _,
          DH: () => N,
          KK: () => a.KK,
          O$: () => f,
          t9: () => E,
          dT: () => ee.dT,
          Y5: () => p,
          zF: () => o.zF,
          q8: () => o.q8,
          HW: () => a.HW,
          eH: () => a.eH,
          h_: () => a.eO,
          bf: () => v,
          Kk: () => s.Kk,
          Eb: () => s.Eb,
          MK: () => s.MK,
          UD: () => a.UD,
          EU: () => s.EU,
          b7: () => m,
          kd: () => y,
          s1: () => k,
          F$: () => M,
          Cg: () => T,
          AY: () => o.AY,
          bV: () => H,
          HV: () => G,
          zX: () => o.zX,
          $d: () => ee.$d,
          OU: () => a.OU,
          RI: () => a.RI,
          RK: () => re.RK,
          Ow: () => Q,
          pA: () => o.pA,
          Rs: () => r.Rs,
          Vl: () => r.Vl,
          Js: () => r.Js,
          db: () => r.db,
          UZ: () => ee.UZ,
          Tq: () => r.Tq,
          Dk: () => ne.D,
          jC: () => z,
          O9: () => B,
          BM: () => V,
          u8: () => l,
          fY: () => a.fY,
          FT: () => a.Lo,
          Ul: () => a.Ul,
          Nl: () => o.Nl,
          pE: () => o.pE,
          G9: () => o.G9,
          eA: () => o.eA,
          Bf: () => o.Bf,
          Sb: () => o.Sb,
          Hp: () => o.Hp,
          ZV: () => o.ZV,
          pK: () => o.pK,
          Ru: () => o.Ru,
          NB: () => r.NB,
          MF: () => a.MF,
          $R: () => a.$R,
          CD: () => a.CD,
          AJ: () => a.AJ,
          rl: () => I,
          hC: () => C,
          CI: () => a.CI,
          B4: () => a.B4,
          Bt: () => ee.Bt,
          ss: () => a.ss,
          Hl: () => ee.Hl,
          jM: () => a.jM,
          cS: () => r.cS,
          YC: () => o.YC,
          kM: () => r.kM,
          Mg: () => o.Mg,
          Ak: () => a.Ak,
          i4: () => o.i4,
          Sm: () => o.Sm,
          ih: () => o.ih,
          Z0: () => r.Z0,
          If: () => re.If,
        })
        var r = n(93311),
          o = n(22825),
          a = n(20841),
          s = n(42986),
          d = n(6137),
          i = n(863),
          c = n(15376)
        function u(e) {
          return e.content
        }
        function l(e) {
          return Boolean(f(e) || m(e) || w(e) || v(e) || S(e) || E(e) || g(e) || b(e) || y(e))
        }
        function f(e) {
          return e.content.photo
        }
        function h(e) {
          return 'suggestProfilePhoto' === e.content.action?.type ? e.content.action.photo : void 0
        }
        function m(e) {
          return e.content.video
        }
        function p(e) {
          const { video: t } = e.content
          return t?.isRound ? t : void 0
        }
        function g(e) {
          return e.content.action
        }
        function b(e) {
          return e.content.audio
        }
        function y(e) {
          return e.content.voice
        }
        function v(e) {
          return e.content.sticker
        }
        function w(e) {
          return e.content.document
        }
        function I(e) {
          const t = w(e)
          return t ? 'photo' === t.mediaType : void 0
        }
        function C(e) {
          const t = w(e)
          return t ? 'video' === t.mediaType : void 0
        }
        function S(e) {
          return e.content.contact
        }
        function E(e) {
          return e.content.poll
        }
        function P(e) {
          return e.content.invoice
        }
        function A(e) {
          return e.content.location
        }
        function k(e) {
          return e.content.webPage
        }
        function M(e) {
          return k(e)?.photo
        }
        function T(e) {
          return k(e)?.video
        }
        function N(e) {
          return (function (e) {
            const t = f(e) || m(e) || w(e) || v(e) || M(e) || T(e) || P(e)?.extendedMedia
            if (t) return t.thumbnail
          })(e)?.dataUri
        }
        function L(e) {
          const t = f(e) || m(e),
            n = P(e)?.extendedMedia
          return Boolean(n || t?.isSpoiler)
        }
        function Z(e) {
          return `document${e.id}`
        }
        function R(e, t, n, r, o) {
          const { long: a, lat: s, accessHash: d, accuracyRadius: i } = e
          return `staticMap:${d}?lat=${s}&long=${a}&w=${t}&h=${n}&zoom=${r}&scale=${o}&accuracyRadius=${i}`
        }
        function _(e, t) {
          const { video: n, sticker: r, audio: o, voice: s, document: d } = e.content,
            i =
              f(e) ||
              M(e) ||
              (function (e) {
                return I(e) ? w(e) : void 0
              })(e),
            u = h(e),
            l =
              n ||
              T(e) ||
              (function (e) {
                return C(e) ? w(e) : void 0
              })(e),
            m = u || i || l || r || o || s || d
          if (!m) return
          const p = m.id,
            g = `${(0, a.Tp)(e)}${p ? `:${p}` : ''}`
          if (l)
            switch (t) {
              case 'micro':
              case 'pictogram':
                return `${g}?size=m`
              case 'inline':
                return V(e) ? void 0 : F(l, g)
              case 'preview':
                return `${g}?size=x`
              case 'full':
                return F(l, g)
              case 'download':
                return `${g}?download`
            }
          if (i || u)
            switch (t) {
              case 'micro':
              case 'pictogram':
                return `${g}?size=${u ? 'a' : 'm'}`
              case 'inline':
                return V(e) ? void 0 : `${g}?size=${u ? 'b' : 'x'}`
              case 'preview':
                return `${g}?size=${u ? 'b' : 'x'}`
              case 'full':
              case 'download':
                return d ? g : `${g}?size=${u ? 'c' : 'z'}`
            }
          if (d)
            switch (t) {
              case 'micro':
              case 'pictogram':
              case 'inline':
              case 'preview':
                if (!(0, c.v6)(d) || V(e)) return
                return `${g}?size=m`
              case 'full':
              case 'download':
                return g
            }
          if (r)
            switch (t) {
              case 'micro':
                return
              case 'pictogram':
                return `${g}?size=m`
              case 'inline':
                return g
              case 'download':
                return `${g}?download`
            }
          if (o)
            switch (t) {
              case 'micro':
              case 'pictogram':
                return x(o) ? `${g}?size=m` : void 0
              case 'inline':
                return F(o, g)
              case 'download':
                return `${g}?download`
            }
          if (s)
            switch (t) {
              case 'micro':
              case 'pictogram':
                return
              case 'inline':
                return g
              case 'download':
                return `${g}?download`
            }
        }
        function B(e) {
          if (e) return `webDocument:${e.url}`
        }
        function O(e) {
          const { photo: t } = e
          if (t) return `photo${t.id}?size=x`
        }
        function D(e) {
          const { document: t } = e
          if (t) return `document${t.id}`
        }
        function F(e, t) {
          return i.I_ && i.s$ ? `${t}?fileSize=${e.size}&mimeType=${e.mimeType}` : t
        }
        function x(e) {
          return e.thumbnailSizes && e.thumbnailSizes.length > 0
        }
        function j(e, t) {
          const { video: n, audio: r, voice: o, document: a } = e.content,
            s = Boolean(n || T(e) || C(e)),
            c = (n || r || a)?.size
          return 'download' === t
            ? i.I_ && c > i.l0 && !i.rT
              ? d.IU.DownloadUrl
              : d.IU.BlobUrl
            : s && i.I_ && ('full' === t || 'inline' === t)
            ? d.IU.Progressive
            : r || o
            ? o && !i.m5
              ? d.IU.BlobUrl
              : d.IU.Progressive
            : d.IU.BlobUrl
        }
        function U(e) {
          const { photo: t, video: n, document: r } = e.content,
            o = M(e),
            a = T(e)
          if (t || o) return `photo${e.date}.jpeg`
          const { fileName: s } = n || a || r || {}
          return s
        }
        function $(e) {
          const { video: t, document: n } = e.content,
            r = T(e),
            { size: o } = t || r || n || {}
          return o
        }
        function V(e) {
          const { photo: t, video: n, document: r } = e.content
          return t?.blobUrl || n?.blobUrl || r?.previewBlobUrl
        }
        function W(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return q(e, t, n ? 'media' : 'inlineMedia')
        }
        function H(e) {
          return e.sizes.find((e) => 'z' === e.type) || e.sizes.find((e) => 'y' === e.type) || G(e)
        }
        function G(e) {
          return (
            e.sizes.find((e) => 'x' === e.type) ||
            e.sizes.find((e) => 'm' === e.type) ||
            e.sizes.find((e) => 's' === e.type) ||
            e.thumbnail
          )
        }
        function z(e) {
          if (e.width && e.height) return e
        }
        function K(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          const r = (0, a.CI)(e),
            o = r || n,
            s = Number(t)
          return { isUploading: r, isTransferring: o, transferProgress: s }
        }
        function q(e, t, n) {
          let r
          switch (n) {
            case 'media':
              r = (e) => {
                const t = m(e)
                return f(e) || (t && !t.isRound && !t.isGif)
              }
              break
            case 'documents':
              r = w
              break
            case 'links':
              r = (e) => k(e) || (0, a.sQ)(e)
              break
            case 'audio':
              r = b
              break
            case 'voice':
              r = (e) => {
                const t = m(e)
                return y(e) || (t && t.isRound)
              }
              break
            case 'inlineMedia':
              r = (e) => {
                const t = m(e)
                return f(e) || (t && !t.isRound && !t.isGif) || I(e) || C(e)
              }
              break
            default:
              return []
          }
          return t.reduce((t, n) => (e[n] && r(e[n]) && t.push(n), t), [])
        }
        function J(e) {
          const { audio: t, voice: n, video: r } = u(e),
            o = t || n || r || T(e)
          if (o) return o.duration
        }
        function Y(e, t) {
          return `${e}_${t}`
        }
        const X = {
          missing_payment_information: { field: 'cardNumber', message: 'Incorrect card number' },
          invalid_number: { field: 'cardNumber', message: 'Incorrect card number' },
          number: { field: 'cardNumber', message: 'Incorrect card number' },
          exp_year: { field: 'expiry', message: 'Incorrect year' },
          exp_month: { field: 'expiry', message: 'Incorrect month' },
          invalid_expiry_year: { field: 'expiry', message: 'Incorrect year' },
          invalid_expiry_month: { field: 'expiry', message: 'Incorrect month' },
          cvc: { field: 'cvv', message: 'Incorrect CVV' },
          invalid_cvc: { field: 'cvv', message: 'Incorrect CVV' },
        }
        function Q(e) {
          const { message: t, code: n, param: r } = e,
            { field: o, message: a } = r ? X[r] : X[n]
          return { field: o, message: a, description: t }
        }
        var ee = n(7041)
        function te(e) {
          return `photo${e.id}?size=x`
        }
        var ne = n(76927),
          re = n(56266)
      },
      76927: (e, t, n) => {
        function r(e) {
          return `videoAvatar${e.id}?size=u`
        }
        n.d(t, { D: () => r })
      },
      42986: (e, t, n) => {
        n.d(t, { EU: () => l, Eb: () => f, Kk: () => h, MK: () => u, lN: () => c })
        var r = n(6137),
          o = n(83716),
          a = n(48035),
          s = n(20841),
          d = n(7041)
        const i = ['⠺', '⠵', '⠞', '⠟'],
          c = 80
        function u(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c,
            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
          const d = !n && f(t, o),
            i = d ? `${d} ` : '',
            u = (0, a.Z)(l(t), r),
            m = h(e, t, u, o, s)
          return `${i}${m}`
        }
        function l(e) {
          const t = (0, s.$b)(e),
            n = (0, s.UD)(e)
          if (!n) return t
          const { entities: o } = e.content.text || {}
          if (!o?.length) return t ? `${t}\n${n}` : n
          const a = o.reduce((e, t) => {
            let { type: n, offset: o, length: a } = t
            if (n !== r.Vv.Spoiler) return e
            const s = (function (e) {
              return new Array(e)
                .fill(void 0)
                .map(() => i[Math.floor(Math.random() * i.length)])
                .join('')
            })(a)
            return `${e.substr(0, o)}${s}${e.substr(o + a, e.length)}`
          }, n)
          return t ? `${t}\n${a}` : a
        }
        function f(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          const {
            photo: n,
            video: r,
            audio: o,
            voice: a,
            document: s,
            sticker: i,
            poll: c,
          } = e.content
          if (e.groupedId || n) return '🖼'
          if (r) return '📹'
          if (i) return i.emoji
          if (o) return '🎧'
          if (a) return '🎤'
          if (s) return '📎'
          if (c) return '📊'
          const u = !t && (0, d.dT)(e)
          return u ? u.reaction : void 0
        }
        function h(e, t, n) {
          let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          const {
            text: s,
            photo: i,
            video: c,
            audio: u,
            voice: l,
            document: f,
            sticker: h,
            contact: p,
            poll: g,
            invoice: b,
            location: y,
            game: v,
          } = t.content
          let w
          t.groupedId && (w = n || e('lng_in_dlg_album')),
            i && (w = n || e('AttachPhoto')),
            c && (w = n || e(c.isGif ? 'AttachGif' : 'AttachVideo')),
            h && (w = e('AttachSticker').trim()),
            u && (w = m(t) || e('AttachMusic')),
            l && (w = n || e('AttachAudio')),
            f && (w = a ? f.fileName : n || f.fileName),
            p && (w = e('AttachContact')),
            g && (w = g.summary.question),
            b && (w = b.extendedMedia ? b.title : `${e('PaymentInvoice')}: ${b.text}`),
            s && (a && w ? (w += `\n${n}`) : (w = n)),
            ('geo' !== y?.type && 'venue' !== y?.type) || (w = e('Message.Location')),
            'geoLive' === y?.type && (w = e('Message.LiveLocation')),
            v && (w = `🎮 ${v.title}`)
          const I = !r && (0, d.dT)(t)
          return w && I && (w = `to your "${w}"`), w || o.VC4
        }
        function m(e) {
          const { audio: t, text: n } = e.content
          return (t && [t.title, t.performer].filter(Boolean).join(' — ')) || n?.text
        }
      },
      20841: (e, t, n) => {
        n.d(t, {
          $D: () => b,
          $R: () => _,
          $b: () => m,
          AJ: () => L,
          Ak: () => f,
          B4: () => C,
          CD: () => Z,
          CI: () => N,
          HW: () => v,
          KK: () => h,
          Lo: () => P,
          MF: () => E,
          OU: () => M,
          RI: () => T,
          T7: () => w,
          Tp: () => l,
          UD: () => g,
          Ul: () => k,
          d0: () => u,
          eH: () => B,
          eO: () => y,
          fY: () => p,
          jM: () => A,
          sQ: () => I,
          ss: () => S,
          w6: () => R,
        })
        var r = n(6137),
          o = n(83716),
          a = n(93311),
          s = n(863),
          d = n(22825),
          i = n(33555)
        const c = new RegExp(o.FM6, 'i')
        function u(e) {
          return `message${e.toString().replace('.', '-')}`
        }
        function l(e) {
          const { chatId: t, id: n, previousLocalId: r } = e
          return (function (e, t) {
            return `msg${e}-${t}`
          })(t, (A(e) && r) || n)
        }
        function f(e) {
          const t = e.match(/^msg(-?\d+)-(\d+)/)
          return { chatId: t[1], messageId: Number(t[2]) }
        }
        function h(e) {
          return e.previousLocalId || e.id
        }
        function m(e) {
          const { transcriptionId: t } = e,
            n = (0, i.Rd)()
          return t && n.transcriptions[t]?.text
        }
        function p(e) {
          const {
            text: t,
            sticker: n,
            photo: r,
            video: o,
            audio: a,
            voice: s,
            document: d,
            poll: i,
            webPage: c,
            contact: u,
            invoice: l,
            location: f,
            game: h,
            action: m,
          } = e.content
          return (
            Boolean(t) ||
            !(n || r || o || a || s || d || u || i || c || l || f || h || m?.phoneCall)
          )
        }
        function g(e) {
          return p(e) ? e.content.text?.text || o.VC4 : void 0
        }
        function b(e) {
          const {
            text: t,
            sticker: n,
            photo: o,
            video: a,
            audio: s,
            voice: d,
            document: i,
            poll: c,
            webPage: u,
            contact: l,
            action: f,
            game: h,
            invoice: m,
            location: p,
          } = e.content
          if (n || a?.isRound) return !0
          if (!t || o || a || s || d || i || c || u || l || f || h || m || p) return !1
          const g = t?.entities?.some((e) => e.type !== r.Vv.CustomEmoji)
          return Boolean(e.emojiOnlyCount && !g)
        }
        function y(e) {
          const { text: t } = e.content
          if (!t?.entities?.length && 1 === e.emojiOnlyCount) return t.text
        }
        function v(e) {
          const { text: t } = e.content
          if (
            1 === t?.entities?.length &&
            t.entities[0].type === r.Vv.CustomEmoji &&
            1 === e.emojiOnlyCount
          )
            return t.entities[0].documentId
        }
        function w(e) {
          const { text: t } = e.content
          let n
          if (t?.entities) {
            const e = t.entities.find((e) => e.type === r.Vv.TextUrl)
            if ((e && (n = e.url.match(c)), !n)) {
              const e = t.entities.find((e) => e.type === r.Vv.Url)
              if (e) {
                const { offset: r, length: o } = e
                n = t.text.substring(r, r + o).match(c)
              }
            }
          }
          if ((!n && t && (n = t.text.match(c)), n)) return { url: n[0], domain: n[3] }
        }
        function I(e) {
          const { text: t } = e.content,
            n = t && t.text.match(c)
          if (n) return { url: n[0], domain: n[3] }
        }
        function C(e) {
          return e.isOutgoing
        }
        function S(e) {
          return Boolean(e.replyToMessageId)
        }
        function E(e) {
          return Boolean(e.forwardInfo)
        }
        function P(e) {
          return Boolean(e.content.action)
        }
        function A(e) {
          return e.chatId === o.awM && Math.round(e.id) !== e.id
        }
        function k(e) {
          return Boolean(e.senderId) && !(0, d.YC)(e.senderId) && C(e)
        }
        function M(e, t) {
          return (0, d.YC)(t.id) ? (0, a.Js)(t) : (0, d.U)(e, t)
        }
        function T(e) {
          return e.sendingState
            ? 'messageSendingStateFailed' === e.sendingState
              ? 'failed'
              : 'pending'
            : 'succeeded'
        }
        function N(e) {
          return L(e.id)
        }
        function L(e) {
          return e > o.MPN
        }
        function Z(e) {
          return e.content.action && 'historyClear' === e.content.action.type
        }
        function R(e) {
          const { content: t } = e,
            n = t.webPage ? t.webPage.video : t.video,
            r = t.webPage ? t.webPage.photo : t.photo,
            o = t.webPage ? t.webPage.document : t.document
          if (o) return o.fileName
          if (n) return n.fileName
          if (t.sticker) {
            const e = t.sticker.isLottie
              ? 'tgs'
              : t.sticker.isVideo
              ? 'webm'
              : (0, s.on)()
              ? 'webp'
              : 'png'
            return `${t.sticker.id}.${e}`
          }
          if (t.audio) return t.audio.fileName
          const a = l(e)
          return r ? `${a}.jpg` : t.voice ? (s.m5 ? `${a}.ogg` : `${a}.wav`) : a
        }
        function _(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now() / 1e3
          const { location: n } = e.content
          return 'geoLive' === n?.type && t - (e.date || 0) >= n.period
        }
        function B(e) {
          return (
            1 === e.inlineButtons?.length &&
            1 === e.inlineButtons[0].length &&
            e.inlineButtons[0][0]
          )
        }
      },
      7041: (e, t, n) => {
        function r(e) {
          return e.isOutgoing ? e.reactions?.recentReactions?.[0] : void 0
        }
        function o(e, t) {
          const { currentUserId: n } = e
          return t?.recentReactions?.some((e) => {
            let { isUnread: t, userId: r } = e
            return t && r !== n
          })
        }
        function a(e) {
          return !e.results.some((e) => {
            let { count: t } = e
            return t > 0
          })
        }
        function s(e, t) {
          return (
            !(!e || !t) &&
            ('emoticon' in e && 'emoticon' in t
              ? e.emoticon === t.emoticon
              : 'documentId' in e && 'documentId' in t && e.documentId === t.documentId)
          )
        }
        function d(e, t) {
          return 'all' === t.type
            ? 'emoticon' in e || t.areCustomAllowed
            : 'some' === t.type && t.allowed.some((t) => s(t, e))
        }
        function i(e) {
          return (
            e.reactions?.results
              ?.filter((e) => u(e))
              .sort((e, t) => e.chosenOrder - t.chosenOrder)
              .map((e) => e.reaction) || []
          )
        }
        function c(e) {
          return 'emoticon' in e ? e.emoticon : e.documentId
        }
        function u(e) {
          return void 0 !== e.chosenOrder
        }
        n.d(t, {
          $d: () => c,
          Bt: () => u,
          Hl: () => s,
          JE: () => a,
          UZ: () => i,
          XU: () => d,
          dT: () => r,
          yL: () => o,
        })
      },
      56266: (e, t, n) => {
        n.d(t, { If: () => s, Lo: () => a, RK: () => o })
        var r = n(6137)
        function o(e) {
          return `sticker${e}?size=m`
        }
        function a(e) {
          return e.entities?.some((e) => e.type === r.Vv.CustomEmoji)
        }
        function s(e) {
          if (!e.entities) return e
          const t = e.entities.filter((e) => e.type !== r.Vv.CustomEmoji)
          return { ...e, entities: t }
        }
      },
      93311: (e, t, n) => {
        n.d(t, {
          Js: () => l,
          NB: () => m,
          Rs: () => w,
          Tq: () => f,
          Vl: () => u,
          WS: () => I,
          Z0: () => b,
          cS: () => p,
          db: () => v,
          kK: () => y,
          kM: () => h,
          kw: () => g,
        })
        var r = n(83716),
          o = n(790),
          a = n(60782),
          s = n(82267),
          d = n(85765),
          i = n(6272)
        const c = [1, 8, 5, 2, 7, 4, 6]
        function u(e) {
          if (e)
            switch (e.type) {
              case 'userTypeBot':
              case 'userTypeRegular':
                return e.firstName || e.lastName
              case 'userTypeDeleted':
              case 'userTypeUnknown':
                return 'Deleted'
              default:
                return
            }
        }
        function l(e) {
          if (e) {
            if (m(e)) return 'Deleted Account'
            switch (e.type) {
              case 'userTypeBot':
              case 'userTypeRegular':
                if (e.firstName && e.lastName) return `${e.firstName} ${e.lastName}`
                if (e.firstName) return e.firstName
                if (e.lastName) return e.lastName
                if (e.phoneNumber) return `+${(0, i.un)(e.phoneNumber)}`
            }
          }
        }
        function f(e, t, n) {
          if (t.id === r.awM) return e('ServiceNotifications').toLowerCase()
          if (t.type && 'userTypeBot' === t.type) return e('Bot')
          if (!n) return ''
          switch (n.type) {
            case 'userStatusEmpty':
              return e('ALongTimeAgo')
            case 'userStatusLastMonth':
              return e('WithinAMonth')
            case 'userStatusLastWeek':
              return e('WithinAWeek')
            case 'userStatusOffline': {
              const { wasOnline: t } = n
              if (!t) return e('LastSeen.Offline')
              const r = (0, s.Qj)(),
                a = new Date(new Date().getTime() + 1e3 * r),
                d = new Date(1e3 * t)
              if (d >= a) return e('LastSeen.JustNow')
              const i = new Date(a.getTime() - d.getTime())
              if (i.getTime() / 1e3 < 60) return e('LastSeen.JustNow')
              if (i.getTime() / 1e3 < 3600)
                return e('LastSeen.MinutesAgo', Math.floor(i.getTime() / 1e3 / 60))
              const c = new Date()
              if ((c.setHours(0, 0, 0, 0), d > new Date(c.getTime() + 1e3 * r)))
                return i.getTime() / 1e3 < 21600
                  ? e('LastSeen.HoursAgo', Math.floor(i.getTime() / 1e3 / 60 / 60))
                  : e('LastSeen.TodayAt', (0, o.mr)(e, d))
              const u = new Date()
              return (
                u.setDate(a.getDate() - 1),
                u.setHours(0, 0, 0, 0),
                d > new Date(u.getTime() + 1e3 * r)
                  ? e('LastSeen.YesterdayAt', (0, o.mr)(e, d))
                  : e('LastSeen.AtDate', (0, o.Tu)(e, d))
              )
            }
            case 'userStatusOnline':
              return e('Online')
            case 'userStatusRecently':
              return e('Lately')
            default:
              return
          }
        }
        function h(e, t) {
          const { id: n, type: o } = e
          return !!t && n !== r.awM && 'userStatusOnline' === t.type && 'userTypeBot' !== o
        }
        function m(e) {
          return ('userTypeDeleted' === e.type || 'userTypeUnknown' === e.type) && e.id !== r.awM
        }
        function p(e) {
          return 'userTypeBot' === e.type
        }
        function g(e) {
          return !e.isContact && !p(e)
        }
        function b(e, t, n, r) {
          return (0, a.Xo)(
            e,
            (e) => {
              const o = (0, s.bp)()
              if (r && r.includes(e)) return o + 172800 - (r.length - r.indexOf(e))
              const a = t[e],
                d = n[e]
              if (!a || !d) return 0
              if ('userStatusOnline' === d.type) return d.expires
              if ('userStatusOffline' === d.type && d.wasOnline) return d.wasOnline
              switch (d.type) {
                case 'userStatusRecently':
                  return o - 86400
                case 'userStatusLastWeek':
                  return o - 604800
                case 'userStatusLastMonth':
                  return o - 18144e3
                default:
                  return 0
              }
            },
            'desc'
          )
        }
        function y(e, t, n, r, o) {
          if (!n) return e
          const a = (0, d.W)(n)
          return e.filter((e) => {
            const n = t[e]
            if (!n) return !1
            const s = e === r ? o : l(n)
            return (
              (s && a(s)) ||
              Boolean(
                n.usernames?.find((e) => {
                  let { username: t } = e
                  return a(t)
                })
              )
            )
          })
        }
        function v(e) {
          return 'number' == typeof e ? Math.abs(e) : Math.abs(Number(e))
        }
        function w(e) {
          const t = e ? v(e.id) % 7 : 0
          return c[t]
        }
        function I(e) {
          return e.usernames?.find((e) => e.isActive)?.username
        }
      },
      33555: (e, t, n) => {
        n.d(t, { R3: () => a, Rd: () => o, Sv: () => s, c$: () => i, iw: () => d })
        const r = (0, n(65116).gP)(),
          o = r.getGlobal,
          a = r.setGlobal,
          s = r.getActions,
          d = r.addActionHandler,
          i = r.withGlobal
      },
      35369: (e, t, n) => {
        n.d(t, { g: () => s, n: () => d })
        var r = n(91713),
          o = n(83716),
          a = n(863)
        const s = {
            attachMenu: { bots: {} },
            blurredTabTokens: [],
            passcode: {},
            twoFaSettings: {},
            isUpdateAvailable: !1,
            audioPlayer: { lastPlaybackRate: o.mwi },
            mediaViewer: { lastPlaybackRate: o.mwi },
            authRememberMe: !0,
            countryList: { phoneCodes: [], general: [] },
            blocked: { ids: [], totalCount: 0 },
            users: { byId: {}, statusesById: {} },
            chats: {
              listIds: {},
              isFullyLoaded: {},
              orderedPinnedIds: {},
              totalCount: {},
              byId: {},
            },
            messages: { byChatId: {}, sponsoredByChatId: {} },
            groupCalls: { byId: {} },
            attachmentSettings: { shouldCompress: !0, shouldSendGrouped: !0 },
            scheduledMessages: { byChatId: {} },
            chatFolders: { byId: {} },
            fileUploads: { byMessageLocalId: {} },
            recentEmojis: [
              'grinning',
              'kissing_heart',
              'christmas_tree',
              'brain',
              'trophy',
              'duck',
              'cherries',
            ],
            recentCustomEmojis: ['5377305978079288312'],
            stickers: {
              setsById: {},
              added: {},
              recent: { stickers: [] },
              favorite: { stickers: [] },
              greeting: { stickers: [] },
              premium: { stickers: [] },
              premiumSet: { stickers: [] },
              featured: { setIds: [] },
              forEmoji: {},
            },
            customEmojis: { lastRendered: [], byId: {}, added: {}, forEmoji: {}, statusRecent: {} },
            emojiKeywords: {},
            gifs: { saved: {} },
            topPeers: {},
            topInlineBots: {},
            activeSessions: { byHash: {}, orderedHashes: [] },
            activeWebSessions: { byHash: {}, orderedHashes: [] },
            settings: {
              byKey: {
                theme: 'light',
                shouldUseSystemTheme: !0,
                messageTextSize: a.cj ? o.b6b : a.jm ? o.ARG : o.xS7,
                animationLevel: o.CXA,
                messageSendKeyCombo: 'enter',
                canAutoLoadPhotoFromContacts: !0,
                canAutoLoadPhotoInPrivateChats: !0,
                canAutoLoadPhotoInGroups: !0,
                canAutoLoadPhotoInChannels: !0,
                canAutoLoadVideoFromContacts: !0,
                canAutoLoadVideoInPrivateChats: !0,
                canAutoLoadVideoInGroups: !0,
                canAutoLoadVideoInChannels: !0,
                canAutoLoadFileFromContacts: !1,
                canAutoLoadFileInPrivateChats: !1,
                canAutoLoadFileInGroups: !1,
                canAutoLoadFileInChannels: !1,
                autoLoadFileMaxSizeMb: 10,
                hasWebNotifications: !0,
                hasPushNotifications: !0,
                notificationSoundVolume: 5,
                canAutoPlayGifs: !0,
                canAutoPlayVideos: !0,
                shouldSuggestStickers: !0,
                shouldSuggestCustomEmoji: !0,
                shouldLoopStickers: !0,
                language: 'en',
                timeFormat: '24h',
                wasTimeFormatSetManually: !1,
                isConnectionStatusMinimized: !0,
                shouldArchiveAndMuteNewNonContact: !1,
                canTranslate: !1,
                canTranslateChats: !0,
                doNotTranslate: [],
                canDisplayChatInTitle: !0,
              },
              themes: {
                light: { isBlurred: !0, patternColor: o.ga_ },
                dark: { isBlurred: !0, patternColor: o.Vvx },
              },
              privacy: {},
              notifyExceptions: {},
            },
            serviceNotifications: [],
            trustedBotIds: [],
            transcriptions: {},
            translations: { byChatId: {} },
            byTabId: {},
            archiveSettings: { isMinimized: !1, isHidden: !1 },
          },
          d = {
            id: 0,
            isMasterTab: !1,
            isLeftColumnShown: !0,
            isChatInfoShown: !1,
            newChatMembersProgress: r.WB.Closed,
            uiReadyState: 0,
            shouldInit: !0,
            gifSearch: {},
            stickerSearch: {},
            messageLists: [],
            activeChatFolder: 0,
            tabThreads: {},
            inlineBots: { isLoading: !1, byUsername: {} },
            globalSearch: {},
            userSearch: {},
            localTextSearch: { byChatThreadKey: {} },
            localMediaSearch: { byChatThreadKey: {} },
            management: { byChatId: {} },
            mediaViewer: { volume: o.QxZ, playbackRate: o.mwi, isMuted: !1 },
            audioPlayer: { volume: o.QxZ, playbackRate: o.mwi, isMuted: !1 },
            forwardMessages: {},
            pollResults: {},
            payment: {},
            notifications: [],
            dialogs: [],
            activeReactions: {},
            shouldShowContextMenuHint: !0,
            activeDownloads: { byChatId: {} },
            statistics: { byChatId: {} },
            pollModal: { isOpen: !1 },
            requestedTranslations: { byChatId: {} },
          }
      },
      53475: (e, t, n) => {
        n.d(t, {
          B1: () => c,
          BK: () => C,
          Cn: () => I,
          Dd: () => b,
          GL: () => f,
          Jr: () => v,
          Mg: () => i,
          Pi: () => p,
          SL: () => u,
          XG: () => w,
          a4: () => l,
          fZ: () => h,
          iX: () => y,
          vv: () => g,
        })
        var r = n(83716),
          o = n(60782),
          a = n(11192),
          s = n(4907),
          d = n(84112)
        function i(e, t, n) {
          return { ...e, chats: { ...e.chats, listIds: { ...e.chats.listIds, [t]: n } } }
        }
        function c(e, t, n) {
          const { [t]: r } = e.chats.listIds,
            o = r?.length ? n.filter((e) => !r.includes(e)) : n
          return r && !o.length ? e : i(e, t, [...(r || []), ...o])
        }
        function u(e, t) {
          return { ...e, chats: { ...e.chats, byId: t } }
        }
        function l(e, t, n, r) {
          let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          const { byId: a } = e.chats,
            s = m(e, t, n, r, o)
          return s ? u(e, { ...a, [t]: s }) : e
        }
        function f(e, t) {
          const n = Object.keys(t).reduce((n, r) => {
            const o = m(e, r, t[r])
            return o && (n[r] = o), n
          }, {})
          return (e = u(e, { ...e.chats.byId, ...n }))
        }
        function h(e, t) {
          const { byId: n } = e.chats
          let r = !1
          const o = Object.keys(t).reduce((o, a) => {
            if (!n[a] || (n[a].isMin && !t[a].isMin)) {
              const n = m(e, a, t[a])
              n && ((o[a] = n), r || (r = !0))
            }
            return o
          }, {})
          return r ? (e = u(e, { ...n, ...o })) : e
        }
        function m(e, t, n, r) {
          let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          const { byId: s } = e.chats,
            i = s[t],
            c = [],
            u = n.isMin && i && !i.isMin
          u &&
            (c.push('isMin', 'accessHash'),
            Object.keys(n).forEach((e) => {
              const t = e
              void 0 === n[t] && c.push(t)
            })),
            a || c.push('unreadReactionsCount'),
            (0, d.A)(i?.usernames, n.usernames) && c.push('usernames')
          const l = { ...i, ...(0, o.CE)(n, c), ...(r && { photos: [r, ...(i.photos || [])] }) }
          if (l.id && l.type) return l
        }
        function p(e, t, n) {
          const o = n === r.WSp ? 'archived' : 'active'
          let a = e.chats.listIds
          return (
            Object.keys(a).forEach((e) => {
              const n = a[e] || []
              e !== o || n.includes(t)
                ? e !== o && n.includes(t) && (a = { ...a, [e]: n.filter((e) => e !== t) })
                : (a = { ...a, [e]: [...n, t] })
            }),
            l((e = { ...e, chats: { ...e.chats, listIds: a } }), t, { folderId: n || void 0 })
          )
        }
        function g(e, t, n) {
          const r = 'active' === t ? 'all' : 'archived'
          return {
            ...e,
            chats: {
              ...e.chats,
              ...(n.orderedPinnedIds && {
                orderedPinnedIds: { ...e.chats.orderedPinnedIds, [t]: n.orderedPinnedIds },
              }),
              totalCount: { ...e.chats.totalCount, [r]: n.totalChatCount },
              isFullyLoaded: { ...e.chats.isFullyLoaded, [t]: !1 },
            },
          }
        }
        function b(e, t) {
          const n = (0, a.Ek)(e, t)
          if (!n) return e
          const { [n]: r } = e.chats.listIds
          return (
            r &&
              (e = i(
                e,
                n,
                r.filter((e) => e !== t)
              )),
            l(e, t, { isNotJoined: !0 })
          )
        }
        function y(e, t, n) {
          const r = t.fullInfo?.members,
            a = new Set(n.map((e) => e.userId)),
            s = [...(r?.filter((e) => !a.has(e.userId)) || []), ...n],
            d =
              r?.map((e) => {
                let { userId: t } = e
                return t
              }) || [],
            i = s.map((e) => {
              let { userId: t } = e
              return t
            })
          if ((0, o.et)(d, i)) return e
          const c = s.filter((e) => {
            let { isAdmin: t, isOwner: n } = e
            return t || n
          })
          return l(e, t.id, {
            fullInfo: { ...t.fullInfo, members: s, adminMembersById: (0, o.ee)(c, 'userId') },
          })
        }
        function v(e, t, n) {
          return l(e, t, {
            listedTopicIds: (0, o.Tw)([...(e.chats.byId[t]?.listedTopicIds || []), ...n]),
          })
        }
        function w(e, t, n, r) {
          const d = (0, a.Z1)(e, t),
            i = (0, o.ee)(r, 'id')
          return (
            (e = l(e, t, { topics: { ...d?.topics, ...i }, topicsCount: n })),
            r.forEach((n) => {
              ;(e = (0, s.sN)(e, t, n.id, { firstMessageId: n.id })),
                (e = (0, s.Xg)(e, t, n.id, {
                  lastMessageId: n.lastMessageId,
                  threadId: n.id,
                  chatId: t,
                }))
            }),
            e
          )
        }
        function I(e, t, n, r) {
          const o = (0, a.Z1)(e, t)
          if (!o) return e
          const d = o?.topics?.[n],
            i = { ...d, ...r }
          return i.id
            ? ((e = l(e, t, { topics: { ...(o.topics || {}), [n]: i } })),
              (e = (0, s.sN)(e, t, i.id, { firstMessageId: i.id })),
              (e = (0, s.Xg)(e, t, i.id, {
                lastMessageId: i.lastMessageId,
                threadId: i.id,
                chatId: t,
              })))
            : e
        }
        function C(e, t, n) {
          const r = (0, a.Z1)(e, t)?.topics || []
          return l(e, t, { topics: (0, o.CE)(r, [n]) })
        }
      },
      25260: (e, t, n) => {
        n.d(t, {
          O4: () => ne,
          iX: () => r.iX,
          c_: () => o.c_,
          fZ: () => r.fZ,
          m6: () => o.m6,
          aK: () => ee,
          aJ: () => Q,
          zn: () => Z,
          Sh: () => P,
          $S: () => o.$S,
          ZI: () => ie,
          CE: () => Pe,
          Kn: () => de,
          bp: () => ve,
          WY: () => we,
          ft: () => R,
          K4: () => o.K4,
          bV: () => o.bV,
          GK: () => k,
          BK: () => r.BK,
          M6: () => o.M6,
          i9: () => o.i9,
          Dd: () => r.Dd,
          vy: () => y,
          rB: () => re,
          IR: () => Me,
          g_: () => m,
          Mg: () => r.Mg,
          SL: () => r.SL,
          Pb: () => $,
          w3: () => o.w3,
          BI: () => Y,
          O8: () => o.O8,
          lr: () => X,
          pf: () => o.pf,
          ps: () => L,
          s5: () => I,
          y9: () => o.y9,
          fS: () => be,
          bs: () => he,
          _7: () => ge,
          Q$: () => fe,
          Dq: () => ye,
          vT: () => le,
          QD: () => pe,
          QH: () => me,
          Ob: () => o.Ob,
          a4: () => r.a4,
          B1: () => r.B1,
          vv: () => r.vv,
          Pi: () => r.Pi,
          cY: () => o.cY,
          GL: () => r.GL,
          Wy: () => o.Wy,
          AA: () => g,
          cU: () => l,
          wV: () => o.wV,
          cq: () => o.cq,
          $G: () => o.$G,
          rq: () => h,
          No: () => B,
          Og: () => O,
          xv: () => F,
          px: () => D,
          xj: () => o.xj,
          Jr: () => r.Jr,
          c1: () => z,
          z5: () => H,
          qr: () => U,
          dx: () => V,
          fw: () => J,
          H9: () => q,
          kM: () => Ce,
          qt: () => Ee,
          TD: () => Ae,
          HN: () => te,
          ff: () => o.ff,
          vu: () => se,
          cQ: () => ce,
          et: () => b,
          ql: () => ke,
          P4: () => o.P4,
          TM: () => ue,
          Fn: () => o.Fn,
          ze: () => Ie,
          yC: () => Se,
          fH: () => c,
          Rg: () => f,
          z3: () => u,
          IM: () => p,
          sN: () => o.sN,
          Xg: () => o.Xg,
          j6: () => o.j6,
          lG: () => o.lG,
          Cn: () => r.Cn,
          XG: () => r.XG,
          IE: () => oe,
          Nq: () => S,
          Lm: () => M,
          Q3: () => T,
          eD: () => E,
        })
        var r = n(53475),
          o = n(4907),
          a = n(60782),
          s = n(11192),
          d = n(44271),
          i = n(65054)
        function c(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [c = (0, i._w)()] = o
          return (0, d.i)(
            e,
            { stickerSearch: { ...(0, s.jU)(e, c).stickerSearch, hash: t, resultIds: n } },
            c
          )
        }
        function u(e, t, n, r) {
          const o = r.map((t) => {
              const n = e.stickers.setsById[t.id]
              return n ? { ...n, ...t } : t
            }),
            s = r.map((e) => e.id)
          return 'search' === t
            ? {
                ...e,
                stickers: {
                  ...e.stickers,
                  setsById: { ...e.stickers.setsById, ...(0, a.ee)(o, 'id') },
                },
              }
            : {
                ...e,
                stickers: {
                  ...e.stickers,
                  setsById: { ...e.stickers.setsById, ...(0, a.ee)(o, 'id') },
                  [t]: {
                    ...e.stickers[t],
                    hash: n,
                    setIds: [...(e.stickers[t].setIds || []), ...s],
                  },
                },
              }
        }
        function l(e, t, n) {
          const r = n.map((t) => {
              const n = e.stickers.setsById[t.id]
              return n ? { ...n, ...t } : t
            }),
            o = n
              .map((e) => e.stickers)
              .flat()
              .filter(Boolean),
            s = n.map((e) => e.id)
          return {
            ...e,
            stickers: {
              ...e.stickers,
              setsById: { ...e.stickers.setsById, ...(0, a.ee)(r, 'id') },
            },
            customEmojis: {
              ...e.customEmojis,
              added: {
                ...e.customEmojis.added,
                hash: t,
                setIds: [...(e.customEmojis.added.setIds || []), ...s],
              },
              byId: { ...e.customEmojis.byId, ...(0, a.ee)(o, 'id') },
            },
          }
        }
        function f(e, t, n) {
          const r = e.stickers.setsById[t] || {},
            o = n.isEmoji || r.isEmoji,
            s = (o ? e.customEmojis.added.setIds : e.stickers.added.setIds) || []
          let d = s
          n.installedDate && !n.isArchived && s && !s.includes(t) && (d = [t, ...d]),
            !n.installedDate && s?.includes(t) && (d = d.filter((e) => e !== t))
          const i = o && n.stickers && (0, a.ee)(n.stickers, 'id')
          return {
            ...e,
            stickers: {
              ...e.stickers,
              added: { ...e.stickers.added, ...(!o && { setIds: d }) },
              setsById: { ...e.stickers.setsById, [t]: { ...r, ...n } },
            },
            customEmojis: {
              ...e.customEmojis,
              byId: { ...e.customEmojis.byId, ...i },
              added: { ...e.customEmojis.added, ...(o && { setIds: d }) },
            },
          }
        }
        function h(e, t, n, r) {
          for (var o = arguments.length, a = new Array(o > 4 ? o - 4 : 0), c = 4; c < o; c++)
            a[c - 4] = arguments[c]
          let [u = (0, i._w)()] = a
          const { results: l } = (0, s.jU)(e, u).gifSearch
          let f
          if (t || !l) f = n
          else {
            const e = new Set(l.map((e) => e.id))
            f = [...l, ...n.filter((t) => !e.has(t.id))]
          }
          return (0, d.i)(
            e,
            { gifSearch: { ...(0, s.jU)(e, u).gifSearch, offset: r, results: f } },
            u
          )
        }
        function m(e, t) {
          return { ...e, animatedEmojis: t }
        }
        function p(e, t, n, r) {
          const o = [...(0, s.Pk)(e, t), ...(n || [])],
            d = (0, a.Tw)(
              o.map((e) => {
                let { id: t } = e
                return t
              })
            ),
            i = (0, a.ee)(o, 'id'),
            c = d.map((e) => i[e])
          return { ...e, stickers: { ...e.stickers, forEmoji: { emoji: t, stickers: c, hash: r } } }
        }
        function g(e, t) {
          const n = (0, s.Ee)(e, t),
            r = (0, a.Tw)(
              n.map((e) => {
                let { id: t } = e
                return t
              })
            ),
            o = (0, a.ee)(n, 'id'),
            d = r.map((e) => o[e])
          return { ...e, customEmojis: { ...e.customEmojis, forEmoji: { emoji: t, stickers: d } } }
        }
        function b(e, t, n) {
          return {
            ...e,
            customEmojis: {
              ...e.customEmojis,
              statusRecent: { ...e.customEmojis.statusRecent, hash: t, emojis: n },
            },
          }
        }
        function y(e) {
          if (e.stickers.forEmoji) {
            const { emoji: t, stickers: n, hash: r } = e.stickers.forEmoji
            return t ? p(e, t, n, r) : e
          }
          if (e.customEmojis.forEmoji) {
            const { emoji: t } = e.customEmojis.forEmoji
            return t ? g(e, t) : e
          }
          return e
        }
        var v = n(70735),
          w = n(84112)
        function I(e, t) {
          return { ...e, users: { ...e.users, byId: t } }
        }
        function C(e, t) {
          const { userIds: n } = e.contactList || {}
          if (!n) return e
          const r = t.filter((e) => e?.isContact && !n.includes(e.id)).map((e) => e.id)
          return 0 === r.length ? e : { ...e, contactList: { userIds: [...r, ...n] } }
        }
        function S(e, t, n) {
          const { byId: r } = e.users,
            o = A(e, t, n)
          return o ? I((e = C(e, [o])), { ...r, [t]: o }) : e
        }
        function E(e, t) {
          const n = Object.keys(t).reduce((n, r) => {
            const o = A(e, r, t[r])
            return o && (n[r] = o), n
          }, {})
          return (e = C((e = I(e, { ...e.users.byId, ...n })), Object.values(n)))
        }
        function P(e, t) {
          const { byId: n } = e.users
          let r = !1
          const o = Object.keys(t).reduce((o, a) => {
            if (!n[a] || (n[a].isMin && !t[a].isMin)) {
              const n = A(e, a, t[a])
              n && ((o[a] = n), r || (r = !0))
            }
            return o
          }, {})
          return r ? (e = C((e = I(e, { ...n, ...o })), Object.values(o))) : e
        }
        function A(e, t, n) {
          const { byId: r } = e.users,
            o = r[t],
            s = []
          n.isMin &&
            o &&
            !o.isMin &&
            (s.push('isMin', 'accessHash'),
            Object.keys(n).forEach((e) => {
              const t = e
              void 0 === n[t] && s.push(t)
            })),
            (0, w.A)(o?.usernames, n.usernames) && s.push('usernames')
          const d = { ...o, ...(0, a.CE)(n, s) }
          if (d.id && d.type) return d
        }
        function k(e, t) {
          const { byId: n } = e.users,
            { userIds: o } = e.contactList || {}
          return (
            (e = I((e = { ...e, contactList: { userIds: o ? o.filter((e) => e !== t) : v.D } }), {
              ...n,
              [t]: { ...n[t], isContact: void 0 },
            })),
            (0, r.a4)(e, t, { settings: void 0 })
          )
        }
        function M(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return (0, d.i)(e, { userSearch: { ...(0, s.jU)(e, a).userSearch, ...t } }, a)
        }
        function T(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return M(e, { fetchingStatus: t }, a)
        }
        function N(e, t, n) {
          const { byId: r } = e.users,
            o = r[t]
          return o && o.fullInfo ? S(e, t, { ...o, fullInfo: { ...o.fullInfo, isBlocked: n } }) : e
        }
        function L(e, t) {
          return { ...e, users: { ...e.users, statusesById: t } }
        }
        function Z(e, t) {
          const { statusesById: n } = e.users,
            r = Object.keys(t).filter((e) => !n[e])
          return r.length ? (e = L(e, { ...n, ...(0, a.ei)(t, r) })) : e
        }
        function R(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, i._w)()] = n
          return (0, d.i)(e, { newContact: void 0 }, o)
        }
        const _ = (e) => `${e.chatId}_${e.id}`
        function B(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return (0, d.i)(e, { globalSearch: { ...(0, s.jU)(e, a).globalSearch, ...t } }, a)
        }
        function O(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return B(e, { currentContent: t }, a)
        }
        function D(e, t, n, r, o) {
          for (var d = arguments.length, c = new Array(d > 5 ? d - 5 : 0), u = 5; u < d; u++)
            c[u - 5] = arguments[u]
          let [l = (0, i._w)()] = c
          const { resultsByType: f } = (0, s.jU)(e, l).globalSearch || {},
            h = t.reduce((e, t) => ((e[_(t)] = t), e), {}),
            m = f?.[r]?.foundIds
          if (void 0 !== m && Object.keys(h).every((e) => m.includes(_(h[e]))))
            return F(e, { messages: !1 }, l)
          const p = m || [],
            g = t.map((e) => _(e)),
            b = Array.prototype.concat(p, g),
            y = (0, a.et)(p, b) ? p : b
          return B(
            (e = F(e, { messages: !1 }, l)),
            {
              resultsByType: {
                ...((0, s.jU)(e, l).globalSearch || {}).resultsByType,
                [r]: { totalCount: n, nextOffsetId: o, foundIds: y },
              },
            },
            l
          )
        }
        function F(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return B(
            e,
            { fetchingStatus: { ...(0, s.jU)(e, a).globalSearch.fetchingStatus, ...t } },
            a
          )
        }
        var x = n(56112)
        function j(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [c = (0, i._w)()] = o
          return (0, d.i)(
            e,
            {
              localTextSearch: {
                byChatThreadKey: { ...(0, s.jU)(e, c).localTextSearch.byChatThreadKey, [t]: n },
              },
            },
            c
          )
        }
        function U(e, t, n, r, o) {
          for (var a = arguments.length, d = new Array(a > 5 ? a - 5 : 0), c = 5; c < a; c++)
            d[c - 5] = arguments[c]
          let [u = (0, i._w)()] = d
          const l = (0, x.uw)(t, n)
          return j(
            e,
            l,
            { ...(0, s.jU)(e, u).localTextSearch.byChatThreadKey[l], isActive: r, query: o },
            u
          )
        }
        function $(e, t, n, r, o, a) {
          for (var d = arguments.length, c = new Array(d > 6 ? d - 6 : 0), u = 6; u < d; u++)
            c[u - 6] = arguments[u]
          let [l = (0, i._w)()] = c
          const f = (0, x.uw)(t, n)
          return j(
            e,
            f,
            {
              ...(0, s.jU)(e, l).localTextSearch.byChatThreadKey[f],
              results: { foundIds: r, totalCount: o, nextOffsetId: a },
            },
            l
          )
        }
        function V(e, t, n, r, o, d) {
          for (var c = arguments.length, u = new Array(c > 6 ? c - 6 : 0), l = 6; l < c; l++)
            u[l - 6] = arguments[l]
          let [f = (0, i._w)()] = u
          const h = (0, x.uw)(t, n),
            { results: m } = (0, s.jU)(e, f).localTextSearch.byChatThreadKey[h] || {},
            p = m?.foundIds || [],
            g = K((0, a.Tw)(Array.prototype.concat(p, r))),
            b = (0, a.et)(p, g) ? p : g
          return $(e, t, n, b, o, d, f)
        }
        function W(e, t, n, r) {
          for (var o = arguments.length, a = new Array(o > 4 ? o - 4 : 0), c = 4; c < o; c++)
            a[c - 4] = arguments[c]
          let [u = (0, i._w)()] = a
          const l = (0, x.uw)(t, n)
          return (0, d.i)(
            e,
            {
              localMediaSearch: {
                byChatThreadKey: { ...(0, s.jU)(e, u).localMediaSearch.byChatThreadKey, [l]: r },
              },
            },
            u
          )
        }
        function H(e, t, n, r) {
          for (var o = arguments.length, a = new Array(o > 4 ? o - 4 : 0), d = 4; d < o; d++)
            a[d - 4] = arguments[d]
          let [c = (0, i._w)()] = a
          const u = (0, x.uw)(t, n)
          return W(
            e,
            t,
            n,
            { ...(0, s.jU)(e, c).localMediaSearch.byChatThreadKey[u], currentType: r },
            c
          )
        }
        function G(e, t, n, r, o, a, d) {
          for (var c = arguments.length, u = new Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++)
            u[l - 7] = arguments[l]
          let [f = (0, i._w)()] = u
          const h = (0, x.uw)(t, n)
          return W(
            e,
            t,
            n,
            {
              ...(0, s.jU)(e, f).localMediaSearch.byChatThreadKey[h],
              resultsByType: {
                ...((0, s.jU)(e, f).localMediaSearch.byChatThreadKey[h] || {}).resultsByType,
                [r]: { foundIds: o, totalCount: a, nextOffsetId: d },
              },
            },
            f
          )
        }
        function z(e, t, n, r, o, d, c) {
          for (var u = arguments.length, l = new Array(u > 7 ? u - 7 : 0), f = 7; f < u; f++)
            l[f - 7] = arguments[f]
          let [h = (0, i._w)()] = l
          const m = (0, x.uw)(t, n),
            { resultsByType: p } = (0, s.jU)(e, h).localMediaSearch.byChatThreadKey[m] || {},
            g = p?.[r] ? p[r].foundIds : [],
            b = K((0, a.Tw)(Array.prototype.concat(g, o))),
            y = (0, a.et)(g, b) ? g : b
          return G(e, t, n, r, y, d, c, h)
        }
        function K(e) {
          return e.sort((e, t) => t - e)
        }
        function q(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return (0, d.i)(e, { management: { ...(0, s.jU)(e, a).management, progress: t } }, a)
        }
        function J(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [c = (0, i._w)()] = o
          const { management: u } = (0, s.jU)(e, c)
          return (0, d.i)(
            e,
            {
              management: {
                ...u,
                byChatId: { ...u.byChatId, [t]: { ...(u.byChatId[t] || {}), ...n } },
              },
            },
            c
          )
        }
        function Y(e, t) {
          return { ...e, settings: { ...e.settings, byKey: { ...e.settings.byKey, ...t } } }
        }
        function X(e, t, n) {
          return {
            ...e,
            settings: {
              ...e.settings,
              themes: { ...e.settings.themes, [t]: { ...(e.settings.themes[t] || {}), ...n } },
            },
          }
        }
        function Q(e, t) {
          return (
            t.forEach((t) => {
              const { chatId: n, ...r } = t
              e = ee(e, n, r)
            }),
            e
          )
        }
        function ee(e, t, n) {
          return {
            ...e,
            settings: {
              ...e.settings,
              notifyExceptions: { ...e.settings.notifyExceptions, [t]: n },
            },
          }
        }
        function te(e, t, n, r) {
          switch (t) {
            case 'contact':
              return Y(e, {
                ...(void 0 !== n && { hasPrivateChatsNotifications: !n }),
                ...(void 0 !== r && { hasPrivateChatsMessagePreview: r }),
              })
            case 'group':
              return Y(e, {
                ...(void 0 !== n && { hasGroupNotifications: !n }),
                ...(void 0 !== r && { hasGroupMessagePreview: r }),
              })
            case 'broadcast':
              return Y(e, {
                ...(void 0 !== n && { hasBroadcastNotifications: !n }),
                ...(void 0 !== r && { hasBroadcastMessagePreview: r }),
              })
          }
        }
        function ne(e, t) {
          return (
            (e = N(e, t, !0)),
            {
              ...e,
              blocked: {
                ...e.blocked,
                ids: [t, ...e.blocked.ids],
                totalCount: e.blocked.totalCount + 1,
              },
            }
          )
        }
        function re(e, t) {
          return (
            (e = N(e, t, !1)),
            {
              ...e,
              blocked: {
                ...e.blocked,
                ids: e.blocked.ids.filter((e) => e !== t),
                totalCount: e.blocked.totalCount - 1,
              },
            }
          )
        }
        function oe(e, t) {
          return { ...e, twoFaSettings: { ...e.twoFaSettings, ...t } }
        }
        var ae = n(35369)
        function se(e, t) {
          return { ...e, passcode: { ...e.passcode, ...t } }
        }
        function de(e) {
          return { ...e, passcode: {} }
        }
        function ie(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          const {
            theme: n,
            shouldUseSystemTheme: r,
            animationLevel: o,
            language: a,
          } = e.settings.byKey
          return {
            ...ae.g,
            passcode: e.passcode,
            settings: {
              ...ae.g.settings,
              byKey: {
                ...ae.g.settings.byKey,
                theme: n,
                shouldUseSystemTheme: r,
                animationLevel: o,
                language: a,
              },
            },
            ...(t && {
              byTabId: Object.values(e.byTabId).reduce((e, t) => {
                let { id: n, isMasterTab: r } = t
                return (e[n] = { ...ae.n, isMasterTab: r, id: n }), e
              }, {}),
            }),
          }
        }
        function ce(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return (0, d.i)(e, { payment: { ...(0, s.jU)(e, a).payment, ...t } }, a)
        }
        function ue(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return ce(e, { shippingOptions: t }, a)
        }
        function le(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return ce(e, { requestId: t }, a)
        }
        function fe(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return ce(e, { step: t }, a)
        }
        function he(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          const {
            title: s,
            text: d,
            amount: c,
            currency: u,
            isTest: l,
            photo: f,
            isRecurring: h,
            recurringTermsUrl: m,
            maxTipAmount: p,
            suggestedTipAmounts: g,
          } = t
          return ce(
            e,
            {
              invoice: {
                title: s,
                text: d,
                photo: f,
                amount: c,
                currency: u,
                isTest: l,
                isRecurring: h,
                recurringTermsUrl: m,
                maxTipAmount: p,
                suggestedTipAmounts: g,
              },
            },
            a
          )
        }
        function me(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return ce(e, { stripeCredentials: { ...t } }, a)
        }
        function pe(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return ce(e, { smartGlocalCredentials: { ...t } }, a)
        }
        function ge(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return ce(e, { ...t }, a)
        }
        function be(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return ce(e, { confirmPaymentUrl: t }, a)
        }
        function ye(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [s = (0, i._w)()] = o
          if (!t || !n) return ce(e, { receipt: void 0 }, s)
          const { invoice: d } = n.content,
            { photo: c, text: u, title: l } = d || {}
          return ce(e, { receipt: { ...t, photo: c, text: u, title: l } }, s)
        }
        function ve(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, i._w)()] = n
          return (0, d.i)(e, { payment: {} }, o)
        }
        function we(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, i._w)()] = n
          return ce(e, { isPaymentModalOpen: void 0, isExtendedMedia: void 0 }, o)
        }
        function Ie(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [c = (0, i._w)()] = o
          return (0, d.i)(
            e,
            { statistics: { byChatId: { ...(0, s.jU)(e, c).statistics.byChatId, [t]: n } } },
            c
          )
        }
        function Ce(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          return (0, d.i)(
            e,
            { statistics: { ...(0, s.jU)(e, a).statistics, currentMessage: t } },
            a
          )
        }
        function Se(e, t, n, r) {
          for (var o = arguments.length, a = new Array(o > 4 ? o - 4 : 0), c = 4; c < o; c++)
            a[c - 4] = arguments[c]
          let [u = (0, i._w)()] = a
          const { statistics: l } = (0, s.jU)(e, u)
          return (0, d.i)(
            e,
            {
              statistics: {
                ...l,
                byChatId: { ...l.byChatId, [t]: { ...(l.byChatId[t] || {}), [n]: r } },
              },
            },
            u
          )
        }
        function Ee(e, t, n, r, o) {
          const a = (0, s.HG)(e, t, r)
          return {
            ...e,
            translations: {
              ...e.translations,
              byChatId: {
                ...e.translations.byChatId,
                [t]: {
                  ...e.translations.byChatId[t],
                  byLangCode: {
                    ...e.translations.byChatId[t]?.byLangCode,
                    [r]: { ...a, [n]: { ...a[n], ...o } },
                  },
                },
              },
            },
          }
        }
        function Pe(e, t, n) {
          const r = e.translations.byChatId[t]
          if (!r) return e
          const { byLangCode: o } = r,
            s = Object.keys(o).reduce((e, t) => {
              const r = (0, a.CE)(o[t], [n])
              return Object.keys(r).length && (e[t] = r), e
            }, {})
          return {
            ...e,
            translations: {
              ...e.translations,
              byChatId: { ...e.translations.byChatId, [t]: { ...r, byLangCode: s } },
            },
          }
        }
        function Ae(e, t, n, r, o) {
          return (
            n.forEach((n, a) => {
              e = Ee(e, t, n, r, { text: o[a], isPending: !1 })
            }),
            e
          )
        }
        function ke(e, t, n, r) {
          for (var o = arguments.length, a = new Array(o > 4 ? o - 4 : 0), c = 4; c < o; c++)
            a[c - 4] = arguments[c]
          let [u = (0, i._w)()] = a
          const l = (0, s.jU)(e, u)
          return (0, d.i)(
            e,
            {
              requestedTranslations: {
                ...l.requestedTranslations,
                byChatId: {
                  ...l.requestedTranslations.byChatId,
                  [t]: {
                    ...l.requestedTranslations.byChatId[t],
                    manualMessages: {
                      ...l.requestedTranslations.byChatId[t]?.manualMessages,
                      [n]: r,
                    },
                  },
                },
              },
            },
            u
          )
        }
        function Me(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), c = 3; c < r; c++)
            o[c - 3] = arguments[c]
          let [u = (0, i._w)()] = o
          const l = (0, s.jU)(e, u),
            f = l.requestedTranslations.byChatId[t]?.manualMessages
          if (!f) return e
          const h = (0, a.CE)(f, [n])
          return (0, d.i)(
            e,
            {
              requestedTranslations: {
                ...l.requestedTranslations,
                byChatId: {
                  ...l.requestedTranslations.byChatId,
                  [t]: { ...l.requestedTranslations.byChatId[t], manualMessages: h },
                },
              },
            },
            u
          )
        }
      },
      4907: (e, t, n) => {
        n.d(t, {
          $G: () => Z,
          $S: () => A,
          Fn: () => R,
          K4: () => I,
          M6: () => B,
          O8: () => p,
          Ob: () => O,
          P4: () => w,
          Wy: () => u,
          Xg: () => M,
          bV: () => C,
          cY: () => v,
          c_: () => y,
          cq: () => L,
          ff: () => E,
          i9: () => D,
          j6: () => T,
          lG: () => F,
          m6: () => b,
          pf: () => g,
          sN: () => h,
          w3: () => N,
          wV: () => _,
          xj: () => S,
          y9: () => k,
        })
        var r = n(6137),
          o = n(83716),
          a = n(11192),
          s = n(60782),
          d = n(44271),
          i = n(65054),
          c = n(56112)
        function u(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r._f,
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'thread',
            c = arguments.length > 4 ? arguments[4] : void 0,
            u = arguments.length > 5 ? arguments[5] : void 0
          for (var l = arguments.length, f = new Array(l > 6 ? l - 6 : 0), h = 6; h < l; h++)
            f[h - 6] = arguments[h]
          let [m = (0, i._w)()] = f
          const { messageLists: p } = (0, a.jU)(e, m)
          let g = p
          if (c || (o.Cgt && !o.NuY)) g = t ? [{ chatId: t, threadId: n, type: s }] : []
          else if (t) {
            const e = p[p.length - 1]
            ;(e && e.chatId === t && e.threadId === n && e.type === s) ||
              (g =
                e && (e.chatId === o.mzl || u)
                  ? [...p.slice(0, -1), { chatId: t, threadId: n, type: s }]
                  : [...p, { chatId: t, threadId: n, type: s }])
          } else g = p.slice(0, -1)
          return (0, d.i)(e, { messageLists: g }, m)
        }
        function l(e, t, n) {
          return m(e, t, { byId: n })
        }
        function f(e, t, n, r) {
          for (var o = arguments.length, s = new Array(o > 4 ? o - 4 : 0), c = 4; c < o; c++)
            s[c - 4] = arguments[c]
          let [u = (0, i._w)()] = s
          const l = (0, a.jU)(e, u),
            f = l.tabThreads[t]?.[n] || {}
          return (0, d.i)(
            e,
            { tabThreads: { ...l.tabThreads, [t]: { ...l.tabThreads[t], [n]: { ...f, ...r } } } },
            u
          )
        }
        function h(e, t, n, r) {
          const o = e.messages.byChatId[t]
          if (r.listedIds?.length) {
            const o = r.listedIds[r.listedIds.length - 1]
            o &&
              (e = (function (e, t, n, r) {
                const o = (0, a.Z1)(e, t)
                return o?.topics?.[n]
                  ? {
                      ...e,
                      chats: {
                        ...e.chats,
                        byId: {
                          ...e.chats.byId,
                          [t]: {
                            ...o,
                            topics: { ...o.topics, [n]: { ...o.topics[n], lastMessageId: r } },
                          },
                        },
                      },
                    }
                  : e
              })(e, t, n, o))
          }
          return m(e, t, {
            threadsById: { ...o?.threadsById, [n]: { ...o?.threadsById[n], ...r } },
          })
        }
        function m(e, t, n) {
          const r = e.messages.byChatId[t] || { byId: {}, threadsById: {} }
          return {
            ...e,
            messages: { ...e.messages, byChatId: { ...e.messages.byChatId, [t]: { ...r, ...n } } },
          }
        }
        function p(e, t, n, r, o) {
          for (var a = arguments.length, s = new Array(a > 5 ? a - 5 : 0), d = 5; d < a; d++)
            s[d - 5] = arguments[d]
          let [c = (0, i._w)()] = s
          return (
            'viewportIds' === r && (e = g(e, t, n, 'lastViewportIds', o)), f(e, t, n, { [r]: o }, c)
          )
        }
        function g(e, t, n, r, o) {
          return h(e, t, n, { [r]: o })
        }
        function b(e, t) {
          const n = t.reduce(
            (e, t) => (e[t.chatId] || (e[t.chatId] = {}), (e[t.chatId][t.id] = t), e),
            {}
          )
          return (
            Object.keys(n).forEach((t) => {
              e = y(e, t, n[t])
            }),
            e
          )
        }
        function y(e, t, n) {
          const r = (0, a.Zw)(e, t)
          return r && Object.keys(n).every((e) => Boolean(r[Number(e)]))
            ? e
            : l(e, t, { ...n, ...r })
        }
        function v(e, t, n, r) {
          const o = (0, a.Zw)(e, t) || {},
            s = { ...o[n], ...r }
          return s.id ? l(e, t, { ...o, [n]: s }) : e
        }
        function w(e, t, n, r) {
          const o = (0, a.yB)(e, t) || {},
            s = { ...o[n], ...r }
          return s.id ? N(e, t, { ...o, [n]: s }) : e
        }
        function I(e, t, n) {
          const o = (0, a.Zw)(e, t)
          if (!o) return e
          const d = (0, s.CE)(o, n),
            i = Object.values((0, s.q0)(o, n)).filter((e) => {
              let { forwardInfo: t } = e
              return t?.isLinkedChannelPost
            })
          return (
            Object.keys(e.messages.byChatId[t].threadsById)
              .map(Number)
              .forEach((o) => {
                const s = (0, a.tZ)(e, t, o)
                let d = (0, a.gb)(e, t, o),
                  i = (0, a.KB)(e, t, o),
                  u = (0, a.KB)(e, t, r._f),
                  l = s?.messagesCount
                n.forEach((e) => {
                  d?.includes(e) &&
                    ((d = d.filter((t) => t !== e)), void 0 === l || (0, c.AJ)(e) || (l -= 1)),
                    i?.includes(e) && (i = i.filter((t) => t !== e)),
                    u?.includes(e) && (u = u.filter((t) => t !== e))
                }),
                  Object.values(e.byTabId).forEach((r) => {
                    let { id: s } = r,
                      d = (0, a.qC)(e, t, o, s),
                      i = (0, a.Cb)(e, t, o, s)
                    n.forEach((e) => {
                      d?.includes(e) && (d = d.filter((t) => t !== e)),
                        i?.includes(e) && (i = i.filter((t) => t !== e))
                    }),
                      (e = p(e, t, o, 'outlyingIds', d, s)),
                      (e = p(e, t, o, 'viewportIds', i, s))
                  }),
                  (e = g(e, t, o, 'listedIds', d)),
                  (e = g(e, t, o, 'pinnedIds', i)),
                  (e = g(e, t, r._f, 'pinnedIds', u)),
                  s && void 0 !== l && (e = M(e, t, o, { messagesCount: l }))
              }),
            i.length &&
              Object.values(e.byTabId).forEach((n) => {
                let { id: r } = n
                const o = (0, a.Bt)(e, r),
                  s = o && o.chatId === t && 'thread' === o.type,
                  d = o?.threadId
                i.forEach((n) => {
                  const { fromChatId: o, fromMessageId: i } = n.forwardInfo,
                    c = (0, a.hj)(e, o, i)
                  s && d === i && (e = u(e, t, void 0, void 0, void 0, void 0, r)),
                    c && (e = v(e, o, i, { repliesThreadInfo: void 0 }))
                })
              }),
            (e = l(e, t, d))
          )
        }
        function C(e, t, n) {
          const o = (0, a.yB)(e, t)
          if (!o) return e
          const d = (0, s.CE)(o, n)
          let i = (0, a.qy)(e, t, r._f)
          return (
            i &&
              (n.forEach((e) => {
                i.includes(e) && (i = i.filter((t) => t !== e))
              }),
              (e = g(e, t, r._f, 'scheduledIds', i)),
              Object.entries(e.messages.byChatId[t].threadsById).forEach((r) => {
                let [o, a] = r
                if (a.scheduledIds) {
                  const r = a.scheduledIds.filter((e) => !n.includes(e))
                  e = g(e, t, Number(o), 'scheduledIds', r)
                }
              })),
            (e = N(e, t, d))
          )
        }
        function S(e, t, n, r) {
          const o = (0, a.gb)(e, t, n),
            s = o?.length ? r.filter((e) => !o.includes(e)) : r
          return o && !s.length ? e : g(e, t, n, 'listedIds', P([...(o || []), ...s]))
        }
        function E(e, t, n, r) {
          for (var o = arguments.length, s = new Array(o > 4 ? o - 4 : 0), d = 4; d < o; d++)
            s[d - 4] = arguments[d]
          let [c = (0, i._w)()] = s
          const u = (0, a.qC)(e, t, n, c),
            l = u?.length ? r.filter((e) => !u.includes(e)) : r
          return u && !l.length ? e : p(e, t, n, 'outlyingIds', P([...(u || []), ...l]), c)
        }
        function P(e) {
          return e.sort((e, t) => e - t)
        }
        function A(e, t, n, r) {
          for (var s = arguments.length, d = new Array(s > 4 ? s - 4 : 0), c = 4; c < s; c++)
            d[c - 4] = arguments[c]
          let [u = (0, i._w)()] = d
          const l = (0, a.Cb)(e, t, n, u) || []
          if (l.includes(r)) return e
          const f = P([...(l.length < o.YQ0 ? l : l.slice(-o.hT6 / 2)), r])
          return p(e, t, n, 'viewportIds', f, u)
        }
        function k(e, t, n, r) {
          for (var o = arguments.length, d = new Array(o > 4 ? o - 4 : 0), c = 4; c < o; c++)
            d[c - 4] = arguments[c]
          let [u = (0, i._w)()] = d
          const l = (0, a.Cb)(e, t, n, u) || [],
            f = P(r)
          return p(e, t, n, 'viewportIds', (0, s.et)(l, f) ? l : f, u)
        }
        function M(e, t, n, r) {
          const o = { ...(0, a.tZ)(e, t, n), ...r }
          return o.threadId ? g(e, t, n, 'threadInfo', o) : e
        }
        function T(e, t, n) {
          return (
            n.forEach((t) => {
              e = M(e, t.chatId, t.threadId, t)
            }),
            e
          )
        }
        function N(e, t, n) {
          return (function (e, t, n) {
            const r = e.scheduledMessages.byChatId[t] || { byId: {}, hash: 0 }
            return {
              ...e,
              scheduledMessages: {
                byChatId: { ...e.scheduledMessages.byChatId, [t]: { ...r, ...n } },
              },
            }
          })(e, t, { byId: n })
        }
        function L(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r._f,
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
          for (var u = arguments.length, l = new Array(u > 6 ? u - 6 : 0), f = 6; f < u; f++)
            l[f - 6] = arguments[f]
          let [h = (0, i._w)()] = l
          return (0, d.i)(
            e,
            {
              focusedMessage: {
                ...(0, a.jU)(e, h).focusedMessage,
                chatId: t,
                threadId: o,
                messageId: n,
                noHighlight: s,
                isResizingContainer: c,
              },
            },
            h
          )
        }
        function Z(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [s = (0, i._w)()] = r
          const c = (0, a.jU)(e, s).focusedMessage
          return c ? (0, d.i)(e, { focusedMessage: { ...c, hasReachedMessage: t } }, s) : e
        }
        function R(e, t, n) {
          return {
            ...e,
            messages: {
              ...e.messages,
              sponsoredByChatId: { ...e.messages.sponsoredByChatId, [t]: n },
            },
          }
        }
        function _(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [s = (0, i._w)()] = r
          return (0, d.i)(
            e,
            { focusedMessage: { ...(0, a.jU)(e, s).focusedMessage, direction: t } },
            s
          )
        }
        function B(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [s = (0, i._w)()] = o
          const c = n ? Array.prototype.concat([], n) : []
          return (0, d.i)(e, { selectedMessages: { chatId: t, messageIds: c } }, s)
        }
        function O(e, t, n, r, o, c, u) {
          let l = arguments.length > 7 && void 0 !== arguments[7] && arguments[7]
          for (var f = arguments.length, h = new Array(f > 8 ? f - 8 : 0), m = 8; m < f; m++)
            h[m - 8] = arguments[m]
          let [p = (0, i._w)()] = h
          const { selectedMessages: g } = (0, a.jU)(e, p)
          c && (u = (0, a.xH)(e, t, c))
          const b = u || [o]
          if (!g) return B(e, t, b, p)
          const { messageIds: y } = g
          let v
          const w = b.filter((e) => !y.includes(e))
          if (w && !w.length) v = y.filter((e) => !b.includes(e))
          else if (l && y.length) {
            const d = (0, a.$W)(e, t, n, r, p),
              i = d.indexOf(y[y.length - 1]),
              c = d.indexOf(o),
              u = Math.min(i, c),
              l = Math.max(i, c),
              f = d.slice(u, l + 1)
            v = (0, s.Tw)([...y, ...f])
          } else v = [...y, ...w]
          return v.length ? (0, d.i)(e, { selectedMessages: { ...g, messageIds: v } }, p) : D(e, p)
        }
        function D(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, i._w)()] = n
          return (0, d.i)(e, { selectedMessages: void 0 }, o)
        }
        function F(e, t, n, r, o) {
          const { channelPostId: s, fromChatId: d } = t.forwardInfo || {}
          if (s && d) {
            const t = (0, a.tZ)(e, n, s)
            t &&
              (e = g(e, n, s, 'threadInfo', {
                ...t,
                lastMessageId: r,
                messagesCount: (t.messagesCount || 0) + (o ? -1 : 1),
              }))
          }
          return e
        }
      },
      44271: (e, t, n) => {
        n.d(t, { i: () => o })
        var r = n(65054)
        function o(e, t) {
          for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
            o[a - 2] = arguments[a]
          let [s = (0, r._w)()] = o
          return { ...e, byTabId: { ...e.byTabId, [s]: { ...e.byTabId[s], ...t } } }
        }
      },
      14342: (e, t, n) => {
        n.d(t, {
          DI: () => E,
          Ek: () => I,
          FM: () => l,
          IK: () => p,
          JR: () => T,
          LM: () => g,
          Mw: () => C,
          N: () => w,
          P_: () => h,
          UW: () => P,
          YK: () => m,
          Z1: () => c,
          _5: () => A,
          ep: () => S,
          g4: () => v,
          nA: () => M,
          pk: () => y,
          t: () => b,
          uH: () => k,
          xo: () => f,
        })
        var r = n(6137),
          o = n(56112),
          a = n(86087),
          s = n(83716),
          d = n(85967),
          i = n(65054)
        function c(e, t) {
          return e.chats.byId[t]
        }
        function u(e, t) {
          const n = (0, o.zX)(t)
          return !!n && (0, a.dy)(e, n)
        }
        function l(e, t) {
          return t === e.currentUserId
        }
        function f(e, t) {
          const n = u(e, t)
          return n && (0, o.cS)(n)
        }
        function h(e) {
          return Object.values(e.chats.byId).find((e) => {
            let { isSupport: t } = e
            return t
          })
        }
        function m(e, t) {
          if (!(0, o.YC)(t.id) && !(0, o.eA)(t) && t.fullInfo)
            return t.fullInfo.members && t.fullInfo.members.length !== s.mok
              ? t.fullInfo.members.reduce((t, n) => {
                  let { userId: r } = n
                  return r !== e.currentUserId &&
                    e.users.byId[r] &&
                    (0, o.kM)(e.users.byId[r], e.users.statusesById[r])
                    ? t + 1
                    : t
                }, 0)
              : t.fullInfo.onlineCount
        }
        function p(e, t) {
          const n = c(e, t),
            r = n && (0, o.zX)(n),
            s = r && (0, a.dy)(e, r)
          if (s && (0, o.cS)(s)) return s
        }
        function g(e, t) {
          const n = (0, a.dy)(e, t)
          return n && (n.isVerified || e.trustedBotIds.includes(t))
        }
        function b(e, t) {
          const n = c(e, t)
          if (n)
            return (0, a.kB)(e, t)
              ? 'bots'
              : u(e, n)
              ? 'users'
              : (0, o.eA)(n)
              ? 'channels'
              : 'chats'
        }
        function y(e, t) {
          const n = c(e, t),
            a = p(e, t)
          if (!n || !a) return !1
          if (n.lastMessage && (0, o.CD)(n.lastMessage)) return !0
          const s = e.messages.byChatId[t]
          if (!s) return !1
          const { listedIds: d } = s.threadsById[r._f] || {}
          return d && !d.length
        }
        function v(e) {
          return Boolean(e.chats.listIds.active)
        }
        function w(e, t, n) {
          const { listIds: r } = e.chats
          if (n) {
            const e = r[n]
            return Boolean(e && e.includes(t))
          }
          return Object.values(r).some((e) => e && e.includes(t))
        }
        function I(e, t) {
          const n = c(e, t)
          if (n && w(e, t)) return n.folderId === s.WSp ? 'archived' : 'active'
        }
        function C(e, t) {
          return e.chatFolders.byId[t]
        }
        function S(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.NfV
          const { active: r, archived: o } = e.chats.orderedPinnedIds
          if (n === s.NfV) return Boolean(r?.includes(t))
          if (n === s.WSp) return Boolean(o?.includes(t))
          const { byId: a } = e.chatFolders,
            { pinnedChatIds: d } = a[n] || {}
          return Boolean(d?.includes(t))
        }
        function E(e, t) {
          const n = t.toLowerCase()
          return Object.values(e.chats.byId).find((e) =>
            e.usernames?.some((e) => e.username.toLowerCase() === n)
          )
        }
        function P(e) {
          return Boolean(c(e, s.awM))
        }
        function A(e, t) {
          const n = c(e, t)
          if (!n) return
          const r = n?.fullInfo?.sendAsId
          return r ? (0, a.dy)(e, r) || c(e, r) : void 0
        }
        function k(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          const { requestedDraft: s } = (0, d.j)(e, a)
          if (s?.chatId === t && !s.files?.length) return s.text
        }
        function M(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, i._w)()] = r
          const { requestedDraft: s } = (0, d.j)(e, a)
          if (s?.chatId === t) return s.files
        }
        function T(e, t, n) {
          return t.filter((t) => {
            const r = b(e, t)
            return !!r && n.includes(r)
          })
        }
      },
      11192: (e, t, n) => {
        n.d(t, {
          JR: () => d.JR,
          xs: () => Se,
          _k: () => ye,
          zB: () => I,
          tH: () => C,
          Oh: () => S,
          g4: () => d.g4,
          bH: () => Ue,
          __: () => Ve,
          xl: () => ve,
          nt: () => pe,
          Nu: () => Ie,
          w9: () => qe,
          nB: () => we,
          Eh: () => tt,
          Z1: () => d.Z1,
          IK: () => d.IK,
          DI: () => d.DI,
          Mw: () => d.Mw,
          Ek: () => d.Ek,
          hj: () => oe,
          ZB: () => de,
          Zw: () => T,
          YK: () => d.YK,
          yB: () => N,
          xf: () => ot,
          t: () => d.t,
          X5: () => Le,
          jr: () => M,
          yN: () => m,
          JX: () => It,
          pP: () => pt,
          we: () => ct,
          $W: () => O,
          Bt: () => k,
          y5: () => h,
          n5: () => it,
          Ee: () => b,
          iX: () => y,
          q6: () => Ye,
          Ms: () => z,
          s: () => W,
          _$: () => V,
          kK: () => se,
          hI: () => G,
          wU: () => H,
          yZ: () => J,
          It: () => Ae,
          G$: () => ie,
          y8: () => _e,
          cv: () => me,
          GQ: () => dt,
          Nm: () => rt,
          ku: () => Ke,
          Si: () => E,
          pk: () => d.pk,
          N: () => d.N,
          ep: () => d.ep,
          Am: () => ze,
          xo: () => d.xo,
          FM: () => d.FM,
          wV: () => i.wV,
          a6: () => Oe,
          te: () => Ce,
          nd: () => wt,
          Ev: () => Ne,
          CA: () => Ze,
          zQ: () => gt,
          _X: () => ce,
          KA: () => ne,
          EV: () => Ge,
          vk: () => Re,
          oe: () => i.oe,
          Jf: () => yt,
          UW: () => d.UW,
          FW: () => v,
          LM: () => d.LM,
          s4: () => i.s4,
          b9: () => re,
          rB: () => Lt,
          T6: () => U,
          VF: () => He,
          gb: () => _,
          aW: () => ht,
          oC: () => Xe,
          q_: () => nt,
          xH: () => Be,
          HG: () => at,
          FT: () => Fe,
          tV: () => K,
          NJ: () => Nt,
          dZ: () => Tt,
          dT: () => le,
          qC: () => B,
          eh: () => St,
          kb: () => Ct,
          sp: () => Et,
          KB: () => F,
          EB: () => At,
          $$: () => Pt,
          rd: () => Pe,
          Bz: () => he,
          p9: () => Y,
          Yy: () => $,
          nA: () => d.nA,
          uH: () => d.uH,
          xx: () => st,
          Wq: () => bt,
          qy: () => x,
          Tm: () => ae,
          Vt: () => j,
          D7: () => De,
          _5: () => d._5,
          Ur: () => fe,
          Cy: () => We,
          Aq: () => et,
          Jg: () => Mt,
          fS: () => Je,
          aT: () => ut,
          Ny: () => p,
          Pk: () => g,
          i3: () => kt,
          P_: () => d.P_,
          jU: () => l.j,
          Pu: () => vt,
          ci: () => R,
          Db: () => te,
          nr: () => ge,
          tZ: () => q,
          v_: () => X,
          Cm: () => Q,
          WP: () => Z,
          qS: () => ee,
          p$: () => be,
          uZ: () => Ee,
          dy: () => i.dy,
          Bk: () => i.Bk,
          ss: () => i.ss,
          Cb: () => D,
          P2: () => Qe,
        })
        var r = n(91713),
          o = n(863),
          a = n(6137),
          s = n(83716),
          d = n(14342),
          i = n(86087),
          c = n(56112),
          u = n(60782),
          l = n(85967),
          f = n(65054)
        function h(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).stickerSearch
        }
        function m(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).gifSearch
        }
        function p(e, t) {
          return 'string' == typeof t
            ? e.stickers.setsById[t]
            : 'id' in t
            ? e.stickers.setsById[t.id]
            : 'isMissing' in t
            ? void 0
            : Object.values(e.stickers.setsById).find((e) => {
                let { shortName: n } = e
                return n.toLowerCase() === t.shortName.toLowerCase()
              })
        }
        function g(e, t) {
          const n = e.stickers.added.setIds
          let r = []
          return (
            e.stickers.favorite.stickers.forEach((e) => {
              e.emoji === t && r.push(e)
            }),
            n?.forEach((n) => {
              const o = e.stickers.setsById[n].packs
              o && (r = r.concat(o[t] || [], o[w(t)] || []))
            }),
            r
          )
        }
        function b(e, t) {
          const n = (0, i.wV)(e),
            r = e.customEmojis.added.setIds
          let o = []
          return (
            r?.forEach((n) => {
              const r = e.stickers.setsById[n].packs
              r && (o = o.concat(r[t] || [], r[w(t)] || []))
            }),
            n
              ? o
              : o.filter((e) => {
                  let { isFree: t } = e
                  return t
                })
          )
        }
        function y(e, t) {
          const n = (0, i.wV)(e),
            r = e.customEmojis.added.setIds
          let o = []
          return (
            r?.forEach((n) => {
              const r = e.stickers.setsById[n].packs
              if (!r) return
              const a = Object.entries(r)
                .filter((e) => {
                  let [n] = e
                  return t.includes(n) || t.includes(w(n))
                })
                .flatMap((e) => {
                  let [, t] = e
                  return t
                })
              o = o.concat(a)
            }),
            n
              ? o
              : o.filter((e) => {
                  let { isFree: t } = e
                  return t
                })
          )
        }
        function v(e) {
          return e.isEmoji && e.stickers?.some((e) => !e.isFree)
        }
        function w(e) {
          return e.replace('️', '')
        }
        function I(e, t) {
          const { animatedEmojis: n } = e
          if (!n || !n.stickers) return
          const r = w(t)
          return n.stickers.find((e) => e.emoji === t || e.emoji === r)
        }
        function C(e, t) {
          const { animatedEmojiEffects: n } = e
          if (!n || !n.stickers) return
          const r = w(t)
          return n.stickers.find((e) => e.emoji === t || e.emoji === r)
        }
        function S(e, t) {
          return e?.appConfig?.emojiSounds[w(t)]
        }
        function E(e, t) {
          return (
            'id' in t && (t.id === e.appConfig?.defaultEmojiStatusesStickerSetId || t.id === s.PZg)
          )
        }
        var P = n(82267),
          A = n(70735)
        function k(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { messageLists: a } = (0, l.j)(e, o)
          if (a.length) return a[a.length - 1]
        }
        function M(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { chatId: a } = k(e, o) || {}
          return a ? (0, d.Z1)(e, a) : void 0
        }
        function T(e, t) {
          return e.messages.byChatId[t]?.byId
        }
        function N(e, t) {
          return e.scheduledMessages.byChatId[t]?.byId
        }
        function L(e, t, n, r) {
          for (var o = arguments.length, a = new Array(o > 4 ? o - 4 : 0), s = 4; s < o; s++)
            a[s - 4] = arguments[s]
          let [d = (0, f._w)()] = a
          return (0, l.j)(e, d).tabThreads[t]?.[n]?.[r]
        }
        function Z(e, t, n, r) {
          return R(e, t, n)?.[r]
        }
        function R(e, t, n) {
          const r = e.messages.byChatId[t]
          if (!r) return
          return r.threadsById[n] || void 0
        }
        function _(e, t, n) {
          return Z(e, t, n, 'listedIds')
        }
        function B(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [s = (0, f._w)()] = o
          return L(e, t, n, 'outlyingIds', s)
        }
        function O(e, t, n, r) {
          for (var o = arguments.length, a = new Array(o > 4 ? o - 4 : 0), s = 4; s < o; s++)
            a[s - 4] = arguments[s]
          let [d = (0, f._w)()] = a
          switch (r) {
            case 'thread':
              return D(e, t, n, d)
            case 'pinned':
              return F(e, t, n)
            case 'scheduled':
              return x(e, t, n)
          }
        }
        function D(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [s = (0, f._w)()] = o
          return L(e, t, n, 'viewportIds', s)
        }
        function F(e, t, n) {
          return Z(e, t, n, 'pinnedIds')
        }
        function x(e, t, n) {
          return Z(e, t, n, 'scheduledIds')
        }
        function j(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [s = (0, f._w)()] = o
          return L(e, t, n, 'scrollOffset', s)
        }
        function U(e, t, n) {
          return Z(e, t, n, 'lastScrollOffset')
        }
        function $(e, t, n) {
          return Z(e, t, n, 'replyingToId')
        }
        function V(e, t, n) {
          return Z(e, t, n, 'editingId')
        }
        function W(e, t, n) {
          return Z(e, t, n, 'editingDraft')
        }
        function H(e, t) {
          return Z(e, t, a._f, 'editingScheduledId')
        }
        function G(e, t) {
          return Z(e, t, a._f, 'editingScheduledDraft')
        }
        function z(e, t, n) {
          return Z(e, t, n, 'draft')
        }
        function K(e, t, n) {
          return Z(e, t, n, 'noWebPage')
        }
        function q(e, t, n) {
          return Z(e, t, n, 'threadInfo')
        }
        function J(e, t, n) {
          return Z(e, t, n, 'firstMessageId')
        }
        function Y(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [s = (0, f._w)()] = o
          return L(e, t, n, 'replyStack', s)
        }
        function X(e, t, n) {
          const r = (0, d.Z1)(e, t),
            o = q(e, t, n)
          if (r && o && void 0 !== o.messagesCount)
            return r.isForum && n !== s.OxA ? o.messagesCount - 1 : o.messagesCount
        }
        function Q(e, t, n) {
          if (n === a._f) return (0, d.Z1)(e, t)
          const r = q(e, t, n)
          return (0, d.Z1)(e, r?.originChannelId || t)
        }
        function ee(e, t, n) {
          if (n === a._f) return
          if ((0, d.Z1)(e, t)?.isForum) return n
          const r = q(e, t, n)
          return r ? r.topMessageId : void 0
        }
        function te(e, t) {
          const n = ge(e, t)
          if (n && n !== a._f) return e.messages.byChatId[t.chatId].threadsById[n]
        }
        function ne(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), s = 3; s < r; s++)
            o[s - 3] = arguments[s]
          let [d = (0, f._w)()] = o
          const i = k(e, d)
          if (!i) return !1
          const { threadInfo: c } = te(e, n) || {}
          return t === i.chatId && (i.threadId === a._f || (c && i.threadId === c.threadId))
        }
        function re(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++)
            o[i - 3] = arguments[i]
          let [c = (0, f._w)()] = o
          const u = D(e, t, n, c)
          if (!u || !u.length) return !0
          let l
          if (n === a._f) {
            const n = (0, d.Z1)(e, t)
            if (!n || !n.lastMessage) return !0
            l = n.lastMessage.id
          } else {
            const r = q(e, t, n)
            if (!r || !r.lastMessageId) return
            l = r.lastMessageId
          }
          return (l > s.MPN && !oe(e, t, l)) || u[u.length - 1] >= l
        }
        function oe(e, t, n) {
          const r = T(e, t)
          return r ? r[n] : void 0
        }
        function ae(e, t, n) {
          const r = N(e, t)
          return r ? r[n] : void 0
        }
        function se(e, t, n, r) {
          if ('scheduled' === r) {
            const n = H(e, t)
            return n ? ae(e, t, n) : void 0
          }
          {
            const r = V(e, t, n)
            return r ? oe(e, t, r) : void 0
          }
        }
        function de(e, t) {
          let n
          for (const r of Object.values(e.messages.byChatId)) {
            const { byId: e } = r
            if (((n = Object.values(e).find((e) => e.content.poll && e.content.poll.id === t)), n))
              break
          }
          return n
        }
        function ie(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, f._w)()] = r
          const { chatId: s, messageId: d } = (0, l.j)(e, a).focusedMessage || {}
          return s === t ? d : void 0
        }
        function ce(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [s = (0, f._w)()] = o
          const d = ie(e, t.chatId, s),
            i = (0, l.j)(e, s).focusedMessage?.threadId
          return n === i && !!d && (d === t.id || d === t.previousLocalId)
        }
        function ue(e, t) {
          const { lastReadOutboxMessageId: n } = (0, d.Z1)(e, t.chatId) || {}
          return (0, c.CI)(t) || !n || n < t.id
        }
        function le(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return ue(e, t) || n ? (0, c.RI)(t) : 'read'
        }
        function fe(e, t) {
          const { senderId: n } = t
          if (n) return (0, c.YC)(n) ? (0, i.dy)(e, n) : (0, d.Z1)(e, n)
        }
        function he(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          if (n) {
            const { senderUserId: n, hiddenUserName: r } = t.forwardInfo || {}
            if (n) return (0, c.YC)(n) ? (0, i.dy)(e, n) : (0, d.Z1)(e, n)
            if (r) return
          }
          const { senderId: r } = t
          if (r) return (0, c.YC)(r) ? (0, i.dy)(e, r) : (0, d.Z1)(e, r)
        }
        function me(e, t) {
          const { forwardInfo: n } = t
          if (n)
            return n.isChannelPost && n.fromChatId
              ? (0, d.Z1)(e, n.fromChatId)
              : n.senderUserId
              ? (0, i.dy)(e, n.senderUserId) || (0, d.Z1)(e, n.senderUserId)
              : void 0
        }
        function pe(e, t, n) {
          const r = (0, d.Z1)(e, t)
          return (
            !!r &&
            n !== s.OxA &&
            (r.isCreator ||
              (0, c.VE)(r, 'deleteMessages') ||
              (r.isForum &&
                (function (e, t, n) {
                  const r = (0, d.Z1)(e, t)
                  if (!r) return !1
                  if (r.topics?.[n] && !r.topics?.[n].isOwner) return !1
                  const o = e.messages.byChatId[t]?.threadsById[n]
                  if (!o) return !1
                  const { listedIds: a } = o
                  return !(
                    !a ||
                    a.length + 1 >= 10 ||
                    a.some((n) => {
                      const r = oe(e, t, n)
                      return !r || !r.isOutgoing
                    })
                  )
                })(e, r.id, n)))
          )
        }
        function ge(e, t) {
          const n = (0, d.Z1)(e, t.chatId),
            { replyToMessageId: r, replyToTopMessageId: o, isTopicReply: i, content: u } = t
          return 'action' in u && 'topicCreate' === u.action?.type
            ? t.id
            : n?.isForum
            ? (i && (o || r)) || s.OxA
            : n && (0, c.G9)(n)
            ? a._f
            : (n && (0, c.ZV)(n) && (o || r)) || a._f
        }
        function be(e, t) {
          const { chatId: n } = t,
            r = (0, d.Z1)(e, n)
          if (!r?.isForum) return
          const o = ge(e, t)
          return r.topics?.[o]
        }
        function ye(e, t, n) {
          const r = (0, d.Z1)(e, t.chatId)
          if (!r || r.isRestricted) return {}
          const o = (0, c.YC)(r.id),
            a = (0, d.FM)(e, t.chatId),
            s = (0, c.G9)(r),
            i = (0, c.ZV)(r),
            u = (0, c.eA)(r),
            l = (0, c.CI)(t),
            f = (0, c.jM)(t),
            h = (0, c.B4)(t),
            m = (0, c.FT)(t),
            { content: p } = t,
            g = be(e, t),
            b =
              (a ||
                (i && (0, c.VE)(r, 'pinMessages')) ||
                (u && (0, c.VE)(r, 'editMessages')) ||
                (0, P.bp)() - t.date < 172800) &&
              !(
                p.sticker ||
                p.contact ||
                p.poll ||
                p.action ||
                p.audio ||
                p.video?.isRound ||
                p.location ||
                p.invoice
              ) &&
              !(0, c.MF)(t) &&
              !t.viaBotId &&
              !r.isForbidden,
            y = q(e, t.chatId, n),
            v = Boolean(y?.originChannelId),
            w =
              !l &&
              !f &&
              !r.isForbidden &&
              (0, c.Qm)(r, n, v) &&
              (!g || !g.isClosed || g.isOwner || (0, c.VE)(r, 'manageTopics')),
            I =
              o ||
              r.isCreator ||
              (!u && !(0, c.Mg)(r, 'pinMessages')) ||
              (0, c.VE)(r, 'pinMessages')
          let C = !l && !f && !m && I,
            S = !1
          const E = F(e, r.id, n)
          C && ((S = Boolean(E && E.includes(t.id))), (C = !S))
          const A = !l && !f && (o || h || s || r.isCreator || (0, c.VE)(r, 'deleteMessages')),
            k = !o && !h,
            M =
              A &&
              !r.isForbidden &&
              ((o && !a) || (s && (h || (0, c.VE)(r, 'deleteMessages') || r.isCreator))),
            T = !l && !m && b && (h || (u && (r.isCreator || (0, c.VE)(r, 'editMessages')))),
            N = ze(e, t.chatId),
            L = !l && !m && !N && (t.isForwardingAllowed || f),
            Z = Boolean(t.content.sticker),
            R =
              Z &&
              (function (e, t) {
                const { stickers: n } = e.stickers.favorite
                return (
                  n &&
                  n.some((e) => {
                    let { id: n } = e
                    return n === t.id
                  })
                )
              })(e, t.content.sticker),
            _ = !m && Z && !R,
            B = !m && R,
            O = !m,
            D = !m && (u || i),
            x = !m,
            j = Boolean(
              p.webPage?.document ||
                p.webPage?.video ||
                p.webPage?.photo ||
                p.audio ||
                p.voice ||
                p.photo ||
                p.video ||
                p.document ||
                p.sticker
            ),
            U = t.content.video?.isGif,
            $ = p.poll,
            V =
              !$?.summary.closed && !$?.summary.quiz && $?.results.results?.some((e) => e.isChosen),
            W = h && $ && !$.summary.closed
          return {
            noOptions: [w, T, C, S, k, A, M, L, _, B, O, D, x, j, U, V, W].every((e) => !e),
            canReply: w,
            canEdit: T,
            canPin: C,
            canUnpin: S,
            canReport: k,
            canDelete: A,
            canDeleteForAll: M,
            canForward: L,
            canFaveSticker: _,
            canUnfaveSticker: B,
            canCopy: O,
            canCopyLink: D,
            canSelect: x,
            canDownload: j,
            canSaveGif: U,
            canRevote: V,
            canClosePoll: W,
          }
        }
        function ve(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { messageIds: a } = (0, l.j)(e, o).selectedMessages || {},
            { chatId: s, threadId: d } = k(e, o) || {},
            i = s && T(e, s)
          if (!i || !a || !d) return {}
          const c = a.map((t) => i[t] && ye(e, i[t], d)).filter(Boolean)
          return {
            canDelete: c.every((e) => e.canDelete),
            canDeleteForAll: c.every((e) => e.canDeleteForAll),
          }
        }
        function we(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { messageIds: a } = (0, l.j)(e, o).selectedMessages || {},
            { chatId: s, threadId: d } = k(e, o) || {},
            i = s && T(e, s)
          if (!i || !a || !d) return !1
          const c = a.map((t) => i[t] && ye(e, i[t], d)).filter(Boolean)
          return c.every((e) => e.canReport)
        }
        function Ie(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { messageIds: a } = (0, l.j)(e, o).selectedMessages || {},
            { chatId: s, threadId: d } = k(e, o) || {},
            i = s && T(e, s)
          if (!i || !a || !d) return !1
          const c = a.map((t) => i[t] && ye(e, i[t], d)).filter(Boolean)
          return c.some((e) => e.canDownload)
        }
        function Ce(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, f._w)()] = r
          const s = (0, l.j)(e, a).activeDownloads.byChatId[t.chatId]
          return !!s && s.includes(t.id)
        }
        function Se(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, f._w)()] = r
          return (0, l.j)(e, a).activeDownloads.byChatId[t] || A.D
        }
        function Ee(e, t) {
          return e.fileUploads.byMessageLocalId[(0, c.KK)(t)]?.progress
        }
        function Pe(e, t, n) {
          if (n === a._f) {
            const n = (0, d.Z1)(e, t)
            if (!n) return
            if (!n.lastReadInboxMessageId) return
            return n.lastMessage
              ? (0, c.CI)(n.lastMessage)
                ? n.lastMessage.id
                : Math.min(n.lastMessage.id, n.lastReadInboxMessageId)
              : n.lastReadInboxMessageId
          }
          {
            const r = q(e, t, n)
            if (!r) return
            return r.lastReadInboxMessageId
              ? Math.min(r.lastReadInboxMessageId, r.lastMessageId || 1 / 0)
              : r.topMessageId
          }
        }
        function Ae(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++)
            o[i - 3] = arguments[i]
          let [c = (0, f._w)()] = o
          const u = (0, d.Z1)(e, t)
          if (n === a._f) {
            if (!u) return
          } else {
            const r = q(e, t, n)
            if (!r || (void 0 !== r.lastMessageId && r.lastMessageId === r.lastReadInboxMessageId))
              return
          }
          const l = B(e, t, n, c),
            h = _(e, t, n),
            m = T(e, t)
          if (!m || (!l && !h)) return
          const p = Pe(e, t, n)
          if (!p && u && u.isNotJoined) return
          const g =
            t === s.awM
              ? e.serviceNotifications.reduce((e, t) => (!t.isUnread && t.id > e ? t.id : e), -1)
              : -1
          function b(e) {
            return e.find(
              (e) =>
                (!p || e > p) &&
                m[e] &&
                (!m[e].isOutgoing || m[e].content.action?.isTopicAction || m[e].isFromScheduled) &&
                e > g
            )
          }
          if (l) {
            const e = b(l)
            if (e) return e
          }
          if (h) {
            const e = b(h)
            if (e) return e
          }
        }
        function ke(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { pollResults: a } = (0, l.j)(e, o)
          return Boolean(a.messageId)
        }
        function Me(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { createTopicPanel: a } = (0, l.j)(e, o)
          return Boolean(a)
        }
        function Te(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { editTopicPanel: a } = (0, l.j)(e, o)
          return Boolean(a)
        }
        function Ne(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { forwardMessages: a } = (0, l.j)(e, o)
          return Boolean(a.isModalShown)
        }
        function Le(e, t) {
          const n = Object.values(e.chats.byId).find(
            (e) => (0, c.Ru)(e) && e.lastMessage && e.lastMessage.id === t
          )
          if (n) return n.id
          const { byChatId: r } = e.messages
          return Object.keys(r).find((n) => {
            const o = (0, d.Z1)(e, n)
            return o && (0, c.Ru)(o) && r[o.id].byId[t]
          })
        }
        function Ze(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { selectedMessages: a } = (0, l.j)(e, o)
          return Boolean(a)
        }
        function Re(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, f._w)()] = r
          const { messageIds: s } = (0, l.j)(e, a).selectedMessages || {}
          return !!s && s.includes(t)
        }
        function _e(e, t, n) {
          const r = T(e, t)
          if (r)
            return Object.values(r)
              .filter((e) => e.groupedId === n && e.forwardInfo)
              .map((e) => {
                let { forwardInfo: t } = e
                return t.fromMessageId
              })
        }
        function Be(e, t, n) {
          const r = T(e, t)
          if (r)
            return Object.keys(r)
              .map(Number)
              .filter((e) => r[e].groupedId === n)
        }
        function Oe(e, t, n) {
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
            o[a - 3] = arguments[a]
          let [s = (0, f._w)()] = o
          const { messageIds: d } = (0, l.j)(e, s).selectedMessages || {}
          if (!d) return !1
          const i = Be(e, t, n)
          return i && i.every((e) => d.includes(e))
        }
        function De(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { messageIds: a } = (0, l.j)(e, o).selectedMessages || {}
          return a ? a.length : 0
        }
        function Fe(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a._f
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), s = 3; s < r; s++)
            o[s - 3] = arguments[s]
          let [i = (0, f._w)()] = o
          const c = (0, d.Z1)(e, t)
          if (!c) return
          const l = T(e, t),
            h = D(e, t, n, i)
          if (!l || !h) return
          const m = (0, u.dF)(h, (t) => je(e, l[t])),
            p = (0, u.dF)(h, (t) => xe(e, l[t]))
          return m && p && p > m ? void 0 : m ? l[m] : void 0
        }
        function xe(e, t) {
          const {
            shouldHideKeyboardButtons: n,
            isHideKeyboardSelective: r,
            replyToMessageId: o,
            isMentioned: a,
          } = t
          if (!n) return !1
          if (r) {
            if (a) return !0
            if (!o) return !1
            const n = oe(e, t.chatId, o)
            return Boolean(n?.senderId === e.currentUserId)
          }
          return !0
        }
        function je(e, t) {
          const {
            keyboardButtons: n,
            shouldHideKeyboardButtons: r,
            isKeyboardSelective: o,
            isMentioned: a,
            replyToMessageId: s,
          } = t
          if (!n || r) return !1
          if (o) {
            if (a) return !0
            if (!s) return !1
            const n = oe(e, t.chatId, s)
            return Boolean(n?.senderId === e.currentUserId)
          }
          return !0
        }
        function Ue(e, t) {
          const n = (0, d.Z1)(e, t.chatId)
          if (!n) return
          const r = fe(e, t),
            o = Boolean((0, c.O$)(t) || (0, c.F$)(t)),
            a = Boolean((0, c.b7)(t) || (0, c.Cg)(t)),
            s = Boolean((0, c.oP)(t) || (0, c.kd)(t) || (0, c.aE)(t)),
            {
              canAutoLoadPhotoFromContacts: i,
              canAutoLoadPhotoInPrivateChats: u,
              canAutoLoadPhotoInGroups: l,
              canAutoLoadPhotoInChannels: f,
              canAutoLoadVideoFromContacts: h,
              canAutoLoadVideoInPrivateChats: m,
              canAutoLoadVideoInGroups: p,
              canAutoLoadVideoInChannels: g,
              canAutoLoadFileFromContacts: b,
              canAutoLoadFileInPrivateChats: y,
              canAutoLoadFileInGroups: v,
              canAutoLoadFileInChannels: w,
            } = e.settings.byKey
          return o
            ? $e({
                global: e,
                chat: n,
                sender: r,
                canAutoLoadMediaFromContacts: i,
                canAutoLoadMediaInPrivateChats: u,
                canAutoLoadMediaInGroups: l,
                canAutoLoadMediaInChannels: f,
              })
            : a
            ? $e({
                global: e,
                chat: n,
                sender: r,
                canAutoLoadMediaFromContacts: h,
                canAutoLoadMediaInPrivateChats: m,
                canAutoLoadMediaInGroups: p,
                canAutoLoadMediaInChannels: g,
              })
            : !s ||
              $e({
                global: e,
                chat: n,
                sender: r,
                canAutoLoadMediaFromContacts: b,
                canAutoLoadMediaInPrivateChats: y,
                canAutoLoadMediaInGroups: v,
                canAutoLoadMediaInChannels: w,
              })
        }
        function $e(e) {
          let {
            global: t,
            chat: n,
            sender: r,
            canAutoLoadMediaFromContacts: o,
            canAutoLoadMediaInPrivateChats: a,
            canAutoLoadMediaInGroups: s,
            canAutoLoadMediaInChannels: d,
          } = e
          const u = Boolean(r && (r.id === t.currentUserId || (0, i.nM)(t, r)))
          return Boolean(
            (u && o) || (!u && a && (0, c.YC)(n.id)) || (s && (0, c.Bf)(n)) || (d && (0, c.eA)(n))
          )
        }
        function Ve(e, t) {
          const n = (0, c.b7)(t) || (0, c.Cg)(t)
          if (!n) return
          const { canAutoPlayVideos: r, canAutoPlayGifs: o } = e.settings.byKey,
            a = n.isGif || n.isRound
          return (r && !a) || (o && a)
        }
        function We(e) {
          return e.settings.byKey.shouldLoopStickers
        }
        function He(e) {
          const { serviceNotifications: t } = e,
            n = Math.max(
              ...t.map((e) => {
                let { id: t } = e
                return t
              })
            )
          return t.find((e) => {
            let { id: t, isDeleted: r } = e
            return !r && t === n
          })
        }
        function Ge(e, t) {
          return Boolean(t && (t.isProtected || ze(e, t.chatId)))
        }
        function ze(e, t) {
          return (0, d.Z1)(e, t)?.isProtected || !1
        }
        function Ke(e, t, n) {
          if ((0, d.Z1)(e, t)?.isProtected) return !0
          if (!n) return !1
          const r = T(e, t)
          return n.some((e) => r[e]?.isProtected)
        }
        function qe(e, t, n) {
          if ((0, d.Z1)(e, t)?.isProtected) return !1
          if (!n) return !1
          const r = T(e, t)
          return n.map((e) => r[e]).every((e) => e.isForwardingAllowed || (0, c.jM)(e))
        }
        function Je(e, t) {
          const n = (0, d.Z1)(e, t),
            r = n && (0, c.eA)(n) ? e.messages.sponsoredByChatId[t] : void 0
          return r && r.expiresAt >= Math.round(Date.now() / 1e3) ? r : void 0
        }
        function Ye(e, t) {
          if (t === s.awM) return
          const n = (0, c.YC)(t),
            r = e.config?.defaultReaction
          if (!r) return
          if (n) return r
          const o = (0, d.Z1)(e, t)?.fullInfo?.enabledReactions
          return o && (0, c.XU)(r, o) ? r : void 0
        }
        function Xe(e) {
          const t = (0, i.wV)(e),
            { maxUserReactionsPremium: n = 3, maxUserReactionsDefault: r = 1 } = e.appConfig || {}
          return t ? n : r
        }
        function Qe(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { chatId: a, threadId: s } = k(e, o) || {}
          if (!a || !s) return
          const d = L(e, a, s, 'viewportIds', o)
          return d
            ? d
                .map((t) => {
                  const { senderId: n } = oe(e, a, t) || {}
                  return n ? (0, i.dy)(e, n) : void 0
                })
                .filter(Boolean)
            : void 0
        }
        function et(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return 'scheduled' === k(e, o)?.type
        }
        function tt(e, t) {
          const n = (0, d.FM)(e, t),
            r = t === s.FVh && (0, d.IK)(e, t)
          return Boolean(!n && !r && (0, c.YC)(t) && (0, i.ss)(e, t)?.wasOnline)
        }
        function nt(e, t) {
          const n = (function (e) {
            const t = e.content.text?.entities
            return t?.filter((e) => e.type === a.Vv.CustomEmoji)
          })(t)
          if (!n) return A.D
          const r = n.map((t) => e.customEmojis.byId[t.documentId])
          return r.every(Boolean)
            ? r
                .map((e) => e.stickerSetInfo)
                .reduce(
                  (e, t) => (
                    ('shortName' in t &&
                      e.some((e) => 'shortName' in e && e.shortName === t.shortName)) ||
                      ('id' in t && e.some((e) => 'id' in e && e.id === t.id)) ||
                      e.push(t),
                    e
                  ),
                  []
                )
            : void 0
        }
        function rt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { messageIds: a, fromChatId: s } = (0, l.j)(e, o).forwardMessages
          if (!a) return !1
          const d = T(e, s)
          return a.some((e) => {
            const t = d[e]
            return Boolean(t.content.voice) || t.content.video?.isRound
          })
        }
        function ot(e, t) {
          return e.translations.byChatId[t]
        }
        function at(e, t, n) {
          return ot(e, t)?.byLangCode[n] || {}
        }
        function st(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, f._w)()
          return (0, l.j)(e, r).requestedTranslations.byChatId[t]?.manualMessages?.[n]
        }
        function dt(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, f._w)()] = r
          const { messageIds: s, fromChatId: i } = (0, l.j)(e, a).forwardMessages,
            u = (0, d.Z1)(e, t)
          if (!s || !u) return !1
          const h = T(e, i),
            {
              canSendVoices: m,
              canSendRoundVideos: p,
              canSendStickers: g,
              canSendDocuments: b,
              canSendAudios: y,
              canSendVideos: v,
              canSendPhotos: w,
              canSendGifs: I,
              canSendPlainText: C,
            } = (0, c.H5)(u)
          return !s.some((e) => {
            const t = h[e],
              n = t.content.voice,
              r = t.content.video?.isRound,
              o = t.content.photo,
              a = t.content.video?.isGif,
              s = t.content.video && !r && !a,
              d = t.content.audio,
              i = t.content.document,
              c = t.content.sticker,
              u = t.content.text && !n && !r && !c && !i && !d && !s && !o && !a
            return (
              (n && !m) ||
              (r && !p) ||
              (c && !g) ||
              (i && !b) ||
              (d && !y) ||
              (s && !v) ||
              (o && !w) ||
              (a && !I) ||
              (u && !C)
            )
          })
        }
        function it(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { chatId: a, threadId: s } = k(e, o) || {}
          if (!a || !s) return
          const d = (0, c.uw)(a, s),
            i = (0, l.j)(e, o).localTextSearch.byChatThreadKey[d]
          return i && i.isActive ? i : void 0
        }
        function ct(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { chatId: a, threadId: s } = k(e, o) || {}
          if (!a || !s) return
          const d = (0, c.uw)(a, s)
          return (0, l.j)(e, o).localMediaSearch.byChatThreadKey[d]
        }
        function ut(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, f._w)()] = r
          return (0, l.j)(e, a).statistics.byChatId[t]
        }
        function lt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          if (!(0, l.j)(e, o).isStatisticsShown) return !1
          const { chatId: a } = k(e, o) || {},
            s = a ? (0, d.Z1)(e, a) : void 0
          return s?.fullInfo?.canViewStatistics
        }
        function ft(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (
            !!(0, l.j)(e, o).isStatisticsShown &&
            Boolean((0, l.j)(e, o).statistics.currentMessageId)
          )
        }
        function ht(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, f._w)()] = r
          return (0, l.j)(e, a).management.byChatId[t]
        }
        function mt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { chatId: a, threadId: s } = k(e, o) || {}
          if (!a || !s) return
          const d = (0, l.j)(e, o).management.byChatId[a]
          return d && d.isActive ? d : void 0
        }
        function pt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { chatId: a, threadId: s } = k(e, o) || {}
          if (!a || !s) return
          if ((0, c.YC)(a)) return 'user'
          const i = (0, d.Z1)(e, a)
          return i ? ((0, c.Bf)(i) ? 'group' : 'channel') : void 0
        }
        function gt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const { mediaViewer: a } = (0, l.j)(e, o)
          return Boolean(a.mediaId || a.avatarOwnerId)
        }
        function bt(e, t) {
          for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
            o[a - 2] = arguments[a]
          let [s = (0, f._w)()] = o
          return Te(e, s)
            ? r.qt.EditTopic
            : Me(e, s)
            ? r.qt.CreateTopic
            : ke(e, s)
            ? r.qt.PollResults
            : !t && it(e, s)
            ? r.qt.Search
            : mt(e, s)
            ? r.qt.Management
            : ft(e, s)
            ? r.qt.MessageStatistics
            : lt(e, s)
            ? r.qt.Statistics
            : void 0 !== h(e, s).query
            ? r.qt.StickerSearch
            : void 0 !== m(e, s).query
            ? r.qt.GifSearch
            : (0, l.j)(e, s).newChatMembersProgress !== r.WB.Closed
            ? r.qt.AddingMembers
            : (0, l.j)(e, s).isChatInfoShown && k(e, s)
            ? r.qt.ChatInfo
            : void 0
        }
        function yt(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          let [a = (0, f._w)()] = r
          return void 0 !== bt(e, t, a)
        }
        function vt(e) {
          const { theme: t, shouldUseSystemTheme: n } = e.settings.byKey
          return n ? (0, o.vn)() : t
        }
        function wt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          const a = (0, l.j)(e, o)
          return (
            Boolean(a.forumPanelChatId) &&
            (void 0 === a.globalSearch.query || a.globalSearch.isClosing)
          )
        }
        function It(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).globalSearch.query
        }
        function Ct(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).payment.inputInvoice
        }
        function St(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).payment.formId
        }
        function Et(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).payment.requestId
        }
        function Pt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).payment.nativeParams?.publishableKey
        }
        function At(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).payment.nativeParams?.publicToken
        }
        function kt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).payment.stripeCredentials
        }
        function Mt(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]
          let [o = (0, f._w)()] = n
          return (0, l.j)(e, o).payment.smartGlocalCredentials
        }
        function Tt(e) {
          return e.settings.byKey
        }
        function Nt(e) {
          return e.settings.notifyExceptions
        }
        function Lt(e) {
          return e.settings.byKey.language.replace('-raw', '')
        }
      },
      85967: (e, t, n) => {
        n.d(t, { j: () => o })
        var r = n(65054)
        function o(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o]
          let [a = (0, r._w)()] = n
          return e.byTabId[a]
        }
      },
      86087: (e, t, n) => {
        n.d(t, {
          Bk: () => c,
          dy: () => o,
          kB: () => l,
          nM: () => u,
          oe: () => i,
          s4: () => s,
          ss: () => a,
          wV: () => d,
        })
        var r = n(56112)
        function o(e, t) {
          return e.users.byId[t]
        }
        function a(e, t) {
          return e.users.statusesById[t]
        }
        function s(e, t) {
          return o(e, t)?.fullInfo?.isBlocked
        }
        function d(e) {
          return !!e.currentUserId && Boolean(e.users.byId[e.currentUserId].isPremium)
        }
        function i(e) {
          var t
          return null === (t = e.appConfig?.isPremiumPurchaseBlocked) || void 0 === t || t
        }
        function c(e, t) {
          const n = t.replace(/[^0-9]/g, '')
          return Object.values(e.users.byId).find((e) => e?.phoneNumber === n)
        }
        function u(e, t) {
          return e.contactList && e.contactList.userIds.includes(t.id)
        }
        function l(e, t) {
          const n = o(e, t)
          if (n && (0, r.cS)(n)) return n
        }
      },
      42797: (e, t, n) => {
        n.d(t, { W7: () => m, ZP: () => b, c9: () => p })
        var r = n(83716),
          o = n(60748),
          a = n(863),
          s = n(16063),
          d = n(43858),
          i = n(65326)
        const c = new Map(),
          u = (0, s._)()
        let l, f, h
        function m() {
          return l
        }
        function p() {
          return f
        }
        function g() {
          ;(l = c.get('mobile')?.matches || !1),
            (f = !l && (c.get('tablet')?.matches || !1)),
            (h = c.get('landscape')?.matches || !1),
            (0, d.z)(),
            u.runCallbacks()
        }
        function b() {
          const e = (0, i.Z)()
          return (
            (0, o.d4)(() => u.addCallback(e), [e]),
            { isMobile: l, isTablet: f, isLandscape: h, isDesktop: !l && !f }
          )
        }
        !(function () {
          const e = window.matchMedia(
            `(max-width: ${r.l35}px),   (max-width: ${r.u_N}px and max-height: ${r.rOO}px)`
          )
          c.set('mobile', e), e.addEventListener('change', g)
          const t = window.matchMedia(`(max-width: ${r.ksF}px)`)
          c.set('tablet', t), t.addEventListener('change', g)
          const n = window.matchMedia(
            a.cj
              ? '(orientation: landscape)'
              : 'screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape)'
          )
          c.set('landscape', n), n.addEventListener('change', g)
        })(),
          g()
      },
      77510: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(60748)
        const o = (e, t, n) => {
          const [o, a] = (0, r.eJ)(!1),
            [s, d] = (0, r.eJ)(),
            [i, c] = (0, r.eJ)(n)
          return (
            (0, r.d4)(() => {
              a(!0)
              let t = !1
              return (
                e().then(
                  (e) => {
                    t || (a(!1), c(e))
                  },
                  (e) => {
                    t || (a(!1), d(e))
                  }
                ),
                () => {
                  t = !0
                }
              )
            }, t),
            { isLoading: o, error: s, result: i }
          )
        }
      },
      45332: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(60748)
        function o(e, t) {
          const n = (0, r.sO)(!1),
            o = (0, r.I4)(() => {
              n.current || (e?.(), (n.current = !0))
            }, [e]),
            a = (0, r.I4)(() => {
              t?.(), (n.current = !1)
            }, [t])
          ;(0, r.d4)(
            () => (
              e && !document.hasFocus() && o(),
              e && window.addEventListener('blur', o),
              t && window.addEventListener('focus', a),
              () => {
                t && window.removeEventListener('focus', a),
                  e && window.removeEventListener('blur', o)
              }
            ),
            [o, a, e, t]
          )
        }
      },
      799: (e, t, n) => {
        n.d(t, { Z: () => d })
        var r = n(60748),
          o = n(28712),
          a = n(78722),
          s = n(3927)
        function d(e, t) {
          const [n, d] = (0, r.eJ)(),
            [i, c] = (0, r.eJ)(),
            [u, l] = (0, r.eJ)(),
            f = (0, r.I4)(() => {
              const n = e.current,
                r = t?.current
              if (!n || !r) return
              if (!n.offsetParent || !r.offsetParent) return void setTimeout(f, 500)
              const a = (
                  n.classList.contains('sticker-set-cover') ? n : n.querySelector('img')
                ).getBoundingClientRect(),
                s = r.getBoundingClientRect()
              d((0, o.NM)((a.left - s.left) / s.width, 4)),
                c((0, o.NM)((a.top - s.top) / s.height, 4)),
                l(Math.round(a.width))
            }, [e, t]),
            h = (0, s.Z)(f, [f], 300, !1)
          return (
            (0, r.bt)(f, [f]),
            (0, a.Z)(t, h),
            {
              coords: (0, r.Ye)(
                () => (void 0 !== n && void 0 !== i ? { x: n, y: i } : void 0),
                [n, i]
              ),
              size: u,
            }
          )
        }
      },
      12019: (e, t, n) => {
        n.d(t, { Z: () => i })
        var r = n(60748),
          o = n(69118),
          a = n(85266),
          s = n(84112)
        function d(e, t) {
          const n = []
          for (let r = 0; r < e.length; r++) n.push({ start: e.start(r) / t, end: e.end(r) / t })
          return n
        }
        const i = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0
          const [n, i] = (0, r.eJ)(!e),
            [c, u] = (0, r.eJ)(0),
            [l, f] = (0, r.eJ)([]),
            h = (0, r.Ye)(() => (0, o.Ds)(i, 200, !1, !0), []),
            m = (0, r.I4)(
              (e) => {
                'timeupdate' === e.type && t?.(e)
                const n = e.currentTarget
                if (!(0, a.z)(n)) {
                  if (n.buffered.length) {
                    const e = d(n.buffered, n.duration),
                      t = e.reduce((e, t) => {
                        let { start: n, end: r } = t
                        return e + r - n
                      }, 0)
                    u(t / n.duration), f((t) => ((0, s.A)(t, e) ? t : e))
                  }
                  h(n.readyState >= 3 || n.currentTime > 0)
                }
              },
              [t, h]
            ),
            p = {
              onLoadedData: m,
              onPlaying: m,
              onLoadStart: m,
              onPause: m,
              onTimeUpdate: m,
              onProgress: m,
            }
          return {
            isBuffered: n,
            bufferedProgress: c,
            bufferedRanges: l,
            bufferingHandlers: p,
            checkBuffering(e) {
              h(e.readyState >= 3)
            },
          }
        }
      },
      18360: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(87204)
        function o(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          const o = (0, r.Z)(e, t)
          return n || null != e ? e : o
        }
      },
      67360: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(69118)
        function a(e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          const d = (0, r.I4)(e, t)
          return (0, r.Ye)(() => (0, o.Ds)(d, n, !a, !s), [d, n, a, s])
        }
      },
      70113: (e, t, n) => {
        n.d(t, { Z: () => i })
        var r = n(60748),
          o = n(27370),
          a = n(18629),
          s = n(78722),
          d = n(34446)
        function i(e, t) {
          const [n, i] = (0, r.eJ)(),
            c = (0, r.sO)(),
            u = (0, r.I4)(() => {
              if (!e?.current || t) return void i(void 0)
              const n = (0, a.ZX)(getComputedStyle(e.current), 'color')
              i(n)
            }, [t, e])
          return (
            (0, s.Z)(t ? void 0 : e, u),
            (0, d.Z)(() => {
              if (!n) return void (c.current = void 0)
              const { r: e, g: t, b: r } = (0, o.o)(n)
              c.current = [e, t, r]
            }, [n]),
            (0, r.d4)(() => {
              if (!e?.current) return
              if ((u(), t)) return
              function n(e) {
                'color' === e.propertyName && u()
              }
              const r = e.current
              return (
                r.addEventListener('transitionend', n),
                r.style.setProperty('transition', '0.1s color linear 50ms', 'important'),
                () => {
                  r.removeEventListener('transitionend', n), r.style.removeProperty('transition')
                }
              )
            }, [t, e, u]),
            { hexColor: n, rgbColor: c.current }
          )
        }
      },
      7792: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(60748)
        const o = function (e) {
          ;(0, r.d4)(e, [])
        }
      },
      274: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(87204)
        const a = (e, t, n) => {
          const a = (0, o.Z)(t)
          return (0, r.d4)(() => e(a || []), t, n)
        }
      },
      60706: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(60748)
        const o = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0
          const [n, o] = (0, r.eJ)(e, t),
            a = (0, r.I4)(() => {
              o(!0)
            }, []),
            s = (0, r.I4)(() => {
              o(!1)
            }, [])
          return [n, a, s]
        }
      },
      65326: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(60748)
        const o = () => {
          const [, e] = (0, r.eJ)(!1)
          return (0, r.I4)(() => {
            e((e) => !e)
          }, [])
        }
      },
      18674: (e, t, n) => {
        n.d(t, { YW: () => c, ZP: () => u, zG: () => i })
        var r = n(60748)
        const o = 'tt-event-heavy-animation-start',
          a = 'tt-event-heavy-animation-end'
        let s,
          d = !1
        function i() {
          return d
        }
        function c() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3
          function t() {
            s && (clearTimeout(s), (s = void 0)), (d = !1), document.dispatchEvent(new Event(a))
          }
          return (
            d || ((d = !0), document.dispatchEvent(new Event(o))),
            s && (clearTimeout(s), (s = void 0)),
            (s = window.setTimeout(t, e)),
            t
          )
        }
        const u = function (e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          ;(0, r.d4)(() => {
            if (!n)
              return (
                d && e(),
                document.addEventListener(o, e),
                document.addEventListener(a, t),
                () => {
                  document.removeEventListener(a, t), document.removeEventListener(o, e)
                }
              )
          }, [n, t, e])
        }
      },
      46590: (e, t, n) => {
        n.d(t, { Z: () => P })
        var r = n(60748),
          o = n(65116),
          a = n(83716),
          s = n(69118),
          d = n(863),
          i = n(34446),
          c = n(7792)
        const u = `${window.location.pathname}${window.location.search}`,
          l = Number(new Date())
        let f,
          h,
          m = !1,
          p = [],
          g = [],
          b = !1
        function y() {
          b &&
            setTimeout(() => {
              b = !1
            }, 350)
        }
        function v() {
          const e = p.filter((e) => 'go' === e.type),
            t = p.filter((e) => 'go' !== e.type),
            n = e.reduce((e, t) => e + t.delta, 0)
          ;(p = []), n && (window.history.go(n), t.length) ? g.push(...t) : w(t)
        }
        function w(e) {
          e.forEach((e) => window.history[e.type](e.data, '', e.hash))
        }
        function I(e) {
          p.length || (0, s.T2)(v), p.push(e)
        }
        function C() {
          ;(h = 0),
            (f = [{ index: 0, onBack: () => window.history.back() }]),
            window.history.replaceState({ index: 0, historyUniqueSessionId: l }, '', u)
        }
        function S() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = e
          for (let e = h - 1; e > 0 && f[e].isClosed; e--) t++
          return t && ((m = !0), I({ type: 'go', delta: -t })), t
        }
        function E() {
          let e = !1
          for (let t = f.length - 1; t > 0; t--)
            f[t].isClosed ||
              (!e && b && ((0, o.Sv)().disableHistoryAnimations(), (e = !0)), f[t].onBack?.())
          C()
        }
        function P(e) {
          let { isActive: t, shouldBeReplaced: n, hash: o, onBack: a } = e
          const s = (0, r.sO)(),
            d = (0, r.sO)(!1),
            u = (0, r.sO)(!0),
            m = (0, r.I4)(
              function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                const t = e || f[h].shouldBeReplaced
                ;(s.current = t ? h : ++h), (h = s.current)
                const r = f[s.current]
                r && !r.isClosed && r.markReplaced?.(),
                  (f[s.current] = {
                    index: s.current,
                    onBack: a,
                    shouldBeReplaced: n,
                    markReplaced: () => {
                      d.current = !0
                    },
                  })
                for (let e = s.current + 1; e < f.length; e++) delete f[e]
                I({
                  type: t ? 'replaceState' : 'pushState',
                  data: { index: s.current, historyUniqueSessionId: l },
                  hash: o ? `#${o}` : void 0,
                })
              },
              [o, a, n]
            ),
            p = (0, r.I4)(() => {
              s.current &&
                f[s.current] &&
                !d.current &&
                ((f[s.current].isClosed = !0), (d.current = !0), s.current !== h || n || (h -= S()))
            }, [n])
          ;(0, c.Z)(
            () => (
              (u.current = !1),
              () => {
                t && !d.current && p()
              }
            )
          ),
            (0, i.Z)(
              (e) => {
                let [n] = e
                n !== t && ((u.current && !t) || (t ? m() : p()))
              },
              [t, p, m]
            )
        }
        a.Cgt &&
          ((window.TEST_getHistoryState = () => f), (window.TEST_getHistoryCursor = () => h)),
          d.cj &&
            (window.addEventListener('touchstart', function (e) {
              const t = e.touches[0].pageX
              ;(t <= 300 || t >= window.innerWidth - 300) && (b = !0)
            }),
            window.addEventListener('touchend', y),
            window.addEventListener('popstate', y)),
          C(),
          window.addEventListener('popstate', (e) => {
            let { state: t } = e
            if (m) return (m = !1), void (g.length && (w(g), (g = [])))
            if (!t) return E(), void window.location.hash
            const { index: n, historyUniqueSessionId: r } = t
            if (r === l) {
              if (n !== h)
                if (n < h) {
                  let e = 0,
                    t = !1
                  for (let r = h; r > n - e; r--)
                    f[r].isClosed
                      ? e++
                      : (!t && b && ((0, o.Sv)().disableHistoryAnimations(), (t = !0)),
                        f[r].onBack?.())
                  const r = S(e)
                  ;(h += n - h - r), h < 0 && (h = 0)
                } else n > h && ((m = !0), I({ type: 'go', delta: -(n - h) }))
            } else E()
          })
      },
      3657: (e, t, n) => {
        n.d(t, { Op: () => c, S1: () => d, _N: () => i })
        var r = n(60748),
          o = n(69118),
          a = n(7792),
          s = n(18674)
        function d(e, t) {
          let {
            rootRef: n,
            throttleMs: a,
            debounceMs: d,
            shouldSkipFirst: i,
            margin: c,
            threshold: u,
            isDisabled: l,
          } = e
          const f = (0, r.sO)(),
            h = (0, r.sO)(),
            m = (0, r.sO)(0),
            p = (0, r.sO)()
          h.current = t
          const g = (0, r.I4)(() => {
              m.current++
            }, []),
            b = (0, r.I4)(() => {
              m.current &&
                (m.current--, !m.current && p.current && (p.current(), (p.current = void 0)))
            }, [])
          return (
            (0, s.ZP)(g, b),
            (0, r.d4)(() => {
              if (!l)
                return () => {
                  f.current &&
                    (f.current.observer.disconnect(),
                    f.current.callbacks.clear(),
                    (f.current = void 0))
                }
            }, [l]),
            {
              observe: (0, r.I4)(
                (e, t) => {
                  f.current ||
                    (function () {
                      const e = new Map(),
                        t = new Map(),
                        r = () => {
                          const n = Array.from(t.values())
                          n.forEach((t) => {
                            const r = e.get(t.target)
                            r && r(t, n)
                          }),
                            h.current && h.current(n),
                            t.clear()
                        },
                        s = a ? o.P2 : d ? o.Ds : void 0,
                        l = s ? s(r, a || d, !i) : r,
                        g = new IntersectionObserver(
                          (e) => {
                            e.forEach((e) => {
                              t.set(e.target, e)
                            }),
                              m.current
                                ? (p.current = () => {
                                    l()
                                  })
                                : l()
                          },
                          { root: n.current, rootMargin: c ? `${c}px` : void 0, threshold: u }
                        )
                      f.current = { observer: g, callbacks: e }
                    })()
                  const r = f.current
                  return (
                    r.observer.observe(e),
                    t && r.callbacks.set(e, t),
                    () => {
                      t && r.callbacks.delete(e), r.observer.unobserve(e)
                    }
                  )
                },
                [l]
              ),
              freeze: g,
              unfreeze: b,
            }
          )
        }
        function i(e, t, n) {
          ;(0, a.Z)(() => (t ? t(e.current, n) : void 0))
        }
        function c(e, t, n) {
          const [o, a] = (0, r.eJ)(!t)
          return (
            i(e, t, (e) => {
              a(e.isIntersecting), n && n(e)
            }),
            o
          )
        }
      },
      72313: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(60748)
        const o = (e, t, n, o, a) => {
          const [s, d] = (0, r.eJ)(-1)
          return (
            (0, r.d4)(() => {
              d(-1)
              const n = e.current
              t && n && !a && ((n.tabIndex = -1), n.focus())
            }, [e, t, a]),
            (0, r.I4)(
              (t) => {
                const r = e.current
                if (!r) return
                if (13 === t.keyCode && n) return void n(s)
                if (38 !== t.keyCode && 40 !== t.keyCode) return
                const a = document.activeElement,
                  i = Array.from(o ? r.querySelectorAll(o) : r.children)
                let c = (a && i.indexOf(a)) || s
                if (38 === t.keyCode && c > 0) c--
                else if (40 === t.keyCode && c < i.length - 1) c++
                else {
                  if (1 !== i.length) return
                  c = 0
                }
                const u = i[c]
                u && (d(c), u.focus())
              },
              [e, n, o, s]
            )
          )
        }
      },
      59107: (e, t, n) => {
        n.d(t, { Z: () => s })
        var r = n(50711),
          o = n(65326),
          a = n(34446)
        const s = () => {
          const e = (0, o.Z)()
          return (0, a.Z)(() => r.ll(e), [e]), r.QO()
        }
      },
      6202: (e, t, n) => {
        n.d(t, { Z: () => d })
        var r = n(60748),
          o = n(6137),
          a = n(40647),
          s = n(65326)
        const d = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.IU.BlobUrl,
            d = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0
          const c = e ? a.UV(e) : void 0,
            u = (0, s.Z)()
          return (
            (0, r.d4)(() => {
              if (!t && e && !c) {
                const t = Date.now()
                a.he(e, n).then(() => {
                  const e = Date.now() - t
                  !i || e >= i ? u() : setTimeout(u, i - e)
                })
              }
            }, [t, e, c, n, d, u, i]),
            c
          )
        }
      },
      70692: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(31212)
        function o(e) {
          const t = Boolean(e),
            { transitionClassNames: n } = (0, r.Z)(t, void 0, t, 'slow')
          return n
        }
      },
      48778: (e, t, n) => {
        n.d(t, { Z: () => s })
        var r = n(60748),
          o = n(99203),
          a = n(65326)
        const s = function (e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          const d = (0, o.o5)(e, t),
            i = (0, a.Z)()
          return (
            (0, r.d4)(() => {
              if (s) return (0, o.Qt)(i)
            }, [s, i]),
            (0, r.d4)(() => {
              n || d || (0, o.$y)(e).then(i)
            }, [e, i, d, t, n]),
            d
          )
        }
      },
      87204: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(60748)
        const o = function (e, t) {
          const n = (0, r.sO)(),
            { current: o } = n
          return (t && void 0 === e) || (n.current = e), o
        }
      },
      78722: (e, t, n) => {
        n.d(t, { Z: () => s })
        var r = n(60748),
          o = n(16063)
        const a = new Map()
        function s(e, t) {
          ;(0, r.d4)(() => {
            if (!('ResizeObserver' in window) || !e?.current) return
            const n = e.current,
              r = (e) => {
                let [n] = e
                n.target.offsetParent && t(n)
              }
            let [s, d] = a.get(n) || [void 0, void 0]
            return (
              s ||
                ((d = (0, o._)()),
                (s = new ResizeObserver(d.runCallbacks)),
                a.set(n, [s, d]),
                s.observe(n)),
              d.addCallback(r),
              () => {
                d.removeCallback(r),
                  d.hasCallbacks() || (s.unobserve(n), s.disconnect(), a.delete(n))
              }
            )
          }, [t, e])
        }
      },
      31212: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(46752)
        const a = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'fast',
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 350,
            i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6]
          const [c, u] = (0, r.eJ)(!e),
            l = (0, r.sO)(),
            [f, h] = (0, r.eJ)(e && n)
          if (e) u(!1), h(!0), l.current && (window.clearTimeout(l.current), (l.current = void 0))
          else if ((h(!1), !c && !l.current)) {
            const e = () => {
              u(!0), t && t(), (l.current = void 0)
            }
            s ? e() : (l.current = window.setTimeout(e, d))
          }
          const m = (f && !(s && !e)) || (i && e),
            p = Boolean(l.current),
            g = e || p,
            b = (0, o.Z)(a && 'opacity-transition', a, m && 'open', g && 'shown', p && 'closing')
          return { shouldRender: g, transitionClassNames: b, hasShownClass: g, hasOpenClass: m }
        }
      },
      34446: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(87204)
        const o = (e, t) => {
          const n = (0, r.Z)(t)
          ;(n && !t.some((e, t) => e !== n[t])) || e(n || [])
        }
      },
      3927: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(69118)
        function a(e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          const s = (0, r.I4)(e, t)
          return (0, r.Ye)(
            () => ('number' == typeof n ? (0, o.P2)(s, n, !a) : (0, o.mS)(s)),
            [s, n, a]
          )
        }
      },
      2903: (e, t, n) => {
        n.d(t, { Z: () => u })
        var r = n(60748),
          o = n(83716),
          a = n(863),
          s = n(10862),
          d = n(56112),
          i = n(11192),
          c = n(33555)
        function u(e) {
          const t = e && 'content' in e,
            n = t ? (0, d.DH)(e) : e?.thumbnail?.dataUri,
            u = t ? e.content?.sticker : e,
            l = n && u && !(0, a.on)() && n.includes('image/webp'),
            [f, h] = (0, r.eJ)(s.Hu),
            m = e?.id
          ;(0, r.bt)(() => {
            l &&
              (0, s.p6)(`b64-${m}`, n)
                .then(h)
                .catch((e) => {
                  o.eMD && console.error(e)
                })
          }, [m, l, n])
          const p = (0, i.Pu)((0, c.Rd)())
          return (0, r.Ye)(() => {
            const e = l ? f : n
            return e && 'dark' === p ? e.replace('<svg', '<svg fill="white"') : e
          }, [l, n, f, p])
        }
      },
      46898: (e, t, n) => {
        n.d(t, { Z: () => a })
        var r = n(60748),
          o = n(69118)
        function a(e, t) {
          ;(0, r.d4)(() => {
            const t = e.current
            return () => {
              t &&
                (0, o.T2)(() => {
                  t.pause(), (t.src = ''), t.load()
                })
            }
          }, t)
        }
      },
      58758: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(60748)
        function o(e, t, n, o) {
          ;(0, r.d4)(() => {
            const r = (e) => {
              const r = t.current,
                a = e.target
              !r ||
                !a ||
                (o && 2 === e.button) ||
                (r.contains(e.target) && !a.classList.contains('backdrop')) ||
                (e.preventDefault(), e.stopPropagation(), n?.())
            }
            return (
              e && n && document.addEventListener('mousedown', r),
              () => {
                document.removeEventListener('mousedown', r)
              }
            )
          }, [o, e, t, n])
        }
      },
      12255: (e, t, n) => {
        n.d(t, { Z: () => d })
        var r = n(60748),
          o = n(69118),
          a = n(43858),
          s = n(67360)
        const d = () => {
          const [e, t] = (0, r.eJ)(a.Z.get()),
            [n, d] = (0, r.eJ)(!1),
            i = (0, s.Z)(d, [d], 250, !0),
            c = (0, r.Ye)(() => ({ ...e, isResizing: n }), [n, e])
          return (
            (0, r.d4)(() => {
              const e = (0, o.P2)(
                  () => {
                    d(!0)
                  },
                  250,
                  !0
                ),
                n = (0, o.P2)(
                  () => {
                    t(a.Z.get()), i(!1)
                  },
                  250,
                  !1
                ),
                r = () => {
                  e(), n()
                }
              return (
                window.addEventListener('resize', r),
                () => {
                  window.removeEventListener('resize', r)
                }
              )
            }, [i]),
            c
          )
        }
      },
      31664: (e, t, n) => {
        n.d(t, { Z: () => B })
        var r = n(60748),
          o = n(83716)
        const a = new Set(['scroll', 'mouseenter', 'mouseleave', 'load']),
          s = {},
          d = {},
          i = new Map()
        function c(e, t) {
          const n = e
            .replace(/^on/, '')
            .replace(/Capture$/, '')
            .toLowerCase()
          return 'change' === n && 'SELECT' !== t.tagName
            ? 'input'
            : 'doubleclick' === n
            ? 'dblclick'
            : 'focus' === n
            ? 'focusin'
            : 'blur' === n
            ? 'focusout'
            : n
        }
        function u(e, t, n) {
          return !n && !a.has(e) && 'VIDEO' !== t.tagName && 'IFRAME' !== t.tagName
        }
        function l(e, t, n) {
          s[e] || ((s[e] = 0), document.addEventListener(e, h)),
            (function (e) {
              return d[e] || (d[e] = new Map()), d[e]
            })(e).set(t, n),
            (function (e) {
              const t = i.get(e)
              if (t) return t
              const n = new Set()
              return i.set(e, n), n
            })(t).add(e),
            s[e]++
        }
        function f(e, t) {
          s[e]--, s[e] || document.removeEventListener(e, h), d[e].delete(t), i.get(t).delete(e)
        }
        function h(e) {
          const t = d[e.type]
          if (t) {
            let n = !1,
              r = e.target
            const o = () => {
                n = !0
              },
              a = () => {
                e.preventDefault()
              },
              s = new Proxy(e, {
                get: (e, t) =>
                  'currentTarget' === t
                    ? r
                    : 'stopPropagation' === t || 'stopImmediatePropagation' === t
                    ? o
                    : 'preventDefault' === t
                    ? a
                    : Reflect.get(e, t),
              })
            for (; r && r !== document.body; ) {
              const e = t.get(r)
              if (e && (e(s), n)) return
              r = r.parentNode
            }
          }
        }
        o.eMD &&
          document.addEventListener('dblclick', () => {
            const e = Object.keys(s).length,
              t = Object.values(s).reduce((e, t) => e + t, 0),
              n = Object.keys(d).length,
              r = Object.values(d).reduce((e, t) => e + t.size, 0),
              o = i.size,
              a = Array.from(i.values()).reduce((e, t) => e + t.size, 0)
            console.warn('DELEGATED EVENTS STATS', {
              delegatedHandlersCount1: t,
              delegatedHandlersCount2: r,
              delegatedEventTypesCount: a,
              delegationRegistriesCount: n,
              delegationElementsCount: o,
              documentListenersCount: e,
            })
          })
        var m = n(60782)
        const p = new Set(['key', 'ref', 'teactFastList', 'teactOrderKey']),
          g = new Set(['dir', 'role', 'form']),
          b = ['INPUT', 'TEXTAREA', 'SELECT'],
          y = { autoPlay: 'autoplay', autoComplete: 'autocomplete' },
          v = new WeakMap()
        function w(e, t, n, a, s) {
          let d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
          const { skipComponentUpdate: i, fragment: c } = d
          let { nextSibling: u } = d
          const l = t && (0, r.op)(t),
            f = n && (0, r.op)(n),
            h = n,
            m = t && !l && (0, r.DN)(t),
            p = n && !f && (0, r.DN)(n)
          if (
            (!i && l && f && !(0, r.k)(t, n) && (n = C(t, n)),
            !i && f && n.componentInstance.isMounted && S(e, n, a, s),
            t === n)
          )
            return n
          if (o.eMD && n) {
            const e = 'target' in n && n.target
            if (e && (!t || ('target' in t && e !== t.target)))
              throw new Error('[Teact] Cached virtual element was moved within tree')
          }
          if (!t && n)
            if (f || p) f && (n = I(e, n, a, s)), E(e, n, { nextSibling: u, fragment: c })
            else {
              const t = P(h)
              ;(h.target = t), M(c || e, t, u)
            }
          else if (t && !n) A(e, t, void 0)
          else if (t && n)
            if ((0, r.k)(t, n))
              if ((u || (u = T(t)), f || p))
                f && (n = I(e, n, a, s)), A(e, t, void 0), E(e, n, { nextSibling: u, fragment: c })
              else {
                const n = P(h)
                ;(h.target = n), A(e, t, n, u)
              }
            else {
              const o = m && p
              if ((l && f) || o) n.children = N(t, n, e, u)
              else {
                const o = t,
                  a = o.target
                if (((h.target = a), (o.target = void 0), (0, r.HI)(t))) {
                  const r = n
                  ;(r.props.ref = t.props.ref),
                    u && M(e, a, u),
                    R(t, r, a),
                    (r.children = N(t, r, a))
                }
              }
            }
          return n
        }
        function I(e, t, n, o) {
          const { componentInstance: a } = t
          if (!a.isMounted) {
            S(e, (t = (0, r.Hb)(a)), n, o)
            const s = t.children[0]
            ;(0, r.op)(s) && (t.children = [I(e, s, t, 0)]), (a.isMounted = !0)
          }
          return t
        }
        function C(e, t) {
          return (
            (e.componentInstance.props = t.componentInstance.props), (0, r.SO)(e.componentInstance)
          )
        }
        function S(e, t, n, r) {
          const { componentInstance: o } = t
          o.onUpdate = () => {
            n.children[r] = w(e, n.children[r], o.$element, n, r, { skipComponentUpdate: !0 })
          }
        }
        function E(e, t, n) {
          t.children = t.children.map((r, o) => w(e, void 0, r, t, o, n))
        }
        function P(e) {
          if ((0, r.V2)(e)) return document.createTextNode('')
          if ((0, r.iB)(e)) return document.createTextNode(e.value)
          const { tag: t, props: n, children: o = [] } = e,
            a = document.createElement(t)
          return (
            'object' == typeof n.ref ? (n.ref.current = a) : 'function' == typeof n.ref && n.ref(a),
            Z(t, n),
            Object.entries(n).forEach((e) => {
              let [t, r] = e
              void 0 !== n[t] && _(a, t, r)
            }),
            (function (e, t) {
              b.includes(e.tagName) &&
                (t.defaultValue && _(e, 'value', t.defaultValue),
                t.defaultChecked && _(e, 'checked', t.defaultChecked))
            })(a, n),
            (e.children = o.map((t, n) => w(a, void 0, t, e, n))),
            a
          )
        }
        function A(e, t, n, o) {
          const a = (0, r.op)(t),
            s = !a && (0, r.DN)(t)
          a || s
            ? (a && (0, r.su)(t.componentInstance),
              (function (e, t) {
                t.children.forEach((n) => {
                  w(e, n, void 0, t, -1)
                })
              })(e, t),
              n && M(e, n, o))
            : (n ? e.replaceChild(n, t.target) : e.removeChild(t.target), k(t))
        }
        function k(e) {
          if ((0, r.op)(e)) (0, r.su)(e.componentInstance)
          else if (
            ((0, r.HI)(e) &&
              e.target &&
              ((function (e) {
                const t = i.get(e)
                t && (t.forEach((t) => f(t, e)), i.delete(e))
              })(e.target),
              e.props.ref?.current === e.target && (e.props.ref.current = void 0)),
            e.target && (e.target = void 0),
            !(0, r.f4)(e))
          )
            return
          e.children.forEach(k)
        }
        function M(e, t, n) {
          n ? e.insertBefore(t, n) : e.appendChild(t)
        }
        function T(e) {
          if ((0, r.op)(e) || (0, r.DN)(e)) return T(e.children[e.children.length - 1])
          const t = e.target,
            { nextSibling: n } = t
          return n || void 0
        }
        function N(e, t, n, a) {
          if (
            (o.eMD &&
              (function (e) {
                const t = e[0]
                if (t && 'props' in t && void 0 !== t.props.key) {
                  const t = e.reduce(
                    (e, t) => ('props' in t && t.props.key && e.push(t.props.key), e),
                    []
                  )
                  if (t.length !== (0, m.Tw)(t).length)
                    throw (
                      (console.warn(
                        '[Teact] Duplicated keys:',
                        t.filter((e, t, n) => n.indexOf(e) !== t)
                      ),
                      new Error('[Teact] Children keys are not unique'))
                    )
                }
              })(t.children),
            'props' in t && t.props.teactFastList)
          )
            return (function (e, t, n) {
              const a = new Set(
                t.children.map((e) => {
                  const t = 'props' in e ? e.props.key : void 0
                  if (
                    o.eMD &&
                    (0, r.f4)(e) &&
                    (null == t && console.warn('Missing `key` in `teactFastList`'), (0, r.DN)(e))
                  )
                    throw new Error(
                      '[Teact] Fragment can not be child of container with `teactFastList`'
                    )
                  return t
                })
              )
              let s = 0
              const d = e.children.reduce((e, r, o) => {
                let d = 'props' in r ? r.props.key : void 0
                const i = null != d
                if (i && !a.has(d)) return w(n, r, void 0, t, -1), e
                if (!i) {
                  const a = t.children[o],
                    s = a && 'props' in a ? a.props.key : void 0
                  if (!a || s) return w(n, r, void 0, t, -1), e
                  d = `__indexKey#${o}`
                }
                return (
                  (e[d] = {
                    $element: r,
                    index: s++,
                    orderKey: 'props' in r ? r.props.teactOrderKey : void 0,
                  }),
                  e
                )
              }, {})
              let i,
                c,
                u = [],
                l = 0
              return (
                t.children.forEach((e, r) => {
                  const o = 'props' in e ? e.props.key : `__indexKey#${r}`,
                    a = d[o]
                  if (!a) return i || ((i = []), (c = r)), void i.push(e)
                  i && ((u = u.concat(L(i, c, n, t))), (i = void 0), (c = void 0))
                  const s = 'props' in e ? e.props.teactOrderKey : void 0,
                    f = a.index !== l && a.orderKey !== s,
                    h = f && l > a.index
                  ;(f && !h) || l++,
                    u.push(
                      w(n, a.$element, e, t, r, {
                        nextSibling: f ? n.childNodes[h ? r + 1 : r] : void 0,
                      })
                    )
                }),
                i && (u = u.concat(L(i, c, n, t))),
                u
              )
            })(e, t, n)
          const s = e.children.length,
            d = t.children.length,
            i = Math.max(s, d),
            c = [],
            u = d > s ? document.createDocumentFragment() : void 0,
            l = e.children[s - 1],
            f = a || (d > s && l ? T(l) : void 0)
          for (let r = 0; r < i; r++) {
            const o = w(
              n,
              e.children[r],
              t.children[r],
              t,
              r,
              r >= s ? { fragment: u } : { nextSibling: a }
            )
            o && c.push(o)
          }
          return u && M(n, u, f), c
        }
        function L(e, t, n, r) {
          const o = n.childNodes[t]
          if (1 === e.length) return [w(n, void 0, e[0], r, t, { nextSibling: o })]
          const a = document.createDocumentFragment(),
            s = e.map((e, o) => w(n, void 0, e, r, t + o, { fragment: a }))
          return M(n, a, o), s
        }
        function Z(e, t) {
          if (!t.teactExperimentControlled) return
          const n = void 0 !== t.value,
            r = void 0 !== t.checked
          if ((!n && !r) || !b.includes(e.toUpperCase())) return
          const { value: o, checked: a, onInput: s, onChange: d } = t
          ;(t.onChange = void 0),
            (t.onInput = (e) => {
              if ((s?.(e), d?.(e), void 0 !== o && o !== e.currentTarget.value)) {
                const { selectionStart: t, selectionEnd: n } = e.currentTarget,
                  r = t === n && n === e.currentTarget.value.length
                if (((e.currentTarget.value = o), 'number' == typeof t && 'number' == typeof n)) {
                  e.currentTarget.setSelectionRange(t, n)
                  const o = { selectionStart: t, selectionEnd: n, isCaretAtEnd: r }
                  e.currentTarget.dataset.__teactSelectionState = JSON.stringify(o)
                }
              }
              void 0 !== a && (e.currentTarget.checked = a)
            })
        }
        function R(e, t, n) {
          Z(n.tagName, t.props)
          const r = Object.entries(e.props),
            o = Object.entries(t.props)
          r.forEach((e) => {
            let [r, o] = e
            const a = t.props[r]
            void 0 !== o &&
              (void 0 === a || (o !== a && r.startsWith('on'))) &&
              (function (e, t, n) {
                'className' === t
                  ? (e.className = '')
                  : 'value' === t
                  ? (e.value = '')
                  : 'style' === t
                  ? (e.style.cssText = '')
                  : 'dangerouslySetInnerHTML' === t
                  ? (e.innerHTML = '')
                  : t.startsWith('on')
                  ? (function (e, t, n) {
                      let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      const o = c(t, e)
                      u(o, e, r) ? f(o, e) : e.removeEventListener(o, n, r)
                    })(e, t, n, t.endsWith('Capture'))
                  : p.has(t) || e.removeAttribute(t)
              })(n, r, o)
          }),
            o.forEach((t) => {
              let [r, o] = t
              const a = e.props[r]
              void 0 !== o && o !== a && _(n, r, o)
            })
        }
        function _(e, t, n) {
          if ('className' === t) e.className = n
          else if ('value' === t) {
            const t = e
            if (t.value !== n) {
              t.value = n
              const e = t.dataset.__teactSelectionState
              if (e) {
                const { selectionStart: n, selectionEnd: r, isCaretAtEnd: o } = JSON.parse(e)
                if (o) {
                  const e = t.value.length
                  t.setSelectionRange(e, e)
                } else 'number' == typeof n && 'number' == typeof r && t.setSelectionRange(n, r)
              }
            }
          } else
            'style' === t
              ? (e.style.cssText = n)
              : 'dangerouslySetInnerHTML' === t
              ? (e.innerHTML = n.__html)
              : t.startsWith('on')
              ? (function (e, t, n) {
                  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  const o = c(t, e)
                  u(o, e, r) ? l(o, e, n) : e.addEventListener(o, n, r)
                })(e, t, n, t.endsWith('Capture'))
              : t.startsWith('data-') || t.startsWith('aria-') || g.has(t)
              ? e.setAttribute(t, n)
              : p.has(t) || (e[y[t] || t] = n)
        }
        const B = {
          render: function (e, t) {
            v.has(t) || v.set(t, { children: [] })
            const n = v.get(t),
              r = w(t, n.children[0], e, n, 0)
            n.children = r ? [r] : []
          },
        }
      },
      60748: (e, t, n) => {
        n.d(t, {
          ZP: () => ee,
          k: () => $,
          op: () => C,
          V2: () => v,
          DN: () => S,
          f4: () => E,
          HI: () => I,
          iB: () => w,
          X$: () => Q,
          Hb: () => V,
          SO: () => U,
          su: () => W,
          I4: () => Y,
          d4: () => K,
          bt: () => q,
          Ye: () => J,
          sO: () => X,
          eJ: () => G,
        })
        var r = n(83716),
          o = n(69118),
          a = n(60782),
          s = n(275),
          d = n(33592)
        const i = new Set(['TeactMemoWrapper renders', 'TeactNContainer renders', 'Button renders'])
        let c = {}
        const u = (0, o.P2)(
          function () {
            l ||
              (function () {
                ;(l = document.createElement('div')),
                  (l.style.cssText =
                    'position: absolute; left: 0; bottom: 25px; z-index: 9998; width: 260px; height: 200px; border: 1px solid #555; background: rgba(255, 255, 255, 0.9); overflow: auto; font-size: 10px;'),
                  document.body.appendChild(l)
                const e = document.createElement('a')
                ;(e.style.cssText =
                  'position: absolute; left: 222px; bottom: 198px; z-index: 9999; font-size: 20px; cursor: pointer;'),
                  (e.innerText = '🔄'),
                  e.addEventListener('click', () => {
                    ;(c = {}), u()
                  }),
                  document.body.appendChild(e)
              })()
            const e = Date.now() - 500,
              [t, n] = Object.entries(c).reduce(
                (e, t) => {
                  let [n, { value: r }] = t
                  return (
                    i.has(n) ||
                      (n.includes('renders') && r > e[0] && (e[0] = r),
                      n.includes('duration') && r > e[1] && (e[1] = r)),
                    e
                  )
                },
                [0, 0]
              )
            l.innerHTML = Object.entries(c)
              .filter((e) => {
                let [t, { value: n }] = e
                return (
                  !i.has(t) &&
                  ((t.includes('renders') && n > 5) || (t.includes('duration') && n > 2))
                )
              })
              .sort((e, t) => t[1].lastUpdateAt - e[1].lastUpdateAt)
              .map((r) => {
                let [o, { value: a, lastUpdateAt: s }] = r
                return [
                  `<div style="background: #ff0000${
                    ((d = a / (o.includes('renders') ? t : n)),
                    Math.round(255 * d)
                      .toString(16)
                      .padStart(2, '0'))
                  }">`,
                  `  <span${s > e ? ' style="background: lightgreen"' : ''}>${o}: ${Math.round(
                    a
                  )}</span>`,
                  '</div>',
                ].join('\n')
                var d
              })
              .join('\n')
          },
          500,
          !1
        )
        let l
        function f(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          const n = Date.now()
          c[e]
            ? ((c[e].value += t), (c[e].lastUpdateAt = n))
            : (c[e] = { value: t, lastUpdateAt: n }),
            u()
        }
        var h = n(19369)
        let m
        !(function (e) {
          ;(e[(e.Empty = 0)] = 'Empty'),
            (e[(e.Text = 1)] = 'Text'),
            (e[(e.Tag = 2)] = 'Tag'),
            (e[(e.Component = 3)] = 'Component'),
            (e[(e.Fragment = 4)] = 'Fragment')
        })(m || (m = {}))
        const p = Symbol('Fragment'),
          g = new Set(['TeactMemoWrapper', 'TeactNContainer', 'Button', 'ListItem', 'MenuItem'])
        let b,
          y = 0
        function v(e) {
          return e.type === m.Empty
        }
        function w(e) {
          return e.type === m.Text
        }
        function I(e) {
          return e.type === m.Tag
        }
        function C(e) {
          return e.type === m.Component
        }
        function S(e) {
          return e.type === m.Fragment
        }
        function E(e) {
          return I(e) || C(e) || S(e)
        }
        function P(e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o]
          return (
            (r = r.flat()),
            e === p ? A(r) : 'function' == typeof e ? k(e, t || {}, r) : T(e, t || {}, r)
          )
        }
        function A(e) {
          return { type: m.Fragment, children: N(e, !0).map(Z) }
        }
        function k(e, t, n) {
          let r
          0 === n.length ? (r = void 0) : 1 === n.length ? ([r] = n) : (r = n)
          const o = {
            id: ++y,
            $element: {},
            Component: e,
            name: e.name,
            props: { ...t, ...(r && { children: r }) },
            isMounted: !1,
            hooks: {
              state: { cursor: 0, byCursor: [] },
              effects: { cursor: 0, byCursor: [] },
              memos: { cursor: 0, byCursor: [] },
              refs: { cursor: 0, byCursor: [] },
            },
          }
          return (o.$element = M(o)), o.$element
        }
        function M(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          return {
            type: m.Component,
            componentInstance: e,
            props: e.props,
            children: N(t, !0).map(Z),
          }
        }
        function T(e, t, n) {
          return { type: m.Tag, tag: e, props: t, children: N(n).map(Z) }
        }
        function N(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.length - 1
          for (; n >= 0 && L(e[n]); n--);
          return n === e.length - 1 ? e : -1 === n && t ? e.slice(0, 1) : e.slice(0, n + 1)
        }
        function L(e) {
          return !1 === e || null == e
        }
        function Z(e) {
          return L(e) ? { type: m.Empty } : E(e) ? e : ((t = e), { type: m.Text, value: String(t) })
          var t
        }
        const R = { TOTAL: { componentName: 'TOTAL', renderCount: 0 } }
        document.addEventListener('dblclick', () => {
          console.warn('COMPONENTS', (0, a.Xo)(Object.values(R), 'renderCount', 'desc'))
        })
        let _ = new Set(),
          B = new Set(),
          O = new Map(),
          D = new Map(),
          F = new Map(),
          x = new Map()
        const j = (0, o.Uj)(() => {
          B = new Set()
          const e = Array.from(_).sort((e, t) => e.id - t.id)
          _ = new Set()
          const t = D
          ;(D = new Map()), t.forEach((e) => e())
          const n = O
          ;(O = new Map()),
            n.forEach((e) => e()),
            e.forEach(H),
            e.forEach((e) => {
              B.has(e.id) ||
                (function (e) {
                  if (!e.isMounted || !e.onUpdate) return
                  const t = e.$element
                  U(e), e.$element !== t && e.onUpdate()
                })(e)
            })
          const r = x
          ;(x = new Map()), r.forEach((e) => e())
          const o = F
          ;(F = new Map()), o.forEach((e) => e())
        })
        function U(e) {
          B.add(e.id)
          const { Component: t, props: n } = e
          let o
          try {
            let a
            if (
              ((b = e),
              (e.hooks.state.cursor = 0),
              (e.hooks.effects.cursor = 0),
              (e.hooks.memos.cursor = 0),
              (e.hooks.refs.cursor = 0),
              r.eMD)
            ) {
              const t = e.name
              R[t] || (R[t] = { componentName: t, renderCount: 0, renderTimes: [] }),
                r.ZTn && (g.has(t) || console.log(`[Teact] Render ${t}`)),
                (a = performance.now())
            }
            if (((o = t(n)), r.eMD)) {
              const t = performance.now() - a,
                n = e.name
              t > 7 && console.warn(`[Teact] Slow component render: ${n}, ${Math.round(t)} ms`),
                R[n].renderTimes.push(t),
                R[n].renderCount++,
                R.TOTAL.renderCount++,
                r.ZTn && (f(`${n} renders`), f(`${n} duration`, t))
            }
          } catch (t) {
            console.error(`[Teact] Error while rendering component ${e.name}`),
              (0, d.S)(t),
              (o = e.renderedValue)
          }
          if (e.isMounted && o === e.renderedValue) return e.$element
          e.renderedValue = o
          const a = Array.isArray(o) ? o : [o]
          return (e.$element = M(e, a)), e.$element
        }
        function $(e, t) {
          return (
            typeof e != typeof t ||
            e.type !== t.type ||
            (w(e) && w(t)
              ? e.value !== t.value
              : I(e) && I(t)
              ? e.tag !== t.tag || e.props.key !== t.props.key
              : !(
                  !C(e) ||
                  !C(t) ||
                  (e.componentInstance.Component === t.componentInstance.Component &&
                    e.props.key === t.props.key)
                ))
          )
        }
        function V(e) {
          return U(e), (e.isMounted = !0), e.$element
        }
        function W(e) {
          e.isMounted &&
            (B.add(e.id),
            e.hooks.effects.byCursor.forEach((e) => {
              try {
                e.cleanup?.()
              } catch (e) {
                ;(0, d.S)(e)
              }
              ;(e.cleanup = void 0), e.releaseSignals?.()
            }),
            (e.isMounted = !1),
            (function (e) {
              e.hooks.effects.byCursor.forEach((e) => {
                ;(e.schedule = void 0),
                  (e.cleanup = void 0),
                  (e.releaseSignals = void 0),
                  (e.dependencies = void 0)
              }),
                e.hooks.state.byCursor.forEach((e) => {
                  ;(e.value = void 0), (e.nextValue = void 0), (e.setter = void 0)
                }),
                e.hooks.memos.byCursor.forEach((e) => {
                  ;(e.value = void 0), (e.dependencies = void 0)
                }),
                e.hooks.refs.byCursor.forEach((e) => {
                  e.current = void 0
                }),
                (e.hooks = void 0),
                (e.$element = void 0),
                (e.renderedValue = void 0),
                (e.Component = void 0),
                (e.props = void 0),
                (e.onUpdate = void 0)
            })(e))
        }
        function H(e) {
          e.isMounted &&
            e.hooks.state.byCursor.forEach((e) => {
              e.value = e.nextValue
            })
        }
        function G(e, t) {
          const { cursor: n, byCursor: o } = b.hooks.state
          var a
          return (
            void 0 === o[n] &&
              (o[n] = {
                value: e,
                nextValue: e,
                setter:
                  ((a = b),
                  (e) => {
                    'function' == typeof e && (e = e(o[n].value)),
                      o[n].nextValue !== e &&
                        ((o[n].nextValue = e),
                        (function (e) {
                          _.add(e), j()
                        })(a),
                        r.ZTn &&
                          'TeactNContainer' !== a.name &&
                          console.log(
                            '[Teact.useState]',
                            a.name,
                            a.Component && a.Component.DEBUG_contentComponentName
                              ? `> ${a.Component.DEBUG_contentComponentName}`
                              : '',
                            `State update at cursor #${n}${t ? ` (${t})` : ''}, next value: `,
                            o[n].nextValue
                          ))
                  }),
              }),
            b.hooks.state.cursor++,
            [o[n].value, o[n].setter]
          )
        }
        function z(e, t, n, o) {
          const { cursor: a, byCursor: s } = b.hooks.effects,
            i = b
          function c() {
            const { cleanup: e } = s[a]
            if (e) {
              try {
                let t
                if ((r.eMD && (t = performance.now()), e(), r.eMD)) {
                  const e = performance.now() - t,
                    n = i.name
                  e > 7 &&
                    console.warn(
                      `[Teact] Slow cleanup at effect cursor #${a}: ${n}, ${Math.round(e)} ms`
                    )
                }
              } catch (e) {
                console.error(`[Teact] Error in effect cleanup at cursor #${a} in ${i.name}`),
                  (0, d.S)(e)
              }
              s[a].cleanup = void 0
            }
          }
          function u() {
            if (i.isMounted)
              try {
                let e
                r.eMD && (e = performance.now())
                const n = t()
                if (('function' == typeof n && (s[a].cleanup = n), r.eMD)) {
                  const t = performance.now() - e,
                    n = i.name
                  t > 7 &&
                    console.warn(`[Teact] Slow effect at cursor #${a}: ${n}, ${Math.round(t)} ms`)
                }
              } catch (e) {
                console.error(`[Teact] Error in effect at cursor #${a} in ${i.name}`), (0, d.S)(e)
              }
          }
          function l() {
            const t = `${i.id}_${a}`
            e ? (x.set(t, c), F.set(t, u)) : (D.set(t, c), O.set(t, u), j())
          }
          if (n && s[a]?.dependencies) {
            if (n.some((e, t) => e !== s[a].dependencies[t])) {
              if (o) {
                const e = n.reduce((e, t, n) => {
                  const r = s[a].dependencies[n]
                  return t !== r && e.push(`${n}: ${r} => ${t}`), e
                }, [])
                console.log(`[Teact] Effect "${o}" caused by dependencies.`, e.join(', '))
              }
              l()
            }
          } else o && console.log(`[Teact] Effect "${o}" caused by missing dependencies.`), l()
          const f = !s[a]
          ;(s[a] = { ...s[a], dependencies: n, schedule: l }),
            f &&
              (s[a].releaseSignals = (function () {
                const e = n?.filter(h.$Z).map((e) =>
                  e.subscribe(() => {
                    s[a].schedule()
                  })
                )
                if (e?.length)
                  return () => {
                    e.forEach((e) => e())
                  }
              })()),
            b.hooks.effects.cursor++
        }
        function K(e, t, n) {
          return z(!1, e, t, n)
        }
        function q(e, t, n) {
          return z(!0, e, t, n)
        }
        function J(e, t, n) {
          const { cursor: o, byCursor: a } = b.hooks.memos
          let { value: d } = a[o] || {}
          return (
            (void 0 === a[o] || t.some((e, t) => e !== a[o].dependencies[t])) &&
              (r.eMD &&
                n &&
                console.log(
                  `[Teact.useMemo] ${b.name} (${n}): Update is caused by:`,
                  a[o] ? (0, s.c)(t, a[o].dependencies).join(', ') : '[first render]'
                ),
              (d = e())),
            (a[o] = { value: d, dependencies: t }),
            b.hooks.memos.cursor++,
            d
          )
        }
        function Y(e, t, n) {
          return J(() => e, t, n)
        }
        function X(e) {
          const { cursor: t, byCursor: n } = b.hooks.refs
          return n[t] || (n[t] = { current: e }), b.hooks.refs.cursor++, n[t]
        }
        function Q(e, t) {
          return function (n) {
            return J(() => P(e, n), Object.values(n), t)
          }
        }
        const ee = { createElement: P, Fragment: p }
      },
      65116: (e, t, n) => {
        n.d(t, { Iq: () => T, Sv: () => P, gP: () => L, ll: () => M })
        var r = n(60748),
          o = n(83716),
          a = n(65326),
          s = n(26926),
          d = n(69118),
          i = n(275),
          c = n(60782),
          u = n(33592),
          l = n(18674)
        function f() {
          return (
            (f = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t]
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
                }),
            f.apply(this, arguments)
          )
        }
        let h,
          m = {}
        const p = (0, d.$6)(() => {
            h = void 0
          }),
          g = {},
          b = [
            function () {
              let e
              o.eMD && (e = performance.now())
              for (const e of w.values()) {
                const {
                  mapStateToProps: t,
                  ownProps: n,
                  mappedProps: r,
                  forceUpdate: a,
                  isDetached: s,
                  detachWhenChanged: d,
                } = e
                if (s) continue
                let c
                try {
                  if (((c = t(m, n, d)), e.isDetached)) continue
                } catch (e) {
                  return void (0, u.S)(e)
                }
                o.eMD &&
                  Object.values(c).some(Number.isNaN) &&
                  console.warn(
                    `[TeactN] Some of \`${e.DEBUG_componentName}\` mappers contain NaN values. This may cause redundant updates because of incorrect equality check.`
                  ),
                  Object.keys(c).length &&
                    !(0, i.Z)(r, c) &&
                    (o.ZTn &&
                      console.log(
                        '[TeactN] Will update',
                        e.DEBUG_componentName,
                        'caused by',
                        (0, i.c)(r, c).join(', ')
                      ),
                    (e.mappedProps = c),
                    e.DEBUG_updates++,
                    a())
              }
              if (o.eMD) {
                const t = performance.now() - e
                t > 7 && console.warn(`[TeactN] Slow containers update: ${Math.round(t)} ms`)
              }
            },
          ],
          y = [],
          v = {},
          w = new Map(),
          I = (0, d.$6)(C)
        function C() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          e || !(0, l.zG)() ? b.forEach((e) => e(m)) : (0, d.WN)(I)
        }
        function S(e, t) {
          if ('object' == typeof e && e !== m) {
            if (o.eMD) {
              if (e.DEBUG_capturedId && e.DEBUG_capturedId !== h)
                throw new Error('[TeactN.setGlobal] Attempt to set an outdated global')
              h = void 0
            }
            ;(m = e),
              t?.noUpdate || y.forEach((e) => e(m)),
              t?.forceSyncOnIOs ? C(!0) : I(t?.forceOnHeavyAnimation)
          }
        }
        function E() {
          return o.eMD && ((h = Math.random()), (m = { ...m, DEBUG_capturedId: h }), p()), m
        }
        function P() {
          return v
        }
        let A = []
        function k(e, t) {
          g[e] ||
            ((g[e] = []),
            (v[e] = (t, n) => {
              !(function (e, t, n) {
                if (
                  (A.push(() => {
                    g[e]?.forEach((e) => {
                      const r = e(o.eMD ? E() : m, v, t)
                      r && 'function' != typeof r.then && S(r, n)
                    })
                  }),
                  1 === A.length)
                )
                  try {
                    for (; A.length; ) A[0](), A.shift()
                  } finally {
                    A = []
                  }
              })(e, t, n)
            })),
            g[e].push(t)
        }
        function M(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ;(t ? y : b).push(e)
        }
        function T(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          const n = (t ? y : b).indexOf(e)
          ;-1 !== n && (t ? y : b).splice(n, 1)
        }
        function N() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => ({})
          return (t) =>
            function n(o) {
              n.DEBUG_contentComponentName = t.name
              const [d] = (0, r.eJ)((0, s.Z)(w)),
                c = (0, a.Z)()
              ;(0, r.d4)(
                () => () => {
                  w.delete(d)
                },
                [d]
              )
              let l = w.get(d)
              if (
                (l ||
                  ((l = {
                    mapStateToProps: e,
                    ownProps: o,
                    forceUpdate: c,
                    isDetached: !1,
                    detachReason: void 0,
                    detachWhenChanged: (e) => {
                      const { detachReason: t } = l
                      void 0 === t && void 0 !== e
                        ? (l.detachReason = e)
                        : void 0 !== t && t !== e && (l.isDetached = !0)
                    },
                    DEBUG_updates: 0,
                    DEBUG_componentName: t.name,
                  }),
                  w.set(d, l)),
                !((l.mappedProps && (0, i.Z)(l.ownProps, o)) || ((l.ownProps = o), l.isDetached)))
              )
                try {
                  l.mappedProps = e(m, o, l.detachWhenChanged)
                } catch (e) {
                  ;(0, u.S)(e)
                }
              return r.ZP.createElement(t, f({}, l.mappedProps, o))
            }
        }
        function L() {
          return { getGlobal: E, setGlobal: S, getActions: P, addActionHandler: k, withGlobal: N }
        }
        o.eMD &&
          ((window.getGlobal = E),
          (window.setGlobal = S),
          document.addEventListener('dblclick', () => {
            console.warn(
              'GLOBAL CONTAINERS',
              (0, c.Xo)(
                Array.from(w.values()).map((e) => {
                  let { DEBUG_componentName: t, DEBUG_updates: n } = e
                  return { DEBUG_componentName: t, DEBUG_updates: n }
                }),
                'DEBUG_updates',
                'desc'
              )
            )
          }))
      },
      33681: (e, t, n) => {
        n.d(t, { Z: () => s, l: () => a })
        const r = /\uFE0F/g,
          o = String.fromCharCode(8205)
        function a(e) {
          return e.indexOf(o) < 0 ? e.replace(r, '') : e
        }
        const s =
          /(?:\ud83c[\udd70\udd71\udd7e\udd7f]\ufe0f)|(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g
      },
      91713: (e, t, n) => {
        let r, o, a, s, d, i, c, u, l, f, h, m, p, g
        n.d(t, {
          Cr: () => u,
          KB: () => g,
          MT: () => a,
          Nh: () => l,
          Uq: () => r,
          WB: () => m,
          bZ: () => c,
          du: () => s,
          fo: () => o,
          mp: () => b,
          nJ: () => d,
          qt: () => i,
          rN: () => f,
          u1: () => y,
          vi: () => p,
          wv: () => h,
        }),
          (function (e) {
            ;(e[(e.Backwards = 0)] = 'Backwards'),
              (e[(e.Forwards = 1)] = 'Forwards'),
              (e[(e.Around = 2)] = 'Around')
          })(r || (r = {})),
          (function (e) {
            ;(e[(e.Up = 0)] = 'Up'), (e[(e.Down = 1)] = 'Down'), (e[(e.Static = 2)] = 'Static')
          })(o || (o = {})),
          (function (e) {
            ;(e[(e.Main = 0)] = 'Main'),
              (e[(e.EditProfile = 1)] = 'EditProfile'),
              (e[(e.Notifications = 2)] = 'Notifications'),
              (e[(e.DataStorage = 3)] = 'DataStorage'),
              (e[(e.Language = 4)] = 'Language'),
              (e[(e.ActiveSessions = 5)] = 'ActiveSessions'),
              (e[(e.General = 6)] = 'General'),
              (e[(e.GeneralChatBackground = 7)] = 'GeneralChatBackground'),
              (e[(e.GeneralChatBackgroundColor = 8)] = 'GeneralChatBackgroundColor'),
              (e[(e.Privacy = 9)] = 'Privacy'),
              (e[(e.PrivacyPhoneNumber = 10)] = 'PrivacyPhoneNumber'),
              (e[(e.PrivacyLastSeen = 11)] = 'PrivacyLastSeen'),
              (e[(e.PrivacyProfilePhoto = 12)] = 'PrivacyProfilePhoto'),
              (e[(e.PrivacyPhoneCall = 13)] = 'PrivacyPhoneCall'),
              (e[(e.PrivacyPhoneP2P = 14)] = 'PrivacyPhoneP2P'),
              (e[(e.PrivacyForwarding = 15)] = 'PrivacyForwarding'),
              (e[(e.PrivacyVoiceMessages = 16)] = 'PrivacyVoiceMessages'),
              (e[(e.PrivacyGroupChats = 17)] = 'PrivacyGroupChats'),
              (e[(e.PrivacyPhoneNumberAllowedContacts = 18)] = 'PrivacyPhoneNumberAllowedContacts'),
              (e[(e.PrivacyPhoneNumberDeniedContacts = 19)] = 'PrivacyPhoneNumberDeniedContacts'),
              (e[(e.PrivacyLastSeenAllowedContacts = 20)] = 'PrivacyLastSeenAllowedContacts'),
              (e[(e.PrivacyLastSeenDeniedContacts = 21)] = 'PrivacyLastSeenDeniedContacts'),
              (e[(e.PrivacyProfilePhotoAllowedContacts = 22)] =
                'PrivacyProfilePhotoAllowedContacts'),
              (e[(e.PrivacyProfilePhotoDeniedContacts = 23)] = 'PrivacyProfilePhotoDeniedContacts'),
              (e[(e.PrivacyPhoneCallAllowedContacts = 24)] = 'PrivacyPhoneCallAllowedContacts'),
              (e[(e.PrivacyPhoneCallDeniedContacts = 25)] = 'PrivacyPhoneCallDeniedContacts'),
              (e[(e.PrivacyPhoneP2PAllowedContacts = 26)] = 'PrivacyPhoneP2PAllowedContacts'),
              (e[(e.PrivacyPhoneP2PDeniedContacts = 27)] = 'PrivacyPhoneP2PDeniedContacts'),
              (e[(e.PrivacyForwardingAllowedContacts = 28)] = 'PrivacyForwardingAllowedContacts'),
              (e[(e.PrivacyForwardingDeniedContacts = 29)] = 'PrivacyForwardingDeniedContacts'),
              (e[(e.PrivacyVoiceMessagesAllowedContacts = 30)] =
                'PrivacyVoiceMessagesAllowedContacts'),
              (e[(e.PrivacyVoiceMessagesDeniedContacts = 31)] =
                'PrivacyVoiceMessagesDeniedContacts'),
              (e[(e.PrivacyGroupChatsAllowedContacts = 32)] = 'PrivacyGroupChatsAllowedContacts'),
              (e[(e.PrivacyGroupChatsDeniedContacts = 33)] = 'PrivacyGroupChatsDeniedContacts'),
              (e[(e.PrivacyBlockedUsers = 34)] = 'PrivacyBlockedUsers'),
              (e[(e.Folders = 35)] = 'Folders'),
              (e[(e.FoldersCreateFolder = 36)] = 'FoldersCreateFolder'),
              (e[(e.FoldersEditFolder = 37)] = 'FoldersEditFolder'),
              (e[(e.FoldersEditFolderFromChatList = 38)] = 'FoldersEditFolderFromChatList'),
              (e[(e.FoldersIncludedChats = 39)] = 'FoldersIncludedChats'),
              (e[(e.FoldersIncludedChatsFromChatList = 40)] = 'FoldersIncludedChatsFromChatList'),
              (e[(e.FoldersExcludedChats = 41)] = 'FoldersExcludedChats'),
              (e[(e.FoldersExcludedChatsFromChatList = 42)] = 'FoldersExcludedChatsFromChatList'),
              (e[(e.TwoFaDisabled = 43)] = 'TwoFaDisabled'),
              (e[(e.TwoFaNewPassword = 44)] = 'TwoFaNewPassword'),
              (e[(e.TwoFaNewPasswordConfirm = 45)] = 'TwoFaNewPasswordConfirm'),
              (e[(e.TwoFaNewPasswordHint = 46)] = 'TwoFaNewPasswordHint'),
              (e[(e.TwoFaNewPasswordEmail = 47)] = 'TwoFaNewPasswordEmail'),
              (e[(e.TwoFaNewPasswordEmailCode = 48)] = 'TwoFaNewPasswordEmailCode'),
              (e[(e.TwoFaEnabled = 49)] = 'TwoFaEnabled'),
              (e[(e.TwoFaChangePasswordCurrent = 50)] = 'TwoFaChangePasswordCurrent'),
              (e[(e.TwoFaChangePasswordNew = 51)] = 'TwoFaChangePasswordNew'),
              (e[(e.TwoFaChangePasswordConfirm = 52)] = 'TwoFaChangePasswordConfirm'),
              (e[(e.TwoFaChangePasswordHint = 53)] = 'TwoFaChangePasswordHint'),
              (e[(e.TwoFaTurnOff = 54)] = 'TwoFaTurnOff'),
              (e[(e.TwoFaRecoveryEmailCurrentPassword = 55)] = 'TwoFaRecoveryEmailCurrentPassword'),
              (e[(e.TwoFaRecoveryEmail = 56)] = 'TwoFaRecoveryEmail'),
              (e[(e.TwoFaRecoveryEmailCode = 57)] = 'TwoFaRecoveryEmailCode'),
              (e[(e.TwoFaCongratulations = 58)] = 'TwoFaCongratulations'),
              (e[(e.ActiveWebsites = 59)] = 'ActiveWebsites'),
              (e[(e.PasscodeDisabled = 60)] = 'PasscodeDisabled'),
              (e[(e.PasscodeNewPasscode = 61)] = 'PasscodeNewPasscode'),
              (e[(e.PasscodeNewPasscodeConfirm = 62)] = 'PasscodeNewPasscodeConfirm'),
              (e[(e.PasscodeEnabled = 63)] = 'PasscodeEnabled'),
              (e[(e.PasscodeChangePasscodeCurrent = 64)] = 'PasscodeChangePasscodeCurrent'),
              (e[(e.PasscodeChangePasscodeNew = 65)] = 'PasscodeChangePasscodeNew'),
              (e[(e.PasscodeChangePasscodeConfirm = 66)] = 'PasscodeChangePasscodeConfirm'),
              (e[(e.PasscodeTurnOff = 67)] = 'PasscodeTurnOff'),
              (e[(e.PasscodeCongratulations = 68)] = 'PasscodeCongratulations'),
              (e[(e.Experimental = 69)] = 'Experimental'),
              (e[(e.Stickers = 70)] = 'Stickers'),
              (e[(e.QuickReaction = 71)] = 'QuickReaction'),
              (e[(e.CustomEmoji = 72)] = 'CustomEmoji'),
              (e[(e.DoNotTranslate = 73)] = 'DoNotTranslate')
          })(a || (a = {})),
          (function (e) {
            ;(e[(e.ChatList = 0)] = 'ChatList'),
              (e[(e.GlobalSearch = 1)] = 'GlobalSearch'),
              (e[(e.Settings = 2)] = 'Settings'),
              (e[(e.Contacts = 3)] = 'Contacts'),
              (e[(e.Archived = 4)] = 'Archived'),
              (e[(e.NewChannelStep1 = 5)] = 'NewChannelStep1'),
              (e[(e.NewChannelStep2 = 6)] = 'NewChannelStep2'),
              (e[(e.NewGroupStep1 = 7)] = 'NewGroupStep1'),
              (e[(e.NewGroupStep2 = 8)] = 'NewGroupStep2')
          })(s || (s = {})),
          (function (e) {
            ;(e[(e.ChatList = 0)] = 'ChatList'),
              (e[(e.Media = 1)] = 'Media'),
              (e[(e.Links = 2)] = 'Links'),
              (e[(e.Files = 3)] = 'Files'),
              (e[(e.Music = 4)] = 'Music'),
              (e[(e.Voice = 5)] = 'Voice')
          })(d || (d = {})),
          (function (e) {
            ;(e[(e.ChatInfo = 0)] = 'ChatInfo'),
              (e[(e.Search = 1)] = 'Search'),
              (e[(e.Management = 2)] = 'Management'),
              (e[(e.Statistics = 3)] = 'Statistics'),
              (e[(e.MessageStatistics = 4)] = 'MessageStatistics'),
              (e[(e.StickerSearch = 5)] = 'StickerSearch'),
              (e[(e.GifSearch = 6)] = 'GifSearch'),
              (e[(e.PollResults = 7)] = 'PollResults'),
              (e[(e.AddingMembers = 8)] = 'AddingMembers'),
              (e[(e.CreateTopic = 9)] = 'CreateTopic'),
              (e[(e.EditTopic = 10)] = 'EditTopic')
          })(i || (i = {})),
          (function (e) {
            ;(e[(e.Inline = 0)] = 'Inline'),
              (e[(e.ScheduledInline = 1)] = 'ScheduledInline'),
              (e[(e.SharedMedia = 2)] = 'SharedMedia'),
              (e[(e.ProfileAvatar = 3)] = 'ProfileAvatar'),
              (e[(e.SettingsAvatar = 4)] = 'SettingsAvatar'),
              (e[(e.MiddleHeaderAvatar = 5)] = 'MiddleHeaderAvatar'),
              (e[(e.Album = 6)] = 'Album'),
              (e[(e.ScheduledAlbum = 7)] = 'ScheduledAlbum'),
              (e[(e.SearchResult = 8)] = 'SearchResult'),
              (e[(e.SuggestedAvatar = 9)] = 'SuggestedAvatar')
          })(c || (c = {})),
          (function (e) {
            ;(e[(e.Inline = 0)] = 'Inline'),
              (e[(e.SharedMedia = 1)] = 'SharedMedia'),
              (e[(e.Search = 2)] = 'Search')
          })(u || (u = {})),
          (function (e) {
            ;(e[(e.Idle = 0)] = 'Idle'),
              (e[(e.InProgress = 1)] = 'InProgress'),
              (e[(e.Complete = 2)] = 'Complete'),
              (e[(e.Error = 3)] = 'Error')
          })(l || (l = {})),
          (function (e) {
            ;(e[(e.Idle = 0)] = 'Idle'),
              (e[(e.InProgress = 1)] = 'InProgress'),
              (e[(e.Complete = 2)] = 'Complete'),
              (e[(e.Error = 3)] = 'Error')
          })(f || (f = {})),
          (function (e) {
            ;(e[(e.Idle = 0)] = 'Idle'),
              (e[(e.InProgress = 1)] = 'InProgress'),
              (e[(e.Complete = 2)] = 'Complete'),
              (e[(e.Error = 3)] = 'Error')
          })(h || (h = {})),
          (function (e) {
            ;(e[(e.Closed = 0)] = 'Closed'),
              (e[(e.InProgress = 1)] = 'InProgress'),
              (e[(e.Loading = 2)] = 'Loading')
          })(m || (m = {})),
          (function (e) {
            ;(e[(e.Profile = 0)] = 'Profile'),
              (e[(e.SharedMedia = 1)] = 'SharedMedia'),
              (e[(e.MemberList = 2)] = 'MemberList')
          })(p || (p = {})),
          (function (e) {
            ;(e[(e.Checkout = 0)] = 'Checkout'),
              (e[(e.SavedPayments = 1)] = 'SavedPayments'),
              (e[(e.ConfirmPassword = 2)] = 'ConfirmPassword'),
              (e[(e.PaymentInfo = 3)] = 'PaymentInfo'),
              (e[(e.ShippingInfo = 4)] = 'ShippingInfo'),
              (e[(e.Shipping = 5)] = 'Shipping'),
              (e[(e.ConfirmPayment = 6)] = 'ConfirmPayment')
          })(g || (g = {}))
        const b = 'UPLOADING_WALLPAPER_SLUG'
        let y
        !(function (e) {
          ;(e[(e.Initial = 0)] = 'Initial'),
            (e[(e.ChatPrivacyType = 1)] = 'ChatPrivacyType'),
            (e[(e.Discussion = 2)] = 'Discussion'),
            (e[(e.ChannelSubscribers = 3)] = 'ChannelSubscribers'),
            (e[(e.GroupType = 4)] = 'GroupType'),
            (e[(e.GroupPermissions = 5)] = 'GroupPermissions'),
            (e[(e.GroupRemovedUsers = 6)] = 'GroupRemovedUsers'),
            (e[(e.ChannelRemovedUsers = 7)] = 'ChannelRemovedUsers'),
            (e[(e.GroupUserPermissionsCreate = 8)] = 'GroupUserPermissionsCreate'),
            (e[(e.GroupUserPermissions = 9)] = 'GroupUserPermissions'),
            (e[(e.ChatAdministrators = 10)] = 'ChatAdministrators'),
            (e[(e.GroupRecentActions = 11)] = 'GroupRecentActions'),
            (e[(e.ChatAdminRights = 12)] = 'ChatAdminRights'),
            (e[(e.ChatNewAdminRights = 13)] = 'ChatNewAdminRights'),
            (e[(e.GroupMembers = 14)] = 'GroupMembers'),
            (e[(e.GroupAddAdmins = 15)] = 'GroupAddAdmins'),
            (e[(e.Invites = 16)] = 'Invites'),
            (e[(e.EditInvite = 17)] = 'EditInvite'),
            (e[(e.Reactions = 18)] = 'Reactions'),
            (e[(e.InviteInfo = 19)] = 'InviteInfo'),
            (e[(e.JoinRequests = 20)] = 'JoinRequests')
        })(y || (y = {}))
      },
      9933: (e, t, n) => {
        n.d(t, { M8: () => i, cK: () => a, jt: () => s, vr: () => c })
        var r = n(69118)
        let o
        function a(e, t) {
          t || (o && !o.isCancelled && (o.isCancelled = !0), (o = t = { isCancelled: !1 })),
            !t.isCancelled &&
              e() &&
              (0, r.T2)(() => {
                a(e, t)
              })
        }
        function s(e) {
          ;(0, r.T2)(() => {
            e() && s(e)
          })
        }
        function d(e) {
          e() &&
            (0, r.T2)(() => {
              d(e)
            })
        }
        const i = {
          linear: (e) => e,
          easeIn: (e) => e ** 1.675,
          easeOut: (e) => -1 * e ** 1.675,
          easeInOut: (e) => 0.5 * (Math.sin((e - 0.5) * Math.PI) + 1),
          easeInQuad: (e) => e * e,
          easeOutQuad: (e) => e * (2 - e),
          easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
          easeInCubic: (e) => e ** 3,
          easeOutCubic: (e) => --e * e * e + 1,
          easeInOutCubic: (e) => (e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
          easeInQuart: (e) => e ** 4,
          easeOutQuart: (e) => 1 - --e * e ** 3,
          easeInOutQuart: (e) => (e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e * e ** 3),
          easeInQuint: (e) => e ** 5,
          easeOutQuint: (e) => 1 + --e * e ** 4,
          easeInOutQuint: (e) => (e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e * e ** 4),
        }
        function c(e) {
          let { timing: t = i.linear, onUpdate: n, duration: r, onEnd: o, from: a, to: s } = e
          const c = Date.now()
          let u = !1
          return (
            d(() => {
              if (u) return !1
              let e = (Date.now() - c) / r
              e > 1 && (e = 1)
              const d = t(e)
              if ('number' == typeof a && 'number' == typeof s) n(a + (s - a) * d)
              else if (Array.isArray(a) && Array.isArray(s)) {
                const e = a.map((e, t) => e + (s[t] - e) * d)
                n(e)
              }
              return 1 === e && o && o(), e < 1
            }),
            () => {
              ;(u = !0), o && o()
            }
          )
        }
      },
      17358: (e, t, n) => {
        n.d(t, { w: () => s })
        var r = n(83716),
          o = n(33555),
          a = n(11192)
        function s(e) {
          ;(0, a.jU)((0, o.Rd)()).isMasterTab &&
            'function' == typeof window.navigator.setAppBadge &&
            window.navigator.setAppBadge(e).catch((e) => {
              r.eMD && console.error(e)
            })
        }
      },
      84112: (e, t, n) => {
        function r(e, t) {
          const n = typeof e
          if (n !== typeof t) return !1
          if ('object' !== n) return e === t
          const o = Array.isArray(e)
          if (o !== Array.isArray(t)) return !1
          if (o) {
            const n = e,
              o = t
            return n.length === o.length && n.every((e, t) => r(e, o[t]))
          }
          const a = e,
            s = t
          return Object.keys(a).every((e) => r(a[e], s[e]))
        }
        n.d(t, { A: () => r })
      },
      275: (e, t, n) => {
        function r(e, t) {
          if (e === t) return !0
          const n = Object.keys(e),
            r = n.length
          if (r !== Object.keys(t).length) return !1
          if (0 === r) return !0
          for (let o = 0; o < r; o++) {
            const r = n[o]
            if (e[r] !== t[r]) return !1
          }
          return !0
        }
        function o(e, t) {
          const n = Object.keys(e)
          return n.length !== Object.keys(t).length
            ? ['%LENGTH%']
            : n.reduce((n, r) => (e[r] !== t[r] && n.push(`${r}: ${e[r]} => ${t[r]}`), n), [])
        }
        n.d(t, { Z: () => r, c: () => o })
      },
      46752: (e, t, n) => {
        function r() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
          return t.filter(Boolean).join(' ')
        }
        function o(e) {
          return function (t) {
            const n = '&' === t ? e : `${e}__${t}`
            for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
              o[a - 1] = arguments[a]
            return o
              .reduce(
                (e, t) => (t && (Array.isArray(t) ? e.push(...t) : e.push(`${n}--${t}`)), e),
                [n]
              )
              .join(' ')
          }
        }
        n.d(t, { Z: () => r, y: () => o })
      },
      80036: (e, t, n) => {
        function r() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
          return t.filter(Boolean).join(';')
        }
        n.d(t, { Z: () => r })
      },
      49524: (e, t, n) => {
        n.d(t, { Type: () => o, clear: () => d, fetch: () => a, save: () => s })
        const r = self.caches
        let o
        async function a(e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          if (r)
            try {
              const s = new Request(t.replace(/:/g, '_')),
                d = await r.open(e),
                i = await d.match(s)
              if (!i) return
              const c = i.headers.get('Content-Type')
              switch (n) {
                case o.Text:
                  return await i.text()
                case o.Blob: {
                  if (t.startsWith('avatar') && c && c.startsWith('text')) return
                  const e = await i.blob(),
                    n = !e.type || (!a && e.type.includes('html'))
                  let r = e.type || c
                  return n && r
                    ? (a || (r = r.replace(/html/gi, '')), new Blob([e], { type: r }))
                    : e
                }
                case o.Json:
                  return await i.json()
                case o.ArrayBuffer:
                  return await i.arrayBuffer()
                default:
                  return
              }
            } catch (e) {
              return void console.warn(e)
            }
        }
        async function s(e, t, n) {
          if (r)
            try {
              const o =
                  'string' == typeof n || n instanceof Blob || n instanceof ArrayBuffer
                    ? n
                    : JSON.stringify(n),
                a = new Request(t.replace(/:/g, '_')),
                s = new Response(o),
                d = await r.open(e)
              return await d.put(a, s)
            } catch (e) {
              return void console.warn(e)
            }
        }
        async function d(e) {
          try {
            if (!r) return
            return await r.delete(e)
          } catch (e) {
            return void console.warn(e)
          }
        }
        !(function (e) {
          ;(e[(e.Text = 0)] = 'Text'),
            (e[(e.Blob = 1)] = 'Blob'),
            (e[(e.Json = 2)] = 'Json'),
            (e[(e.ArrayBuffer = 3)] = 'ArrayBuffer')
        })(o || (o = {}))
      },
      16063: (e, t, n) => {
        function r() {
          const e = []
          function t(t) {
            const n = e.indexOf(t)
            ;-1 !== n && e.splice(n, 1)
          }
          return {
            runCallbacks: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r]
              e.forEach((e) => {
                e(...n)
              })
            },
            addCallback: function (n) {
              return (
                e.push(n),
                () => {
                  t(n)
                }
              )
            },
            removeCallback: t,
            hasCallbacks: function () {
              return Boolean(e.length)
            },
          }
        }
        n.d(t, { _: () => r })
      },
      23989: (e, t, n) => {
        n.d(t, { Z: () => o })
        var r = n(517)
        function o(e) {
          return (0, r.Z)({ onEsc: e })
        }
      },
      517: (e, t, n) => {
        n.d(t, { Z: () => a })
        const r = {
            Enter: 'onEnter',
            Backspace: 'onBackspace',
            Delete: 'onDelete',
            Esc: 'onEsc',
            Escape: 'onEsc',
            ArrowUp: 'onUp',
            ArrowDown: 'onDown',
            ArrowLeft: 'onLeft',
            ArrowRight: 'onRight',
            Tab: 'onTab',
          },
          o = {
            onEnter: [],
            onDelete: [],
            onBackspace: [],
            onEsc: [],
            onUp: [],
            onDown: [],
            onLeft: [],
            onRight: [],
            onTab: [],
          }
        function a(e) {
          return (
            s() || document.addEventListener('keydown', d, !0),
            Object.keys(e).forEach((t) => {
              const n = e[t]
              if (!n) return
              const r = o[t]
              r && r.push(n)
            }),
            () => {
              !(function (e) {
                Object.keys(e).forEach((t) => {
                  const n = e[t],
                    r = o[t]
                  if (r) {
                    const e = r.findIndex((e) => e === n)
                    ;-1 !== e && r.splice(e, 1)
                  }
                }),
                  s() || document.removeEventListener('keydown', d, !1)
              })(e)
            }
          )
        }
        function s() {
          return Object.values(o).some((e) => Boolean(e.length))
        }
        function d(e) {
          const t = r[e.key]
          if (!t) return
          const { length: n } = o[t]
          if (n)
            for (let r = n - 1; r >= 0; r--)
              if (!1 !== (0, o[t][r])(e)) {
                e.stopPropagation()
                break
              }
        }
      },
      64319: (e, t, n) => {
        n.d(t, { TE: () => s, VP: () => i, qN: () => d, yl: () => o })
        var r = n(83716)
        const o = window.navigator.clipboard && window.ClipboardItem,
          a = document.createElement('textarea')
        a.setAttribute('readonly', ''), (a.tabIndex = -1), (a.className = 'visually-hidden')
        const s = (e) => {
            ;(a.value = e), document.body.appendChild(a)
            const t = document.getSelection()
            if (t) {
              const e = t.rangeCount > 0 && t.getRangeAt(0)
              a.select(), document.execCommand('copy'), e && (t.removeAllRanges(), t.addRange(e))
            }
            document.body.removeChild(a)
          },
          d = (e, t) => {
            window.navigator.clipboard?.write
              ? window.navigator.clipboard.write([
                  new ClipboardItem({
                    'text/plain': new Blob([t], { type: 'text/plain' }),
                    'text/html': new Blob([e], { type: 'text/html' }),
                  }),
                ])
              : s(t)
          },
          i = (e) => {
            if (!e) return
            const t = document.createElement('canvas'),
              n = t.getContext('2d'),
              r = new Image()
            ;(r.onload = (e) => {
              if (n && e.currentTarget) {
                const r = e.currentTarget
                ;(t.width = r.width),
                  (t.height = r.height),
                  n.drawImage(r, 0, 0, r.width, r.height),
                  t.toBlob(c, 'image/png', 1)
              }
            }),
              (r.src = e)
          }
        async function c(e) {
          if (e && o)
            try {
              await window.navigator.clipboard.write?.([new ClipboardItem({ [e.type]: e })])
            } catch (e) {
              r.eMD && console.error(e)
            }
        }
      },
      1279: (e, t, n) => {
        function r(e, t, n, r) {
          a('transitionend', e, t, n, r)
        }
        function o(e, t, n, r) {
          a('animationend', e, t, n, r)
        }
        function a(e, t, n, r, o) {
          let a = !1
          function s(o) {
            a ||
              o.target !== o.currentTarget ||
              (r &&
                ((o instanceof TransitionEvent && o.propertyName === r) ||
                  (o instanceof AnimationEvent && o.animationName === r))) ||
              ((a = !0),
              t.removeEventListener(e, s),
              setTimeout(() => {
                n()
              }, 50))
          }
          t.addEventListener(e, s),
            o &&
              setTimeout(() => {
                a || (t.removeEventListener(e, s), n())
              }, o)
        }
        n.d(t, { L: () => r, f: () => o })
      },
      74288: (e, t, n) => {
        n.d(t, {
          AU: () => S,
          XH: () => E,
          bn: () => w,
          dA: () => A,
          k2: () => y,
          pT: () => I,
          sp: () => v,
        })
        var r = n(65116),
          o = n(33555),
          a = n(6137),
          s = n(56112),
          d = n(40647),
          i = n(69118),
          c = n(26926),
          u = n(863),
          l = n(53930),
          f = n(69123)
        const h = {},
          m = new Set(),
          p = new Map(),
          g = new Set()
        let b
        function y(e, t) {
          p.set(e, t)
        }
        function v(e) {
          p.delete(e)
        }
        function w(e) {
          g.add(e)
        }
        function I(e) {
          g.delete(e)
        }
        ;(0, r.ll)((e) => {
          if (e.customEmojis.byId !== b?.customEmojis.byId) {
            for (const t of p) {
              const [n, r] = t
              e.customEmojis.byId[r] && n(e.customEmojis)
            }
            !(function (e) {
              const t = Array.from(m).filter((t) => Boolean(e.byId[t]))
              t.length && (t.forEach((e) => m.delete(e)), S())
            })(e.customEmojis)
          }
          b = e
        })
        const C = (0, i.P2)((e) => {
            g.forEach((t) => t(e))
          }, 500),
          S = (0, i.P2)(function () {
            document.querySelectorAll('.custom-emoji.placeholder').forEach((e) => {
              const t = (0, o.Rd)().customEmojis.byId[e.dataset.documentId]
              if (!t) return void m.add(e.dataset.documentId)
              const [n, r, a] = A(t)
              n ||
                ((e.src = r),
                e.classList.remove('placeholder'),
                a && (e.dataset.uniqueId = a),
                C(t.id))
            })
          }, 500)
        function E(e, t) {
          const n = t ? (0, s.RK)(e) : `sticker${e}`,
            r = d.UV(n)
          if (r) return r
          P(n)
        }
        function P(e) {
          return d.he(e, a.IU.BlobUrl).then(() => {
            S()
          })
        }
        function A(e) {
          if (!e) return [!0, l, void 0]
          const t = !u.Hh && e.isVideo
          if (e.isLottie || (e.isVideo && !t)) return P(`sticker${e.id}`), [!1, f, (0, c.Z)(h, !0)]
          const n = E(e.id, t)
          return [!n, n || l, void 0]
        }
      },
      790: (e, t, n) => {
        n.d(t, {
          $Y: () => i,
          D: () => g,
          IS: () => T,
          J_: () => v,
          SA: () => A,
          Tu: () => m,
          VX: () => h,
          ZK: () => I,
          _F: () => c,
          dJ: () => y,
          j1: () => w,
          k9: () => C,
          kj: () => u,
          mB: () => b,
          mr: () => f,
          np: () => p,
          rM: () => S,
          xH: () => P,
          xR: () => s,
          xk: () => M,
          zk: () => d,
        })
        var r = n(15155)
        const o = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          a = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ].map((e) => e.toLowerCase()),
          s = 864e5
        function d(e) {
          return c(new Date()) === c(e)
        }
        function i(e) {
          const t = new Date(e)
          return t.setHours(0, 0, 0, 0), t
        }
        function c(e) {
          return i(e).getTime()
        }
        function u(e) {
          const t = new Date(1e3 * e)
          return `${t.getFullYear()}-${t.getMonth()}`
        }
        function l(e) {
          return `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`
        }
        function f(e, t) {
          const n = 'number' == typeof t ? new Date(t) : t,
            r = e.timeFormat || '24h'
          let o = n.getHours(),
            a = ''
          return (
            '12h' === r && ((a = o >= 12 ? ' PM' : ' AM'), (o = o > 12 ? o % 12 : o)),
            `${String(o).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}${a}`
          )
        }
        function h(e, t) {
          const n = 'number' == typeof t ? new Date(t) : t,
            r = i(new Date())
          if (n >= r) return f(e, n)
          const a = new Date(r)
          if ((a.setDate(r.getDate() - 7), n >= a)) return e(`Weekday.Short${o[n.getDay()]}`)
          const s = n.getFullYear() === r.getFullYear()
          return P(n, e.code, s)
        }
        function m(e, t) {
          return P(t, e.code, !1, 'numeric')
        }
        function p(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return P(t, e.code, !1, n ? 'short' : 'long', !0)
        }
        function g(e, t) {
          const n = Math.floor(t / s)
          return t < 0
            ? 0
            : n < 1
            ? C(t / 1e3)
            : n < 7
            ? e('Days', n)
            : n < 30
            ? e('Weeks', Math.floor(n / 7))
            : n < 365
            ? e('Months', Math.floor(n / 30))
            : e('Years', Math.floor(n / 365))
        }
        function b(e, t) {
          return t < 6e4
            ? Math.ceil(t / 1e3).toString()
            : t < 36e5
            ? Math.ceil(t / 6e4).toString()
            : t < s
            ? e('MessageTimer.ShortHours', Math.ceil(t / 36e5))
            : e('MessageTimer.ShortDays', Math.ceil(t / s))
        }
        function y(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t
          const r = t - n
          return r < 60
            ? e('LiveLocationUpdated.JustNow')
            : r < 3600
            ? e('LiveLocationUpdated.MinutesAgo', Math.floor(r / 60))
            : e('LiveLocationUpdated.TodayAt', f(e, n))
        }
        function v(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2
          if (!t) return
          const r = [],
            o = [
              { multiplier: 1, type: 'Seconds' },
              { multiplier: 60, type: 'Minutes' },
              { multiplier: 60, type: 'Hours' },
              { multiplier: 24, type: 'Days' },
              { multiplier: 7, type: 'Weeks' },
            ]
          let a = 1
          o.forEach((e, n) => {
            if (((a *= e.multiplier), t < a)) return
            const s = o[n === o.length - 1 ? n : n + 1].multiplier
            r.push({ duration: Math.floor((t / a) % s), type: e.type })
          })
          const s = r.slice(-n).reverse()
          for (let e = s.length - 1; e >= 0; --e) 0 === s[e].duration && s.splice(e, 1)
          return s.map((t) => e(t.type, t.duration, 'i')).join(', ')
        }
        function w(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = arguments.length > 4 ? arguments[4] : void 0
          const s = 'number' == typeof t ? new Date(t) : t,
            d = i(new Date())
          if (!r) {
            if (l(s) === l(d)) return (a || !n ? L : N)(e('Weekday.Today'))
            const t = new Date(d)
            if ((t.setDate(d.getDate() - 1), l(s) === l(t)))
              return (a || !n ? L : N)(e('Weekday.Yesterday'))
            const r = new Date(d),
              i = new Date(d)
            if ((r.setDate(d.getDate() - 7), i.setDate(d.getDate() + 7), s >= r && s <= i)) {
              const t = o[s.getDay()]
              return (a || !n ? L : N)(e(n ? `Weekday.Short${t}` : `Weekday.${t}`))
            }
          }
          const c = s.getFullYear() === d.getFullYear(),
            u = P(s, e.code, c, n ? 'short' : 'long')
          return (a || !n ? L : N)(u)
        }
        function I(e, t, n) {
          const r = 'number' == typeof t ? new Date(t) : t
          return `${w(e, r, !0, void 0, n)}, ${f(e, r)}`
        }
        function C(e, t) {
          const n = Math.floor(e / 3600),
            r = Math.floor((e % 3600) / 60),
            o = Math.floor((e % 3600) % 60),
            a = t ? Math.floor(t / 3600) : 0,
            s = t ? Math.floor((t % 3600) / 60) : 0
          let d = ''
          return (
            n > 0 || a > 0
              ? ((d += `${String(n).padStart(2, '0')}:`), (d += `${String(r).padStart(2, '0')}:`))
              : (d += s >= 10 ? `${String(r).padStart(2, '0')}:` : `${String(r)}:`),
            (d += String(o).padStart(2, '0')),
            d
          )
        }
        function S(e) {
          const t = []
          let n = e % 1e3
          ;(e -= n), (n = Math.floor(n / 10))
          const r = (e = Math.floor(e / 1e3)) % 60
          e -= r
          const o = (e = Math.floor(e / 60)) % 60
          e -= o
          const a = (e = Math.floor(e / 60)) % 60
          return (
            a > 0 && t.push(String(a).padStart(2, '0')),
            t.push(String(o).padStart(a > 0 ? 2 : 1, '0')),
            t.push(String(r).padStart(2, '0')),
            `${t.join(':')},${String(n).padStart(2, '0')}`
          )
        }
        const E = (0, r.Z)(function (e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'short',
            o = arguments.length > 4 ? arguments[4] : void 0
          return new Date(e).toLocaleString(t, {
            year: n ? void 0 : 'numeric',
            month: r,
            day: o ? void 0 : 'numeric',
          })
        })
        function P(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'en-US',
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'short',
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          const a = 'number' == typeof e ? new Date(e) : e,
            s = c(a)
          return E(s, t, n, r, o)
        }
        function A(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'en-US',
            n = arguments.length > 2 ? arguments[2] : void 0
          const r = 'number' == typeof e ? new Date(e) : e
          return r.toLocaleString(t, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: n ? void 0 : 'numeric',
          })
        }
        function k(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2021
          if (t > 11 || e > 31) return !1
          const r = new Date(n, t, e)
          return !Number.isNaN(r.getTime()) && r.getDate() === e
        }
        function M() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
          const t = e.match(/\d{1,2}\s[a-zA-Z]{3,}/),
            n = e.match(/[a-zA-Z]{3,}\s\d{1,2}/),
            r = e.match(/\d{1,2}[./-]\d{1,2}([./-]\d{2,4})?/)
          if (!t && !r && !n) return
          if (r) {
            const [t, n, r] = e.split(/[./-]/).map(Number)
            return (r && r < 2015) || !k(t, n - 1, r || void 0)
              ? void 0
              : `${r ? `${r}-` : ''}${String(n).padStart(2, '0')}-${String(t).padStart(2, '0')}`
          }
          const o = e.split(' '),
            s = t ? o[0] : o[1],
            d = (t ? o[1] : o[0]).toLowerCase(),
            i = a.findIndex((e) => e.startsWith(d))
          return -1 !== i && k(Number(s), i)
            ? `${String(i + 1).padStart(2, '0')}-${String(s).padStart(2, '0')}`
            : void 0
        }
        function T(e) {
          return e + s / 1e3
        }
        function N(e) {
          return `${e[0].toLowerCase()}${e.slice(1)}`
        }
        function L(e) {
          return `${e[0].toUpperCase()}${e.slice(1)}`
        }
      },
      53551: (e, t, n) => {
        n.d(t, { GX: () => d, QH: () => i, ou: () => s })
        var r = n(33555),
          o = n(83716),
          a = n(863)
        const s = (e) => {
          const { protocol: t, searchParams: n, pathname: o, hostname: s } = new URL(e)
          if ('tg:' !== t) return
          const {
              openChatByInvite: c,
              openChatByUsername: u,
              openChatByPhoneNumber: l,
              openStickerSet: f,
              focusMessage: h,
              joinVoiceChatByLink: m,
              openInvoice: p,
              processAttachBotParameters: g,
              openChatWithDraft: b,
            } = (0, r.Sv)(),
            y = (a.s$ ? s : o).replace(/^\/\//, ''),
            v = Object.fromEntries(n)
          switch (y) {
            case 'resolve': {
              const {
                  domain: e,
                  phone: t,
                  post: n,
                  comment: r,
                  voicechat: o,
                  livestream: a,
                  start: s,
                  startattach: i,
                  attach: c,
                  thread: f,
                  topic: h,
                } = v,
                p = !(!v.hasOwnProperty('startattach') || i) || i,
                b = d(v.choose),
                y = Number(f) || Number(h) || void 0
              'telegrampassport' !== e &&
                (p && b
                  ? g({ username: e, filter: b, ...('string' == typeof p && { startParam: p }) })
                  : v.hasOwnProperty('voicechat') || v.hasOwnProperty('livestream')
                  ? m({ username: e, inviteHash: o || a })
                  : t
                  ? l({ phoneNumber: t, startAttach: p, attach: c })
                  : u({
                      username: e,
                      messageId: n ? Number(n) : void 0,
                      commentId: r ? Number(r) : void 0,
                      startParam: s,
                      startAttach: p,
                      attach: c,
                      threadId: y,
                    }))
              break
            }
            case 'privatepost': {
              const { post: e, channel: t } = v
              h({ chatId: `-${t}`, messageId: Number(e) })
              break
            }
            case 'bg':
            case 'login':
            default:
              break
            case 'join': {
              const { invite: e } = v
              c({ hash: e })
              break
            }
            case 'addemoji':
            case 'addstickers': {
              const { set: e } = v
              f({ stickerSetInfo: { shortName: e } })
              break
            }
            case 'share':
            case 'msg':
            case 'msg_url': {
              const { url: e, text: t } = v
              b({ text: i(e, t) })
              break
            }
            case 'invoice': {
              const { slug: e } = v
              p({ slug: e })
              break
            }
          }
        }
        function d(e) {
          if (e)
            return e
              .toLowerCase()
              .split(' ')
              .filter((e) => o.F9z.includes(e))
        }
        function i(e, t, n) {
          return [e, n, t].filter(Boolean).join('\n')
        }
      },
      34284: (e, t, n) => {
        n.d(t, { DW: () => l, NM: () => f, Uz: () => i, Wg: () => h, g6: () => u, mE: () => c })
        var r = n(33681),
          o = n(15155)
        const a = ['female_sign', 'male_sign', 'medical_symbol'],
          s = [
            [/\u{1f3f3}\u200d\u{1f308}/gu, '🏳️‍🌈'],
            [/\u{1f3f3}\u200d\u26a7\ufe0f/gu, '🏳️‍⚧️'],
            [/\u{1f937}\u200d\u2642[^\ufe0f]/gu, '🤷‍♂️'],
          ]
        function d(e) {
          const t = e.split('-').map((e) => parseInt(e, 16))
          return String.fromCodePoint(...t)
        }
        const i = new Set()
        function c(e) {
          e.currentTarget.classList.add('open'), i.add(e.currentTarget.dataset.path)
        }
        function u(e) {
          if (!e.match(r.Z)) return e
          for (const [t, n] of s) e = e.replace(t, n)
          return e
        }
        const l = (0, o.Z)(function (e) {
          return (function (e) {
            let t
            if (1 === e.length) t = e.charCodeAt(0).toString(16).padStart(4, '0')
            else {
              const n = []
              for (let t = 0; t < e.length; t++)
                e.charCodeAt(t) >= 55296 && e.charCodeAt(t) <= 56319
                  ? e.charCodeAt(t + 1) >= 56320 &&
                    e.charCodeAt(t + 1) <= 57343 &&
                    n.push(1024 * (e.charCodeAt(t) - 55296) + (e.charCodeAt(t + 1) - 56320) + 65536)
                  : (e.charCodeAt(t) < 55296 || e.charCodeAt(t) > 57343) && n.push(e.charCodeAt(t))
              t = n.map((e) => e.toString(16).padStart(4, '0')).join('-')
            }
            return t
          })((0, r.l)(e))
        })
        function f(e) {
          const t = { categories: [], emojis: {} }
          for (let n = 0; n < e.length; n += 2) {
            const r = { id: e[n][0], name: e[n][1], emojis: [] }
            for (let o = 0; o < e[n + 1].length; o++) {
              const s = e[n + 1][o]
              a.includes(s[1][0]) ||
                (r.emojis.push(s[1][0]),
                (t.emojis[s[1][0]] = {
                  id: s[1][0],
                  names: s[1],
                  native: d(s[0]),
                  image: s[0].toLowerCase(),
                }))
            }
            t.categories.push(r)
          }
          return t
        }
        function h(e) {
          const t = e.toUpperCase()
          if (!/^[A-Z]{2}$/.test(t)) return e
          const n = [...t].map((e) => e.codePointAt(0) + 127397)
          return String.fromCodePoint(...n)
        }
      },
      81396: (e, t, n) => {
        function r(e) {
          if (e) return e.includes('://') ? e : `http://${e}`
        }
        n.d(t, { X: () => r })
      },
      65054: (e, t, n) => {
        n.d(t, {
          AG: () => P,
          Pz: () => A,
          Z6: () => I,
          _w: () => C,
          g: () => E,
          l: () => v,
          s1: () => S,
        })
        var r = n(16063),
          o = n(83716),
          a = n(863),
          s = n(95281)
        const { addCallback: d, runCallbacks: i } = (0, r._)(),
          { addCallback: c, runCallbacks: u } = (0, r._)(),
          l = Number(Math.random().toString().substring(2)),
          f = new Set([l]),
          h = a.Eo ? new BroadcastChannel(o.avG) : void 0
        let m,
          p,
          g = !1,
          b = !1
        const y = (e) => {
          let { data: t } = e
          if (h && t) {
            if ((t.currentPasscodeHash && (0, s.xV)(t.currentPasscodeHash), t.hasGaveUpMaster && b))
              return (m = l), (b = !1), void i(!0)
            if (t.shouldGiveUpMaster)
              return (
                m === l &&
                  (i(!1), h.postMessage({ currentPasscodeHash: (0, s.FB)(), hasGaveUpMaster: !0 })),
                void (m = t.masterToken)
              )
            if (
              (t.tokenDied &&
                (u(t.tokenDied),
                f.delete(t.tokenDied),
                t.tokenDied === m &&
                  (f.delete(t.tokenDied),
                  (m = void 0),
                  (g = !1),
                  (p = t.tokenDied),
                  h.postMessage({ collectedTokens: f, masterToken: m, reestablishToken: p }),
                  1 === f.size && ((g = !0), (m = l), (p = void 0), i(!0)))),
              t.collectedTokens)
            ) {
              if (!t.reestablishToken && p) return
              t.reestablishToken &&
                p !== t.reestablishToken &&
                (t.collectedTokens.delete(t.reestablishToken), (p = t.reestablishToken))
              const e = f.size
              t.collectedTokens.forEach((e) => f.add(e)),
                p && t.collectedTokens.delete(p),
                g
                  ? t.masterToken ||
                    h.postMessage({ collectedTokens: f, masterToken: m, reestablishToken: p })
                  : t.masterToken
                  ? ((p = void 0),
                    (m = t.masterToken),
                    i(m === l),
                    g || h.postMessage({ collectedTokens: f, masterToken: m, reestablishToken: p }),
                    (g = !0))
                  : e !== f.size
                  ? h.postMessage({ collectedTokens: f, masterToken: m, reestablishToken: p })
                  : ((p = void 0),
                    (m = Math.max(...Array.from(f))),
                    i(m === l),
                    g || h.postMessage({ collectedTokens: f, masterToken: m, reestablishToken: p }),
                    (g = !0))
            }
          }
        }
        function v() {
          h &&
            (h.addEventListener('message', y),
            h.postMessage({ collectedTokens: f }),
            setTimeout(() => {
              void 0 === m && ((m = l), i(!0))
            }, 100),
            window.addEventListener('beforeunload', w))
        }
        function w() {
          h &&
            (u(l),
            h.removeEventListener('message', y),
            h.postMessage({ tokenDied: l, currentPasscodeHash: (0, s.FB)() }),
            h.close())
        }
        function I() {
          h && h.postMessage({ currentPasscodeHash: (0, s.FB)() })
        }
        function C() {
          return l
        }
        function S() {
          return Array.from(f)
        }
        function E() {
          h &&
            ((b = !0),
            h.postMessage({ collectedTokens: f, masterToken: l, shouldGiveUpMaster: !0 }))
        }
        const P = c,
          A = d
      },
      71394: (e, t, n) => {
        n.d(t, {
          A9: () => a,
          YJ: () => s,
          ao: () => f,
          gm: () => l,
          hl: () => d,
          jj: () => c,
          ox: () => h,
          pt: () => i,
          ud: () => u,
        }),
          n(83716)
        var r = n(69118)
        function o(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ('object' != typeof e || null === e) return e
                var n = e[Symbol.toPrimitive]
                if (void 0 !== n) {
                  var r = n.call(e, t)
                  if ('object' != typeof r) return r
                  throw new TypeError('@@toPrimitive must return a primitive value.')
                }
                return String(e)
              })(e, 'string')
              return 'symbol' == typeof t ? t : String(t)
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function a(e) {
          const t = e.split(','),
            n = t[0].match(/:(.*?);/)[1],
            r = atob(t[1])
          let o = r.length
          const a = new Uint8Array(o)
          for (; o--; ) a[o] = r.charCodeAt(o)
          return new Blob([a], { type: n })
        }
        function s(e) {
          return new Promise((t, n) => {
            const r = new FileReader()
            ;(r.onload = (e) => {
              const { result: r } = e.target || {}
              'string' == typeof r && t(r), n(new Error('Failed to read blob'))
            }),
              (r.onerror = n),
              r.readAsDataURL(e)
          })
        }
        function d(e, t) {
          return new File([e], t, { lastModified: Date.now(), type: e.type })
        }
        function i(e) {
          return new Promise((t, n) => {
            const r = new Image()
            ;(r.onload = () => t(r)), (r.onerror = n), (r.src = e)
          })
        }
        function c(e) {
          return new Promise((t, n) => {
            const r = document.createElement('video')
            ;(r.volume = 0), (r.onloadedmetadata = () => t(r)), (r.onerror = n), (r.src = e)
          })
        }
        async function u(e) {
          const t = await c(e)
          return Promise.race([
            (0, r.wO)(2e3),
            new Promise((e, n) => {
              ;(t.onseeked = () => {
                ;(t.videoWidth && t.videoHeight) || e(void 0)
                const n = document.createElement('canvas')
                ;(n.width = t.videoWidth),
                  (n.height = t.videoHeight),
                  n.getContext('2d').drawImage(t, 0, 0),
                  e(n.toDataURL('image/jpeg'))
              }),
                (t.onerror = n),
                (t.currentTime = Math.min(t.duration, 1))
            }),
          ])
        }
        async function l(e) {
          return (await fetch(e)).blob()
        }
        function f(e) {
          const t = document.createElement('canvas')
          return (
            (t.width = e.width), (t.height = e.height), t.getContext('2d').drawImage(e, 0, 0), t
          )
        }
        function h(e) {
          if (e?.length)
            return Array.from(e)
              .map(m)
              .filter((e) => e.size)
        }
        function m(e) {
          const t = e.name.split('.').pop()
          return e.type || 'mov' !== t.toLowerCase()
            ? e
            : new File([e], e.name, { type: 'video/quicktime' })
        }
        'undefined' == typeof File &&
          (self.File = class extends Blob {
            constructor(e, t, n) {
              if (n) {
                const { type: t, ...r } = n
                super(e, { type: t }), o(this, 'name', void 0), Object.assign(this, r)
              } else super(e), o(this, 'name', void 0)
              this.name = t
            }
          })
      },
      16974: (e, t, n) => {
        n.d(t, {
          M2: () => A,
          O6: () => M,
          S1: () => v,
          Yz: () => C,
          aE: () => I,
          gO: () => w,
          jK: () => P,
          r_: () => k,
          wC: () => S,
          xW: () => E,
        })
        var r = n(65116),
          o = n(33555),
          a = n(83716),
          s = n(11192),
          d = n(56112),
          i = n(69118),
          c = n(60782),
          u = n(275),
          l = n(16063)
        const f = _()
        let h = f.prevGlobal,
          m = f.prepared,
          p = f.results,
          g = f.callbacks
        const b = (0, i.P2)(() => {
          ;(0, i.Q8)(() => {
            T((0, o.Rd)())
          })
        }, 500)
        let y = !1
        function v() {
          ;(y = !0), (0, r.ll)(b), (0, o.iw)('reset', B)
          const e = (0, o.Rd)()
          ;(0, s.jU)(e).isMasterTab || L(e, !0, !0, !0), T(e)
        }
        function w(e) {
          return y || v(), p.orderedIdsByFolderId[e]
        }
        function I(e) {
          return y || v(), p.pinnedCountByFolderId[e] || 0
        }
        function C() {
          return y || v(), p.chatsCountByFolderId
        }
        function S() {
          return y || v(), p.unreadCountersByFolderId
        }
        function E() {
          return S()[a.NfV]?.notificationsCount || 0
        }
        function P(e) {
          return m.chatSummariesById.get(e).order
        }
        function A(e, t) {
          return (
            g.orderedIdsByFolderId[e] || (g.orderedIdsByFolderId[e] = (0, l._)()),
            g.orderedIdsByFolderId[e].addCallback(t)
          )
        }
        function k(e) {
          return g.chatsCountByFolderId.addCallback(e)
        }
        function M(e) {
          return g.unreadCountersByFolderId.addCallback(e)
        }
        function T(e) {
          let t
          a.eMD && (t = performance.now())
          const n = Boolean(
              e.chats.listIds.active &&
                N(a.NfV, e.chats.listIds.active, e.chats.orderedPinnedIds.active)
            ),
            r = Boolean(
              e.chats.listIds.archived &&
                N(a.WSp, e.chats.listIds.archived, e.chats.orderedPinnedIds.archived)
            ),
            o = e.chats.isFullyLoaded.active !== h.isAllFolderFullyLoaded,
            i = e.chats.isFullyLoaded.archived !== h.isArchivedFolderFullyLoaded,
            l = e.chatFolders.byId !== h.foldersById,
            f = e.chats.byId !== h.chatsById,
            g = e.users.byId !== h.usersById,
            b = (0, s.dZ)(e) !== h.notifySettings,
            y = (0, s.NJ)(e) !== h.notifyExceptions
          let v = []
          if (
            ((o || i) &&
              (v = v.concat(
                (function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = []
                  t && n.push(a.WSp)
                  const r = e.chats.isFullyLoaded.active,
                    o = e.chats.isFullyLoaded.archived
                  if (r && o) {
                    const e = Object.keys(m.folderSummariesById)
                      .filter((e) => !p.orderedIdsByFolderId[e])
                      .map(Number)
                    n = n.concat(e)
                  }
                  return (h.isAllFolderFullyLoaded = r), (h.isArchivedFolderFullyLoaded = o), n
                })(e, i)
              )),
            !(n || r || l || f || g || b || y))
          )
            return void (v.length && R(v))
          const w = h.allFolderListIds,
            I = h.archivedFolderListIds
          if (
            (L(e, n, r, l),
            (v = v.concat(
              (function (e, t, n, r, o, i) {
                const l = e.chats.byId,
                  f = e.users.byId,
                  g = (0, s.dZ)(e),
                  b = (0, s.NJ)(e),
                  y = Object.values(m.folderSummariesById),
                  v = new Set(),
                  w = e.chats.listIds.active,
                  I = e.chats.listIds.archived
                let C = [...(w || []), ...(I || [])]
                return (
                  (w === o && I === i) || (C = (0, c.Tw)(C.concat(o || [], i || []))),
                  C.forEach((e) => {
                    const o = l[e]
                    if (!t && !n && !r && o === h.chatsById[e] && f[e] === h.usersById[e]) return
                    let s
                    if (o) {
                      const n = m.chatSummariesById.get(e),
                        r = (function (e, t, n, r) {
                          const {
                              id: o,
                              type: s,
                              lastMessage: i,
                              isRestricted: c,
                              isNotJoined: u,
                              migratedTo: l,
                              folderId: f,
                              unreadCount: h,
                              unreadMentionsCount: m,
                              hasUnreadMark: p,
                              joinDate: g,
                              draftDate: b,
                              isForum: y,
                              topics: v,
                            } = e,
                            { unreadCount: w, unreadMentionsCount: I } = y
                              ? Object.values(v || {}).reduce(
                                  (e, t) => (
                                    (e.unreadCount += t.unreadCount),
                                    (e.unreadMentionsCount += t.unreadMentionsCount),
                                    e
                                  ),
                                  { unreadCount: 0, unreadMentionsCount: 0 }
                                )
                              : { unreadCount: h, unreadMentionsCount: m },
                            C = 'chatTypePrivate' === s && r,
                            S =
                              e.id === a.awM &&
                              (!e.lastMessage ||
                                'historyClear' === e.lastMessage.content.action?.type)
                          return {
                            id: o,
                            type: s,
                            isListed: Boolean(!(c || u || l || S)),
                            isArchived: f === a.WSp,
                            isMuted: (0, d.i4)(e, t, n),
                            isUnread: Boolean(w || I || p),
                            unreadCount: w,
                            unreadMentionsCount: I,
                            order: Math.max(g || 0, b || 0, i?.date || 0),
                            isUserBot: C ? 'userTypeBot' === C.type : void 0,
                            isUserContact: C ? C.isContact : void 0,
                          }
                        })(o, g, b, f[e])
                      if (!t && n && (0, u.Z)(r, n)) return
                      m.chatSummariesById.set(e, r),
                        (s = (function (e, t) {
                          return t
                            .reduce(
                              (t, n) => (
                                (function (e, t) {
                                  if (!e.isListed) return !1
                                  const { id: n, type: r } = e
                                  if (t.listIds)
                                    return (
                                      !(
                                        (e.isArchived && t.id === a.NfV) ||
                                        (!e.isArchived && t.id === a.WSp)
                                      ) && t.listIds.has(n)
                                    )
                                  if (t.excludedChatIds?.has(n)) return !1
                                  if (t.includedChatIds?.has(n)) return !0
                                  if (t.pinnedChatIds?.has(n)) return !0
                                  if (t.excludeArchived && e.isArchived) return !1
                                  if (t.excludeRead && !e.isUnread) return !1
                                  if (t.excludeMuted && e.isMuted && !e.unreadMentionsCount)
                                    return !1
                                  if ('chatTypePrivate' === r)
                                    if (e.isUserBot) {
                                      if (t.bots) return !0
                                    } else {
                                      if (t.contacts && e.isUserContact) return !0
                                      if (t.nonContacts && !e.isUserContact) return !0
                                    }
                                  else {
                                    if ('chatTypeChannel' === r) return Boolean(t.channels)
                                    if ('chatTypeBasicGroup' === r || 'chatTypeSuperGroup' === r)
                                      return Boolean(t.groups)
                                  }
                                  return !1
                                })(e, n) && t.push(n.id),
                                t
                              ),
                              []
                            )
                            .sort()
                        })(r, y)),
                        s.forEach((e) => {
                          v.add(e)
                        })
                    } else m.chatSummariesById.delete(e), (s = [])
                    const i = m.folderIdsByChatId[e] || []
                    if ((0, c.et)(s, i)) return
                    const w = (function (e, t, n) {
                      const r = new Set(t),
                        o = new Set(n),
                        a = []
                      return (
                        (0, c.Tw)([...t, ...n]).forEach((t) => {
                          let n = p.orderedIdsByFolderId[t]
                          r.has(t) && !o.has(t)
                            ? (m.chatIdsByFolderId[t].delete(e),
                              a.push(t),
                              n &&
                                ((n = n.filter((t) => t !== e)),
                                (m.isOrderedListJustPatched[t] = !0)))
                            : !r.has(t) &&
                              o.has(t) &&
                              (m.chatIdsByFolderId[t] || (m.chatIdsByFolderId[t] = new Set()),
                              m.chatIdsByFolderId[t].add(e),
                              n && (n.push(e), (m.isOrderedListJustPatched[t] = !0))),
                            (p.orderedIdsByFolderId[t] = n)
                        }),
                        (m.folderIdsByChatId[e] = n),
                        a
                      )
                    })(e, i, s)
                    w.forEach((e) => {
                      v.add(e)
                    })
                  }),
                  (h.chatsById = l),
                  (h.usersById = f),
                  (h.notifySettings = g),
                  (h.notifyExceptions = b),
                  Array.from(v)
                )
              })(e, l || n || r, b, y, w, I)
            )),
            R((0, c.Tw)(v)),
            a.eMD)
          ) {
            const e = performance.now() - t
            e > 6 && console.warn(`Slow \`updateFolderManager\`: ${Math.round(e)} ms`)
          }
        }
        function N(e, t, n) {
          const r = e === a.NfV ? h.allFolderListIds : h.archivedFolderListIds,
            o = e === a.NfV ? h.allFolderPinnedIds : h.archivedFolderPinnedIds
          return r !== t || o !== n
        }
        function L(e, t, n, r) {
          const o = []
          if (t) {
            const t = e.chats.listIds.active,
              n = e.chats.orderedPinnedIds.active
            ;(m.folderSummariesById[a.NfV] = Z(a.NfV, t, n)),
              (h.allFolderListIds = t),
              (h.allFolderPinnedIds = n),
              o.push(a.NfV)
          }
          if (n) {
            const t = e.chats.listIds.archived,
              n = e.chats.orderedPinnedIds.archived
            ;(m.folderSummariesById[a.WSp] = Z(a.WSp, t, n)),
              (h.archivedFolderListIds = t),
              (h.archivedFolderPinnedIds = n),
              o.push(a.WSp)
          }
          if (r) {
            const t = e.chatFolders.byId
            Object.values(t).forEach((e) => {
              e !== h.foldersById[e.id] &&
                ((m.folderSummariesById[e.id] = (function (e) {
                  return {
                    ...e,
                    orderedPinnedIds: e.pinnedChatIds,
                    excludedChatIds: e.excludedChatIds ? new Set(e.excludedChatIds) : void 0,
                    includedChatIds: e.excludedChatIds ? new Set(e.includedChatIds) : void 0,
                    pinnedChatIds: e.excludedChatIds ? new Set(e.pinnedChatIds) : void 0,
                  }
                })(e)),
                o.push(e.id))
            }),
              (h.foldersById = t)
          }
          return o
        }
        function Z(e, t, n) {
          return { id: e, listIds: new Set(t), orderedPinnedIds: n, pinnedChatIds: new Set(n) }
        }
        function R(e) {
          let t = !1,
            n = !1
          if (
            (Array.from(e).forEach((e) => {
              const { pinnedCount: r, orderedIds: o } = (function (e) {
                const t = m.folderSummariesById[e]
                if (!t) return {}
                const { orderedPinnedIds: n, pinnedChatIds: r } = t,
                  {
                    chatSummariesById: o,
                    chatIdsByFolderId: { [e]: a },
                  } = m,
                  {
                    orderedIdsByFolderId: { [e]: s },
                  } = p,
                  d = a ? n?.filter((e) => a.has(e)) : n,
                  i = s || (a && Array.from(a)) || [],
                  c = (r ? i.filter((e) => !r.has(e)) : i).sort(
                    (e, t) => o.get(t).order - o.get(e).order
                  )
                return { pinnedCount: d?.length || 0, orderedIds: [...(d || []), ...c] }
              })(e)
              if (!o) return
              const a = p.orderedIdsByFolderId[e],
                s = p.pinnedCountByFolderId[e]
              ;(!a ||
                void 0 === s ||
                s !== r ||
                m.isOrderedListJustPatched[e] ||
                !(0, c.et)(o, a)) &&
                ((m.isOrderedListJustPatched[e] = !1),
                (p.orderedIdsByFolderId[e] = o),
                (p.pinnedCountByFolderId[e] = r),
                g.orderedIdsByFolderId[e]?.runCallbacks(o))
              const d = p.chatsCountByFolderId[e],
                i = o.length
              n || (n = d !== i), (p.chatsCountByFolderId[e] = i)
              const l = p.unreadCountersByFolderId[e],
                f = (function (e) {
                  const { chatSummariesById: t } = m,
                    {
                      orderedIdsByFolderId: { [e]: n },
                    } = p
                  return n.reduce(
                    (e, n) => {
                      const r = t.get(n)
                      return r
                        ? (r.isUnread &&
                            (e.chatsCount++,
                            r.unreadMentionsCount &&
                              (e.notificationsCount += r.unreadMentionsCount),
                            r.isMuted ||
                              (r.unreadCount
                                ? (e.notificationsCount += r.unreadCount)
                                : r.unreadMentionsCount || (e.notificationsCount += 1))),
                          e)
                        : e
                    },
                    { chatsCount: 0, notificationsCount: 0 }
                  )
                })(e)
              t || (t = !l || !(0, u.Z)(f, l)), (p.unreadCountersByFolderId[e] = f)
            }),
            n)
          ) {
            const e = { ...p.chatsCountByFolderId }
            ;(p.chatsCountByFolderId = e), g.chatsCountByFolderId.runCallbacks(e)
          }
          if (t) {
            const e = { ...p.unreadCountersByFolderId }
            ;(p.unreadCountersByFolderId = e), g.unreadCountersByFolderId.runCallbacks(e)
          }
        }
        function _() {
          return {
            prevGlobal: {
              foldersById: {},
              chatsById: {},
              usersById: {},
              notifySettings: {},
              notifyExceptions: {},
            },
            prepared: {
              folderSummariesById: {},
              chatSummariesById: new Map(),
              folderIdsByChatId: {},
              chatIdsByFolderId: {},
              isOrderedListJustPatched: {},
            },
            results: {
              orderedIdsByFolderId: {},
              pinnedCountByFolderId: {},
              chatsCountByFolderId: {},
              unreadCountersByFolderId: {},
            },
            callbacks: {
              orderedIdsByFolderId: {},
              chatsCountByFolderId: (0, l._)(),
              unreadCountersByFolderId: (0, l._)(),
            },
          }
        }
        function B() {
          const e = _()
          ;(h = e.prevGlobal), (m = e.prepared), (p = e.results), (g = e.callbacks)
        }
      },
      82972: (e, t, n) => {
        function r(e) {
          e.offsetWidth
        }
        n.d(t, { Z: () => r })
      },
      9937: (e, t, n) => {
        function r(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'en',
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          const a = e / 10 ** o(t)
          return r && a % 1 == 0
            ? new Intl.NumberFormat(n, {
                style: 'currency',
                currency: t,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(a)
            : new Intl.NumberFormat(n, { style: 'currency', currency: t }).format(a)
        }
        function o(e) {
          return 'CLF' === e
            ? 4
            : ['BHD', 'IQD', 'JOD', 'KWD', 'LYD', 'OMR', 'TND'].includes(e)
            ? 3
            : [
                'BIF',
                'BYR',
                'CLP',
                'CVE',
                'DJF',
                'GNF',
                'ISK',
                'JPY',
                'KMF',
                'KRW',
                'MGA',
                'PYG',
                'RWF',
                'UGX',
                'UYI',
                'VND',
                'VUV',
                'XAF',
                'XOF',
                'XPF',
              ].includes(e)
            ? 0
            : 'MRO' === e
            ? 1
            : 2
        }
        n.d(t, { x: () => r })
      },
      98138: (e, t, n) => {
        n.d(t, { gZ: () => f, fB: () => u, gL: () => l })
        const r = n.p + 'blue.7addb55a171bbda244ac.svg',
          o = n.p + 'green.19008e11c98b08550285.svg'
        var a = n(17017)
        const s = n.p + 'red.1ab26ec752237fc45355.svg',
          d = n.p + 'rose.6dd2db47d5e1fb9bdb9d.svg',
          i = n.p + 'violet.7c7f825ebb51cf3084e3.svg',
          c = {
            7322096: [r, 'blue'],
            16766590: [n.p + 'yellow.40f6b4865f20f3e6a1ab.svg', 'yellow'],
            13338331: [i, 'violet'],
            9367192: [o, 'green'],
            16749490: [d, 'rose'],
            16478047: [s, 'red'],
          }
        function u() {
          return Object.keys(c).map((e) => parseInt(e, 10))
        }
        function l(e) {
          return (e && c[e][0]) || a
        }
        function f(e) {
          return `--color-topic-${(e && c[e][1]) || 'grey'}`
        }
      },
      26926: (e, t, n) => {
        function r(e) {
          let t,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          do {
            t = String(Math.random()).replace('0.', 'id')
          } while (e[t])
          return n && (e[t] = !0), t
        }
        n.d(t, { Z: () => r })
      },
      91947: (e, t, n) => {
        n.d(t, { J_: () => i, ZP: () => d, pF: () => c })
        var r = n(83716)
        const o = {
          CHAT_RESTRICTED: "You can't send messages in this chat, you were restricted",
          CHAT_SEND_POLL_FORBIDDEN: "You can't create polls in this chat",
          CHAT_SEND_STICKERS_FORBIDDEN: "You can't send stickers in this chat",
          CHAT_SEND_GIFS_FORBIDDEN: "You can't send gifs in this chat",
          CHAT_SEND_MEDIA_FORBIDDEN: "You can't send media in this chat",
          CHAT_LINK_EXISTS: "The chat is public, you can't hide the history to new users",
          SLOWMODE_WAIT_X:
            'Slowmode is enabled in this chat: you must wait for the specified number of seconds before sending another message to the chat.',
          USER_BANNED_IN_CHANNEL: "You're banned from sending messages in supergroups / channels",
          USER_IS_BLOCKED: 'You were blocked by this user',
          YOU_BLOCKED_USER: 'You blocked this user',
          IMAGE_PROCESS_FAILED: 'Failure while processing image',
          MEDIA_EMPTY: 'The provided media object is invalid',
          MEDIA_INVALID: 'Media invalid',
          PHOTO_EXT_INVALID: 'The extension of the photo is invalid',
          PHOTO_INVALID_DIMENSIONS: 'The photo dimensions are invalid',
          PHOTO_SAVE_FILE_INVALID: 'Internal issues, try again later',
          MESSAGE_DELETE_FORBIDDEN:
            "You can't delete one of the messages you tried to delete, most likely because it is a service message.",
          MESSAGE_POLL_CLOSED: 'Poll closed',
          MESSAGE_EDIT_TIME_EXPIRED: "You can't edit this message anymore.",
          PINNED_DIALOGS_TOO_MUCH: 'Sorry, you can only pin 5 chats to the top',
          CHANNEL_PRIVATE: 'This channel is private',
          MEDIA_CAPTION_TOO_LONG: 'The provided caption is too long',
          ADDRESS_STREET_LINE1_INVALID: 'The address you provided is not valid',
          ADDRESS_STREET_LINE2_INVALID: 'The address you provided is not valid',
          ADDRESS_CITY_INVALID: 'The city you provided is not valid',
          ADDRESS_COUNTRY_INVALID: 'The country you provided is not valid',
          ADDRESS_POSTCODE_INVALID: 'The postcode you provided is not valid',
          ADDRESS_STATE_INVALID: 'The state you provided is not valid',
          REQ_INFO_NAME_INVALID: 'The name you provided is not valid',
          REQ_INFO_PHONE_INVALID: 'The phone you provided is not valid',
          REQ_INFO_EMAIL_INVALID: 'The email you provided is not valid',
          LINK_NOT_MODIFIED: 'This discussion is already linked to the channel',
          MESSAGE_TOO_LONG: 'Message is too long',
          SERVICE_WORKER_DISABLED:
            'Service Worker is disabled. Streaming media may not be supported. Try reloading the page without holding <Shift> key',
          MESSAGE_TOO_LONG_PLEASE_REMOVE_CHARACTERS:
            'The provided message is too long. Please remove {EXTRA_CHARS_COUNT} character{PLURAL_S}.',
          FRESH_RESET_AUTHORISATION_FORBIDDEN:
            'You can’t logout other sessions if less than 24 hours have passed since you logged on the current session',
          BOTS_TOO_MUCH: 'There are too many bots in this chat/channel',
          BOT_GROUPS_BLOCKED: "This bot can't be added to groups",
          USERS_TOO_MUCH: 'The maximum number of users has been exceeded',
          USER_CHANNELS_TOO_MUCH:
            'One of the users you tried to add is already in too many channels/supergroups',
          USER_KICKED: 'This user was kicked from this supergroup/channel',
          USER_NOT_MUTUAL_CONTACT: 'The provided user is not a mutual contact',
          USER_PRIVACY_RESTRICTED: "The user's privacy settings do not allow you to do this",
          INVITE_HASH_EMPTY: 'The invite hash is empty',
          INVITE_HASH_EXPIRED: 'The invite link has expired',
          INVITE_HASH_INVALID: 'The invite hash is invalid',
          CHANNELS_TOO_MUCH: 'You have joined too many channels/supergroups',
          USER_ALREADY_PARTICIPANT: 'You already in the group',
          SCHEDULE_DATE_INVALID: 'Invalid schedule date provided',
          WALLPAPER_DIMENSIONS_INVALID:
            'The wallpaper dimensions are invalid, please select another file',
          ADMINS_TOO_MUCH: 'There are too many admins',
          ADMIN_RANK_EMOJI_NOT_ALLOWED: 'An admin rank cannot contain emojis',
          ADMIN_RANK_INVALID: 'The specified admin rank is invalid',
          FRESH_CHANGE_ADMINS_FORBIDDEN:
            "You were just elected admin, you can't add or modify other admins yet",
          INPUT_USER_DEACTIVATED: 'The specified user was deleted',
          BOT_PRECHECKOUT_TIMEOUT: 'The request for payment has expired',
        }
        r.eMD &&
          ((o.CHAT_WRITE_FORBIDDEN = "You can't write in this chat"),
          (o.CHAT_ADMIN_REQUIRED = 'You must be an admin in this chat to do this'))
        const a = {
            ADDRESS_STREET_LINE1_INVALID: {
              field: 'streetLine1',
              message: 'Incorrect street address',
            },
            ADDRESS_STREET_LINE2_INVALID: {
              field: 'streetLine2',
              message: 'Incorrect street address',
            },
            ADDRESS_CITY_INVALID: { field: 'city', message: 'Incorrect city' },
            ADDRESS_COUNTRY_INVALID: { field: 'countryIso2', message: 'Incorrect country' },
            ADDRESS_POSTCODE_INVALID: { field: 'postCode', message: 'Incorrect post code' },
            ADDRESS_STATE_INVALID: { field: 'state', message: 'Incorrect state' },
            REQ_INFO_NAME_INVALID: { field: 'fullName', message: 'Incorrect name' },
            REQ_INFO_PHONE_INVALID: { field: 'phone', message: 'Incorrect phone' },
            REQ_INFO_EMAIL_INVALID: { field: 'email', message: 'Incorrect email' },
          },
          s = new Set(['BOT_PRECHECKOUT_FAILED', 'PAYMENT_FAILED'])
        function d(e) {
          const { message: t, isSlowMode: n, textParams: r } = e
          if (n) {
            const e = t.indexOf(' (caused by')
            return e > 0 ? t.substring(0, e) : t
          }
          let a = o[t]
          return a && r && (a = Object.keys(r).reduce((e, t) => e.replace(t, r[t]), a)), a
        }
        function i(e) {
          return a[e.message]
        }
        function c(e) {
          return s.has(e.message)
        }
      },
      33592: (e, t, n) => {
        n.d(t, { S: () => d }), n(83716)
        var r = n(69118),
          o = n(65054),
          a = n(863)
        function s(e) {
          ;(e instanceof ErrorEvent && 'ResizeObserver loop limit exceeded' === e.message) ||
            (e.preventDefault(), d(e instanceof ErrorEvent ? e.error || e.message : e.reason))
        }
        function d(e) {
          console.error(e)
        }
        window.addEventListener('error', s),
          window.addEventListener('unhandledrejection', s),
          (0, r.P2)((e) => {
            ;(a.Eo && (0, o.s1)().length > 1) || window.alert(e)
          }, 1e3)
      },
      36046: (e, t, n) => {
        n.d(t, { G: () => s, e: () => a })
        var r = n(33555)
        let o
        function a() {
          window.addEventListener('beforeinstallprompt', (e) => {
            ;(o = async () => {
              e.prompt(),
                'accepted' === (await e.userChoice).outcome &&
                  (0, r.Sv)().setInstallPrompt({ canInstall: !1 })
            }),
              (0, r.Sv)().setInstallPrompt({ canInstall: !0 })
          })
        }
        function s() {
          return o
        }
      },
      60782: (e, t, n) => {
        function r(e, t) {
          return e.reduce((e, n) => ((e[n[t]] = n), e), {})
        }
        function o(e, t) {
          return Object.keys(e).reduce((n, r, o) => ((n[r] = t(e[r], r, o, e)), n), {})
        }
        function a(e, t) {
          return t.reduce((t, n) => ((t[n] = e[n]), t), {})
        }
        function s(e, t) {
          return t.reduce((t, n) => (e[n] && (t[n] = e[n]), t), {})
        }
        function d(e, t) {
          const n = new Set(t.map(String))
          return a(
            e,
            Object.keys(e).filter((e) => !n.has(e))
          )
        }
        function i(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'asc'
          function r(e, t, n, r) {
            const o = ('function' == typeof n ? n(e) : e[n]) || 0,
              a = ('function' == typeof n ? n(t) : t[n]) || 0
            return r ? o - a : a - o
          }
          if (Array.isArray(t)) {
            const [o, a] = Array.isArray(n) ? n : [n, n],
              [s, d] = t,
              i = 'asc' === o,
              c = 'asc' === a
            return e.sort((e, t) => r(e, t, s, i) || r(e, t, d, c))
          }
          const o = 'asc' === n
          return e.sort((e, n) => r(e, n, t, o))
        }
        function c(e) {
          return Array.from(new Set(e))
        }
        function u(e, t) {
          return [...new Map(e.map((e) => [e[t], e])).values()]
        }
        function l(e) {
          return e.filter(Boolean)
        }
        function f(e, t) {
          return e.length === t.length && e.every((e, n) => e === t[n])
        }
        function h(e, t) {
          return e[0] <= t[t.length - 1] && e[e.length - 1] >= t[0]
        }
        function m(e, t) {
          return e.filter((e) => t.has(e))
        }
        function p(e, t) {
          const n = []
          for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t))
          return n
        }
        function g(e, t) {
          const n = [],
            r = []
          return e.forEach((e, o, a) => (t(e, o, a) ? n : r).push(e)), [n, r]
        }
        function b(e) {
          return (function (e) {
            return 'object' == typeof e && null !== e
          })(e)
            ? Array.isArray(e)
              ? e.map(b)
              : Object.keys(e).reduce((t, n) => ((t[n] = b(e[n])), t), {})
            : e
        }
        function y(e, t) {
          let n = e.length
          for (; n--; ) if (t(e[n], n, e)) return e[n]
        }
        n.d(t, {
          CE: () => d,
          Q8: () => o,
          Tw: () => c,
          Vl: () => p,
          Xh: () => b,
          Xo: () => i,
          YE: () => h,
          dF: () => y,
          eL: () => m,
          ee: () => r,
          ei: () => a,
          et: () => f,
          oA: () => l,
          od: () => u,
          q0: () => s,
          uK: () => g,
        })
      },
      50711: (e, t, n) => {
        n.d(t, { Iu: () => C, Pn: () => E, QO: () => S, ll: () => p, m0: () => P, qf: () => A })
        var r = n(33555),
          o = n(83716),
          a = n(49524),
          s = n(71226),
          d = n(16063),
          i = n(2155)
        const c = /%\d?\$?[sdf@]/g,
          u = ['value', 'zeroValue', 'oneValue', 'twoValue', 'fewValue', 'manyValue', 'otherValue'],
          l = {
            en: (e) => (1 !== e ? 6 : 2),
            ar: (e) =>
              0 === e
                ? 1
                : 1 === e
                ? 2
                : 2 === e
                ? 3
                : e % 100 >= 3 && e % 100 <= 10
                ? 4
                : e % 100 >= 11
                ? 5
                : 6,
            be: (e) => {
              const t = String(e).split('.'),
                n = Number(t[0]) === e,
                r = n && Number(t[0].slice(-1)),
                o = n && Number(t[0].slice(-2))
              return 1 === r && 11 !== o
                ? 2
                : r >= 2 && r <= 4 && (o < 12 || o > 14)
                ? 4
                : (n && 0 === r) || (r >= 5 && r <= 9) || (o >= 11 && o <= 14)
                ? 5
                : 6
            },
            ca: (e) => (1 !== e ? 6 : 2),
            cs: (e) => {
              const t = String(e).split('.'),
                n = Number(t[0]),
                r = !t[1]
              return 1 === e && r ? 2 : n >= 2 && n <= 4 && r ? 4 : r ? 6 : 5
            },
            de: (e) => (1 !== e ? 6 : 2),
            es: (e) => (1 !== e ? 6 : 2),
            fa: (e) => (e > 1 ? 6 : 2),
            fi: (e) => (1 !== e ? 6 : 2),
            fr: (e) => (e > 1 ? 6 : 2),
            id: () => 0,
            it: (e) => (1 !== e ? 6 : 2),
            hr: (e) => {
              const t = String(e).split('.'),
                n = t[0],
                r = t[1] || '',
                o = !t[1],
                a = Number(n.slice(-1)),
                s = Number(n.slice(-2)),
                d = Number(r.slice(-1)),
                i = Number(r.slice(-2))
              return (o && 1 === a && 11 !== s) || (1 === d && 11 !== i)
                ? 2
                : (o && a >= 2 && a <= 4 && (s < 12 || s > 14)) ||
                  (d >= 2 && d <= 4 && (i < 12 || i > 14))
                ? 4
                : 6
            },
            hu: (e) => (e > 1 ? 6 : 2),
            ko: () => 0,
            ms: () => 0,
            nb: (e) => (e > 1 ? 6 : 2),
            nl: (e) => (1 !== e ? 6 : 2),
            pl: (e) =>
              1 === e ? 2 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 4 : 5,
            'pt-br': (e) => (e > 1 ? 6 : 2),
            ru: (e) =>
              e % 10 == 1 && e % 100 != 11
                ? 2
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 4
                : 5,
            sk: (e) => {
              const t = String(e).split('.'),
                n = Number(t[0]),
                r = !t[1]
              return 1 === e && r ? 2 : n >= 2 && n <= 4 && r ? 4 : r ? 6 : 5
            },
            sr: (e) => {
              const t = String(e).split('.'),
                n = t[0],
                r = t[1] || '',
                o = !t[1],
                a = Number(n.slice(-1)),
                s = Number(n.slice(-2)),
                d = Number(r.slice(-1)),
                i = Number(r.slice(-2))
              return (o && 1 === a && 11 !== s) || (1 === d && 11 !== i)
                ? 2
                : (o && a >= 2 && a <= 4 && (s < 12 || s > 14)) ||
                  (d >= 2 && d <= 4 && (i < 12 || i > 14))
                ? 4
                : 6
            },
            tr: (e) => (e > 1 ? 6 : 2),
            uk: (e) =>
              e % 10 == 1 && e % 100 != 11
                ? 2
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 4
                : 5,
            uz: (e) => (e > 1 ? 6 : 2),
          },
          f = new Map()
        let h, m
        const { addCallback: p, removeCallback: g, runCallbacks: b } = (0, d._)()
        let y, v
        function w() {
          return (e, t, n, r) => {
            if (void 0 !== t) {
              const o = Array.isArray(t) ? JSON.stringify(t) : t,
                a = f.get(`${e}_${o}_${n}${r ? `_${r}` : ''}`)
              if (a) return a
            }
            if (!h && !m) return e
            const o = h?.[e] || m?.[e]
            return o ? T(o, e, t, n, r) : (m || k(), e)
          }
        }
        let I = w()
        function C() {
          return I(...arguments)
        }
        function S() {
          return I
        }
        async function E(e, t) {
          let n = await a.fetch(o.eev, `${o.$OQ}_${e}_${t}`, a.Type.Json)
          return (
            n ||
              (n = await (async function (e, t, n) {
                const r = await (0, s.t9)('fetchLangStrings', {
                  langPack: e,
                  langCode: t,
                  keys: [n],
                })
                if (r?.length) return await a.save(o.eev, `${e}_${t}_${n}`, r[0]), r[0]
              })(o.$OQ, e, t)),
            T(n, t)
          )
        }
        async function P(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          if (h && e === y) return void (t && t())
          let s = await a.fetch(o.eev, e, a.Type.Json)
          if (!s && (n && (await k()), (s = await M(e)), !s)) return
          f.clear(), (y = e), (h = s), (document.documentElement.lang = e)
          const { languages: d, timeFormat: i } = (0, r.Rd)().settings.byKey,
            c = d?.find((t) => t.langCode === e)
          ;(I = w()),
            (I.isRtl = Boolean(c?.rtl)),
            (I.code = e.replace('-raw', '')),
            (I.langName = c?.nativeName),
            (I.timeFormat = i),
            t && t(),
            b()
        }
        function A(e) {
          ;(e && e === v) || ((v = e), (I.timeFormat = e), b())
        }
        async function k() {
          m || ((m = (await n.e(1915).then(n.bind(n, 31915))).default), b())
        }
        async function M(e) {
          const t = await (0, s.t9)('fetchLangPack', { sourceLangPacks: o.Bge, langCode: e })
          if (t) return await a.save(o.eev, e, t.langPack), t.langPack
        }
        function T(e, t, n, r, a) {
          const s =
              'number' == typeof n || void 0 !== a
                ? (function (e) {
                    const t = y || o.sRA,
                      n = l[t] ? l[t](e) : 0
                    return u[n]
                  })(null != a ? a : n)
                : 'value',
            d = e ? e[s] || e.otherValue || e.value : void 0
          if (!d || !d.trim()) {
            const e = t.split('.')
            return e[e.length - 1]
          }
          if (void 0 !== n) {
            const e = (function (e, t) {
                t = Array.isArray(t) ? t : [t]
                const n = e.split(c),
                  r = n.shift()
                return n.reduce((e, n, r) => {
                  var o
                  return `${e}${String(null !== (o = t[r]) && void 0 !== o ? o : '')}${n}`
                }, r || '')
              })(d, 'i' === r ? (0, i.kh)(n) : n),
              o = Array.isArray(n) ? JSON.stringify(n) : n
            return f.set(`${t}_${o}_${r}${a ? `_${a}` : ''}`, e), e
          }
          return d
        }
      },
      28712: (e, t, n) => {
        n.d(t, { Kh: () => o, NM: () => a, t7: () => s, uZ: () => r })
        const r = (e, t, n) => Math.min(n, Math.max(t, e)),
          o = (e, t, n) => e >= t && e <= n,
          a = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            return Math.round(e * 10 ** t) / 10 ** t
          },
          s = (e, t, n) => (1 - n) * e + n * t
      },
      40647: (e, t, n) => {
        n.d(t, { cC: () => v, he: () => b, UV: () => y, Iq: () => w })
        var r = n(6137),
          o = n(83716),
          a = n(71226),
          s = n(49524),
          d = n(71394),
          i = n(863)
        const c = 48e3
        async function u(e) {
          const t = await new Response(e).arrayBuffer()
          return new Promise((e) => {
            const r = new Uint8Array(t)
            let o = new Worker(new URL(n.p + n.u(5745), n.b)),
              a = new Worker(new URL(n.p + n.u(5993), n.b))
            ;(o.onmessage = (e) => {
              null === e.data
                ? a.postMessage({ command: 'done' })
                : a.postMessage(
                    { command: 'encode', buffers: e.data },
                    e.data.map((e) => {
                      let { buffer: t } = e
                      return t
                    })
                  )
            }),
              (a.onmessage = (t) => {
                'page' === t.data.message &&
                  (e(new Blob([t.data.page], { type: 'audio/wav' })),
                  o.terminate(),
                  (o = void 0),
                  a.terminate(),
                  (a = void 0))
              }),
              a.postMessage({ command: 'init', wavBitDepth: 16, wavSampleRate: c }),
              o.postMessage({ command: 'init', decoderSampleRate: c, outputBufferSampleRate: c }),
              o.postMessage({ command: 'decode', pages: r }, [r.buffer])
          })
        }
        var l = n(10862)
        const f = {
            [r.IU.BlobUrl]: s.Type.Blob,
            [r.IU.Text]: s.Type.Text,
            [r.IU.DownloadUrl]: void 0,
            [r.IU.Progressive]: void 0,
            [r.IU.Stream]: void 0,
          },
          h = new Map(),
          m = new Map(),
          p = new Map(),
          g = new Map()
        function b(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0
          if (t === r.IU.Progressive) return i.I_ ? I(e) : b(e, r.IU.BlobUrl, n, a, s)
          if (t === r.IU.DownloadUrl) return i.I_ ? C(e) : b(e, r.IU.BlobUrl, n, a, s)
          if (!m.has(e)) {
            const r = S(e, t, n)
              .catch((e) => {
                o.eMD && console.warn(e)
              })
              .finally(() => {
                m.delete(e), p.delete(e), g.delete(e)
              })
            m.set(e, r)
          }
          if (a && s) {
            let t = p.get(e)
            t || ((t = new Map()), p.set(e, t)), t.set(s, a)
          }
          return m.get(e)
        }
        function y(e) {
          return h.get(e)
        }
        function v(e) {
          p.forEach((t, n) => {
            t.forEach((t) => {
              if (t === e) {
                const e = g.get(n)
                if (!e) return
                ;(0, a.u3)(e), g.delete(n), p.delete(n)
              }
            })
          })
        }
        function w(e, t) {
          const n = p.get(e)
          n && n.delete(t)
        }
        function I(e) {
          const t = `./progressive/${e}`
          return h.set(e, t), Promise.resolve(t)
        }
        function C(e) {
          return Promise.resolve(`./download/${e}`)
        }
        async function S(e, t, n) {
          if (!o.CyD) {
            const r = e.startsWith('avatar') ? o.SGw : o.lWA,
              a = await s.fetch(r, e, f[t], n)
            if (a) {
              let t = a
              if (
                ('audio/ogg' !== a.type || i.m5 || (t = await u(t)),
                'image/webp' === a.type && !(0, i.on)() && t)
              ) {
                const n = await (0, l._y)(e, t)
                n && (t = n)
              }
              const n = P(t)
              return h.set(e, n), n
            }
          }
          if (t === r.IU.Stream) {
            const n = new MediaSource(),
              r = URL.createObjectURL(n)
            let o = !1
            return (
              n.addEventListener('sourceopen', () => {
                if (o) return
                o = !0
                const r = n.addSourceBuffer('audio/mpeg'),
                  s = E(e, n, r)
                g.set(e, s), (0, a.t9)('downloadMedia', { url: e, mediaFormat: t }, s)
              }),
              h.set(e, r),
              r
            )
          }
          const c = E(e)
          g.set(e, c)
          const m = await (0, a.t9)(
            'downloadMedia',
            { url: e, mediaFormat: t, isHtmlAllowed: n },
            c
          )
          if (!m) throw new Error(`Failed to fetch media ${e}`)
          let { mimeType: p } = m,
            b = P(m.dataBlob)
          if ('audio/ogg' === p && !i.m5) {
            const e = await (0, d.gm)(b)
            URL.revokeObjectURL(b)
            const t = await u(e)
            ;(b = P(t)), (p = t.type)
          }
          if ('image/webp' === p && !(0, i.on)()) {
            const t = await (0, d.gm)(b)
            URL.revokeObjectURL(b)
            const n = await (0, l._y)(e, t)
            n && (b = P(n))
          }
          return h.set(e, b), b
        }
        function E(e, t, n) {
          const r = (o, a) => {
            p.get(e)?.forEach((e) => {
              e(o), e.isCanceled && (r.isCanceled = !0)
            }),
              1 === o && t?.endOfStream(),
              a && n?.appendBuffer(a)
          }
          return r
        }
        function P(e) {
          return e instanceof Blob ? URL.createObjectURL(e) : e
        }
        i.I_ &&
          navigator.serviceWorker.addEventListener('message', async (e) => {
            const { type: t, messageId: n, params: o } = e.data
            if ('requestPart' !== t) return
            const s = await (0, a.t9)('downloadMedia', { mediaFormat: r.IU.Progressive, ...o })
            if (!s) return
            const { arrayBuffer: d, mimeType: i, fullSize: c } = s
            navigator.serviceWorker.controller.postMessage(
              {
                type: 'partResponse',
                messageId: n,
                result: { arrayBuffer: d, mimeType: i, fullSize: c },
              },
              [d]
            )
          })
      },
      70735: (e, t, n) => {
        n.d(t, { D: () => r })
        const r = []
      },
      99203: (e, t, n) => {
        n.d(t, { $y: () => l, Pb: () => u, Qt: () => h, gl: () => a, o5: () => f })
        var r = n(83716),
          o = n(16063)
        let a
        !(function (e) {
          ;(e[(e.Auth = 0)] = 'Auth'),
            (e[(e.Main = 1)] = 'Main'),
            (e[(e.Extra = 2)] = 'Extra'),
            (e[(e.Calls = 3)] = 'Calls')
        })(a || (a = {}))
        const s = {},
          d = {},
          { addCallback: i, runCallbacks: c } = (0, o._)()
        async function u(e) {
          if (!s[e]) {
            switch (e) {
              case a.Auth:
                s[a.Auth] = n.e(3041).then(n.bind(n, 51133))
                break
              case a.Main:
                r.eMD && console.log('>>> START LOAD MAIN BUNDLE'),
                  (s[a.Main] = Promise.all([n.e(2239), n.e(1849), n.e(8422), n.e(5769)]).then(
                    n.bind(n, 61006)
                  ))
                break
              case a.Extra:
                s[a.Extra] = Promise.all([n.e(2239), n.e(1849), n.e(3779)]).then(n.bind(n, 18163))
                break
              case a.Calls:
                s[a.Calls] = Promise.all([n.e(2239), n.e(8422), n.e(9954)]).then(n.bind(n, 78130))
            }
            s[e].then(c)
          }
          const t = await s[e]
          return d[e] || (d[e] = t), t
        }
        async function l(e) {
          await u(e)
        }
        function f(e, t) {
          const n = d[e]
          if (n) return n[t]
        }
        const h = i
      },
      28406: (e, t, n) => {
        n.d(t, {
          KC: () => Z,
          Ld: () => k,
          Nz: () => I,
          TO: () => T,
          Vr: () => L,
          q3: () => w,
          r1: () => E,
          rh: () => N,
        })
        var r = n(71226),
          o = n(6137),
          a = n(18005),
          s = n(83716),
          d = n(33555),
          i = n(56112),
          c = n(25260),
          u = n(11192),
          l = n(863),
          f = n(50711),
          h = n(40647),
          m = n(69118)
        function p(e) {
          const t = e.toJSON()
          return JSON.stringify({ endpoint: t.endpoint, keys: t.keys })
        }
        function g() {
          return (
            !!l.Mc &&
            ('showNotification' in ServiceWorkerRegistration.prototype
              ? 'denied' === Notification.permission
                ? (s.eMD && console.warn('[PUSH] The user has blocked push notifications.'), !1)
                : 'PushManager' in window ||
                  (s.eMD && console.warn("[PUSH] Push messaging isn't supported."), !1)
              : (s.eMD && console.warn("[PUSH] Push notifications aren't supported."), !1))
          )
        }
        function b() {
          return 'Notification' in window
            ? 'denied' !== Notification.permission ||
                (s.eMD && console.warn('[PUSH] The user has blocked push notifications.'), !1)
            : (s.eMD && console.warn('[PUSH] This browser does not support desktop notification'),
              !1)
        }
        const y = new Set(),
          v = new Audio('./notification.mp3')
        async function w(e, t) {
          if (void 0 !== e && y.has(e)) return
          const { notificationSoundVolume: n } = (0, u.dZ)((0, d.Rd)()),
            r = t ? t / 10 : n / 10
          if (0 !== r) {
            ;(v.volume = r),
              void 0 !== e &&
                (v.addEventListener(
                  'ended',
                  () => {
                    y.add(e)
                  },
                  { once: !0 }
                ),
                setTimeout(() => {
                  y.delete(e)
                }, 3e3))
            try {
              await v.play()
            } catch (e) {
              s.eMD && console.warn('[PUSH] Unable to play notification sound')
            }
          }
        }
        v.setAttribute('mozaudiochannel', 'notification')
        const I = (0, m.Ds)(w, 1e3, !0, !1)
        async function C() {
          'Notification' in window &&
            (['granted', 'denied'].includes(Notification.permission) ||
              (await Notification.requestPermission()))
        }
        async function S(e) {
          const t = (0, d.Rd)(),
            n = (0, d.Sv)()
          if (e)
            try {
              const t = p(e)
              return (
                await (0, r.t9)('unregisterDevice', t),
                await e.unsubscribe(),
                void n.deleteDeviceToken()
              )
            } catch (e) {
              s.eMD && console.log('[PUSH] Unable to unsubscribe from push.', e)
            }
          t.push && (await (0, r.t9)('unregisterDevice', t.push.deviceToken), n.deleteDeviceToken())
        }
        async function E() {
          if (!g()) return
          const e = await navigator.serviceWorker.ready,
            t = await e.pushManager.getSubscription()
          await S(t)
        }
        let P = !1
        async function A() {
          if (P) return (0, u.dZ)((0, d.Rd)())
          const [e, t] = await Promise.all([
            (0, r.t9)('fetchNotificationSettings'),
            (0, r.t9)('fetchNotificationExceptions'),
          ])
          if (!e) return (0, u.dZ)((0, d.Rd)())
          let n = (0, c.BI)((0, d.Rd)(), e)
          return t && (n = (0, c.aJ)(n, t)), (0, d.R3)(n), (P = !0), (0, u.dZ)(n)
        }
        async function k() {
          if (!g()) return void (await C())
          const e = await navigator.serviceWorker.ready
          let t = await e.pushManager.getSubscription()
          if (
            (function (e) {
              const t = (0, d.Rd)()
              return (
                !t.push ||
                !e ||
                p(e) !== t.push.deviceToken ||
                Date.now() - t.push.subscribedAt > 432e5
              )
            })(t)
          ) {
            await S(t)
            try {
              t = await e.pushManager.subscribe({
                userVisibleOnly: !0,
                applicationServerKey:
                  'BFxTDcn81cm6w_pBEbV-Gg4jz9J6uUU6LcXtHebyZbD6dsXkL2NLe2DuXcWqpluO4qHOxuRXaOw5TkwBTs46skY',
              })
              const n = p(t)
              s.eMD && console.log('[PUSH] Received push subscription: ', n),
                await (0, r.t9)('registerDevice', n),
                (0, d.Sv)().setDeviceToken(n)
            } catch (e) {
              'denied' === Notification.permission
                ? s.eMD && console.warn('[PUSH] The user has blocked push notifications.')
                : s.eMD &&
                  (console.log('[PUSH] Unable to subscribe to push.', e),
                  e.code === DOMException.ABORT_ERR && (await C()))
            }
          }
        }
        async function M(e) {
          const t = (0, i.RT)(e)
          if (!t) return
          let n = h.UV(t)
          return n || (await h.he(t, o.IU.BlobUrl), (n = h.UV(t))), n
        }
        async function T(e) {
          let { call: t, user: n } = e
          const { hasWebNotifications: r } = await A()
          if (document.hasFocus() || !r) return
          if (!b()) return
          const o = await M(n),
            a = { body: (0, i.Js)(n), icon: o, badge: o, tag: `call_${t.id}` }
          'vibrate' in navigator && (a.vibrate = [200, 100, 200])
          const s = new Notification((0, f.Iu)('VoipIncoming'), a)
          s.onclick = () => {
            s.close(), window.focus && window.focus()
          }
        }
        async function N(e) {
          let { chat: t, message: n, isReaction: r = !1 } = e
          const { hasWebNotifications: o } = await A()
          if (
            !(function (e) {
              if (!P) return !1
              const t = (0, d.Rd)()
              if ((0, i.i4)(e, (0, u.dZ)(t), (0, u.NJ)(t)) || e.isNotJoined || !e.isListed)
                return !1
              if (l.$b) {
                const { chatId: n, type: r } = (0, u.Bt)(t) || {}
                return !(n === e.id && 'thread' === r)
              }
              return !document.hasFocus()
            })(t)
          )
            return
          const c = b()
          if (!o || !c) return void (n.isSilent || r || I(String(n.id) || t.id))
          if (!c) return
          if (!n.id) return
          const h = (0, i.dT)(n)
          if (r && !h) return
          const m = await M(t),
            { title: p, body: y } = (function (e, t, n) {
              const r = (0, d.Rd)(),
                { replyToMessageId: o } = t
              let { senderId: c } = t
              n && (c = n.userId)
              const { isScreenLocked: l } = r.passcode,
                h = c ? (0, u.dy)(r, c) : void 0,
                m = (0, i.N5)(t),
                p = m && o ? (0, u.hj)(r, e.id, o) : void 0,
                { targetUserIds: g, targetChatId: b } = m || {},
                y = g ? g.map((e) => (0, u.dy)(r, e)).filter(Boolean) : void 0,
                v = (0, i.zX)(e) === r.currentUserId,
                w = (0, u.p$)(r, t)
              let I
              if (!l && (0, i.Sm)(e, (0, u.dZ)(r), (0, u.NJ)(r)))
                if ((0, i.FT)(t)) {
                  const n = e && ((0, i.eA)(e) || t.senderId === t.chatId)
                  I = (0, a.D)(f.Iu, t, n ? void 0 : h, n ? e : void 0, y, p, b, w, {
                    asPlainText: !0,
                  })
                } else {
                  const n = (0, i.zF)(f.Iu, e.id, h),
                    r = (0, i.MK)(f.Iu, t, !1, 60, !1)
                  I = n ? `${n}: ${r}` : r
                }
              else I = 'New message'
              let C = l ? s.iCi : (0, i.U)(f.Iu, e, v)
              return t.isSilent && (C += ' 🔕'), { title: C, body: I }
            })(t, n, h)
          if (g())
            navigator.serviceWorker?.controller &&
              navigator.serviceWorker.controller.postMessage({
                type: 'showMessageNotification',
                payload: {
                  title: p,
                  body: y,
                  icon: m,
                  chatId: t.id,
                  messageId: n.id,
                  shouldReplaceHistory: !0,
                  isSilent: n.isSilent,
                  reaction: h?.reaction,
                },
              })
          else {
            const e = (0, d.Sv)(),
              o = { body: y, icon: m, badge: m, tag: String(n.id) }
            'vibrate' in navigator && (o.vibrate = [200, 100, 200])
            const a = new Notification(p, o)
            ;(a.onclick = () => {
              a.close(),
                e.focusMessage({ chatId: t.id, messageId: n.id, shouldReplaceHistory: !0 }),
                window.focus && window.focus()
            }),
              (a.onshow = () => {
                r || n.isSilent || I(String(n.id) || t.id)
              })
          }
        }
        function L(e) {
          !s.Cgt &&
            navigator.serviceWorker?.controller &&
            navigator.serviceWorker.controller.postMessage({
              type: 'closeMessageNotifications',
              payload: e,
            })
        }
        function Z() {
          navigator.serviceWorker?.controller &&
            navigator.serviceWorker.controller.postMessage({ type: 'clientReady' })
        }
      },
      95281: (e, t, n) => {
        n.d(t, {
          AU: () => i,
          C8: () => h,
          FB: () => s,
          H4: () => c,
          J9: () => f,
          o6: () => u,
          so: () => l,
          xV: () => d,
        })
        var r = n(49524),
          o = n(83716)
        let a
        function s() {
          return a
        }
        function d(e) {
          a = e
        }
        async function i(e) {
          a = await m(e)
        }
        async function c(e, t) {
          if (!a) throw new Error('[api/passcode] Missing current passcode')
          await Promise.all([
            (async () => {
              if (!e) return
              const t = await b(e, a)
              await p('sessionEncrypted', t)
            })(),
            (async () => {
              if (!t) return
              const e = await b(t, a)
              await p('globalEncrypted', e)
            })(),
          ])
        }
        async function u() {
          if (!a) throw new Error('[api/passcode] Missing current passcode')
          const [e, t] = await Promise.all([g('sessionEncrypted'), g('globalEncrypted')])
          if (!e || !t) throw new Error('[api/passcode] Missing required stored fields')
          const [n, r] = await Promise.all([y(e, a), y(t, a)])
          return { sessionJson: n, globalJson: r }
        }
        async function l(e) {
          const t = await m(e),
            [n, r] = await Promise.all([g('sessionEncrypted'), g('globalEncrypted')])
          if (!n || !r) throw new Error('[api/passcode] Missing required stored fields')
          const [o, s] = await Promise.all([y(n, t), y(r, t)])
          return (a = t), { sessionJson: o, globalJson: s }
        }
        function f() {
          a = void 0
        }
        function h() {
          return f(), r.clear(o.oX1)
        }
        function m(e) {
          return crypto.subtle.digest(
            'SHA-256',
            new TextEncoder().encode(`${e}harder better faster stronger`)
          )
        }
        async function p(e, t) {
          await r.save(o.oX1, e, t)
        }
        function g(e) {
          return r.fetch(o.oX1, e, r.Type.ArrayBuffer)
        }
        async function b(e, t) {
          const n = crypto.getRandomValues(new Uint8Array(12)),
            r = { name: 'AES-GCM', iv: n },
            o = await crypto.subtle.importKey('raw', t, r, !1, ['encrypt']),
            a = new TextEncoder().encode(e),
            s = await crypto.subtle.encrypt(r, o, a),
            d = new Uint8Array(s),
            i = new Uint8Array(12 + d.length)
          return i.set(n, 0), i.set(d, 12), i.buffer
        }
        async function y(e, t) {
          const n = new Uint8Array(e),
            r = { name: 'AES-GCM', iv: n.slice(0, 12) },
            o = await crypto.subtle.importKey('raw', t, r, !1, ['decrypt']),
            a = n.slice(12),
            s = await crypto.subtle.decrypt(r, o, a)
          return new TextDecoder().decode(s)
        }
      },
      85266: (e, t, n) => {
        function r(e) {
          e.dataset.patchedForSafari ||
            (e.addEventListener(
              'play',
              () => {
                const t = e.currentTime
                ;(e.dataset.patchForSafariInProgress = 'true'),
                  e.addEventListener('progress', function n() {
                    e.buffered.length &&
                      ((e.currentTime = e.duration - 1),
                      e.addEventListener(
                        'progress',
                        () => {
                          delete e.dataset.patchForSafariInProgress,
                            (e.currentTime = t),
                            e.paused && !e.dataset.preventPlayAfterPatch && e.play()
                        },
                        { once: !0 }
                      ),
                      e.removeEventListener('progress', n))
                  })
              },
              { once: !0 }
            ),
            (e.dataset.patchedForSafari = 'true'))
        }
        function o(e) {
          return Boolean(e.dataset.patchForSafariInProgress)
        }
        n.d(t, { B: () => r, z: () => o })
      },
      6272: (e, t, n) => {
        n.d(t, { U9: () => a, WZ: () => i, g3: () => s, un: () => d })
        const r = 'X',
          o = 'XXX XXX XXX XXX'
        function a(e, t) {
          return e.filter((e) => e.iso2 === t)
        }
        function s(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = t.replace(/[^\d+]+/g, '')
          n.startsWith('+') && (n = n.substr(1))
          const r = e.filter((e) => n.startsWith(e.countryCode)),
            o = r
              .map((e) =>
                (e.prefixes || ['']).map((t) => ({ code: `${e.countryCode}${t}`, country: e }))
              )
              .flat(),
            a = o
              .filter((e) => {
                let { code: t } = e
                return n.startsWith(t)
              })
              .sort((e, t) => e.code.length - t.code.length)
          return a[a.length - 1]?.country
        }
        function d(e, t) {
          if (!e) return ''
          let n = e.replace(/[^\d]+/g, '')
          if (t) n = n.substr(t.countryCode.length)
          else if (e.startsWith('+')) return e
          const a = (function (e, t) {
              if (!t || 0 === t.length) return o
              if (1 === t.length) return t[0]
              const n = t.find((e) => e.startsWith(r)) || o,
                a = t.filter((t) => {
                  const n = t.replace(/[^\dX]+/g, '')
                  if (n.startsWith(r)) return !1
                  for (let t = 0; t < e.length; t++)
                    if (t > n.length - 1 || (n[t] !== r && n[t] !== e[t])) return !1
                  return !0
                })
              return 1 === a.length ? a[0] : n
            })(n, t?.patterns),
            s = []
          let d = 0
          for (let e = 0; e < n.length; e++) {
            for (
              ;
              a[d] !== r && d < a.length && (s.push(a[d]), a[d] !== n[e] || (e++, e !== n.length));

            )
              d++
            s.push(n[e]), d++
          }
          return s.join('')
        }
        function i(e, t) {
          if (!t) return ''
          const n = t.startsWith('+') ? t : `+${t}`,
            r = s(e, n)
          return r ? `+${r.countryCode} ${d(n, r)}` : n
        }
      },
      15780: (e, t, n) => {
        n.d(t, { DQ: () => c, Ex: () => f, VX: () => l, Yw: () => m, dx: () => h, tB: () => u })
        var r = n(6137),
          o = n(83716)
        let a,
          s,
          d = !1,
          i = window.location.hash
        function c() {
          ;(i = void 0), (d = !1), (s = void 0), (a = void 0)
        }
        const u = (e, t, n) => {
          const o = 'thread' === t ? void 0 : t
          return (n === r._f ? [e, o] : [e, n, o]).filter(Boolean).join('_')
        }
        function l() {
          if ((h(), !s)) return
          const e = s.split('_')
          let t, n, o
          if (1 === e.length) t = e[0]
          else if (2 === e.length) {
            const r = ['thread', 'pinned', 'scheduled'].includes(e[1])
            ;(t = e[0]), (n = r ? e[1] : 'thread'), (o = r ? void 0 : e[1])
          } else e.length >= 3 && ([t, o, n] = e)
          if (!t?.match(/^-?\d+$/)) return
          const a = ['thread', 'pinned', 'scheduled'].includes(n)
          return { chatId: t, type: n && a ? n : 'thread', threadId: Number(o) || r._f }
        }
        const f = (e, t, n) => {
          const r = new URL(window.location.href)
          return (r.hash = u(e, t, n)), r.href
        }
        function h() {
          if (a) return a
          if (d) return
          if (!i) return
          let e = i.replace(/^#/, '')
          return (
            e.includes('?')
              ? (([s, e] = e.split('?')), o.NuY || (window.location.hash = s))
              : e.includes('=') && (o.NuY || (window.location.hash = '')),
            (a = e.includes('=')
              ? e.split('&').reduce((e, t) => {
                  const [n, r] = t.split('=')
                  return (e[n] = r), e
                }, {})
              : void 0),
            (d = !0),
            a || (s = e),
            a
          )
        }
        function m() {
          a && delete a.tgWebAuthToken
        }
      },
      74753: (e, t, n) => {
        n.d(t, { Z: () => a, h: () => o })
        var r = n(83716)
        const o = (e) => e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2,
          a = (e) => {
            e.play().catch((t) => {
              r.eMD && console.warn(t, e)
            })
          }
      },
      69118: (e, t, n) => {
        function r(e, t) {
          let n,
            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
          return function () {
            for (var a = arguments.length, s = new Array(a), d = 0; d < a; d++) s[d] = arguments[d]
            n ? (clearTimeout(n), (n = void 0)) : r && e(...s),
              (n = self.setTimeout(() => {
                o && e(...s), (n = void 0)
              }, t))
          }
        }
        function o(e, t) {
          let n,
            r,
            o,
            a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          return function () {
            r = !0
            for (var s = arguments.length, d = new Array(s), i = 0; i < s; i++) d[i] = arguments[i]
            ;(o = d),
              n ||
                (a && ((r = !1), e(...o)),
                (n = self.setInterval(() => {
                  if (!r) return self.clearInterval(n), void (n = void 0)
                  ;(r = !1), e(...o)
                }, t)))
          }
        }
        function a(e) {
          return I(e, !1, !0)
        }
        function s(e) {
          return c(a, e)
        }
        function d(e) {
          return c(I, e)
        }
        function i(e) {
          return c(C, e)
        }
        function c(e, t) {
          let n,
            r = !1
          return function () {
            for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s]
            ;(n = a),
              r ||
                ((r = !0),
                e(() => {
                  ;(r = !1), t(...n)
                }))
          }
        }
        function u(e, t) {
          self.requestIdleCallback ? self.requestIdleCallback(e, { timeout: t }) : C(e)
        }
        n.d(t, {
          $6: () => i,
          Ds: () => r,
          Gq: () => S,
          P2: () => o,
          Pn: () => f,
          Q8: () => u,
          R3: () => C,
          T2: () => I,
          Uj: () => s,
          WN: () => a,
          mS: () => d,
          wO: () => l,
        })
        const l = (e) =>
          new Promise((t) => {
            setTimeout(() => t(), e)
          })
        function f() {
          return new Promise((e) => {
            I(e)
          })
        }
        let h, m, p, g, b, y, v, w
        function I(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          h
            ? t
              ? n
                ? g.push(e)
                : m.push(e)
              : n
              ? p.push(e)
              : h.push(e)
            : ((h = n || t ? [] : [e]),
              (m = !n && t ? [e] : []),
              (p = n && !t ? [e] : []),
              (g = n && t ? [e] : []),
              requestAnimationFrame(() => {
                const e = h,
                  t = m,
                  n = p,
                  r = g
                b && clearTimeout(b),
                  (b = void 0),
                  (h = void 0),
                  (m = void 0),
                  (p = void 0),
                  (g = void 0),
                  t.forEach((e) => e()),
                  r.forEach((e) => e()),
                  e.forEach((e) => e()),
                  n.forEach((e) => e())
              })),
            !b &&
              n &&
              (b = setTimeout(() => {
                const e = p,
                  t = g
                b && clearTimeout(b),
                  (b = void 0),
                  (p = []),
                  (g = []),
                  t.forEach((e) => e()),
                  e.forEach((e) => e())
              }, 300))
        }
        function C(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          y
            ? t
              ? v.push(e)
              : y.push(e)
            : ((y = t ? [] : [e]),
              (v = t ? [e] : []),
              Promise.resolve().then(() => {
                const e = y,
                  t = v
                ;(y = void 0), (v = void 0), t.forEach((e) => e()), e.forEach((e) => e())
              }))
        }
        function S(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          return (
            w ||
              ((w = []),
              self.addEventListener('beforeunload', () => {
                w.forEach((e) => e())
              })),
            t ? w.push(e) : w.unshift(e),
            () => {
              w = w.filter((t) => t !== e)
            }
          )
        }
      },
      85765: (e, t, n) => {
        let r
        n.d(t, { W: () => a, Z: () => o })
        try {
          r = /[^\p{L}\p{M}]+/iu
        } catch (e) {
          r = /[^\wа-яёґєії]+/i
        }
        function o(e, t) {
          if (!e || !t) return !1
          const n = 'string' == typeof t ? t.toLowerCase().split(r) : t,
            o = e.toLowerCase()
          if (1 === n.length && !o.includes(n[0])) return !1
          let a
          return n.every(
            (e) => !!o.includes(e) && (a || (a = o.split(r)), a.some((t) => t.startsWith(e)))
          )
        }
        function a(e) {
          const t = e.toLowerCase().split(r)
          return (e) => o(e, t)
        }
      },
      82267: (e, t, n) => {
        n.d(t, { Qj: () => a, Y$: () => o, bp: () => s })
        let r = 0
        function o(e) {
          r = e
        }
        function a() {
          return r
        }
        function s() {
          return Math.floor(Date.now() / 1e3) + r
        }
      },
      50214: (e, t, n) => {
        function r(e) {
          return new Promise((t, n) => {
            ;(e.oncomplete = e.onsuccess = () => t(e.result)),
              (e.onabort = e.onerror = () => n(e.error))
          })
        }
        let o
        function a() {
          return (
            o ||
              (o = (function (e, t) {
                const n = indexedDB.open('keyval-store')
                n.onupgradeneeded = () => n.result.createObjectStore(t)
                const o = r(n)
                return (e, n) => o.then((r) => n(r.transaction(t, e).objectStore(t)))
              })(0, 'keyval')),
            o
          )
        }
        n.d(t, { f3: () => m, jv: () => l, ti: () => c, Qw: () => h, K8: () => f, wX: () => u })
        var s = n(83716),
          d = n(49524)
        const i = [1, 2, 3, 4, 5]
        function c() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          if (e && localStorage.getItem(s.Vxl)) return !0
          if (p()) return !0
          const t = localStorage.getItem(s.b_O)
          if (!t) return !1
          try {
            const e = JSON.parse(t)
            return Boolean(e && e.id && e.dcID)
          } catch (e) {
            return !1
          }
        }
        function u(e, t) {
          const { mainDcId: n, keys: r, hashes: o } = e
          localStorage.setItem(s.b_O, JSON.stringify({ dcID: n, id: t })),
            localStorage.setItem('dc', String(n)),
            Object.keys(r)
              .map(Number)
              .forEach((e) => {
                localStorage.setItem(`dc${e}_auth_key`, JSON.stringify(r[e]))
              }),
            o &&
              Object.keys(o)
                .map(Number)
                .forEach((e) => {
                  localStorage.setItem(`dc${e}_hash`, JSON.stringify(o[e]))
                })
        }
        function l() {
          ;[
            s.b_O,
            'dc',
            ...i.map((e) => `dc${e}_auth_key`),
            ...i.map((e) => `dc${e}_hash`),
            ...i.map((e) => `dc${e}_server_salt`),
          ].forEach((e) => {
            localStorage.removeItem(e)
          })
        }
        function f() {
          if (!c()) return
          const e = JSON.parse(localStorage.getItem(s.b_O))
          if (!e) return
          const t = Number(e.dcID),
            n = {},
            r = {}
          return (
            i.forEach((e) => {
              try {
                const t = localStorage.getItem(`dc${e}_auth_key`)
                t && (n[e] = JSON.parse(t))
                const o = localStorage.getItem(`dc${e}_hash`)
                o && (r[e] = JSON.parse(o))
              } catch (e) {
                s.eMD && console.warn('Failed to load stored session', e)
              }
            }),
            Object.keys(n).length ? { mainDcId: t, keys: n, hashes: r } : void 0
          )
        }
        async function h() {
          const e = localStorage.getItem(s.Vxl)
          if (!e) return
          const t = await (function (e, t = a()) {
            return t('readonly', (t) => r(t.get(e)))
          })(`GramJs:${e}`)
          try {
            u(JSON.parse(t))
          } catch (e) {
            s.eMD && console.warn('Failed to load legacy session', e)
          }
        }
        async function m() {
          try {
            localStorage.removeItem(s.Vxl)
            const e = await (function (e = a()) {
              return e('readonly', (e) => {
                if (e.getAllKeys) return r(e.getAllKeys())
                const t = []
                return (function (e, t) {
                  return (
                    (e.openCursor().onsuccess = function () {
                      this.result && (t(this.result), this.result.continue())
                    }),
                    r(e.transaction)
                  )
                })(e, (e) => t.push(e.key)).then(() => t)
              })
            })()
            await Promise.all([
              d.clear('GramJs'),
              ...e
                .filter((e) => 'string' == typeof e && e.startsWith('GramJs:GramJs-session-'))
                .map((e) =>
                  (function (e, t = a()) {
                    return t('readwrite', (t) => (t.delete(e), r(t.transaction)))
                  })(e)
                ),
            ])
          } catch (e) {
            s.eMD && console.warn('Failed to clear legacy session', e)
          }
        }
        function p() {
          const e = JSON.parse(localStorage.getItem(s.UhJ) || '{}')
          return Boolean(e?.passcode?.isScreenLocked)
        }
      },
      19369: (e, t, n) => {
        n.d(t, { $Z: () => a, Dc: () => i, gQ: () => d })
        var r = n(16063)
        const o = Symbol('SIGNAL_MARK')
        function a(e) {
          return 'function' == typeof e && o in e
        }
        const s = new Map()
        function d(e) {
          const t = { value: e, effects: (0, r._)() }
          return [
            Object.assign(
              function () {
                return t.value
              },
              {
                [o]: o,
                subscribe: function (e) {
                  const n = t.effects.addCallback(e)
                  return (
                    s.has(e) ? s.get(e).add(n) : s.set(e, new Set([n])),
                    () => {
                      n()
                      const t = s.get(e)
                      t.delete(n), t.size || s.delete(e)
                    }
                  )
                },
              }
            ),
            function (e) {
              t.value !== e && ((t.value = e), t.effects.runCallbacks())
            },
          ]
        }
        function i(e) {
          s.get(e)?.forEach((e) => {
            e()
          }),
            s.delete(e)
        }
      },
      27370: (e, t, n) => {
        n.d(t, { Z: () => f, o: () => u })
        var r = n(9933)
        const o = JSON.parse(
          '{"--color-primary":["#3390EC","#8774E1"],"--color-primary-opacity":["#50A2E940","#8378DB80"],"--color-primary-opacity-hover":["#50A2E926","#8378DBA0"],"--color-primary-shade":["#4a95d6","#7b71c6"],"--color-background":["#FFFFFF","#212121"],"--color-background-compact-menu":["#FFFFFFBB","#212121DD"],"--color-background-compact-menu-reactions":["#FFFFFFEB","#212121DD"],"--color-background-compact-menu-hover":["#00000011","#00000066"],"--color-background-secondary":["#f4f4f5","#0F0F0F"],"--color-background-secondary-accent":["#E4E4E5","#100f10"],"--color-background-own":["#EEFFDE","#766AC8"],"--color-background-own-apple":["#DCF8C5","#766AC8"],"--color-background-selected":["#F4F4F5","#2C2C2C"],"--color-background-own-selected":["#d0ffac","#6549d4"],"--color-chat-hover":["#F4F4F5","#2C2C2C"],"--color-chat-active":["#3390EC","#766AC8"],"--color-chat-active-greyed":["#60a7f0","#9288d3"],"--color-item-active":["#ededed","#292929"],"--color-text":["#000000","#FFFFFF"],"--color-text-secondary":["#707579","#AAAAAA"],"--color-icon-secondary":["#707579","#AAAAAA"],"--color-text-secondary-apple":["#8E8E92","#AAAAAA"],"--color-borders":["#DADCE0","#303030"],"--color-borders-input":["#DADCE0","#5B5B5A"],"--color-dividers":["#C8C6CC","#3B3B3D"],"--color-dividers-android":["#E7E7E7","#0F0F0F"],"--color-links":["#3390EC","#8774E1"],"--color-gray":["#C4C9CC","#717579"],"--color-pinned":["#C4C9CC","#707579"],"--color-default-shadow":["#72727240","#1010109c"],"--color-light-shadow":["#7272722B","#00000040"],"--color-green":["#00C73E","#8774E1"],"--color-text-meta-colored":["#4DCD5E","#8378DB"],"--color-reply-hover":["#F4F4F4","#272727"],"--color-reply-active":["#E8E9E9","#2E2F2F"],"--color-reply-own-hover":["#D9F5CE","#8775DA"],"--color-reply-own-hover-apple":["#cbefb7","#8775DA"],"--color-reply-own-active":["#C5ECBE","#917DEA"],"--color-reply-own-active-apple":["#bae6a8","#917DEA"],"--color-accent-own":["#45AF54","#FFFFFF"],"--color-message-meta-own":["#4FAE4EFF","#FFFFFF88"],"--color-own-links":["#3390EC","#FFFFFF"],"--color-code":["#4a729a","#8774E1"],"--color-code-own":["#3c7940","#FFFFFF"],"--color-code-bg":["#70757914","#00000080"],"--color-code-own-bg":["#70757914","#00000050"],"--color-composer-button":["#707579CC","#AAAAAACC"],"--color-message-reaction":["#ebf3fd","#2b2a35"],"--color-message-reaction-hover":["#c5def9","#343147"],"--color-message-reaction-own":["#cef0ba","#675CAF"],"--color-message-reaction-hover-own":["#b5e0a4","#5B529B"],"--color-voice-transcribe-button":["#e8f3ff","#2a2a3c"],"--color-voice-transcribe-button-own":["#cceebf","#8373d3"],"--color-topic-blue":["#2F7772","#6ff9f0"],"--color-topic-yellow":["#7F693B","#ffd67e"],"--color-topic-violet":["#8B5A96","#cb86db"],"--color-topic-green":["#44774A","#8eee98"],"--color-topic-rose":["#9B576B","#ff93b2"],"--color-topic-red":["#EB6858","#fb6f5f"],"--color-topic-grey":["#6C6C6C","#999999"],"--color-forum-unread-topic-hover":["#e9e9e9","#363636"],"--color-forum-hover-unread-topic-hover":["#e2e2e2","#3f3f3f"],"--color-chat-username":["#3C7EB0","#E9EEF4"]}'
        )
        var a = n(28712)
        let s = !1
        const d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
          i = new Set(['--color-primary-shade', '--color-text-secondary']),
          c = Object.keys(o).map((e) => ({ property: e, colors: [u(o[e][0]), u(o[e][1])] }))
        function u(e) {
          const t = d.exec(e)
          return {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16),
            a: void 0 !== t[4] ? parseInt(t[4], 16) : void 0,
          }
        }
        function l(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
          c.forEach((r) => {
            let { property: o, colors: s } = r
            const d = Math.round((0, a.t7)(s[e].r, s[t].r, n)),
              c = Math.round((0, a.t7)(s[e].g, s[t].g, n)),
              u = Math.round((0, a.t7)(s[e].b, s[t].b, n)),
              l = void 0 !== s[e].a ? Math.round((0, a.t7)(s[e].a, s[t].a, n)) : void 0
            document.documentElement.style.setProperty(
              o,
              void 0 !== l ? `rgba(${d},${c},${u},${l / 255})` : `rgb(${d},${c},${u})`
            ),
              i.has(o) && document.documentElement.style.setProperty(`${o}-rgb`, `${d},${c},${u}`)
          })
        }
        const f = (e, t) => {
          const n = `theme-${e}`
          if (document.documentElement.classList.contains(n)) return
          const o = 'dark' === e,
            a = s && t,
            d = o ? 0 : 1,
            i = o ? 1 : 0,
            c = Date.now(),
            u = document.querySelector('meta[name="theme-color"]')
          document.documentElement.classList.remove('theme-' + (o ? 'light' : 'dark')),
            s && document.documentElement.classList.add('no-animations'),
            document.documentElement.classList.add(n),
            u && u.setAttribute('content', o ? '#212121' : '#fff'),
            setTimeout(() => {
              document.documentElement.classList.remove('no-animations')
            }, 500),
            (s = !0),
            a
              ? (0, r.jt)(() => {
                  const e = Math.min((Date.now() - c) / 200, 1)
                  return (
                    l(
                      d,
                      i,
                      (function (e) {
                        return 1 - (1 - e) ** 3.5
                      })(e)
                    ),
                    e < 1
                  )
                })
              : l(d, i)
        }
      },
      2155: (e, t, n) => {
        n.d(t, { Xv: () => i, bi: () => d, kh: () => a, sS: () => u })
        var r = n(33681),
          o = n(34284)
        function a(e) {
          return String(e).replace(/\d(?=(\d{3})+$)/g, '$& ')
        }
        function s(e) {
          return '.0' === String(e.toFixed(1)).substr(-2)
            ? Math.round(e)
            : e.toFixed(1).replace('.', ',')
        }
        function d(e) {
          return e < 1e3 ? e.toString() : e < 1e6 ? `${s(e / 1e3)}K` : `${s(e / 1e6)}M`
        }
        const i = (0, n(15155).Z)(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
            return e
              .replace(/[.,!@#$%^&*()_+=\-`~[\]/\\{}:"|<>?]+/gi, '')
              .trim()
              .split(/\s+/)
              .slice(0, t)
              .map((e) => {
                if (!e.length) return ''
                const t = (e = (0, o.g6)(e)).match(r.Z)
                return t && e.startsWith(t[0]) ? t[0] : e.match(/./u)[0].toUpperCase()
              })
              .join('')
          }),
          c = ['B', 'KB', 'MB', 'GB']
        function u(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
          if (0 === t) return e('FileSize.B', 0)
          const r = 1024,
            o = Math.floor(Math.log(t) / Math.log(r)),
            a = (t / r ** o).toFixed(Math.max(n, 0))
          return e(`FileSize.${c[o]}`, a)
        }
      },
      18629: (e, t, n) => {
        function r() {
          const e = getComputedStyle(document.documentElement),
            t = a(e, '--color-background'),
            n = a(e, '--color-text'),
            r = a(e, '--color-primary'),
            o = a(e, '--color-white'),
            s = a(e, '--color-links')
          return {
            bg_color: t,
            text_color: n,
            hint_color: a(e, '--color-text-secondary'),
            link_color: s,
            button_color: r,
            button_text_color: o,
            secondary_bg_color: a(e, '--color-background-secondary'),
          }
        }
        function o(e) {
          return /^#[0-9A-F]{6}$/i.test(e)
        }
        function a(e, t) {
          const n = e.getPropertyValue(t)
          var r
          if (n)
            return o((r = n.trim()))
              ? r
              : `#${r
                  .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
                  .slice(1)
                  .map((e, t) =>
                    (3 === t ? Math.round(255 * parseFloat(e)) : parseFloat(e))
                      .toString(16)
                      .padStart(2, '0')
                      .replace('NaN', '')
                  )
                  .join('')}`
        }
        n.d(t, { BS: () => r, Uq: () => o, ZX: () => a })
      },
      48035: (e, t, n) => {
        function r(e, t) {
          return !e || !t || e.length <= t ? e : `${e.substring(0, t)}...`
        }
        n.d(t, { Z: () => r })
      },
      10862: (e, t, n) => {
        n.d(t, { Hu: () => i, _y: () => c, p6: () => u })
        var r = n(863),
          o = n(71394),
          a = n(69118)
        let s, d
        const i =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        async function c(e, t) {
          for (l(); !d.wasmReady; ) await (0, a.wO)(2e3)
          const {
            result: n,
            width: r,
            height: o,
          } = await (function (e, t) {
            return new Promise((n) => {
              d.requests || (d.requests = new Map()),
                d.requests.set(e, n),
                d.postMessage({ id: e, blob: t })
            })
          })(e, t)
          if (r && o)
            return (function (e) {
              let { result: t, width: n, height: r } = e
              return (
                s || (s = document.createElement('canvas')),
                new Promise((e) => {
                  const o = new ImageData(t, n, r)
                  ;(s.width = n),
                    (s.height = r),
                    s.getContext('2d').putImageData(o, 0, 0),
                    s.toBlob(
                      (t) => {
                        e(null != t ? t : void 0)
                      },
                      'image/png',
                      1
                    )
                })
              )
            })({ result: n, width: r, height: o })
        }
        async function u(e, t) {
          if ((0, r.on)() || 'data:image/webp' !== t.substr(0, 15)) return t
          l()
          const n = await c(e, (0, o.A9)(t))
          if (!n) throw new Error(`Can't convert webp to png. Url: ${t}`)
          return (0, o.YJ)(n)
        }
        function l() {
          d ||
            ((d = new Worker(new URL(n.p + n.u(9536), n.b))), (d.wasmReady = !1), (d.onmessage = f))
        }
        function f(e) {
          const { id: t } = e.data
          switch (e.data.type) {
            case 'initialized':
              d.wasmReady = !0
              break
            case 'result':
              if (d.requests.has(t)) {
                const n = d.requests.get(t)
                d.requests.delete(t), n(e.data)
              }
          }
        }
      },
      706: (e, t, n) => {
        n.d(t, { IT: () => l, NA: () => f, W8: () => m, px: () => h })
        var r = n(83716),
          o = n(33555),
          a = n(50214)
        const s = ['t.me', 'telegram.me', 'teamgram.me'].map((e) => `//${e}/_websync_?`),
          d = `${r.JiC} Z`,
          i = 'tgme_sync',
          c = () => Math.floor(Number(new Date()) / 1e3)
        let u
        const l = (e) => {
          if (r.NuY) return
          const t = c(),
            { canRedirect: n, ts: o } = JSON.parse(localStorage.getItem(i) || '{}')
          return n !== e || o + 86400 <= t
            ? Promise.all(
                s.map(
                  (t) =>
                    new Promise((n, r) => {
                      const o = document.createElement('script'),
                        a = () => Boolean(document.body.removeChild(o))
                      ;(o.src =
                        t + new URLSearchParams({ authed: Number(e).toString(), version: d })),
                        document.body.appendChild(o),
                        (o.onload = () => {
                          ;((e) => {
                            const t = c()
                            localStorage.setItem(i, JSON.stringify({ canRedirect: e, ts: t }))
                          })(e),
                            a(),
                            u && (clearTimeout(u), (u = void 0)),
                            h(),
                            n()
                        }),
                        (o.onerror = () => {
                          a(), r()
                        })
                    })
                )
              )
            : Promise.resolve()
        }
        function f() {
          r.eMD || (u && clearTimeout(u))
        }
        function h() {
          if (r.eMD) return
          if (void 0 !== u) return
          const e = c(),
            { ts: t } = JSON.parse(localStorage.getItem(i) || '{}'),
            n = 86400 - (e - t)
          u = setTimeout(
            () => {
              const { authState: e } = (0, o.Rd)(),
                t = 'authorizationStateReady' === e || (0, a.ti)(!0)
              l(t)
            },
            Math.max(0, 1e3 * n)
          )
        }
        function m() {
          localStorage.removeItem(i)
        }
      },
      863: (e, t, n) => {
        n.d(t, {
          Bi: () => M,
          cL: () => R,
          wZ: () => m,
          gk: () => D,
          vX: () => A,
          FW: () => F,
          op: () => C,
          EA: () => j,
          cj: () => h,
          jm: () => f,
          pA: () => L,
          Eo: () => U,
          _G: () => O,
          IT: () => $,
          rT: () => B,
          m5: () => P,
          Xp: () => u,
          I_: () => E,
          fl: () => v,
          t0: () => k,
          s$: () => g,
          i4: () => x,
          Mc: () => S,
          $b: () => w,
          SX: () => V,
          mh: () => I,
          Hh: () => Z,
          nJ: () => b,
          s0: () => T,
          aZ: () => _,
          l0: () => H,
          gZ: () => W,
          tc: () => y,
          Lt: () => l,
          as: () => G,
          vn: () => d,
          on: () => a,
        })
        var r = n(83716)
        let o
        function a() {
          return Boolean(o)
        }
        new Promise((e) => {
          const t = new Image()
          t.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
          const n = () => {
            e(2 === t.height)
          }
          ;(t.onload = n), (t.onerror = n)
        }).then((e) => {
          o = e
        })
        let s = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        function d() {
          return s
        }
        function i(e) {
          s = e.matches ? 'dark' : 'light'
        }
        const c = window.matchMedia('(prefers-color-scheme: dark)')
        'function' == typeof c.addEventListener
          ? c.addEventListener('change', i)
          : 'function' == typeof c.addListener && c.addListener(i)
        const u = window.location.host === r.xHY,
          l = (function () {
            const { userAgent: e, platform: t } = window.navigator
            let n
            return (
              -1 !== ['iPhone', 'iPad', 'iPod'].indexOf(t) ||
              ('MacIntel' === t && 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 2)
                ? (n = 'iOS')
                : -1 !== ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(t)
                ? (n = 'macOS')
                : -1 !== ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(t)
                ? (n = 'Windows')
                : /Android/.test(e)
                ? (n = 'Android')
                : /Linux/.test(t) && (n = 'Linux'),
              n
            )
          })(),
          f = 'macOS' === l,
          h = 'iOS' === l,
          m = 'Android' === l,
          p = h || m,
          g = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          b = navigator.userAgent.includes('YaBrowser')
        let y
        !(function (e) {
          ;(e[(e.Main = 0)] = 'Main'),
            (e[(e.Auxiliary = 1)] = 'Auxiliary'),
            (e[(e.Secondary = 2)] = 'Secondary'),
            (e[(e.Fourth = 3)] = 'Fourth'),
            (e[(e.Fifth = 4)] = 'Fifth')
        })(y || (y = {}))
        const v =
            window.matchMedia('(display-mode: standalone)').matches ||
            window.navigator.standalone ||
            document.referrer.includes('android-app://'),
          w = window.matchMedia('(pointer: coarse)').matches,
          I = Boolean(
            window.navigator.mediaDevices &&
              'getUserMedia' in window.navigator.mediaDevices &&
              (window.AudioContext || window.webkitAudioContext)
          ),
          C =
            (document.documentElement.style,
            l &&
              (f || h) &&
              (function () {
                const e = document.createElement('span')
                e.classList.add('emoji-test-element'),
                  document.body.appendChild(e),
                  (e.innerText = '🫱🏻')
                const t = e.offsetWidth
                e.innerText = '❤️'
                const n = e.offsetWidth
                return document.body.removeChild(e), Math.abs(t - n) < 5
              })()),
          S = 'serviceWorker' in navigator,
          E = S,
          P = (window, Boolean(new Audio().canPlayType('audio/ogg; codecs=opus'))),
          A = !r.Cgt && 'filter' in (document.createElement('canvas').getContext('2d') || {}),
          k = 'requestFullscreen' in document.createElement('div'),
          M = !navigator.userAgent.includes('Firefox'),
          T = m ? 'slide-fade' : h ? 'slide-layers' : 'push-slide',
          N = document.createElement('video'),
          L = Boolean(N.canPlayType(r.Ngd).replace('no', '') || h || f)
        L && (r.wGh.add(r.Ngd), r.dII.add(r.Ngd))
        const Z = Boolean(N.canPlayType('video/webm; codecs="vp9"').replace('no', '')),
          R = window.devicePixelRatio || 1,
          _ = !0,
          B = Boolean(navigator.storage?.getDirectory)
        B &&
          (async () => {
            try {
              const e = await navigator.storage.getDirectory()
              await e.removeEntry('downloads', { recursive: !0 })
            } catch {}
          })()
        const O = CSS.supports('offset-rotate: 0deg'),
          D =
            CSS.supports('backdrop-filter: blur()') ||
            CSS.supports('-webkit-backdrop-filter: blur()'),
          F = !w,
          x = !f && !p,
          j = 'onbeforeinstallprompt' in window,
          U = 'BroadcastChannel' in window,
          $ = U && !(v && p),
          V = Boolean(Intl.DisplayNames),
          W = x ? 300 : 750,
          H = 1048576 * (p ? 512 : 2e3),
          G = !0
      },
      43858: (e, t, n) => {
        n.d(t, { Z: () => c, z: () => i })
        var r = n(69118),
          o = n(863)
        const a = window.innerHeight
        let s = i()
        const d = (0, r.P2)(
          () => {
            s = i()
          },
          250,
          !0
        )
        function i() {
          let e
          e = o.cj
            ? window.visualViewport.height + window.visualViewport.pageTop
            : window.innerHeight
          const t = 0.01 * e
          return (
            document.documentElement.style.setProperty('--vh', `${t}px`),
            { width: window.innerWidth, height: window.innerHeight }
          )
        }
        window.addEventListener('orientationchange', d),
          o.cj
            ? window.visualViewport.addEventListener('resize', d)
            : window.addEventListener('resize', d)
        const c = { get: () => s, getIsKeyboardVisible: () => a > s.height }
      },
      15155: (e, t, n) => {
        n.d(t, { Z: () => o })
        const r = new WeakMap()
        function o(e) {
          return function () {
            let t = r.get(e)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            const s = o.map(String).join('_')
            if (t) {
              const e = t.get(s)
              if (e) return e
            } else (t = new Map()), r.set(e, t)
            const d = e(...o)
            return t.set(s, d), d
          }
        }
      },
      69123: (e, t, n) => {
        e.exports = n.p + 'blank.8dd283bceccca95a48d8.png'
      },
      17017: (e, t, n) => {
        e.exports = n.p + 'grey.45da821d56a68ea86203.svg'
      },
      2092: (e, t, n) => {
        e.exports = n.p + 'lock.f11661905df47960fa3e.png'
      },
      53930: (e, t, n) => {
        e.exports = n.p + 'square.370a4828a4f2afc14ada.svg'
      },
    },
    d = {}
  function i(e) {
    var t = d[e]
    if (void 0 !== t) return t.exports
    var n = (d[e] = { exports: {} })
    return s[e].call(n.exports, n, n.exports, i), n.exports
  }
  ;(i.m = s),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return i.d(t, { a: t }), t
    }),
    (t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (i.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n
      if ('object' == typeof n && n) {
        if (4 & r && n.__esModule) return n
        if (16 & r && 'function' == typeof n.then) return n
      }
      var o = Object.create(null)
      i.r(o)
      var a = {}
      e = e || [null, t({}), t([]), t(t)]
      for (var s = 2 & r && n; 'object' == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => (a[e] = () => n[e]))
      return (a.default = () => n), i.d(o, a), o
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
    }),
    (i.f = {}),
    (i.e = (e) => Promise.all(Object.keys(i.f).reduce((t, n) => (i.f[n](e, t), t), []))),
    (i.u = (e) =>
      e +
      '.' +
      {
        67: '64ea66fd38378b7ff1c0',
        143: 'b9d348e95b427a1a06a7',
        154: '3ae7fa966bfb68c25e2e',
        191: '264724701731501f2656',
        209: '96759a984e000a416ea9',
        212: '224737a9af460973f44e',
        244: 'fea479ea3851c86b1889',
        256: '1c7267869db42afe2a42',
        289: '40fd1cd5483d2933ff3a',
        370: '2e4fbc547841b44d1f17',
        483: 'ef569c39e24a539c57c3',
        625: '9c6914987fe7f8693bb6',
        713: '47fef4c4f5a659c253ad',
        730: '8f850dbba0c3bef4ef80',
        831: '734ed72f5bd8cf6e616e',
        905: '4d1353c23db942dcc86f',
        958: '35aebe719a4ae8dbda4e',
        1098: '486b48f4bc4a7835480a',
        1142: 'bdc251d3d68b506fc520',
        1161: '3d89c0a7ac3a20fdd5b7',
        1275: '85e18364f28d73893526',
        1276: '31d4b4bc34861a74ee8c',
        1360: 'e7ac69c602ae84d8ea85',
        1367: '6b4115fe70ec398b0304',
        1402: '563ba27819b4ac7fd8e4',
        1418: 'c22c4d0232ac3c49e895',
        1437: '880db38a718473bbec03',
        1514: '9ca170fec3a1dfc733bf',
        1627: 'd64dbd72c0ae00e4ca79',
        1641: '479953981aeba31270a2',
        1699: 'ff6e0bb5d70a57bd1ec1',
        1752: '370784d8d17fef3579da',
        1849: '3a893328feafb62ca224',
        1879: '8da86a105668456685e8',
        1915: '0ad86051d7b5c147025a',
        1917: 'c1085d26acb823245416',
        1933: '27bb924c81b37d3cd8b0',
        1954: '999b7d363aa93854bfef',
        1967: '2f4c5706c2a55c17941a',
        2001: '437e34f745c24cdc7d20',
        2002: '3919e316bcd4b457841d',
        2054: 'bddc2847c76fb78b6ee0',
        2098: 'c84e46cef673469a44e7',
        2137: 'c17500b3e8e270f64616',
        2138: '6b8f8948ae47463330f8',
        2239: 'ebeabb494a203455edf8',
        2243: 'a80b4848d64d81aeb796',
        2251: 'fdf2ed329eace781d1dc',
        2342: '31d15ecc73a99266c887',
        2369: '4506e1d1f840c5ac3ec5',
        2390: 'e21424722f1691d41040',
        2537: '107664dd7e30a1055057',
        2690: '643aad8338a2eab14f2b',
        2741: '309bbea53a467bba5060',
        2767: '61ff85721660a207dc79',
        2853: '95302878a580e6e770e7',
        2892: 'dd29d1ed824b14a24818',
        3041: 'ccf31d961db30bd53114',
        3075: 'e22f58b158bc0f21ceda',
        3076: 'f8d89b5da63f753b71d1',
        3098: '876edfaaf95eb77fb138',
        3108: '4263b223a99671ddc509',
        3124: '8b4d410d3dd688b90ec1',
        3147: '55a84520ad43b18b1bfc',
        3163: '4319608c2c51fc157060',
        3191: '5a05fd1ea5d41ae92707',
        3268: 'c6dc7fe89691c80c2a54',
        3280: 'ef9df2cd09348511ed83',
        3288: '20eea711f5796ab9b2b7',
        3309: '73b480352c2b316f2ad7',
        3311: '893e8beb58f96db244c7',
        3404: '360c7a86ac39dc29fe6b',
        3408: 'a16df13139cfb01d4e64',
        3411: 'e5c43dc629aa0a71a24f',
        3420: '3d3e49f14d4c5d2aee34',
        3472: 'd0a30f34a5b940754ab6',
        3488: 'b13178dbb7bfc2ece46b',
        3505: 'c9646007b0493004b9db',
        3539: '61fb69cf0fee475e9871',
        3585: '1522a10dbcaa547fc1f1',
        3588: '5b2b4facd425f912ddb6',
        3656: 'c7d47b23f7500e691521',
        3698: 'c022fa68a346a3a6e267',
        3748: '410b013fe22284f89bed',
        3779: '84903e41a952a6c8b92a',
        3800: '6bdec5ea403e070af5dd',
        3848: 'abace30305b0e4133f35',
        3863: '68358ab4bc156d25de8b',
        3866: 'f101ae7b4babd80818b2',
        3881: '36e1a41b4e069abc73c4',
        3894: '8669896616c9acec2fda',
        3936: '03240c90ec639d1b278d',
        3966: '659e59dc9abb489b2874',
        4037: '531b832cd97d6daa1ae4',
        4039: '37d014a7a30420a6c654',
        4231: '06c71e3d44a36368d21d',
        4276: '83e0fe68a8f850a90b39',
        4303: '89d009a17cfa5a53ddd5',
        4314: '8fc3f1eed8e70904135c',
        4334: '2af2b4a4f10c3c854ec6',
        4408: 'fd7727a649aa891fbb33',
        4484: 'dde99b49209a246a530f',
        4536: '06192b3481f542e680b1',
        4566: 'ba401fa618b09a1bd1f1',
        4569: 'cfd902a2e85bb2f95cd5',
        4646: '49d1151af196d82ffbb1',
        4685: '00a7c04bcd616e9f10da',
        4686: '48d6fe8a6ea8588e97fe',
        4710: 'a5d0739290213e6f704a',
        4713: '8aa3ddb74d4590556e25',
        4723: '347beaf4ae022023c148',
        4747: '6721b86b7a387645ba38',
        4753: '20151559dab4e5e4d712',
        4835: '1da76baaabef933b17a4',
        4838: '5c7922b94fe84b51c736',
        4850: '0be1c8c65b8523eba3c1',
        4933: 'df4bf4a529f0d8a84ad3',
        4973: '79f119b4f5b281a513f6',
        4986: '6c248b8bd718bd15f450',
        5040: '0e6cd4ee860b79d5331c',
        5060: 'e00769a816aa2081eebe',
        5066: '312689f7482fa73676f8',
        5099: 'df15607a8c5332bb3e60',
        5119: '4a711a47d405f7e021d1',
        5204: '73476e8a4b998cc79c05',
        5239: '99586e85d662f91ac5cc',
        5246: '7d1f29890b4e89e4b914',
        5281: 'd8366f9829cc79fbfab9',
        5297: '56f68b8dd26d7ebcf435',
        5309: 'be4fb8cbc15c7d093396',
        5344: '8a855d4ad27b66722184',
        5368: '444a7a6efc0daf0858be',
        5386: 'e49a32440215b1040108',
        5434: '618f03b2292e1b80d3fe',
        5474: '28d6871fa30a136b7cae',
        5588: 'afa025537638febb677a',
        5603: '6bb87e4fc363eab2c6ae',
        5699: '504cefaa0751e06b2567',
        5745: '115511dbbcebb523eca7',
        5769: 'b5784c2f79a722391bfb',
        5855: 'cc605845f17a19984663',
        5930: 'ba61ebc8c83b05b19086',
        5993: 'c0a5e4451c20a89f5952',
        5999: 'e13a9e8c683ede19e9b0',
        6052: '8c5d6630a7a6effec560',
        6146: '7aa481c8a7449dfd0303',
        6220: 'fe1af8720dcbd6af040e',
        6284: '9a077b2bb4e63755bd25',
        6297: 'a7a59ad230c74e829f2b',
        6346: '2e18780fc28d1493c403',
        6401: 'fa91a9672467b18311f4',
        6483: '00f0f354d4b76cfeff7d',
        6548: 'd7023a917c2e1ede368c',
        6642: 'ec8e49a28b2757eeb1b6',
        6688: '911fd1afc3a7c284acb5',
        6770: 'a86fc670c86c3205c767',
        6798: 'cc0274a5a7950c2847a5',
        6839: 'a4d8737d63bd223f6888',
        6889: '136bce91ded2f573d1bc',
        6892: 'a4ee18d3eaf8e40f060b',
        6931: '21e16c177505b08a30d7',
        6941: '7e9f90fa7749615fee8f',
        6969: 'e8270c80edb3343a5485',
        6972: 'd32a74f0b9be3ea09e10',
        7049: 'ce4a628fd8589c347097',
        7052: 'd4fa7f13a540cea063eb',
        7119: '0597ecd63a414bdc8541',
        7125: '7a71184e176f11e0f527',
        7316: '230a10fe5e89dd37c04e',
        7388: '995b70eb876f7d1f8eab',
        7501: '27b714f3e7ca42ce9c91',
        7551: 'ff740f3ce2255de57205',
        7556: '7823e0e0617e126abc0a',
        7794: 'f8d174f6523b87391d52',
        7799: 'a0fcb0928c2eb79c1410',
        7897: 'df30f9d4b0149c96a4fa',
        7963: 'b3daf67b68ad9e485aa3',
        8063: '22c54fc23a31b3f08987',
        8138: 'ac0e871f325919019d83',
        8208: '390970ac150b86d74999',
        8294: '216526ad70c61d732367',
        8325: 'd3191e8de8bea2202552',
        8369: '34873a1836951aceb0fa',
        8401: 'd9050875d0c80c7e968d',
        8422: '505a17fb3a3759b94f17',
        8435: '845869b80fb560898681',
        8505: '02bde0b79dc33d6002fe',
        8530: 'f368408aa0b59cb1ba70',
        8663: '963582f33053546f422d',
        8709: '2d68882b8daeeff6bc52',
        8812: '9e4f5afed6663b5bf7f5',
        8815: '50c8a827cacd2d89576f',
        8822: '0a5b5b2234d0e00e3b5b',
        8878: '88f4de2f7913ea1f6326',
        8913: '3fa7af34ea64a1d7f664',
        9071: '43ebd67c3f42c264782e',
        9125: '799cfb24e00a89209b4f',
        9223: '7c0e81302afcd6814918',
        9227: '7726ecd35a4647896aea',
        9285: 'e0456bb7aa2125beb14e',
        9328: 'fee755ab4b94845a0ef3',
        9338: '95c927ce11bc0bf363b1',
        9375: '5a415de2ee232d8b3a46',
        9379: 'eab54e5613c9c1e934f0',
        9400: '6f7c5dc7e991f32c4d42',
        9486: 'ab9e647de37e06fe9170',
        9535: '416dd143dd0fc3667b24',
        9536: '2f08d12bdddc22f574a2',
        9565: 'f92f39497f84e3c4c805',
        9606: '25fae37936ddec68d67d',
        9623: '04056cbd7ea2563e9cea',
        9635: 'b6fd7d3ec67ad8c64586',
        9641: '718adf85976a4fb4529b',
        9657: 'adfc16c40193bdcb12cd',
        9682: '65b35e2d74fbdea0a6fd',
        9783: 'd053f852ccde103c9584',
        9822: '85569fe1546bc7646caf',
        9954: 'e7538e9e36c397057e63',
      }[e] +
      '.js'),
    (i.miniCssF = (e) =>
      (({ 3041: 'BundleAuth', 3779: 'BundleExtra', 5769: 'BundleMain', 9954: 'BundleCalls' })[e] ||
        e) +
      '.' +
      {
        1849: '3a893328feafb62ca224',
        3041: 'ccf31d961db30bd53114',
        3472: 'd0a30f34a5b940754ab6',
        3779: '84903e41a952a6c8b92a',
        5769: 'b5784c2f79a722391bfb',
        8878: '88f4de2f7913ea1f6326',
        9954: 'e7538e9e36c397057e63',
      }[e] +
      '.css'),
    (i.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (r = 'telegram-t:'),
    (i.l = (e, t, o, a) => {
      if (n[e]) n[e].push(t)
      else {
        var s, d
        if (void 0 !== o)
          for (var c = document.getElementsByTagName('script'), u = 0; u < c.length; u++) {
            var l = c[u]
            if (l.getAttribute('src') == e || l.getAttribute('data-webpack') == r + o) {
              s = l
              break
            }
          }
        s ||
          ((d = !0),
          ((s = document.createElement('script')).charset = 'utf-8'),
          (s.timeout = 120),
          i.nc && s.setAttribute('nonce', i.nc),
          s.setAttribute('data-webpack', r + o),
          (s.src = e)),
          (n[e] = [t])
        var f = (t, r) => {
            ;(s.onerror = s.onload = null), clearTimeout(h)
            var o = n[e]
            if (
              (delete n[e],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((e) => e(r)),
              t)
            )
              return t(r)
          },
          h = setTimeout(f.bind(null, void 0, { type: 'timeout', target: s }), 12e4)
        ;(s.onerror = f.bind(null, s.onerror)),
          (s.onload = f.bind(null, s.onload)),
          d && document.head.appendChild(s)
      }
    }),
    (i.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (() => {
      var e
      i.g.importScripts && (e = i.g.location + '')
      var t = i.g.document
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName('script')
        n.length && (e = n[n.length - 1].src)
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser')
      ;(e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (i.p = e)
    })(),
    (o = (e) =>
      new Promise((t, n) => {
        var r = i.miniCssF(e),
          o = i.p + r
        if (
          ((e, t) => {
            for (var n = document.getElementsByTagName('link'), r = 0; r < n.length; r++) {
              var o = (s = n[r]).getAttribute('data-href') || s.getAttribute('href')
              if ('stylesheet' === s.rel && (o === e || o === t)) return s
            }
            var a = document.getElementsByTagName('style')
            for (r = 0; r < a.length; r++) {
              var s
              if ((o = (s = a[r]).getAttribute('data-href')) === e || o === t) return s
            }
          })(r, o)
        )
          return t()
        ;((e, t, n, r, o) => {
          var a = document.createElement('link')
          ;(a.rel = 'stylesheet'),
            (a.type = 'text/css'),
            (a.onerror = a.onload =
              (n) => {
                if (((a.onerror = a.onload = null), 'load' === n.type)) r()
                else {
                  var s = n && ('load' === n.type ? 'missing' : n.type),
                    d = (n && n.target && n.target.href) || t,
                    i = new Error('Loading CSS chunk ' + e + ' failed.\n(' + d + ')')
                  ;(i.code = 'CSS_CHUNK_LOAD_FAILED'),
                    (i.type = s),
                    (i.request = d),
                    a.parentNode.removeChild(a),
                    o(i)
                }
              }),
            (a.href = t),
            document.head.appendChild(a)
        })(e, o, 0, t, n)
      })),
    (a = { 179: 0 }),
    (i.f.miniCss = (e, t) => {
      a[e]
        ? t.push(a[e])
        : 0 !== a[e] &&
          { 1849: 1, 3041: 1, 3472: 1, 3779: 1, 5769: 1, 8878: 1, 9954: 1 }[e] &&
          t.push(
            (a[e] = o(e).then(
              () => {
                a[e] = 0
              },
              (t) => {
                throw (delete a[e], t)
              }
            ))
          )
    }),
    (() => {
      i.b = document.baseURI || self.location.href
      var e = { 179: 0 }
      i.f.j = (t, n) => {
        var r = i.o(e, t) ? e[t] : void 0
        if (0 !== r)
          if (r) n.push(r[2])
          else {
            var o = new Promise((n, o) => (r = e[t] = [n, o]))
            n.push((r[2] = o))
            var a = i.p + i.u(t),
              s = new Error()
            i.l(
              a,
              (n) => {
                if (i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ('load' === n.type ? 'missing' : n.type),
                    a = n && n.target && n.target.src
                  ;(s.message = 'Loading chunk ' + t + ' failed.\n(' + o + ': ' + a + ')'),
                    (s.name = 'ChunkLoadError'),
                    (s.type = o),
                    (s.request = a),
                    r[1](s)
                }
              },
              'chunk-' + t,
              t
            )
          }
      }
      var t = (t, n) => {
          var r,
            o,
            [a, s, d] = n,
            c = 0
          if (a.some((t) => 0 !== e[t])) {
            for (r in s) i.o(s, r) && (i.m[r] = s[r])
            d && d(i)
          }
          for (t && t(n); c < a.length; c++) (o = a[c]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0)
        },
        n = (self.webpackChunktelegram_t = self.webpackChunktelegram_t || [])
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)))
    })(),
    (() => {
      i(33592)
      var e = i(83716),
        t = i(33555),
        n = i(53551),
        r = i(863),
        o = i(71394),
        a = i(28406)
      function s(r) {
        const s = r.data
        if ((e.ZTn && console.log('[SW] Message from worker', s), !s.type)) return
        const d = (0, t.Sv)(),
          i = s.payload
        switch (s.type) {
          case 'focusMessage':
            d.focusMessage && d.focusMessage(i)
            break
          case 'playNotificationSound':
            ;(0, a.Nz)(s.payload.id)
            break
          case 'share':
            d.openChatWithDraft({
              text: (0, n.QH)(i.url, i.text, i.title),
              files: (0, o.ox)(i.files),
            })
        }
      }
      function d() {
        navigator.serviceWorker.removeEventListener('message', s),
          navigator.serviceWorker.addEventListener('message', s),
          (0, a.KC)()
      }
      r.Mc &&
        (window.addEventListener('load', async () => {
          try {
            if (!navigator.serviceWorker.controller) {
              const t = await navigator.serviceWorker.getRegistrations()
              t.length &&
                (e.eMD && console.log('[SW] Hard reload detected, re-enabling Service Worker'),
                await Promise.all(t.map((e) => e.unregister())))
            }
            await navigator.serviceWorker.register(new URL(i.p + i.u(1367), i.b)),
              e.eMD && console.log('[SW] ServiceWorker registered'),
              await navigator.serviceWorker.ready,
              navigator.serviceWorker.controller
                ? (e.eMD && console.log('[SW] ServiceWorker ready'), d())
                : (e.eMD && console.error('[SW] ServiceWorker not available'),
                  r.cj ||
                    r.wZ ||
                    e.Cgt ||
                    (0, t.Sv)().showDialog?.({
                      data: { message: 'SERVICE_WORKER_DISABLED', hasErrorKey: !0 },
                    }))
          } catch (t) {
            e.eMD && console.error('[SW] ServiceWorker registration failed: ', t)
          }
        }),
        window.addEventListener('focus', async () => {
          await navigator.serviceWorker.ready, d()
        }))
      var c = i(60748),
        u = i(31664),
        l = i(35369),
        f = i(5872),
        h = i(60782),
        m = i(25260),
        p = i(50214),
        g = i(15780),
        b = i(11192),
        y = i(99203),
        v = i(65054),
        w = i(44271),
        I = i(56112)
      function C(e, t) {
        const n = typeof e,
          r = typeof t
        if ('object' !== n) return t
        if (Array.isArray(t)) return t
        if (n !== r) return t
        if (e === t) return t
        const o = e,
          a = t,
          s = Object.keys(a),
          d = s.filter((e) => a[e]?.__delete)
        return s
          .filter((e) => !a[e]?.__delete)
          .reduce((e, t) => ((e[t] = C(o[t], a[t])), e), { ...(0, h.CE)(o, d) })
      }
      ;(0, f.QS)(),
        (0, t.iw)('initShared', (t, n, r) => {
          const { force: o } = r || {}
          if (!o && 'byTabId' in t) return t
          const a = (0, h.Xh)(l.g)
          let s = (0, f.J9)(a) || a
          e.NuY && (s.authState = 'authorizationStateReady')
          const { hasPasscode: d, isScreenLocked: i } = s.passcode
          return (
            d && !i && ((s = (0, m.vu)(s, { isScreenLocked: !0 })), (0, p.jv)()),
            o && (s.byTabId = t.byTabId),
            s
          )
        }),
        (0, t.iw)('init', (e, t, n) => {
          const { tabId: o = (0, v._w)(), isMasterTab: a } = n || {},
            s = (0, h.Xh)(l.n)
          ;(s.id = o),
            (s.isChatInfoShown = Boolean(e.lastIsChatInfoShown)),
            (s.audioPlayer.playbackRate = e.audioPlayer.lastPlaybackRate),
            (s.audioPlayer.isPlaybackRateActive = e.audioPlayer.isLastPlaybackRateActive),
            (s.mediaViewer.playbackRate = e.mediaViewer.lastPlaybackRate),
            (e = { ...e, byTabId: { ...e.byTabId, [o]: s } }),
            (!a && r.Eo) || (s.isMasterTab = !0),
            Object.keys(e.messages.byChatId).forEach((t) => {
              const n = e.messages.byChatId[t].threadsById
              Object.keys(n).forEach((n) => {
                const r = Number(n),
                  a = (0, b.WP)(e, t, r, 'lastViewportIds')
                e = a?.every((n) => (0, I.AJ)(n) || e.messages.byChatId[t]?.byId[n])
                  ? (0, m.O8)(e, t, r, 'viewportIds', a, o)
                  : (0, m.pf)(e, t, r, 'lastViewportIds', void 0)
              })
            }),
            Object.keys(e.messages.byChatId).forEach((t) => {
              const n = e.messages.byChatId[t].threadsById,
                r = Object.keys(n).reduce((e, t) => {
                  const r = n[Number(t)]
                  return (e[Number(t)] = { ...r, listedIds: r.lastViewportIds }), e
                }, {})
              e = {
                ...e,
                messages: {
                  ...e.messages,
                  byChatId: {
                    ...e.messages.byChatId,
                    [t]: { ...e.messages.byChatId[t], threadsById: r },
                  },
                },
              }
            })
          const d = (0, g.VX)()
          return (
            'authorizationStateReady' === e.authState ||
              e.passcode.hasPasscode ||
              e.passcode.isScreenLocked ||
              Object.values(e.byTabId).forEach((t) => {
                let { id: n } = t
                n !== o && (e = (0, w.i)(e, { isInactive: !0 }, n))
              }),
            r.Eo || t.initApi(),
            (0, w.i)(e, { messageLists: d ? [d] : s.messageLists }, o)
          )
        }),
        (0, t.iw)('requestMasterAndCallAction', async (e, n, r) => {
          const { tabId: o = (0, v._w)() } = r
          if ((0, b.jU)(e, o).isMasterTab) {
            const { action: e, payload: t } = r
            n[e](t)
          } else
            e.phoneCall || e.groupCalls.activeGroupCallId
              ? (await (0, y.Pb)(y.gl.Calls),
                'hangUp' in n && n.hangUp({ tabId: o }),
                'leaveGroupCall' in n && n.leaveGroupCall({ tabId: o }))
              : (0, v.g)(),
              (e = (0, t.Rd)()),
              (e = (0, w.i)(e, { multitabNextAction: r }, o)),
              (0, t.R3)(e)
        }),
        (0, t.iw)('clearMultitabNextAction', (e, t, n) => {
          const { tabId: r = (0, v._w)() } = n || {}
          return (0, w.i)(e, { multitabNextAction: void 0 }, r)
        })
      var S = i(71226),
        E = i(65116)
      const P = Symbol('EQUAL')
      function A(e, t) {
        const n = typeof t
        if (e === t) return P
        if (typeof e !== n) return t
        if ('object' !== n) return t
        if (Array.isArray(e) && Array.isArray(t))
          return (o = t), (r = e).length === o.length && r.every((e, t) => A(e, o[t]) === P) ? P : t
        var r, o
        const a = e,
          s = t,
          d = Array.from(new Set([...Object.keys(a), ...Object.keys(s)])).reduce((e, t) => {
            if (a[t] === s[t]) return e
            const n = a.hasOwnProperty(t),
              r = s.hasOwnProperty(t)
            if (!r) return (e[t] = { __delete: !0 }), e
            if (!n && r) return (e[t] = s[t]), e
            const o = A(a[t], s[t])
            return o !== P && (e[t] = o), e
          }, {})
        return 0 === Object.keys(d).length ? P : d
      }
      let k,
        M,
        T = !1,
        N = !1
      const L = r.Eo ? new BroadcastChannel(e.tuy) : void 0
      function Z(n) {
        let { data: r } = n
        if (r && L)
          switch (r.type) {
            case 'initApi': {
              const e = (0, t.Rd)()
              if (!(0, b.jU)(e).isMasterTab) return
              const { initialArgs: n } = r
              ;(0, S.g8)((0, t.Sv)().apiUpdate, n)
              break
            }
            case 'globalDiffUpdate': {
              if (!T) return
              const { diff: e } = r,
                n = (0, t.Rd)(),
                o = C(n, e)
              ;(o.DEBUG_capturedId = n.DEBUG_capturedId), (0, t.R3)(o, { noUpdate: !0 }), (M = o)
              break
            }
            case 'globalUpdate': {
              if (T) return
              const e = (0, t.Rd)()
              ;(r.global.DEBUG_capturedId = e.DEBUG_capturedId),
                (0, t.R3)(r.global, { noUpdate: !0 }),
                (M = r.global),
                k && (k(), (k = void 0), (T = !0))
              break
            }
            case 'requestGlobal': {
              const { appVersion: n } = r
              if (n !== e.JiC) return void window.location.reload()
              if (!T) return
              const o = (0, t.Rd)()
              if (!(0, b.jU)(o).isMasterTab) return
              L.postMessage({ type: 'globalUpdate', global: o }), (0, v.Z6)()
              break
            }
            case 'messageCallback': {
              if (!T) return
              const e = (0, t.Rd)()
              if ((0, b.jU)(e).isMasterTab) return
              ;(0, S.s8)(r)
              break
            }
            case 'localDbUpdate': {
              if (!T) return
              const e = (0, t.Rd)()
              if ((0, b.jU)(e).isMasterTab) return
              const { batchedUpdates: n } = r
              n.forEach((e) => {
                let { name: t, prop: n, value: r } = e
                ;(0, S.mR)(t, n, r)
              })
              break
            }
            case 'localDbUpdateFull': {
              if (!T) return
              const e = (0, t.Rd)()
              if ((0, b.jU)(e).isMasterTab) return
              const { localDb: n } = r
              ;(0, S.Zf)(n)
              break
            }
            case 'messageResponse': {
              if (!T) return
              const e = (0, t.Rd)()
              if ((0, b.jU)(e).isMasterTab) return
              ;(0, S.Mk)(r)
              break
            }
            case 'cancelApiProgress': {
              if (!T) return
              const e = (0, t.Rd)()
              if (!(0, b.jU)(e).isMasterTab) return
              const { messageId: n } = r
              ;(0, S.UC)(n)
              break
            }
            case 'callApi': {
              if (!T) return
              const e = (0, t.Rd)()
              if (!(0, b.jU)(e).isMasterTab) return
              const { name: n, messageId: o, token: a, args: s, withCallback: d } = r,
                i = d
                  ? [
                      ...s,
                      function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                          t[n] = arguments[n]
                        L.postMessage({
                          type: 'messageCallback',
                          token: a,
                          messageId: o,
                          callbackArgs: t,
                        })
                      },
                    ]
                  : s
              ;(async () => {
                const e = await (0, S.$9)(n, ...i)
                L.postMessage({ type: 'messageResponse', token: a, messageId: o, response: e })
              })()
              break
            }
          }
      }
      var R = i(69118),
        _ = i(43858)
      const B = 'tt-active-tab',
        O = String(Date.now() + Math.random())
      let D
      localStorage.setItem(B, O)
      const F = window.setInterval(() => {
        D && localStorage.getItem(B) !== O && (D(), clearInterval(F))
      }, 2e3)
      var x = i(36046),
        j = i(46752),
        U = i(60706),
        $ = i(87204),
        V = i(42797),
        W = (i(89005), i(73456), i(65456), i(55282), i(28304), i(46590)),
        H = i(18360),
        G = i(2255)
      const z = i.p + 'monkey.a3d5fcdc50b18dc55695.svg',
        K = ['400 1em Roboto', '500 1em Roboto']
      function q() {
        if ('fonts' in document) return Promise.all(K.map((e) => document.fonts.load(e)))
      }
      var J = i(6272),
        Y = i(50711),
        X = i(59107)
      const Q = (e, t) => {
        const [n, r] = (0, c.eJ)()
        return e && Y.Pn(e, t).then(r), n
      }
      function ee() {
        let e = navigator.language.toLowerCase()
        return e && 'pt-br' !== e && (e = e.substr(0, 2)), e
      }
      var te = i(231),
        ne = i(14605),
        re = i(97687),
        oe = i(34288),
        ae = i(85765),
        se = i(32340),
        de = i(34284),
        ie = i(34446),
        ce = i(53106),
        ue = i(58964),
        le = i(49204)
      const fe = 200 + e.fK3
      function he(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
        if (!t.length) return e
        const n = (0, ae.W)(t)
        return e.filter((e) => n(e.defaultName) || (e.name && n(e.name)))
      }
      const me = (0, c.X$)(
        (0, t.c$)((e) => {
          const {
            countryList: { phoneCodes: t },
          } = e
          return { phoneCodeList: t }
        })((e) => {
          let { id: t, value: n, isLoading: r, onChange: o, phoneCodeList: a } = e
          const s = (0, X.Z)(),
            d = (0, c.sO)(null),
            [i, u] = (0, c.eJ)(),
            [l, f] = (0, c.eJ)([]),
            h = (0, c.I4)(
              (e) => {
                u(e), f(he(a, e))
              },
              [a]
            )
          ;(0, ie.Z)(
            (e) => {
              let [t] = e
              !t?.length && a.length && f(he(a, i))
            },
            [a, i]
          )
          const m = (0, c.I4)(
              (e) => {
                o(e), setTimeout(() => h(void 0), fe)
              },
              [o, h]
            ),
            p = (0, c.I4)(
              (e) => {
                h(e.currentTarget.value)
              },
              [h]
            ),
            g = (0, c.I4)(
              (e) => {
                if (8 !== e.keyCode) return
                const t = e.currentTarget
                n && void 0 === i && (t.value = ''), h(t.value)
              },
              [i, h, n]
            ),
            b = (0, c.I4)(
              (e) => {
                let { onTrigger: o, isOpen: a } = e
                const u = () => {
                    if (a) return
                    setTimeout(() => {
                      d.current.select()
                    }, 50),
                      o()
                    const e = document.getElementById('auth-phone-number-form')
                    e.scrollTo({ top: e.scrollHeight, behavior: 'smooth' })
                  },
                  l = null != i ? i : n?.name || n?.defaultName || ''
                return c.ZP.createElement(
                  'div',
                  { className: (0, j.Z)('input-group', n && 'touched') },
                  c.ZP.createElement('input', {
                    ref: d,
                    className: (0, j.Z)('form-control', a && 'focus'),
                    type: 'text',
                    id: t,
                    value: l,
                    autoComplete: 'off',
                    onClick: u,
                    onFocus: u,
                    onInput: (e) => {
                      p(e), u()
                    },
                    onKeyDown: g,
                  }),
                  c.ZP.createElement('label', null, s('Login.SelectCountry.Title')),
                  r
                    ? c.ZP.createElement(le.Z, { color: 'black' })
                    : c.ZP.createElement('i', {
                        onClick: u,
                        className: (0, j.Z)('css-icon-down', a && 'open'),
                      })
                )
              },
              [i, p, g, t, r, s, n]
            )
          return c.ZP.createElement(
            ce.Z,
            { className: 'CountryCodeInput', trigger: b },
            l.map((e) =>
              c.ZP.createElement(
                ue.Z,
                {
                  key: `${e.iso2}-${e.countryCode}`,
                  className: n && e.iso2 === n.iso2 ? 'selected' : '',
                  onClick: () => m(e),
                },
                c.ZP.createElement(
                  'span',
                  { className: 'country-flag' },
                  (0, se.Z)((0, de.Wg)(e.iso2), ['hq_emoji'])
                ),
                c.ZP.createElement('span', { className: 'country-name' }, e.name || e.defaultName),
                c.ZP.createElement('span', { className: 'country-code' }, '+', e.countryCode)
              )
            ),
            !l.length &&
              c.ZP.createElement(
                ue.Z,
                { key: 'no-results', className: 'no-results', disabled: !0 },
                c.ZP.createElement('span', null, s('lng_country_none'))
              )
          )
        })
      )
      let pe = !1
      const ge = (0, c.X$)(
        (0, t.c$)((e) => {
          const {
            settings: {
              byKey: { language: t },
            },
            countryList: { phoneCodes: n },
          } = e
          return {
            ...(0, h.ei)(e, [
              'connectionState',
              'authState',
              'authPhoneNumber',
              'authIsLoading',
              'authIsLoadingQrCode',
              'authError',
              'authRememberMe',
              'authNearestCountry',
            ]),
            language: t,
            phoneCodeList: n,
          }
        })((e) => {
          let {
            connectionState: n,
            authState: a,
            authPhoneNumber: s,
            authIsLoading: d,
            authIsLoadingQrCode: i,
            authError: u,
            authRememberMe: l,
            authNearestCountry: f,
            phoneCodeList: h,
            language: m,
          } = e
          const {
              setAuthPhoneNumber: p,
              setAuthRememberMe: g,
              loadNearestCountry: b,
              loadCountryList: y,
              clearAuthError: v,
              goToAuthQrCode: w,
              setSettingOption: I,
            } = (0, t.Sv)(),
            C = (0, X.Z)(),
            S = (0, c.sO)(null),
            E = ee(),
            P = Q(E, 'ContinueOnThisLanguage'),
            [A, k] = (0, c.eJ)(),
            [M, T] = (0, c.eJ)(),
            [N, L] = (0, c.eJ)(!1),
            [Z, R] = (0, c.eJ)(),
            [_, B, O] = (0, U.Z)(),
            D = A ? `+${A.countryCode} ${M || ''}` : M,
            F = D && D.replace(/[^\d]+/g, '').length >= 7
          ;(0, c.d4)(() => {
            r.$b || S.current.focus()
          }, [A]),
            (0, c.d4)(() => {
              'connectionStateReady' !== n || f || b()
            }, [n, f, b]),
            (0, c.d4)(() => {
              'connectionStateReady' === n && y({ langCode: m })
            }, [n, m, y]),
            (0, c.d4)(() => {
              f && h && !A && !N && k((0, J.U9)(h, f)[0])
            }, [A, f, N, h])
          const x = (0, c.I4)(
              (e) => {
                e.length || T('')
                const t = h && (0, J.g3)(h, e),
                  n = !A || (t && t.iso2 !== A.iso2) || (!t && e.length) ? t : A
                ;(!A || !n || (n && n.iso2 !== A.iso2)) && k(n), T((0, J.un)(e, n))
              },
              [h, A]
            ),
            j = (0, c.I4)(() => {
              B(),
                (0, Y.m0)(E, () => {
                  O(), I({ language: E })
                })
            }, [B, I, E, O])
          ;(0, c.d4)(() => {
            void 0 === M && s && x(s)
          }, [s, M, x]),
            (0, c.bt)(() => {
              S.current && Z && S.current.setSelectionRange(...Z)
            }, [Z])
          const $ = (0, c.sO)(!1),
            V = (0, c.I4)(() => {
              ;($.current = !0),
                requestAnimationFrame(() => {
                  $.current = !1
                })
            }, []),
            W = (0, c.I4)((e) => {
              k(e), T('')
            }, []),
            H = (0, c.I4)(
              (e) => {
                u && v(), pe || ((pe = !0), q(), (0, o.pt)(z))
                const { value: t, selectionStart: n, selectionEnd: a } = e.target
                R(n && a && a < t.length ? [n, a] : void 0), L(!0)
                const s = r.s$ && A && void 0 !== D && t.length - D.length > 1 && !$.current
                x(s ? `${A.countryCode} ${t}` : t)
              },
              [u, v, A, D, x]
            ),
            G = (0, c.I4)(
              (e) => {
                g(e.target.checked)
              },
              [g]
            ),
            K = (0, c.I4)(() => {
              w()
            }, [w]),
            ae = 'authorizationStateWaitPhoneNumber' === a
          return c.ZP.createElement(
            'div',
            { id: 'auth-phone-number-form', className: 'custom-scroll' },
            c.ZP.createElement(
              'div',
              { className: 'auth-form' },
              c.ZP.createElement('div', { id: 'logo' }),
              c.ZP.createElement('h1', null, 'Telegram'),
              c.ZP.createElement('p', { className: 'note' }, C('StartText')),
              c.ZP.createElement(
                'form',
                {
                  action: '',
                  onSubmit: function (e) {
                    e.preventDefault(), d || (F && p({ phoneNumber: D }))
                  },
                },
                c.ZP.createElement(me, {
                  id: 'sign-in-phone-code',
                  value: A,
                  isLoading: !f && !A,
                  onChange: W,
                }),
                c.ZP.createElement(re.Z, {
                  ref: S,
                  id: 'sign-in-phone-number',
                  label: C('Login.PhonePlaceholder'),
                  value: D,
                  error: u && C(u),
                  inputMode: 'tel',
                  onChange: H,
                  onPaste: r.s$ ? V : void 0,
                }),
                c.ZP.createElement(ne.Z, {
                  id: 'sign-in-keep-session',
                  label: 'Keep me signed in',
                  checked: Boolean(l),
                  onChange: G,
                }),
                F &&
                  (ae
                    ? c.ZP.createElement(
                        te.Z,
                        { type: 'submit', ripple: !0, isLoading: d },
                        C('Login.Next')
                      )
                    : c.ZP.createElement(oe.Z, null)),
                ae &&
                  c.ZP.createElement(
                    te.Z,
                    { isText: !0, ripple: !0, isLoading: i, onClick: K },
                    C('Login.QR.Login')
                  ),
                E &&
                  E !== m &&
                  P &&
                  c.ZP.createElement(te.Z, { isText: !0, isLoading: _, onClick: j }, P)
              )
            )
          )
        })
      )
      var be = i(48778)
      const ye = (0, c.X$)(() => {
          const e = (0, be.Z)(y.gl.Auth, 'AuthCode')
          return e ? c.ZP.createElement(e, null) : c.ZP.createElement(oe.Z, null)
        }),
        ve = (0, c.X$)(() => {
          const e = (0, be.Z)(y.gl.Auth, 'AuthPassword')
          return e ? c.ZP.createElement(e, null) : c.ZP.createElement(oe.Z, null)
        }),
        we = (0, c.X$)(() => {
          const e = (0, be.Z)(y.gl.Auth, 'AuthRegister')
          return e ? c.ZP.createElement(e, null) : c.ZP.createElement(oe.Z, null)
        })
      var Ie = i(62821),
        Ce = i(70692),
        Se = i(77510),
        Ee = i(58912),
        Pe = i(69123)
      let Ae
      const ke = (0, c.X$)(
          (0, t.c$)((e) => {
            const {
              connectionState: t,
              authState: n,
              authQrCode: r,
              settings: {
                byKey: { language: o },
              },
            } = e
            return { connectionState: t, authState: n, authQrCode: r, language: o }
          })((n) => {
            let { connectionState: r, authState: o, authQrCode: a, language: s } = n
            const { returnToAuthPhoneNumber: d, setSettingOption: u } = (0, t.Sv)(),
              l = ee(),
              f = (0, X.Z)(),
              h = (0, c.sO)(null),
              m = Q(l, 'ContinueOnThisLanguage'),
              [p, g, b] = (0, U.Z)(),
              [y, v, w] = (0, U.Z)(),
              { result: I } = (0, Se.Z)(
                async () =>
                  new (0,
                  (await (Ae || (Ae = i.e(6839).then(i.t.bind(i, 91915, 23))), Ae)).default)({
                    width: 280,
                    height: 280,
                    image: Pe,
                    margin: 10,
                    type: 'svg',
                    dotsOptions: { type: 'rounded' },
                    cornersSquareOptions: { type: 'extra-rounded' },
                    imageOptions: { imageSize: 0.4, margin: 8 },
                    qrOptions: { errorCorrectionLevel: 'M' },
                  }),
                []
              ),
              C = (0, Ce.Z)(y)
            ;(0, c.d4)(() => {
              if (!a || !I)
                return () => {
                  w()
                }
              if ('connectionStateReady' !== r) return
              const e = h.current,
                t = `tg://login?token=${a.token}`
              I.update({ data: t }), y || (I.append(e), v())
            }, [r, a, y, v, w, I]),
              (0, c.d4)(() => {
                'connectionStateReady' === r && (0, Y.m0)(e.sRA)
              }, [r])
            const S = (0, c.I4)(() => {
                g(),
                  (0, Y.m0)(l, () => {
                    b(), u({ language: l })
                  })
              }, [g, u, l, b]),
              E = (0, c.I4)(() => {
                d()
              }, [d]),
              P = 'authorizationStateWaitQrCode' === o
            return c.ZP.createElement(
              'div',
              { id: 'auth-qr-form', className: 'custom-scroll' },
              c.ZP.createElement(
                'div',
                { className: 'auth-form qr' },
                c.ZP.createElement(
                  'div',
                  { className: 'qr-outer' },
                  c.ZP.createElement(
                    'div',
                    { className: (0, j.Z)('qr-inner', C), key: 'qr-inner' },
                    c.ZP.createElement('div', {
                      key: 'qr-container',
                      className: 'qr-container',
                      ref: h,
                      style: 'width: 280px; height: 280px',
                    }),
                    c.ZP.createElement(Ee.Z, {
                      tgsUrl: Ie.l.QrPlane,
                      size: 54,
                      className: 'qr-plane',
                      nonInteractive: !0,
                      noLoop: !1,
                    })
                  ),
                  !y &&
                    c.ZP.createElement(
                      'div',
                      { className: 'qr-loading' },
                      c.ZP.createElement(oe.Z, null)
                    )
                ),
                c.ZP.createElement('h1', null, f('Login.QR.Title')),
                c.ZP.createElement(
                  'ol',
                  null,
                  c.ZP.createElement(
                    'li',
                    null,
                    c.ZP.createElement('span', null, f('Login.QR.Help1'))
                  ),
                  c.ZP.createElement(
                    'li',
                    null,
                    c.ZP.createElement(
                      'span',
                      null,
                      (0, se.Z)(f('Login.QR2.Help2'), ['simple_markdown'])
                    )
                  ),
                  c.ZP.createElement(
                    'li',
                    null,
                    c.ZP.createElement('span', null, f('Login.QR.Help3'))
                  )
                ),
                P && c.ZP.createElement(te.Z, { isText: !0, onClick: E }, f('Login.QR.Cancel')),
                l &&
                  l !== s &&
                  m &&
                  c.ZP.createElement(te.Z, { isText: !0, isLoading: p, onClick: S }, m)
              )
            )
          })
        ),
        Me = (0, c.X$)(
          (0, t.c$)((e) => ({ authState: e.authState }))((e) => {
            let { authState: n } = e
            const { returnToAuthPhoneNumber: o, goToAuthQrCode: a } = (0, t.Sv)(),
              s = 'iOS' === r.Lt || 'Android' === r.Lt
            ;(0, W.Z)({
              isActive:
                (!s && 'authorizationStateWaitPhoneNumber' === n) ||
                (s && 'authorizationStateWaitQrCode' === n),
              onBack: () => {
                s ? o() : a()
              },
            })
            const d = (0, H.Z)('authorizationStateReady' !== n ? n : void 0, !0)
            return c.ZP.createElement(
              G.Z,
              {
                activeKey: (function () {
                  switch (d) {
                    case 'authorizationStateWaitCode':
                      return 0
                    case 'authorizationStateWaitPassword':
                      return 1
                    case 'authorizationStateWaitRegistration':
                      return 2
                    case 'authorizationStateWaitPhoneNumber':
                      return 3
                    case 'authorizationStateWaitQrCode':
                      return 4
                    default:
                      return s ? 3 : 4
                  }
                })(),
                name: 'fade',
                className: 'Auth',
              },
              (function () {
                switch (d) {
                  case 'authorizationStateWaitCode':
                    return c.ZP.createElement(ye, null)
                  case 'authorizationStateWaitPassword':
                    return c.ZP.createElement(ve, null)
                  case 'authorizationStateWaitRegistration':
                    return c.ZP.createElement(we, null)
                  case 'authorizationStateWaitPhoneNumber':
                    return c.ZP.createElement(ge, null)
                  case 'authorizationStateWaitQrCode':
                    return c.ZP.createElement(ke, null)
                  default:
                    return s ? c.ZP.createElement(ge, null) : c.ZP.createElement(ke, null)
                }
              })()
            )
          })
        ),
        Te = (0, c.X$)((e) => {
          const t = (0, be.Z)(y.gl.Main, 'Main')
          return t ? c.ZP.createElement(t, e) : void 0
        }),
        Ne = (0, c.X$)((e) => {
          const { isLocked: t } = e,
            n = (0, be.Z)(y.gl.Main, 'LockScreen', !t)
          return n ? c.ZP.createElement(n, e) : void 0
        }),
        Le = i.p + 'app-inactive.da3925145f0a7111c0f1.png',
        Ze = () => {
          const e = (0, c.I4)(() => {
            window.location.reload()
          }, [])
          return c.ZP.createElement(
            'div',
            { id: 'AppInactive' },
            c.ZP.createElement(
              'div',
              { className: 'content' },
              c.ZP.createElement('img', { src: Le, alt: '' }),
              c.ZP.createElement('h3', { className: 'title' }, 'Such error, many tabs'),
              c.ZP.createElement(
                'div',
                { className: 'description' },
                'Teamgram supports only one active tab with the app.',
                c.ZP.createElement('br', null),
                'Please reload this page to continue using this tab or close it.'
              ),
              c.ZP.createElement(
                'div',
                { className: 'actions' },
                c.ZP.createElement(te.Z, { isText: !0, ripple: !0, onClick: e }, 'Reload app')
              )
            )
          )
        }
      var Re = i(6137),
        _e = i(22825),
        Be = i(40647),
        Oe = i(31212),
        De = i(7792)
      const Fe = 'KD2TsjdEc_LBLsR_ReWT',
        xe = 'J5QD898gcautir6pK9xA',
        je = i.p + 'telegram-logo.1b2bb5b107f046ea9325.svg',
        Ue = i.p + 'reaction-thumbs.7b902bff71c7b17b3daa.png'
      var $e = i(2092)
      const Ve = i.p + 'mask.c474db1e76529489b940.svg'
      function We() {
        const { listIds: e, byId: n } = (0, t.Rd)().chats
        if (e.active)
          return Promise.all(
            e.active.slice(0, 10).map((e) => {
              const t = n[e]
              if (!t) return
              const r = (0, _e.RT)(t)
              return r ? Be.he(r, Re.IU.BlobUrl) : void 0
            })
          )
      }
      const He = {
          main: () =>
            Promise.all([(0, y.$y)(y.gl.Main).then(q), We(), (0, o.pt)(Ue), (0, o.pt)(Ve)]),
          authPhoneNumber: () => Promise.all([q(), (0, o.pt)(je)]),
          authCode: () => (0, o.pt)(z),
          authPassword: () => (0, o.pt)(z),
          authQrCode: q,
          lock: () => Promise.all([q(), (0, o.pt)($e)]),
          inactive: () => {},
        },
        Ge = (0, t.c$)((e, t) => {
          let { isMobile: n } = t
          const r = (0, b.Pu)(e),
            o = (0, b.jU)(e)
          return {
            shouldSkipHistoryAnimations: o.shouldSkipHistoryAnimations,
            uiReadyState: o.uiReadyState,
            isRightColumnShown: (0, b.Jf)(e, n),
            leftColumnWidth: e.leftColumnWidth,
            theme: r,
          }
        })((n) => {
          let {
            page: r,
            children: o,
            isRightColumnShown: a,
            shouldSkipHistoryAnimations: s,
            leftColumnWidth: d,
            theme: i,
          } = n
          const { setIsUiReady: u } = (0, t.Sv)(),
            [l, f] = (0, U.Z)(),
            { shouldRender: h, transitionClassNames: m } = (0, Oe.Z)(!l, void 0, !0)
          return (
            (0, De.Z)(() => {
              let e
              return (
                Promise.race([
                  (0, R.wO)(700),
                  r
                    ? (async () => {
                        try {
                          await He[r]()
                        } catch (e) {}
                      })()
                    : Promise.resolve(),
                ]).then(() => {
                  f(),
                    u({ uiReadyState: 1 }),
                    (e = window.setTimeout(() => {
                      u({ uiReadyState: 2 })
                    }, 1e3))
                }),
                () => {
                  e && (clearTimeout(e), (e = void 0)), u({ uiReadyState: 0 })
                }
              )
            }),
            c.ZP.createElement(
              'div',
              {
                id: 'UiLoader',
                className: Fe,
                style: `--theme-background-color: ${'dark' === i ? e.Itv : e.p3h}`,
              },
              o,
              h &&
                !s &&
                Boolean(r) &&
                c.ZP.createElement(
                  'div',
                  { className: (0, j.Z)('dDIGwEoHlINzvf7LzGwy', m) },
                  'main' === r
                    ? c.ZP.createElement(
                        'div',
                        { className: 'jxcLmQWl6IklxyLBcFsv' },
                        c.ZP.createElement('div', {
                          className: 's_eiw3FJDNGVyMHHEr_w',
                          style: d ? `width: ${d}px` : void 0,
                        }),
                        c.ZP.createElement('div', {
                          className: (0, j.Z)('v5WSHYkqrlK9GvmSI1zN', Fe),
                        }),
                        a && c.ZP.createElement('div', { className: 'BlQSOI0qSg9HDzgQGwdw' })
                      )
                    : 'inactive' === r || 'lock' === r
                    ? c.ZP.createElement('div', { className: (0, j.Z)(xe, Fe) })
                    : c.ZP.createElement('div', { className: xe })
                )
            )
          )
        })
      var ze
      !(function (e) {
        ;(e[(e.auth = 0)] = 'auth'),
          (e[(e.lock = 1)] = 'lock'),
          (e[(e.main = 2)] = 'main'),
          (e[(e.inactive = 3)] = 'inactive')
      })(ze || (ze = {}))
      const Ke = `${e.Tih} ${e.ouc}`,
        qe = (0, t.c$)((e) => ({
          authState: e.authState,
          isScreenLocked: e.passcode?.isScreenLocked,
          hasPasscode: e.passcode?.hasPasscode,
          isInactiveAuth: (0, b.jU)(e).isInactive,
          hasWebAuthTokenFailed: e.hasWebAuthTokenFailed || e.hasWebAuthTokenPasswordRequired,
        }))((e) => {
          let {
            authState: n,
            isScreenLocked: o,
            hasPasscode: a,
            hasWebAuthTokenFailed: s,
            isInactiveAuth: d,
          } = e
          const { disconnect: i } = (0, t.Sv)(),
            [u, l, f] = (0, U.Z)(!1),
            { isMobile: h } = (0, V.ZP)(),
            m = 'iOS' === r.Lt || 'Android' === r.Lt
          let b, y
          if (
            ((0, c.d4)(() => {
              r.EA && (0, x.e)()
            }, []),
            (0, c.d4)(() => {
              const e = document.body,
                t = (e) => {
                  e.preventDefault(),
                    e.dataTransfer &&
                      (e.target.dataset.dropzone
                        ? (e.dataTransfer.dropEffect = 'copy')
                        : (e.dataTransfer.dropEffect = 'none'))
                },
                n = (e) => {
                  e.preventDefault()
                }
              return (
                e.addEventListener('drop', n),
                e.addEventListener('dragover', t),
                e.addEventListener('dragenter', t),
                () => {
                  e.removeEventListener('drop', n),
                    e.removeEventListener('dragover', t),
                    e.removeEventListener('dragenter', t)
                }
              )
            }, []),
            u)
          )
            b = ze.inactive
          else if (o) (y = 'lock'), (b = ze.lock)
          else if (n)
            switch (n) {
              case 'authorizationStateWaitPhoneNumber':
                ;(y = 'authPhoneNumber'), (b = ze.auth)
                break
              case 'authorizationStateWaitCode':
                ;(y = 'authCode'), (b = ze.auth)
                break
              case 'authorizationStateWaitPassword':
                ;(y = 'authPassword'), (b = ze.auth)
                break
              case 'authorizationStateWaitRegistration':
                b = ze.auth
                break
              case 'authorizationStateWaitQrCode':
                ;(y = 'authQrCode'), (b = ze.auth)
                break
              case 'authorizationStateClosed':
              case 'authorizationStateClosing':
              case 'authorizationStateLoggingOut':
              case 'authorizationStateReady':
                ;(y = 'main'), (b = ze.main)
            }
          else
            (0, p.ti)(!0)
              ? ((y = 'main'), (b = ze.main))
              : a
              ? (b = ze.lock)
              : ((y = m ? 'authPhoneNumber' : 'authQrCode'), (b = ze.auth))
          b !== ze.lock &&
            b !== ze.inactive &&
            b !== ze.main &&
            (0, g.dx)()?.tgWebAuthToken &&
            !s &&
            ((y = 'main'), (b = ze.main)),
            (0, c.d4)(() => {
              ;(0, _.z)(),
                r.Eo ||
                  (D = () => {
                    i(), (document.title = Ke), l()
                  })
            }, [b, i, l]),
            (0, c.d4)(() => {
              d ? ((document.title = Ke), l()) : f()
            }, [d, l, f])
          const v = (0, $.Z)(b)
          function w() {
            switch (b) {
              case ze.auth:
                return c.ZP.createElement(Me, null)
              case ze.main:
                return c.ZP.createElement(Te, { isMobile: h })
              case ze.lock:
                return c.ZP.createElement(Ne, { isLocked: o })
              case ze.inactive:
                return c.ZP.createElement(Ze, null)
            }
          }
          return c.ZP.createElement(
            Ge,
            { key: 'Loader', page: y, isMobile: h },
            c.ZP.createElement(
              G.Z,
              {
                name: 'fade',
                activeKey: b,
                shouldCleanup: !0,
                className: (0, j.Z)('full-height', (b === ze.auth || v === ze.auth) && 'is-auth'),
              },
              w
            )
          )
        })
      !(async function () {
        e.eMD && console.log('>>> INIT'),
          r.Eo &&
            (L &&
              ((0, v.AG)((e) => {
                if (e === (0, v._w)()) {
                  L && (L.removeEventListener('message', Z), (N = !0))
                  const n = (0, t.Rd)(),
                    r = A(n, { ...n, byTabId: (0, h.CE)(n.byTabId, [e]) })
                  return void (
                    'symbol' != typeof r && L.postMessage({ type: 'globalDiffUpdate', diff: r })
                  )
                }
                let n = (0, t.Rd)()
                ;(n = { ...n, byTabId: (0, h.CE)(n.byTabId, [e]) }), (0, t.R3)(n)
              }),
              (0, E.ll)((e) => {
                if (!T || N) return void (M = e)
                if (!M) return (M = e), void L.postMessage({ type: 'globalUpdate', global: e })
                const t = A(M, e)
                'symbol' != typeof t && L.postMessage({ type: 'globalDiffUpdate', diff: t }),
                  (M = e)
              }, !0),
              L.addEventListener('message', Z)),
            await (function (t) {
              L && L.postMessage({ type: 'requestGlobal', appVersion: t })
              const n = () => {
                k && (k(), (k = void 0)), (T = !0)
              }
              return localStorage.getItem(e.NUd)
                ? (setTimeout(n, 800),
                  new Promise((e) => {
                    k = e
                  }))
                : (n(), Promise.resolve())
            })(e.JiC),
            localStorage.setItem(e.NUd, '1'),
            (0, R.Gq)(() => {
              const n = (0, t.Rd)()
              1 === Object.keys(n.byTabId).length && localStorage.removeItem(e.NUd)
            })),
          (0, t.Sv)().initShared(),
          (0, t.Sv)().init(),
          r.Eo &&
            ((0, v.l)(),
            (0, v.Pz)((e) => {
              ;(0, t.Sv)().switchMultitabRole({ isMasterTab: e }, { forceSyncOnIOs: !0 })
            })),
          e.eMD && console.log('>>> START INITIAL RENDER'),
          (function () {
            if (!r.jm) return
            const t = document.getElementById('the-manifest-placeholder')
            if (!t) return
            const n = `site_apple${e.eMD ? '_dev' : ''}.webmanifest`
            t.setAttribute('href', n)
          })(),
          u.Z.render(c.ZP.createElement(qe, null), document.getElementById('root')),
          e.eMD && console.log('>>> FINISH INITIAL RENDER'),
          e.eMD &&
            document.addEventListener('dblclick', () => {
              console.warn('TAB STATE', (0, b.jU)((0, t.Rd)())),
                console.warn('GLOBAL STATE', (0, t.Rd)())
            })
      })()
    })()
})()
//# sourceMappingURL=main.b6b6bc88774e6659c58b.js.map
