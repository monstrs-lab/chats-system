'use strict'
;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1849, 3748],
  {
    4794: (e, t, n) => {
      n.d(t, { Z: () => u })
      var a = n(60748),
        i = n(33555),
        r = n(42431),
        s = n(46752),
        o = n(11192),
        l = n(59107),
        c = n(231),
        d = n(70172)
      const u = (0, a.X$)(
        (0, i.c$)((e, t) => {
          let { chatId: n } = t
          const a = (0, o.Z1)(e, n),
            i = (0, r.Bj)(e, n),
            s = (0, o.jU)(e).isMasterTab ? e.groupCalls.activeGroupCallId : void 0
          return {
            groupCall: i,
            usersById: e.users.byId,
            chatsById: e.chats.byId,
            activeGroupCallId: e.groupCalls.activeGroupCallId,
            isActive:
              (i
                ? i.participantsCount > 0 && i.isLoaded
                : a && a.isCallNotEmpty && a.isCallActive) && s !== i?.id,
            animationLevel: e.settings.byKey.animationLevel,
          }
        })((e) => {
          let {
            chatId: t,
            isActive: n,
            className: r,
            groupCall: o,
            hasPinnedOffset: u,
            usersById: m,
            chatsById: h,
            animationLevel: p,
          } = e
          const { requestMasterAndJoinGroupCall: v, subscribeToGroupCallUpdates: f } = (0, i.Sv)(),
            g = (0, l.Z)(),
            Z = (0, a.I4)(() => {
              v({ chatId: t })
            }, [v, t]),
            P = o?.participants,
            E = (0, a.Ye)(
              () =>
                P
                  ? Object.values(P)
                      .filter((e, t) => t < 3)
                      .map((e) => {
                        let { id: t, isUser: n } = e
                        if (n) {
                          if (!m[t]) return
                          return { user: m[t] }
                        }
                        if (h[t]) return { chat: h[t] }
                      })
                      .filter(Boolean)
                  : [],
              [h, P, m]
            )
          if (
            ((0, a.d4)(() => {
              if (o?.id && (n || !o.isLoaded))
                return (
                  f({ id: o.id, subscribed: !0 }),
                  () => {
                    f({ id: o.id, subscribed: !1 })
                  }
                )
            }, [o?.id, o?.isLoaded, n, f]),
            o)
          )
            return a.ZP.createElement(
              'div',
              {
                className: (0, s.Z)(
                  'GroupCallTopPane',
                  u && 'has-pinned-offset',
                  !n && 'is-hidden',
                  r
                ),
                onClick: Z,
              },
              a.ZP.createElement(
                'div',
                { className: 'info' },
                a.ZP.createElement('span', { className: 'title' }, g('VoipGroupVoiceChat')),
                a.ZP.createElement(
                  'span',
                  { className: 'participants' },
                  g('Participants', o.participantsCount || 0, 'i')
                )
              ),
              a.ZP.createElement(
                'div',
                { className: 'avatars' },
                E.map((e) => {
                  if (e)
                    return e.user
                      ? a.ZP.createElement(d.Z, { key: e.user.id, user: e.user, animationLevel: p })
                      : a.ZP.createElement(d.Z, { key: e.chat.id, chat: e.chat, animationLevel: p })
                })
              ),
              a.ZP.createElement(c.Z, { round: !0, className: 'join' }, g('VoipChatJoin'))
            )
        })
      )
    },
    34076: (e, t, n) => {
      n.d(t, { Z: () => d })
      var a = n(60748),
        i = n(33555),
        r = n(83716),
        s = n(87204),
        o = n(65326),
        l = n(28183),
        c = n(59107)
      const d = (e) => {
        let { text: t } = e
        const n = (0, c.Z)(),
          d = (0, s.Z)(t),
          u = (0, o.Z)(),
          m = (0, a.sO)(!1),
          h = (0, i.Rd)().settings.byKey.animationLevel === r.zy8,
          p = (0, a.Ye)(() => {
            if (!h) return t
            const e = []
            for (let n = 0; n < t.length; n++)
              d && t[n] !== d[n]
                ? e.push(
                    a.ZP.createElement(
                      'div',
                      { className: 'LTqDt1MFKRDBjNZxKii4' },
                      a.ZP.createElement('div', { className: 'o1u1ctUWtWa2FWlC_BuT' }, t[n]),
                      a.ZP.createElement('div', { className: 'tzggk5evL9EPqVAtvWEu' }, d[n]),
                      a.ZP.createElement('div', { className: 'q6poDASGW35qQiXsD99c' }, t[n])
                    )
                  )
                : e.push(a.ZP.createElement('span', null, t[n]))
            return (m.current = !0), e
          }, [d, h, t])
        return (
          (0, l.Z)(
            () => {
              ;(m.current = !1), u()
            },
            m.current ? 200 : void 0
          ),
          a.ZP.createElement(
            'span',
            { className: 'Tx2CpCmpZZrHnCMUksg2', dir: n.isRtl ? 'rtl' : void 0 },
            p
          )
        )
      }
    },
    45601: (e, t, n) => {
      n.d(t, { Z: () => c })
      var a = n(60748),
        i = n(6137),
        r = n(56112),
        s = n(6202),
        o = n(21179)
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
          l.apply(this, arguments)
        )
      }
      const c = (0, a.X$)(function (e) {
        const { sticker: t, noLoad: n, forcePreview: c, lastSyncTime: d, ...u } = e,
          m = t?.thumbnail?.dataUri,
          h = t && `sticker${t.id}`,
          p = (0, s.Z)(t ? (0, r.RK)(t.id) : void 0, n && !c, i.IU.BlobUrl, d),
          v = (0, s.Z)(h, n, void 0, d)
        return a.ZP.createElement(o.Z, l({ tgsUrl: v, previewUrl: p, thumbDataUri: m }, u))
      })
    },
    21179: (e, t, n) => {
      n.d(t, { Z: () => m })
      var a = n(60748),
        i = n(46752),
        r = n(80036),
        s = n(70692),
        o = n(60706),
        l = n(58912)
      const c = 'gp5OwinzPeHwkesmaEIR'
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
          d.apply(this, arguments)
        )
      }
      const u = new Set(),
        m = (0, a.X$)(function (e) {
          const { previewUrl: t, thumbDataUri: n, className: m, ...h } = e,
            [p, v] = (0, o.Z)(Boolean(n) || u.has(t)),
            f = (0, s.Z)(p),
            [g, Z] = (0, o.Z)(!1),
            P = (0, a.I4)(() => {
              v(), u.add(t)
            }, [v, t]),
            { size: E } = e
          return a.ZP.createElement(
            'div',
            {
              className: (0, i.Z)(m, 'oGmd77AsTbJeJk8CV6gl', f),
              style: (0, r.Z)(void 0 !== E && `width: ${E}px; height: ${E}px;`),
            },
            n && !g && a.ZP.createElement('img', { src: n, className: c }),
            t && !g && a.ZP.createElement('img', { src: t, className: c, onLoad: P }),
            a.ZP.createElement(l.Z, d({}, h, { onLoad: Z, noTransition: !0 }))
          )
        })
    },
    54752: (e, t, n) => {
      n.d(t, { ZP: () => x })
      var a = n(60748),
        i = n(33555),
        r = n(6137),
        s = n(91713)
      function o(e, t, n, a) {
        let { peak: i, fillStyle: r, progressFillStyle: s } = a
        const o = 4 * t.length
        ;(e.width = 2 * o), (e.height = 46), (e.style.width = `${o}px`), (e.style.height = '23px')
        const l = e.getContext('2d')
        l.scale(2, 2),
          t.forEach((e, a) => {
            ;(l.globalAlpha = a / t.length >= n ? 0.5 : 1), (l.fillStyle = n > a / t.length ? s : r)
            const o = Math.max(2, (e / Math.max(1, i)) * 23)
            !(function (e, t, n, a, i, r) {
              2 < 2 * r && (r = 1),
                i < 2 * r && (r = i / 2),
                e.beginPath(),
                e.moveTo(t + r, n),
                e.arcTo(t + 2, n, t + 2, n - i, r),
                e.arcTo(t + 2, n - i, t, n - i, r),
                e.arcTo(t, n - i, t, n, r),
                e.arcTo(t, n, t + 2, n, r),
                e.closePath()
            })(l, 4 * a, (23 + o) / 2, 0, o, 1),
              l.fill()
          })
      }
      var l = n(32340),
        c = n(15376),
        d = n(56112),
        u = n(46752),
        m = n(790)
      function h(e) {
        const t = 8 * e.length,
          n = Math.floor(t / 5)
        if (!n) return []
        const a = Array(n),
          i = e
        for (let e = 0, t = n - 1; e !== t; ++e) {
          const t = Math.floor((5 * e) / 8),
            n = Math.floor((5 * e) % 8),
            r = i[t] + (i[t + 1] << 8)
          a[e] = (r >> n) & 31
        }
        const r = Math.floor((5 * (n - 1)) / 8),
          s = Math.floor((5 * (n - 1)) % 8),
          o = i[r] + (i[r + 1] << 8)
        return (a[n - 1] = (o >> s) & 31), a
      }
      function p(e, t) {
        let n = 0
        const a = new Array(t),
          i = e.length / t,
          r = e[0],
          s = e[e.length - 1]
        for (let d = 0; d < t; d++) {
          var o, l, c
          const t = Math.floor(d * i),
            u =
              ((null !== (o = e[t - 1]) && void 0 !== o ? o : r) +
                (null !== (l = e[t]) && void 0 !== l ? l : r) +
                (null !== (c = e[t + 1]) && void 0 !== c ? c : s)) /
              3
          ;(a[d] = u), n < u && (n = u)
        }
        return { data: a, peak: n }
      }
      var v = n(10396),
        f = n(92566),
        g = n(31212),
        Z = n(12019),
        P = n(23186),
        E = n(59107),
        y = n(64963),
        C = n(6202),
        b = n(42797),
        I = n(231),
        w = n(39196),
        N = n(8337)
      const S = window.matchMedia('(max-width: 375px)'),
        k = window.matchMedia('(max-width: 410px)')
      function M(e, t) {
        return {
          MIN_SPIKES: e ? (S.matches ? 16 : 20) : 25,
          MAX_SPIKES: e ? (S.matches ? 35 : t && k.matches ? 40 : 45) : 75,
        }
      }
      function T(e, t, n) {
        return a.ZP.createElement(
          'div',
          { className: 'seekline no-selection', ref: n },
          t.map((e) => {
            let { start: t, end: n } = e
            return a.ZP.createElement('div', {
              className: 'seekline-buffered-progress',
              style: `left: ${100 * t}%; right: ${100 - 100 * n}%`,
            })
          }),
          a.ZP.createElement(
            'span',
            { className: 'seekline-play-progress' },
            a.ZP.createElement('i', { style: `transform: translateX(${100 * e}%)` })
          ),
          a.ZP.createElement(
            'span',
            { className: 'seekline-thumb' },
            a.ZP.createElement('i', { style: `transform: translateX(${100 * e}%)` })
          )
        )
      }
      const x = (0, a.X$)((e) => {
        let {
          theme: t,
          message: n,
          senderTitle: S,
          uploadProgress: k,
          origin: x,
          date: L,
          lastSyncTime: A,
          noAvatars: F,
          className: R,
          isSelectable: D,
          isSelected: O,
          isDownloading: $,
          isTranscribing: B,
          isTranscriptionHidden: U,
          isTranscribed: j,
          isTranscriptionError: X,
          canDownload: z,
          canTranscribe: Y,
          onHideTranscription: H,
          onPlay: _,
          onReadMedia: V,
          onCancelUpload: q,
          onDateClick: K,
        } = e
        const {
            cancelMessageMediaDownload: W,
            downloadMessageMedia: G,
            transcribeAudio: J,
          } = (0, i.Sv)(),
          {
            content: { audio: Q, voice: ee, video: te },
            isMediaUnread: ne,
          } = n,
          ae = Boolean(ee || te),
          ie = (0, a.sO)(!1),
          re = (0, a.sO)(null),
          se = (0, E.Z)(),
          { isRtl: oe } = se,
          { isMobile: le } = (0, b.ZP)(),
          [ce, de] = (0, a.eJ)(!1),
          ue = A,
          me = (0, d.Ti)(n, 'pictogram'),
          he = (0, C.Z)(me, !1, r.IU.BlobUrl),
          pe = (0, C.Z)((0, d.Ti)(n, 'inline'), !ue, (0, d.kG)(n, 'inline')),
          { loadProgress: ve } = (0, f.Z)((0, d.Ti)(n, 'download'), !$, (0, d.kG)(n, 'download')),
          fe = (0, a.I4)(() => {
            de(!0), _(n.id, n.chatId)
          }, [n, _]),
          ge = (0, a.I4)(() => {
            de(!1)
          }, []),
          {
            isBuffered: Ze,
            bufferedRanges: Pe,
            bufferingHandlers: Ee,
            checkBuffering: ye,
          } = (0, Z.Z)(),
          {
            isPlaying: Ce,
            playProgress: be,
            playPause: Ie,
            setCurrentTime: we,
            duration: Ne,
          } = (0, P.Z)(
            (0, v.An)(n),
            (0, d.XV)(n),
            ae ? 'voice' : 'audio',
            pe,
            Ee,
            void 0,
            ye,
            ce,
            fe,
            ge,
            (0, d.CI)(n)
          ),
          Se = (0, d.B4)(n),
          ke = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
            const l = (0, a.sO)(null),
              { data: c, peak: d } =
                (0, a.Ye)(() => {
                  if (!t) return
                  const { waveform: e, duration: n } = t
                  if (!e) return { data: new Array(Math.min(n, 30)).fill(0), peak: 0 }
                  const { MIN_SPIKES: a, MAX_SPIKES: i } = M(s, r),
                    o = Math.min(n / 10, 1),
                    l = Math.round(a + (i - a) * o)
                  return p(h(new Uint8Array(e)), l)
                }, [s, t, r]) || {}
            return (
              (0, a.bt)(() => {
                const t = l.current
                t &&
                  c &&
                  void 0 !== d &&
                  o(t, c, n, {
                    peak: d,
                    fillStyle: i
                      ? 'dark' === e
                        ? '#B7ABED'
                        : '#AEDFA4'
                      : 'dark' === e
                      ? '#494A78'
                      : '#ADD3F7',
                    progressFillStyle: i
                      ? 'dark' === e
                        ? '#FFFFFF'
                        : '#4FAE4E'
                      : 'dark' === e
                      ? '#8774E1'
                      : '#3390EC',
                  })
              }, [i, d, n, c, e]),
              l
            )
          })(t, ee, ne && !Se ? 1 : be, Se, !F, le),
          Me = Ce || (be > 0 && be < 1)
        ;(0, a.d4)(() => {
          de(Ce)
        }, [Ce])
        const Te = ce && !Ze,
          {
            isUploading: xe,
            isTransferring: Le,
            transferProgress: Ae,
          } = (0, d.Sc)(n, k || ve, Te || $),
          { shouldRender: Fe, transitionClassNames: Re } = (0, g.Z)(Le),
          De = Fe && (Te || xe),
          Oe = (0, a.I4)(() => {
            xe
              ? q?.()
              : (Ce || _(n.id, n.chatId),
                (0, i.Sv)().setAudioPlayerOrigin({ origin: x }),
                de(!ce),
                Ie())
          }, [xe, Ce, ce, Ie, q, _, n.id, n.chatId, x])
        ;(0, a.d4)(() => {
          V && ne && (Ce || $) && V()
        }, [Ce, ne, V, $])
        const $e = (0, a.I4)(() => {
            $ ? W({ message: n }) : G({ message: n })
          }, [W, G, $, n]),
          Be = (0, a.I4)(
            (e) => {
              if (ie.current && re.current) {
                const { width: t, left: n } = re.current.getBoundingClientRect(),
                  a = e instanceof MouseEvent ? e.clientX : e.targetTouches[0].clientX
                e.stopPropagation(), we(Math.max(Math.min(Ne * ((a - n) / t), Ne - 0.1), 0.001))
              }
            },
            [Ne, we]
          ),
          Ue = (0, a.I4)(
            (e) => {
              ;(e instanceof MouseEvent && 2 === e.button) || ((ie.current = !0), Be(e))
            },
            [Be]
          ),
          je = (0, a.I4)(() => {
            ie.current = !1
          }, []),
          Xe = (0, a.I4)(() => {
            K(n.id, n.chatId)
          }, [K, n.id, n.chatId]),
          ze = (0, a.I4)(() => {
            J({ chatId: n.chatId, messageId: n.id })
          }, [n.chatId, n.id, J])
        ;(0, a.d4)(() => {
          if (re.current && Me)
            return (0, y.sf)(re.current, { onCapture: Ue, onRelease: je, onClick: je, onDrag: Be })
        }, [Me, Ue, Be, je])
        const Ye = (0, a.Ye)(
          () =>
            a.ZP.createElement('div', {
              dangerouslySetInnerHTML: {
                __html:
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" class="loading-svg"><rect class="loading-rect" fill="transparent" width="32" height="24" stroke-width="3" stroke-linejoin="round" rx="6" ry="6" stroke="var(--accent-color)" stroke-dashoffset="1" stroke-dasharray="32,68"></rect></svg>',
              },
            }),
          []
        )
        function He() {
          if (ae) return S || 'Voice'
          const { title: e, fileName: t } = Q
          return e || t
        }
        const _e = (0, u.Z)(
            'Audio',
            R,
            Se && x === s.Cr.Inline && 'own',
            (x === s.Cr.Search || x === s.Cr.SharedMedia) && 'bigger',
            O && 'audio-is-selected'
          ),
          Ve = ['toggle-play']
        De ? Ve.push('loading') : Ve.push(Ce ? 'pause' : 'play')
        const qe = (0, u.Z)('content', Me && 'with-seekline')
        function Ke() {
          return a.ZP.createElement(
            'div',
            { className: qe },
            a.ZP.createElement(
              'div',
              { className: 'content-row' },
              a.ZP.createElement(
                'p',
                { className: 'title', dir: 'auto', title: He() },
                (0, l.Z)(He())
              ),
              a.ZP.createElement(
                'div',
                { className: 'message-date' },
                Boolean(L) &&
                  a.ZP.createElement(
                    N.Z,
                    { className: 'date', onClick: Xe },
                    (0, m.VX)(se, 1e3 * L)
                  )
              )
            ),
            Me &&
              a.ZP.createElement(
                'div',
                { className: 'meta search-result', dir: oe ? 'rtl' : void 0 },
                a.ZP.createElement(
                  'span',
                  { className: 'duration with-seekline', dir: 'auto' },
                  be < 1 && `${(0, m.k9)(Ne * be, Ne)}`
                ),
                T(be, Pe, re)
              ),
            !Me &&
              (function () {
                if (ae)
                  return a.ZP.createElement(
                    'div',
                    { className: 'meta', dir: oe ? 'rtl' : void 0 },
                    (0, m.k9)((ee || te).duration)
                  )
                const { performer: e } = Q
                return a.ZP.createElement(
                  'div',
                  { className: 'meta', dir: oe ? 'rtl' : void 0 },
                  (0, m.k9)(Ne),
                  a.ZP.createElement('span', { className: 'bullet' }, '•'),
                  e &&
                    a.ZP.createElement('span', { className: 'performer', title: e }, (0, l.Z)(e)),
                  e && S && a.ZP.createElement('span', { className: 'bullet' }, '•'),
                  S && a.ZP.createElement('span', { title: S }, (0, l.Z)(S))
                )
              })()
          )
        }
        return a.ZP.createElement(
          'div',
          { className: _e, dir: se.isRtl ? 'rtl' : 'ltr' },
          D &&
            a.ZP.createElement(
              'div',
              { className: 'message-select-control' },
              O && a.ZP.createElement('i', { className: 'icon-select' })
            ),
          a.ZP.createElement(
            I.Z,
            {
              round: !0,
              ripple: !le,
              size: 'smaller',
              color: he ? 'translucent-white' : 'primary',
              className: Ve.join(' '),
              ariaLabel: Ce ? 'Pause audio' : 'Play audio',
              onClick: Oe,
              isRtl: se.isRtl,
              backgroundImage: he,
            },
            a.ZP.createElement('i', { className: 'icon-play' }),
            a.ZP.createElement('i', { className: 'icon-pause' })
          ),
          Fe &&
            a.ZP.createElement(
              'div',
              { className: (0, u.Z)('media-loading', Re, De && 'interactive') },
              a.ZP.createElement(w.Z, {
                progress: Ae,
                transparent: !0,
                size: 'm',
                onClick: De ? Oe : void 0,
                noCross: !De,
              })
            ),
          Q &&
            z &&
            !xe &&
            a.ZP.createElement(
              I.Z,
              {
                round: !0,
                size: 'tiny',
                className: 'download-button',
                ariaLabel: $ ? 'Cancel download' : 'Download',
                onClick: $e,
              },
              a.ZP.createElement('i', { className: $ ? 'icon-close' : 'icon-arrow-down' })
            ),
          x === s.Cr.Search && Ke(),
          x !== s.Cr.Search &&
            Q &&
            (function (e, t, n, i, r, s, o, d, u, h, p) {
              const { title: v, performer: f, fileName: g } = t,
                Z = i || (r > 0 && r < 1),
                { isRtl: P } = e
              return a.ZP.createElement(
                'div',
                { className: 'content' },
                a.ZP.createElement(
                  'p',
                  { className: 'title', dir: 'auto', title: v },
                  (0, l.Z)(v || g)
                ),
                Z &&
                  a.ZP.createElement(
                    'div',
                    { className: 'meta', dir: P ? 'rtl' : void 0 },
                    a.ZP.createElement(
                      'span',
                      { className: 'duration with-seekline', dir: 'auto' },
                      (0, m.k9)(n * r, n)
                    ),
                    T(r, s, o)
                  ),
                !Z &&
                  d &&
                  a.ZP.createElement(
                    'div',
                    { className: 'meta', dir: P ? 'rtl' : void 0 },
                    h ? `${(0, c.yW)(t.size * h)} / ` : void 0,
                    (0, c.yW)(t.size)
                  ),
                !Z &&
                  !d &&
                  a.ZP.createElement(
                    'div',
                    { className: 'meta', dir: P ? 'rtl' : void 0 },
                    a.ZP.createElement(
                      'span',
                      { className: 'duration', dir: 'auto' },
                      (0, m.k9)(n)
                    ),
                    f &&
                      a.ZP.createElement(
                        a.ZP.Fragment,
                        null,
                        a.ZP.createElement('span', { className: 'bullet' }, '•'),
                        a.ZP.createElement(
                          'span',
                          { className: 'performer', dir: 'auto', title: f },
                          (0, l.Z)(f)
                        )
                      ),
                    Boolean(u) &&
                      a.ZP.createElement(
                        a.ZP.Fragment,
                        null,
                        a.ZP.createElement('span', { className: 'bullet' }, '•'),
                        a.ZP.createElement(
                          N.Z,
                          { className: 'date', onClick: p },
                          (0, m.ZK)(e, 1e3 * u, !0)
                        )
                      )
                  )
              )
            })(se, Q, Ne, Ce, be, Pe, re, $ || xe, L, Ae, K ? Xe : void 0),
          x === s.Cr.SharedMedia && (ee || te) && Ke(),
          x === s.Cr.Inline &&
            ee &&
            (function (e, t, n, i, r, s, o, l, c, d, h, p) {
              return a.ZP.createElement(
                'div',
                { className: 'content' },
                a.ZP.createElement(
                  'div',
                  { className: 'waveform-wrapper' },
                  a.ZP.createElement(
                    'div',
                    { className: 'waveform', draggable: !1, ref: t },
                    a.ZP.createElement('canvas', { ref: n })
                  ),
                  h &&
                    a.ZP.createElement(
                      I.Z,
                      {
                        onClick: () => {
                          ;(l || c) && p ? p(!o) : s || h()
                        },
                      },
                      a.ZP.createElement('i', {
                        className: (0, u.Z)(
                          'transcribe-icon',
                          l || c ? 'icon-down' : 'icon-transcribe',
                          (l || c) && !o && 'transcribe-shown'
                        ),
                      }),
                      s && d
                    )
                ),
                a.ZP.createElement(
                  'p',
                  { className: (0, u.Z)('voice-duration', r && 'unread'), dir: 'auto' },
                  0 === i ? (0, m.k9)(e.duration) : (0, m.k9)(e.duration * i)
                )
              )
            })(ee, re, ke, be, ne, B, U, j, X, Ye, Y ? ze : void 0, H)
        )
      })
    },
    70180: (e, t, n) => {
      n.d(t, { Z: () => Z })
      var a = n(60748),
        i = n(33555),
        r = n(6137),
        s = n(83716),
        o = n(11192),
        l = n(56112),
        c = n(32340),
        d = n(64319),
        u = n(6272),
        m = n(69118),
        h = n(3858),
        p = n(59107),
        v = n(31876),
        f = n(83321)
      const g = (0, m.Ds)((e) => e(), 500, !1),
        Z = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatOrUserId: n } = t
            const {
                lastSyncTime: a,
                countryList: { phoneCodes: i },
              } = e,
              r = n ? (0, o.Z1)(e, n) : void 0,
              s = (0, l.YC)(n) ? (0, o.dy)(e, n) : void 0,
              c = r?.isForum,
              d = r && (0, l.i4)(r, (0, o.dZ)(e), (0, o.NJ)(e)),
              { threadId: u } = (0, o.Bt)(e) || {},
              m = c ? u : void 0
            return {
              lastSyncTime: a,
              phoneCodeList: i,
              chat: r,
              user: s,
              canInviteUsers:
                r &&
                !s &&
                ((!(0, l.eA)(r) && !(0, l.Mg)(r, 'inviteUsers')) || (0, l.VE)(r, 'inviteUsers')),
              isMuted: d,
              topicId: m,
            }
          })((e) => {
            let {
              lastSyncTime: t,
              user: n,
              chat: o,
              forceShowSelf: m,
              canInviteUsers: Z,
              isMuted: P,
              phoneCodeList: E,
              topicId: y,
            } = e
            const {
                loadFullUser: C,
                showNotification: b,
                updateChatMutedState: I,
                updateTopicMutedState: w,
              } = (0, i.Sv)(),
              { id: N, fullInfo: S, usernames: k, phoneNumber: M, isSelf: T } = n || {},
              { id: x, usernames: L } = o || {},
              A = (0, p.Z)(),
              [F, R] = (0, a.eJ)(!P)
            ;(0, a.d4)(() => {
              t && N && C({ userId: N })
            }, [C, N, t])
            const D = Boolean(y && y !== r._f),
              O = (0, a.Ye)(() => {
                const e = k?.filter((e) => e.isActive)
                return e?.length ? e : void 0
              }, [k]),
              $ = (0, a.Ye)(() => {
                const e = n ? void 0 : L?.filter((e) => e.isActive)
                return e?.length ? e : void 0
              }, [L, n]),
              B = (0, a.Ye)(() => {
                if (o) return D ? (0, l.pA)(o.id, $?.[0].username, y) : (0, l.hu)(o)
              }, [o, D, $, y]),
              U = (0, a.I4)(() => {
                R((e) => {
                  const t = !e
                  return (
                    g(() => {
                      D ? w({ chatId: x, topicId: y, isMuted: !t }) : I({ chatId: x, isMuted: !t })
                    }),
                    t
                  )
                })
              }, [x, D, y, I, w])
            if (!o || o.isRestricted || (T && !m)) return
            function j(e, t) {
              ;(0, d.TE)(e), b({ message: `${t} was copied` })
            }
            const X = M && (0, u.WZ)(E, M),
              z = S?.bio || (0, l.GM)(o)
            function Y(e, t) {
              const [n, ...i] = e,
                r = i.length
                  ? A('UsernameAlso', '%USERNAMES%')
                      .split('%')
                      .map((e) =>
                        'USERNAMES' === e
                          ? a.ZP.createElement(
                              a.ZP.Fragment,
                              null,
                              i.map((e, n) => {
                                let { username: i } = e
                                const r = t ? `${s.zHP}${i}` : `@${i}`
                                return a.ZP.createElement(
                                  a.ZP.Fragment,
                                  null,
                                  n > 0 ? ', ' : '',
                                  a.ZP.createElement(
                                    'a',
                                    {
                                      key: i,
                                      href: `${s.zHP}${i}`,
                                      onClick: (e) => {
                                        ;(0, h.Z)(e), j(r, A(t ? 'Link' : 'Username'))
                                      },
                                      className: 'text-entity-link username-link',
                                    },
                                    `@${i}`
                                  )
                                )
                              })
                            )
                          : e
                      )
                  : void 0,
                o = t ? `t.me/${n.username}` : n.username,
                l = t ? `${s.zHP}${n.username}` : `@${n.username}`
              return a.ZP.createElement(
                v.Z,
                {
                  icon: t ? 'link' : 'mention',
                  multiline: !0,
                  narrow: !0,
                  ripple: !0,
                  onClick: () => j(l, A(t ? 'Link' : 'Username')),
                },
                a.ZP.createElement('span', { className: 'title', dir: 'auto' }, o),
                a.ZP.createElement(
                  'span',
                  { className: 'subtitle' },
                  r && a.ZP.createElement('span', { className: 'other-usernames' }, r),
                  A(t ? 'Link' : 'Username')
                )
              )
            }
            return a.ZP.createElement(
              'div',
              { className: 'ChatExtra' },
              X &&
                Boolean(X.length) &&
                a.ZP.createElement(
                  v.Z,
                  {
                    icon: 'phone',
                    multiline: !0,
                    narrow: !0,
                    ripple: !0,
                    onClick: () => j(X, A('Phone')),
                  },
                  a.ZP.createElement('span', { className: 'title', dir: 'auto' }, X),
                  a.ZP.createElement('span', { className: 'subtitle' }, A('Phone'))
                ),
              O && Y(O),
              z &&
                Boolean(z.length) &&
                a.ZP.createElement(
                  v.Z,
                  { icon: 'info', multiline: !0, narrow: !0, isStatic: !0 },
                  a.ZP.createElement(
                    'span',
                    { className: 'title word-break', dir: 'auto' },
                    (0, c.Z)(z, ['br', 'links', 'emoji'])
                  ),
                  a.ZP.createElement('span', { className: 'subtitle' }, A(N ? 'UserBio' : 'Info'))
                ),
              $ && !D && Y($, !0),
              ((!$ && Z) || D) &&
                B &&
                a.ZP.createElement(
                  v.Z,
                  {
                    icon: 'link',
                    multiline: !0,
                    narrow: !0,
                    ripple: !0,
                    onClick: () => j(B, A('SetUrlPlaceholder')),
                  },
                  a.ZP.createElement('div', { className: 'title' }, B),
                  a.ZP.createElement('span', { className: 'subtitle' }, A('SetUrlPlaceholder'))
                ),
              !m &&
                a.ZP.createElement(
                  v.Z,
                  { icon: 'unmute', ripple: !0, onClick: U },
                  a.ZP.createElement('span', null, A('Notifications')),
                  a.ZP.createElement(f.Z, {
                    id: 'group-notifications',
                    label: N ? 'Toggle User Notifications' : 'Toggle Chat Notifications',
                    checked: F,
                    inactive: !0,
                  })
                )
            )
          })
        )
    },
    40329: (e, t, n) => {
      n.d(t, { Z: () => m })
      var a = n(60748),
        i = n(33555),
        r = n(11192),
        s = n(56112),
        o = n(59107),
        l = n(32340),
        c = n(70172),
        d = n(13103),
        u = n(231)
      const m = (0, a.X$)(
        (0, i.c$)((e, t) => {
          let { chat: n } = t
          const a = (0, s.YC)(n.id),
            i = (0, r.FM)(e, n.id),
            o = a && (0, r.dy)(e, (0, s.zX)(n)),
            l = o && (0, s.cS)(o) && !n.isSupport,
            c = a && !i && !l,
            d = a ? (0, s.Vl)((0, r.dy)(e, (0, s.zX)(n))) : void 0
          return {
            isPrivateChat: a,
            isChatWithSelf: i,
            isBot: l,
            isChannel: (0, s.eA)(n),
            isBasicGroup: (0, s.G9)(n),
            isSuperGroup: (0, s.ZV)(n),
            currentUserId: e.currentUserId,
            canDeleteForAll: c,
            contactName: d,
            animationLevel: e.settings.byKey.animationLevel,
          }
        })((e) => {
          let {
            isOpen: t,
            chat: n,
            isChannel: r,
            isPrivateChat: m,
            isChatWithSelf: h,
            isBot: p,
            isBasicGroup: v,
            isSuperGroup: f,
            currentUserId: g,
            canDeleteForAll: Z,
            contactName: P,
            animationLevel: E,
            onClose: y,
            onCloseAnimationEnd: C,
          } = e
          const {
              leaveChannel: b,
              deleteHistory: I,
              deleteChannel: w,
              deleteChatUser: N,
              blockContact: S,
            } = (0, i.Sv)(),
            k = (0, o.Z)(),
            M = (0, s.U)(k, n),
            T = (0, a.I4)(() => {
              I({ chatId: n.id, shouldDeleteForAll: !0 }), y()
            }, [I, n.id, y]),
            x = (0, a.I4)(() => {
              I({ chatId: n.id, shouldDeleteForAll: !0 }),
                S({ contactId: n.id, accessHash: n.accessHash }),
                y()
            }, [I, n.id, n.accessHash, S, y]),
            L = (0, a.I4)(() => {
              m
                ? I({ chatId: n.id, shouldDeleteForAll: !1 })
                : v
                ? (N({ chatId: n.id, userId: g }), I({ chatId: n.id, shouldDeleteForAll: !1 }))
                : (!r && !f) || n.isCreator
                ? (r || f) && n.isCreator && w({ chatId: n.id })
                : b({ chatId: n.id }),
                y()
            }, [m, v, r, f, g, n.isCreator, n.id, y, I, N, b, w]),
            A = (0, a.I4)(() => {
              r || f ? (b({ chatId: n.id }), y()) : L()
            }, [n.id, L, r, f, b, y])
          return a.ZP.createElement(
            d.Z,
            {
              isOpen: t,
              className: 'DeleteChatModal',
              header: a.ZP.createElement(
                'div',
                { className: 'modal-header', dir: k.isRtl ? 'rtl' : void 0 },
                a.ZP.createElement(c.Z, {
                  size: 'tiny',
                  chat: n,
                  isSavedMessages: h,
                  animationLevel: E,
                  withVideo: !0,
                }),
                a.ZP.createElement(
                  'h3',
                  { className: 'modal-title' },
                  k(
                    r && !n.isCreator
                      ? 'LeaveChannel'
                      : r && n.isCreator
                      ? 'ChannelDelete'
                      : v || f
                      ? 'Group.LeaveGroup'
                      : 'DeleteChatUser'
                  )
                )
              ),
              onClose: y,
              onCloseAnimationEnd: C,
            },
            r && n.isCreator
              ? a.ZP.createElement(
                  'p',
                  null,
                  (0, l.Z)(k('ChatList.DeleteAndLeaveGroupConfirmation', M), [
                    'simple_markdown',
                    'emoji',
                  ])
                )
              : (r && !n.isCreator) || v || f
              ? a.ZP.createElement(
                  'p',
                  null,
                  (0, l.Z)(k('ChannelLeaveAlertWithName', M), ['simple_markdown', 'emoji'])
                )
              : a.ZP.createElement(
                  'p',
                  null,
                  (0, l.Z)(k('ChatList.DeleteChatConfirmation', P), ['simple_markdown', 'emoji'])
                ),
            a.ZP.createElement(
              'div',
              { className: 'dialog-buttons-column' },
              p &&
                a.ZP.createElement(
                  u.Z,
                  { color: 'danger', className: 'confirm-dialog-button', isText: !0, onClick: x },
                  k('DeleteAndStop')
                ),
              Z &&
                a.ZP.createElement(
                  u.Z,
                  { color: 'danger', className: 'confirm-dialog-button', isText: !0, onClick: T },
                  P ? (0, l.Z)(k('ChatList.DeleteForEveryone', P)) : k('DeleteForAll')
                ),
              !m &&
                n.isCreator &&
                a.ZP.createElement(
                  u.Z,
                  { color: 'danger', className: 'confirm-dialog-button', isText: !0, onClick: L },
                  k('DeleteForAll')
                ),
              a.ZP.createElement(
                u.Z,
                {
                  color: 'danger',
                  className: 'confirm-dialog-button',
                  isText: !0,
                  onClick: m ? L : A,
                },
                k(
                  r && !n.isCreator
                    ? 'LeaveChannel'
                    : r && n.isCreator
                    ? 'Chat.Input.Delete'
                    : v || f
                    ? 'Group.LeaveGroup'
                    : Z
                    ? 'ChatList.DeleteForCurrentUser'
                    : 'Delete'
                )
              ),
              a.ZP.createElement(
                u.Z,
                { className: 'confirm-dialog-button', isText: !0, onClick: y },
                k('Cancel')
              )
            )
          )
        })
      )
    },
    82535: (e, t, n) => {
      n.d(t, { Z: () => h })
      var a = n(60748),
        i = n(33555),
        r = n(83716),
        s = n(15376),
        o = n(56112),
        l = n(3657),
        c = n(92566),
        d = n(6202),
        u = n(60706),
        m = n(47002)
      const h = (0, a.X$)((e) => {
        let {
          message: t,
          observeIntersection: n,
          smaller: h,
          canAutoLoad: p,
          autoLoadFileMaxSizeMb: v,
          uploadProgress: f,
          withDate: g,
          datetime: Z,
          className: P,
          sender: E,
          isSelected: y,
          isSelectable: C,
          onCancelUpload: b,
          onMediaClick: I,
          onDateClick: w,
          isDownloading: N,
        } = e
        const S = (0, i.Sv)(),
          k = (0, a.sO)(null),
          M = t.content.document,
          { fileName: T, size: x, timestamp: L } = M,
          A = (0, s.K2)(M) || '',
          F = (0, l.Op)(k, n),
          [R, D] = (0, u.Z)()
        ;(0, a.d4)(() => {
          F && D()
        }, [F, D])
        const [O, $] = (0, a.eJ)(p && (!v || x <= 1048576 * v)),
          B = Boolean(N || (O && R)),
          U = (0, o.Ti)(t, 'download'),
          { loadProgress: j, mediaData: X } = (0, c.Z)(
            U,
            !B,
            (0, o.kG)(t, 'download'),
            void 0,
            void 0,
            !0
          ),
          z = Boolean(X),
          {
            isUploading: Y,
            isTransferring: H,
            transferProgress: _,
          } = (0, o.Sc)(t, f || j, B && !z),
          V = (0, s.v6)(M),
          q = V ? (0, o.DH)(t) : void 0,
          K = V ? M.previewBlobUrl : void 0,
          W = (0, d.Z)((0, o.Ti)(t, 'pictogram'), !F),
          G = I && Boolean(M.mediaType) && (r.wGh.has(M.mimeType) || r.oGt.has(M.mimeType)),
          J = (0, a.I4)(() => {
            Y
              ? b && b()
              : N
              ? S.cancelMessageMediaDownload({ message: t })
              : H
              ? $(!1)
              : G
              ? I()
              : S.downloadMessageMedia({ message: t })
          }, [Y, N, H, G, b, S, t, I]),
          Q = (0, a.I4)(() => {
            w(t.id, t.chatId)
          }, [w, t.id, t.chatId])
        return a.ZP.createElement(m.Z, {
          ref: k,
          name: T,
          extension: A,
          size: x,
          timestamp: g ? Z || L : void 0,
          thumbnailDataUri: q,
          previewData: K || W,
          smaller: h,
          isTransferring: H,
          isUploading: Y,
          transferProgress: _,
          className: P,
          sender: E,
          isSelectable: C,
          isSelected: y,
          actionIcon: G ? ((0, o.hC)(t) ? 'icon-play' : 'icon-eye') : 'icon-download',
          onClick: J,
          onDateClick: w ? Q : void 0,
        })
      })
    },
    78780: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(46752),
        r = n(32340),
        s = n(59107)
      const o = (e) => {
        let { content: t, className: n } = e
        const o = (0, s.Z)()
        return a.ZP.createElement(
          'span',
          { className: (0, i.Z)('DotAnimation', n), dir: o.isRtl ? 'rtl' : 'auto' },
          (0, r.Z)(t),
          a.ZP.createElement('span', { className: 'ellipsis' })
        )
      }
    },
    50685: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748),
        i = n(59107)
      const r = (0, a.X$)((e) => {
        let { fakeType: t } = e
        const n = (0, i.Z)()
        return a.ZP.createElement(
          'span',
          { className: 'FakeIcon' },
          n('fake' === t ? 'FakeMessage' : 'ScamMessage')
        )
      })
    },
    47002: (e, t, n) => {
      n.d(t, { Z: () => g })
      var a = n(60748),
        i = n(863),
        r = n(46752),
        s = n(790),
        o = n(15376),
        l = n(74399),
        c = n(32340),
        d = n(31212),
        u = n(70692),
        m = n(59107),
        h = n(15866),
        p = n(42797),
        v = n(39196),
        f = n(8337)
      const g = (0, a.X$)((e) => {
        let {
          ref: t,
          name: n,
          size: g,
          extension: Z = '',
          timestamp: P,
          sender: E,
          thumbnailDataUri: y,
          previewData: C,
          className: b,
          smaller: I,
          isTransferring: w,
          isUploading: N,
          isSelectable: S,
          isSelected: k,
          transferProgress: M,
          actionIcon: T,
          onClick: x,
          onDateClick: L,
        } = e
        const A = (0, m.Z)()
        let F = (0, a.sO)(null)
        t && (F = t)
        const { isMobile: R } = (0, p.ZP)(),
          [D] = (0, a.eJ)(!C),
          O = Boolean(C),
          $ = (0, h.Z)(y, O, R && !i.vX),
          B = (0, u.Z)(!O),
          { shouldRender: U, transitionClassNames: j } = (0, d.Z)(w, void 0, !0),
          X = (0, o.Oh)(Z),
          z = (0, o.yW)(g),
          { width: Y, height: H } = (0, l.lE)(I),
          _ = (0, r.Z)('File', b, I && 'smaller', x && !N && 'interactive', k && 'file-is-selected')
        return a.ZP.createElement(
          'div',
          { ref: F, className: _, dir: A.isRtl ? 'rtl' : void 0 },
          S &&
            a.ZP.createElement(
              'div',
              { className: 'message-select-control' },
              k && a.ZP.createElement('i', { className: 'icon-select' })
            ),
          a.ZP.createElement(
            'div',
            { className: 'file-icon-container', onClick: N ? void 0 : x },
            y || C
              ? a.ZP.createElement(
                  'div',
                  { className: 'file-preview media-inner' },
                  a.ZP.createElement('img', {
                    src: C,
                    className: 'full-media',
                    width: Y,
                    height: H,
                    alt: '',
                  }),
                  D && a.ZP.createElement('canvas', { ref: $, className: (0, r.Z)('thumbnail', B) })
                )
              : a.ZP.createElement(
                  'div',
                  { className: `file-icon ${X}` },
                  Z.length <= 4 &&
                    a.ZP.createElement('span', { className: 'file-ext', dir: 'auto' }, Z)
                ),
            U &&
              a.ZP.createElement(
                'div',
                { className: (0, r.Z)('file-progress', X, j) },
                a.ZP.createElement(v.Z, {
                  progress: M,
                  size: I ? 's' : 'm',
                  onClick: N ? x : void 0,
                })
              ),
            x &&
              a.ZP.createElement('i', {
                className: (0, r.Z)('action-icon', T || 'icon-download', U && 'hidden'),
              })
          ),
          a.ZP.createElement(
            'div',
            { className: 'file-info' },
            a.ZP.createElement(
              'div',
              { className: 'file-title', dir: 'auto', title: n },
              (0, c.Z)(n)
            ),
            a.ZP.createElement(
              'div',
              { className: 'file-subtitle', dir: 'auto' },
              a.ZP.createElement('span', null, w && M ? `${Math.round(100 * M)}%` : z),
              E && a.ZP.createElement('span', { className: 'file-sender' }, (0, c.Z)(E)),
              !E &&
                Boolean(P) &&
                a.ZP.createElement(
                  a.ZP.Fragment,
                  null,
                  a.ZP.createElement('span', { className: 'bullet' }),
                  a.ZP.createElement(f.Z, { onClick: L }, (0, s.ZK)(A, 1e3 * P, !0))
                )
            )
          ),
          E && Boolean(P) && a.ZP.createElement(f.Z, { onClick: L }, (0, s.VX)(A, 1e3 * P))
        )
      })
    },
    2153: (e, t, n) => {
      n.d(t, { Z: () => v })
      var a = n(60748),
        i = n(83716),
        r = n(32340),
        s = n(56112),
        o = n(46752),
        l = n(59107)
      const c = {
          __html:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3 2.9c.1.1.2.1.3.2.7.6 1.3 1.1 2 1.7.3.2.6.4.9.4.9.1 1.7.2 2.6.2.5 0 .6.1.7.7.1.9.1 1.8.2 2.6 0 .4.2.7.4 1 .6.7 1.1 1.3 1.7 2 .3.4.3.5 0 .8-.5.6-1.1 1.3-1.6 1.9-.3.3-.5.7-.5 1.2-.1.8-.2 1.7-.2 2.5 0 .4-.2.5-.6.6-.8 0-1.6.1-2.5.2-.5 0-1 .2-1.4.5-.6.5-1.3 1.1-1.9 1.6-.3.3-.5.3-.8 0-.7-.6-1.4-1.2-2-1.8-.3-.2-.6-.4-.9-.4-.9-.1-1.8-.2-2.7-.2-.4 0-.5-.2-.6-.5 0-.9-.1-1.7-.2-2.6 0-.4-.2-.8-.4-1.1-.6-.6-1.1-1.3-1.6-2-.4-.4-.3-.5 0-1 .6-.6 1.1-1.3 1.7-1.9.3-.3.4-.6.4-1 0-.8.1-1.6.2-2.5 0-.5.1-.6.6-.6.9-.1 1.7-.1 2.6-.2.4 0 .7-.2 1-.4.7-.6 1.4-1.2 2.1-1.7.1-.2.3-.3.5-.2z" style="fill: var(--color-fill)"/><path class="lol" d="M16.4 10.1l-.2.2-5.4 5.4c-.1.1-.2.2-.4 0l-2.6-2.6c-.2-.2-.1-.3 0-.4.2-.2.5-.6.7-.6.3 0 .5.4.7.6l1.1 1.1c.2.2.3.2.5 0l4.3-4.3c.2-.2.4-.3.6 0 .1.2.3.3.4.5.2 0 .3.1.3.1z" style="fill: var(--color-checkmark)"/></svg>',
        },
        d = () =>
          a.ZP.createElement('span', { className: 'VerifiedIcon', dangerouslySetInnerHTML: c })
      var u = n(50685),
        m = n(96459),
        h = n(4863)
      const p = 'ysHMmXALnn0fgFRc7Bn7',
        v = (0, a.X$)((e) => {
          let {
            className: t,
            peer: n,
            noVerified: c,
            noFake: v,
            withEmojiStatus: f,
            emojiStatusSize: g,
            isSavedMessages: Z,
            noLoopLimit: P,
            onEmojiStatusClick: E,
            observeIntersection: y,
          } = e
          const C = (0, l.Z)(),
            b = (0, s.YC)(n.id),
            I = b ? (0, s.Js)(n) : (0, s.U)(C, n),
            w = b && n.emojiStatus,
            N = b && n.isPremium
          return Z
            ? a.ZP.createElement(
                'div',
                { className: (0, o.Z)('title', p, t) },
                a.ZP.createElement('h3', null, C('SavedMessages'))
              )
            : a.ZP.createElement(
                'div',
                { className: (0, o.Z)('title', p, t) },
                a.ZP.createElement('h3', { dir: 'auto', className: 'fullName' }, (0, r.Z)(I || '')),
                !c && n.isVerified && a.ZP.createElement(d, null),
                !v && n.fakeType && a.ZP.createElement(u.Z, { fakeType: n.fakeType }),
                f &&
                  w &&
                  a.ZP.createElement(m.Z, {
                    documentId: w.documentId,
                    size: g,
                    loopLimit: P ? void 0 : i.y3O,
                    observeIntersectionForLoading: y,
                    onClick: E,
                  }),
                f && !w && N && a.ZP.createElement(h.Z, null)
              )
        })
    },
    98799: (e, t, n) => {
      n.d(t, { Z: () => Z })
      var a = n(60748),
        i = n(33555),
        r = n(91713),
        s = n(74399),
        o = n(56112),
        l = n(11192),
        c = n(46752),
        d = n(32340),
        u = n(59107),
        m = n(70172),
        h = n(68729),
        p = n(78780),
        v = n(2153),
        f = n(2995)
      const g = 2.5 * s.Gw,
        Z = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n, threadId: a } = t
            const { lastSyncTime: i } = e,
              r = (0, l.Z1)(e, n),
              s = a ? (0, l.tZ)(e, n, a) : void 0,
              o = r ? (0, l.YK)(e, r) : void 0,
              c = Boolean((0, l.Zw)(e, n)),
              d = a ? r?.topics?.[a] : void 0,
              u = d && (0, l.v_)(e, n, a)
            return {
              lastSyncTime: i,
              chat: r,
              threadInfo: s,
              onlineCount: o,
              topic: d,
              areMessagesLoaded: c,
              animationLevel: e.settings.byKey.animationLevel,
              messagesCount: u,
            }
          })((e) => {
            let {
              typingStatus: t,
              className: n,
              avatarSize: s = 'medium',
              noAvatar: l,
              status: Z,
              withDots: P,
              withMediaViewer: E,
              withUsername: y,
              withFullInfo: C,
              withUpdatingStatus: b,
              withChatType: I,
              withVideoAvatar: w,
              threadInfo: N,
              noRtl: S,
              chat: k,
              onlineCount: M,
              areMessagesLoaded: T,
              animationLevel: x,
              lastSyncTime: L,
              topic: A,
              messagesCount: F,
              onClick: R,
            } = e
            const { loadFullChat: D, openMediaViewer: O, loadProfilePhotos: $ } = (0, i.Sv)(),
              B = k && (0, o.ZV)(k),
              U = Boolean(k?.isForum && N && A),
              { id: j, isMin: X, isRestricted: z } = k || {}
            ;(0, a.d4)(() => {
              j && !X && L && (C && D({ chatId: j }), E && $({ profileId: j }))
            }, [j, X, L, C, D, $, B, E])
            const Y = (0, a.I4)(
                (e, t) => {
                  k &&
                    t &&
                    (e.stopPropagation(),
                    O({
                      avatarOwnerId: k.id,
                      mediaId: 0,
                      origin: 'jumbo' === s ? r.bZ.ProfileAvatar : r.bZ.MiddleHeaderAvatar,
                    }))
                },
                [k, s, O]
              ),
              H = (0, u.Z)(),
              _ = (0, a.Ye)(() => k && y && (0, o.WS)(k), [k, y])
            if (k)
              return a.ZP.createElement(
                'div',
                {
                  className: (0, c.Z)('ChatInfo', n),
                  dir: !S && H.isRtl ? 'rtl' : void 0,
                  onClick: R,
                },
                !l &&
                  !U &&
                  a.ZP.createElement(m.Z, {
                    key: k.id,
                    size: s,
                    chat: k,
                    onClick: E ? Y : void 0,
                    withVideo: w,
                    animationLevel: x,
                  }),
                U && a.ZP.createElement(f.Z, { topic: A, className: 'topic-header-icon', size: g }),
                a.ZP.createElement(
                  'div',
                  { className: 'info' },
                  A
                    ? a.ZP.createElement(
                        'h3',
                        { dir: 'auto', className: 'fullName' },
                        (0, d.Z)(A.title)
                      )
                    : a.ZP.createElement(v.Z, { peer: k }),
                  (function () {
                    if (Z)
                      return P
                        ? a.ZP.createElement(p.Z, { className: 'status', content: Z })
                        : a.ZP.createElement('span', { className: 'status', dir: 'auto' }, Z)
                    if (b && !T && !z)
                      return a.ZP.createElement(p.Z, {
                        className: 'status',
                        content: H('Updating'),
                      })
                    if (!k) return
                    if (t) return a.ZP.createElement(h.Z, { typingStatus: t })
                    if (U)
                      return a.ZP.createElement(
                        'span',
                        { className: 'status', dir: 'auto' },
                        F ? H('messages', F, 'i') : (0, d.Z)(k.title)
                      )
                    if (I)
                      return a.ZP.createElement(
                        'span',
                        { className: 'status', dir: 'auto' },
                        H((0, o.l6)(k))
                      )
                    const e = (function (e, t) {
                        const n = e((0, o.l6)(t)),
                          { membersCount: a } = t
                        return t.isRestricted
                          ? 'Channel' === n
                            ? 'channel is inaccessible'
                            : 'group is inaccessible'
                          : a
                          ? e('Channel' === n ? 'Subscribers' : 'Members', a, 'i')
                          : n
                      })(H, k),
                      n = M ? `, ${H('OnlineCount', M, 'i')}` : void 0
                    return a.ZP.createElement(
                      'span',
                      { className: 'status' },
                      _ && a.ZP.createElement('span', { className: 'handle' }, _),
                      a.ZP.createElement('span', { className: 'group-status' }, e),
                      n && a.ZP.createElement('span', { className: 'online-status' }, n)
                    )
                  })()
                )
              )
          })
        )
    },
    76844: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(790),
        r = n(59107),
        s = n(8018)
      const o = (0, a.X$)((e) => {
        let { message: t, outgoingStatus: n } = e
        const o = (0, r.Z)()
        return a.ZP.createElement(
          'div',
          { className: 'LastMessageMeta' },
          n && a.ZP.createElement(s.Z, { status: n }),
          a.ZP.createElement('span', { className: 'time' }, (0, i.VX)(o, 1e3 * t.date))
        )
      })
    },
    13709: (e, t, n) => {
      n.d(t, { Z: () => h })
      var a = n(60748),
        i = n(790),
        r = n(3858),
        s = n(56112),
        o = n(46752),
        l = n(6202),
        c = n(70692),
        d = n(60706),
        u = n(3657),
        m = n(62230)
      const h = (0, a.X$)((e) => {
        let {
          message: t,
          idPrefix: n = 'shared-media',
          isProtected: h,
          observeIntersection: p,
          onClick: v,
        } = e
        const f = (0, a.sO)(null),
          g = (0, u.Op)(f, p),
          Z = (0, s.DH)(t),
          P = (0, l.Z)((0, s.Ti)(t, 'pictogram'), !g),
          E = (0, c.Z)(P),
          y = (0, s.b7)(t),
          C = (0, s.NE)(t),
          [b, , I] = (0, d.Z)(C),
          w = (0, a.I4)(() => {
            I(), v(t.id, t.chatId)
          }, [I, t, v])
        return a.ZP.createElement(
          'div',
          {
            ref: f,
            id: `${n}${(0, s.d0)(t.id)}`,
            className: 'Media scroll-item',
            onClick: v ? w : void 0,
          },
          a.ZP.createElement('img', {
            src: Z,
            className: 'media-miniature',
            alt: '',
            draggable: !h,
            decoding: 'async',
            onContextMenu: h ? r.Z : void 0,
          }),
          a.ZP.createElement('img', {
            src: P,
            className: (0, o.Z)('full-media', 'media-miniature', E),
            alt: '',
            draggable: !h,
            decoding: 'async',
            onContextMenu: h ? r.Z : void 0,
          }),
          C &&
            a.ZP.createElement(m.Z, {
              thumbDataUri: P || Z,
              isVisible: b,
              className: 'media-spoiler',
            }),
          y &&
            a.ZP.createElement(
              'span',
              { className: 'video-duration' },
              y.isGif ? 'GIF' : (0, i.k9)(y.duration)
            ),
          h && a.ZP.createElement('span', { className: 'protector' })
        )
      })
    },
    62230: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(46752),
        r = n(15866),
        s = n(31212)
      const o = (0, a.X$)((e) => {
        let {
          isVisible: t,
          withAnimation: n,
          thumbDataUri: o,
          className: l,
          width: c,
          height: d,
        } = e
        const u = (0, a.sO)(null),
          { shouldRender: m, transitionClassNames: h } = (0, s.Z)(
            t,
            void 0,
            !0,
            !n && void 0,
            void 0,
            500
          ),
          p = (0, r.Z)(o, !m, void 0, 25, c, d),
          v = (0, a.I4)((e) => {
            if (!u.current) return
            const t = e.currentTarget.getBoundingClientRect(),
              n = e.clientX - t.left,
              a = e.clientY - t.top,
              i = n - t.width / 2,
              r = a - t.height / 2
            u.current.setAttribute('style', `--click-shift-x: ${i}px; --click-shift-y: ${r}px`)
          }, [])
        if (m)
          return a.ZP.createElement(
            'div',
            {
              className: (0, i.Z)('MbgQHglBDZLEAHDebnxc', h, l, n && 'zFmCa6knHOC8UhmcYHq8'),
              ref: u,
              onClick: n ? v : void 0,
            },
            a.ZP.createElement('canvas', {
              ref: p,
              className: 'oQmroREXWSylQXgjAdIB',
              width: c,
              height: d,
            }),
            a.ZP.createElement('div', { className: 'leAfUrALDfdpl4i8VEmv' })
          )
      })
    },
    8018: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a,
        i = n(60748),
        r = n(2255)
      !(function (e) {
        ;(e[(e.failed = 0)] = 'failed'),
          (e[(e.pending = 1)] = 'pending'),
          (e[(e.succeeded = 2)] = 'succeeded'),
          (e[(e.read = 3)] = 'read')
      })(a || (a = {}))
      const s = (0, i.X$)((e) => {
        let { status: t } = e
        return i.ZP.createElement(
          'div',
          { className: 'MessageOutgoingStatus' },
          i.ZP.createElement(
            r.Z,
            { name: 'reveal', activeKey: a[t] },
            'failed' === t
              ? i.ZP.createElement(
                  'div',
                  { className: 'MessageOutgoingStatus--failed' },
                  i.ZP.createElement('i', { className: 'icon-message-failed' })
                )
              : i.ZP.createElement('i', { className: `icon-message-${t}` })
          )
        )
      })
    },
    47262: (e, t, n) => {
      n.d(t, { Z: () => c })
      var a = n(60748),
        i = n(46752),
        r = n(31212),
        s = n(32340),
        o = n(59107)
      const l = 'Nothing found.',
        c = (0, a.X$)((e) => {
          let { text: t = l, description: n } = e
          const c = (0, o.Z)(),
            { transitionClassNames: d } = (0, r.Z)(!0)
          return a.ZP.createElement(
            'div',
            { className: (0, i.Z)('NothingFound', d, n && 'with-description') },
            t,
            n && a.ZP.createElement('p', { className: 'description' }, (0, s.Z)(c(n), ['br']))
          )
        })
    },
    99364: (e, t, n) => {
      n.d(t, { Z: () => m })
      var a = n(60748),
        i = n(83716),
        r = n(863),
        s = n(46752),
        o = n(3858),
        l = n(59107),
        c = n(28183),
        d = n(42797),
        u = n(231)
      const m = (0, a.X$)((e) => {
        let {
          isLoading: t = !1,
          isPasswordVisible: n,
          error: m,
          hint: h,
          placeholder: p = 'Password',
          submitLabel: v = 'Next',
          description: f,
          shouldShowSubmit: g,
          shouldResetValue: Z,
          shouldDisablePasswordManager: P = !1,
          noRipple: E = !1,
          clearError: y,
          onChangePasswordVisibility: C,
          onInputChange: b,
          onSubmit: I,
        } = e
        const w = (0, a.sO)(null),
          N = (0, l.Z)(),
          { isMobile: S } = (0, d.ZP)(),
          [k, M] = (0, a.eJ)(''),
          [T, x] = (0, a.eJ)(!1),
          L = S ? 550 : 400
        return (
          (0, a.d4)(() => {
            Z && M('')
          }, [Z]),
          (0, c.Z)(() => {
            r.$b || w.current.focus()
          }, L),
          (0, a.d4)(() => {
            m &&
              requestAnimationFrame(() => {
                w.current.focus(), w.current.select()
              })
          }, [m]),
          a.ZP.createElement(
            'form',
            {
              action: '',
              onSubmit: I
                ? function (e) {
                    e.preventDefault(), t || (T && I(k))
                  }
                : o.Z,
              autoComplete: 'off',
            },
            a.ZP.createElement(
              'div',
              {
                className: (0, s.Z)('input-group password-input', k && 'touched', m && 'error'),
                dir: N.isRtl ? 'rtl' : void 0,
              },
              P &&
                a.ZP.createElement('input', {
                  type: 'password',
                  id: 'prevent_autofill',
                  autoComplete: 'off',
                  className: 'visually-hidden',
                  tabIndex: -2,
                }),
              a.ZP.createElement('input', {
                ref: w,
                className: 'form-control',
                type: n ? 'text' : 'password',
                id: 'sign-in-password',
                value: k || '',
                autoComplete: P ? 'one-time-code' : 'current-password',
                onChange: function (e) {
                  m && y()
                  const { target: t } = e
                  M(t.value), x(t.value.length >= i.loe), b && b(t.value)
                },
                maxLength: 256,
                dir: 'auto',
              }),
              a.ZP.createElement('label', null, m || h || p),
              a.ZP.createElement(
                'div',
                {
                  className: 'toggle-password',
                  onClick: function () {
                    C(!n)
                  },
                  role: 'button',
                  tabIndex: 0,
                  title: 'Toggle password visibility',
                },
                a.ZP.createElement('i', { className: n ? 'icon-eye' : 'icon-eye-closed' })
              )
            ),
            f && a.ZP.createElement('p', { className: 'description' }, f),
            I &&
              (T || g) &&
              a.ZP.createElement(u.Z, { type: 'submit', ripple: !E, isLoading: t, disabled: !T }, v)
          )
        )
      })
    },
    11820: (e, t, n) => {
      n.d(t, { Z: () => v })
      var a = n(60748),
        i = n(56112),
        r = n(21273),
        s = n(14605),
        o = n(97687),
        l = n(31876),
        c = n(6058),
        d = n(98799),
        u = n(49187),
        m = n(27407),
        h = n(59107),
        p = n(34288)
      const v = (0, a.X$)((e) => {
        let {
          itemIds: t,
          selectedIds: n,
          filterValue: v,
          filterPlaceholder: f,
          notFoundText: g,
          searchInputId: Z,
          isLoading: P,
          noScrollRestore: E,
          onSelectedIdsChange: y,
          onFilterChange: C,
          onLoadMore: b,
        } = e
        const I = (0, a.sO)(null),
          w = n.length > 10
        ;(0, a.d4)(() => {
          setTimeout(() => {
            requestAnimationFrame(() => {
              I.current.focus()
            })
          }, 500)
        }, [])
        const N = (0, a.I4)(
            (e) => {
              const t = [...n]
              t.includes(e) ? t.splice(t.indexOf(e), 1) : t.push(e), y(t), C('')
            },
            [n, y, C]
          ),
          S = (0, a.I4)(
            (e) => {
              const { value: t } = e.currentTarget
              C(t)
            },
            [C]
          ),
          [k, M] = (0, m.Z)(b, t, Boolean(v)),
          T = (0, h.Z)()
        return a.ZP.createElement(
          'div',
          { className: 'Picker' },
          a.ZP.createElement(
            'div',
            { className: 'picker-header custom-scroll', dir: T.isRtl ? 'rtl' : void 0 },
            n.map((e, t) =>
              a.ZP.createElement(u.Z, {
                chatOrUserId: e,
                isMinimized: w && t < n.length - 5,
                canClose: !0,
                onClick: N,
                clickArg: e,
              })
            ),
            a.ZP.createElement(o.Z, {
              id: Z,
              ref: I,
              value: v,
              onChange: S,
              placeholder: f || T('SelectChat'),
            })
          ),
          k?.length
            ? a.ZP.createElement(
                r.Z,
                {
                  className: 'picker-list custom-scroll',
                  items: k,
                  onLoadMore: M,
                  noScrollRestore: E,
                },
                k.map((e) =>
                  a.ZP.createElement(
                    l.Z,
                    {
                      key: e,
                      className: 'chat-item-clickable picker-list-item',
                      onClick: () => N(e),
                      ripple: !0,
                    },
                    a.ZP.createElement(s.Z, { label: '', checked: n.includes(e) }),
                    (0, i.YC)(e)
                      ? a.ZP.createElement(c.Z, { userId: e })
                      : a.ZP.createElement(d.Z, { chatId: e })
                  )
                )
              )
            : P || !k || k.length
            ? a.ZP.createElement(p.Z, null)
            : a.ZP.createElement('p', { className: 'no-results' }, g || 'Sorry, nothing found.')
        )
      })
    },
    49187: (e, t, n) => {
      n.d(t, { Z: () => u })
      var a = n(60748),
        i = n(33555),
        r = n(11192),
        s = n(56112),
        o = n(32340),
        l = n(46752),
        c = n(59107),
        d = n(70172)
      const u = (0, a.X$)(
        (0, i.c$)((e, t) => {
          let { chatOrUserId: n } = t
          return n
            ? {
                chat: n ? (0, r.Z1)(e, n) : void 0,
                user: (0, s.YC)(n) ? (0, r.dy)(e, n) : void 0,
                currentUserId: e.currentUserId,
              }
            : {}
        })((e) => {
          let {
            icon: t,
            title: n,
            isMinimized: i,
            canClose: r,
            clickArg: u,
            chat: m,
            user: h,
            className: p,
            currentUserId: v,
            onClick: f,
          } = e
          const g = (0, c.Z)()
          let Z, P
          if (t && n)
            (Z = a.ZP.createElement(
              'div',
              { className: 'item-icon' },
              a.ZP.createElement('i', { className: `icon-${t}` })
            )),
              (P = n)
          else if (m || h) {
            Z = a.ZP.createElement(d.Z, {
              chat: m,
              user: h,
              size: 'small',
              isSavedMessages: h?.isSelf,
            })
            const e = !m || (h && !h.isSelf) ? (0, s.Vl)(h) : (0, s.U)(g, m, m.id === v)
            P = e ? (0, o.Z)(e) : void 0
          }
          const E = (0, l.Z)(
            'PickerSelectedItem',
            p,
            m?.isForum && 'forum-avatar',
            i && 'minimized',
            r && 'closeable'
          )
          return a.ZP.createElement(
            'div',
            {
              className: E,
              onClick: () => f(u),
              title: i ? P : void 0,
              dir: g.isRtl ? 'rtl' : void 0,
            },
            Z,
            !i && a.ZP.createElement('div', { className: 'item-name', dir: 'auto' }, P),
            r &&
              a.ZP.createElement(
                'div',
                { className: 'item-remove' },
                a.ZP.createElement('i', { className: 'icon-close' })
              )
          )
        })
      )
    },
    4863: (e, t, n) => {
      n.d(t, { Z: () => l })
      var a = n(60748),
        i = n(26926),
        r = n(46752)
      const s = {
          __html:
            '<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="var(--color-fill)"/></svg>',
        },
        o = {},
        l = (0, a.X$)((e) => {
          let { withGradient: t, big: n, className: l, onClick: c } = e
          const d = (0, a.Ye)(
            () =>
              t
                ? (function () {
                    const e = (0, i.Z)(o)
                    return {
                      __html: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${e}" x1="3" y1="63.5001" x2="84.1475" y2="-1.32262" gradientUnits="userSpaceOnUse"><stop stop-color="#6B93FF"/><stop offset="0.439058" stop-color="#976FFF"/><stop offset="1" stop-color="#E46ACE"/></linearGradient></defs><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="url(#${e})"/></svg>`,
                    }
                  })()
                : s,
            [t]
          )
          return a.ZP.createElement('i', {
            onClick: c,
            className: (0, r.Z)('PremiumIcon', l, t && 'gradient', c && 'clickable', n && 'big'),
            dangerouslySetInnerHTML: d,
            title: 'Premium',
          })
        })
    },
    6058: (e, t, n) => {
      n.d(t, { Z: () => v })
      var a = n(60748),
        i = n(33555),
        r = n(91713),
        s = n(11192),
        o = n(56112),
        l = n(46752),
        c = n(32340),
        d = n(59107),
        u = n(70172),
        m = n(68729),
        h = n(78780),
        p = n(2153)
      const v = (0, a.X$)(
        (0, i.c$)((e, t) => {
          let { userId: n, forceShowSelf: a } = t
          const { lastSyncTime: i } = e,
            r = (0, s.dy)(e, n)
          return {
            lastSyncTime: i,
            user: r,
            userStatus: (0, s.ss)(e, n),
            isSavedMessages: !a && r && r.isSelf,
            areMessagesLoaded: Boolean((0, s.Zw)(e, n)),
            animationLevel: e.settings.byKey.animationLevel,
          }
        })((e) => {
          let {
            typingStatus: t,
            avatarSize: n = 'medium',
            status: s,
            withDots: v,
            withMediaViewer: f,
            withUsername: g,
            withFullInfo: Z,
            withUpdatingStatus: P,
            withVideoAvatar: E,
            emojiStatusSize: y,
            noStatusOrTyping: C,
            noRtl: b,
            user: I,
            userStatus: w,
            isSavedMessages: N,
            areMessagesLoaded: S,
            animationLevel: k,
            lastSyncTime: M,
            adminMember: T,
          } = e
          const { loadFullUser: x, openMediaViewer: L, loadProfilePhotos: A } = (0, i.Sv)(),
            { id: F } = I || {}
          ;(0, a.d4)(() => {
            F && M && (Z && x({ userId: F }), f && A({ profileId: F }))
          }, [F, x, A, M, Z, f])
          const R = (0, a.I4)(
              (e, t) => {
                I &&
                  t &&
                  (e.stopPropagation(),
                  L({
                    avatarOwnerId: I.id,
                    mediaId: 0,
                    origin: 'jumbo' === n ? r.bZ.ProfileAvatar : r.bZ.MiddleHeaderAvatar,
                  }))
              },
              [I, n, L]
            ),
            D = (0, d.Z)(),
            O = (0, a.Ye)(() => I && g && (0, o.WS)(I), [I, g])
          if (!I) return
          const $ = T
            ? T.customTitle || D(T.isOwner ? 'GroupInfo.LabelOwner' : 'GroupInfo.LabelAdmin')
            : void 0
          return a.ZP.createElement(
            'div',
            { className: 'ChatInfo', dir: !b && D.isRtl ? 'rtl' : void 0 },
            a.ZP.createElement(u.Z, {
              key: I.id,
              size: n,
              user: I,
              isSavedMessages: N,
              onClick: f ? R : void 0,
              withVideo: E,
              animationLevel: k,
            }),
            a.ZP.createElement(
              'div',
              { className: 'info' },
              $
                ? a.ZP.createElement(
                    'div',
                    { className: 'info-name-title' },
                    a.ZP.createElement(p.Z, {
                      peer: I,
                      withEmojiStatus: !0,
                      emojiStatusSize: y,
                      isSavedMessages: N,
                    }),
                    $ && a.ZP.createElement('span', { className: 'custom-title' }, $)
                  )
                : a.ZP.createElement(p.Z, {
                    peer: I,
                    withEmojiStatus: !0,
                    emojiStatusSize: y,
                    isSavedMessages: N,
                  }),
              (s || (!N && !C)) &&
                (s
                  ? v
                    ? a.ZP.createElement(h.Z, { className: 'status', content: s })
                    : a.ZP.createElement('span', { className: 'status', dir: 'auto' }, (0, c.Z)(s))
                  : P && !S
                  ? a.ZP.createElement(h.Z, { className: 'status', content: D('Updating') })
                  : I
                  ? t
                    ? a.ZP.createElement(m.Z, { typingStatus: t })
                    : a.ZP.createElement(
                        'span',
                        { className: (0, l.Z)('status', (0, o.kM)(I, w) && 'online') },
                        O && a.ZP.createElement('span', { className: 'handle' }, O),
                        a.ZP.createElement(
                          'span',
                          { className: 'user-status', dir: 'auto' },
                          (0, o.Tq)(D, I, w)
                        )
                      )
                  : void 0)
            )
          )
        })
      )
    },
    16568: (e, t, n) => {
      n.d(t, { Z: () => D })
      var a = n(60748),
        i = n(33555),
        r = n(91713),
        s = n(863),
        o = n(70735),
        l = n(11192),
        c = n(56112),
        d = n(64963),
        u = n(46752),
        m = n(32340),
        h = n(6137),
        p = n(40647),
        v = n(59107),
        f = n(87204),
        g = n(2153),
        Z = n(2155),
        P = n(6202),
        E = n(60706),
        y = n(70692),
        C = n(15866),
        b = n(42797),
        I = n(49204),
        w = n(35148)
      const N = (0, a.X$)((e) => {
        let {
          chat: t,
          user: n,
          photo: i,
          isSavedMessages: r,
          canPlayVideo: o,
          lastSyncTime: l,
          onClick: d,
        } = e
        const h = (0, a.sO)(null),
          p = (0, v.Z)(),
          { isMobile: f } = (0, b.ZP)(),
          g = n && (0, c.NB)(n),
          N = t && (0, c.pK)(t.id),
          S = n || t,
          k =
            i ||
            n?.fullInfo?.personalPhoto ||
            S?.fullInfo?.profilePhoto ||
            n?.fullInfo?.fallbackPhoto,
          M = S && !r && !g && !N,
          { isVideo: T } = k || {},
          x = M && (0, c.RT)(S, 'normal', 'photo'),
          L = (0, P.Z)(x, void 0, void 0, l),
          A = M && k && !T && `photo${k.id}?size=c`,
          F = (0, P.Z)(A, void 0, void 0, l),
          R = M && k && T && (0, c.Dk)(k),
          D = (0, P.Z)(R, void 0, void 0, l) || F,
          [O, $] = (0, E.Z)(),
          B = Boolean(D && (!T || O)),
          U = (0, y.Z)(B),
          j = M && !B && !L && k?.thumbnail?.dataUri,
          X = (0, C.Z)(k?.thumbnail?.dataUri, !j, f && !s.vX),
          z = k || L || j
        let Y
        if (
          ((0, a.d4)(() => {
            h.current && !o && (h.current.currentTime = 0)
          }, [o]),
          r)
        )
          Y = a.ZP.createElement('i', { className: 'icon-avatar-saved-messages' })
        else if (g) Y = a.ZP.createElement('i', { className: 'icon-avatar-deleted-account' })
        else if (N) Y = a.ZP.createElement('i', { className: 'icon-reply-filled' })
        else if (z)
          Y = a.ZP.createElement(
            a.ZP.Fragment,
            null,
            j
              ? a.ZP.createElement('canvas', { ref: X, className: 'thumb' })
              : a.ZP.createElement('img', { src: L, className: 'thumb', alt: '' }),
            k &&
              (T
                ? a.ZP.createElement(w.Z, {
                    canPlay: o,
                    ref: h,
                    src: D,
                    className: (0, u.Z)('avatar-media', U),
                    muted: !0,
                    disablePictureInPicture: !0,
                    loop: !0,
                    playsInline: !0,
                    onReady: $,
                  })
                : a.ZP.createElement('img', {
                    src: D,
                    className: (0, u.Z)('avatar-media', U),
                    alt: '',
                  }))
          )
        else if (n) {
          const e = (0, c.Js)(n)
          Y = e ? (0, Z.Xv)(e, 2) : void 0
        } else if (t) {
          const e = (0, c.U)(p, t)
          Y = e && (0, Z.Xv)(e, (0, c.YC)(t.id) ? 2 : 1)
        } else
          Y = a.ZP.createElement(
            'div',
            { className: 'spinner-wrapper' },
            a.ZP.createElement(I.Z, { color: 'white' })
          )
        const H = (0, u.Z)(
          'ProfilePhoto',
          `color-bg-${(0, c.Rs)(n || t)}`,
          r && 'saved-messages',
          g && 'deleted-account',
          N && 'replies-bot-account',
          !r && !z && 'no-photo'
        )
        return a.ZP.createElement(
          'div',
          { className: H, onClick: z ? d : void 0 },
          'string' == typeof Y ? (0, m.Z)(Y, ['hq_emoji']) : Y
        )
      })
      var S = n(2255),
        k = n(2995),
        M = n(70172)
      const T = 'DwTvYuXwYiyH8P8HGyEw',
        x = 'a_azkhZzdtjRO5pWnNno',
        L = 'NVXGZpj7iFHkn7HaGsey',
        A = 'zPvRR0bFn0HFuXDjj1wU',
        F = 'YvztuUsksHhhNiXGWWbN',
        R = 'rcKy8wQruH_z84yRjAry',
        D = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { userId: n, forceShowSelf: a } = t
            const { connectionState: i } = e,
              r = (0, l.dy)(e, n),
              s = (0, l.ss)(e, n),
              o = (0, l.Z1)(e, n),
              c = !a && r && r.isSelf,
              { animationLevel: d } = e.settings.byKey,
              { mediaId: u, avatarOwnerId: m } = (0, l.jU)(e).mediaViewer,
              h = o?.isForum,
              { threadId: p } = (0, l.Bt)(e) || {},
              v = h && p ? o?.topics?.[p] : void 0
            return {
              connectionState: i,
              user: r,
              userStatus: s,
              chat: o,
              isSavedMessages: c,
              animationLevel: d,
              mediaId: u,
              avatarOwnerId: m,
              ...(v && { topic: v, messagesCount: (0, l.v_)(e, n, p) }),
            }
          })((e) => {
            let {
              forceShowSelf: t,
              canPlayVideo: n,
              user: l,
              userStatus: Z,
              chat: P,
              isSavedMessages: E,
              connectionState: y,
              animationLevel: C,
              mediaId: b,
              avatarOwnerId: I,
              topic: w,
              messagesCount: D,
            } = e
            const { loadFullUser: O, openMediaViewer: $, openPremiumModal: B } = (0, i.Sv)(),
              U = (0, v.Z)(),
              { id: j } = l || {},
              { id: X } = P || {},
              z = l?.photos || P?.photos || o.D,
              Y = (0, f.Z)(b),
              H = (0, f.Z)(I),
              [_, V] = (0, a.eJ)(!0),
              q = _ && C >= 1 ? (U.isRtl ? 'slide-optimized-rtl' : 'slide-optimized') : 'none',
              [K, W] = (0, a.eJ)(0),
              G = E || z.length <= 1 || 0 === K,
              J = E || z.length <= 1 || K === z.length - 1
            ;(0, a.d4)(() => {
              H && void 0 !== Y && void 0 === b && (V(!1), W(Y))
            }, [b, Y, H]),
              (0, a.d4)(() => {
                K > z.length && W(Math.max(0, z.length - 1))
              }, [K, z.length]),
              (0, a.d4)(() => {
                'connectionStateReady' === y && j && !t && O({ userId: j })
              }, [j, O, y, t]),
              (function (e, t, n) {
                ;(0, a.d4)(() => {
                  t.slice(n, n + 4).forEach((e) => {
                    p.UV(`photo${e.id}?size=c`) || p.he(`photo${e.id}?size=c`, h.IU.BlobUrl)
                  })
                }, [n, t])
              })(0, z, K)
            const Q = (0, a.I4)(() => {
                $({
                  avatarOwnerId: j || X,
                  mediaId: K,
                  origin: t ? r.bZ.SettingsAvatar : r.bZ.ProfileAvatar,
                })
              }, [$, j, X, K, t]),
              ee = (0, a.I4)(() => {
                l && B({ fromUserId: l.id })
              }, [B, l]),
              te = (0, a.I4)(() => {
                G || (V(!0), W(K - 1))
              }, [K, G]),
              ne = (0, a.I4)(() => {
                J || (V(!0), W(K + 1))
              }, [K, J])
            var ae, ie
            if (
              ((0, a.d4)(() => {
                const e = document.querySelector('.YvztuUsksHhhNiXGWWbN')
                if (e)
                  return (0, d.sf)(e, {
                    selectorToPreventScroll: '.Profile, .settings-content',
                    onSwipe: s.$b
                      ? (e, t) => (t === d.eM.Right ? (te(), !0) : t === d.eM.Left && (ne(), !0))
                      : void 0,
                  })
              }, [ne, te]),
              l || P)
            )
              return w
                ? a.ZP.createElement(
                    'div',
                    { className: 'Dlmqly7y8H7bCtaGNFIO' },
                    a.ZP.createElement(k.Z, {
                      topic: w,
                      size: 120,
                      className: 'Bv321I_wzF0fdNw63dxB',
                      letterClassName: 'MwfYq2acbtWIp8pGf9kI',
                      noLoopLimit: !0,
                    }),
                    a.ZP.createElement(
                      'h3',
                      { className: 'eMDgnAzVXSNlBUAgdBPK', dir: U.isRtl ? 'rtl' : void 0 },
                      (0, m.Z)(w.title)
                    ),
                    a.ZP.createElement(
                      'p',
                      { className: 'YrvPEuAvDVR3BLU68aIN' },
                      D ? U('Chat.Title.Topic', D, 'i') : U('lng_forum_no_messages')
                    )
                  )
                : a.ZP.createElement(
                    'div',
                    {
                      className: (0, u.Z)('ProfileInfo', t && 'M4GWpBd7i7ViA2xNTvH4'),
                      dir: U.isRtl ? 'rtl' : void 0,
                    },
                    a.ZP.createElement(
                      'div',
                      { className: F },
                      (function () {
                        if (!(E || !z || z.length <= 1))
                          return a.ZP.createElement(
                            'div',
                            { className: 'UXIlP1uQpXVG_DNB26iC' },
                            z.map((e, t) =>
                              a.ZP.createElement('span', {
                                className: (0, u.Z)(
                                  'Ay_dhoiSuGWjH2hVOy7i',
                                  t === K && 'xWzV6TAYO756R70Pzfmb'
                                ),
                              })
                            )
                          )
                      })(),
                      !t &&
                        l?.fullInfo?.personalPhoto &&
                        a.ZP.createElement(
                          'div',
                          { className: (0, u.Z)(x, G && A) },
                          a.ZP.createElement(
                            'div',
                            { className: L },
                            U(
                              l.fullInfo.personalPhoto.isVideo
                                ? 'UserInfo.CustomVideo'
                                : 'UserInfo.CustomPhoto'
                            )
                          )
                        ),
                      t &&
                        l?.fullInfo?.fallbackPhoto &&
                        a.ZP.createElement(
                          'div',
                          { className: (0, u.Z)(x, (G || J) && A) },
                          a.ZP.createElement(
                            'div',
                            {
                              className: L,
                              onClick: function () {
                                G && (V(!0), W(z.length - 1))
                              },
                            },
                            !J &&
                              a.ZP.createElement(M.Z, {
                                photo: l.fullInfo.fallbackPhoto,
                                className: 'IG9hcS9__jiZjU59BA1U',
                                size: 'mini',
                              }),
                            U(
                              l.fullInfo.fallbackPhoto.isVideo
                                ? 'UserInfo.PublicVideo'
                                : 'UserInfo.PublicPhoto'
                            )
                          )
                        ),
                      a.ZP.createElement(S.Z, { activeKey: K, name: q }, re),
                      !G &&
                        a.ZP.createElement('button', {
                          type: 'button',
                          dir: U.isRtl ? 'rtl' : void 0,
                          className: (0, u.Z)(R, 'IrGNErqISNgGY687XP5I'),
                          'aria-label': U('AccDescrPrevious'),
                          onClick: te,
                        }),
                      !J &&
                        a.ZP.createElement('button', {
                          type: 'button',
                          dir: U.isRtl ? 'rtl' : void 0,
                          className: (0, u.Z)(R, 'mERrfFjC7wKBhpVCjGgg'),
                          'aria-label': U('Next'),
                          onClick: ne,
                        })
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'uHKuP7J67YWxko9FiDo9', dir: U.isRtl ? 'rtl' : 'auto' },
                      (l || P) &&
                        a.ZP.createElement(g.Z, {
                          peer: l || P,
                          withEmojiStatus: !0,
                          emojiStatusSize: 24,
                          isSavedMessages: E,
                          onEmojiStatusClick: ee,
                          noLoopLimit: !0,
                        }),
                      !E &&
                        (l
                          ? a.ZP.createElement(
                              'div',
                              { className: (0, u.Z)(T, 'status', (0, c.kM)(l, Z) && 'online') },
                              a.ZP.createElement(
                                'span',
                                { className: 'user-status', dir: 'auto' },
                                (0, c.Tq)(U, l, Z)
                              )
                            )
                          : a.ZP.createElement(
                              'span',
                              { className: (0, u.Z)(T, 'status'), dir: 'auto' },
                              (0, c.eA)(P)
                                ? U(
                                    'Subscribers',
                                    null !== (ae = P.membersCount) && void 0 !== ae ? ae : 0,
                                    'i'
                                  )
                                : U(
                                    'Members',
                                    null !== (ie = P.membersCount) && void 0 !== ie ? ie : 0,
                                    'i'
                                  )
                            ))
                    )
                  )
            function re(e) {
              const t = !E && z.length > 0 ? z[K] : void 0
              return a.ZP.createElement(N, {
                key: K,
                user: l,
                chat: P,
                photo: t,
                isSavedMessages: E,
                canPlayVideo: Boolean(e && n),
                onClick: Q,
              })
            }
          })
        )
    },
    48198: (e, t, n) => {
      n.d(t, { Z: () => u })
      var a = n(60748),
        i = n(6137),
        r = n(46752),
        s = n(56112),
        o = n(70692),
        l = n(6202),
        c = n(96459),
        d = n(69123)
      const u = (0, a.X$)((e) => {
        let {
          reaction: t,
          availableReactions: n,
          className: u,
          size: m,
          observeIntersection: h,
        } = e
        const p = 'documentId' in t,
          v = (0, a.Ye)(() => n?.find((e) => (0, s.Hl)(e.reaction, t)), [n, t]),
          f = v?.staticIcon?.id,
          g = (0, l.Z)(`document${f}`, !f, i.IU.BlobUrl),
          Z = (0, o.Z)(g)
        return p
          ? a.ZP.createElement(c.Z, {
              documentId: t.documentId,
              className: (0, r.Z)('ReactionStaticEmoji', u),
              size: m,
              observeIntersectionForPlaying: h,
            })
          : a.ZP.createElement('img', {
              className: (0, r.Z)('ReactionStaticEmoji', Z, u),
              style: m ? `width: ${m}px; height: ${m}px` : void 0,
              src: g || d,
              alt: v?.title,
            })
      })
    },
    66534: (e, t, n) => {
      n.d(t, { Z: () => d })
      var a = n(60748),
        i = n(33555),
        r = n(59107),
        s = n(13103),
        o = n(231),
        l = n(14434),
        c = n(97687)
      const d = (0, a.X$)((e) => {
        let {
          isOpen: t,
          subject: n = 'messages',
          chatId: d,
          photo: u,
          messageIds: m,
          onClose: h,
          onCloseAnimationEnd: p,
        } = e
        const {
            reportMessages: v,
            reportPeer: f,
            reportProfilePhoto: g,
            exitMessageSelectMode: Z,
          } = (0, i.Sv)(),
          [P, E] = (0, a.eJ)('spam'),
          [y, C] = (0, a.eJ)(''),
          b = (0, a.I4)(() => {
            switch (n) {
              case 'messages':
                v({ messageIds: m, reason: P, description: y }), Z()
                break
              case 'peer':
                f({ chatId: d, reason: P, description: y })
                break
              case 'media':
                g({ chatId: d, photo: u, reason: P, description: y })
            }
            h()
          }, [y, Z, m, u, h, v, P, d, g, f, n]),
          I = (0, a.I4)((e) => {
            E(e)
          }, []),
          w = (0, a.I4)((e) => {
            C(e.target.value)
          }, []),
          N = (0, r.Z)(),
          S = (0, a.Ye)(
            () => [
              { value: 'spam', label: N('lng_report_reason_spam') },
              { value: 'violence', label: N('lng_report_reason_violence') },
              { value: 'pornography', label: N('lng_report_reason_pornography') },
              { value: 'childAbuse', label: N('lng_report_reason_child_abuse') },
              { value: 'copyright', label: N('ReportPeer.ReasonCopyright') },
              { value: 'illegalDrugs', label: 'Illegal Drugs' },
              { value: 'personalDetails', label: 'Personal Details' },
              { value: 'other', label: N('lng_report_reason_other') },
            ],
            [N]
          )
        if (('messages' === n && !m) || ('peer' === n && !d) || ('media' === n && (!d || !u)))
          return
        const k = N('messages' === n ? 'lng_report_message_title' : 'ReportPeer.Report')
        return a.ZP.createElement(
          s.Z,
          {
            isOpen: t,
            onClose: h,
            onEnter: t ? b : void 0,
            onCloseAnimationEnd: p,
            className: 'narrow',
            title: k,
          },
          a.ZP.createElement(l.Z, { name: 'report-message', options: S, onChange: I, selected: P }),
          a.ZP.createElement(c.Z, {
            label: N('lng_report_reason_description'),
            value: y,
            onChange: w,
          }),
          a.ZP.createElement(
            'div',
            { className: 'dialog-buttons' },
            a.ZP.createElement(
              o.Z,
              { color: 'danger', className: 'confirm-dialog-button', isText: !0, onClick: b },
              N('lng_report_button')
            ),
            a.ZP.createElement(
              o.Z,
              { className: 'confirm-dialog-button', isText: !0, onClick: h },
              N('Cancel')
            )
          )
        )
      })
    },
    73547: (e, t, n) => {
      n.d(t, { Z: () => P })
      var a = n(60748),
        i = n(33555),
        r = n(46752),
        s = n(30386),
        o = n(863),
        l = n(82267),
        c = n(3657),
        d = n(59107),
        u = n(17240),
        m = n(63394),
        h = n(70113),
        p = n(36765),
        v = n(231),
        f = n(52328),
        g = n(58964)
      const Z = [
          { title: 'SetTimeoutFor.Hours', value: 1, arg: 3600 },
          { title: 'SetTimeoutFor.Hours', value: 2, arg: 7200 },
          { title: 'SetTimeoutFor.Hours', value: 8, arg: 28800 },
          { title: 'SetTimeoutFor.Days', value: 1, arg: 86400 },
          { title: 'SetTimeoutFor.Days', value: 2, arg: 172800 },
        ],
        P = (0, a.X$)((e) => {
          let {
            sticker: t,
            size: n,
            noAnimate: P,
            title: E,
            className: y,
            noContextMenu: C,
            isSavedMessages: b,
            isStatusPicker: I,
            canViewSet: w,
            observeIntersection: N,
            isCurrentUserPremium: S,
            noShowPremium: k,
            sharedCanvasRef: M,
            onClick: T,
            clickArg: x,
            onFaveClick: L,
            onUnfaveClick: A,
            onRemoveRecentClick: F,
            onContextMenuOpen: R,
            onContextMenuClose: D,
            onContextMenuClick: O,
          } = e
          const { openStickerSet: $, openPremiumModal: B, setEmojiStatus: U } = (0, i.Sv)(),
            j = (0, a.sO)(null),
            X = (0, a.sO)(null),
            z = (0, d.Z)(),
            Y = t.shouldUseTextColor,
            { rgbColor: H } = (0, h.Z)(j, !Y),
            { id: _, isCustomEmoji: V, hasEffect: q, stickerSetInfo: K } = t,
            W = !S && q,
            G = (0, c.Op)(j, N),
            J = G,
            Q = G && !P,
            {
              isContextMenuOpen: ee,
              contextMenuPosition: te,
              handleBeforeContextMenu: ne,
              handleContextMenu: ae,
              handleContextMenuClose: ie,
              handleContextMenuHide: re,
            } = (0, u.Z)(j),
            se = Boolean(!C && te),
            oe = (0, a.I4)(() => j.current, []),
            le = (0, a.I4)(() => j.current.closest('.custom-scroll, .no-scrollbar'), []),
            ce = (0, a.I4)(
              () => (I ? X.current : j.current.querySelector('.sticker-context-menu .bubble')),
              [I]
            ),
            {
              positionX: de,
              positionY: ue,
              transformOriginX: me,
              transformOriginY: he,
              style: pe,
            } = (0, m.Z)(te, oe, le, ce, () => ({ withPortal: I }))
          ;(0, a.d4)(() => {
            ee ? R?.() : D?.()
          }, [ee, D, R]),
            (0, a.d4)(() => {
              G || ie()
            }, [ie, G])
          const ve = (0, a.I4)(
              (e) => {
                e.stopPropagation(), e.preventDefault(), F(t)
              },
              [F, t]
            ),
            fe = (0, a.I4)(() => {
              F(t)
            }, [F, t]),
            ge = (0, a.I4)(() => {
              A(t)
            }, [A, t]),
            Ze = (0, a.I4)(() => {
              L(t)
            }, [L, t]),
            Pe = (0, a.I4)(() => {
              T?.(x, !0)
            }, [x, T]),
            Ee = (0, a.I4)(() => {
              T?.(x, void 0, !0)
            }, [x, T]),
            ye = (0, a.I4)(() => {
              $({ stickerSetInfo: K })
            }, [$, K]),
            Ce = (0, a.I4)(
              function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                e.preventDefault(),
                  e.stopPropagation(),
                  ie(),
                  O?.(),
                  U({ emojiStatus: t, expires: Date.now() / 1e3 + n + (0, l.Qj)() })
              },
              [U, t, ie, O]
            ),
            be = !o.$b && F,
            Ie = (0, r.Z)(
              'StickerButton',
              T && 'interactive',
              V && 'custom-emoji',
              `sticker-button-${_}`,
              y
            ),
            we = (0, a.Ye)(() => {
              if (!se || C || (V && !I)) return []
              const e = []
              return V
                ? (Z.forEach((t) => {
                    e.push(
                      a.ZP.createElement(
                        g.Z,
                        { onClick: Ce, clickArg: t.arg },
                        z(t.title, t.value, 'i')
                      )
                    )
                  }),
                  e)
                : (A &&
                    e.push(
                      a.ZP.createElement(
                        g.Z,
                        { icon: 'favorite', onClick: ge },
                        z('Stickers.RemoveFromFavorites')
                      )
                    ),
                  L &&
                    e.push(
                      a.ZP.createElement(
                        g.Z,
                        { icon: 'favorite', onClick: Ze },
                        z('Stickers.AddToFavorites')
                      )
                    ),
                  !W &&
                    T &&
                    (b ||
                      e.push(
                        a.ZP.createElement(
                          g.Z,
                          { onClick: Pe, icon: 'muted' },
                          z('SendWithoutSound')
                        )
                      ),
                    e.push(
                      a.ZP.createElement(
                        g.Z,
                        { onClick: Ee, icon: 'calendar' },
                        z(b ? 'SetReminder' : 'ScheduleMessage')
                      )
                    )),
                  w &&
                    e.push(
                      a.ZP.createElement(
                        g.Z,
                        { onClick: ye, icon: 'stickers' },
                        z('ViewPackPreview')
                      )
                    ),
                  F &&
                    e.push(
                      a.ZP.createElement(
                        g.Z,
                        { icon: 'delete', onClick: fe },
                        z('DeleteFromRecent')
                      )
                    ),
                  e)
            }, [se, C, V, I, A, L, W, T, w, F, Ce, z, ge, Ze, b, Ee, Pe, ye, fe])
          return a.ZP.createElement(
            'div',
            {
              ref: j,
              className: Ie,
              title: E || t?.emoji,
              'data-sticker-id': _,
              onMouseDown: (e) => {
                ;(0, s.b)(e), ne(e)
              },
              onClick: () => {
                ee || (W ? B({ initialSection: 'premium_stickers' }) : T?.(x))
              },
              onContextMenu: ae,
            },
            a.ZP.createElement(p.Z, {
              containerRef: j,
              sticker: t,
              isSmall: !0,
              size: n,
              shouldLoop: !0,
              shouldPreloadPreview: !0,
              noLoad: !J,
              noPlay: !Q,
              withSharedAnimation: !0,
              sharedCanvasRef: M,
              customColor: H,
            }),
            !k &&
              W &&
              a.ZP.createElement(
                'div',
                { className: 'sticker-locked' },
                a.ZP.createElement('i', { className: 'icon-lock-badge' })
              ),
            !k &&
              q &&
              !W &&
              a.ZP.createElement(
                'div',
                { className: 'sticker-premium' },
                a.ZP.createElement('i', { className: 'icon-premium' })
              ),
            be &&
              a.ZP.createElement(
                v.Z,
                { className: 'sticker-remove-button', color: 'dark', round: !0, onClick: ve },
                a.ZP.createElement('i', { className: 'icon-close' })
              ),
            Boolean(we.length) &&
              a.ZP.createElement(
                f.Z,
                {
                  ref: X,
                  isOpen: ee,
                  transformOriginX: me,
                  transformOriginY: he,
                  positionX: de,
                  positionY: ue,
                  style: pe,
                  className: 'sticker-context-menu',
                  autoClose: !0,
                  withPortal: I,
                  onClose: ie,
                  onCloseAnimationEnd: re,
                },
                we
              )
          )
        })
    },
    2995: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(96459),
        r = n(58987)
      const s = (0, a.X$)((e) => {
        let {
          topic: t,
          className: n,
          letterClassName: s,
          size: o,
          noLoopLimit: l,
          observeIntersection: c,
          onClick: d,
        } = e
        return t.iconEmojiId
          ? a.ZP.createElement(i.Z, {
              documentId: t.iconEmojiId,
              className: n,
              size: o,
              observeIntersectionForPlaying: c,
              loopLimit: l ? void 0 : 2,
              onClick: d,
            })
          : a.ZP.createElement(r.Z, {
              iconColor: t.iconColor,
              title: t.title,
              topicId: t.id,
              className: n,
              letterClassName: s,
              onClick: d,
            })
      })
    },
    68729: (e, t, n) => {
      n.d(t, { Z: () => d })
      var a = n(60748),
        i = n(33555),
        r = n(11192),
        s = n(56112),
        o = n(32340),
        l = n(59107),
        c = n(78780)
      const d = (0, a.X$)(
        (0, i.c$)((e, t) => {
          let { typingStatus: n } = t
          return n.userId ? { typingUser: (0, r.dy)(e, n.userId) } : {}
        })((e) => {
          let { typingStatus: t, typingUser: n } = e
          const i = (0, l.Z)(),
            r = n && !n.isSelf && (0, s.Vl)(n),
            d = i(t.action)
              .replace('{user}', '')
              .replace('{emoji}', t.emoji || '')
              .trim()
          return a.ZP.createElement(
            'p',
            { className: 'typing-status', dir: i.isRtl ? 'rtl' : 'auto' },
            r && a.ZP.createElement('span', { className: 'sender-name', dir: 'auto' }, (0, o.Z)(r)),
            a.ZP.createElement(c.Z, { content: d })
          )
        })
      )
    },
    45418: (e, t, n) => {
      n.d(t, { Z: () => p })
      var a = n(60748),
        i = n(56112),
        r = n(46752),
        s = n(48035),
        o = n(32340),
        l = n(790),
        c = n(59107),
        d = n(996),
        u = n(13709),
        m = n(8337),
        h = n(10088)
      const p = (0, a.X$)((e) => {
        let {
          message: t,
          senderTitle: n,
          isProtected: p,
          observeIntersection: v,
          onMessageClick: f,
        } = e
        const g = (0, c.Z)()
        let Z = (0, i.s1)(t)
        if (!Z) {
          const e = (0, i.T7)(t)
          if (e) {
            const { url: n, domain: a } = e
            Z = {
              siteName: a.replace(/^www./, ''),
              url: n.includes('://') ? n : n.includes('@') ? `mailto:${n}` : `http://${n}`,
              formattedDescription:
                (0, i.UD)(t) !== n ? (0, d.e)(g, t, void 0, void 0, 170) : void 0,
            }
          }
        }
        const P = (0, a.I4)(() => {
          f(t.id, t.chatId)
        }, [f, t.id, t.chatId])
        if (!Z) return
        const {
            siteName: E,
            url: y,
            displayUrl: C,
            title: b,
            description: I,
            formattedDescription: w,
            photo: N,
            video: S,
          } = Z,
          k = !n && I && (0, s.Z)(I, 170),
          M = (0, r.Z)('WebLink scroll-item', !N && !S && 'without-media'),
          T = y.replace('mailto:', '') || C
        return a.ZP.createElement(
          'div',
          { className: M, 'data-initial': (E || C)[0], dir: g.isRtl ? 'rtl' : void 0 },
          N && a.ZP.createElement(u.Z, { message: t, isProtected: p, observeIntersection: v }),
          a.ZP.createElement(
            'div',
            { className: 'content' },
            a.ZP.createElement(
              m.Z,
              { isRtl: g.isRtl, className: 'site-title', onClick: P },
              (0, o.Z)(b || E || C)
            ),
            (k || w) &&
              a.ZP.createElement(
                m.Z,
                { isRtl: g.isRtl, className: 'site-description', onClick: P },
                w || (k && (0, o.Z)(k))
              ),
            a.ZP.createElement(h.Z, { url: y, className: 'site-name', text: T, isRtl: g.isRtl }),
            n && a.ZP.createElement('div', { className: 'sender-name' }, (0, o.Z)(n))
          ),
          n &&
            a.ZP.createElement(
              'div',
              { className: 'message-date' },
              a.ZP.createElement(
                m.Z,
                { className: 'date', onClick: P, isRtl: g.isRtl },
                (0, l.VX)(g, 1e3 * t.date)
              )
            )
        )
      })
    },
    996: (e, t, n) => {
      n.d(t, { X: () => l, e: () => c })
      var a = n(6137),
        i = n(56112),
        r = n(32340),
        s = n(20230),
        o = n(48035)
      function l(e, t, n, a, r, l, c) {
        const { text: d, entities: u } = e.content.text || {}
        if (!d) {
          const t = (0, i.UD)(e)
          return t ? [(0, o.Z)(t, r)] : void 0
        }
        return (0, s.H)((0, o.Z)(d, r), u, t, n, c, e.id, a, l)
      }
      function c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = arguments.length > 3 ? arguments[3] : void 0,
          c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.lN
        const { entities: d } = t.content.text || {},
          u = d?.some((e) => e.type === a.Vv.Spoiler),
          m = d?.some((e) => e.type === a.Vv.CustomEmoji)
        if (!u && !m) {
          const a = (0, o.Z)((0, i.MK)(e, t, n), c)
          return s ? (0, r.Z)(a, ['emoji', 'highlight'], { highlight: s }) : (0, r.Z)(a)
        }
        const h = !n && (0, i.Eb)(t),
          p = h ? `${h} ` : '',
          v = l(t, s, void 0, !0, c),
          f = (0, i.Kk)(e, t, v)
        return [...(0, r.Z)(p), ...(Array.isArray(f) ? f : [f])].filter(Boolean)
      }
    },
    50742: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(99203),
        r = n(48778)
      const s = (0, a.X$)((e) => {
        const { isOpen: t } = e,
          n = (0, r.Z)(i.gl.Extra, 'ChatFolderModal', !t)
        return n ? a.ZP.createElement(n, e) : void 0
      })
    },
    98456: (e, t, n) => {
      n.d(t, { Z: () => l })
      var a = n(60748),
        i = n(2155),
        r = n(46752),
        s = n(40126),
        o = n(34076)
      const l = (0, a.X$)((e) => {
        let {
          topic: t,
          chat: n,
          isPinned: l,
          isMuted: c,
          shouldShowOnlyMostImportant: d,
          wasTopicOpened: u,
          forceHidden: m,
        } = e
        const { unreadMentionsCount: h = 0, unreadReactionsCount: p = 0 } = n.isForum ? {} : n,
          v = !l && t && !u,
          f = n.isForum && !t,
          g = (0, a.Ye)(
            () =>
              f && n?.topics
                ? Object.values(n.topics).filter((e) => {
                    let { unreadCount: t } = e
                    return t
                  })
                : void 0,
            [n, f]
          ),
          Z = (0, a.Ye)(
            () =>
              f
                ? (c && g?.filter((e) => !1 === e.isMuted).length) || g?.length
                : (t || n).unreadCount,
            [n, t, g, f, c]
          ),
          P = (0, a.Ye)(() => {
            const e = n.topics && Object.values(n.topics).some((e) => e.isMuted && e.unreadCount)
            return c || (n.topics && !e)
          }, [n, c]),
          E = !t && n.hasUnreadMark,
          y = !m && Boolean(Z || h || E || l || p || v),
          C = Boolean(Z || E),
          b = (0, r.Z)('Badge', P && 'muted', !C && l && 'pinned', C && 'unread')
        return a.ZP.createElement(
          s.Z,
          { isCustom: !0, className: 'Badge-transition', isOpen: y },
          (function () {
            const e =
                p &&
                a.ZP.createElement(
                  'div',
                  { className: (0, r.Z)('Badge reaction', P && 'muted') },
                  a.ZP.createElement('i', { className: 'icon-heart' })
                ),
              t =
                h &&
                a.ZP.createElement(
                  'div',
                  { className: 'Badge mention' },
                  a.ZP.createElement('i', { className: 'icon-mention' })
                ),
              n =
                v &&
                a.ZP.createElement('div', { className: (0, r.Z)('Badge unopened', P && 'muted') }),
              s =
                E || Z
                  ? a.ZP.createElement(
                      'div',
                      { className: b },
                      !E && a.ZP.createElement(o.Z, { text: (0, i.bi)(Z) })
                    )
                  : void 0,
              c =
                l &&
                !s &&
                !t &&
                !e &&
                a.ZP.createElement(
                  'div',
                  { className: b },
                  a.ZP.createElement('i', { className: 'icon-pinned-chat' })
                ),
              u = [n, e, t, s, c].filter(Boolean)
            if (0 !== u.length)
              return 1 === u.length
                ? u[0]
                : d
                ? [t, s, e, c].filter(Boolean)[0]
                : a.ZP.createElement('div', { className: 'Badge-wrapper' }, u)
          })()
        )
      })
    },
    46915: (e, t, n) => {
      n.d(t, { Z: () => q })
      var a = n(60748),
        i = n(33555),
        r = n(91713),
        s = n(83716),
        o = n(863),
        l = n(16974),
        c = n(46752),
        d = n(27407),
        u = n(95616),
        m = n(3657),
        h = n(73541),
        p = n(67360),
        v = n(61204),
        f = n(21273),
        g = n(34288),
        Z = n(6137),
        P = n(56112),
        E = n(11192),
        y = n(15780),
        C = n(41470),
        b = n(60706),
        I = n(44499),
        w = n(42797),
        N = n(31876),
        S = n(70172),
        k = n(76844),
        M = n(40329),
        T = n(66534),
        x = n(2153),
        L = n(50742)
      const A = (0, a.X$)((e) => {
        let { isSelected: t, isActive: n, isMobile: i } = e
        return a.ZP.createElement(
          'div',
          { className: (0, c.Z)('ChatCallStatus', n && 'active', t && !i && 'selected') },
          a.ZP.createElement(
            'div',
            { className: 'indicator' },
            a.ZP.createElement('div', null),
            a.ZP.createElement('div', null),
            a.ZP.createElement('div', null)
          )
        )
      })
      var F = n(98456)
      const R = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, E.Z1)(e, n)
            return a
              ? {
                  chat: a,
                  isMuted: (0, P.i4)(a, (0, E.dZ)(e), (0, E.NJ)(e)),
                  isForumPanelActive: (0, E.nd)(e),
                }
              : {}
          })((e) => {
            let { chat: t, isMuted: n, isForumPanelActive: i } = e
            return (
              t &&
              a.ZP.createElement(
                'div',
                { className: 'avatar-badge-wrapper' },
                a.ZP.createElement(F.Z, {
                  chat: t,
                  isMuted: n,
                  shouldShowOnlyMostImportant: !0,
                  forceHidden: !i,
                })
              )
            )
          })
        ),
        D = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, E.Z1)(e, n)
            if (!a) return {}
            const { senderId: i, replyToMessageId: r, isOutgoing: s } = a.lastMessage || {},
              o = i ? (0, E.dy)(e, i) || (0, E.Z1)(e, i) : void 0,
              l = a.lastMessage ? (0, P.N5)(a.lastMessage) : void 0,
              c = l && r ? (0, E.hj)(e, a.id, r) : void 0,
              { targetUserIds: d, targetChatId: u } = l || {},
              m = (0, P.zX)(a),
              { chatId: h, threadId: p, type: v } = (0, E.Bt)(e) || {},
              f = n === h && p === Z._f,
              g = n === (0, E.jU)(e).forumPanelChatId,
              y = m ? (0, E.dy)(e, m) : void 0,
              C = m ? (0, E.ss)(e, m) : void 0,
              b = a.lastMessage && (0, E.p$)(e, a.lastMessage),
              I = (0, E.WP)(e, n, Z._f, 'typingStatus')
            return {
              chat: a,
              isMuted: (0, P.i4)(a, (0, E.dZ)(e), (0, E.NJ)(e)),
              lastMessageSender: o,
              actionTargetUserIds: d,
              actionTargetChatId: u,
              actionTargetMessage: c,
              draft: (0, E.Ms)(e, n, Z._f),
              animationLevel: e.settings.byKey.animationLevel,
              isSelected: f,
              isSelectedForum: g,
              canScrollDown: f && 'thread' === v,
              canChangeFolder: (e.chatFolders.orderedIds?.length || 0) > 1,
              lastSyncTime: e.lastSyncTime,
              ...(s && a.lastMessage && { lastMessageOutgoingStatus: (0, E.dT)(e, a.lastMessage) }),
              user: y,
              userStatus: C,
              lastMessageTopic: b,
              typingStatus: I,
            }
          })((e) => {
            let {
              chatId: t,
              folderId: n,
              orderDiff: r,
              animationType: s,
              isPinned: l,
              observeIntersection: d,
              chat: u,
              isMuted: h,
              user: p,
              userStatus: v,
              actionTargetUserIds: f,
              lastMessageSender: g,
              lastMessageOutgoingStatus: E,
              actionTargetMessage: D,
              actionTargetChatId: O,
              offsetTop: $,
              draft: B,
              animationLevel: U,
              isSelected: j,
              isSelectedForum: X,
              canScrollDown: z,
              canChangeFolder: Y,
              lastSyncTime: H,
              lastMessageTopic: _,
              typingStatus: V,
              onDragEnter: q,
            } = e
            const {
                openChat: K,
                focusLastMessage: W,
                loadTopics: G,
                openForumPanel: J,
              } = (0, i.Sv)(),
              { isMobile: Q } = (0, w.ZP)(),
              [ee, te, ne] = (0, b.Z)(),
              [ae, ie, re] = (0, b.Z)(),
              [se, oe, le] = (0, b.Z)(),
              [ce, de, ue] = (0, b.Z)(),
              [me, he, pe] = (0, b.Z)(),
              [ve, fe, ge] = (0, b.Z)(),
              { lastMessage: Ze, isForum: Pe } = u || {},
              { renderSubtitle: Ee, ref: ye } = (0, I.Z)({
                chat: u,
                chatId: t,
                lastMessage: Ze,
                typingStatus: V,
                draft: B,
                actionTargetMessage: D,
                actionTargetUserIds: f,
                actionTargetChatId: O,
                lastMessageTopic: _,
                lastMessageSender: g,
                observeIntersection: d,
                animationType: s,
                animationLevel: U,
                orderDiff: r,
              }),
              Ce = (0, a.I4)(() => {
                Pe
                  ? J({ chatId: t }, { forceOnHeavyAnimation: !0 })
                  : (K({ id: t, shouldReplaceHistory: !0 }, { forceOnHeavyAnimation: !0 }),
                    j && z && W())
              }, [Pe, K, t, j, z, J, W]),
              be = (0, a.I4)(
                (e) => {
                  e.preventDefault(), q?.(t)
                },
                [t, q]
              ),
              Ie = (0, a.I4)(() => {
                de(), te()
              }, [de, te]),
              we = (0, a.I4)(() => {
                he(), ie()
              }, [he, ie]),
              Ne = (0, a.I4)(() => {
                fe(), oe()
              }, [fe, oe]),
              Se = (0, C.Z)({
                chat: u,
                user: p,
                handleDelete: Ie,
                handleChatFolderChange: we,
                handleReport: Ne,
                folderId: n,
                isPinned: l,
                isMuted: h,
                canChangeFolder: Y,
              }),
              ke = (0, m.Op)(ye, d)
            if (
              ((0, a.d4)(() => {
                ke && H && Pe && u && void 0 === u.listedTopicIds && G({ chatId: t })
              }, [u, t, Pe, ke, H, G]),
              !u)
            )
              return
            const Me = (0, c.Z)(
              'Chat chat-item-clickable',
              (0, P.YC)(t) ? 'private' : 'group',
              Pe && 'forum',
              j && 'selected',
              X && 'selected-forum'
            )
            return a.ZP.createElement(
              N.Z,
              {
                ref: ye,
                className: Me,
                href: o.IT ? `#${(0, y.tB)(t, 'thread', Z._f)}` : void 0,
                style: `top: ${$}px`,
                ripple: !Pe && !Q,
                contextActions: Se,
                onClick: Ce,
                onDragEnter: be,
                withPortalForMenu: !0,
              },
              a.ZP.createElement(
                'div',
                { className: 'status' },
                a.ZP.createElement(S.Z, {
                  chat: u,
                  user: p,
                  userStatus: v,
                  isSavedMessages: p?.isSelf,
                  lastSyncTime: H,
                  animationLevel: U,
                  withVideo: !0,
                  observeIntersection: d,
                }),
                a.ZP.createElement(R, { chatId: t }),
                u.isCallActive &&
                  u.isCallNotEmpty &&
                  a.ZP.createElement(A, { isMobile: Q, isSelected: j, isActive: 0 !== U })
              ),
              a.ZP.createElement(
                'div',
                { className: 'info' },
                a.ZP.createElement(
                  'div',
                  { className: 'info-row' },
                  a.ZP.createElement(x.Z, {
                    peer: p || u,
                    withEmojiStatus: !0,
                    isSavedMessages: t === p?.id && p?.isSelf,
                    observeIntersection: d,
                  }),
                  h && a.ZP.createElement('i', { className: 'icon-muted' }),
                  a.ZP.createElement('div', { className: 'separator' }),
                  u.lastMessage &&
                    a.ZP.createElement(k.Z, { message: u.lastMessage, outgoingStatus: E })
                ),
                a.ZP.createElement(
                  'div',
                  { className: 'subtitle' },
                  Ee(),
                  a.ZP.createElement(F.Z, { chat: u, isPinned: l, isMuted: h })
                )
              ),
              ce &&
                a.ZP.createElement(M.Z, {
                  isOpen: ee,
                  onClose: ne,
                  onCloseAnimationEnd: ue,
                  chat: u,
                }),
              me &&
                a.ZP.createElement(L.Z, {
                  isOpen: ae,
                  onClose: re,
                  onCloseAnimationEnd: pe,
                  chatId: t,
                }),
              ve &&
                a.ZP.createElement(T.Z, {
                  isOpen: se,
                  onClose: le,
                  onCloseAnimationEnd: ge,
                  chatId: t,
                  subject: 'peer',
                })
            )
          })
        )
      var O = n(59107),
        $ = n(231),
        B = n(45601)
      const U = (0, a.X$)(
        (0, i.c$)((e, t) => {
          let { folderId: n, folderType: a } = t
          return {
            chatFolder: n && 'folder' === a ? (0, E.Mw)(e, n) : void 0,
            animatedEmoji: (0, E.zB)(e, '📂'),
          }
        })((e) => {
          let { chatFolder: t, animatedEmoji: n, foldersDispatch: i, onSettingsScreenSelect: s } = e
          const o = (0, O.Z)(),
            { isMobile: l } = (0, w.ZP)(),
            c = (0, a.I4)(() => {
              i({ type: 'editFolder', payload: t }), s(r.MT.FoldersEditFolderFromChatList)
            }, [t, i, s])
          return a.ZP.createElement(
            'div',
            { className: 'SQg81XcAI_8yUrDTZsuO' },
            a.ZP.createElement(
              'div',
              { className: 'wJbYOMkKbFvBF3ETHcTe' },
              n && a.ZP.createElement(B.Z, { sticker: n, size: 96 })
            ),
            a.ZP.createElement(
              'h3',
              { className: 'aAjnCIjqnZ5azP_wg1ax', dir: 'auto' },
              o('FilterNoChatsToDisplay')
            ),
            a.ZP.createElement(
              'p',
              { className: 'xkUox6hbodMU0tsgwbai', dir: 'auto' },
              o(t ? 'ChatList.EmptyChatListFilterText' : 'Chat.EmptyChat')
            ),
            t &&
              a.ZP.createElement(
                $.Z,
                { ripple: !l, fluid: !0, pill: !0, onClick: c, size: 'smaller', isRtl: o.isRtl },
                a.ZP.createElement('i', { className: 'icon-settings' }),
                a.ZP.createElement(
                  'div',
                  { className: 'avAW55GP937eCr8UmpfS' },
                  o('ChatList.EmptyChatListEditFilter')
                )
              )
          )
        })
      )
      var j = n(60782),
        X = n(2155),
        z = n(32340),
        Y = n(34076)
      const H = {
          root: 'QNEU55wdWY0UBHKcohz_',
          minimized: 'HJvl22k3BH70ntnjhIP0',
          button: 'RF4n_8QOkb5FMXcpbmBW',
          title: 'XFFMu4VlEHKxRihwcGTm',
          'unread-count': 'jYYtPy1W31sqUc_gw9RW',
          unreadCount: 'jYYtPy1W31sqUc_gw9RW',
          info: 'fvlwjR3heR1XQKFT_jiv',
          name: 'Njj0lF4z1QQ96mlTyHt_',
          icon: 'EKj05B3RNFnEMtMNttAq',
          avatarWrapper: 'qx5qdiOt16oub2O9sYeg',
          avatar: 'n8grGxKGGUr4oa8NVGFW',
          chatsPreview: 'm7P0WNHzg_kxle3rxniA',
          unread: 'mee_ERQMDxZsfb47JEBb',
        },
        _ = (0, a.X$)((e) => {
          let { archiveSettings: t, onDragEnter: n, onClick: r } = e
          const { updateArchiveSettings: o } = (0, i.Sv)(),
            l = (0, O.Z)(),
            d = (0, u.d7)(s.WSp),
            m = (0, u.yi)()[s.WSp]?.chatsCount,
            h = (0, a.Ye)(() => {
              if (!d?.length) return l('Loading')
              const e = (0, i.Rd)().chats.byId
              return d.slice(0, 5).map((t, n, i) => {
                const r = n === i.length - 1,
                  s = e[t]
                if (!s) return
                const o = (0, P.U)(l, s)
                return a.ZP.createElement(
                  a.ZP.Fragment,
                  null,
                  a.ZP.createElement(
                    'span',
                    { className: (0, c.Z)(H.chat, m && s.unreadCount && H.unread) },
                    (0, z.Z)(o)
                  ),
                  r ? '' : ', '
                )
              })
            }, [d, l, m]),
            p = (0, a.Ye)(() => {
              const e = !t.isMinimized && {
                  title: l('lng_context_archive_collapse'),
                  icon: 'collapse',
                  handler: () => {
                    o({ isMinimized: !0 })
                  },
                },
                n = t.isMinimized && {
                  title: l('lng_context_archive_expand'),
                  icon: 'expand',
                  handler: () => {
                    o({ isMinimized: !1 })
                  },
                },
                a = {
                  title: l('lng_context_archive_to_menu'),
                  icon: 'archive-to-main',
                  handler: () => {
                    o({ isHidden: !0 })
                  },
                }
              return (0, j.oA)([e, n, a])
            }, [t.isMinimized, l, o]),
            v = (0, a.I4)(
              (e) => {
                e.preventDefault(), n?.()
              },
              [n]
            )
          return a.ZP.createElement(
            N.Z,
            {
              onClick: r,
              onDragEnter: v,
              className: (0, c.Z)(
                H.root,
                t.isMinimized && H.minimized,
                'chat-item-clickable',
                'chat-item-archive'
              ),
              buttonClassName: H.button,
              contextActions: p,
              withPortalForMenu: !0,
            },
            t.isMinimized
              ? a.ZP.createElement(
                  'div',
                  { className: (0, c.Z)(H.info, 'info') },
                  a.ZP.createElement(
                    'div',
                    { className: 'info-row' },
                    a.ZP.createElement(
                      'div',
                      { className: (0, c.Z)('title', H.title) },
                      a.ZP.createElement(
                        'h3',
                        { dir: 'auto', className: (0, c.Z)(H.name, 'fullName') },
                        a.ZP.createElement('i', {
                          className: (0, c.Z)(H.icon, 'icon-archive-filled'),
                        }),
                        l('ArchivedChats')
                      )
                    ),
                    Boolean(m) &&
                      a.ZP.createElement(
                        'div',
                        { className: H.unreadCount },
                        a.ZP.createElement(Y.Z, { text: (0, X.bi)(m) })
                      )
                  )
                )
              : a.ZP.createElement(
                  a.ZP.Fragment,
                  null,
                  a.ZP.createElement(
                    'div',
                    { className: (0, c.Z)('status', H.avatarWrapper) },
                    a.ZP.createElement(
                      'div',
                      { className: (0, c.Z)('Avatar', H.avatar) },
                      a.ZP.createElement('i', { className: 'icon-archive-filled' })
                    )
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: (0, c.Z)(H.info, 'info') },
                    a.ZP.createElement(
                      'div',
                      { className: 'info-row' },
                      a.ZP.createElement(
                        'div',
                        { className: (0, c.Z)('title', H.title) },
                        a.ZP.createElement(
                          'h3',
                          { dir: 'auto', className: (0, c.Z)(H.name, 'fullName') },
                          l('ArchivedChats')
                        )
                      )
                    ),
                    a.ZP.createElement(
                      'div',
                      { className: 'subtitle' },
                      a.ZP.createElement(
                        'div',
                        { className: (0, c.Z)('status', H.chatsPreview) },
                        h
                      ),
                      Boolean(m) &&
                        a.ZP.createElement(
                          'div',
                          { className: 'Badge' },
                          a.ZP.createElement(Y.Z, { text: (0, X.bi)(m) })
                        )
                    )
                  )
                )
          )
        }),
        V = new Set(['9', '0']),
        q = (0, a.X$)((e) => {
          let {
            folderType: t,
            folderId: n,
            isActive: Z,
            isForumPanelOpen: P,
            canDisplayArchive: E,
            archiveSettings: y,
            foldersDispatch: C,
            onSettingsScreenSelect: b,
            onLeftColumnContentChange: I,
          } = e
          const { openChat: w, openNextChat: N, closeForumPanel: S } = (0, i.Sv)(),
            k = (0, a.sO)(null),
            M = (0, a.sO)(!1),
            T = 'all' === t ? s.NfV : 'archived' === t ? s.WSp : n,
            x = 'all' === t && E,
            L = (0, u.d7)(T),
            A = (L?.length || 0) * s.rSj,
            F = x ? (y.isMinimized ? s.RBO : s.rSj) : 0,
            { orderDiffById: R, getAnimationType: O } = (0, v.Z)(L),
            [$, B] = (0, d.Z)(void 0, L, void 0, s.t_F)
          ;(0, h.y)(
            Z && L?.length
              ? {
                  'Alt+ArrowUp': (e) => {
                    e.preventDefault(), N({ targetIndexDelta: -1, orderedIds: L })
                  },
                  'Alt+ArrowDown': (e) => {
                    e.preventDefault(), N({ targetIndexDelta: 1, orderedIds: L })
                  },
                }
              : void 0
          ),
            (0, a.d4)(() => {
              if (Z && L && o.fl)
                return (
                  document.addEventListener('keydown', e),
                  () => {
                    document.removeEventListener('keydown', e)
                  }
                )
              function e(e) {
                if (((o.jm && e.metaKey) || (!o.jm && e.ctrlKey)) && e.code.startsWith('Digit')) {
                  const [, t] = e.code.match(/Digit(\d)/) || []
                  if (!t || V.has(t)) return
                  const n = x && !y.isMinimized,
                    a = n ? -1 : 0,
                    i = Number(t) + a - 1
                  if (n && -1 === i) return void I(r.du.Archived)
                  if (i > L.length - 1) return
                  w({ id: L[i], shouldReplaceHistory: !0 })
                }
              }
            }, [y, Z, I, w, N, L, x])
          const { observe: j } = (0, m.S1)({ rootRef: k, throttleMs: 200 }),
            X = (0, a.I4)(() => {
              I(r.du.Archived), S()
            }, [S, I]),
            z = (0, a.I4)(() => {
              M.current ? (M.current = !1) : X()
            }, [X]),
            Y = (0, p.Z)(
              (e) => {
                M.current ? (M.current = !1) : w({ id: e, shouldReplaceHistory: !0 })
              },
              [w],
              500,
              !0
            ),
            H = (0, a.I4)((e) => {
              const t = e.currentTarget.getBoundingClientRect(),
                n = e.clientX - t.left,
                a = e.clientY - t.top
              n < t.width || a < t.y || (M.current = !0)
            }, [])
          return a.ZP.createElement(
            f.Z,
            {
              className: (0, c.Z)('chat-list custom-scroll', P && 'forum-panel-open'),
              ref: k,
              items: $,
              itemSelector: '.ListItem:not(.chat-item-archive)',
              preloadBackwards: s.t_F,
              withAbsolutePositioning: !0,
              maxHeight: A + F,
              onLoadMore: B,
              onDragLeave: H,
            },
            x &&
              a.ZP.createElement(_, {
                key: 'archive',
                archiveSettings: y,
                onClick: X,
                onDragEnter: z,
              }),
            $?.length
              ? (function () {
                  const e = L.indexOf($[0]),
                    t = (0, l.aE)(T) || 0
                  return $.map((i, r) => {
                    const o = e + r < t,
                      c = F + (e + r) * s.rSj
                    return a.ZP.createElement(D, {
                      key: i,
                      teactOrderKey: o ? r : (0, l.jK)(i),
                      chatId: i,
                      isPinned: o,
                      folderId: n,
                      animationType: O(i),
                      orderDiff: R[i],
                      offsetTop: c,
                      observeIntersection: j,
                      onDragEnter: Y,
                    })
                  })
                })()
              : $ && !$.length
              ? a.ZP.createElement(U, {
                  folderId: n,
                  folderType: t,
                  foldersDispatch: C,
                  onSettingsScreenSelect: b,
                })
              : a.ZP.createElement(g.Z, { key: 'loading' })
          )
        })
    },
    59690: (e, t, n) => {
      n.d(t, { Z: () => Y })
      var a = n(60748),
        i = n(33555),
        r = n(6137),
        s = n(83716),
        o = n(863),
        l = n(11192),
        c = n(46752),
        d = n(56112),
        u = n(23989),
        m = n(1279),
        h = n(64963),
        p = n(27407),
        v = n(3657),
        f = n(61204),
        g = n(59107),
        Z = n(87204),
        P = n(46590),
        E = n(18674),
        y = n(42797),
        C = n(98799),
        b = n(231),
        I = n(15780),
        w = n(32340),
        N = n(44499),
        S = n(60782),
        k = n(60706),
        M = n(31876),
        T = n(76844),
        x = n(98456),
        L = n(17551),
        A = n(2995)
      const F = (0, a.X$)(
        (0, i.c$)((e, t) => {
          let { chatId: n, topic: a, isSelected: i } = t
          const r = (0, l.Z1)(e, n),
            s = (0, l.hj)(e, n, a.lastMessageId),
            { senderId: o, replyToMessageId: c, isOutgoing: u } = s || {},
            m = o ? (0, l.dy)(e, o) || (0, l.Z1)(e, o) : void 0,
            h = s ? (0, d.N5)(s) : void 0,
            p = h && c ? (0, l.hj)(e, n, c) : void 0,
            { targetUserIds: v, targetChatId: f } = h || {},
            g = (0, l.WP)(e, n, a.id, 'typingStatus'),
            Z = (0, l.Ms)(e, n, a.id),
            P = (0, l.tZ)(e, n, a.id),
            E = Boolean(P?.lastReadInboxMessageId),
            { chatId: y, threadId: C } = (0, l.Bt)(e) || {}
          return {
            chat: r,
            lastMessage: s,
            actionTargetUserIds: v,
            actionTargetChatId: f,
            actionTargetMessage: p,
            lastMessageSender: m,
            typingStatus: g,
            canDelete: (0, l.nt)(e, n, a.id),
            animationLevel: e.settings.byKey.animationLevel,
            draft: Z,
            ...(u && s && { lastMessageOutgoingStatus: (0, l.dT)(e, s) }),
            canScrollDown: i && r?.id === y && C === a.id,
            wasTopicOpened: E,
          }
        })((e) => {
          let {
            topic: t,
            isSelected: n,
            chatId: r,
            chat: s,
            style: l,
            lastMessage: u,
            canScrollDown: m,
            lastMessageOutgoingStatus: h,
            observeIntersection: p,
            canDelete: v,
            actionTargetMessage: f,
            actionTargetUserIds: Z,
            actionTargetChatId: P,
            lastMessageSender: E,
            animationType: y,
            animationLevel: C,
            orderDiff: b,
            typingStatus: F,
            draft: R,
            wasTopicOpened: D,
          } = e
          const { openChat: O, deleteTopic: $, focusLastMessage: B } = (0, i.Sv)(),
            U = (0, g.Z)(),
            [j, X, z] = (0, k.Z)(),
            [Y, H, _] = (0, k.Z)(),
            { isPinned: V, isClosed: q } = t,
            K = t.isMuted || (void 0 === t.isMuted && s.isMuted),
            W = (0, a.I4)(() => {
              H(), X()
            }, [H, X]),
            G = (0, a.I4)(() => {
              $({ chatId: s.id, topicId: t.id })
            }, [s.id, $, t.id]),
            { renderSubtitle: J, ref: Q } = (0, N.Z)({
              chat: s,
              chatId: r,
              lastMessage: u,
              draft: R,
              actionTargetMessage: f,
              actionTargetUserIds: Z,
              actionTargetChatId: P,
              lastMessageSender: E,
              lastMessageTopic: t,
              observeIntersection: p,
              isTopic: !0,
              typingStatus: F,
              animationType: y,
              animationLevel: C,
              orderDiff: b,
            }),
            ee = (0, a.I4)(() => {
              O({ id: r, threadId: t.id, shouldReplaceHistory: !0 }), m && B()
            }, [O, r, t.id, m, B]),
            te = (function (e, t, n, r, s) {
              const l = (0, g.Z)()
              return (0, a.Ye)(() => {
                const { isPinned: a, isMuted: c, isClosed: u, id: m } = e,
                  h = t.id,
                  {
                    editTopic: p,
                    toggleTopicPinned: v,
                    markTopicRead: f,
                    updateTopicMutedState: g,
                    openChatInNewTab: Z,
                  } = (0, i.Sv)(),
                  P = (0, d.GU)(t, e),
                  E = t.isCreator || (0, d.VE)(t, 'manageTopics'),
                  y = o.IT && {
                    title: 'Open in new tab',
                    icon: 'open-in-new-tab',
                    handler: () => {
                      Z({ chatId: t.id, threadId: m })
                    },
                  },
                  C = y && { isSeparator: !0, key: 'newTabSeparator' },
                  b =
                    e.unreadCount || !n
                      ? {
                          title: l('MarkAsRead'),
                          icon: 'readchats',
                          handler: () => {
                            f({ chatId: h, topicId: m })
                          },
                        }
                      : void 0,
                  I = E
                    ? a
                      ? {
                          title: l('UnpinFromTop'),
                          icon: 'unpin',
                          handler: () => v({ chatId: h, topicId: m, isPinned: !1 }),
                        }
                      : {
                          title: l('PinToTop'),
                          icon: 'pin',
                          handler: () => v({ chatId: h, topicId: m, isPinned: !0 }),
                        }
                    : void 0,
                  w =
                    (t.isMuted && !1 !== c) || !0 === c
                      ? {
                          title: l('ChatList.Unmute'),
                          icon: 'unmute',
                          handler: () => g({ chatId: h, topicId: m, isMuted: !1 }),
                        }
                      : {
                          title: l('ChatList.Mute'),
                          icon: 'mute',
                          handler: () => g({ chatId: h, topicId: m, isMuted: !0 }),
                        },
                  N = P
                    ? u
                      ? {
                          title: l('lng_forum_topic_reopen'),
                          icon: 'reopen-topic',
                          handler: () => p({ chatId: h, topicId: m, isClosed: !1 }),
                        }
                      : {
                          title: l('lng_forum_topic_close'),
                          icon: 'close-topic',
                          handler: () => p({ chatId: h, topicId: m, isClosed: !0 }),
                        }
                    : void 0,
                  k = r
                    ? {
                        title: l('lng_forum_topic_delete'),
                        icon: 'delete',
                        destructive: !0,
                        handler: s,
                      }
                    : void 0
                return (0, S.oA)([y, C, I, b, w, N, k])
              }, [e, t, n, l, r, s])
            })(t, s, D, v, W)
          return a.ZP.createElement(
            M.Z,
            {
              className: (0, c.Z)(
                'YmRS2ZiwKMtqCF87Nsw8',
                'Chat',
                n && 'selected',
                'chat-item-clickable'
              ),
              onClick: ee,
              style: l,
              href: o.IT ? `#${(0, I.tB)(r, 'thread', t.id)}` : void 0,
              contextActions: te,
              ref: Q,
            },
            a.ZP.createElement(
              'div',
              { className: 'info' },
              a.ZP.createElement(
                'div',
                { className: 'info-row' },
                a.ZP.createElement(
                  'div',
                  { className: (0, c.Z)('title') },
                  a.ZP.createElement(A.Z, { topic: t, className: 'TB99wQ9nHBumZ6E9ByUz' }),
                  a.ZP.createElement(
                    'h3',
                    { dir: 'auto', className: 'fullName' },
                    (0, w.Z)(t.title)
                  )
                ),
                t.isMuted && a.ZP.createElement('i', { className: 'icon-muted' }),
                a.ZP.createElement('div', { className: 'separator' }),
                q &&
                  a.ZP.createElement('i', {
                    className: (0, c.Z)('icon-lock-badge', 'K6QDMKEV2GXbuOQWOS73'),
                  }),
                u && a.ZP.createElement(T.Z, { message: u, outgoingStatus: h })
              ),
              a.ZP.createElement(
                'div',
                { className: 'subtitle' },
                J(),
                a.ZP.createElement(x.Z, {
                  chat: s,
                  isPinned: V,
                  isMuted: K,
                  topic: t,
                  wasTopicOpened: D,
                })
              )
            ),
            Y &&
              a.ZP.createElement(L.Z, {
                isOpen: j,
                onClose: z,
                onCloseAnimationEnd: _,
                confirmIsDestructive: !0,
                confirmHandler: G,
                text: U('lng_forum_topic_delete_sure'),
                confirmLabel: U('Delete'),
              })
          )
        })
      )
      var R = n(21273),
        D = n(34288),
        O = n(59188),
        $ = n(4794),
        B = n(74399),
        U = n(45601)
      const j = {
          root: 'ZyX_vkPmR8lkPavXpJ8t',
          'button-text': 'eyTT7Nz45S4tsccfs60O',
          buttonText: 'eyTT7Nz45S4tsccfs60O',
          sticker: 'qtGErqZ1CIiAYG3E4UcJ',
          title: 'xpDHtODGvlK2Esrg3kFa',
          description: 'xqeZm45hTFw3abdn8dYe',
          'is-ios': 'G5wtv6cwHgiIpRWtvIvu',
          isIos: 'G5wtv6cwHgiIpRWtvIvu',
          'is-macos': 'H92rL6BfAuzokrWOXdQr',
          isMacos: 'H92rL6BfAuzokrWOXdQr',
        },
        X = 7 * B.Gw,
        z = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n } = t
            const a = (0, l.Z1)(e, n),
              i = a && (a.isCreator || (0, d.VE)(a, 'manageTopics'))
            return { animatedEmoji: (0, l.zB)(e, '🐣'), canManageTopics: i }
          })((e) => {
            let { chatId: t, animatedEmoji: n, canManageTopics: r } = e
            const { openCreateTopicPanel: s } = (0, i.Sv)(),
              o = (0, g.Z)(),
              { isMobile: l } = (0, y.ZP)(),
              d = (0, a.I4)(() => {
                s({ chatId: t })
              }, [t, s])
            return a.ZP.createElement(
              'div',
              { className: j.root },
              a.ZP.createElement(
                'div',
                { className: j.sticker },
                n && a.ZP.createElement(U.Z, { sticker: n, size: X })
              ),
              a.ZP.createElement(
                'h3',
                { className: j.title, dir: 'auto' },
                o('ChatList.EmptyTopicsTitle')
              ),
              a.ZP.createElement(
                'p',
                { className: (0, c.Z)(j.description, j.centered), dir: 'auto' },
                o('ChatList.EmptyTopicsDescription')
              ),
              r &&
                a.ZP.createElement(
                  b.Z,
                  { ripple: !l, fluid: !0, onClick: d, size: 'smaller', isRtl: o.isRtl },
                  a.ZP.createElement(
                    'div',
                    { className: j.buttonText },
                    o('ChatList.EmptyTopicsCreate')
                  )
                )
            )
          })
        ),
        Y = (0, a.X$)(
          (0, i.c$)((e, t, n) => {
            n((0, l.nd)(e))
            const a = (0, l.jU)(e).forumPanelChatId,
              i = a ? (0, l.Z1)(e, a) : void 0,
              { chatId: r, threadId: s } = (0, l.Bt)(e) || {}
            return {
              chat: i,
              lastSyncTime: e.lastSyncTime,
              currentTopicId: a === r ? s : void 0,
              animationLevel: e.settings.byKey.animationLevel,
            }
          })((e) => {
            let {
              chat: t,
              currentTopicId: n,
              isOpen: l,
              isHidden: I,
              lastSyncTime: w,
              onTopicSearch: N,
              onCloseAnimationEnd: S,
              animationLevel: k,
            } = e
            const { closeForumPanel: M, openChatWithInfo: T, loadTopics: x } = (0, i.Sv)(),
              L = (0, a.sO)(null),
              A = (0, a.sO)(null),
              B = (0, a.sO)(null),
              { isMobile: U } = (0, y.ZP)()
            ;(0, a.d4)(() => {
              w && t && !t.topics && x({ chatId: t.id })
            }, [t, w, x])
            const [j, X] = (0, a.eJ)(!1),
              Y = (0, g.Z)(),
              H = (0, a.I4)(() => {
                M()
              }, [M])
            ;(0, a.d4)(() => {
              k !== s.oBh || l || S?.()
            }, [k, l, S])
            const _ = (0, a.I4)(() => {
                t && T({ id: t.id, shouldReplaceHistory: !0 })
              }, [t, T]),
              { observe: V } = (0, v.S1)({ rootRef: A, throttleMs: 200 })
            ;(0, v._N)(B, V, (e) => {
              let { isIntersecting: t } = e
              X(!t)
            })
            const q = (0, a.Ye)(
                () =>
                  t?.topics
                    ? (0, d.AY)(Object.values(t.topics), t.orderedPinnedTopicIds).map((e) => {
                        let { id: t } = e
                        return t
                      })
                    : [],
                [t]
              ),
              { orderDiffById: K, getAnimationType: W } = (0, f.Z)(q, t?.id),
              [G, J] = (0, p.Z)(
                () => {
                  t && w && x({ chatId: t.id })
                },
                q,
                !t?.topicsCount || q.length >= t.topicsCount,
                s.C1M
              ),
              Q = (0, a.sO)(!1),
              ee = l && !I,
              te = (0, Z.Z)(ee)
            te !== ee && (Q.current = !1),
              (0, P.Z)({ isActive: ee, onBack: H }),
              (0, a.d4)(() => (ee ? (0, u.Z)(H) : void 0), [H, ee]),
              (0, a.d4)(() => {
                if (te !== ee) {
                  const e = (0, E.YW)()
                  ;(0, m.L)(L.current, () => {
                    e()
                  }),
                    ee
                      ? ((Q.current = !0), (L.current.style.transform = 'none'))
                      : ((Q.current = !1), (L.current.style.transform = ''))
                }
              }, [ee, te]),
              (0, a.d4)(() => {
                if (o.$b)
                  return (0, h.sf)(L.current, {
                    selectorToPreventScroll: '.chat-list',
                    onSwipe: (e, t) => t === (Y.isRtl ? h.eM.Left : h.eM.Right) && (M(), !0),
                  })
              }, [M, Y.isRtl])
            const ne = void 0 === t?.topics
            return a.ZP.createElement(
              'div',
              {
                ref: L,
                className: (0, c.Z)(
                  'GUOX6Q0XzHRhNZvBwjQ9',
                  j && 'h_YBka1L8eRICjrO5dF5',
                  Y.isRtl && '_1XehUpS3aX91hWXDmcu',
                  k === s.oBh && 'mPOFnJvncopcVbbyZrzs'
                ),
                onTransitionEnd: l ? void 0 : S,
              },
              a.ZP.createElement(
                'div',
                { className: 'left-header' },
                a.ZP.createElement(
                  b.Z,
                  {
                    round: !0,
                    size: 'smaller',
                    color: 'translucent',
                    onClick: H,
                    ariaLabel: Y('Close'),
                  },
                  a.ZP.createElement('i', { className: 'icon-close' })
                ),
                t &&
                  a.ZP.createElement(C.Z, {
                    noAvatar: !0,
                    className: 'mzucaTAH77gNB1V006lS',
                    chatId: t.id,
                    onClick: _,
                  }),
                t &&
                  a.ZP.createElement(O.Z, {
                    chatId: t.id,
                    threadId: r._f,
                    messageListType: 'thread',
                    canExpandActions: !1,
                    withForumActions: !0,
                    isMobile: U,
                    onTopicSearch: N,
                  })
              ),
              t &&
                a.ZP.createElement($.Z, {
                  chatId: t.id,
                  hasPinnedOffset: !1,
                  className: 'OH0LaRqoNDIvvHsCtEte',
                }),
              a.ZP.createElement('div', { className: 'UhjDQykjZBYhiVclJl16' }),
              a.ZP.createElement(
                R.Z,
                {
                  className: 'chat-list custom-scroll',
                  ref: A,
                  items: G,
                  preloadBackwards: s.C1M,
                  withAbsolutePositioning: !0,
                  maxHeight: (q?.length || 0) * s.oDu,
                  onLoadMore: J,
                  sensitiveArea: s.BtI,
                  beforeChildren: a.ZP.createElement('div', {
                    ref: B,
                    className: 'cO3iiLSh70tyWuNCUFtX',
                  }),
                },
                Boolean(G?.length) &&
                  (function () {
                    const e = q.indexOf(G[0])
                    return G?.map((i, r) =>
                      a.ZP.createElement(F, {
                        key: i,
                        chatId: t.id,
                        topic: t.topics[i],
                        style: `top: ${(e + r) * s.oDu}px;`,
                        isSelected: n === i,
                        observeIntersection: V,
                        animationType: W(i),
                        orderDiff: K[i],
                      })
                    )
                  })(),
                ne && !G?.length && a.ZP.createElement(D.Z, { key: 'loading' })
              ),
              !ne && 1 === G?.length && G[0] === s.OxA && a.ZP.createElement(z, { chatId: t.id })
            )
          })
        )
    },
    9950: (e, t, n) => {
      n.d(t, { b: () => i, w: () => r })
      var a = n(60748)
      let i
      function r(e) {
        return (0, a.Ye)(() => {
          const t = Object.values(e),
            n = t.filter((e) => e < 0).length,
            a = t.filter((e) => e > 0).length
          return (t) => {
            const r = e[t]
            return 0 === r
              ? i.None
              : r === 1 / 0 || r === -1 / 0 || (n <= a && r < 0) || (a < n && r > 0)
              ? i.Opacity
              : i.Move
          }
        }, [e])
      }
      !(function (e) {
        ;(e[(e.Move = 0)] = 'Move'), (e[(e.Opacity = 1)] = 'Opacity'), (e[(e.None = 2)] = 'None')
      })(i || (i = {}))
    },
    44499: (e, t, n) => {
      n.d(t, { Z: () => k })
      var a = n(60748),
        i = n(33555),
        r = n(83716),
        s = n(20230),
        o = n(56112),
        l = n(18005),
        c = n(32340),
        d = n(46752),
        u = n(59107),
        m = n(75790),
        h = n(6202),
        p = n(9950),
        v = n(69118),
        f = n(45370),
        g = n(863),
        Z = n(42797),
        P = n(74399),
        E = n(2995)
      const y = 'GrFgsvT5YSYldl56Hnzu',
        C = 'yHnVWii5hDMte2XGiGio',
        b = 'H4WbKWl7lQI8hw8ryOgF',
        I = 'DGAWy9KRwAZqof7Bt1nx',
        w = Number(P.Gw),
        N = (0, a.X$)((e) => {
          let { chat: t, renderLastMessage: n, observeIntersection: r } = e
          const { openChat: s } = (0, i.Sv)(),
            l = (0, a.sO)(null),
            m = (0, a.sO)(null),
            h = (0, u.Z)(),
            p = n(),
            [v, ...f] = (0, a.Ye)(
              () => (t.topics ? (0, o.AY)(Object.values(t.topics), void 0, !0).slice(0, 3) : []),
              [t.topics]
            ),
            [P, N] = (0, a.eJ)(!1),
            [S, k] = (0, a.eJ)(void 0)
          function M(e) {
            0 !== v.unreadCount &&
              (e.stopPropagation(),
              e.preventDefault(),
              s({
                id: t.id,
                threadId: v.id,
                shouldReplaceHistory: !0,
                noForumTopicPanel: (0, Z.W7)(),
              }))
          }
          return (
            (0, a.bt)(() => {
              const e = l.current,
                t = m.current
              if (!e || !t) return
              const n = e.offsetWidth,
                a = t.offsetWidth
              Math.abs(n - a) < w ? k(Math.max(n, a)) : k(void 0), N(n > a)
            }, [v, p]),
            a.ZP.createElement(
              'div',
              {
                className: (0, d.Z)(
                  'gljGvMdlFlsKhrMPQ_xa',
                  P && 'RJ0NXk_lx9qewdoGgJsT',
                  S && 'e4cE7B51DN3MrEY9WuKx'
                ),
                dir: h.isRtl ? 'rtl' : void 0,
                style: S ? `--overwritten-width: ${S}px` : void 0,
              },
              v &&
                a.ZP.createElement(
                  'div',
                  { className: y },
                  a.ZP.createElement(
                    'div',
                    {
                      className: (0, d.Z)('VUe4FFBCwClvaU9aiXG1', v.unreadCount && C),
                      ref: m,
                      onMouseDown: g.$b ? void 0 : M,
                      onClick: g.$b ? M : void 0,
                    },
                    a.ZP.createElement(E.Z, { topic: v, observeIntersection: r }),
                    a.ZP.createElement(
                      'div',
                      { className: 'WeBppBs2KkOXzHRzQ2_W' },
                      (0, c.Z)(v.title)
                    ),
                    !S &&
                      P &&
                      a.ZP.createElement(
                        'div',
                        { className: b },
                        a.ZP.createElement('div', { className: I })
                      )
                  ),
                  a.ZP.createElement(
                    'div',
                    { className: 'FJt1oTIn6WgfvH9iKMg3' },
                    f.map((e) =>
                      a.ZP.createElement(
                        'div',
                        {
                          className: (0, d.Z)('RhuR5wto63HGEeY1NdXg', e.unreadCount && C),
                          key: e.id,
                        },
                        a.ZP.createElement(E.Z, { topic: e, observeIntersection: r }),
                        a.ZP.createElement(
                          'span',
                          { className: 'Ub9bpPYaMAw0qMouq5_O' },
                          (0, c.Z)(e.title)
                        )
                      )
                    )
                  ),
                  a.ZP.createElement('div', { className: 'RL7lx7aP0Fg2LakRlxHp' })
                ),
              !v &&
                a.ZP.createElement(
                  'div',
                  { className: (0, d.Z)(y, 'bYI9fzK27IbEWGTzvRGf') },
                  h('Loading')
                ),
              a.ZP.createElement(
                'div',
                {
                  className: (0, d.Z)('OyHxp9apV7oixvvxGFDx', v?.unreadCount && C),
                  ref: l,
                  onMouseDown: g.$b ? void 0 : M,
                  onClick: g.$b ? M : void 0,
                },
                p,
                !S &&
                  !P &&
                  a.ZP.createElement(
                    'div',
                    { className: b },
                    a.ZP.createElement('div', { className: I })
                  )
              )
            )
          )
        })
      var S = n(68729)
      function k(e) {
        let {
          chat: t,
          lastMessage: n,
          chatId: g,
          typingStatus: Z,
          draft: P,
          actionTargetMessage: E,
          actionTargetUserIds: y,
          lastMessageTopic: C,
          lastMessageSender: b,
          actionTargetChatId: I,
          observeIntersection: w,
          animationType: k,
          orderDiff: M,
          animationLevel: T,
          isTopic: x,
        } = e
        const L = (0, u.Z)(),
          A = (0, a.sO)(null),
          F = n && (0, o.FT)(n)
        ;(0, m.Z)(g, F ? n.replyToMessageId : void 0, E)
        const R = n && !(0, o.bf)(n) ? (0, o.DH)(n) : void 0,
          D = (0, h.Z)(n ? (0, o.Ti)(n, 'micro') : void 0),
          O = Boolean(n && (0, o.Y5)(n)),
          $ = (0, a.Ye)(() => {
            if (!y) return
            const e = (0, i.Rd)().users.byId
            return y.map((t) => e[t]).filter(Boolean)
          }, [y])
        function B() {
          if (Z && n && Z.timestamp > 1e3 * n.date)
            return a.ZP.createElement(S.Z, { typingStatus: Z })
          if (P?.text.length)
            return a.ZP.createElement(
              'p',
              { className: 'last-message', dir: L.isRtl ? 'auto' : 'ltr' },
              a.ZP.createElement('span', { className: 'draft' }, L('Draft')),
              (0, s.H)(P.text, P.entities, void 0, void 0, void 0, void 0, !0)
            )
          if (!n) return
          if (F) {
            const e = t && ((0, o.eA)(t) || n.senderId === n.chatId)
            return a.ZP.createElement(
              'p',
              { className: 'last-message shared-canvas-container', dir: L.isRtl ? 'auto' : 'ltr' },
              (0, l.D)(L, n, e ? void 0 : b, e ? t : void 0, $, E, I, C, { isEmbedded: !0 })
            )
          }
          const e = (0, o.zF)(L, g, b)
          return a.ZP.createElement(
            'p',
            { className: 'last-message shared-canvas-container', dir: L.isRtl ? 'auto' : 'ltr' },
            e &&
              a.ZP.createElement(
                a.ZP.Fragment,
                null,
                a.ZP.createElement('span', { className: 'sender-name' }, (0, c.Z)(e)),
                a.ZP.createElement('span', { className: 'colon' }, ':')
              ),
            (function (e, t, n, i, r) {
              const s = a.ZP.createElement(f.Z, {
                lang: e,
                message: t,
                noEmoji: Boolean(i),
                observeIntersectionForLoading: n,
              })
              if (!i) return s
              const l = (0, o.NE)(t)
              return a.ZP.createElement(
                'span',
                { className: 'media-preview' },
                a.ZP.createElement('img', {
                  src: i,
                  alt: '',
                  className: (0, d.Z)(
                    'media-preview--image',
                    r && 'round',
                    l && 'media-preview-spoiler'
                  ),
                }),
                (0, o.b7)(t) && a.ZP.createElement('i', { className: 'icon-play' }),
                s
              )
            })(L, n, w, D || R, O)
          )
        }
        return (
          (0, a.bt)(() => {
            const e = A.current
            if (0 !== T && e) {
              if (k === p.b.Opacity)
                (e.style.opacity = '0'),
                  (0, v.T2)(() => {
                    e.classList.add('animate-opacity'), (e.style.opacity = '1')
                  })
              else {
                if (k !== p.b.Move) return
                ;(e.style.transform = `translate3d(0, ${-M * r.rSj}px, 0)`),
                  (0, v.T2)(() => {
                    e.classList.add('animate-transform'), (e.style.transform = '')
                  })
              }
              setTimeout(() => {
                ;(0, v.T2)(() => {
                  e.classList.remove('animate-opacity', 'animate-transform'),
                    (e.style.opacity = ''),
                    (e.style.transform = '')
                })
              }, 200 + r.fK3)
            }
          }, [T, M, k]),
          {
            renderSubtitle: function () {
              return t?.isForum && !x
                ? a.ZP.createElement(N, { chat: t, renderLastMessage: B, observeIntersection: w })
                : B()
            },
            ref: A,
          }
        )
      }
    },
    73217: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(87204),
        r = n(65326)
      function s(e) {
        const t = (0, r.Z)(),
          n = (0, a.sO)(e),
          s = (0, i.Z)(e)
        return (
          !1 === e && s !== e && (n.current = !1),
          {
            shouldDisableDropdownMenuTransitionRef: n,
            handleDropdownMenuTransitionEnd: function () {
              ;(n.current = Boolean(e)), t()
            },
          }
        )
      }
    },
    61204: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(87204),
        r = n(60782),
        s = n(9950)
      function o(e, t) {
        const n = (0, a.Ye)(() => {
            if (e) return e.reduce((e, t, n) => ((e[t] = n), e), {})
          }, [e]),
          o = (0, i.Z)(n),
          l = (0, i.Z)(t),
          c = (0, a.Ye)(
            () =>
              n && o && t === l
                ? (0, r.Q8)(n, (e, t) => (void 0 !== o[t] ? e - o[t] : -1 / 0))
                : {},
            [t, n, l, o]
          )
        return { orderDiffById: c, getAnimationType: (0, s.w)(c) }
      }
    },
    91: (e, t, n) => {
      n.d(t, { F: () => i })
      var a = n(56112)
      function i(e, t, n, i) {
        const { senderId: r } = t
        if (!r) return
        const s = (0, a.YC)(r) ? i[r] : n[r]
        let o = (0, a.OU)(e, s)
        const l = n[t.chatId]
        return (
          l &&
            ((0, a.YC)(r) && s.isSelf
              ? (o = `${e('FromYou')} → ${(0, a.U)(e, l)}`)
              : (0, a.Bf)(l) && (o += ` → ${(0, a.U)(e, l)}`)),
          o
        )
      }
    },
    59188: (e, t, n) => {
      n.d(t, { Z: () => g })
      var a = n(60748),
        i = n(33555),
        r = n(6137),
        s = n(91713),
        o = n(83716),
        l = n(863),
        c = n(56112),
        d = n(11192),
        u = n(59107),
        m = n(73541),
        h = n(231),
        p = n(99203),
        v = n(48778)
      const f = (0, a.X$)((e) => {
          const { isOpen: t } = e,
            n = (0, v.Z)(p.gl.Extra, 'HeaderMenuContainer', !t)
          return n ? a.ZP.createElement(n, e) : void 0
        }),
        g = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n, threadId: a, messageListType: i, isMobile: s } = t
            const u = (0, d.Z1)(e, n),
              m = Boolean(u && (0, c.eA)(u))
            if (!u || u.isRestricted || (0, d.CA)(e)) return { noMenu: !0 }
            const h = (0, d.IK)(e, n),
              p = (0, d.FM)(e, n),
              v = 'thread' === i && a === r._f,
              f = 'thread' === i && a !== r._f,
              g = (0, d.Jf)(e, s),
              Z = Boolean(h && (0, d.s4)(e, h.id)),
              P = !Z && Boolean((0, d.pk)(e, n)),
              E = Boolean((v || u.isForum) && (m || (0, c.ZV)(u)) && u.isNotJoined),
              y = v || f,
              C = l.Bi && (0, c.YC)(u.id) && !p && !h,
              b = v && !p && !E,
              I = v && !E,
              w = l.Bi && v && u.isCallActive,
              N =
                l.Bi &&
                v &&
                !u.isCallActive &&
                (u.adminRights?.manageCall || (u.isCreator && (0, c.G9)(u)))
            return {
              noMenu: !1,
              isChannel: m,
              isRightColumnShown: g,
              canStartBot: P,
              canRestartBot: Z,
              canSubscribe: E,
              canSearch: y,
              canCall: C,
              canMute: b,
              canViewStatistics: v && u.fullInfo?.canViewStatistics,
              canLeave: I,
              canEnterVoiceChat: w,
              canCreateVoiceChat: N,
              pendingJoinRequests: v ? u.fullInfo?.requestsPending : void 0,
              shouldJoinToSend: Boolean(u?.isNotJoined && u.isJoinToSend),
              shouldSendJoinRequest: Boolean(u?.isNotJoined && u.isJoinRequest),
              noAnimation: e.settings.byKey.animationLevel === o.oBh,
            }
          })((e) => {
            let {
              chatId: t,
              threadId: n,
              noMenu: o,
              isMobile: c,
              isChannel: d,
              canStartBot: p,
              canRestartBot: v,
              canSubscribe: g,
              canSearch: P,
              canCall: E,
              canMute: y,
              canViewStatistics: C,
              canLeave: b,
              canEnterVoiceChat: I,
              canCreateVoiceChat: w,
              pendingJoinRequests: N,
              isRightColumnShown: S,
              withForumActions: k,
              canExpandActions: M,
              shouldJoinToSend: T,
              shouldSendJoinRequest: x,
              noAnimation: L,
              onTopicSearch: A,
            } = e
            const {
                joinChannel: F,
                sendBotCommand: R,
                openLocalTextSearch: D,
                restartBot: O,
                requestMasterAndRequestCall: $,
                requestNextManagementScreen: B,
                showNotification: U,
                openChat: j,
              } = (0, i.Sv)(),
              X = (0, a.sO)(null),
              z = (0, u.Z)(),
              [Y, H] = (0, a.eJ)(!1),
              [_, V] = (0, a.eJ)(void 0),
              q = (0, a.I4)(() => {
                H(!0)
                const e = X.current.getBoundingClientRect()
                V({ x: e.right, y: e.bottom })
              }, []),
              K = (0, a.I4)(() => {
                H(!1)
              }, []),
              W = (0, a.I4)(() => {
                V(void 0)
              }, []),
              G = (0, a.I4)(() => {
                F({ chatId: t }),
                  x &&
                    U({
                      message: z(
                        d
                          ? 'RequestToJoinChannelSentDescription'
                          : 'RequestToJoinGroupSentDescription'
                      ),
                    })
              }, [F, t, x, U, d, z]),
              J = (0, a.I4)(() => {
                R({ command: '/start' })
              }, [R]),
              Q = (0, a.I4)(() => {
                O({ chatId: t })
              }, [t, O]),
              ee = (0, a.I4)(() => {
                B({ screen: s.u1.JoinRequests })
              }, [B]),
              te = (0, a.I4)(() => {
                k
                  ? A?.()
                  : (D(),
                    c
                      ? document.querySelector('#MobileSearch input').focus()
                      : L
                      ? requestAnimationFrame(() => {
                          requestAnimationFrame(Z)
                        })
                      : setTimeout(Z, 320))
              }, [c, L, A, D, k]),
              ne = (0, a.I4)(() => {
                j({ id: t, threadId: r._f })
              }, [t, j]),
              ae = (0, a.I4)(
                (e) => {
                  P && l.fl && !e.shiftKey && (e.preventDefault(), te())
                },
                [P, te]
              )
            return (
              (0, m.y)({ 'Mod+F': ae }),
              a.ZP.createElement(
                'div',
                { className: 'HeaderActions' },
                !c &&
                  a.ZP.createElement(
                    a.ZP.Fragment,
                    null,
                    M &&
                      !x &&
                      (g || T) &&
                      a.ZP.createElement(
                        h.Z,
                        { size: 'tiny', ripple: !0, fluid: !0, onClick: G },
                        z(d ? 'ProfileJoinChannel' : 'ProfileJoinGroup')
                      ),
                    M &&
                      x &&
                      a.ZP.createElement(
                        h.Z,
                        { size: 'tiny', ripple: !0, fluid: !0, onClick: G },
                        z('ChannelJoinRequest')
                      ),
                    M &&
                      p &&
                      a.ZP.createElement(
                        h.Z,
                        { size: 'tiny', ripple: !0, fluid: !0, onClick: J },
                        z('BotStart')
                      ),
                    M &&
                      v &&
                      a.ZP.createElement(
                        h.Z,
                        { size: 'tiny', ripple: !0, fluid: !0, onClick: Q },
                        z('BotRestart')
                      ),
                    P &&
                      a.ZP.createElement(
                        h.Z,
                        {
                          round: !0,
                          ripple: S,
                          color: 'translucent',
                          size: 'smaller',
                          onClick: te,
                          ariaLabel: 'Search in this chat',
                        },
                        a.ZP.createElement('i', { className: 'icon-search' })
                      ),
                    E &&
                      a.ZP.createElement(
                        h.Z,
                        {
                          round: !0,
                          color: 'translucent',
                          size: 'smaller',
                          onClick: function () {
                            $({ userId: t })
                          },
                          ariaLabel: 'Call',
                        },
                        a.ZP.createElement('i', { className: 'icon-phone' })
                      )
                  ),
                !k &&
                  Boolean(N) &&
                  a.ZP.createElement(
                    h.Z,
                    {
                      round: !0,
                      className: 'badge-button',
                      ripple: S,
                      color: 'translucent',
                      size: 'smaller',
                      onClick: ee,
                      ariaLabel: z(d ? 'SubscribeRequests' : 'MemberRequests'),
                    },
                    a.ZP.createElement('i', { className: 'icon-user' }),
                    a.ZP.createElement('div', { className: 'badge' }, N)
                  ),
                a.ZP.createElement(
                  h.Z,
                  {
                    ref: X,
                    className: Y ? 'active' : '',
                    round: !0,
                    ripple: !c,
                    size: 'smaller',
                    color: 'translucent',
                    disabled: o,
                    ariaLabel: 'More actions',
                    onClick: q,
                  },
                  a.ZP.createElement('i', { className: 'icon-more' })
                ),
                _ &&
                  a.ZP.createElement(f, {
                    chatId: t,
                    threadId: n,
                    isOpen: Y,
                    anchor: _,
                    withExtraActions: c || !M,
                    isChannel: d,
                    canStartBot: p,
                    canRestartBot: v,
                    canSubscribe: g,
                    canSearch: P,
                    canCall: E,
                    canMute: y,
                    canViewStatistics: C,
                    canLeave: b,
                    canEnterVoiceChat: I,
                    canCreateVoiceChat: w,
                    pendingJoinRequests: N,
                    onJoinRequestsClick: ee,
                    withForumActions: k,
                    onSubscribeChannel: G,
                    onSearchClick: te,
                    onAsMessagesClick: ne,
                    onClose: K,
                    onCloseAnimationEnd: W,
                  })
              )
            )
          })
        )
      function Z() {
        document.querySelector('.RightHeader .SearchInput input')?.focus()
      }
    },
    93219: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(99203),
        r = n(48778)
      const s = (0, a.X$)((e) => {
        const { isOpen: t } = e,
          n = (0, r.Z)(i.gl.Extra, 'CustomEmojiTooltip', !t)
        return n ? a.ZP.createElement(n, e) : void 0
      })
    },
    67146: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(99203),
        r = n(48778)
      const s = (0, a.X$)((e) => {
        const { isOpen: t } = e,
          n = (0, r.Z)(i.gl.Extra, 'CustomSendMenu', !t)
        return n ? a.ZP.createElement(n, e) : void 0
      })
    },
    12420: (e, t, n) => {
      n.d(t, { t: () => m, Z: () => h })
      var a = n(60748),
        i = n(31212),
        r = n(46752),
        s = n(21262),
        o = n(23989),
        l = n(87204),
        c = n(62898),
        d = n(60706)
      const u = (0, a.X$)((e) => {
        let { isQuick: t, isGeneric: n, onFileSelect: i } = e
        const [s, o, l] = (0, d.Z)(),
          c = (0, r.Z)('DropTarget', s && 'hovered')
        return a.ZP.createElement(
          'div',
          {
            className: c,
            onDrop: i,
            onDragEnter: o,
            onDragLeave: (e) => {
              const { relatedTarget: t } = e
              t && e.stopPropagation(), l()
            },
            'data-dropzone': !0,
          },
          a.ZP.createElement(
            'div',
            { className: 'target-content' },
            a.ZP.createElement('div', { className: 'icon icon-' + (t ? 'photo' : 'document') }),
            a.ZP.createElement('div', { className: 'title' }, 'Drop files here to send them'),
            !n &&
              a.ZP.createElement(
                'div',
                { className: 'description' },
                t ? 'in a quick way' : 'without compression'
              )
          )
        )
      })
      let m
      !(function (e) {
        ;(e.None = 'none'), (e.Document = 'document'), (e.QuickFile = 'quick_file')
      })(m || (m = {}))
      const h = (0, a.X$)((e) => {
        let { isOpen: t, withQuick: n, onHide: d, onFileSelect: m } = e
        const h = (0, a.sO)(null),
          p = (0, l.Z)(n),
          { shouldRender: v, transitionClassNames: f } = (0, i.Z)(t)
        ;(0, a.d4)(() => (t ? (0, o.Z)(d) : void 0), [t, d])
        const g = (0, a.I4)(
            async (e) => {
              const { dataTransfer: t } = e
              let a = []
              if (!(t.files && t.files.length > 0) || (t.items && t.items.length)) {
                if (t.items && t.items.length > 0) {
                  const e = await (0, s.Z)(t.items)
                  e?.length && (a = a.concat(e))
                }
              } else a = a.concat(Array.from(t.files))
              d(), m(a, !n && void 0)
            },
            [m, d, n]
          ),
          Z = (0, a.I4)(
            (e) => {
              const { dataTransfer: t } = e
              t.files && t.files.length > 0 && (d(), m(Array.from(t.files), !0))
            },
            [m, d]
          ),
          P = (0, a.I4)(
            (e) => {
              e.stopPropagation()
              const { target: t, relatedTarget: n } = e
              t.matches('.DropTarget, .DropArea') &&
                !n &&
                (h.current = window.setTimeout(() => {
                  d()
                }, 150))
            },
            [d]
          )
        if (!v) return
        const E = n || p,
          y = (0, r.Z)('DropArea', f)
        return a.ZP.createElement(
          c.Z,
          { containerId: '#middle-column-portals' },
          a.ZP.createElement(
            'div',
            {
              className: y,
              onDragLeave: P,
              onDragOver: () => {
                h.current && window.clearTimeout(h.current)
              },
              onDrop: d,
              onClick: d,
            },
            a.ZP.createElement(u, { onFileSelect: g, isGeneric: !E }),
            E && a.ZP.createElement(u, { onFileSelect: Z, isQuick: !0 })
          )
        )
      })
    },
    19830: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(99203),
        r = n(48778)
      const s = (0, a.X$)((e) => {
        const { isOpen: t } = e,
          n = (0, r.Z)(i.gl.Extra, 'EmojiTooltip', !t)
        return n ? a.ZP.createElement(n, e) : void 0
      })
    },
    49841: (e, t, n) => {
      n.d(t, { Z: () => $ })
      var a = n(60748),
        i = n(33555),
        r = n(83716),
        s = n(863),
        o = n(11192),
        l = n(69118),
        c = n(65723),
        d = n(46752),
        u = n(517),
        m = n(98069),
        h = n(94462),
        p = n(96391),
        v = n(32340),
        f = n(60706),
        g = n(18674),
        Z = n(59107),
        P = n(3748),
        E = n(74288),
        y = n(28712),
        C = n(74753)
      function b(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' != typeof e || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var a = n.call(e, t)
                if ('object' != typeof a) return a
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
      class I {
        constructor(e, t, n) {
          ;(this.container = t),
            (this.options = n),
            b(this, 'video', void 0),
            b(this, 'isPlaying', !1),
            (this.video = document.createElement('video')),
            (this.video.src = e),
            (this.video.disablePictureInPicture = !0),
            (this.video.muted = !0),
            (this.video.style.position = 'absolute'),
            this.video.load(),
            this.options.noLoop || (this.video.loop = !0),
            this.container.appendChild(this.video),
            this.recalculatePositionAndSize()
        }
        play() {
          !this.isPlaying &&
            this.video &&
            (this.recalculatePositionAndSize(),
            this.video.paused && (0, C.Z)(this.video),
            (this.isPlaying = !0))
        }
        pause() {
          this.isPlaying &&
            this.video &&
            (this.video.paused || this.video.pause(), (this.isPlaying = !1))
        }
        destroy() {
          this.pause(), this.video?.remove(), (this.video = void 0)
        }
        updatePosition(e) {
          ;(this.options.position = e), this.recalculatePositionAndSize()
        }
        recalculatePositionAndSize() {
          if (!this.video) return
          const {
              size: e,
              position: { x: t, y: n },
            } = this.options,
            { width: a, height: i } = this.container.getBoundingClientRect()
          ;(this.video.style.left = `${Math.round(t * a)}px`),
            (this.video.style.top = `${Math.round(n * i)}px`),
            (this.video.style.width = `${e}px`),
            (this.video.style.height = `${e}px`)
        }
      }
      var w = n(74399),
        N = n(78722),
        S = n(45332),
        k = n(3927),
        M = n(70113),
        T = n(274)
      const x = 1.25 * w.Gw
      var L = n(42797),
        A = n(86203),
        F = n(72087)
      const R = 'input-scroller',
        D = 140,
        O = [
          'Esc',
          'Escape',
          'Enter',
          'PageUp',
          'PageDown',
          'Meta',
          'Alt',
          'Ctrl',
          'ArrowDown',
          'ArrowUp',
          'Control',
          'Shift',
        ],
        $ = (0, a.X$)(
          (0, i.c$)((e, t) => {
            let { chatId: n, threadId: a } = t
            const { messageSendKeyCombo: i } = e.settings.byKey
            return {
              messageSendKeyCombo: i,
              replyingToId: n && a ? (0, o.Yy)(e, n, a) : void 0,
              isSelectModeActive: (0, o.CA)(e),
            }
          })((e) => {
            let {
              ref: t,
              id: n,
              chatId: C,
              captionLimit: b,
              isAttachmentModalInput: w,
              editableInputId: $,
              isActive: B,
              getHtml: U,
              placeholder: j,
              forcedPlaceholder: X,
              canSendPlainText: z,
              canAutoFocus: Y,
              noFocusInterception: H,
              shouldSuppressFocus: _,
              shouldSuppressTextFormatter: V,
              replyingToId: q,
              isSelectModeActive: K,
              messageSendKeyCombo: W,
              onUpdate: G,
              onSuppressedFocus: J,
              onSend: Q,
              onScroll: ee,
            } = e
            const {
              editLastMessage: te,
              replyToNextMessage: ne,
              showAllowedMessageTypesNotification: ae,
            } = (0, i.Sv)()
            let ie = (0, a.sO)(null)
            t && (ie = t)
            const re = (0, a.sO)(null),
              se = (0, a.sO)(null),
              oe = (0, a.sO)(null),
              le = (0, a.sO)(null),
              ce = (0, a.sO)(null),
              de = (0, a.sO)(null),
              ue = (0, Z.Z)(),
              me = (0, a.sO)(!1),
              [he, pe, ve] = (0, f.Z)(),
              [fe, ge] = (0, a.eJ)(),
              [Ze, Pe] = (0, a.eJ)(),
              [Ee, ye] = (0, a.eJ)(!1),
              { isMobile: Ce } = (0, L.ZP)()
            !(function (e, t, n, r, s, c, d) {
              const { rgbColor: u } = (0, M.Z)(t),
                m = (0, a.sO)(new Map()),
                h = (0, a.I4)((e) => {
                  e.forEach((e) => {
                    const t = m.current.get(e)
                    t && (t.destroy(), m.current.delete(e))
                  })
                }, []),
                p = (0, a.I4)(() => {
                  if (!t.current || !n.current || !r.current) return
                  const e = (0, i.Rd)(),
                    a = new Set(m.current.keys())
                  Array.from(t.current.querySelectorAll('.custom-emoji')).forEach((t) => {
                    if (!t.dataset.uniqueId) return
                    const i = `${c}${t.dataset.uniqueId}${u?.join(',') || ''}`,
                      l = t.dataset.documentId
                    a.delete(i)
                    const d = (0, E.XH)(l)
                    if (!d) return
                    const h = n.current.getBoundingClientRect(),
                      p = t.getBoundingClientRect(),
                      v = (0, y.NM)((p.left - h.left) / h.width, 4),
                      f = (0, y.NM)((p.top - h.top) / h.height, 4)
                    if (m.current.has(i)) return void m.current.get(i).updatePosition(v, f)
                    const g = e.customEmojis.byId[l]
                    if (!g) return
                    const Z = g?.stickerSetInfo && (0, o.Si)(e, g.stickerSetInfo),
                      C = [c, l, u?.join(',')].filter(Boolean).join('_'),
                      b = (function (e) {
                        let {
                          customEmoji: t,
                          sharedCanvasRef: n,
                          sharedCanvasHqRef: a,
                          absoluteContainerRef: i,
                          renderId: r,
                          viewId: s,
                          mediaUrl: o,
                          position: l,
                          isHq: c,
                          textColor: d,
                        } = e
                        if (t.isLottie) {
                          const e = P.default.init(
                            o,
                            c ? a.current : n.current,
                            r,
                            s,
                            { size: x, coords: l, isLowPriority: !c },
                            t.shouldUseTextColor ? d : void 0
                          )
                          return {
                            play: () => e.play(),
                            pause: () => e.pause(),
                            destroy: () => e.removeView(s),
                            updatePosition: (t, n) => e.setSharedCanvasCoords(s, { x: t, y: n }),
                          }
                        }
                        if (t.isVideo) {
                          const e = new I(o, i.current, { size: x, position: l })
                          return {
                            play: () => e.play(),
                            pause: () => e.pause(),
                            destroy: () => e.destroy(),
                            updatePosition: (t, n) => e.updatePosition({ x: t, y: n }),
                          }
                        }
                        throw new Error('Unsupported custom emoji type')
                      })({
                        customEmoji: g,
                        sharedCanvasRef: n,
                        sharedCanvasHqRef: r,
                        absoluteContainerRef: s,
                        renderId: C,
                        viewId: i,
                        mediaUrl: d,
                        isHq: Z,
                        position: { x: v, y: f },
                        textColor: u,
                      })
                    b.play(), m.current.set(i, b)
                  }),
                    h(Array.from(a))
                }, [s, u, t, c, h, r, n])
              ;(0, a.d4)(
                () => (
                  (0, E.bn)(p),
                  () => {
                    ;(0, E.pT)(p)
                  }
                ),
                [p]
              ),
                (0, a.d4)(() => {
                  e() && t.current && n.current && d
                    ? (0, l.T2)(() => {
                        p()
                      })
                    : h(Array.from(m.current.keys()))
                }, [e, p, t, h, n, d]),
                (0, T.Z)(
                  (e) => {
                    let [t] = e
                    u !== t && p()
                  },
                  [u, p]
                )
              const v = (0, k.Z)(p, [p], 300, !1)
              ;(0, N.Z)(n, v)
              const f = (0, a.I4)(() => {
                  m.current.forEach((e) => {
                    e.pause()
                  })
                }, []),
                g = (0, a.I4)(() => {
                  m.current.forEach((e) => {
                    e.play()
                  })
                }, []),
                Z = (0, a.I4)(() => {
                  ;(0, l.T2)(g)
                }, [g])
              ;(0, S.Z)(f, Z)
            })(U, ie, le, ce, de, w ? 'attachment' : 'composer', B)
            const be = Ce ? 256 : 416,
              Ie = (0, a.I4)(
                function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  const t = ie.current.closest('.input-scroller'),
                    n = oe.current,
                    a = Number(t.style.height.replace('px', '')),
                    i = w ? 160 : be,
                    r = Math.min(n.scrollHeight, i)
                  if (r === a) return
                  const s = Math.round(50 * Math.log(Math.abs(r - a))),
                    o = () => {
                      ;(t.style.height = `${r}px`),
                        (t.style.transitionDuration = `${s}ms`),
                        t.classList.toggle('overflown', n.scrollHeight > i)
                    }
                  e ? requestAnimationFrame(o) : o()
                },
                [w, be]
              )
            ;(0, a.d4)(() => {
              w && Ie(!1)
            }, [w, Ie])
            const we = (0, a.sO)(U())
            ;(0, a.bt)(() => {
              const e = B ? U() : ''
              e !== ie.current.innerHTML && (ie.current.innerHTML = e),
                e !== se.current.innerHTML && (se.current.innerHTML = e),
                e !== we.current && ((we.current = e), Ie(!e))
            }, [U, B, Ie]),
              ((0, a.sO)(C).current = C)
            const Ne = (0, a.I4)(() => {
                ie.current && ((0, g.zG)() ? setTimeout(Ne, 350) : (0, c.Z)(ie.current))
              }, []),
              Se = (0, a.I4)(() => {
                ve(),
                  (function () {
                    const e = window.getSelection()
                    e && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty())
                  })()
              }, [ve])
            function ke() {
              if (s.cj) return !1
              const e = window.getSelection()
              if (!e || !e.rangeCount || me.current) return ve(), s.wZ && ye(!1), !1
              const t = e.getRangeAt(0),
                n = t.toString().trim()
              return (
                !(V || !(0, p.R)(t, $ || r.R2F) || !n || (0, h.Z)(n) || !t.START_TO_END) ||
                (ve(), !1)
              )
            }
            function Me() {
              if (!ke()) return
              if (Ee) return
              const e = window.getSelection().getRangeAt(0),
                t = e.getBoundingClientRect(),
                n = ie.current.closest('.input-scroller').getBoundingClientRect()
              let a = t.left + t.width / 2 - n.left
              a < D ? (a = D) : a > n.width - D && (a = n.width - D),
                ge({ x: a, y: t.top - n.top }),
                Pe(e),
                pe()
            }
            function Te() {
              re.current && window.clearTimeout(re.current),
                (re.current = window.setTimeout(Me, 260))
            }
            ;(0, a.d4)(() => {
              s.$b || (Y && Ne())
            }, [C, Ne, q, Y]),
              (0, a.d4)(() => {
                if (!C || $ !== r.R2F || H || (s.$b && Ce) || K) return
                const e = (e) => {
                  if ((0, m.wT)()) return
                  const { key: t } = e,
                    n = e.target
                  if (!n || O.includes(t)) return
                  const a = ie.current,
                    i = document.getSelection()?.isCollapsed
                  if (
                    !(
                      ((t.startsWith('Arrow') || (e.shiftKey && 'Shift' === t)) && !i) ||
                      ('KeyC' === e.code && (e.ctrlKey || e.metaKey) && 'INPUT' !== n.tagName)
                    ) &&
                    a &&
                    n !== a &&
                    'INPUT' !== n.tagName &&
                    'TEXTAREA' !== n.tagName &&
                    !n.isContentEditable
                  ) {
                    ;(0, c.Z)(a, !0, !0)
                    const t = new KeyboardEvent(e.type, e)
                    a.dispatchEvent(t)
                  }
                }
                return (
                  document.addEventListener('keydown', e, !0),
                  () => {
                    document.removeEventListener('keydown', e, !0)
                  }
                )
              }, [C, $, Ce, K, H]),
              (0, a.d4)(() => {
                const e = (0, l.Ds)(
                  (e) => {
                    'Tab' !== e.key ||
                      (0, m.wT)() ||
                      (e.preventDefault(), requestAnimationFrame(Ne))
                  },
                  2e3,
                  !0,
                  !1
                )
                return (0, u.Z)({ onTab: e })
              }, [Ne]),
              (0, a.d4)(() => {
                const e = ie.current
                function t() {
                  e.blur()
                }
                return (
                  _ && e.addEventListener('focus', t),
                  () => {
                    e.removeEventListener('focus', t)
                  }
                )
              }, [_])
            const xe = (0, A.Z)(() => Boolean(B && U()), [B, U]),
              Le = (0, d.Z)('form-control', xe && 'touched', _ && 'focus-disabled')
            return a.ZP.createElement(
              'div',
              { id: n, onClick: _ ? J : void 0, dir: ue.isRtl ? 'rtl' : void 0 },
              a.ZP.createElement(
                'div',
                {
                  className: (0, d.Z)('custom-scroll', R),
                  onScroll: ee,
                  onClick:
                    w || z
                      ? void 0
                      : function () {
                          w || z || ae({ chatId: C })
                        },
                },
                a.ZP.createElement(
                  'div',
                  { className: 'input-scroller-content' },
                  a.ZP.createElement('div', {
                    ref: ie,
                    id: $ || r.R2F,
                    className: Le,
                    contentEditable: w || z,
                    role: 'textbox',
                    dir: 'auto',
                    tabIndex: 0,
                    onClick: Ne,
                    onChange: function (e) {
                      const { innerHTML: t, textContent: n } = e.currentTarget
                      if (
                        (G('<br>' === t ? '' : t),
                        !s.$b &&
                          (!n || !n.length) &&
                          (s.op || !t.includes('emoji-small')) &&
                          !t.includes('custom-emoji'))
                      ) {
                        const e = window.getSelection()
                        e && (ie.current.blur(), e.removeAllRanges(), (0, c.Z)(ie.current, !0))
                      }
                    },
                    onKeyDown: function (e) {
                      const { isComposing: t } = e,
                        n = U()
                      if (!t && !n && (e.metaKey || e.ctrlKey)) {
                        const t = 'ArrowDown' === e.key ? 1 : 'ArrowUp' === e.key ? -1 : void 0
                        if (t) return e.preventDefault(), void ne({ targetIndexDelta: t })
                      }
                      t || 'Enter' !== e.key || e.shiftKey
                        ? t || 'ArrowUp' !== e.key || n || e.metaKey || e.ctrlKey || e.altKey
                          ? e.target.addEventListener('keyup', Te, { once: !0 })
                          : (e.preventDefault(), te())
                        : s.cj ||
                          s.wZ ||
                          !(
                            ('enter' === W && !e.shiftKey) ||
                            ('ctrl-enter' === W && (e.ctrlKey || e.metaKey))
                          ) ||
                          (e.preventDefault(), ve(), Q())
                    },
                    onMouseDown: function (e) {
                      function t(e) {
                        ;(e instanceof KeyboardEvent && 'Esc' !== e.key && 'Escape' !== e.key) ||
                          (setTimeout(() => {
                            me.current = !1
                          }, 100),
                          window.removeEventListener('keydown', t),
                          window.removeEventListener('mousedown', t))
                      }
                      2 === e.button
                        ? me.current ||
                          ((me.current = !0),
                          document.addEventListener('mousedown', t),
                          document.addEventListener('keydown', t))
                        : (
                            e.currentTarget.closest('.message-input-wrapper') || e.target
                          ).addEventListener('mouseup', Te, { once: !0 })
                    },
                    onContextMenu: s.wZ
                      ? function (e) {
                          ke() &&
                            (ye(!Ee), Ee ? ve() : (e.preventDefault(), e.stopPropagation(), Me()))
                        }
                      : void 0,
                    onTouchCancel: s.wZ ? Te : void 0,
                    'aria-label': j,
                  }),
                  !X &&
                    a.ZP.createElement(
                      'span',
                      {
                        className: (0, d.Z)('placeholder-text', !w && !z && 'with-icon'),
                        dir: 'auto',
                      },
                      !w &&
                        !z &&
                        a.ZP.createElement('i', { className: 'icon-lock-badge placeholder-icon' }),
                      j
                    ),
                  a.ZP.createElement('canvas', { ref: le, className: 'shared-canvas' }),
                  a.ZP.createElement('canvas', { ref: ce, className: 'shared-canvas' }),
                  a.ZP.createElement('div', { ref: de, className: 'absolute-video-container' })
                )
              ),
              a.ZP.createElement(
                'div',
                { ref: oe, className: (0, d.Z)('custom-scroll', R, 'clone') },
                a.ZP.createElement(
                  'div',
                  { className: 'input-scroller-content' },
                  a.ZP.createElement('div', {
                    ref: se,
                    className: (0, d.Z)(Le, 'clone'),
                    dir: 'auto',
                  })
                )
              ),
              void 0 !== b &&
                a.ZP.createElement('div', { className: 'max-length-indicator', dir: 'auto' }, b),
              a.ZP.createElement(F.Z, {
                isOpen: he,
                anchorPosition: fe,
                selectedRange: Ze,
                setSelectedRange: Pe,
                onClose: Se,
              }),
              X && a.ZP.createElement('span', { className: 'forced-placeholder' }, (0, v.Z)(X))
            )
          })
        )
    },
    23522: (e, t, n) => {
      n.d(t, { Z: () => v })
      var a = n(60748),
        i = n(33555),
        r = n(83716),
        s = n(46752),
        o = n(60706),
        l = n(63394),
        c = n(231),
        d = n(49204),
        u = n(43521),
        m = n(99203),
        h = n(48778)
      const p = (0, a.X$)((e) => {
          const { isOpen: t } = e,
            n = (0, h.Z)(m.gl.Extra, 'SymbolMenu', !t)
          return n ? a.ZP.createElement(n, e) : void 0
        }),
        v = (0, a.X$)((e) => {
          let {
            chatId: t,
            threadId: n,
            isMobile: m,
            canSendGifs: h,
            canSendStickers: v,
            isReady: f,
            isSymbolMenuOpen: g,
            openSymbolMenu: Z,
            closeSymbolMenu: P,
            onCustomEmojiSelect: E,
            onStickerSelect: y,
            onGifSelect: C,
            isAttachmentModal: b,
            canSendPlainText: I,
            onRemoveSymbol: w,
            onEmojiSelect: N,
            closeBotCommandMenu: S,
            closeSendAsMenu: k,
            isSymbolMenuForced: M,
            className: T,
          } = e
          const {
              setStickerSearchQuery: x,
              setGifSearchQuery: L,
              addRecentEmoji: A,
              addRecentCustomEmoji: F,
            } = (0, i.Sv)(),
            R = (0, a.sO)(null),
            [D, O] = (0, o.Z)(),
            [$, B] = (0, a.eJ)(void 0),
            U = (0, s.Z)(
              'mobile-symbol-menu-button',
              !f && 'not-ready',
              D ? g && 'menu-opened' : g && 'is-loading'
            ),
            j = (0, a.I4)(() => {
              S?.(), k?.(), Z()
              const e = R.current
              if (!e) return
              const { x: t, y: n } = e.getBoundingClientRect()
              B({ x: t, y: n })
            }, [S, k, Z]),
            X = (0, a.I4)(
              (e) => {
                'stickers' === e
                  ? (x({ query: '' }), L({ query: void 0 }))
                  : (L({ query: '' }), x({ query: void 0 }))
              },
              [x, L]
            ),
            z = (0, a.I4)(() => {
              const e = document.querySelector(b ? r.VEm : r.Edp)
              m && e === document.activeElement
                ? (e?.blur(),
                  setTimeout(() => {
                    S?.(), Z()
                  }, 100))
                : Z()
            }, [b, m, Z, S]),
            Y = (0, a.I4)(() => R.current, []),
            H = (0, a.I4)(() => R.current?.closest('.custom-scroll, .no-scrollbar'), []),
            _ = (0, a.I4)(() => document.querySelector('#portals .SymbolMenu .bubble'), []),
            V = (0, a.I4)(() => ({ withPortal: !0 }), []),
            {
              positionX: q,
              positionY: K,
              transformOriginX: W,
              transformOriginY: G,
              style: J,
            } = (0, l.Z)($, Y, H, _, V)
          return a.ZP.createElement(
            a.ZP.Fragment,
            null,
            m
              ? a.ZP.createElement(
                  c.Z,
                  {
                    className: U,
                    round: !0,
                    color: 'translucent',
                    onClick: g ? P : z,
                    ariaLabel: 'Choose emoji, sticker or GIF',
                  },
                  a.ZP.createElement('i', { className: 'icon-smile' }),
                  a.ZP.createElement('i', { className: 'icon-keyboard' }),
                  g && !D && a.ZP.createElement(d.Z, { color: 'gray' })
                )
              : a.ZP.createElement(
                  u.Z,
                  {
                    className: (0, s.Z)('symbol-menu-button', g && 'activated'),
                    round: !0,
                    color: 'translucent',
                    onActivate: j,
                    ariaLabel: 'Choose emoji, sticker or GIF',
                  },
                  a.ZP.createElement('div', { ref: R, className: 'symbol-menu-trigger' }),
                  a.ZP.createElement('i', { className: 'icon-smile' })
                ),
            a.ZP.createElement(p, {
              chatId: t,
              threadId: n,
              isOpen: g || Boolean(M),
              canSendGifs: h,
              canSendStickers: v,
              onLoad: O,
              onClose: P,
              onEmojiSelect: N,
              onStickerSelect: y,
              onCustomEmojiSelect: E,
              onGifSelect: C,
              onRemoveSymbol: w,
              onSearchOpen: X,
              addRecentEmoji: A,
              addRecentCustomEmoji: F,
              isAttachmentModal: b,
              canSendPlainText: I,
              className: T,
              positionX: b ? q : void 0,
              positionY: b ? K : void 0,
              transformOriginX: b ? W : void 0,
              transformOriginY: b ? G : void 0,
              style: b ? J : void 0,
            })
          )
        })
    },
    72087: (e, t, n) => {
      n.d(t, { Z: () => Z })
      var a = n(60748),
        i = n(6137),
        r = n(83716),
        s = n(46752),
        o = n(81396),
        l = n(23989),
        c = n(44139),
        d = n(3858),
        u = n(31212),
        m = n(58758),
        h = n(60706),
        p = n(59107),
        v = n(231)
      const f = {
          B: 'bold',
          STRONG: 'bold',
          I: 'italic',
          EM: 'italic',
          U: 'underline',
          DEL: 'strikethrough',
          CODE: 'monospace',
          SPAN: 'spoiler',
        },
        g = document.createElement('div'),
        Z = (0, a.X$)((e) => {
          let {
            isOpen: t,
            anchorPosition: n,
            selectedRange: Z,
            setSelectedRange: P,
            onClose: E,
          } = e
          const y = (0, a.sO)(null),
            C = (0, a.sO)(null),
            { shouldRender: b, transitionClassNames: I } = (0, u.Z)(t),
            [w, N, S] = (0, h.Z)(),
            [k, M] = (0, a.eJ)(''),
            [T, x] = (0, a.eJ)(!1),
            [L, A] = (0, a.eJ)(),
            [F, R] = (0, a.eJ)({})
          ;(0, a.d4)(() => (t ? (0, l.Z)(E) : void 0), [t, E]),
            (0, m.Z)(t, y, E, !0),
            (0, a.d4)(() => {
              w ? C.current.focus() : (M(''), x(!1))
            }, [w]),
            (0, a.d4)(() => {
              b || (S(), R({}), A(void 0))
            }, [S, b]),
            (0, a.d4)(() => {
              if (!t || !Z) return
              const e = {}
              let { parentElement: n } = Z.commonAncestorContainer
              for (; n && n.id !== r.R2F; ) {
                const t = f[n.tagName]
                t && (e[t] = !0), (n = n.parentElement)
              }
              R(e)
            }, [t, Z, N])
          const D = (0, a.I4)(() => {
              if (!Z) return
              const e = window.getSelection()
              e && (e.removeAllRanges(), e.addRange(Z))
            }, [Z]),
            O = (0, a.I4)(() => {
              const e = window.getSelection()
              e && P(e.getRangeAt(0))
            }, [P]),
            $ = (0, a.I4)(
              (e) => {
                if (Z)
                  return (
                    g.replaceChildren(Z.cloneContents()),
                    e &&
                      g.querySelectorAll(c.fJ).forEach((e) => {
                        e.replaceWith(e.getAttribute('alt'))
                      }),
                    g.innerHTML
                  )
              },
              [Z]
            ),
            B = (0, a.I4)(() => {
              if (Z) return Z.commonAncestorContainer.parentElement
            }, [Z])
          function U() {
            const e = C.current
            if (!e) return
            const { offsetWidth: t, scrollWidth: n, scrollLeft: a } = e
            if (n <= t) return void A(void 0)
            let i = ''
            a < n - t && (i = 'mask-right'), a > 0 && (i += ' mask-left'), A(i)
          }
          function j(e) {
            if (F[e]) return 'active'
            if ('monospace' === e || 'strikethrough' === e) {
              if (Object.keys(F).some((t) => t !== e && Boolean(F[t]))) return 'disabled'
            } else if (F.monospace || F.strikethrough) return 'disabled'
          }
          const X = (0, a.I4)(() => {
              if (F.spoiler) {
                const e = B()
                if (!Z || !e || e.dataset.entityType !== i.Vv.Spoiler || !e.textContent) return
                return e.replaceWith(e.textContent), void R((e) => ({ ...e, spoiler: !1 }))
              }
              const e = $()
              document.execCommand(
                'insertHTML',
                !1,
                `<span class="spoiler" data-entity-type="${i.Vv.Spoiler}">${e}</span>`
              ),
                E()
            }, [B, $, E, Z, F.spoiler]),
            z = (0, a.I4)(() => {
              R(
                (e) => (
                  document.execCommand(e.bold ? 'removeFormat' : 'bold'),
                  Object.keys(e).forEach((t) => {
                    ;('italic' !== t && 'underline' !== t) ||
                      !Boolean(e[t]) ||
                      document.execCommand(t)
                  }),
                  O(),
                  { ...e, bold: !e.bold }
                )
              )
            }, [O]),
            Y = (0, a.I4)(() => {
              document.execCommand('italic'), O(), R((e) => ({ ...e, italic: !e.italic }))
            }, [O]),
            H = (0, a.I4)(() => {
              document.execCommand('underline'), O(), R((e) => ({ ...e, underline: !e.underline }))
            }, [O]),
            _ = (0, a.I4)(() => {
              if (F.strikethrough) {
                const e = B()
                if (!Z || !e || 'DEL' !== e.tagName || !e.textContent) return
                return e.replaceWith(e.textContent), void R((e) => ({ ...e, strikethrough: !1 }))
              }
              const e = $()
              document.execCommand('insertHTML', !1, `<del>${e}</del>`), E()
            }, [B, $, E, Z, F.strikethrough]),
            V = (0, a.I4)(() => {
              if (F.monospace) {
                const e = B()
                if (!Z || !e || 'CODE' !== e.tagName || !e.textContent) return
                return e.replaceWith(e.textContent), void R((e) => ({ ...e, monospace: !1 }))
              }
              const e = $(!0)
              document.execCommand(
                'insertHTML',
                !1,
                `<code class="text-entity-code" dir="auto">${e}</code>`
              ),
                E()
            }, [B, $, E, Z, F.monospace]),
            q = (0, a.I4)(() => {
              const e = ((0, o.X)(k) || '').split('%').map(encodeURI).join('%')
              if (T) {
                const t = B()
                if (!t || 'A' !== t.tagName) return
                return (t.href = e), void E()
              }
              const t = $(!0)
              D(),
                document.execCommand(
                  'insertHTML',
                  !1,
                  `<a href=${e} class="text-entity-link" dir="auto">${t}</a>`
                ),
                E()
            }, [B, $, T, k, E, D]),
            K = (0, a.I4)(
              (e) => {
                const t = { k: N, b: z, u: H, i: Y, m: V, s: _, p: X }[
                  (function (e) {
                    const t = e.key || e.code
                    return t.startsWith('Key') ? t.slice(3).toLowerCase() : t
                  })(e)
                ]
                !e.altKey &&
                  (e.ctrlKey || e.metaKey) &&
                  t &&
                  (e.preventDefault(), e.stopPropagation(), t())
              },
              [N, z, H, Y, V, _, X]
            )
          ;(0, a.d4)(
            () => (
              t && document.addEventListener('keydown', K),
              () => document.removeEventListener('keydown', K)
            ),
            [t, K]
          )
          const W = (0, p.Z)()
          if (!b) return
          const G = (0, s.Z)('TextFormatter', I, w && 'link-control-shown'),
            J = (0, s.Z)('TextFormatter-link-url-confirm', Boolean(k.length) && 'shown'),
            Q = n ? `left: ${n.x}px; top: ${n.y}px;--text-formatter-left: ${n.x}px;` : ''
          return a.ZP.createElement(
            'div',
            {
              ref: y,
              className: G,
              style: Q,
              onKeyDown: function (e) {
                'Enter' === e.key && w && (q(), e.preventDefault())
              },
              onMouseDown: d.Z,
            },
            a.ZP.createElement(
              'div',
              { className: 'TextFormatter-buttons' },
              a.ZP.createElement(
                v.Z,
                {
                  color: 'translucent',
                  ariaLabel: 'Spoiler text',
                  className: j('spoiler'),
                  onClick: X,
                },
                a.ZP.createElement('i', { className: 'icon-eye-closed' })
              ),
              a.ZP.createElement('div', { className: 'TextFormatter-divider' }),
              a.ZP.createElement(
                v.Z,
                { color: 'translucent', ariaLabel: 'Bold text', className: j('bold'), onClick: z },
                a.ZP.createElement('i', { className: 'icon-bold' })
              ),
              a.ZP.createElement(
                v.Z,
                {
                  color: 'translucent',
                  ariaLabel: 'Italic text',
                  className: j('italic'),
                  onClick: Y,
                },
                a.ZP.createElement('i', { className: 'icon-italic' })
              ),
              a.ZP.createElement(
                v.Z,
                {
                  color: 'translucent',
                  ariaLabel: 'Underlined text',
                  className: j('underline'),
                  onClick: H,
                },
                a.ZP.createElement('i', { className: 'icon-underlined' })
              ),
              a.ZP.createElement(
                v.Z,
                {
                  color: 'translucent',
                  ariaLabel: 'Strikethrough text',
                  className: j('strikethrough'),
                  onClick: _,
                },
                a.ZP.createElement('i', { className: 'icon-strikethrough' })
              ),
              a.ZP.createElement(
                v.Z,
                {
                  color: 'translucent',
                  ariaLabel: 'Monospace text',
                  className: j('monospace'),
                  onClick: V,
                },
                a.ZP.createElement('i', { className: 'icon-monospace' })
              ),
              a.ZP.createElement('div', { className: 'TextFormatter-divider' }),
              a.ZP.createElement(
                v.Z,
                { color: 'translucent', ariaLabel: W('TextFormat.AddLinkTitle'), onClick: N },
                a.ZP.createElement('i', { className: 'icon-link' })
              )
            ),
            a.ZP.createElement(
              'div',
              { className: 'TextFormatter-link-control' },
              a.ZP.createElement(
                'div',
                { className: 'TextFormatter-buttons' },
                a.ZP.createElement(
                  v.Z,
                  { color: 'translucent', ariaLabel: W('Cancel'), onClick: S },
                  a.ZP.createElement('i', { className: 'icon-arrow-left' })
                ),
                a.ZP.createElement('div', { className: 'TextFormatter-divider' }),
                a.ZP.createElement(
                  'div',
                  { className: (0, s.Z)('TextFormatter-link-url-input-wrapper', L) },
                  a.ZP.createElement('input', {
                    ref: C,
                    className: 'TextFormatter-link-url-input',
                    type: 'text',
                    value: k,
                    placeholder: 'Enter URL...',
                    autoComplete: 'off',
                    inputMode: 'url',
                    dir: 'auto',
                    onChange: function (e) {
                      M(e.target.value), U()
                    },
                    onScroll: U,
                  })
                ),
                a.ZP.createElement(
                  'div',
                  { className: J },
                  a.ZP.createElement('div', { className: 'TextFormatter-divider' }),
                  a.ZP.createElement(
                    v.Z,
                    {
                      color: 'translucent',
                      ariaLabel: W('Save'),
                      className: 'color-primary',
                      onClick: q,
                    },
                    a.ZP.createElement('i', { className: 'icon-check' })
                  )
                )
              )
            )
          )
        })
    },
    21262: (e, t, n) => {
      n.d(t, { Z: () => i })
      var a = n(71394)
      async function i(e) {
        const t = []
        function n(e, a) {
          return new Promise((i) => {
            if (e instanceof File) t.push(e), i(e)
            else if (e.isFile) {
              const n = a.getAsFile()
              e.file(
                (e) => {
                  t.push(e), i(e)
                },
                () => {
                  n && t.push(n), i(n)
                }
              )
            } else
              e.isDirectory &&
                e.createReader().readEntries((e) => {
                  const t = []
                  for (let i = 0; i < e.length; i++) t.push(n(e[i], a))
                  i(Promise.all(t))
                })
          })
        }
        const i = []
        for (let t = 0; t < e.length; t++) {
          const a = e[t]
          if ('file' === a.kind) {
            const e = a.webkitGetAsEntry() || a.getAsFile()
            e && i.push(n(e, a))
          }
        }
        return await Promise.all(i), (0, a.ox)(t)
      }
    },
    52400: (e, t, n) => {
      n.d(t, { _: () => o })
      const a = /(<br>|<br\s?\/>)/g,
        i = /(&nbsp;|\u00A0)/g,
        r = /(<div>|<\/div>)/gi,
        s = /\n$/i
      function o(e) {
        return e.replace(i, ' ').replace(a, '\n').replace(r, '').replace(s, '')
      }
    },
    96391: (e, t, n) => {
      function a(e, t) {
        const { commonAncestorContainer: n } = e
        let a = n,
          i = 1
        for (; a && a.id !== t && i < 5; ) (a = a.parentElement), i++
        return Boolean(a && a.id === t)
      }
      n.d(t, { R: () => a })
    },
    60130: (e, t, n) => {
      n.d(t, { Z: () => g })
      var a = n(60748),
        i = n(33681),
        r = n(33555),
        s = n(83716),
        o = n(863),
        l = n(41098),
        c = n(65723),
        d = n(44139),
        u = n(86203),
        m = n(60706),
        h = n(71790),
        p = n(11309)
      const v = new RegExp(`(${i.Z.source})$`, 'g'),
        f = new RegExp(`${s.t8f.source}$`, 'g')
      function g(e, t, n, g, Z, P) {
        const { loadCustomEmojiForEmoji: E, clearCustomEmojiForEmoji: y } = (0, r.Sv)(),
          [C, b, I] = (0, m.Z)(!1),
          w = (0, p.C)(
            () => {
              const n = t()
              if (e && n && g()?.collapsed && n.match(o.op ? i.Z : s.t8f))
                return (0, l.g)(Z.current).match(o.op ? v : f)?.[0]
            },
            [t, g, Z, e],
            300
          ),
          N = (0, h.Z)(w, [w, t, g], !0),
          S = (0, u.Z)(() => Boolean(N()), [N]),
          k = Boolean(P?.length)
        ;(0, a.d4)(() => {
          if (!e) return
          const t = N()
          t ? k || E({ emoji: o.op ? t : t.match(/.+alt="(.+)"/)?.[1] }) : y()
        }, [e, N, k, y, E])
        const M = (0, a.I4)(
          (t) => {
            const a = N()
            if (!e || !a) return
            const i = Z.current,
              r = (0, l.g)(i),
              s = o.op ? a : a.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'),
              u = new RegExp(`(${s})\\1*$`, ''),
              m = r.match(u)[0].length / a.length,
              h = r.replace(u, (0, d.yR)(t).repeat(m)),
              p = i.innerHTML.substring(r.length)
            n(`${h}${p}`),
              requestAnimationFrame(() => {
                ;(0, c.Z)(i, !0, !0)
              })
          },
          [N, e, Z, n]
        )
        return (
          (0, a.d4)(I, [I, t]),
          {
            isCustomEmojiTooltipOpen: Boolean(S && k && !C),
            closeCustomEmojiTooltip: b,
            insertCustomEmoji: M,
          }
        )
      }
    },
    28353: (e, t, n) => {
      n.d(t, { Z: () => N })
      var a = n(60748),
        i = n(33555),
        r = n(34284),
        s = n(83716),
        o = n(60782),
        l = n(70735),
        c = n(52400),
        d = n(65723),
        u = n(16580),
        m = n(32340),
        h = n(11192),
        p = n(44139),
        v = n(60706),
        f = n(71790),
        g = n(11309)
      let Z, P, E, y, C
      const b = (0, u.Z)(function (e, t, n) {
          return e && t.length ? Object.values((0, o.q0)(e, t)).slice(0, n) : l.D
        }),
        I = (0, u.Z)(function (e, t, n) {
          const a = Object.values(e),
            i = (0, o.ee)(a, 'native'),
            r = t ? (0, o.Q8)(t, (e) => Object.values((0, o.q0)(i, e))) : {},
            s = n ? (0, o.Q8)(n, (e) => Object.values((0, o.q0)(i, e))) : {},
            l = { ...r, ...s },
            c = [].concat(Object.keys(r), Object.keys(s)),
            d = a.reduce(
              (e, t) => (
                t.names.forEach((n) => {
                  e[n] || (e[n] = []), e[n].push(t)
                }),
                e
              ),
              {}
            ),
            u = Object.keys(d),
            m = c.reduce((e, t) => Math.max(e, t.length), 0)
          return { byKeyword: l, keywords: c, byName: d, names: u, maxKeyLength: m }
        }),
        w = (0, u.Z)(function (e, t, n) {
          const { byKeyword: a, keywords: i, byName: r, names: s, maxKeyLength: c } = e
          let d = []
          if (t.length > c) return l.D
          const u = i.filter((e) => e.startsWith(t)).sort()
          d = d.concat(Object.values((0, o.q0)(a, u)).flat())
          const m = s.filter((e) => e.startsWith(t))
          return (
            (d = d.concat(Object.values((0, o.q0)(r, m)).flat())),
            (d = (0, o.Tw)(d)),
            d.length ? d.slice(0, n) : l.D
          )
        })
      try {
        ;(y = /(^|\s):(?!\s)[-+_:'\s\p{L}\p{N}]*$/giu), (C = /\p{Ll}/u)
      } catch (e) {
        ;(y = /(^|\s):(?!\s)[-+_:'\s\d\wа-яёґєії]*$/gi), (C = /[a-zяёґєії]/)
      }
      function N(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.R2F,
          u = arguments.length > 4 ? arguments[4] : void 0,
          Z = arguments.length > 5 ? arguments[5] : void 0,
          P = arguments.length > 6 ? arguments[6] : void 0
        const [N, k, M] = (0, v.Z)(!1),
          [T, x] = (0, a.eJ)(),
          [L, A] = (0, a.eJ)(l.D),
          [F, R] = (0, a.eJ)(l.D)
        ;(0, a.d4)(() => {
          function t() {
            x(E.emojis)
          }
          e && (E ? t() : S().then(t))
        }, [e])
        const D = (0, g.C)(
            () => {
              const n = t()
              return e && n.includes(':') ? (0, c._)(n).match(y)?.[0].trim() : void 0
            },
            [t, e],
            300
          ),
          O = (0, f.Z)(D, [D, t], !0),
          $ = (0, a.I4)((e) => {
            if ((A(e), e === l.D)) return void R(l.D)
            const t = e.map((e) => e.native),
              n = (0, o.od)((0, h.iX)((0, i.Rd)(), t), 'id')
            R(n)
          }, []),
          B = (0, a.I4)(
            function (e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              const i = t()
              if (!i) return
              const o = i.lastIndexOf(':', a ? i.lastIndexOf(':') - 1 : void 0)
              if (-1 !== o) {
                const t = 'string' == typeof e ? (0, m.Z)(e, ['emoji_html']) : (0, p.yR)(e)
                n(`${i.substring(0, o)}${t}`)
                const a = r === s.R2F ? document.querySelector(s.Edp) : document.getElementById(r)
                requestAnimationFrame(() => {
                  ;(0, d.Z)(a, !0, !0)
                })
              }
              $(l.D)
            },
            [t, n, r, $]
          )
        return (
          (0, a.d4)(() => {
            const e = O()
            if (!e || !T) return void $(l.D)
            const t = e.length > 2 && e.endsWith(':'),
              n = e.substring(1, t ? 1 + e.length - 2 : void 0)
            let a = l.D
            if (n) {
              if ((1 === n.length && C.test(n)) || n.length >= 2) {
                const e = I(T, Z, P)
                a = w(e, n.toLowerCase(), 36)
              }
            } else a = b(T, u, 36)
            a.length ? (t ? B(a[0].native, !0) : $(a)) : $(l.D)
          }, [Z, T, O, P, B, u, $]),
          (0, a.d4)(M, [M, t]),
          {
            isEmojiTooltipOpen: Boolean(L.length || F.length) && !N,
            closeEmojiTooltip: k,
            filteredEmojis: L,
            filteredCustomEmojis: F,
            insertEmoji: B,
          }
        )
      }
      async function S() {
        return (
          Z ||
            ((Z = n.e(7501).then(n.t.bind(n, 47501, 19))),
            (P = (await Z).default),
            (E = (0, r.NM)(P))),
          Z
        )
      }
    },
    29295: (e, t, n) => {
      n.d(t, { Z: () => v })
      var a = n(60748),
        i = n(33555),
        r = n(6137),
        s = n(56112),
        o = n(52400),
        l = n(65723),
        c = n(60782),
        d = n(41098),
        u = n(60706),
        m = n(71790),
        h = n(11309)
      let p
      try {
        p = /(^|\s)@[-_\p{L}\p{M}\p{N}]*$/giu
      } catch (e) {
        p = /(^|\s)@[-_\d\wа-яёґєії]*$/gi
      }
      function v(e, t, n, v, g, Z, P, E) {
        const [y, C] = (0, a.eJ)(),
          [b, I, w] = (0, u.Z)(!1),
          N = (0, h.C)(
            () => {
              const n = t()
              if (!e || !v()?.collapsed || !n.includes('@')) return
              const a = (0, d.g)(g.current)
              return (0, o._)(a).match(p)?.[0].trim()
            },
            [e, t, v, g],
            300
          ),
          S = (0, m.Z)(N, [N, t, v], !0),
          k = (0, m.Z)(() => e && t().startsWith('@'), [t, e])
        ;(0, a.d4)(() => {
          const e = S()
          if (!e || (!Z && !P)) return void C(void 0)
          const t = (0, i.Rd)().users.byId
          if (!t) return void C(void 0)
          const n = Z?.reduce((e, t) => (t.userId !== E && e.push(t.userId), e), []),
            a = e.substring(1),
            r = (0, s.kK)((0, c.Tw)([...((k() && P) || []), ...(n || [])]), t, a)
          C(Object.values((0, c.q0)(t, r)))
        }, [E, Z, P, S, k])
        const M = (0, a.I4)(
          function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            if (!e.usernames && !(0, s.Vl)(e)) return
            const a = (0, s.WS)(e),
              i = a
                ? `@${a}`
                : `<a\n          class="text-entity-link"\n          data-entity-type="${
                    r.Vv.MentionName
                  }"\n          data-user-id="${
                    e.id
                  }"\n          contenteditable="false"\n          dir="auto"\n        >${(0, s.Vl)(
                    e
                  )}</a>`,
              o = g.current,
              c = (0, d.g)(o),
              u = f(c),
              m = u.lastIndexOf('@')
            if (-1 !== m) {
              const e = `${u.substr(0, m)}${i}&nbsp;`,
                a = f(o.innerHTML).substring(u.length)
              n(`${e}${a}`),
                requestAnimationFrame(() => {
                  ;(0, l.Z)(o, t)
                })
            }
            C(void 0)
          },
          [g, n]
        )
        return (
          (0, a.d4)(w, [w, t]),
          {
            isMentionTooltipOpen: Boolean(y?.length && !b),
            closeMentionTooltip: I,
            insertMention: M,
            mentionFilteredUsers: y,
          }
        )
      }
      function f(e) {
        return e.replace(/<div>(<br>|<br\s?\/>)?<\/div>/gi, '<br>')
      }
    },
    17891: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(34446),
        r = n(65326)
      function s(e, t) {
        const n = void 0 === t,
          s = (0, a.sO)(n),
          o = (0, a.sO)(),
          l = (0, r.Z)()
        return (
          (0, i.Z)(() => {
            n || ((s.current = !1), o.current && (clearTimeout(o.current), (o.current = void 0)))
          }, e),
          (0, a.d4)(() => {
            if (n || s.current) return
            const e = () => {
              ;(s.current = !0), l()
            }
            t > 0 ? (o.current = window.setTimeout(e, t)) : e()
          }, e),
          s.current
        )
      }
    },
    51218: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748),
        i = n(14605)
      const r = (0, a.X$)((e) => {
        let {
          id: t,
          options: n,
          selected: r = [],
          disabled: s,
          round: o,
          loadingOptions: l,
          onChange: c,
        } = e
        const [d, u] = (0, a.eJ)(r || []),
          m = (0, a.I4)(
            (e) => {
              const { value: t, checked: n } = e.currentTarget
              let a
              ;(a = n ? [...d, t] : d.filter((e) => e !== t)), u(a), c(a)
            },
            [c, d]
          )
        return a.ZP.createElement(
          'div',
          { id: t, className: 'radio-group' },
          n.map((e) =>
            a.ZP.createElement(i.Z, {
              label: e.label,
              subLabel: e.subLabel,
              value: e.value,
              checked: -1 !== r.indexOf(e.value),
              disabled: e.disabled || s,
              round: o,
              isLoading: l ? -1 !== l.indexOf(e.value) : void 0,
              onChange: m,
            })
          )
        )
      })
    },
    66735: (e, t, n) => {
      n.d(t, { Z: () => p })
      var a = n(60748),
        i = n(83716),
        r = n(71394),
        s = n(59107),
        o = n(231),
        l = n(13103),
        c = n(34288)
      const d = {
        type: 'blob',
        quality: 1,
        format: 'jpeg',
        circle: !1,
        size: { width: 1024, height: 1024 },
      }
      let u, m, h
      const p = (0, a.X$)((e) => {
        let { file: t, onChange: p, onClose: v } = e
        const [f, g] = (0, a.eJ)(!1)
        ;(0, a.d4)(() => {
          t &&
            (f
              ? (async function (e) {
                  try {
                    const t = document.getElementById('avatar-crop')
                    if (!t) return
                    const { offsetWidth: n, offsetHeight: a } = t
                    h = new u(t, {
                      enableZoom: !0,
                      boundary: { width: n, height: a },
                      viewport: { width: n - 16, height: a - 16, type: 'circle' },
                    })
                    const i = await (0, r.YJ)(e)
                    await h.bind({ url: i })
                  } catch (e) {
                    i.eMD && console.error(e)
                  }
                })(t)
              : (async function () {
                  return (
                    m ||
                      ((m = Promise.all([n.e(5099), n.e(3472)]).then(n.bind(n, 23472))),
                      (u = (await m).default)),
                    m
                  )
                })().then(() => g(!0)))
        }, [t, f])
        const Z = (0, s.Z)(),
          P = (0, a.I4)(async () => {
            if (!h) return
            const e = await h.result(d),
              t = 'string' == typeof e ? e : (0, r.hl)(e, 'avatar.jpg')
            p(t)
          }, [p])
        return a.ZP.createElement(
          l.Z,
          {
            isOpen: Boolean(t),
            onClose: v,
            title: 'Drag to reposition',
            className: 'CropModal',
            hasCloseButton: !0,
          },
          f ? a.ZP.createElement('div', { id: 'avatar-crop' }) : a.ZP.createElement(c.Z, null),
          a.ZP.createElement(
            o.Z,
            {
              className: 'confirm-button',
              round: !0,
              color: 'primary',
              onClick: P,
              ariaLabel: Z('CropImage'),
            },
            a.ZP.createElement('i', { className: 'icon-check' })
          )
        )
      })
    },
    41151: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(46752),
        r = n(59107),
        s = n(231)
      const o = (e) => {
        let {
          isShown: t,
          className: n,
          color: o = 'primary',
          ariaLabel: l,
          disabled: c,
          onClick: d,
          children: u,
        } = e
        const m = (0, r.Z)(),
          h = (0, i.Z)('FloatingActionButton', t && 'revealed', n)
        return a.ZP.createElement(
          s.Z,
          {
            className: h,
            color: o,
            round: !0,
            disabled: c,
            onClick: t && !c ? d : void 0,
            ariaLabel: l,
            tabIndex: -1,
            isRtl: m.isRtl,
          },
          u
        )
      }
    },
    31876: (e, t, n) => {
      n.d(t, { Z: () => f })
      var a = n(60748),
        i = n(863),
        r = n(69118),
        s = n(46752),
        o = n(17240),
        l = n(63394),
        c = n(60706),
        d = n(59107),
        u = n(68512),
        m = n(52328),
        h = n(58964),
        p = n(66902),
        v = n(231)
      const f = (e) => {
        let {
            ref: t,
            buttonRef: n,
            icon: f,
            leftElement: g,
            buttonClassName: Z,
            secondaryIcon: P,
            rightElement: E,
            className: y,
            style: C,
            children: b,
            disabled: I,
            allowDisabledClick: w,
            ripple: N,
            narrow: S,
            inactive: k,
            focus: M,
            destructive: T,
            multiline: x,
            isStatic: L,
            contextActions: A,
            withPortalForMenu: F,
            href: R,
            onMouseDown: D,
            onClick: O,
            clickArg: $,
            onSecondaryIconClick: B,
            onDragEnter: U,
          } = e,
          j = (0, a.sO)(null)
        t && (j = t)
        const [X, z, Y] = (0, c.Z)(),
          {
            isContextMenuOpen: H,
            contextMenuPosition: _,
            handleBeforeContextMenu: V,
            handleContextMenu: q,
            handleContextMenuClose: K,
            handleContextMenuHide: W,
          } = (0, o.Z)(j, !A),
          G = (0, a.I4)(() => j.current, []),
          J = (0, a.I4)(() => j.current.closest('.custom-scroll'), []),
          Q = (0, a.I4)(
            () =>
              (F ? document.querySelector('#portals') : j.current).querySelector(
                '.ListItem-context-menu .bubble'
              ),
            [F]
          ),
          ee = (0, a.I4)(() => ({ withPortal: F }), [F]),
          {
            positionX: te,
            positionY: ne,
            transformOriginX: ae,
            transformOriginY: ie,
            style: re,
          } = (0, l.Z)(_, G, J, Q, ee),
          se = (0, a.I4)((e) => {
            e.ctrlKey || e.metaKey || e.shiftKey || e.button !== i.tc.Main || e.preventDefault()
          }, []),
          oe = (0, a.I4)(
            (e) => {
              if ((!I || w) && O) {
                if (R) {
                  if (
                    ((e.ctrlKey || e.metaKey || e.shiftKey) && e.button === i.tc.Main) ||
                    e.button === i.tc.Auxiliary
                  )
                    return
                  e.preventDefault()
                }
                O(e, $), i.$b && !N && (z(), (0, r.T2)(Y))
              }
            },
            [w, $, I, z, O, N, Y, R]
          ),
          le = (e) => {
            ;(I && !w) || 0 !== e.button || (!B && !A) || (e.stopPropagation(), B ? B(e) : q(e))
          },
          ce = (0, a.I4)(
            (e) => {
              k ||
                i.$b ||
                (!A || (e.button !== i.tc.Secondary && O) || V(e),
                e.button === i.tc.Main && (O ? oe(e) : q(e)))
            },
            [k, A, O, V, q, oe]
          ),
          de = (0, d.Z)(),
          ue = (0, s.Z)(
            'ListItem',
            y,
            !L && 'no-selection',
            N && 'has-ripple',
            S && 'narrow',
            I && 'disabled',
            w && 'click-allowed',
            k && 'inactive',
            _ && 'has-menu-open',
            M && 'focus',
            T && 'destructive',
            x && 'multiline',
            L && 'is-static'
          ),
          me = R ? 'a' : 'div'
        return a.ZP.createElement(
          'div',
          {
            ref: j,
            className: ue,
            dir: de.isRtl ? 'rtl' : void 0,
            style: C,
            onMouseDown: D,
            onDragEnter: U,
          },
          a.ZP.createElement(
            me,
            {
              className: (0, s.Z)('ListItem-button', X && 'active', Z),
              role: L ? void 0 : 'button',
              href: R,
              ref: n,
              tabIndex: L ? void 0 : 0,
              onClick: !k && i.$b ? oe : se,
              onMouseDown: ce,
              onContextMenu: !k && A ? q : void 0,
            },
            g,
            f && a.ZP.createElement('i', { className: `icon-${f}` }),
            x && a.ZP.createElement('div', { className: 'multiline-item' }, b),
            !x && b,
            !I && !k && N && a.ZP.createElement(u.Z, null),
            P &&
              a.ZP.createElement(
                v.Z,
                {
                  className: 'secondary-icon',
                  round: !0,
                  color: 'translucent',
                  size: 'smaller',
                  onClick: i.$b ? le : void 0,
                  onMouseDown: i.$b ? void 0 : le,
                },
                a.ZP.createElement('i', { className: `icon-${P}` })
              ),
            E
          ),
          A &&
            void 0 !== _ &&
            a.ZP.createElement(
              m.Z,
              {
                isOpen: H,
                transformOriginX: ae,
                transformOriginY: ie,
                positionX: te,
                positionY: ne,
                style: re,
                className: 'ListItem-context-menu',
                autoClose: !0,
                onClose: K,
                onCloseAnimationEnd: W,
                withPortal: F,
              },
              A.map((e) =>
                'isSeparator' in e
                  ? a.ZP.createElement(p.Z, { key: e.key || 'separator' })
                  : a.ZP.createElement(
                      h.Z,
                      {
                        key: e.title,
                        icon: e.icon,
                        destructive: e.destructive,
                        disabled: !e.handler,
                        onClick: e.handler,
                      },
                      e.title
                    )
              )
            )
        )
      }
    },
    66902: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748),
        i = n(46752)
      const r = (e) => {
        let { className: t } = e
        return a.ZP.createElement('div', { className: (0, i.Z)('GC8g9Q16IaK76g6rcU78', t) })
      }
    },
    96937: (e, t, n) => {
      n.d(t, { Z: () => m })
      var a = n(60748),
        i = n(33555),
        r = n(83716),
        s = n(31212),
        o = n(46752),
        l = n(23989),
        c = n(62898),
        d = n(231)
      const u = 3e3,
        m = (e) => {
          let {
            title: t,
            className: n,
            message: m,
            duration: h = u,
            containerId: p,
            onDismiss: v,
            action: f,
            actionText: g,
          } = e
          const Z = (0, i.Sv)(),
            [P, E] = (0, a.eJ)(!0),
            y = (0, a.sO)(null),
            { transitionClassNames: C } = (0, s.Z)(P),
            b = (0, a.I4)(() => {
              E(!1), setTimeout(v, 150 + r.fK3)
            }, [v]),
            I = (0, a.I4)(() => {
              f && Z[f.action](f.payload), b()
            }, [f, Z, b])
          ;(0, a.d4)(() => (P ? (0, l.Z)(b) : void 0), [P, b]),
            (0, a.d4)(
              () => (
                (y.current = window.setTimeout(b, h)),
                () => {
                  y.current && (clearTimeout(y.current), (y.current = void 0))
                }
              ),
              [h, b]
            )
          const w = (0, a.I4)(() => {
              y.current && (clearTimeout(y.current), (y.current = void 0))
            }, []),
            N = (0, a.I4)(() => {
              y.current = window.setTimeout(b, h)
            }, [h, b])
          return a.ZP.createElement(
            c.Z,
            { className: 'Notification-container', containerId: p },
            a.ZP.createElement(
              'div',
              {
                className: (0, o.Z)('Notification', C, n),
                onClick: I,
                onMouseEnter: w,
                onMouseLeave: N,
              },
              a.ZP.createElement(
                'div',
                { className: 'content' },
                t && a.ZP.createElement('div', { className: 'notification-title' }, t),
                m
              ),
              f &&
                g &&
                a.ZP.createElement(
                  d.Z,
                  { color: 'translucent-white', onClick: I, className: 'Notification-button' },
                  g
                )
            )
          )
        }
    },
    39196: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(46752)
      const r = { s: 22, m: 25, l: 28, xl: 20 },
        s = (0, a.X$)((e) => {
          let {
            progress: t = 0,
            size: n = 'l',
            square: s,
            transparent: o,
            noCross: l,
            onClick: c,
          } = e
          const d = r[n],
            u = d - 4,
            m = d - 1,
            h = 2 * u * Math.PI,
            p = (0, a.sO)(null)
          ;(0, a.d4)(() => {
            if (!p.current) return
            const e = p.current.firstElementChild,
              n = h - Math.min(Math.max(0.05, t), 1) * h
            e
              ? e.firstElementChild.setAttribute('stroke-dashoffset', n.toString())
              : (p.current.innerHTML = `<svg\n        viewBox="0 0 ${2 * m} ${
                  2 * m
                }"\n        height="${2 * m}"\n        width="${
                  2 * m
                }"\n      >\n        <circle\n          stroke="white"\n          fill="transparent"\n          stroke-width=2\n          stroke-dasharray="${h} ${h}"}\n          stroke-dashoffset="${n}"\n          stroke-linecap="round"\n          r=${u}\n          cx=${m}\n          cy=${m}\n        />\n      </svg>`)
          }, [p, h, m, u, t])
          const v = (0, i.Z)(
            `ProgressSpinner size-${n}`,
            o && 'transparent',
            s && 'square',
            l && 'no-cross'
          )
          return a.ZP.createElement('div', { ref: p, className: v, onClick: c })
        })
    },
    14434: (e, t, n) => {
      n.d(t, { Z: () => l })
      var a = n(60748),
        i = n(46752),
        r = n(59107),
        s = n(49204)
      const o = (0, a.X$)((e) => {
          let {
            id: t,
            label: n,
            subLabel: o,
            value: l,
            name: c,
            checked: d,
            disabled: u,
            hidden: m,
            isLoading: h,
            onChange: p,
          } = e
          const v = (0, r.Z)(),
            f = (0, i.Z)('Radio', u && 'disabled', m && 'hidden-widget', h && 'loading')
          return a.ZP.createElement(
            'label',
            { className: f, dir: v.isRtl ? 'rtl' : void 0 },
            a.ZP.createElement('input', {
              type: 'radio',
              name: c,
              value: l,
              id: t,
              checked: d,
              onChange: p,
              disabled: u || m,
            }),
            a.ZP.createElement(
              'div',
              { className: 'Radio-main' },
              a.ZP.createElement('span', { className: 'label', dir: v.isRtl ? 'auto' : void 0 }, n),
              o &&
                a.ZP.createElement(
                  'span',
                  { className: 'subLabel', dir: v.isRtl ? 'auto' : void 0 },
                  o
                )
            ),
            h && a.ZP.createElement(s.Z, null)
          )
        }),
        l = (0, a.X$)((e) => {
          let {
            id: t,
            name: n,
            options: i,
            selected: r,
            disabled: s,
            loadingOption: l,
            onChange: c,
          } = e
          const d = (0, a.I4)(
            (e) => {
              const { value: t } = e.currentTarget
              c(t, e)
            },
            [c]
          )
          return a.ZP.createElement(
            'div',
            { id: t, className: 'radio-group' },
            i.map((e) =>
              a.ZP.createElement(o, {
                name: n,
                label: e.label,
                subLabel: e.subLabel,
                value: e.value,
                checked: e.value === r,
                hidden: e.hidden,
                disabled: s,
                isLoading: l ? l === e.value : void 0,
                onChange: d,
              })
            )
          )
        })
    },
    18051: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(46752),
        r = n(59107)
      const s = (0, a.X$)((e) => {
        let {
          options: t,
          min: n = 0,
          max: s = t ? t.length - 1 : 100,
          step: o = 1,
          label: l,
          value: c,
          disabled: d,
          bold: u,
          className: m,
          renderValue: h,
          onChange: p,
        } = e
        const v = (0, r.Z)(),
          f = (0, a.I4)(
            (e) => {
              p(Number(e.currentTarget.value))
            },
            [p]
          ),
          g = (0, i.Z)(m, 'RangeSlider', d && 'disabled', u && 'bold'),
          Z = (0, a.Ye)(
            () => (t ? (c / (t.length - 1)) * 100 : ((c - n) / ((s - n) / o)) * 100),
            [t, c, s, n, o]
          )
        return a.ZP.createElement(
          'div',
          { className: g },
          l &&
            a.ZP.createElement(
              'div',
              { className: 'slider-top-row', dir: v.isRtl ? 'rtl' : void 0 },
              a.ZP.createElement('span', { className: 'label', dir: 'auto' }, l),
              !t && a.ZP.createElement('span', { className: 'value', dir: 'auto' }, h ? h(c) : c)
            ),
          a.ZP.createElement(
            'div',
            { className: 'slider-main' },
            a.ZP.createElement('div', { className: 'slider-fill-track', style: `width: ${Z}%` }),
            a.ZP.createElement('input', {
              min: n,
              max: s,
              value: c,
              step: o,
              type: 'range',
              className: 'RangeSlider__input',
              onChange: f,
            }),
            t &&
              a.ZP.createElement(
                'div',
                { className: 'slider-options' },
                t.map((e, t) =>
                  a.ZP.createElement(
                    'div',
                    {
                      className: (0, i.Z)('slider-option no-selection', t === c && 'active'),
                      onClick: () => p(t),
                    },
                    e
                  )
                )
              )
          )
        )
      })
    },
    43521: (e, t, n) => {
      n.d(t, { Z: () => c })
      var a = n(60748),
        i = n(863),
        r = n(231)
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
          s.apply(this, arguments)
        )
      }
      let o,
        l = !0
      const c = (0, a.X$)((e) => {
        let { onActivate: t, ...n } = e
        const c = (0, a.sO)(!1),
          d = (0, a.I4)(
            (e) => {
              if (((c.current = !0), l)) return (l = !1), void t(e)
              o && (clearTimeout(o), (o = void 0)),
                (o = window.setTimeout(() => {
                  c.current && t(e)
                }, 200))
            },
            [t]
          ),
          u = (0, a.I4)(() => {
            c.current = !1
          }, []),
          m = (0, a.I4)(
            (e) => {
              ;(c.current = !0), t(e)
            },
            [t]
          )
        return a.ZP.createElement(
          r.Z,
          s({}, n, {
            onMouseEnter: i.$b ? void 0 : d,
            onMouseLeave: i.$b ? void 0 : u,
            onClick: i.$b ? m : t,
          })
        )
      })
    },
    69589: (e, t, n) => {
      n.d(t, { Z: () => u })
      var a = n(60748),
        i = n(46752),
        r = n(60706),
        s = n(59107),
        o = n(12515),
        l = n(34288),
        c = n(231),
        d = n(40126)
      const u = (0, a.X$)((e) => {
        let {
            ref: t,
            children: n,
            parentContainerClassName: u,
            value: m,
            inputId: h,
            className: p,
            focused: v,
            isLoading: f,
            spinnerColor: g,
            spinnerBackgroundColor: Z,
            placeholder: P,
            disabled: E,
            autoComplete: y,
            canClose: C,
            autoFocusSearch: b,
            onChange: I,
            onReset: w,
            onFocus: N,
            onBlur: S,
            onSpinnerClick: k,
          } = e,
          M = (0, a.sO)(null)
        t && (M = t)
        const [T, x, L] = (0, r.Z)(v)
        ;(0, o.Z)(M, b, L),
          (0, a.d4)(() => {
            M.current && (v ? M.current.focus() : M.current.blur())
          }, [v, P])
        const A = (0, s.Z)(),
          F = (0, a.I4)(
            (e) => {
              if ('ArrowDown' === e.key || 'Enter' === e.key) {
                const e = document.querySelector(`.${u} .ListItem-button`)
                e && e.focus()
              }
            },
            [u]
          )
        return a.ZP.createElement(
          'div',
          {
            className: (0, i.Z)('SearchInput', p, T && 'has-focus'),
            dir: A.isRtl ? 'rtl' : void 0,
          },
          n,
          a.ZP.createElement('input', {
            ref: M,
            id: h,
            type: 'text',
            dir: 'auto',
            placeholder: P || A('Search'),
            className: 'form-control',
            value: m,
            disabled: E,
            autoComplete: y,
            onChange: function (e) {
              const { currentTarget: t } = e
              I(t.value)
            },
            onFocus: function () {
              x(), N && N()
            },
            onBlur: function () {
              L(), S && S()
            },
            onKeyDown: F,
          }),
          a.ZP.createElement('i', { className: 'icon-search' }),
          a.ZP.createElement(
            d.Z,
            { isOpen: Boolean(f), className: 'slow' },
            a.ZP.createElement(l.Z, { color: g, backgroundColor: Z, onClick: k })
          ),
          !f &&
            (m || C) &&
            w &&
            a.ZP.createElement(
              c.Z,
              { round: !0, size: 'tiny', color: 'translucent', onClick: w },
              a.ZP.createElement('span', { className: 'icon-close' })
            )
        )
      })
    },
    40126: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(31212),
        r = n(87204),
        s = n(46752)
      const o = (e) => {
        let {
          isOpen: t,
          isHidden: n,
          isCustom: o,
          id: l,
          className: c,
          onClick: d,
          children: u,
          noCloseTransition: m,
          shouldAnimateFirstRender: h,
        } = e
        const p = (0, r.Z)(t),
          v = (0, r.Z)(u),
          f = (0, a.sO)(),
          g = void 0 === p,
          { shouldRender: Z, transitionClassNames: P } = (0, i.Z)(
            t && !n,
            void 0,
            g && !h,
            !o && void 0,
            m
          )
        return (
          p && !t && (f.current = v),
          (Z || n) &&
            a.ZP.createElement(
              'div',
              { id: l, className: (0, s.Z)(c, P), onClick: d },
              t ? u : f.current
            )
        )
      }
    },
    17921: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(46752),
        r = n(80036)
      const s = (e) => {
        let {
          variant: t = 'rectangular',
          animation: n = 'wave',
          width: s,
          height: o,
          forceAspectRatio: l,
          inline: c,
          className: d,
        } = e
        const u = (0, i.Z)('Skeleton', t, n, d, c && 'inline'),
          m = l
            ? s && o
              ? `aspect-ratio: ${s}/${o}`
              : void 0
            : (0, r.Z)(Boolean(s) && `width: ${s}px`, Boolean(o) && `height: ${o}px`)
        return a.ZP.createElement('div', { className: u, style: m }, c && ' ')
      }
    },
    83321: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748),
        i = n(46752)
      const r = (0, a.X$)((e) => {
        let {
          id: t,
          name: n,
          value: r,
          label: s,
          checked: o = !1,
          disabled: l,
          inactive: c,
          noAnimation: d,
          onChange: u,
          onCheck: m,
        } = e
        const h = (0, a.I4)(
            (e) => {
              u && u(e), m && m(e.currentTarget.checked)
            },
            [u, m]
          ),
          p = (0, i.Z)('Switcher', l && 'disabled', c && 'inactive', d && 'no-animation')
        return a.ZP.createElement(
          'label',
          { className: p, title: s },
          a.ZP.createElement('input', {
            type: 'checkbox',
            id: t,
            name: n,
            value: r,
            checked: o,
            disabled: l,
            onChange: h,
          }),
          a.ZP.createElement('span', { className: 'widget' })
        )
      })
    },
    93133: (e, t, n) => {
      n.d(t, { Z: () => f })
      var a = n(60748),
        i = n(83716),
        r = n(863),
        s = n(81367),
        o = n(87204),
        l = n(78781),
        c = n(59107),
        d = n(46752),
        u = n(82972),
        m = n(32340)
      const h = 'Tab--active',
        p = (0, a.X$)((e) => {
          let {
            className: t,
            title: n,
            isActive: i,
            isBlocked: r,
            badgeCount: s,
            isBadgeActive: o,
            previousActiveTab: l,
            onClick: c,
            clickArg: p,
          } = e
          const v = (0, a.sO)(null)
          return (
            (0, a.d4)(() => {
              if (
                (i && void 0 === l && v.current && v.current.classList.add(h), !i || void 0 === l)
              )
                return
              const e = v.current,
                t = e.parentElement.children[l]
              if (!t) return void (i && !e.classList.contains(h) && e.classList.add(h))
              const n = e.querySelector('.platform'),
                a = t.querySelector('.platform'),
                r = a.parentElement.offsetLeft - n.parentElement.offsetLeft,
                s = a.clientWidth / n.clientWidth
              a.classList.remove('animate'),
                n.classList.remove('animate'),
                (n.style.transform = `translate3d(${r}px, 0, 0) scale3d(${s}, 1, 1)`),
                (0, u.Z)(n),
                n.classList.add('animate'),
                (n.style.transform = 'none'),
                t.classList.remove(h),
                e.classList.add(h)
            }, [i, l]),
            a.ZP.createElement(
              'div',
              { className: (0, d.Z)('Tab', t), onClick: () => c(p), ref: v },
              a.ZP.createElement(
                'span',
                null,
                (0, m.Z)(n),
                Boolean(s) &&
                  a.ZP.createElement(
                    'span',
                    { className: (0, d.Z)('badge', o && 'Tab__badge--active') },
                    s
                  ),
                r && a.ZP.createElement('i', { className: 'icon-lock-badge blocked' }),
                a.ZP.createElement('i', { className: 'platform' })
              )
            )
          )
        }),
        v = r.cj ? 450 : r.wZ ? 400 : 300,
        f = (0, a.X$)((e) => {
          let { tabs: t, areFolders: n, activeTab: r, big: d, onSwitchTab: u } = e
          const m = (0, a.sO)(null),
            h = (0, o.Z)(r)
          ;(0, l.Z)(m, void 0, !0),
            (0, a.d4)(() => {
              const e = m.current,
                { scrollWidth: t, offsetWidth: n, scrollLeft: a } = e
              if (t <= n) return
              const i = e.childNodes[r]
              if (!i) return
              const { offsetLeft: o, offsetWidth: l } = i,
                c = o - n / 2 + l / 2
              Math.abs(c - a) < 16 || (0, s.Z)(e, c, v)
            }, [r])
          const f = (0, c.Z)()
          return a.ZP.createElement(
            'div',
            {
              className: 'TabList no-selection no-scrollbar ' + (d ? 'big' : ''),
              ref: m,
              dir: f.isRtl ? 'rtl' : void 0,
            },
            t.map((e, t) => {
              var s
              return a.ZP.createElement(p, {
                key: null !== (s = e.id) && void 0 !== s ? s : e.title,
                title: n && e.id !== i.NfV ? e.title : f(e.title),
                isActive: t === r,
                isBlocked: e.isBlocked,
                badgeCount: e.badgeCount,
                isBadgeActive: e.isBadgeActive,
                previousActiveTab: h,
                onClick: u,
                clickArg: t,
              })
            })
          )
        })
    },
    53455: (e, t, n) => {
      n.d(t, { Yy: () => s, ZP: () => h, fi: () => r, vb: () => c })
      var a = n(60782),
        i = n(91090)
      const r = [
          { icon: 'user', title: 'FilterContacts', key: 'contacts' },
          { icon: 'non-contacts', title: 'FilterNonContacts', key: 'nonContacts' },
          { icon: 'group', title: 'FilterGroups', key: 'groups' },
          { icon: 'channel', title: 'FilterChannels', key: 'channels' },
          { icon: 'bots', title: 'FilterBots', key: 'bots' },
        ],
        s = [
          { icon: 'mute', title: 'FilterMuted', key: 'excludeMuted' },
          { icon: 'archive', title: 'FilterArchived', key: 'excludeArchived' },
          { icon: 'readchats', title: 'FilterRead', key: 'excludeRead' },
        ],
        o = ['includedChatIds', 'bots', 'channels', 'groups', 'contacts', 'nonContacts'],
        l = ['excludedChatIds', 'excludeArchived', 'excludeMuted', 'excludeRead']
      function c(e, t, n) {
        let i = [],
          r = []
        if ('included' === t) {
          const { includedChatIds: t, ...s } = n ? e.includeFilters || {} : (0, a.ei)(e.folder, o)
          ;(i = t || []), (r = Object.keys(s).filter((e) => Boolean(s[e])))
        } else {
          const { excludedChatIds: t, ...s } = n ? e.excludeFilters || {} : (0, a.ei)(e.folder, l)
          ;(i = t || []), (r = Object.keys(s).filter((e) => Boolean(s[e])))
        }
        return { selectedChatIds: i, selectedChatTypes: r }
      }
      function d(e) {
        if (e) {
          const { includedChatIds: t, ...n } = e
          if (Object.values(n).filter(Boolean).length > 1 || t?.length) return ''
          if (n.bots) return 'Bots'
          if (n.groups) return 'Groups'
          if (n.channels) return 'Channels'
          if (n.contacts) return 'Contacts'
          if (n.nonContacts) return 'Non-Contacts'
        }
        return ''
      }
      const u = {
          mode: 'create',
          chatFilter: '',
          folder: { title: '', includedChatIds: [], excludedChatIds: [] },
        },
        m = (e, t) => {
          switch (t.type) {
            case 'setTitle':
              return { ...e, folder: { ...e.folder, title: t.payload }, isTouched: !0 }
            case 'editIncludeFilters':
              return { ...e, includeFilters: (0, a.ei)(e.folder, o) }
            case 'editExcludeFilters':
              return { ...e, excludeFilters: (0, a.ei)(e.folder, l) }
            case 'setIncludeFilters':
              return { ...e, includeFilters: t.payload, chatFilter: '' }
            case 'setExcludeFilters':
              return { ...e, excludeFilters: t.payload, chatFilter: '' }
            case 'saveFilters':
              return e.includeFilters
                ? {
                    ...e,
                    folder: {
                      ...(0, a.CE)(e.folder, o),
                      title: e.folder.title ? e.folder.title : d(e.includeFilters),
                      ...e.includeFilters,
                    },
                    includeFilters: void 0,
                    chatFilter: '',
                    isTouched: !0,
                  }
                : e.excludeFilters
                ? {
                    ...e,
                    folder: { ...(0, a.CE)(e.folder, l), ...e.excludeFilters },
                    excludeFilters: void 0,
                    chatFilter: '',
                    isTouched: !0,
                  }
                : e
            case 'editFolder': {
              const { id: e, description: n, ...a } = t.payload
              return { mode: 'edit', folderId: e, folder: a, chatFilter: '' }
            }
            case 'setChatFilter':
              return { ...e, chatFilter: t.payload }
            case 'setIsLoading':
              return { ...e, isLoading: t.payload }
            case 'setError':
              return { ...e, error: t.payload }
            case 'reset':
              return u
            default:
              return e
          }
        },
        h = () => (0, i.Z)(m, u)
    },
    11309: (e, t, n) => {
      n.d(t, { C: () => r, i: () => s })
      var a = n(3927),
        i = n(67360)
      function r(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
        return (0, a.Z)(
          (t) => {
            t(e())
          },
          t,
          n,
          i
        )
      }
      function s(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
        return (0, i.Z)(
          (t) => {
            t(e())
          },
          t,
          n,
          a,
          r
        )
      }
    },
    23186: (e, t, n) => {
      n.d(t, { Z: () => h })
      var a = n(60748),
        i = n(33555),
        r = n(83716),
        s = n(10396),
        o = n(85266),
        l = n(64532),
        c = n(11192),
        d = n(274),
        u = n(34446)
      function m(e) {
        let t = {}
        if (e && e.current) {
          const {
            play: n,
            pause: a,
            setCurrentTime: r,
            proxy: s,
            requestNextTrack: o,
            requestPreviousTrack: l,
            isFirst: c,
            isLast: d,
          } = e.current
          ;(t = {
            play: () => {
              n(s.src)
            },
            pause: () => {
              a()
            },
            stop: () => {
              a(), r(0), (0, i.Sv)().closeAudioPlayer()
            },
            seekbackward: (e) => {
              const t = e.seekOffset || 10
              r(Math.max(s.currentTime - t, 0))
            },
            seekforward: (e) => {
              const t = e.seekOffset || 10
              r(Math.min(s.currentTime + t, s.duration))
            },
            seekTo: (e) => {
              e.seekTime && r(e.seekTime)
            },
          }),
            d() ||
              (t.nexttrack = () => {
                o()
              }),
            c() ||
              (t.previoustrack = () => {
                l()
              })
        }
        return t
      }
      const h = function (e, t, n, h, p, v, f) {
        let g = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Z = arguments.length > 8 ? arguments[8] : void 0,
          P = arguments.length > 9 ? arguments[9] : void 0,
          E = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          y = arguments.length > 11 && void 0 !== arguments[11] && arguments[11]
        const C = (0, a.sO)(null),
          [b, I] = (0, a.eJ)(!1)
        let w = b
        const [N, S] = (0, a.eJ)(0),
          k = (0, a.I4)(() => {
            I(!1), P && P()
          }, [P])
        ;(0, u.Z)(() => {
          C.current = (0, s.z2)(
            e,
            n,
            (e, a) => {
              switch (e) {
                case 'onPlay': {
                  const { setVolume: e, setPlaybackRate: a, toggleMuted: s, proxy: o } = C.current
                  I(!0), (0, l.N)(v, m(C)), (0, l.pC)('playing')
                  const { audioPlayer: d } = (0, c.jU)((0, i.Rd)())
                  e(d.volume), s(Boolean(d.isMuted))
                  const u = o.duration && Number.isFinite(o.duration) ? o.duration : t
                  ;('voice' === n || u > r.J0S) && a(d.playbackRate),
                    (0, l.NS)({
                      duration: o.duration || 0,
                      playbackRate: o.playbackRate,
                      position: o.currentTime,
                    })
                  break
                }
                case 'onRateChange': {
                  const { proxy: e } = C.current
                  ;(0, l.NS)({
                    duration: e.duration || 0,
                    playbackRate: e.playbackRate,
                    position: e.currentTime,
                  })
                  break
                }
                case 'onPause':
                  I(!1), (0, l.pC)('paused')
                  break
                case 'onTimeUpdate': {
                  const { proxy: e } = C.current,
                    n = e.duration && Number.isFinite(e.duration) ? e.duration : t
                  y || S(e.currentTime / n)
                  break
                }
                case 'onEnded':
                  ;(0, l.pC)('paused')
              }
              p?.[e]?.(a)
            },
            Z,
            k
          )
          const { proxy: a } = C.current
          b || a.paused || (I(!0), (w = !0)), f && f(a)
        }, [e]),
          (0, a.d4)(() => {
            b && v && (0, l.Ym)(v)
          }, [v, b])
        const {
            play: M,
            pause: T,
            setCurrentTime: x,
            proxy: L,
            destroy: A,
            setVolume: F,
            stop: R,
            isFirst: D,
            isLast: O,
            requestNextTrack: $,
            requestPreviousTrack: B,
            setPlaybackRate: U,
            toggleMuted: j,
          } = C.current,
          X = L.duration && Number.isFinite(L.duration) ? L.duration : t
        ;(0, a.d4)(() => {
          !X || (0, o.z)(L) || y || S(L.currentTime / X)
        }, [X, N, L, y]),
          (0, a.d4)(
            () => () => {
              A(E)
            },
            [A, E]
          ),
          (0, d.Z)(
            (e) => {
              let [t, n] = e
              ;(t === g && h === n) || (L.src && L.paused) || (g && h && !b && M(h))
            },
            [g, h, b, M, L.src, L.paused]
          )
        const z = (0, a.I4)(() => {
            h && M(h)
          }, [h, M]),
          Y = (0, a.I4)(() => {
            b ? T() : z()
          }, [T, z, b]),
          H = (0, a.I4)(
            (e) => {
              x(e), X && S(L.currentTime / X)
            },
            [X, L, x]
          )
        return {
          isPlaying: w,
          playProgress: N,
          playPause: Y,
          pause: T,
          play: z,
          stop: R,
          setCurrentTime: H,
          setVolume: F,
          audioProxy: L,
          duration: X,
          requestNextTrack: $,
          requestPreviousTrack: B,
          isFirst: D,
          isLast: O,
          setPlaybackRate: U,
          toggleMuted: j,
        }
      }
    },
    15866: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(863),
        r = n(96264),
        s = n(34446)
      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
          l = arguments.length > 4 ? arguments[4] : void 0,
          c = arguments.length > 5 ? arguments[5] : void 0
        const d = (0, a.sO)(null),
          u = (0, a.sO)()
        return (
          (0, s.Z)(() => {
            t || (u.current = !1)
          }, [e, t]),
          (0, a.d4)(() => {
            const a = d.current
            if (!e || !a || t || u.current) return
            u.current = !0
            const s = new Image(),
              m = () => {
                ;(a.width = l || s.width), (a.height = c || s.height)
                const e = a.getContext('2d', { alpha: !1 })
                i.vX && (e.filter = `blur(${o}px)`),
                  e.drawImage(s, 2 * -o, 2 * -o, a.width + 4 * o, a.height + 4 * o),
                  i.vX || (0, r.Z)(e, 0, 0, a.width, a.height, o, 2)
              }
            ;(s.onload = () => {
              n ? requestAnimationFrame(m) : m()
            }),
              (s.src = e)
          }, [e, t, c, l, o, n]),
          d
        )
      }
    },
    41470: (e, t, n) => {
      n.d(t, { Z: () => d })
      var a = n(60748),
        i = n(33555),
        r = n(863),
        s = n(83716),
        o = n(56112),
        l = n(60782),
        c = n(59107)
      const d = function (e) {
        let {
            chat: t,
            user: n,
            folderId: d,
            isPinned: u,
            isMuted: m,
            canChangeFolder: h,
            handleDelete: p,
            handleChatFolderChange: v,
            handleReport: f,
          } = e,
          g = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        const Z = (0, c.Z)(),
          { isSelf: P } = n || {},
          E = n?.id === s.awM
        return (0, a.Ye)(() => {
          if (!t) return
          const {
              toggleChatPinned: e,
              updateChatMutedState: a,
              toggleChatArchived: s,
              toggleChatUnread: c,
              openChatInNewTab: y,
            } = (0, i.Sv)(),
            C = r.IT && {
              title: 'Open in new tab',
              icon: 'open-in-new-tab',
              handler: () => {
                y({ chatId: t.id })
              },
            },
            b = h
              ? { title: Z('ChatList.Filter.AddToFolder'), icon: 'folder', handler: v }
              : void 0,
            I = u
              ? {
                  title: Z('UnpinFromTop'),
                  icon: 'unpin',
                  handler: () => e({ id: t.id, folderId: d }),
                }
              : { title: Z('PinToTop'), icon: 'pin', handler: () => e({ id: t.id, folderId: d }) }
          if (g) return (0, l.oA)([C, I, b])
          const w =
              t.unreadCount || t.hasUnreadMark
                ? { title: Z('MarkAsRead'), icon: 'readchats', handler: () => c({ id: t.id }) }
                : void 0,
            N =
              t.unreadCount || t.hasUnreadMark || t.isForum
                ? void 0
                : { title: Z('MarkAsUnread'), icon: 'unread', handler: () => c({ id: t.id }) },
            S = m
              ? {
                  title: Z('ChatList.Unmute'),
                  icon: 'unmute',
                  handler: () => a({ chatId: t.id, isMuted: !1 }),
                }
              : {
                  title: Z('ChatList.Mute'),
                  icon: 'mute',
                  handler: () => a({ chatId: t.id, isMuted: !0 }),
                },
            k = (0, o.pE)(t)
              ? { title: Z('Unarchive'), icon: 'unarchive', handler: () => s({ id: t.id }) }
              : { title: Z('Archive'), icon: 'archive', handler: () => s({ id: t.id }) },
            M =
              f && ((0, o.eA)(t) || (0, o.Bf)(t) || (n && !n.isSelf))
                ? { title: Z('ReportPeer.Report'), icon: 'flag', handler: f }
                : void 0,
            T = {
              title: (0, o.YC)(t.id)
                ? Z('Delete')
                : Z(
                    (0, o.cc)(t) ? 'DeleteChat' : (0, o.eA)(t) ? 'LeaveChannel' : 'Group.LeaveGroup'
                  ),
              icon: 'delete',
              destructive: !0,
              handler: p,
            },
            x = void 0 !== d
          return (0, l.oA)([C, b, w, N, I, !P && S, !P && !E && !x && k, M, T])
        }, [t, n, h, Z, v, u, g, m, p, f, d, P, E])
      }
    },
    17240: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(863)
      function r(e) {
        e.stopImmediatePropagation(), e.preventDefault(), e.stopPropagation()
      }
      const s = (e, t, n, s) => {
        const [o, l] = (0, a.eJ)(!1),
          [c, d] = (0, a.eJ)(void 0),
          u = (0, a.I4)(
            (e) => {
              t || 2 !== e.button || e.target.classList.add('no-selection')
            },
            [t]
          ),
          m = (0, a.I4)(
            (e) => {
              e.target.classList.remove('no-selection'),
                t ||
                  (n && e.target.matches('a[href]')) ||
                  (e.preventDefault(), c || (l(!0), d({ x: e.clientX, y: e.clientY })))
            },
            [t, n, c]
          ),
          h = (0, a.I4)(() => {
            l(!1)
          }, []),
          p = (0, a.I4)(() => {
            d(void 0)
          }, [])
        return (
          (0, a.d4)(() => {
            if (t || !i.$b || s) return
            const a = e.current
            if (!a) return
            let o
            const u = () => {
                o && (clearTimeout(o), (o = void 0))
              },
              m = (e) => {
                t ||
                  (u(),
                  (o = window.setTimeout(
                    () =>
                      ((e) => {
                        u()
                        const { clientX: t, clientY: s, target: o } = e.touches[0]
                        c ||
                          (n && o.matches('a[href]')) ||
                          (a.addEventListener(
                            'touchend',
                            (e) => {
                              i.cj &&
                                i.fl &&
                                setTimeout(() => {
                                  a.removeEventListener('mousedown', r, { capture: !0 }),
                                    a.removeEventListener('click', r, { capture: !0 })
                                }, 100),
                                r(e)
                            },
                            { once: !0, capture: !0 }
                          ),
                          i.fl &&
                            i.cj &&
                            (a.addEventListener('mousedown', r, { once: !0, capture: !0 }),
                            a.addEventListener('click', r, { once: !0, capture: !0 })),
                          l(!0),
                          d({ x: t, y: s }))
                      })(e),
                    200
                  )))
              }
            return (
              a.addEventListener('touchstart', m, { passive: !0 }),
              a.addEventListener('touchcancel', u, !0),
              a.addEventListener('touchend', u, !0),
              a.addEventListener('touchmove', u, { passive: !0 }),
              () => {
                u(),
                  a.removeEventListener('touchstart', m),
                  a.removeEventListener('touchcancel', u, !0),
                  a.removeEventListener('touchend', u, !0),
                  a.removeEventListener('touchmove', u)
              }
            )
          }, [c, t, s, e, n]),
          {
            isContextMenuOpen: o,
            contextMenuPosition: c,
            handleBeforeContextMenu: u,
            handleContextMenu: m,
            handleContextMenuClose: h,
            handleContextMenuHide: p,
          }
        )
      }
    },
    63394: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748)
      const i = { width: 0, left: 0, height: 0, top: 0 }
      function r(e, t, n, r, s) {
        const [o, l] = (0, a.eJ)('right'),
          [c, d] = (0, a.eJ)('bottom'),
          [u, m] = (0, a.eJ)(),
          [h, p] = (0, a.eJ)(),
          [v, f] = (0, a.eJ)(!1),
          [g, Z] = (0, a.eJ)(''),
          [P, E] = (0, a.eJ)('opacity: 0;')
        return (
          (0, a.d4)(() => {
            const a = t()
            if (!e || !a) return
            let { x: o, y: c } = e
            const u = o,
              h = c,
              v = r(),
              g = n(),
              {
                extraPaddingX: P = 0,
                extraTopPadding: y = 0,
                marginSides: C = 0,
                extraMarginTop: b = 0,
                withPortal: I = !1,
              } = s?.() || {},
              w = v ? parseInt(getComputedStyle(v).marginTop, 10) + b : void 0,
              N = v ? { width: v.offsetWidth, height: v.offsetHeight + w } : i,
              S = g ? g.getBoundingClientRect() : i
            let k, M
            o + N.width + P < S.width + S.left
              ? ((o += 3), (k = 'left'))
              : o - N.width - S.left > 0
              ? ((k = 'right'), (o -= 3))
              : ((k = 'left'), (o = 16)),
              l(k),
              C && 'right' === k && o + P + C >= S.width + S.left && (o -= C),
              C &&
                'left' === k &&
                (o + P + C + N.width >= S.width + S.left ? (o -= C) : o - C <= 0 && (o += C)),
              c + N.height < S.height + S.top
                ? (M = 'top')
                : ((M = 'bottom'), c - N.height < S.top + y && (c = S.top + S.height)),
              d(M)
            const T = a.getBoundingClientRect(),
              x = I ? T.top : 0,
              L = I ? T.left : 0,
              A = Math.min(o - T.left, S.width - N.width - 16),
              F = ('left' === k ? (I ? Math.max(16, A) : A) : o - T.left) + L,
              R = c - T.top + x,
              D = S.height - 12 - (w || 0)
            f(D < N.height), E(`max-height: ${D}px;`), Z(`left: ${F}px; top: ${R}px`)
            const O = u + L - T.left - F,
              $ = h + x - T.top - R - (w || 0)
            m('left' === k ? O : N.width + O), p('bottom' === M ? N.height + $ : $)
          }, [e, r, n, t, s]),
          {
            positionX: o,
            positionY: c,
            transformOriginX: u,
            transformOriginY: h,
            style: g,
            menuStyle: P,
            withScroll: v,
          }
        )
      }
    },
    71790: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(34446),
        i = n(33799),
        r = n(70971),
        s = n(93862)
      const o = function (e, t) {
        var n
        let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        const l = t ? e : () => e
        ;(null !== (n = t) && void 0 !== n) || (t = [e])
        const [c, d] = (0, i.Z)(),
          u = (0, r.Y)(l)
        function m() {
          const e = u.current
          o ? e(d) : d(e())
        }
        return (0, a.Z)(m, t), (0, s.b)(m, t), c
      }
    },
    86203: (e, t, n) => {
      n.d(t, { Z: () => l })
      var a = n(60748),
        i = n(65326),
        r = n(34446),
        s = n(70971),
        o = n(93862)
      const l = function (e, t) {
        var n
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        const c = t ? e : () => e()
        ;(null !== (n = t) && void 0 !== n) || (t = [e])
        const d = (0, a.sO)(),
          u = (0, i.Z)(),
          m = (0, s.Y)(c)
        function h() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          const t = m.current
          if (l)
            t((e) => {
              d.current !== e && ((d.current = e), u())
            })
          else {
            const n = t()
            d.current !== n && ((d.current = n), e || u())
          }
        }
        return (
          (0, r.Z)(() => {
            h(!0)
          }, t),
          (0, o.b)(h, t),
          d.current
        )
      }
    },
    75790: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(33555),
        r = n(69118)
      const s = (e, t, n, s) => {
        const { loadMessage: o } = (0, i.Sv)(),
          l = (0, a.Ye)(() => {
            const n = (0, r.P2)(o, 500, !0)
            return () => {
              n({ chatId: e, messageId: t, replyOriginForId: s })
            }
          }, [o, e, t, s])
        ;(0, a.d4)(() => {
          t && !n && l()
        })
      }
    },
    95616: (e, t, n) => {
      n.d(t, { d7: () => s, mE: () => l, yi: () => o })
      var a = n(60748),
        i = n(16974),
        r = n(65326)
      function s(e) {
        const t = (0, r.Z)()
        return (0, a.d4)(() => (0, i.M2)(e, t), [e, t]), (0, i.gO)(e)
      }
      function o() {
        const e = (0, r.Z)()
        return (0, a.d4)(() => (0, i.O6)(e), [e]), (0, i.wC)()
      }
      function l() {
        const e = (0, r.Z)()
        return (0, a.d4)(() => (0, i.r_)(e), [e]), (0, i.Yz)()
      }
    },
    54416: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(65326),
        r = n(34446)
      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        const t = (0, a.sO)(e),
          n = (0, i.Z)()
        ;(0, r.Z)(() => {
          e && (t.current = !0)
        }, [e])
        const s = (0, a.I4)(() => {
          ;(t.current = !1), n()
        }, [n])
        return { shouldRenderForumPanel: t.current, handleForumPanelAnimationEnd: s }
      }
    },
    69156: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748),
        i = n(33799)
      function r(e) {
        const [t, n] = (0, i.Z)()
        return (
          (0, a.d4)(() => {
            function t() {
              const t = window.getSelection()
              if (!t?.rangeCount) return
              const a = t.getRangeAt(0)
              if (!a) return
              if (!document.querySelector(e)) return
              const { commonAncestorContainer: i } = a
              ;(i instanceof Element ? i : i.parentElement).closest(e) && n(a)
            }
            return (
              document.addEventListener('selectionchange', t),
              () => document.removeEventListener('selectionchange', t)
            )
          }, [e, n]),
          t
        )
      }
    },
    78781: (e, t, n) => {
      n.d(t, { Z: () => i })
      var a = n(60748)
      const i = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        ;(0, a.d4)(() => {
          if (t) return
          const a = e.current
          function i(e) {
            e.deltaX || ((a.scrollLeft += e.deltaY / 4), n && e.preventDefault())
          }
          return (
            a.addEventListener('wheel', i, { passive: !n }),
            () => {
              a.removeEventListener('wheel', i)
            }
          )
        }, [e, t, n])
      }
    },
    73541: (e, t, n) => {
      n.d(t, { y: () => o })
      var a = n(60748)
      var i = n(16063)
      const r = new Set(['INPUT', 'TEXTAREA', 'SELECT']),
        s = (0, i._)()
      function o(e) {
        ;(0, a.d4)(() => {
          if (!e) return
          const t = Object.entries(e)
          return s.addCallback(function (e) {
            ;(function (e) {
              return !(e.target instanceof HTMLElement) || !r.has(e.target.tagName)
            })(e) &&
              t.forEach((t) => {
                let [n, a] = t
                ;(function (e) {
                  return (t) =>
                    (function (e, t) {
                      const { alt: n, ctrl: a, meta: i, mod: r, shift: s, key: o } = e,
                        { altKey: l, ctrlKey: c, metaKey: d, shiftKey: u, key: m } = t
                      if (n !== l) return !1
                      if (r) {
                        if (!c && !d) return !1
                      } else {
                        if (a !== c) return !1
                        if (i !== d) return !1
                      }
                      return (
                        s === u &&
                        Boolean(
                          o &&
                            (m.toLowerCase() === o.toLowerCase() ||
                              t.code.replace('Key', '').toLowerCase() === o.toLowerCase())
                        )
                      )
                    })(
                      (function (e) {
                        const t = e
                            .toLowerCase()
                            .split('+')
                            .map((e) => e.trim()),
                          n = {
                            alt: t.includes('alt'),
                            ctrl: t.includes('ctrl'),
                            meta: t.includes('meta'),
                            mod: t.includes('mod'),
                            shift: t.includes('shift'),
                          },
                          a = ['alt', 'ctrl', 'meta', 'shift', 'mod']
                        return { ...n, key: t.find((e) => !a.includes(e)) }
                      })(e),
                      t
                    )
                })(n)(e) && a(e)
              })
          })
        }, [e])
      }
      document.documentElement.addEventListener('keydown', s.runCallbacks)
    },
    12515: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748),
        i = n(42797)
      function r(e, t, n) {
        const { isMobile: r } = (0, i.ZP)()
        ;(0, a.d4)(() => {
          t
            ? r ||
              setTimeout(() => {
                requestAnimationFrame(() => {
                  e.current?.isConnected && e.current.focus()
                })
              }, 500)
            : (e.current?.isConnected && e.current.blur(), n && setTimeout(n, 300))
        }, [e, r, t, n])
      }
    },
    92566: (e, t, n) => {
      n.d(t, { Z: () => m })
      var a = n(60748),
        i = n(863),
        r = n(6137),
        s = n(69118),
        o = n(40647),
        l = n(65326),
        c = n(26926)
      const d = {},
        u = () => {
          const e = (0, a.sO)()
          return e.current || ((e.current = (0, c.Z)(d)), (d[e.current] = !0)), e.current
        }
      function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.IU.BlobUrl,
          c = arguments.length > 3 ? arguments[3] : void 0,
          d = arguments.length > 4 ? arguments[4] : void 0,
          m = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
        const h = e ? o.UV(e) : void 0,
          p = n === r.IU.Stream || (i.I_ && n === r.IU.Progressive),
          v = (0, l.Z)(),
          f = u(),
          [g, Z] = (0, a.eJ)(h && !p ? 1 : 0),
          P = (0, a.sO)(),
          E = (0, a.Ye)(
            () =>
              (0, s.P2)(
                (e) => {
                  P.current && (!d || Date.now() - P.current > d) && Z(e)
                },
                500,
                !0
              ),
            [d]
          )
        return (
          (0, a.d4)(() => {
            !t &&
              e &&
              (h
                ? p &&
                  setTimeout(() => {
                    Z(0.75)
                  }, 1500)
                : (Z(0),
                  P.current && o.cC(E),
                  (P.current = Date.now()),
                  o.he(e, n, m, E, f).then(() => {
                    const e = Date.now() - P.current
                    ;(P.current = void 0), !d || e >= d ? v() : setTimeout(v, d - e)
                  })))
          }, [t, e, h, n, c, v, p, d, E, m, f]),
          (0, a.d4)(() => {
            t && P.current && (o.cC(E), Z(0), (P.current = void 0))
          }, [E, t]),
          (0, a.d4)(
            () => () => {
              e && o.Iq(e, f)
            },
            [f, e]
          ),
          { mediaData: h, loadProgress: g }
        )
      }
    },
    56503: (e, t, n) => {
      n.d(t, { Z: () => s })
      var a = n(60748),
        i = n(863)
      let r
      function s(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250,
          s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
        const o = (0, a.sO)(!1),
          l = (0, a.I4)(() => {
            o.current = !0
          }, [])
        ;(0, a.d4)(() => {
          r && (clearTimeout(r), (r = void 0)),
            !e ||
              i.$b ||
              s ||
              (r = window.setTimeout(() => {
                o.current || t()
              }, 2 * n))
        }, [s, e, n, t])
        const c = (0, a.I4)(() => {
            o.current = !0
          }, []),
          d = (0, a.I4)(() => {
            ;(o.current = !1),
              r && (clearTimeout(r), (r = void 0)),
              (r = window.setTimeout(() => {
                o.current || t()
              }, n))
          }, [n, t])
        return [c, d, l]
      }
    },
    52678: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(87204),
        r = n(65326),
        s = n(34446)
      function o(e, t) {
        const n = (0, i.Z)(e, !0),
          o = (0, a.sO)(),
          l = (0, r.Z)(),
          c = null != e,
          d = null != n
        return (
          c && o.current && (clearTimeout(o.current), (o.current = void 0)),
          (0, s.Z)(() => {
            t &&
              !c &&
              d &&
              !o.current &&
              (o.current = window.setTimeout(() => {
                ;(o.current = void 0), l()
              }, t))
          }, [t, l, c, d]),
          o.current && t && !c ? n : e
        )
      }
    },
    91090: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748),
        i = n(65326)
      function r(e, t) {
        const n = (0, i.Z)(),
          r = (0, a.sO)(e),
          s = (0, a.sO)(t),
          o = (0, a.I4)((e) => {
            ;(s.current = r.current(s.current, e)), n()
          }, [])
        return [s.current, o]
      }
    },
    88957: (e, t, n) => {
      n.d(t, { Z: () => i })
      var a = n(67360)
      function i(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []
        return (0, a.Z)(
          (e) => {
            e()
          },
          i,
          e,
          t,
          n
        )
      }
    },
    33057: (e, t, n) => {
      n.d(t, { Z: () => u })
      var a = n(60748),
        i = n(83716),
        r = n(790),
        s = n(59107),
        o = n(99203),
        l = n(48778)
      const c = (0, a.X$)((e) => {
        const { isOpen: t } = e,
          n = (0, l.Z)(o.gl.Extra, 'CalendarModal', !t)
        return n ? a.ZP.createElement(n, e) : void 0
      })
      var d = n(82267)
      const u = (e, t, n) => {
        const o = (0, s.Z)(),
          [l, u] = (0, a.eJ)(),
          m = (0, a.I4)(
            function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              const n =
                Math.round(Math.max(e.getTime(), Date.now() + 6e4) / 1e3) + (t ? 0 : (0, d.Qj)())
              l?.(n), u(void 0)
            },
            [l]
          ),
          h = (0, a.I4)(() => {
            m(new Date(1e3 * i.t4X), !0)
          }, [m]),
          p = (0, a.I4)(() => {
            u(void 0), t?.()
          }, [t]),
          v = (0, a.I4)((e) => {
            u(() => e)
          }, []),
          f = n ? new Date(1e3 * n) : new Date()
        f.setSeconds(0), f.setMilliseconds(0)
        const g = new Date()
        return (
          g.setFullYear(g.getFullYear() + 1),
          [
            v,
            a.ZP.createElement(c, {
              isOpen: Boolean(l),
              withTimePicker: !0,
              selectedAt: f.getTime(),
              maxAt: (0, r._F)(g),
              isFutureMode: !0,
              secondButtonLabel: e ? o('Schedule.SendWhenOnline') : void 0,
              onClose: p,
              onSubmit: m,
              onSecondButtonClick: e ? h : void 0,
            }),
          ]
        )
      }
    },
    56389: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(60748),
        i = n(33555),
        r = n(83716),
        s = n(69118)
      const o = (e, t) =>
        (0, a.Ye)(
          () =>
            (0, s.P2)((n) => {
              e && t && (0, i.Sv)().sendMessageAction({ chatId: e, threadId: t, action: n })
            }, r.o_S),
          [e, t]
        )
    },
    33799: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60748),
        i = n(19369)
      function r(e) {
        var t
        const n = (0, a.sO)()
        return (null !== (t = n.current) && void 0 !== t) || (n.current = (0, i.gQ)(e)), n.current
      }
    },
    93862: (e, t, n) => {
      n.d(t, { b: () => s })
      var a = n(60748),
        i = n(19369),
        r = n(7792)
      function s(e, t) {
        const n = (0, a.sO)(!0)
        n.current &&
          ((n.current = !1),
          t?.forEach((t) => {
            ;(0, i.$Z)(t) && t.subscribe(e)
          })),
          (0, r.Z)(() => () => {
            ;(0, i.Dc)(e)
          })
      }
    },
    70971: (e, t, n) => {
      n.d(t, { Y: () => r })
      var a = n(60748),
        i = n(34446)
      function r(e) {
        const t = (0, a.sO)(e)
        return (
          (0, i.Z)(() => {
            t.current = e
          }, [e]),
          t
        )
      }
    },
    28183: (e, t, n) => {
      n.d(t, { Z: () => i })
      var a = n(60748)
      const i = function (e, t) {
        const n = (0, a.sO)(e)
        ;(0, a.bt)(() => {
          n.current = e
        }, [e]),
          (0, a.d4)(() => {
            if ('number' != typeof t) return
            const e = setTimeout(() => n.current(), t)
            return () => clearTimeout(e)
          }, [t])
      }
    },
    96264: (e, t, n) => {
      n.d(t, { Z: () => r })
      const a = [
          1, 57, 41, 21, 203, 34, 97, 73, 227, 91, 149, 62, 105, 45, 39, 137, 241, 107, 3, 173, 39,
          71, 65, 238, 219, 101, 187, 87, 81, 151, 141, 133, 249, 117, 221, 209, 197, 187, 177, 169,
          5, 153, 73, 139, 133, 127, 243, 233, 223, 107, 103, 99, 191, 23, 177, 171, 165, 159, 77,
          149, 9, 139, 135, 131, 253, 245, 119, 231, 224, 109, 211, 103, 25, 195, 189, 23, 45, 175,
          171, 83, 81, 79, 155, 151, 147, 9, 141, 137, 67, 131, 129, 251, 123, 30, 235, 115, 113,
          221, 217, 53, 13, 51, 50, 49, 193, 189, 185, 91, 179, 175, 43, 169, 83, 163, 5, 79, 155,
          19, 75, 147, 145, 143, 35, 69, 17, 67, 33, 65, 255, 251, 247, 243, 239, 59, 29, 229, 113,
          111, 219, 27, 213, 105, 207, 51, 201, 199, 49, 193, 191, 47, 93, 183, 181, 179, 11, 87,
          43, 85, 167, 165, 163, 161, 159, 157, 155, 77, 19, 75, 37, 73, 145, 143, 141, 35, 138,
          137, 135, 67, 33, 131, 129, 255, 63, 250, 247, 61, 121, 239, 237, 117, 29, 229, 227, 225,
          111, 55, 109, 216, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 48, 190, 47, 93,
          185, 183, 181, 179, 178, 176, 175, 173, 171, 85, 21, 167, 165, 41, 163, 161, 5, 79, 157,
          78, 154, 153, 19, 75, 149, 74, 147, 73, 144, 143, 71, 141, 140, 139, 137, 17, 135, 134,
          133, 66, 131, 65, 129, 1,
        ],
        i = [
          0, 9, 10, 10, 14, 12, 14, 14, 16, 15, 16, 15, 16, 15, 15, 17, 18, 17, 12, 18, 16, 17, 17,
          19, 19, 18, 19, 18, 18, 19, 19, 19, 20, 19, 20, 20, 20, 20, 20, 20, 15, 20, 19, 20, 20,
          20, 21, 21, 21, 20, 20, 20, 21, 18, 21, 21, 21, 21, 20, 21, 17, 21, 21, 21, 22, 22, 21,
          22, 22, 21, 22, 21, 19, 22, 22, 19, 20, 22, 22, 21, 21, 21, 22, 22, 22, 18, 22, 22, 21,
          22, 22, 23, 22, 20, 23, 22, 22, 23, 23, 21, 19, 21, 21, 21, 23, 23, 23, 22, 23, 23, 21,
          23, 22, 23, 18, 22, 23, 20, 22, 23, 23, 23, 21, 22, 20, 22, 21, 22, 24, 24, 24, 24, 24,
          22, 21, 24, 23, 23, 24, 21, 24, 23, 24, 22, 24, 24, 22, 24, 24, 22, 23, 24, 24, 24, 20,
          23, 22, 23, 24, 24, 24, 24, 24, 24, 24, 23, 21, 23, 22, 23, 24, 24, 24, 22, 24, 24, 24,
          23, 22, 24, 24, 25, 23, 25, 25, 23, 24, 25, 25, 24, 22, 25, 25, 25, 24, 23, 24, 25, 25,
          25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 23, 25, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25,
          25, 24, 22, 25, 25, 23, 25, 25, 20, 24, 25, 24, 25, 25, 22, 24, 25, 24, 25, 24, 25, 25,
          24, 25, 25, 25, 25, 22, 25, 25, 25, 24, 25, 24, 25, 18,
        ]
      function r(e, t, n, r, s, o, l) {
        if (Number.isNaN(o) || o < 1) return
        ;(o |= 0), Number.isNaN(l) && (l = 1), (l |= 0) > 3 && (l = 3), l < 1 && (l = 1)
        const c = e.getImageData(t, n, r, s),
          d = c.data
        let u,
          m,
          h,
          p,
          v,
          f,
          g,
          Z,
          P,
          E,
          y,
          C,
          b = r - 1,
          I = s - 1,
          w = o + 1,
          N = [],
          S = [],
          k = [],
          M = a[o],
          T = i[o],
          x = [],
          L = []
        for (; l-- > 0; ) {
          for (C = y = 0, v = 0; v < s; v++) {
            for (u = d[C] * w, m = d[C + 1] * w, h = d[C + 2] * w, f = 1; f <= o; f++)
              (g = C + ((f > b ? b : f) << 2)), (u += d[g++]), (m += d[g++]), (h += d[g++])
            for (p = 0; p < r; p++)
              (N[y] = u),
                (S[y] = m),
                (k[y] = h),
                0 == v &&
                  ((x[p] = ((g = p + w) < b ? g : b) << 2), (L[p] = (g = p - o) > 0 ? g << 2 : 0)),
                (Z = C + x[p]),
                (P = C + L[p]),
                (u += d[Z++] - d[P++]),
                (m += d[Z++] - d[P++]),
                (h += d[Z++] - d[P++]),
                y++
            C += r << 2
          }
          for (p = 0; p < r; p++) {
            for (E = p, u = N[E] * w, m = S[E] * w, h = k[E] * w, f = 1; f <= o; f++)
              (E += f > I ? 0 : r), (u += N[E]), (m += S[E]), (h += k[E])
            for (y = p << 2, v = 0; v < s; v++)
              (d[y] = (u * M) >>> T),
                (d[y + 1] = (m * M) >>> T),
                (d[y + 2] = (h * M) >>> T),
                0 == p &&
                  ((x[v] = ((g = v + w) < I ? g : I) * r), (L[v] = (g = v - o) > 0 ? g * r : 0)),
                (Z = p + x[v]),
                (P = p + L[v]),
                (u += N[Z] - N[P]),
                (m += S[Z] - S[P]),
                (h += k[Z] - k[P]),
                (y += r << 2)
          }
        }
        e.putImageData(c, t, n)
      }
    },
    3748: (e, t, n) => {
      n.r(t), n.d(t, { default: () => y })
      var a = n(863),
        i = n(74095),
        r = n(9933),
        s = n(3570),
        o = n(69118),
        l = n(26926)
      function c(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' != typeof e || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var a = n.call(e, t)
                if ('object' != typeof a) return a
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
      const d = Symbol('WAITING'),
        u = a.wZ || a.cj ? 0.75 : 1,
        m = a.wZ ? 0.5 : 0.75,
        h = 24,
        p = a.s$ ? 2 : 4,
        v = {},
        f = new Map(),
        g = new Array(4).fill(void 0).map(() => (0, i.K)(new Worker(new URL(n.p + n.u(289), n.b))))
      let Z = -1
      class P {
        static init() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
          const [, a, i, r = (0, l.Z)(v, !0), s, , o] = t
          let c = f.get(i)
          return c ? c.addView(r, a, o, s?.coords) : ((c = new P(...t)), f.set(i, c)), c
        }
        constructor(e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, l.Z)(v, !0),
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            r = arguments.length > 5 ? arguments[5] : void 0,
            s = arguments.length > 6 ? arguments[6] : void 0,
            o = arguments.length > 7 ? arguments[7] : void 0,
            d = arguments.length > 8 ? arguments[8] : void 0
          ;(this.tgsUrl = e),
            (this.container = t),
            (this.renderId = n),
            (this.viewId = a),
            (this.params = i),
            (this.customColor = r),
            (this.onLoad = s),
            (this.onEnded = o),
            (this.onLoop = d),
            c(this, 'views', new Map()),
            c(this, 'imgSize', void 0),
            c(this, 'imageData', void 0),
            c(this, 'msPerFrame', 1e3 / 60),
            c(this, 'reduceFactor', 1),
            c(this, 'cacheModulo', void 0),
            c(this, 'workerIndex', void 0),
            c(this, 'frames', []),
            c(this, 'framesCount', void 0),
            c(this, 'isAnimating', !1),
            c(this, 'isWaiting', !0),
            c(this, 'isEnded', !1),
            c(this, 'isDestroyed', !1),
            c(this, 'isRendererInited', !1),
            c(this, 'approxFrameIndex', 0),
            c(this, 'prevFrameIndex', -1),
            c(this, 'stopFrameIndex', 0),
            c(this, 'speed', 1),
            c(this, 'direction', 1),
            c(this, 'lastRenderAt', void 0),
            this.addView(a, t, s, i.coords),
            this.initConfig(),
            this.initRenderer()
        }
        removeView(e) {
          const { canvas: t, ctx: n, isSharedCanvas: a, coords: i } = this.views.get(e)
          a ? n.clearRect(i.x, i.y, this.imgSize, this.imgSize) : t.remove(),
            this.views.delete(e),
            this.views.size || this.destroy()
        }
        isPlaying() {
          return this.isAnimating || this.isWaiting
        }
        play() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0
          t && (this.views.get(t).isPaused = !1),
            this.isEnded && e && (this.approxFrameIndex = Math.floor(0)),
            (this.stopFrameIndex = void 0),
            (this.direction = 1),
            this.doPlay()
        }
        pause(e) {
          ;(e &&
            ((this.views.get(e).isPaused = !0),
            !Array.from(this.views.values()).every((e) => {
              let { isPaused: t } = e
              return t
            }))) ||
            (this.isWaiting
              ? (this.stopFrameIndex = this.approxFrameIndex)
              : (this.isAnimating = !1),
            this.params.isLowPriority ||
              (this.frames = this.frames.map((e, t) =>
                t === this.prevFrameIndex ? e : void (e && e !== d && e.close())
              )))
        }
        playSegment(e) {
          let [t, n] = e
          ;(this.approxFrameIndex = Math.floor(t / this.reduceFactor)),
            (this.stopFrameIndex = Math.floor(n / this.reduceFactor)),
            (this.direction = t < n ? 1 : -1),
            this.doPlay()
        }
        setSpeed(e) {
          this.speed = e
        }
        setNoLoop(e) {
          this.params.noLoop = e
        }
        setSharedCanvasCoords(e, t) {
          const n = this.views.get(e),
            { canvas: a, ctx: i } = n
          if (!a.dataset.isJustCleaned || 'false' === a.dataset.isJustCleaned) {
            const e = this.calcSizeFactor()
            E(a, e),
              i.clearRect(0, 0, a.width, a.height),
              (a.dataset.isJustCleaned = 'true'),
              (0, o.T2)(() => {
                a.dataset.isJustCleaned = 'false'
              })
          }
          n.coords = { x: Math.round((t?.x || 0) * a.width), y: Math.round((t?.y || 0) * a.height) }
          const r =
            this.getFrame(this.prevFrameIndex) || this.getFrame(Math.round(this.approxFrameIndex))
          r && r !== d && i.drawImage(r, n.coords.x, n.coords.y)
        }
        addView(e, t, n, a) {
          const i = this.calcSizeFactor()
          let r
          if (t instanceof HTMLDivElement) {
            if (!(t.parentNode instanceof HTMLElement))
              throw new Error('[RLottie] Container is not mounted')
            let { size: a } = this.params
            if (
              !a &&
              ((a = t.offsetWidth || parseInt(t.style.width, 10) || t.parentNode.offsetWidth), !a)
            )
              throw new Error('[RLottie] Failed to detect width from container')
            const s = document.createElement('canvas'),
              o = s.getContext('2d')
            ;(s.style.width = `${a}px`),
              (s.style.height = `${a}px`),
              (r = Math.round(a * i)),
              (s.width = r),
              (s.height = r),
              t.appendChild(s),
              this.views.set(e, { canvas: s, ctx: o, onLoad: n })
          } else {
            if (!t.isConnected) throw new Error('[RLottie] Shared canvas is not mounted')
            const s = t,
              o = s.getContext('2d')
            E(s, i),
              (r = Math.round(this.params.size * i)),
              this.views.set(e, {
                canvas: s,
                ctx: o,
                isSharedCanvas: !0,
                coords: {
                  x: Math.round((a?.x || 0) * s.width),
                  y: Math.round((a?.y || 0) * s.height),
                },
                onLoad: n,
              })
          }
          this.imgSize || ((this.imgSize = r), (this.imageData = new ImageData(r, r))),
            this.isRendererInited && this.doPlay()
        }
        calcSizeFactor() {
          const { isLowPriority: e, size: t, quality: n = e && (!t || t > h) ? m : u } = this.params
          return Math.max(a.cL * n, 1)
        }
        destroy() {
          ;(this.isDestroyed = !0),
            this.pause(),
            this.clearCache(),
            this.destroyRenderer(),
            f.delete(this.renderId)
        }
        clearCache() {
          this.frames.forEach((e) => {
            e && e !== d && e.close()
          }),
            (this.imageData = void 0),
            (this.frames = [])
        }
        initConfig() {
          const { isLowPriority: e } = this.params
          this.cacheModulo = e ? 0 : p
        }
        setColor(e) {
          this.customColor = e
        }
        initRenderer() {
          ;(this.workerIndex = (0, s.Z)(4, ++Z)),
            g[this.workerIndex].request({
              name: 'init',
              args: [
                this.renderId,
                this.tgsUrl,
                this.imgSize,
                this.params.isLowPriority || !1,
                this.customColor,
                this.onRendererInit.bind(this),
              ],
            })
        }
        destroyRenderer() {
          g[this.workerIndex].request({ name: 'destroy', args: [this.renderId] })
        }
        onRendererInit(e, t, n) {
          ;(this.isRendererInited = !0),
            (this.reduceFactor = e),
            (this.msPerFrame = t),
            (this.framesCount = n),
            this.isWaiting && this.doPlay()
        }
        changeData(e) {
          this.pause(),
            (this.tgsUrl = e),
            this.initConfig(),
            g[this.workerIndex].request({
              name: 'changeData',
              args: [
                this.renderId,
                this.tgsUrl,
                this.params.isLowPriority || !1,
                this.onChangeData.bind(this),
              ],
            })
        }
        onChangeData(e, t, n) {
          ;(this.reduceFactor = e),
            (this.msPerFrame = t),
            (this.framesCount = n),
            (this.isWaiting = !1),
            (this.isAnimating = !1),
            this.doPlay()
        }
        doPlay() {
          this.framesCount &&
            (this.isDestroyed ||
              this.isAnimating ||
              (this.isWaiting || (this.lastRenderAt = void 0),
              (this.isEnded = !1),
              (this.isAnimating = !0),
              (this.isWaiting = !1),
              (0, r.jt)(() => {
                if (this.isDestroyed) return !1
                if (
                  !this.isAnimating &&
                  Array.from(this.views.values()).every((e) => {
                    let { isLoaded: t } = e
                    return t
                  })
                )
                  return !1
                const e = Math.round(this.approxFrameIndex),
                  t = this.getFrame(e)
                if (!t || t === d)
                  return (
                    t || this.requestFrame(e), (this.isAnimating = !1), (this.isWaiting = !0), !1
                  )
                this.cacheModulo && e % this.cacheModulo == 0 && this.cleanupPrevFrame(e),
                  e !== this.prevFrameIndex &&
                    (this.views.forEach((e) => {
                      const {
                        ctx: n,
                        isLoaded: a,
                        isPaused: i,
                        coords: { x: r, y: s } = {},
                        onLoad: o,
                      } = e
                      ;(a && i) ||
                        (n.clearRect(r || 0, s || 0, this.imgSize, this.imgSize),
                        n.drawImage(t, r || 0, s || 0)),
                        a || ((e.isLoaded = !0), o?.())
                    }),
                    (this.prevFrameIndex = e))
                const n = Date.now(),
                  a = this.lastRenderAt ? this.msPerFrame / (n - this.lastRenderAt) : 1,
                  i = Math.min(1, (this.direction * this.speed) / a),
                  r = Math.round(this.approxFrameIndex + i)
                if (
                  ((this.lastRenderAt = n),
                  i > 0 && (e === this.framesCount - 1 || r > this.framesCount - 1))
                ) {
                  if (this.params.noLoop)
                    return (this.isAnimating = !1), (this.isEnded = !0), this.onEnded?.(), !1
                  this.onLoop?.(), (this.approxFrameIndex = 0)
                } else if (i < 0 && (0 === e || r < 0)) {
                  if (this.params.noLoop)
                    return (this.isAnimating = !1), (this.isEnded = !0), this.onEnded?.(), !1
                  this.onLoop?.(), (this.approxFrameIndex = this.framesCount - 1)
                } else {
                  if (
                    void 0 !== this.stopFrameIndex &&
                    (e === this.stopFrameIndex ||
                      (i > 0 && r > this.stopFrameIndex) ||
                      (i < 0 && r < this.stopFrameIndex))
                  )
                    return (this.stopFrameIndex = void 0), (this.isAnimating = !1), !1
                  this.approxFrameIndex += i
                }
                const s = Math.round(this.approxFrameIndex)
                return (
                  !!this.getFrame(s) ||
                  (this.requestFrame(s), (this.isWaiting = !0), (this.isAnimating = !1), !1)
                )
              })))
        }
        getFrame(e) {
          return this.frames[e]
        }
        requestFrame(e) {
          ;(this.frames[e] = d),
            g[this.workerIndex].request({
              name: 'renderFrames',
              args: [this.renderId, e, this.onFrameLoad.bind(this)],
            })
        }
        cleanupPrevFrame(e) {
          if (this.framesCount < 3) return
          const t = (0, s.Z)(this.framesCount, e - 1)
          this.frames[t] = void 0
        }
        onFrameLoad(e, t) {
          this.frames[e] === d && ((this.frames[e] = t), this.isWaiting && this.doPlay())
        }
      }
      function E(e, t) {
        const n = Math.round(e.offsetWidth * t),
          a = Math.round(e.offsetHeight * t)
        ;(e.width === n && e.height === a) || ((e.width = n), (e.height = a))
      }
      const y = P
    },
    74095: (e, t, n) => {
      n.d(t, { K: () => s })
      var a = n(26926)
      function i(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' != typeof e || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var a = n.call(e, t)
                if ('object' != typeof a) return a
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
      class r {
        constructor(e, t, n) {
          ;(this.target = e),
            (this.onUpdate = t),
            (this.channel = n),
            i(this, 'requestStates', new Map()),
            i(this, 'requestStatesByCallback', new Map())
        }
        destroy() {}
        init() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
          this.postMessage({ type: 'init', args: t })
        }
        request(e) {
          const { requestStates: t, requestStatesByCallback: n } = this,
            i = (0, a.Z)(t),
            r = { type: 'callMethod', messageId: i, ...e },
            s = { messageId: i },
            o = new Promise((e, t) => {
              Object.assign(s, { resolve: e, reject: t })
            })
          if ('function' == typeof r.args[r.args.length - 1]) {
            r.withCallback = !0
            const e = r.args.pop()
            ;(s.callback = e), n.set(e, s)
          }
          return (
            t.set(i, s),
            o
              .catch(() => {})
              .finally(() => {
                t.delete(i), s.callback && n.delete(s.callback)
              }),
            this.postMessage(r),
            o
          )
        }
        cancelCallback(e) {
          e.isCanceled = !0
          const { messageId: t } = this.requestStatesByCallback.get(e) || {}
          t && this.postMessage({ type: 'cancelProgress', messageId: t })
        }
        onMessage(e) {
          const { requestStates: t, channel: n } = this
          if (e.channel === n)
            if (
              ('update' === e.type && this.onUpdate && this.onUpdate(e.update),
              'methodResponse' === e.type)
            ) {
              const n = t.get(e.messageId)
              n && (e.error ? n.reject(e.error) : n.resolve(e.response))
            } else if ('methodCallback' === e.type)
              t.get(e.messageId)?.callback?.(...e.callbackArgs)
            else if ('unhandledError' === e.type) throw new Error(e.error?.message)
        }
        postMessage(e) {
          ;(e.channel = this.channel), this.target.postMessage(e)
        }
      }
      function s(e, t, n) {
        const a = new r(e, t, n)
        function i(e) {
          let { data: t } = e
          a.onMessage(t)
        }
        return (
          e.addEventListener('message', i),
          (a.destroy = () => {
            e.removeEventListener('message', i)
          }),
          a
        )
      }
    },
    10396: (e, t, n) => {
      n.d(t, { An: () => E, Es: () => f, z2: () => g })
      var a = n(33555),
        i = n(91713),
        r = n(863),
        s = n(74753),
        o = n(85266),
        l = n(56112),
        c = n(69118),
        d = n(11192)
      const u = new Map()
      let m,
        h = [],
        p = []
      function v(e, t) {
        const n = m && u.get(m)
        n && (n.audio.pause(), (n.audio.currentTime = 0), n.onTrackChange && n.onTrackChange())
        const r = P(e, (0, d.jU)((0, a.Rd)()).audioPlayer.origin || i.Cr.Inline, t)
        if (!r) return
        if (!u.has(r)) return void (0, a.Sv)().openAudioPlayer((0, l.Ak)(y(r).messageKey))
        const o = u.get(r)
        o.onForcePlay && o.onForcePlay(), (m = r), o.audio.src && (0, s.Z)(o.audio)
      }
      function f() {
        const e = m && u.get(m)
        e && e.audio.pause()
      }
      function g(e, t, n, f, g) {
        if (!u.has(e)) {
          const n = (function (e, t, n, a) {
            const i = new Audio()
            function r(t) {
              return (n) => {
                u.has(e) &&
                  ((0, o.z)(i) ||
                    u.get(e).handlers.forEach((e) => {
                      e(t, n)
                    }))
              }
            }
            return (
              i.addEventListener('timeupdate', r('onTimeUpdate')),
              i.addEventListener('play', r('onPlay')),
              i.addEventListener('pause', r('onPause')),
              i.addEventListener('loadstart', r('onLoadStart')),
              i.addEventListener('loadeddata', r('onLoadedData')),
              i.addEventListener('playing', r('onPlaying')),
              i.addEventListener('ended', () => {
                u.has(e) && ((0, o.z)(i) || v(e))
              }),
              {
                audio: i,
                type: t,
                proxy: new Proxy(i, { get: (e, t) => e[t] }),
                handlers: [],
                onForcePlay: n,
                onTrackChange: a,
              }
            )
          })(e, t, f, g)
          u.set(e, n),
            (function (e, t) {
              'audio' !== e.type || p.includes(t) || (p.push(t), p.sort(C)),
                'voice' !== e.type || h.includes(t) || (h.push(t), h.sort(C))
            })(n, e)
        }
        const { audio: Z, proxy: E, handlers: b } = u.get(e)
        return (
          b.push(n),
          {
            play(n) {
              if (!Z.paused) return
              const c = m && u.get(m)
              c &&
                m !== e &&
                (c.audio.pause(),
                (c.audio.currentTime = 0),
                (0, o.z)(c.audio) && (c.audio.dataset.preventPlayAfterPatch = 'true'),
                c.onTrackChange && c.onTrackChange()),
                (m = e),
                Z.src ||
                  ((Z.src = n),
                  (Z.preload = 'auto'),
                  n.includes('/progressive/') &&
                    r.s$ &&
                    (delete Z.dataset.preventPlayAfterPatch, (0, o.B)(Z))),
                (0, s.Z)(Z),
                (function (e, t) {
                  if ((0, d.jU)((0, a.Rd)()).globalSearch.currentContent === i.nJ.Music) return
                  const { chatId: n } = (0, l.Ak)(y(t).messageKey),
                    r = (0, d.Bt)((0, a.Rd)())?.chatId,
                    s = (e) => e.startsWith(`msg${n}`) || (r && e.startsWith(`msg${r}`))
                  'audio' === e && (p = p.filter(s)), 'voice' === e && (h = h.filter(s))
                })(t, e)
            },
            pause() {
              m === e && Z.pause()
            },
            stop() {
              if (m === e) {
                const e = Z.src
                Z.pause(),
                  (0, c.T2)(() => {
                    ;(Z.src = ''), (Z.src = e)
                  })
              }
            },
            setCurrentTime(t) {
              m === e && (Z.fastSeek ? Z.fastSeek(t) : (Z.currentTime = t))
            },
            setVolume(t) {
              m === e && ((Z.volume = t), (Z.muted = !1))
            },
            setPlaybackRate(t) {
              m === e && (Z.playbackRate = t)
            },
            toggleMuted(e) {
              Z.muted = void 0 === e ? !Z.muted : e
            },
            proxy: E,
            requestNextTrack() {
              v(e)
            },
            isLast: () => !P(e, (0, d.jU)((0, a.Rd)()).audioPlayer.origin),
            isFirst: () => !P(e, (0, d.jU)((0, a.Rd)()).audioPlayer.origin, !0),
            requestPreviousTrack() {
              v(e, !0)
            },
            destroy() {
              let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              const a = u.get(e)
              a &&
                ((a.handlers = a.handlers.filter((e) => e !== n)),
                a.handlers.length ||
                  (a.audio.pause(),
                  u.delete(e),
                  t &&
                    (function (e, t) {
                      const n = (e) => e !== t
                      'audio' === e.type && (p = p.filter(n)),
                        'voice' === e.type && (h = h.filter(n))
                    })(a, e),
                  e === m && (m = void 0)))
            },
          }
        )
      }
      function Z(e) {
        switch (e.type) {
          case 'audio':
            return p
          case 'voice':
            return h
          default:
            return
        }
      }
      function P(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Cr.Inline,
          n = arguments.length > 2 ? arguments[2] : void 0
        const a = u.get(e),
          r = Z(a)
        if (!r) return
        if (t === i.Cr.Search) {
          const t = r.indexOf(e)
          if (t < 0) return
          return r[t + (n ? -1 : 1)]
        }
        const { chatId: s } = (0, l.Ak)(y(e).messageKey),
          o = r.filter((e) => e.startsWith(`msg${s}`)),
          c = o.indexOf(e)
        if (c < 0) return
        let d = t === i.Cr.Inline ? -1 : 1
        return n && (d *= -1), o[c + d]
      }
      function E(e) {
        return `${(0, l.Tp)(e)}-${e.date}`
      }
      function y(e) {
        return { messageKey: e.match(/^msg(-?\d+)-(\d+)/)[0], date: Number(e.split('-').pop()) }
      }
      function C(e, t) {
        if (!e || !t) return 0
        const { date: n, messageKey: a } = y(e),
          { date: i, messageKey: r } = y(t),
          s = i - n
        return 0 === s ? r.localeCompare(a) : s
      }
    },
    64963: (e, t, n) => {
      n.d(t, { vJ: () => l, eM: () => o, sf: () => h })
      var a = n(863)
      function i(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' != typeof e || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var a = n.call(e, t)
                if ('object' != typeof a) return a
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
      var r = n(28712),
        s = n(69118)
      let o
      !(function (e) {
        ;(e[(e.Up = 0)] = 'Up'),
          (e[(e.Down = 1)] = 'Down'),
          (e[(e.Left = 2)] = 'Left'),
          (e[(e.Right = 3)] = 'Right')
      })(o || (o = {}))
      const l = 20
      function c(e, t) {
        return t ? Math.hypot(t.pageX - e.pageX, t.pageY - e.pageY) : 0
      }
      function d(e, t) {
        return { x: (e.pageX + t.pageX) / 2, y: (e.pageY + t.pageY) / 2 }
      }
      let u = 0
      const m = new (class {
        constructor() {
          let {
            stability: e = 8,
            sensitivity: t = 100,
            tolerance: n = 1.1,
            delay: a = 150,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          i(this, 'stability', void 0),
            i(this, 'sensitivity', void 0),
            i(this, 'tolerance', void 0),
            i(this, 'delay', void 0),
            i(this, 'lastUpDeltas', void 0),
            i(this, 'lastDownDeltas', void 0),
            i(this, 'deltasTimestamp', void 0),
            (this.stability = e),
            (this.sensitivity = t),
            (this.tolerance = n),
            (this.delay = a),
            (this.lastUpDeltas = new Array(2 * this.stability).fill(0)),
            (this.lastDownDeltas = new Array(2 * this.stability).fill(0)),
            (this.deltasTimestamp = new Array(2 * this.stability).fill(0))
        }
        check(e) {
          let t
          return (
            void 0 !== (e = e.originalEvent || e).wheelDelta
              ? (t = e.wheelDelta)
              : void 0 !== e.deltaY
              ? (t = -40 * e.deltaY)
              : (void 0 === e.detail && 0 !== e.detail) || (t = -40 * e.detail),
            this.deltasTimestamp.push(Date.now()),
            this.deltasTimestamp.shift(),
            t > 0
              ? (this.lastUpDeltas.push(t), this.lastUpDeltas.shift(), this.isInertia(1))
              : (this.lastDownDeltas.push(t), this.lastDownDeltas.shift(), this.isInertia(-1))
          )
        }
        isInertia(e) {
          const t = -1 === e ? this.lastDownDeltas : this.lastUpDeltas
          if (void 0 === t[0]) return e
          if (
            this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() &&
            t[0] === t[2 * this.stability - 1]
          )
            return !1
          const n = t.slice(0, this.stability),
            a = t.slice(this.stability, 2 * this.stability),
            i = n.reduce((e, t) => e + t),
            r = a.reduce((e, t) => e + t),
            s = i / n.length,
            o = r / a.length
          return Math.abs(s) < Math.abs(o * this.tolerance) && this.sensitivity < Math.abs(o)
        }
      })({ stability: 5, sensitivity: 25, tolerance: 0.6, delay: 150 })
      function h(e, t) {
        var n, i, h
        let p,
          v,
          f = !1,
          g = !1,
          Z = !1,
          P = 0,
          E = null !== (n = t.initialZoom) && void 0 !== n ? n : 1,
          y = { x: 0, y: 0 },
          C = { x: !1, y: !1 },
          b = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        const I = null !== (i = t.minZoom) && void 0 !== i ? i : 1,
          w = null !== (h = t.maxZoom) && void 0 !== h ? h : 4
        function N(e) {
          if (
            !t.excludedClosestSelector ||
            (!e.target.matches(t.excludedClosestSelector) &&
              !e.target.closest(t.excludedClosestSelector))
          ) {
            if (((p = e), 'mousedown' === e.type))
              !t.withNativeDrag && t.onDrag && e.preventDefault(),
                document.addEventListener('mousemove', k),
                document.addEventListener('mouseup', S)
            else if ('touchstart' === e.type) {
              const t = e.target
              t.addEventListener('touchmove', k, { passive: !0 }),
                t.addEventListener('touchend', S),
                t.addEventListener('touchcancel', S),
                'touches' in e &&
                  (void 0 === e.pageX && (e.pageX = e.touches[0].pageX),
                  void 0 === e.pageY && (e.pageY = e.touches[0].pageY),
                  2 === e.touches.length &&
                    ((P = c(e.touches[0], e.touches[1])), (b = d(e.touches[0], e.touches[1]))))
            }
            t.withCursor && document.body.classList.add('cursor-grabbing'),
              t.onCapture && t.onCapture(e)
          }
        }
        function S(e) {
          p &&
            (t.withCursor && document.body.classList.remove('cursor-grabbing'),
            document.removeEventListener('mouseup', S),
            document.removeEventListener('mousemove', k),
            p.target.removeEventListener('touchcancel', S),
            p.target.removeEventListener('touchend', S),
            p.target.removeEventListener('touchmove', k),
            a.cj &&
              t.selectorToPreventScroll &&
              Array.from(document.querySelectorAll(t.selectorToPreventScroll)).forEach((e) => {
                e.style.overflow = ''
              }),
            e &&
              (f
                ? t.onRelease && t.onRelease(e)
                : 'mouseup' === e.type &&
                  (t.onDoubleClick && Date.now() - u < 300
                    ? t.onDoubleClick(e, { centerX: p.pageX, centerY: p.pageY })
                    : !t.onClick || ('button' in e && 0 !== e.button) || t.onClick(e),
                  (u = Date.now())))),
            (f = !1),
            (g = !1),
            (Z = !1),
            (P = 0),
            (E = (0, r.uZ)(E, I, w)),
            (v = void 0),
            (y = { x: 0, y: 0 }),
            (C = { x: !1, y: !1 }),
            (b = { x: window.innerWidth / 2, y: window.innerHeight / 2 }),
            (p = void 0)
        }
        function k(e) {
          if (p) {
            if (
              'touchmove' === e.type &&
              'touches' in e &&
              (void 0 === e.pageX && (e.pageX = e.touches[0].pageX),
              void 0 === e.pageY && (e.pageY = e.touches[0].pageY),
              t.onZoom && P > 0 && 2 === e.touches.length)
            ) {
              const n = c(e.touches[0], e.touches[1]),
                a = d(e.touches[0], e.touches[1]),
                i = a.x - b.x,
                r = a.y - b.y,
                s = n / P
              t.onZoom(e, {
                zoomFactor: s,
                initialCenterX: b.x,
                initialCenterY: b.y,
                dragOffsetX: i,
                dragOffsetY: r,
                currentCenterX: a.x,
                currentCenterY: a.y,
              }),
                1 !== s && (f = !0)
            }
            const n = e.pageX - p.pageX,
              i = e.pageY - p.pageY
            ;(Math.abs(n) >= 15 || Math.abs(i) >= 15) && (f = !0)
            let r = !1
            t.onDrag && (t.onDrag(e, p, { dragOffsetX: n, dragOffsetY: i }), (r = !0)),
              t.onSwipe &&
                !g &&
                ((g = (function (e, n, i) {
                  if (a.cj) {
                    const t = e.touches[0].pageX
                    if (t <= l || t >= window.innerWidth - l) return !1
                  }
                  const r = Math.abs(n),
                    s = Math.abs(i)
                  if (n && i && Math.max(r, s) / Math.min(r, s) < 2) return !1
                  let c
                  if ((r >= 50 ? (c = 'x') : s >= 50 && (c = 'y'), !c)) return !1
                  if (v) {
                    if (v !== c) return !1
                  } else v = c
                  return (function (e, t, n, a, i) {
                    return 'x' === t
                      ? i(e, n < 0 ? o.Left : o.Right)
                      : 'y' === t && i(e, a < 0 ? o.Up : o.Down)
                  })(e, c, n, i, t.onSwipe)
                })(e, n, i)),
                (r = g)),
              a.cj &&
                r &&
                t.selectorToPreventScroll &&
                Array.from(document.querySelectorAll(t.selectorToPreventScroll)).forEach((e) => {
                  e.style.overflow = 'hidden'
                })
          }
        }
        const M = (0, s.Ds)(S, 150, !1),
          T = (0, s.Ds)(S, 150, !1)
        function x(e) {
          f || (N(e), (f = !0), (b = { x: e.x, y: e.y }))
        }
        function L(e) {
          if (!t.onZoom && !t.onDrag) return
          if (
            t.excludedClosestSelector &&
            (e.target.matches(t.excludedClosestSelector) ||
              e.target.closest(t.excludedClosestSelector))
          )
            return
          e.preventDefault(), e.stopPropagation()
          const { doubleTapZoom: n = 3 } = t
          if (t.onDoubleClick && Object.is(e.deltaX, -0) && Object.is(e.deltaY, -0) && e.ctrlKey)
            return (
              x(e),
              (E = E > 1 ? 1 : n),
              t.onDoubleClick(e, { centerX: e.pageX, centerY: e.pageY }),
              void (f = !1)
            )
          const a = e.metaKey || e.ctrlKey || e.shiftKey
          if (
            (a &&
              (function (e) {
                if (!t.onZoom) return
                x(e)
                const n = e.x - b.x,
                  a = e.y - b.y,
                  i = (0, r.uZ)(e.deltaY, -25, 25)
                ;(E -= 0.01 * i),
                  (E = (0, r.uZ)(E, 0.5 * I, 3 * w)),
                  t.onZoom(e, {
                    zoom: (0, r.NM)(E, 2),
                    initialCenterX: b.x,
                    initialCenterY: b.y,
                    dragOffsetX: n,
                    dragOffsetY: a,
                    currentCenterX: e.x,
                    currentCenterY: e.y,
                  }),
                  T(e)
              })(e),
            !a && !Z)
          ) {
            const n = m.check(e)
            ;(1 !== E || n) &&
              (function (e) {
                if (!t.onDrag) return
                x(e),
                  (C.x && Math.sign(y.x) !== Math.sign(e.deltaX)) || (y.x -= e.deltaX),
                  (C.y && Math.sign(y.y) !== Math.sign(e.deltaY)) || (y.y -= e.deltaY)
                const { x: n, y: a } = y
                t.onDrag(e, p, { dragOffsetX: n, dragOffsetY: a }, (e, t) => {
                  C = { x: e, y: t }
                }),
                  M(e)
              })(e)
          }
        }
        return (
          e.addEventListener('wheel', L),
          e.addEventListener('mousedown', N),
          e.addEventListener('touchstart', N, { passive: !t.isNotPassive }),
          () => {
            S(),
              e.removeEventListener('wheel', L),
              e.removeEventListener('touchstart', N),
              e.removeEventListener('mousedown', N)
          }
        )
      }
    },
    75851: (e, t, n) => {
      n.d(t, {
        CO: () => r,
        eb: () => o,
        ix: () => l,
        rZ: () => c,
        uR: () => d,
        wK: () => i,
        xP: () => s,
      })
      var a = n(71394)
      function i(e) {
        return [
          parseInt(e.substring(0, 2), 16),
          parseInt(e.substring(2, 4), 16),
          parseInt(e.substring(4, 6), 16),
        ]
      }
      function r(e) {
        const t = e[0].toString(16),
          n = e[1].toString(16),
          a = e[2].toString(16)
        return (
          (1 == t.length ? '0' + t : t) +
          (1 == n.length ? '0' + n : n) +
          (1 == a.length ? '0' + a : a)
        )
      }
      function s(e) {
        let [t, n, a] = e
        ;(t /= 255), (n /= 255), (a /= 255)
        let i,
          r,
          s = Math.max(t, n, a),
          o = Math.min(t, n, a),
          l = s,
          c = s - o
        if (((r = 0 == s ? 0 : c / s), s == o)) i = 0
        else {
          switch (s) {
            case t:
              i = (n - a) / c + (n < a ? 6 : 0)
              break
            case n:
              i = (a - t) / c + 2
              break
            case a:
              i = (t - n) / c + 4
          }
          i /= 6
        }
        return [i, r, l]
      }
      function o(e) {
        let t,
          n,
          a,
          [i, r, s] = e,
          o = Math.floor(6 * i),
          l = 6 * i - o,
          c = s * (1 - r),
          d = s * (1 - l * r),
          u = s * (1 - (1 - l) * r)
        switch (o % 6) {
          case 0:
            ;(t = s), (n = u), (a = c)
            break
          case 1:
            ;(t = d), (n = s), (a = c)
            break
          case 2:
            ;(t = c), (n = s), (a = u)
            break
          case 3:
            ;(t = c), (n = d), (a = s)
            break
          case 4:
            ;(t = u), (n = c), (a = s)
            break
          case 5:
            ;(t = s), (n = c), (a = d)
        }
        return [Math.round(255 * t), Math.round(255 * n), Math.round(255 * a)]
      }
      async function l(e) {
        const t = [0, 0, 0]
        let n,
          i,
          r,
          s,
          o = -4,
          l = [0, 0, 0],
          c = 0
        const d = document.createElement('canvas'),
          u = d.getContext && d.getContext('2d')
        if (!u) return t
        const m = await (0, a.pt)(e)
        ;(r = m.naturalHeight || m.offsetHeight || m.height),
          (i = m.naturalWidth || m.offsetWidth || m.width),
          (d.height = r),
          (d.width = i),
          u.drawImage(m, 0, 0)
        try {
          n = u.getImageData(0, 0, i, r)
        } catch (e) {
          return t
        }
        for (s = n.data.length; (o += 20) < s; )
          0 !== n.data[o + 3] &&
            (++c, (l[0] += n.data[o]), (l[1] += n.data[o + 1]), (l[2] += n.data[o + 2]))
        return (
          (l[0] = Math.floor(l[0] / c)),
          (l[1] = Math.floor(l[1] / c)),
          (l[2] = Math.floor(l[2] / c)),
          l
        )
      }
      function c(e) {
        const [t, n, a] = e
        return 0.2126 * t + 0.7152 * n + 0.0722 * a
      }
      function d(e) {
        let [t, n, a] = s(e)
        return (
          (n = Math.min(1, n + 0.05 + 0.1 * (1 - n))),
          (a = a > 0.5 ? Math.max(0, 0.65 * a) : Math.max(0, Math.min(1, 1 - 0.65 * a))),
          `hsla(${360 * t}, ${100 * n}%, ${100 * a}%, .4)`
        )
      }
    },
    3570: (e, t, n) => {
      function a(e, t) {
        return t - Math.floor(t / e) * e
      }
      n.d(t, { Z: () => a })
    },
    60539: (e, t, n) => {
      n.d(t, { N: () => m, Z: () => u })
      var a = n(33555),
        i = n(91713),
        r = n(83716),
        s = n(863),
        o = n(18674),
        l = n(9933),
        c = n(69118)
      let d = !1
      function u(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.V$q,
          l = arguments.length > 5 ? arguments[5] : void 0,
          c = arguments.length > 6 ? arguments[6] : void 0,
          d = arguments.length > 7 ? arguments[7] : void 0
        const u = h(e, t, o, l)
        l !== i.fo.Static
          ? ((0, a.Rd)().settings.byKey.animationLevel === r.oBh && (c = 0), p(e, t, u, n, s, c, d))
          : p(e, t, u, n, s, 0)
      }
      function m() {
        return d
      }
      function h(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.V$q,
          a = arguments.length > 3 ? arguments[3] : void 0
        const { offsetTop: s } = t,
          { scrollTop: o } = e
        if (void 0 === a) {
          const t = s - e.scrollTop
          if (t < -n) return o + (t + n)
          if (t > n) return o + (t - n)
        } else {
          if (a === i.fo.Up) return s + n
          if (a === i.fo.Down) return Math.max(0, s - n)
        }
        return o
      }
      function p(e, t, n, a) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          u = arguments.length > 5 ? arguments[5] : void 0,
          m = arguments.length > 6 ? arguments[6] : void 0
        const { offsetTop: h, offsetHeight: p } = t,
          { scrollTop: g, offsetHeight: Z, scrollHeight: P } = e,
          E = m && e.dataset.normalHeight ? Number(e.dataset.normalHeight) : Z
        let y
        switch ((g !== n && (e.scrollTop = n), a)) {
          case 'start':
            y = h - i - n + (s.wZ ? 1 : 0)
            break
          case 'end':
            y = h + p + i - (n + E)
            break
          case 'nearest':
          case 'center':
          case 'centerOrTop':
            y = p < E ? h + p / 2 - (n + E / 2) : h - i - n
        }
        if (y < 0) {
          const e = -n
          y = Math.max(y, e)
        } else if (y > 0) {
          const e = P - (n + E)
          y = Math.min(y, e)
        }
        if (0 === y) return
        const C = n + y
        if (0 === u) return void (e.scrollTop = C)
        d = !0
        const b = Math.abs(y),
          I = b < r.xnK ? f : v,
          w = u || r.bKs + (b / r.V$q) * (r.ckE - r.bKs),
          N = Date.now(),
          S = (0, o.YW)()
        ;(0, c.T2)(() => {
          ;(0, l.cK)(() => {
            const t = Math.min((Date.now() - N) / w, 1),
              n = y * (1 - I(t))
            return (e.scrollTop = Math.round(C - n)), (d = t < 1), d || S(), d
          })
        })
      }
      function v(e) {
        return 1 - (1 - e) ** 5
      }
      function f(e) {
        return 1 - (1 - e) ** 3.5
      }
    },
    81367: (e, t, n) => {
      n.d(t, { Z: () => o })
      var a = n(33555),
        i = n(83716),
        r = n(9933)
      const s = new Map()
      function o(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300
        return (0, a.Rd)().settings.byKey.animationLevel === i.oBh && (n = 0), l(e, t, n)
      }
      function l(e, t, n) {
        const a = 'rtl' === e.getAttribute('dir'),
          {
            scrollLeft: i,
            offsetWidth: o,
            scrollWidth: l,
            dataset: { scrollId: c },
          } = e
        let d = t - i
        if (d < 0) {
          const e = -i * (a ? -1 : 1)
          d = Math.max(d, e)
        } else if (d > 0) {
          const e = l - (i + o)
          d = Math.min(d, e)
        }
        if (0 === d) return Promise.resolve()
        c && s.has(c) && s.get(c)()
        const u = i + d
        if (0 === n) return (e.scrollLeft = u), Promise.resolve()
        let m = !1
        const h = Math.random().toString()
        let p
        ;(e.dataset.scrollId = h),
          s.set(h, () => {
            m = !0
          }),
          (e.style.scrollSnapType = 'none')
        const v = new Promise((e) => {
            p = e
          }),
          f = Date.now()
        return (
          (0, r.jt)(() => {
            if (m) return !1
            const t = Math.min((Date.now() - f) / n, 1),
              a =
                d *
                (1 -
                  (function (e) {
                    return 1 - (1 - e) ** 3.5
                  })(t))
            return (
              (e.scrollLeft = Math.round(u - a)),
              t >= 1 &&
                ((e.style.scrollSnapType = ''), delete e.dataset.scrollId, s.delete(h), p()),
              t < 1
            )
          }),
          v
        )
      }
    },
    65723: (e, t, n) => {
      n.d(t, { Z: () => i })
      var a = n(863)
      function i(e, t, n) {
        if (!t && e === document.activeElement) return
        const i = window.getSelection(),
          r = document.createRange(),
          s = e.lastChild || e
        a.$b || n || (s && s.nodeValue)
          ? (r.selectNodeContents(n ? e : s), r.collapse(!1), i.removeAllRanges(), i.addRange(r))
          : e.focus()
      }
    },
    60998: (e, t, n) => {
      n.d(t, { Z: () => i })
      var a = n(83716)
      function i() {
        const e = window.getSelection()
        let t = e?.rangeCount ? e.getRangeAt(0).cloneContents() : void 0
        const n = e?.focusNode && e.focusOffset > 0 && r(e.focusNode, a.gnl)
        if (!t || 0 === t.childElementCount) return
        const i = Array.from(t.children).reduce(
          (e, t) =>
            1 === t.nodeType && t.classList.contains('message-date-group')
              ? Array.from(t.querySelectorAll('.Message')).reduce(
                  (e, t) => e.concat(Number(t.dataset.messageId)),
                  e
                )
              : 1 === t.nodeType && t.classList.contains('Message')
              ? e.concat(Number(t.dataset.messageId))
              : e,
          []
        )
        for (; t.firstChild; ) t.removeChild(t.firstChild)
        return (t = void 0), n || i.pop(), i
      }
      function r(e, t) {
        return (
          !(1 !== e.nodeType || !e.classList.contains(t)) || (!!e.parentNode && r(e.parentNode, t))
        )
      }
    },
    55254: (e, t, n) => {
      n.d(t, { P: () => i })
      var a = n(43858)
      function i(e) {
        if ('none' === e.style.display) return !1
        const t = e.getBoundingClientRect(),
          { height: n } = a.Z.get()
        return t.top <= n && t.top + t.height >= 0
      }
    },
    64532: (e, t, n) => {
      n.d(t, { Ay: () => o, N: () => i, NS: () => c, Of: () => d, Ym: () => r, pC: () => l })
      const a = {
        play: void 0,
        pause: void 0,
        seekbackward: void 0,
        seekforward: void 0,
        previoustrack: void 0,
        nexttrack: void 0,
        stop: void 0,
        seekTo: void 0,
      }
      function i(e, t) {
        const { mediaSession: n } = window.navigator
        n ? (e && r(e), t && s(t)) : console.warn('MediaSession API not supported in this browser')
      }
      function r(e) {
        const { mediaSession: t } = window.navigator
        t && (t.metadata = null != e ? e : null)
      }
      function s(e) {
        const { mediaSession: t } = window.navigator
        t &&
          Object.entries({ ...a, ...e }).forEach((e) => {
            let [n, a] = e
            try {
              t.setActionHandler(n, a)
            } catch (e) {}
          })
      }
      function o() {
        const { mediaSession: e } = window.navigator
        e &&
          ((e.metadata = null),
          s(a),
          e.playbackState && (e.playbackState = 'none'),
          e.setPositionState?.())
      }
      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'none'
        const { mediaSession: t } = window.navigator
        t && t.playbackState && (t.playbackState = e)
      }
      function c(e) {
        if (!e || void 0 === e.position || void 0 === e.duration) return
        e.position = Math.min(e.position, e.duration)
        const { mediaSession: t } = window.navigator
        t?.setPositionState?.(e)
      }
      function d(e) {
        let { title: t, artist: n, album: a, artwork: i } = e
        if ('MediaMetadata' in window)
          return new window.MediaMetadata({ title: t, artist: n, album: a, artwork: i })
      }
    },
    16580: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(60782)
      const i = new WeakMap()
      function r(e) {
        return function () {
          const t = i.get(e)
          for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s]
          if (t && (0, a.et)(t.lastArgs, r)) return t.lastResult
          const o = e(...r)
          return i.set(e, { lastArgs: r, lastResult: o }), o
        }
      }
    },
    94462: (e, t, n) => {
      n.d(t, { Z: () => r })
      var a = n(33681)
      const i = new RegExp(`^(?:${a.Z.source})+$`, ''),
        r = (e) => {
          const t = e.split('\n'),
            n = t.join('')
          if (n.length > 800) return !1
          if (!Boolean(n.match(i))) return !1
          const r = t.map((e) => {
            let t = 0
            for (; a.Z.exec(e); ) if ((t++, t > 100)) return (a.Z.lastIndex = 0), -1
            return t
          })
          let s = t.length
          for (let e = 0; e < r.length; e++) {
            if (-1 === r[e]) return !1
            r[e] > s && (s = r[e])
          }
          return s
        }
    },
    83099: (e, t, n) => {
      n.d(t, { ZP: () => o, fu: () => l, xe: () => s })
      var a = n(6137),
        i = n(83716),
        r = n(863)
      const s = {
        B: a.Vv.Bold,
        STRONG: a.Vv.Bold,
        I: a.Vv.Italic,
        EM: a.Vv.Italic,
        INS: a.Vv.Underline,
        U: a.Vv.Underline,
        S: a.Vv.Strike,
        STRIKE: a.Vv.Strike,
        DEL: a.Vv.Strike,
        CODE: a.Vv.Code,
        PRE: a.Vv.Pre,
        BLOCKQUOTE: a.Vv.Blockquote,
      }
      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        const a = document.createElement('div')
        ;(a.innerHTML = n ? e : c(t ? d(e) : e)), l(a)
        const i = a.innerText.trim().replace(/\u200b+/g, ''),
          r = a.innerText.indexOf(i[0])
        let s = -r,
          o = 0
        const m = []
        function h(e) {
          if (e.nodeType === Node.COMMENT_NODE) return
          const { index: t, entity: n } = u(e, i, s)
          if (n) (s = t), m.push(n)
          else if (e.textContent) {
            if (0 === t && '' === e.textContent.trim()) return
            s += e.textContent.length
          }
          e.hasChildNodes() && o <= 3 && ((o += 1), Array.from(e.childNodes).forEach(h))
        }
        return (
          Array.from(a.childNodes).forEach((e) => {
            ;(o = 1), h(e)
          }),
          { text: i, entities: m.length ? m : void 0 }
        )
      }
      function l(e) {
        e.querySelectorAll('img').forEach((e) => {
          e.dataset.documentId ? (e.textContent = e.alt || '') : e.replaceWith(e.alt || '')
        })
      }
      function c(e) {
        let t = e.slice(0)
        return (
          (t = t.replace(/&nbsp;/g, ' ')),
          (t = t.replace(/<div><br([^>]*)?><\/div>/g, '\n')),
          (t = t.replace(/<br([^>]*)?>/g, '\n')),
          (t = t.replace(/<\/div>(\s*)<div>/g, '\n')),
          (t = t.replace(/<div>/g, '\n')),
          (t = t.replace(/<\/div>/g, '')),
          (t = t.replace(
            /^`{3}(.*?)[\n\r](.*?[\n\r]?)`{3}/gms,
            '<pre data-language="$1">$2</pre>'
          )),
          (t = t.replace(/^`{3}[\n\r]?(.*?)[\n\r]?`{3}/gms, '<pre>$1</pre>')),
          (t = t.replace(/[`]{3}([^`]+)[`]{3}/g, '<pre>$1</pre>')),
          (t = t.replace(
            /(?!<(code|pre)[^<]*|<\/)[`]{1}([^`\n]+)[`]{1}(?![^<]*<\/(code|pre)>)/g,
            '<code>$2</code>'
          )),
          r.op || (t = t.replace(/\[<img[^>]+alt="([^"]+)"[^>]*>]/gm, '[$1]')),
          (t = t.replace(
            /(?!<(?:code|pre)[^<]*|<\/)\[([^\]\n]+)\]\(customEmoji:(\d+)\)(?![^<]*<\/(?:code|pre)>)/g,
            '<img alt="$1" data-document-id="$2">'
          )),
          (t = t.replace(
            /(^|\s)(?!<(code|pre)[^<]*|<\/)[*]{2}([^*\n]+)[*]{2}(?![^<]*<\/(code|pre)>)(\s|$)/g,
            '$1<b>$3</b>$5'
          )),
          (t = t.replace(
            /(^|\s)(?!<(code|pre)[^<]*|<\/)[_]{2}([^_\n]+)[_]{2}(?![^<]*<\/(code|pre)>)(\s|$)/g,
            '$1<i>$3</i>$5'
          )),
          (t = t.replace(
            /(^|\s)(?!<(code|pre)[^<]*|<\/)[~]{2}([^~\n]+)[~]{2}(?![^<]*<\/(code|pre)>)(\s|$)/g,
            '$1<s>$3</s>$5'
          )),
          (t = t.replace(
            /(^|\s)(?!<(code|pre)[^<]*|<\/)[|]{2}([^|\n]+)[|]{2}(?![^<]*<\/(code|pre)>)(\s|$)/g,
            `$1<span data-entity-type="${a.Vv.Spoiler}">$3</span>$5`
          )),
          t
        )
      }
      function d(e) {
        return e.replace(
          new RegExp(`\\[([^\\]]+?)]\\((${i.FM6}+?)\\)`, 'g'),
          (e, t, n) =>
            `<a href="${
              n.includes('://') ? n : n.includes('@') ? `mailto:${n}` : `http://${n}`
            }">${t}</a>`
        )
      }
      function u(e, t, n) {
        const i = (function (e) {
          if (e instanceof HTMLElement && e.dataset.entityType) return e.dataset.entityType
          if (s[e.nodeName]) return s[e.nodeName]
          if ('A' === e.nodeName) {
            const t = e
            return t.dataset.entityType === a.Vv.MentionName
              ? a.Vv.MentionName
              : t.dataset.entityType === a.Vv.Url
              ? a.Vv.Url
              : t.href.startsWith('mailto:')
              ? a.Vv.Email
              : t.href.startsWith('tel:')
              ? a.Vv.Phone
              : t.href !== t.textContent
              ? a.Vv.TextUrl
              : a.Vv.Url
          }
          return 'SPAN' === e.nodeName
            ? e.dataset.entityType
            : 'IMG' === e.nodeName && e.dataset.documentId
            ? a.Vv.CustomEmoji
            : void 0
        })(e)
        if (!i || !e.textContent) return { index: n, entity: void 0 }
        const r = t.indexOf(e.textContent, n),
          o = r >= 0 ? r : n,
          l = t.substring(0, o).length,
          { length: c } = t.substring(o, o + e.textContent.length)
        return i === a.Vv.TextUrl
          ? { index: o, entity: { type: i, offset: l, length: c, url: e.href } }
          : i === a.Vv.MentionName
          ? { index: o, entity: { type: i, offset: l, length: c, userId: e.dataset.userId } }
          : i === a.Vv.Pre
          ? { index: o, entity: { type: i, offset: l, length: c, language: e.dataset.language } }
          : i === a.Vv.CustomEmoji
          ? {
              index: o,
              entity: { type: i, offset: l, length: c, documentId: e.dataset.documentId },
            }
          : { index: o, entity: { type: i, offset: l, length: c } }
      }
    },
    41098: (e, t, n) => {
      n.d(t, { g: () => r, t: () => i })
      const a = document.createElement('div')
      function i(e) {
        const t = window.getSelection()
        if (t?.getRangeAt && t.rangeCount) {
          const n = t.getRangeAt(0)
          n.deleteContents()
          const a = n.createContextualFragment(e),
            i = a.lastChild
          n.insertNode(a),
            i ? (n.setStartAfter(i), n.setEndAfter(i)) : n.collapse(!1),
            t.removeAllRanges(),
            t.addRange(n)
        }
      }
      function r(e, t) {
        if (!e) return ''
        const n = window.getSelection()
        if (!n || !n.rangeCount) return e.innerHTML
        const i = n.getRangeAt(0).cloneRange()
        return i.intersectsNode(e)
          ? t || e.contains(i.commonAncestorContainer)
            ? (i.collapse(!0),
              i.setStart(e, 0),
              (a.innerHTML = ''),
              a.appendChild(i.cloneContents()),
              a.innerHTML)
            : ''
          : e.innerHTML
      }
    },
    3858: (e, t, n) => {
      n.d(t, { Z: () => a })
      const a = (e) => {
        e.stopPropagation(), e.preventDefault()
      }
    },
    85655: (e, t, n) => {
      let a
      function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '*',
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        a || ((a = document.createElement('input')), a.setAttribute('type', 'file')),
          a.setAttribute('accept', e),
          n ? a.removeAttribute('multiple') : a.setAttribute('multiple', 'multiple'),
          (a.onchange = null),
          (a.value = ''),
          (a.onchange = t),
          a.click()
      }
      n.d(t, { g: () => i })
    },
  },
])
//# sourceMappingURL=1849.3a893328feafb62ca224.js.map
