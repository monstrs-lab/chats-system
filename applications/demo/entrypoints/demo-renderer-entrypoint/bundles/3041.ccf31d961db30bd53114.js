'use strict'
;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [3041],
  {
    51133: (e, t, a) => {
      a.r(t), a.d(t, { AuthCode: () => v, AuthPassword: () => f, AuthRegister: () => y })
      var n = a(60748),
        o = a(33555),
        r = a(863),
        l = a(60782),
        s = a(32340),
        i = a(46590),
        c = a(59107),
        d = a(97687),
        u = a(34288),
        m = a(83716),
        h = a(62821),
        Z = a(42797),
        g = a(97799)
      const p = (0, n.X$)((e) => {
          let { code: t, codeLength: a, trackingDirection: o, isTracking: r, isBig: l } = e
          const [s, i] = (0, n.eJ)(!1),
            { isMobile: c } = (0, Z.ZP)(),
            d = 165 / a,
            u = c ? m.qpg : m.z7m,
            p = (0, n.I4)(() => i(!0), [])
          return n.ZP.createElement(
            'div',
            { id: 'monkey', className: l ? 'big' : '' },
            !s && n.ZP.createElement('div', { className: 'monkey-preview' }),
            n.ZP.createElement(g.Z, {
              size: l ? m.K2q : u,
              className: r ? 'hidden' : void 0,
              tgsUrl: h.l.MonkeyIdle,
              play: !r,
              onLoad: p,
            }),
            n.ZP.createElement(g.Z, {
              size: l ? m.K2q : u,
              className: r ? 'shown' : 'hidden',
              tgsUrl: h.l.MonkeyTracking,
              playSegment: r
                ? (function () {
                    const e = (t && t.length > 1) || o < 0 ? 15 + d * (t.length - 1) : 0,
                      n = t.length === a ? 180 : 15 + d * t.length
                    return o < 1 ? [n, e] : [e, n]
                  })()
                : void 0,
              speed: 2,
              noLoop: !0,
            })
          )
        }),
        v = (0, n.X$)(
          (0, o.c$)((e) =>
            (0, l.ei)(e, ['authPhoneNumber', 'authIsCodeViaApp', 'authIsLoading', 'authError'])
          )((e) => {
            let { authPhoneNumber: t, authIsCodeViaApp: a, authIsLoading: l, authError: m } = e
            const { setAuthCode: h, returnToAuthPhoneNumber: Z, clearAuthError: g } = (0, o.Sv)(),
              v = (0, c.Z)(),
              P = (0, n.sO)(null),
              [E, f] = (0, n.eJ)(''),
              [b, N] = (0, n.eJ)(!1),
              [y, C] = (0, n.eJ)(1)
            ;(0, n.d4)(() => {
              r.$b || P.current.focus()
            }, []),
              (0, i.Z)({ isActive: !0, onBack: Z })
            const w = (0, n.I4)(
              (e) => {
                m && g()
                const { currentTarget: t } = e
                ;(t.value = t.value.replace(/[^\d]+/, '').substr(0, 5)),
                  t.value !== E &&
                    (f(t.value),
                    b ? t.value.length || N(!1) : N(!0),
                    E && E.length > t.value.length ? C(-1) : C(1),
                    5 === t.value.length && h({ code: t.value }))
              },
              [m, g, E, b, h]
            )
            return n.ZP.createElement(
              'div',
              { id: 'auth-code-form', className: 'custom-scroll' },
              n.ZP.createElement(
                'div',
                { className: 'auth-form' },
                n.ZP.createElement(p, {
                  code: E,
                  codeLength: 5,
                  isTracking: b,
                  trackingDirection: y,
                }),
                n.ZP.createElement(
                  'h1',
                  null,
                  t,
                  n.ZP.createElement(
                    'div',
                    {
                      className: 'auth-number-edit',
                      onClick: function () {
                        Z()
                      },
                      role: 'button',
                      tabIndex: 0,
                      title: v('WrongNumber'),
                    },
                    n.ZP.createElement('i', { className: 'icon-edit' })
                  )
                ),
                n.ZP.createElement(
                  'p',
                  { className: 'note' },
                  (0, s.Z)(v(a ? 'SentAppCode' : 'Login.JustSentSms'), ['simple_markdown'])
                ),
                n.ZP.createElement(d.Z, {
                  ref: P,
                  id: 'sign-in-code',
                  label: v('Code'),
                  onInput: w,
                  value: E,
                  error: m && v(m),
                  autoComplete: 'off',
                  inputMode: 'numeric',
                }),
                l && n.ZP.createElement(u.Z, null)
              )
            )
          })
        )
      var P = a(93490),
        E = a(99364)
      const f = (0, n.X$)(
        (0, o.c$)((e) => (0, l.ei)(e, ['authIsLoading', 'authError', 'authHint']))((e) => {
          let { authIsLoading: t, authError: a, authHint: r } = e
          const { setAuthPassword: l, clearAuthError: s } = (0, o.Sv)(),
            i = (0, c.Z)(),
            [d, u] = (0, n.eJ)(!1),
            m = (0, n.I4)((e) => {
              u(e)
            }, []),
            h = (0, n.I4)(
              (e) => {
                l({ password: e })
              },
              [l]
            )
          return n.ZP.createElement(
            'div',
            { id: 'auth-password-form', className: 'custom-scroll' },
            n.ZP.createElement(
              'div',
              { className: 'auth-form' },
              n.ZP.createElement(P.Z, { isPasswordVisible: d }),
              n.ZP.createElement('h1', null, i('Login.Header.Password')),
              n.ZP.createElement('p', { className: 'note' }, i('Login.EnterPasswordDescription')),
              n.ZP.createElement(E.Z, {
                clearError: s,
                error: a && i(a),
                hint: r,
                isLoading: t,
                isPasswordVisible: d,
                onChangePasswordVisibility: m,
                onSubmit: h,
              })
            )
          )
        })
      )
      var b = a(231),
        N = a(90730)
      const y = (0, n.X$)(
        (0, o.c$)((e) => (0, l.ei)(e, ['authIsLoading', 'authError']))((e) => {
          let { authIsLoading: t, authError: a } = e
          const { signUp: r, clearAuthError: l, uploadProfilePhoto: s } = (0, o.Sv)(),
            i = (0, c.Z)(),
            [u, m] = (0, n.eJ)(!1),
            [h, Z] = (0, n.eJ)(),
            [g, p] = (0, n.eJ)(''),
            [v, P] = (0, n.eJ)(''),
            E = (0, n.I4)(
              (e) => {
                a && l()
                const { target: t } = e
                p(t.value), m(t.value.length > 0)
              },
              [a, l]
            ),
            f = (0, n.I4)((e) => {
              const { target: t } = e
              P(t.value)
            }, [])
          return n.ZP.createElement(
            'div',
            { id: 'auth-registration-form', className: 'custom-scroll' },
            n.ZP.createElement(
              'div',
              { className: 'auth-form' },
              n.ZP.createElement(
                'form',
                {
                  action: '',
                  method: 'post',
                  onSubmit: function (e) {
                    e.preventDefault(), r({ firstName: g, lastName: v }), h && s({ file: h })
                  },
                },
                n.ZP.createElement(N.Z, { onChange: Z }),
                n.ZP.createElement('h2', null, i('YourName')),
                n.ZP.createElement('p', { className: 'note' }, i('Login.Register.Desc')),
                n.ZP.createElement(d.Z, {
                  id: 'registration-first-name',
                  label: i('Login.Register.FirstName.Placeholder'),
                  onChange: E,
                  value: g,
                  error: a && i(a),
                  autoComplete: 'given-name',
                }),
                n.ZP.createElement(d.Z, {
                  id: 'registration-last-name',
                  label: i('Login.Register.LastName.Placeholder'),
                  onChange: f,
                  value: v,
                  autoComplete: 'family-name',
                }),
                u &&
                  n.ZP.createElement(b.Z, { type: 'submit', ripple: !0, isLoading: t }, i('Next'))
              )
            )
          )
        })
      )
    },
    99364: (e, t, a) => {
      a.d(t, { Z: () => m })
      var n = a(60748),
        o = a(83716),
        r = a(863),
        l = a(46752),
        s = a(3858),
        i = a(59107),
        c = a(28183),
        d = a(42797),
        u = a(231)
      const m = (0, n.X$)((e) => {
        let {
          isLoading: t = !1,
          isPasswordVisible: a,
          error: m,
          hint: h,
          placeholder: Z = 'Password',
          submitLabel: g = 'Next',
          description: p,
          shouldShowSubmit: v,
          shouldResetValue: P,
          shouldDisablePasswordManager: E = !1,
          noRipple: f = !1,
          clearError: b,
          onChangePasswordVisibility: N,
          onInputChange: y,
          onSubmit: C,
        } = e
        const w = (0, n.sO)(null),
          k = (0, i.Z)(),
          { isMobile: L } = (0, d.ZP)(),
          [I, A] = (0, n.eJ)(''),
          [S, J] = (0, n.eJ)(!1),
          x = L ? 550 : 400
        return (
          (0, n.d4)(() => {
            P && A('')
          }, [P]),
          (0, c.Z)(() => {
            r.$b || w.current.focus()
          }, x),
          (0, n.d4)(() => {
            m &&
              requestAnimationFrame(() => {
                w.current.focus(), w.current.select()
              })
          }, [m]),
          n.ZP.createElement(
            'form',
            {
              action: '',
              onSubmit: C
                ? function (e) {
                    e.preventDefault(), t || (S && C(I))
                  }
                : s.Z,
              autoComplete: 'off',
            },
            n.ZP.createElement(
              'div',
              {
                className: (0, l.Z)('input-group password-input', I && 'touched', m && 'error'),
                dir: k.isRtl ? 'rtl' : void 0,
              },
              E &&
                n.ZP.createElement('input', {
                  type: 'password',
                  id: 'prevent_autofill',
                  autoComplete: 'off',
                  className: 'visually-hidden',
                  tabIndex: -2,
                }),
              n.ZP.createElement('input', {
                ref: w,
                className: 'form-control',
                type: a ? 'text' : 'password',
                id: 'sign-in-password',
                value: I || '',
                autoComplete: E ? 'one-time-code' : 'current-password',
                onChange: function (e) {
                  m && b()
                  const { target: t } = e
                  A(t.value), J(t.value.length >= o.loe), y && y(t.value)
                },
                maxLength: 256,
                dir: 'auto',
              }),
              n.ZP.createElement('label', null, m || h || Z),
              n.ZP.createElement(
                'div',
                {
                  className: 'toggle-password',
                  onClick: function () {
                    N(!a)
                  },
                  role: 'button',
                  tabIndex: 0,
                  title: 'Toggle password visibility',
                },
                n.ZP.createElement('i', { className: a ? 'icon-eye' : 'icon-eye-closed' })
              )
            ),
            p && n.ZP.createElement('p', { className: 'description' }, p),
            C &&
              (S || v) &&
              n.ZP.createElement(u.Z, { type: 'submit', ripple: !f, isLoading: t, disabled: !S }, g)
          )
        )
      })
    },
    93490: (e, t, a) => {
      a.d(t, { Z: () => h })
      var n = a(60748),
        o = a(83716),
        r = a(62821),
        l = a(97799),
        s = a(28183),
        i = a(60706),
        c = a(42797)
      const d = [0, 50],
        u = [0, 20],
        m = [20, 0],
        h = (0, n.X$)((e) => {
          let { isPasswordVisible: t, isBig: a } = e
          const [h, Z] = (0, i.Z)(!1),
            [g, p] = (0, i.Z)(!1),
            { isMobile: v } = (0, c.ZP)(),
            P = v ? o.qpg : o.z7m
          ;(0, s.Z)(p, 2e3)
          const E = (0, n.I4)(Z, [Z])
          return n.ZP.createElement(
            'div',
            { id: 'monkey', className: a ? 'big' : '' },
            !h && n.ZP.createElement('div', { className: 'monkey-preview' }),
            n.ZP.createElement(l.Z, {
              size: a ? o.K2q : P,
              className: g ? 'hidden' : 'shown',
              tgsUrl: r.l.MonkeyClose,
              playSegment: d,
              noLoop: !0,
              onLoad: E,
            }),
            n.ZP.createElement(l.Z, {
              size: a ? o.K2q : P,
              className: g ? 'shown' : 'hidden',
              tgsUrl: r.l.MonkeyPeek,
              playSegment: t ? u : m,
              noLoop: !0,
            })
          )
        })
    },
    90730: (e, t, a) => {
      a.d(t, { Z: () => l })
      var n = a(60748),
        o = a(46752),
        r = a(66735)
      const l = (0, n.X$)((e) => {
        let {
          title: t = 'Change your profile picture',
          disabled: a,
          isForForum: l,
          currentAvatarBlobUrl: s,
          onChange: i,
        } = e
        const [c, d] = (0, n.eJ)(),
          [u, m] = (0, n.eJ)(s)
        ;(0, n.d4)(() => {
          m(s)
        }, [s])
        const h = (0, n.I4)(
            (e) => {
              d(void 0), i(e), u && u !== s && URL.revokeObjectURL(u), m(URL.createObjectURL(e))
            },
            [u, s, i]
          ),
          Z = (0, n.I4)(() => {
            d(void 0)
          }, []),
          g = (0, o.Z)(u && 'filled', a && 'disabled', l && 'rounded-square')
        return n.ZP.createElement(
          'div',
          { className: 'AvatarEditable' },
          n.ZP.createElement(
            'label',
            { className: g, role: 'button', tabIndex: 0, title: t },
            n.ZP.createElement('input', {
              type: 'file',
              onChange: function (e) {
                const t = e.target
                t?.files?.[0] && (d(t.files[0]), (t.value = ''))
              },
              accept: 'image/png, image/jpeg',
            }),
            n.ZP.createElement('i', { className: 'icon-camera-add' }),
            u && n.ZP.createElement('img', { src: u, alt: 'Avatar' })
          ),
          n.ZP.createElement(r.Z, { file: c, onClose: Z, onChange: h })
        )
      })
    },
    66735: (e, t, a) => {
      a.d(t, { Z: () => Z })
      var n = a(60748),
        o = a(83716),
        r = a(71394),
        l = a(59107),
        s = a(231),
        i = a(13103),
        c = a(34288)
      const d = {
        type: 'blob',
        quality: 1,
        format: 'jpeg',
        circle: !1,
        size: { width: 1024, height: 1024 },
      }
      let u, m, h
      const Z = (0, n.X$)((e) => {
        let { file: t, onChange: Z, onClose: g } = e
        const [p, v] = (0, n.eJ)(!1)
        ;(0, n.d4)(() => {
          t &&
            (p
              ? (async function (e) {
                  try {
                    const t = document.getElementById('avatar-crop')
                    if (!t) return
                    const { offsetWidth: a, offsetHeight: n } = t
                    h = new u(t, {
                      enableZoom: !0,
                      boundary: { width: a, height: n },
                      viewport: { width: a - 16, height: n - 16, type: 'circle' },
                    })
                    const o = await (0, r.YJ)(e)
                    await h.bind({ url: o })
                  } catch (e) {
                    o.eMD && console.error(e)
                  }
                })(t)
              : (async function () {
                  return (
                    m ||
                      ((m = Promise.all([a.e(5099), a.e(3472)]).then(a.bind(a, 23472))),
                      (u = (await m).default)),
                    m
                  )
                })().then(() => v(!0)))
        }, [t, p])
        const P = (0, l.Z)(),
          E = (0, n.I4)(async () => {
            if (!h) return
            const e = await h.result(d),
              t = 'string' == typeof e ? e : (0, r.hl)(e, 'avatar.jpg')
            Z(t)
          }, [Z])
        return n.ZP.createElement(
          i.Z,
          {
            isOpen: Boolean(t),
            onClose: g,
            title: 'Drag to reposition',
            className: 'CropModal',
            hasCloseButton: !0,
          },
          p ? n.ZP.createElement('div', { id: 'avatar-crop' }) : n.ZP.createElement(c.Z, null),
          n.ZP.createElement(
            s.Z,
            {
              className: 'confirm-button',
              round: !0,
              color: 'primary',
              onClick: E,
              ariaLabel: P('CropImage'),
            },
            n.ZP.createElement('i', { className: 'icon-check' })
          )
        )
      })
    },
    13103: (e, t, a) => {
      a.d(t, { Z: () => Z })
      var n = a(60748),
        o = a(517),
        r = a(46752),
        l = a(98069),
        s = a(18674),
        i = a(31212),
        c = a(274),
        d = a(59107),
        u = a(46590),
        m = a(231),
        h = a(62898)
      const Z = (e) => {
        let {
          dialogRef: t,
          title: a,
          className: Z,
          isOpen: g,
          isSlim: p,
          header: v,
          hasCloseButton: P,
          noBackdrop: E,
          noBackdropClose: f,
          children: b,
          style: N,
          onClose: y,
          onCloseAnimationEnd: C,
          onEnter: w,
          shouldSkipHistoryAnimations: k,
        } = e
        const { shouldRender: L, transitionClassNames: I } = (0, i.Z)(g, C, k, void 0, k),
          A = (0, n.sO)(null)
        ;(0, n.d4)(() => {
          if (g) return (0, l.l_)(), l.In
        }, [g]),
          (0, n.d4)(() => (g ? (0, o.Z)({ onEsc: y, onEnter: w }) : void 0), [g, y, w]),
          (0, n.d4)(
            () =>
              g && A.current
                ? (function (e) {
                    function t(t) {
                      if ('Tab' !== t.key) return
                      t.preventDefault(), t.stopPropagation()
                      const a = Array.from(
                        e.querySelectorAll(
                          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                        )
                      )
                      if (!a.length) return
                      const n = a.findIndex((e) => e.isSameNode(document.activeElement))
                      let o = 0
                      n >= 0 &&
                        (o = t.shiftKey
                          ? n > 0
                            ? n - 1
                            : a.length - 1
                          : n < a.length - 1
                          ? n + 1
                          : 0),
                        a[o].focus()
                    }
                    return (
                      document.addEventListener('keydown', t, !1),
                      () => {
                        document.removeEventListener('keydown', t, !1)
                      }
                    )
                  })(A.current)
                : void 0,
            [g]
          ),
          (0, u.Z)({ isActive: g, onBack: y }),
          (0, c.Z)(
            (e) => {
              let [t] = e
              return (
                document.body.classList.toggle('has-open-dialog', Boolean(g)),
                (g || (!g && void 0 !== t)) && (0, s.YW)(200),
                () => {
                  document.body.classList.remove('has-open-dialog')
                }
              )
            },
            [g]
          )
        const S = (0, d.Z)()
        if (!L) return
        const J = (0, r.Z)('Modal', Z, I, E && 'transparent-backdrop', p && 'slim')
        return n.ZP.createElement(
          h.Z,
          null,
          n.ZP.createElement(
            'div',
            { ref: A, className: J, tabIndex: -1, role: 'dialog' },
            n.ZP.createElement(
              'div',
              { className: 'modal-container' },
              n.ZP.createElement('div', { className: 'modal-backdrop', onClick: f ? void 0 : y }),
              n.ZP.createElement(
                'div',
                { className: 'modal-dialog', ref: t },
                v ||
                  (a
                    ? n.ZP.createElement(
                        'div',
                        { className: 'modal-header' },
                        P &&
                          n.ZP.createElement(
                            m.Z,
                            {
                              round: !0,
                              color: 'translucent',
                              size: 'smaller',
                              ariaLabel: S('Close'),
                              onClick: y,
                            },
                            n.ZP.createElement('i', { className: 'icon-close' })
                          ),
                        n.ZP.createElement('div', { className: 'modal-title' }, a)
                      )
                    : void 0),
                n.ZP.createElement('div', { className: 'modal-content custom-scroll', style: N }, b)
              )
            )
          )
        )
      }
    },
    28183: (e, t, a) => {
      a.d(t, { Z: () => o })
      var n = a(60748)
      const o = function (e, t) {
        const a = (0, n.sO)(e)
        ;(0, n.bt)(() => {
          a.current = e
        }, [e]),
          (0, n.d4)(() => {
            if ('number' != typeof t) return
            const e = setTimeout(() => a.current(), t)
            return () => clearTimeout(e)
          }, [t])
      }
    },
    98069: (e, t, a) => {
      a.d(t, { In: () => r, l_: () => o, wT: () => l })
      let n = 0
      function o() {
        n += 1
      }
      function r() {
        n -= 1
      }
      function l() {
        return n > 0
      }
    },
    3858: (e, t, a) => {
      a.d(t, { Z: () => n })
      const n = (e) => {
        e.stopPropagation(), e.preventDefault()
      }
    },
  },
])
//# sourceMappingURL=3041.ccf31d961db30bd53114.js.map
