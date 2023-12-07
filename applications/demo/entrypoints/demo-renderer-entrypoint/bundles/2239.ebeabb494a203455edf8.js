'use strict'
;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [2239],
  {
    70172: (e, t, n) => {
      n.d(t, { Z: () => Z })
      var o = n(60748),
        r = n(33555),
        l = n(6137),
        i = n(83716),
        s = n(863),
        c = n(56112),
        a = n(2155),
        d = n(46752),
        u = n(32340),
        m = n(6202),
        f = n(31212),
        p = n(59107),
        v = n(3657),
        g = n(35148)
      const h = (0, d.y)('Avatar')
      ;(h.media = h('media')), (h.icon = h('icon'))
      const Z = (0, o.X$)((e) => {
        let {
          className: t,
          size: n = 'large',
          chat: Z,
          user: I,
          photo: C,
          userStatus: P,
          text: b,
          isSavedMessages: y,
          withVideo: E,
          noLoop: w,
          loopIndefinitely: A,
          lastSyncTime: B,
          showVideoOverwrite: N,
          animationLevel: T,
          noPersonalPhoto: k,
          observeIntersection: S,
          onClick: U,
        } = e
        const { loadFullUser: L } = (0, r.Sv)(),
          O = (0, o.sO)(null),
          R = (0, o.sO)(0),
          x = (0, v.Op)(O, S),
          D = I && (0, c.NB)(I),
          F = I && (0, c.pK)(I.id),
          V = Z?.isForum
        let q, H
        const $ = !s.as && T === i.zy8 && I?.isPremium && I?.hasVideoAvatar,
          j = N && C?.isVideo,
          K = x && E && (j || $),
          M = I?.fullInfo?.personalPhoto || I?.fullInfo?.profilePhoto || I?.fullInfo?.fallbackPhoto,
          z = M?.isVideo,
          _ = K && (z || j),
          X = 'jumbo' === n
        y ||
          D ||
          (I && !k
            ? (q = (0, c.RT)(I, X ? 'big' : void 0))
            : Z
            ? (q = (0, c.RT)(Z, X ? 'big' : void 0))
            : C &&
              ((q = `photo${C.id}?size=m`), C.isVideo && E && (H = `videoAvatar${C.id}?size=u`)),
          z && (H = (0, c.RT)(I, void 0, 'video')))
        const J = (0, m.Z)(q, !1, l.IU.BlobUrl, B),
          G = (0, m.Z)(H, !_, l.IU.BlobUrl, B),
          Y = Boolean(J || G),
          W = Boolean(x && G && _),
          { transitionClassNames: Q } = (0, f.Z)(Y, void 0, Y, 'slow'),
          ee = (0, o.I4)(
            (e) => {
              const t = e.currentTarget
              G && (A || ((R.current += 1), (R.current >= 3 || w) && (t.style.display = 'none')))
            },
            [A, w, G]
          ),
          te = I?.id
        ;(0, o.d4)(() => {
          te && K && !M && L({ userId: te })
        }, [L, M, te, K])
        const ne = (0, p.Z)()
        let oe
        const re = I ? (0, c.Js)(I) : Z ? (0, c.U)(ne, Z) : b
        if (y)
          oe = o.ZP.createElement('i', {
            className: (0, d.Z)(h.icon, 'icon-avatar-saved-messages'),
            role: 'img',
            'aria-label': re,
          })
        else if (D)
          oe = o.ZP.createElement('i', {
            className: (0, d.Z)(h.icon, 'icon-avatar-deleted-account'),
            role: 'img',
            'aria-label': re,
          })
        else if (F)
          oe = o.ZP.createElement('i', {
            className: (0, d.Z)(h.icon, 'icon-reply-filled'),
            role: 'img',
            'aria-label': re,
          })
        else if (Y)
          oe = o.ZP.createElement(
            o.ZP.Fragment,
            null,
            o.ZP.createElement('img', {
              src: J,
              className: (0, d.Z)(h.media, 'avatar-media', Q, G && 'poster'),
              alt: re,
              decoding: 'async',
            }),
            W &&
              o.ZP.createElement(g.Z, {
                canPlay: !0,
                src: G,
                className: (0, d.Z)(h.media, 'avatar-media', 'poster'),
                muted: !0,
                loop: A,
                autoPlay: !0,
                disablePictureInPicture: !0,
                playsInline: !0,
                onEnded: ee,
              })
          )
        else if (I) {
          const e = (0, c.Js)(I)
          oe = e ? (0, a.Xv)(e, 2) : void 0
        } else if (Z) {
          const e = (0, c.U)(ne, Z)
          oe = e && (0, a.Xv)(e, (0, c.YC)(Z.id) ? 2 : 1)
        } else b && (oe = (0, a.Xv)(b, 2))
        const le = !y && I && P && (0, c.kM)(I, P),
          ie = (0, d.Z)(
            `Avatar size-${n}`,
            t,
            `color-bg-${(0, c.Rs)(I || Z)}`,
            y && 'saved-messages',
            D && 'deleted-account',
            F && 'replies-bot-account',
            V && 'forum',
            le && 'online',
            U && 'interactive',
            !y && !J && 'no-photo'
          ),
          se = Boolean(y || J),
          ce = (0, o.I4)(
            (e) => {
              U && U(e, se)
            },
            [U, se]
          ),
          ae = (I || Z) && (I || Z).id
        return o.ZP.createElement(
          'div',
          {
            ref: O,
            className: ie,
            onClick: ce,
            'data-test-sender-id': i.Cgt ? ae : void 0,
            'aria-label': 'string' == typeof oe ? re : void 0,
          },
          'string' == typeof oe ? (0, u.Z)(oe, ['jumbo' === n ? 'hq_emoji' : 'emoji']) : oe
        )
      })
    },
    22275: (e, t, n) => {
      n.d(t, { Z: () => d })
      var o = n(60748),
        r = n(33555),
        l = n(11192),
        i = n(56112),
        s = n(32340),
        c = n(59107),
        a = n(17551)
      const d = (0, o.X$)(
        (0, r.c$)((e, t) => {
          let { userId: n } = t
          const o = (0, l.jr)(e),
            r = n && (0, l.dy)(e, n)
          return { chat: o, contactName: r ? (0, i.Vl)(r) : void 0 }
        })((e) => {
          let { isOpen: t, chat: n, userId: l, contactName: i, onClose: d } = e
          const { deleteChatMember: u } = (0, r.Sv)(),
            m = (0, c.Z)(),
            f = (0, o.I4)(() => {
              u({ chatId: n.id, userId: l }), d()
            }, [n, u, d, l])
          if (n && l)
            return o.ZP.createElement(a.Z, {
              isOpen: t,
              onClose: d,
              title: m('GroupRemoved.Remove'),
              textParts: (0, s.Z)(m('PeerInfo.Confirm.RemovePeer', i)),
              confirmLabel: m('lng_box_remove'),
              confirmHandler: f,
              confirmIsDestructive: !0,
            })
        })
      )
    },
    17551: (e, t, n) => {
      n.d(t, { Z: () => c })
      var o = n(60748),
        r = n(59107),
        l = n(72313),
        i = n(13103),
        s = n(231)
      const c = (0, o.X$)((e) => {
        let {
          isOpen: t,
          onClose: n,
          onCloseAnimationEnd: c,
          title: a,
          header: d,
          text: u,
          textParts: m,
          confirmLabel: f = 'Confirm',
          confirmHandler: p,
          confirmIsDestructive: v,
          areButtonsInColumn: g,
          children: h,
        } = e
        const Z = (0, r.Z)(),
          I = (0, o.sO)(null),
          C = (0, o.I4)(
            (e) => {
              ;-1 === e && p()
            },
            [p]
          ),
          P = (0, l.Z)(I, t, C, '.Button')
        return o.ZP.createElement(
          i.Z,
          {
            className: 'confirm',
            title: a || Z('Telegram'),
            header: d,
            isOpen: t,
            onClose: n,
            onCloseAnimationEnd: c,
          },
          u && u.split('\\n').map((e) => o.ZP.createElement('p', null, e)),
          m || h,
          o.ZP.createElement(
            'div',
            {
              className: g ? 'dialog-buttons-column' : 'dialog-buttons mt-2',
              ref: I,
              onKeyDown: P,
            },
            o.ZP.createElement(
              s.Z,
              {
                className: 'confirm-dialog-button',
                isText: !0,
                onClick: p,
                color: v ? 'danger' : 'primary',
              },
              f
            ),
            o.ZP.createElement(
              s.Z,
              { className: 'confirm-dialog-button', isText: !0, onClick: n },
              Z('Cancel')
            )
          )
        )
      })
    },
    21273: (e, t, n) => {
      n.d(t, { Z: () => m })
      var o = n(91713),
        r = n(60748),
        l = n(69118),
        i = n(87675),
        s = n(863),
        c = n(80036)
      const a = '.ListItem',
        d = 20,
        u = 800,
        m = (e) => {
          let {
              ref: t,
              className: n,
              items: m,
              itemSelector: f = a,
              preloadBackwards: p = d,
              sensitiveArea: v = u,
              withAbsolutePositioning: g,
              maxHeight: h,
              noScrollRestore: Z = !1,
              noScrollRestoreOnTop: I = !1,
              noFastList: C,
              cacheBuster: P,
              beforeChildren: b,
              children: y,
              onLoadMore: E,
              onScroll: w,
              onKeyDown: A,
              onDragOver: B,
              onDragLeave: N,
            } = e,
            T = (0, r.sO)(null)
          t && (T = t)
          const k = (0, r.sO)({}),
            [S, U] = (0, r.Ye)(
              () =>
                E
                  ? [
                      (0, l.Ds)(
                        function () {
                          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                          E({ direction: o.Uq.Backwards, noScroll: e })
                        },
                        1e3,
                        !0,
                        !1
                      ),
                      (0, l.Ds)(
                        () => {
                          E({ direction: o.Uq.Forwards })
                        },
                        1e3,
                        !0,
                        !1
                      ),
                    ]
                  : [],
              [E, m]
            )
          ;(0, r.d4)(() => {
            if (!S) return
            if (p > 0 && (!m || m.length < p)) return void S(!0)
            const { scrollHeight: e, clientHeight: t } = T.current
            t && e <= t && S()
          }, [m, S, p]),
            (0, r.bt)(() => {
              const e = T.current,
                t = k.current
              let n
              if (
                ((t.listItemElements = e.querySelectorAll(f)),
                t.currentAnchor && Array.from(t.listItemElements).includes(t.currentAnchor))
              ) {
                const { scrollTop: o } = e
                n = o + (t.currentAnchor.getBoundingClientRect().top - t.currentAnchorTop)
              } else {
                const e = t.listItemElements[0]
                e && ((t.currentAnchor = e), (t.currentAnchorTop = e.getBoundingClientRect().top))
              }
              g ||
                Z ||
                (I && 0 === e.scrollTop) ||
                ((0, i.Z)(e, n), (t.isScrollTopJustUpdated = !0))
            }, [m, f, Z, I, P, g])
          const L = (0, r.I4)(
            (e) => {
              if (U && S) {
                const {
                    isScrollTopJustUpdated: e,
                    currentAnchor: t,
                    currentAnchorTop: n,
                  } = k.current,
                  o = k.current.listItemElements
                if (e) return void (k.current.isScrollTopJustUpdated = !1)
                const r = o.length,
                  l = T.current,
                  { scrollTop: i, scrollHeight: s, offsetHeight: c } = l,
                  a = i <= (r ? o[0].offsetTop : 0) + v,
                  d = (r ? o[r - 1].offsetTop + o[r - 1].offsetHeight : s) - (i + c) <= v
                let u = !1
                if (a) {
                  const e = o[0]
                  if (e) {
                    const o = e.getBoundingClientRect().top,
                      r = t?.offsetParent && t !== e ? t.getBoundingClientRect().top : o
                    t &&
                      void 0 !== n &&
                      r > n &&
                      ((k.current.currentAnchor = e),
                      (k.current.currentAnchorTop = o),
                      (u = !0),
                      U())
                  }
                }
                if (d) {
                  const e = o[r - 1]
                  if (e) {
                    const o = e.getBoundingClientRect().top,
                      r = t?.offsetParent && t !== e ? t.getBoundingClientRect().top : o
                    t &&
                      void 0 !== n &&
                      r < n &&
                      ((k.current.currentAnchor = e),
                      (k.current.currentAnchorTop = o),
                      (u = !0),
                      S())
                  }
                }
                if (!u)
                  if (t?.offsetParent) k.current.currentAnchorTop = t.getBoundingClientRect().top
                  else {
                    const e = o[0]
                    e &&
                      ((k.current.currentAnchor = e),
                      (k.current.currentAnchorTop = e.getBoundingClientRect().top))
                  }
              }
              w && w(e)
            },
            [S, U, w, v]
          )
          return r.ZP.createElement(
            'div',
            {
              ref: T,
              className: n,
              onScroll: L,
              teactFastList: !C && !g,
              onKeyDown: A,
              onDragOver: B,
              onDragLeave: N,
            },
            b,
            g && m?.length
              ? r.ZP.createElement(
                  'div',
                  {
                    teactFastList: !C,
                    style: (0, c.Z)('position: relative', s.wZ && `height: ${h}px`),
                  },
                  y
                )
              : y
          )
        }
    },
    13103: (e, t, n) => {
      n.d(t, { Z: () => p })
      var o = n(60748),
        r = n(517),
        l = n(46752),
        i = n(98069),
        s = n(18674),
        c = n(31212),
        a = n(274),
        d = n(59107),
        u = n(46590),
        m = n(231),
        f = n(62898)
      const p = (e) => {
        let {
          dialogRef: t,
          title: n,
          className: p,
          isOpen: v,
          isSlim: g,
          header: h,
          hasCloseButton: Z,
          noBackdrop: I,
          noBackdropClose: C,
          children: P,
          style: b,
          onClose: y,
          onCloseAnimationEnd: E,
          onEnter: w,
          shouldSkipHistoryAnimations: A,
        } = e
        const { shouldRender: B, transitionClassNames: N } = (0, c.Z)(v, E, A, void 0, A),
          T = (0, o.sO)(null)
        ;(0, o.d4)(() => {
          if (v) return (0, i.l_)(), i.In
        }, [v]),
          (0, o.d4)(() => (v ? (0, r.Z)({ onEsc: y, onEnter: w }) : void 0), [v, y, w]),
          (0, o.d4)(
            () =>
              v && T.current
                ? (function (e) {
                    function t(t) {
                      if ('Tab' !== t.key) return
                      t.preventDefault(), t.stopPropagation()
                      const n = Array.from(
                        e.querySelectorAll(
                          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                        )
                      )
                      if (!n.length) return
                      const o = n.findIndex((e) => e.isSameNode(document.activeElement))
                      let r = 0
                      o >= 0 &&
                        (r = t.shiftKey
                          ? o > 0
                            ? o - 1
                            : n.length - 1
                          : o < n.length - 1
                          ? o + 1
                          : 0),
                        n[r].focus()
                    }
                    return (
                      document.addEventListener('keydown', t, !1),
                      () => {
                        document.removeEventListener('keydown', t, !1)
                      }
                    )
                  })(T.current)
                : void 0,
            [v]
          ),
          (0, u.Z)({ isActive: v, onBack: y }),
          (0, a.Z)(
            (e) => {
              let [t] = e
              return (
                document.body.classList.toggle('has-open-dialog', Boolean(v)),
                (v || (!v && void 0 !== t)) && (0, s.YW)(200),
                () => {
                  document.body.classList.remove('has-open-dialog')
                }
              )
            },
            [v]
          )
        const k = (0, d.Z)()
        if (!B) return
        const S = (0, l.Z)('Modal', p, N, I && 'transparent-backdrop', g && 'slim')
        return o.ZP.createElement(
          f.Z,
          null,
          o.ZP.createElement(
            'div',
            { ref: T, className: S, tabIndex: -1, role: 'dialog' },
            o.ZP.createElement(
              'div',
              { className: 'modal-container' },
              o.ZP.createElement('div', { className: 'modal-backdrop', onClick: C ? void 0 : y }),
              o.ZP.createElement(
                'div',
                { className: 'modal-dialog', ref: t },
                h ||
                  (n
                    ? o.ZP.createElement(
                        'div',
                        { className: 'modal-header' },
                        Z &&
                          o.ZP.createElement(
                            m.Z,
                            {
                              round: !0,
                              color: 'translucent',
                              size: 'smaller',
                              ariaLabel: k('Close'),
                              onClick: y,
                            },
                            o.ZP.createElement('i', { className: 'icon-close' })
                          ),
                        o.ZP.createElement('div', { className: 'modal-title' }, n)
                      )
                    : void 0),
                o.ZP.createElement('div', { className: 'modal-content custom-scroll', style: b }, P)
              )
            )
          )
        )
      }
    },
    42431: (e, t, n) => {
      n.d(t, { $5: () => s, Bj: () => i, GU: () => c, Ht: () => a, fu: () => u, mU: () => d })
      var o = n(14342),
        r = n(56112),
        l = n(86087)
      function i(e, t) {
        const n = (0, o.Z1)(e, t)
        if (n && n.fullInfo && n.fullInfo.groupCallId) return s(e, n.fullInfo.groupCallId)
      }
      function s(e, t) {
        return e.groupCalls.byId[t]
      }
      function c(e, t, n) {
        return s(e, t)?.participants[n]
      }
      function a(e) {
        const t = d(e)?.chatId
        if (!t) return !1
        const n = (0, o.Z1)(e, t)
        return !!n && (((0, r.G9)(n) && n.isCreator) || Boolean(n.adminRights?.manageCall))
      }
      function d(e) {
        const {
          groupCalls: { activeGroupCallId: t },
        } = e
        if (t) return s(e, t)
      }
      function u(e) {
        const { phoneCall: t, currentUserId: n } = e
        if (!t || !t.participantId || !t.adminId) return
        const o = t.adminId === n ? t.participantId : t.adminId
        return (0, l.dy)(e, o)
      }
    },
    9211: (e, t, n) => {
      n.d(t, { M: () => l, P: () => i })
      var o = n(86087),
        r = n(83716)
      function l(e, t) {
        var n
        const { appConfig: l } = e
        if (!l) return r.prK[t][0]
        const i = (0, o.wV)(e),
          { limits: s } = l,
          c = null !== (n = s[t][i ? 1 : 0]) && void 0 !== n ? n : r.prK[t][i ? 1 : 0]
        return 'dialogFilters' === t ? c + 1 : c
      }
      function i(e, t) {
        const { appConfig: n } = e
        if (!n) return r.prK[t][1]
        const { limits: o } = n
        return o[t][1]
      }
    },
    27407: (e, t, n) => {
      n.d(t, { Z: () => a })
      var o = n(60748),
        r = n(91713),
        l = n(60782),
        i = n(65326),
        s = n(87204)
      function c(e, t, n, o) {
        const { length: l } = e,
          i = o ? e.indexOf(o) : 0,
          s = t === r.Uq.Forwards ? i : i + 1 || l,
          c = Math.max(0, s - n),
          a = s + n - 1,
          d = e.slice(Math.max(0, c), a + 1)
        let u, m
        switch (t) {
          case r.Uq.Forwards:
            ;(u = s > 0), (m = c >= 0)
            break
          case r.Uq.Backwards:
            ;(u = s < l), (m = a <= l - 1)
        }
        return { newViewportIds: d, areSomeLocal: u, areAllLocal: m }
      }
      const a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30
        const d = (0, o.sO)(),
          u = (0, o.sO)(
            (() => {
              if (!t || d.current) return
              const { newViewportIds: e } = c(t, r.Uq.Forwards, a, t[0])
              return e
            })()
          ),
          m = (0, i.Z)()
        n && (d.current = {})
        const f = (0, s.Z)(t),
          p = (0, s.Z)(n)
        if (!t || n || (t === f && n === p)) t || (u.current = void 0)
        else {
          const { offsetId: e = t[0], direction: n = r.Uq.Forwards } = d.current || {},
            { newViewportIds: o } = c(t, n, a, e)
          ;(u.current && (0, l.et)(u.current, o)) || (u.current = o)
        }
        const v = (0, o.I4)(
          (n) => {
            let { direction: o, noScroll: i } = n
            const s = u.current,
              f = s ? (o === r.Uq.Backwards ? s[s.length - 1] : s[0]) : void 0
            if (!t) return void (e && e({ offsetId: f }))
            i || (d.current = { ...d.current, direction: o, offsetId: f })
            const { newViewportIds: p, areSomeLocal: v, areAllLocal: g } = c(t, o, a, f)
            !v || (s && (0, l.et)(s, p)) || ((u.current = p), m()), !g && e && e({ offsetId: f })
          },
          [t, a, e, m]
        )
        return n ? [t] : [u.current, v]
      }
    },
    62357: (e, t, n) => {
      n.d(t, { Z: () => r })
      var o = n(60748)
      const r = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        const r = (0, o.sO)(e)
        ;(0, o.bt)(() => {
          r.current = e
        }, [e]),
          (0, o.d4)(() => {
            if (void 0 === t) return
            const e = setInterval(() => r.current(), t)
            return n || r.current(), () => clearInterval(e)
          }, [t, n])
      }
    },
    98069: (e, t, n) => {
      n.d(t, { In: () => l, l_: () => r, wT: () => i })
      let o = 0
      function r() {
        o += 1
      }
      function l() {
        o -= 1
      }
      function i() {
        return o > 0
      }
    },
    87675: (e, t, n) => {
      n.d(t, { Z: () => i, z: () => l })
      var o = n(863),
        r = n(82972)
      function l(e) {
        ;(e.style.display = 'none'), (0, r.Z)(e), (e.style.display = '')
      }
      const i = (e, t) => {
        o.cj && (e.style.overflow = 'hidden'),
          void 0 !== t && (e.scrollTop = t),
          o.cj && (e.style.overflow = '')
      }
    },
  },
])
//# sourceMappingURL=2239.ebeabb494a203455edf8.js.map
