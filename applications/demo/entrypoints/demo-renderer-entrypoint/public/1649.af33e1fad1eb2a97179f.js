;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1649],
  {
    28136: (t, e, r) => {
      'use strict'
      r.r(e), r.d(e, { CTR: () => d, IGE: () => g, default: () => w })
      var n = new Uint8Array(256),
        o = new Uint8Array(256),
        i = new Uint32Array(256),
        u = new Uint32Array(256),
        a = new Uint32Array(256),
        s = new Uint32Array(256),
        p = new Uint32Array(256),
        c = new Uint32Array(256),
        l = new Uint32Array(256),
        f = new Uint32Array(256)
      function h(t) {
        if (t instanceof Uint32Array) return t
        if ('string' == typeof t) {
          if (t.length % 4 != 0) for (var e = t.length % 4; e <= 4; e++) t += '\0x00'
          var r = new Uint32Array(t.length / 4)
          for (e = 0; e < t.length; e += 4)
            r[e / 4] =
              ((o = e),
              ((n = t).charCodeAt(o) << 24) ^
                (n.charCodeAt(o + 1) << 16) ^
                (n.charCodeAt(o + 2) << 8) ^
                n.charCodeAt(o + 3))
          return r
        }
        var n, o
        if (t instanceof Uint8Array) {
          for (r = new Uint32Array(t.length / 4), e = 0; e < t.length; e += 4)
            r[e / 4] = (t[e] << 24) ^ (t[e + 1] << 16) ^ (t[e + 2] << 8) ^ t[e + 3]
          return r
        }
        throw new Error('Unable to create 32-bit words')
      }
      function y(t, e, r) {
        void 0 === r && (r = t)
        for (var n = 0; n < t.length; n++) r[n] = t[n] ^ e[n]
      }
      !(function () {
        for (
          var t, e, r, h, y, v = new Uint8Array(256), g = new Uint8Array(256), d = 0, w = 0, m = 0;
          m < 256;
          m++
        )
          (v[m] = (m << 1) ^ (283 * (m >> 7))), (g[v[m] ^ m] = m)
        for (; !n[d]; d ^= t || 1)
          (r = ((r = w ^ (w << 1) ^ (w << 2) ^ (w << 3) ^ (w << 4)) >> 8) ^ (255 & r) ^ 99),
            (n[d] = r),
            (o[r] = d),
            (y = (16843009 * v[(e = v[(t = v[d])])]) ^ (65537 * e) ^ (257 * t) ^ (16843008 * d)),
            (h = (257 * v[r]) ^ (16843008 * r)),
            (i[d] = h = (h << 24) ^ (h >>> 8)),
            (u[d] = h = (h << 24) ^ (h >>> 8)),
            (a[d] = h = (h << 24) ^ (h >>> 8)),
            (s[d] = h = (h << 24) ^ (h >>> 8)),
            (p[r] = y = (y << 24) ^ (y >>> 8)),
            (c[r] = y = (y << 24) ^ (y >>> 8)),
            (l[r] = y = (y << 24) ^ (y >>> 8)),
            (f[r] = y = (y << 24) ^ (y >>> 8)),
            (w = g[w] || 1)
      })()
      var v = (function () {
          function t(t) {
            var e = h(t)
            if (4 !== e.length && 6 !== e.length && 8 !== e.length)
              throw new Error('Invalid key size')
            ;(this.encKey = new Uint32Array(4 * e.length + 28)),
              (this.decKey = new Uint32Array(4 * e.length + 28)),
              this.encKey.set(e)
            for (var r, o = 1, i = e.length; i < 4 * e.length + 28; i++)
              (r = this.encKey[i - 1]),
                (i % e.length == 0 || (8 === e.length && i % e.length == 4)) &&
                  ((r =
                    (n[r >>> 24] << 24) ^
                    (n[(r >> 16) & 255] << 16) ^
                    (n[(r >> 8) & 255] << 8) ^
                    n[255 & r]),
                  i % e.length == 0 &&
                    ((r = (r << 8) ^ (r >>> 24) ^ (o << 24)), (o = (o << 1) ^ (283 * (o >> 7))))),
                (this.encKey[i] = this.encKey[i - e.length] ^ r)
            for (var u = 0; i; u++, i--)
              (r = this.encKey[3 & u ? i : i - 4]),
                (this.decKey[u] =
                  i <= 4 || u < 4
                    ? r
                    : p[n[r >>> 24]] ^ c[n[(r >> 16) & 255]] ^ l[n[(r >> 8) & 255]] ^ f[n[255 & r]])
          }
          return (
            (t.prototype.encrypt = function (t) {
              for (
                var e,
                  r,
                  o,
                  p = h(t),
                  c = new Uint32Array(4),
                  l = p[0] ^ this.encKey[0],
                  f = p[1] ^ this.encKey[1],
                  y = p[2] ^ this.encKey[2],
                  v = p[3] ^ this.encKey[3],
                  g = this.encKey.length / 4 - 2,
                  d = 4,
                  w = 0;
                w < g;
                w++
              )
                (e =
                  i[l >>> 24] ^
                  u[(f >> 16) & 255] ^
                  a[(y >> 8) & 255] ^
                  s[255 & v] ^
                  this.encKey[d]),
                  (r =
                    i[f >>> 24] ^
                    u[(y >> 16) & 255] ^
                    a[(v >> 8) & 255] ^
                    s[255 & l] ^
                    this.encKey[d + 1]),
                  (o =
                    i[y >>> 24] ^
                    u[(v >> 16) & 255] ^
                    a[(l >> 8) & 255] ^
                    s[255 & f] ^
                    this.encKey[d + 2]),
                  (v =
                    i[v >>> 24] ^
                    u[(l >> 16) & 255] ^
                    a[(f >> 8) & 255] ^
                    s[255 & y] ^
                    this.encKey[d + 3]),
                  (l = e),
                  (f = r),
                  (y = o),
                  (d += 4)
              for (w = 0; w < 4; w++)
                (c[w] =
                  (n[l >>> 24] << 24) ^
                  (n[(f >> 16) & 255] << 16) ^
                  (n[(y >> 8) & 255] << 8) ^
                  n[255 & v] ^
                  this.encKey[d++]),
                  (e = l),
                  (l = f),
                  (f = y),
                  (y = v),
                  (v = e)
              return c
            }),
            (t.prototype.decrypt = function (t) {
              for (
                var e,
                  r,
                  n,
                  i = h(t),
                  u = new Uint32Array(4),
                  a = i[0] ^ this.decKey[0],
                  s = i[3] ^ this.decKey[1],
                  y = i[2] ^ this.decKey[2],
                  v = i[1] ^ this.decKey[3],
                  g = this.decKey.length / 4 - 2,
                  d = 4,
                  w = 0;
                w < g;
                w++
              )
                (e =
                  p[a >>> 24] ^
                  c[(s >> 16) & 255] ^
                  l[(y >> 8) & 255] ^
                  f[255 & v] ^
                  this.decKey[d]),
                  (r =
                    p[s >>> 24] ^
                    c[(y >> 16) & 255] ^
                    l[(v >> 8) & 255] ^
                    f[255 & a] ^
                    this.decKey[d + 1]),
                  (n =
                    p[y >>> 24] ^
                    c[(v >> 16) & 255] ^
                    l[(a >> 8) & 255] ^
                    f[255 & s] ^
                    this.decKey[d + 2]),
                  (v =
                    p[v >>> 24] ^
                    c[(a >> 16) & 255] ^
                    l[(s >> 8) & 255] ^
                    f[255 & y] ^
                    this.decKey[d + 3]),
                  (a = e),
                  (s = r),
                  (y = n),
                  (d += 4)
              for (w = 0; w < 4; w++)
                (u[3 & -w] =
                  (o[a >>> 24] << 24) ^
                  (o[(s >> 16) & 255] << 16) ^
                  (o[(y >> 8) & 255] << 8) ^
                  o[255 & v] ^
                  this.decKey[d++]),
                  (e = a),
                  (a = s),
                  (s = y),
                  (y = v),
                  (v = e)
              return u
            }),
            t
          )
        })(),
        g = (function () {
          function t(t, e, r) {
            void 0 === r && (r = 16),
              (this.key = h(t)),
              (this.iv = h(e)),
              (this.cipher = new v(t)),
              (this.blockSize = r / 4)
          }
          return (
            (t.prototype.encrypt = function (t, e) {
              for (
                var r = h(t),
                  n = e || new Uint32Array(r.length),
                  o = this.iv.subarray(this.blockSize, this.iv.length),
                  i = this.iv.subarray(0, this.blockSize),
                  u = new Uint32Array(this.blockSize),
                  a = 0;
                a < r.length;
                a += this.blockSize
              ) {
                var s = r.subarray(a, a + this.blockSize)
                y(s, i, u)
                var p = this.cipher.encrypt(u)
                y(p, o), (o = s), (i = p)
                for (var c = a, l = 0; c < r.length && l < 4; c++, l++) n[c] = p[l]
              }
              return n
            }),
            (t.prototype.decrypt = function (t, e) {
              for (
                var r = h(t),
                  n = e || new Uint32Array(r.length),
                  o = this.iv.subarray(this.blockSize, this.iv.length),
                  i = this.iv.subarray(0, this.blockSize),
                  u = new Uint32Array(this.blockSize),
                  a = 0;
                a < n.length;
                a += this.blockSize
              ) {
                var s = r.subarray(a, a + this.blockSize)
                y(s, o, u)
                var p = this.cipher.decrypt(u)
                y(p, i), (i = s), (o = p)
                for (var c = a, l = 0; c < n.length && l < 4; c++, l++) n[c] = p[l]
              }
              return n
            }),
            t
          )
        })(),
        d = (function () {
          function t(t, e, r) {
            if (
              (void 0 === r && (r = 16),
              (this.offset = 0),
              (this.key = h(t)),
              (this.counter = h(e)),
              (this.cipher = new v(t)),
              (this.blockSize = r / 4),
              4 !== this.counter.length)
            )
              throw new Error('AES-CTR mode counter must be 16 bytes length')
          }
          return (
            (t.prototype.encrypt = function (t, e) {
              for (
                var r = h(t), n = e || new Uint32Array(r.length), o = this.offset, i = 0;
                i < r.length;
                i += this.blockSize
              ) {
                for (
                  var u = this.cipher.encrypt(this.counter), a = i, s = o;
                  a < r.length && s < this.blockSize;
                  a++, s++
                )
                  n[a] = u[s] ^ r[a]
                r.length - i >= this.blockSize && this.incrementCounter(), o && ((i -= o), (o = 0))
              }
              return (this.offset = (this.offset + (r.length % 4)) % 4), n
            }),
            (t.prototype.decrypt = function (t, e) {
              return this.encrypt(t, e)
            }),
            (t.prototype.incrementCounter = function () {
              for (
                var t = this.counter.length - 1;
                t >= 0 && !(++this.counter[t] < 4294967295);
                t--
              );
            }),
            t
          )
        })()
      const w = v
    },
    85078: (t, e, r) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n = r(70655),
        o = r(2403),
        i = (function () {
          function t(t) {
            this._semaphore = new o.default(1, t)
          }
          return (
            (t.prototype.acquire = function () {
              return n.__awaiter(this, void 0, void 0, function () {
                return n.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this._semaphore.acquire()]
                    case 1:
                      return [2, t.sent()[1]]
                  }
                })
              })
            }),
            (t.prototype.runExclusive = function (t) {
              return this._semaphore.runExclusive(function () {
                return t()
              })
            }),
            (t.prototype.isLocked = function () {
              return this._semaphore.isLocked()
            }),
            (t.prototype.waitForUnlock = function () {
              return this._semaphore.waitForUnlock()
            }),
            (t.prototype.release = function () {
              this._semaphore.isLocked() && this._semaphore.release()
            }),
            (t.prototype.cancel = function () {
              return this._semaphore.cancel()
            }),
            t
          )
        })()
      e.default = i
    },
    2403: (t, e, r) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n = r(70655),
        o = r(21764),
        i = (function () {
          function t(t, e) {
            void 0 === e && (e = o.E_CANCELED),
              (this._value = t),
              (this._cancelError = e),
              (this._weightedQueues = []),
              (this._weightedWaiters = [])
          }
          return (
            (t.prototype.acquire = function (t) {
              var e = this
              if ((void 0 === t && (t = 1), t <= 0))
                throw new Error('invalid weight '.concat(t, ': must be positive'))
              return new Promise(function (r, n) {
                e._weightedQueues[t - 1] || (e._weightedQueues[t - 1] = []),
                  e._weightedQueues[t - 1].push({ resolve: r, reject: n }),
                  e._dispatch()
              })
            }),
            (t.prototype.runExclusive = function (t, e) {
              return (
                void 0 === e && (e = 1),
                n.__awaiter(this, void 0, void 0, function () {
                  var r, o, i
                  return n.__generator(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, this.acquire(e)]
                      case 1:
                        ;(r = n.sent()), (o = r[0]), (i = r[1]), (n.label = 2)
                      case 2:
                        return n.trys.push([2, , 4, 5]), [4, t(o)]
                      case 3:
                        return [2, n.sent()]
                      case 4:
                        return i(), [7]
                      case 5:
                        return [2]
                    }
                  })
                })
              )
            }),
            (t.prototype.waitForUnlock = function (t) {
              var e = this
              if ((void 0 === t && (t = 1), t <= 0))
                throw new Error('invalid weight '.concat(t, ': must be positive'))
              return new Promise(function (r) {
                e._weightedWaiters[t - 1] || (e._weightedWaiters[t - 1] = []),
                  e._weightedWaiters[t - 1].push(r),
                  e._dispatch()
              })
            }),
            (t.prototype.isLocked = function () {
              return this._value <= 0
            }),
            (t.prototype.getValue = function () {
              return this._value
            }),
            (t.prototype.setValue = function (t) {
              ;(this._value = t), this._dispatch()
            }),
            (t.prototype.release = function (t) {
              if ((void 0 === t && (t = 1), t <= 0))
                throw new Error('invalid weight '.concat(t, ': must be positive'))
              ;(this._value += t), this._dispatch()
            }),
            (t.prototype.cancel = function () {
              var t = this
              this._weightedQueues.forEach(function (e) {
                return e.forEach(function (e) {
                  return e.reject(t._cancelError)
                })
              }),
                (this._weightedQueues = [])
            }),
            (t.prototype._dispatch = function () {
              for (var t, e = this._value; e > 0; e--) {
                var r =
                  null === (t = this._weightedQueues[e - 1]) || void 0 === t ? void 0 : t.shift()
                if (r) {
                  var n = this._value,
                    o = e
                  ;(this._value -= e), (e = this._value + 1), r.resolve([n, this._newReleaser(o)])
                }
              }
              this._drainUnlockWaiters()
            }),
            (t.prototype._newReleaser = function (t) {
              var e = this,
                r = !1
              return function () {
                r || ((r = !0), e.release(t))
              }
            }),
            (t.prototype._drainUnlockWaiters = function () {
              for (var t = this._value; t > 0; t--)
                this._weightedWaiters[t - 1] &&
                  (this._weightedWaiters[t - 1].forEach(function (t) {
                    return t()
                  }),
                  (this._weightedWaiters[t - 1] = []))
            }),
            t
          )
        })()
      e.default = i
    },
    21764: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.E_CANCELED = e.E_ALREADY_LOCKED = e.E_TIMEOUT = void 0),
        (e.E_TIMEOUT = new Error('timeout while waiting for mutex to become available')),
        (e.E_ALREADY_LOCKED = new Error('mutex already locked')),
        (e.E_CANCELED = new Error('request for lock canceled'))
    },
    48125: (t, e, r) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.tryAcquire = e.withTimeout = e.Semaphore = e.Mutex = void 0)
      var n = r(70655),
        o = r(85078)
      Object.defineProperty(e, 'Mutex', {
        enumerable: !0,
        get: function () {
          return o.default
        },
      })
      var i = r(2403)
      Object.defineProperty(e, 'Semaphore', {
        enumerable: !0,
        get: function () {
          return i.default
        },
      })
      var u = r(41960)
      Object.defineProperty(e, 'withTimeout', {
        enumerable: !0,
        get: function () {
          return u.withTimeout
        },
      })
      var a = r(73143)
      Object.defineProperty(e, 'tryAcquire', {
        enumerable: !0,
        get: function () {
          return a.tryAcquire
        },
      }),
        n.__exportStar(r(21764), e)
    },
    73143: (t, e, r) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.tryAcquire = void 0)
      var n = r(21764),
        o = r(41960)
      e.tryAcquire = function (t, e) {
        return void 0 === e && (e = n.E_ALREADY_LOCKED), (0, o.withTimeout)(t, 0, e)
      }
    },
    41960: (t, e, r) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.withTimeout = void 0)
      var n = r(70655),
        o = r(21764)
      e.withTimeout = function (t, e, r) {
        var i = this
        return (
          void 0 === r && (r = o.E_TIMEOUT),
          {
            acquire: function (o) {
              if (void 0 !== o && o <= 0)
                throw new Error('invalid weight '.concat(o, ': must be positive'))
              return new Promise(function (u, a) {
                return n.__awaiter(i, void 0, void 0, function () {
                  var i, s, p, c
                  return n.__generator(this, function (n) {
                    switch (n.label) {
                      case 0:
                        ;(i = !1),
                          (s = setTimeout(function () {
                            ;(i = !0), a(r)
                          }, e)),
                          (n.label = 1)
                      case 1:
                        return n.trys.push([1, 3, , 4]), [4, t.acquire(o)]
                      case 2:
                        return (
                          (p = n.sent()),
                          i ? (Array.isArray(p) ? p[1] : p)() : (clearTimeout(s), u(p)),
                          [3, 4]
                        )
                      case 3:
                        return (c = n.sent()), i || (clearTimeout(s), a(c)), [3, 4]
                      case 4:
                        return [2]
                    }
                  })
                })
              })
            },
            runExclusive: function (t, e) {
              return n.__awaiter(this, void 0, void 0, function () {
                var r, o
                return n.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      ;(r = function () {}), (n.label = 1)
                    case 1:
                      return n.trys.push([1, , 7, 8]), [4, this.acquire(e)]
                    case 2:
                      return (o = n.sent()), Array.isArray(o) ? ((r = o[1]), [4, t(o[0])]) : [3, 4]
                    case 3:
                      return [2, n.sent()]
                    case 4:
                      return (r = o), [4, t()]
                    case 5:
                      return [2, n.sent()]
                    case 6:
                      return [3, 8]
                    case 7:
                      return r(), [7]
                    case 8:
                      return [2]
                  }
                })
              })
            },
            release: function (e) {
              t.release(e)
            },
            cancel: function () {
              return t.cancel()
            },
            waitForUnlock: function (n) {
              if (void 0 !== n && n <= 0)
                throw new Error('invalid weight '.concat(n, ': must be positive'))
              return new Promise(function (o, i) {
                t.waitForUnlock(n).then(o),
                  setTimeout(function () {
                    return i(r)
                  }, e)
              })
            },
            isLocked: function () {
              return t.isLocked()
            },
            getValue: function () {
              return t.getValue()
            },
            setValue: function (e) {
              return t.setValue(e)
            },
          }
        )
      }
    },
    24736: (t, e, r) => {
      var n
      t = r.nmd(t)
      var o = (function (t) {
        'use strict'
        var e = 1e7,
          r = 9007199254740992,
          n = f(r),
          i = '0123456789abcdefghijklmnopqrstuvwxyz',
          u = 'function' == typeof BigInt
        function a(t, e, r, n) {
          return void 0 === t ? a[0] : void 0 === e || (10 == +e && !r) ? G(t) : J(t, e, r, n)
        }
        function s(t, e) {
          ;(this.value = t), (this.sign = e), (this.isSmall = !1)
        }
        function p(t) {
          ;(this.value = t), (this.sign = t < 0), (this.isSmall = !0)
        }
        function c(t) {
          this.value = t
        }
        function l(t) {
          return -r < t && t < r
        }
        function f(t) {
          return t < 1e7
            ? [t]
            : t < 1e14
            ? [t % 1e7, Math.floor(t / 1e7)]
            : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
        }
        function h(t) {
          y(t)
          var r = t.length
          if (r < 4 && j(t, n) < 0)
            switch (r) {
              case 0:
                return 0
              case 1:
                return t[0]
              case 2:
                return t[0] + t[1] * e
              default:
                return t[0] + (t[1] + t[2] * e) * e
            }
          return t
        }
        function y(t) {
          for (var e = t.length; 0 === t[--e]; );
          t.length = e + 1
        }
        function v(t) {
          for (var e = new Array(t), r = -1; ++r < t; ) e[r] = 0
          return e
        }
        function g(t) {
          return t > 0 ? Math.floor(t) : Math.ceil(t)
        }
        function d(t, r) {
          var n,
            o,
            i = t.length,
            u = r.length,
            a = new Array(i),
            s = 0,
            p = e
          for (o = 0; o < u; o++) (s = (n = t[o] + r[o] + s) >= p ? 1 : 0), (a[o] = n - s * p)
          for (; o < i; ) (s = (n = t[o] + s) === p ? 1 : 0), (a[o++] = n - s * p)
          return s > 0 && a.push(s), a
        }
        function w(t, e) {
          return t.length >= e.length ? d(t, e) : d(e, t)
        }
        function m(t, r) {
          var n,
            o,
            i = t.length,
            u = new Array(i),
            a = e
          for (o = 0; o < i; o++)
            (n = t[o] - a + r), (r = Math.floor(n / a)), (u[o] = n - r * a), (r += 1)
          for (; r > 0; ) (u[o++] = r % a), (r = Math.floor(r / a))
          return u
        }
        function b(t, r) {
          var n,
            o,
            i = t.length,
            u = r.length,
            a = new Array(i),
            s = 0,
            p = e
          for (n = 0; n < u; n++)
            (o = t[n] - s - r[n]) < 0 ? ((o += p), (s = 1)) : (s = 0), (a[n] = o)
          for (n = u; n < i; n++) {
            if (!((o = t[n] - s) < 0)) {
              a[n++] = o
              break
            }
            ;(o += p), (a[n] = o)
          }
          for (; n < i; n++) a[n] = t[n]
          return y(a), a
        }
        function _(t, r, n) {
          var o,
            i,
            u = t.length,
            a = new Array(u),
            c = -r,
            l = e
          for (o = 0; o < u; o++)
            (i = t[o] + c), (c = Math.floor(i / l)), (i %= l), (a[o] = i < 0 ? i + l : i)
          return 'number' == typeof (a = h(a)) ? (n && (a = -a), new p(a)) : new s(a, n)
        }
        function E(t, r) {
          var n,
            o,
            i,
            u,
            a = t.length,
            s = r.length,
            p = v(a + s),
            c = e
          for (i = 0; i < a; ++i) {
            u = t[i]
            for (var l = 0; l < s; ++l)
              (n = u * r[l] + p[i + l]),
                (o = Math.floor(n / c)),
                (p[i + l] = n - o * c),
                (p[i + l + 1] += o)
          }
          return y(p), p
        }
        function S(t, r) {
          var n,
            o,
            i = t.length,
            u = new Array(i),
            a = e,
            s = 0
          for (o = 0; o < i; o++) (n = t[o] * r + s), (s = Math.floor(n / a)), (u[o] = n - s * a)
          for (; s > 0; ) (u[o++] = s % a), (s = Math.floor(s / a))
          return u
        }
        function A(t, e) {
          for (var r = []; e-- > 0; ) r.push(0)
          return r.concat(t)
        }
        function O(t, e) {
          var r = Math.max(t.length, e.length)
          if (r <= 30) return E(t, e)
          r = Math.ceil(r / 2)
          var n = t.slice(r),
            o = t.slice(0, r),
            i = e.slice(r),
            u = e.slice(0, r),
            a = O(o, u),
            s = O(n, i),
            p = O(w(o, n), w(u, i)),
            c = w(w(a, A(b(b(p, a), s), r)), A(s, 2 * r))
          return y(c), c
        }
        function P(t, r, n) {
          return new s(t < e ? S(r, t) : E(r, f(t)), n)
        }
        function q(t) {
          var r,
            n,
            o,
            i,
            u = t.length,
            a = v(u + u),
            s = e
          for (o = 0; o < u; o++) {
            n = 0 - (i = t[o]) * i
            for (var p = o; p < u; p++)
              (r = i * t[p] * 2 + a[o + p] + n), (n = Math.floor(r / s)), (a[o + p] = r - n * s)
            a[o + u] = n
          }
          return y(a), a
        }
        function M(t, e) {
          var r,
            n,
            o,
            i,
            u = t.length,
            a = v(u)
          for (o = 0, r = u - 1; r >= 0; --r)
            (o = (i = 1e7 * o + t[r]) - (n = g(i / e)) * e), (a[r] = 0 | n)
          return [a, 0 | o]
        }
        function k(t, r) {
          var n,
            o = G(r)
          if (u) return [new c(t.value / o.value), new c(t.value % o.value)]
          var i,
            l = t.value,
            d = o.value
          if (0 === d) throw new Error('Cannot divide by zero')
          if (t.isSmall) return o.isSmall ? [new p(g(l / d)), new p(l % d)] : [a[0], t]
          if (o.isSmall) {
            if (1 === d) return [t, a[0]]
            if (-1 == d) return [t.negate(), a[0]]
            var w = Math.abs(d)
            if (w < e) {
              i = h((n = M(l, w))[0])
              var m = n[1]
              return (
                t.sign && (m = -m),
                'number' == typeof i
                  ? (t.sign !== o.sign && (i = -i), [new p(i), new p(m)])
                  : [new s(i, t.sign !== o.sign), new p(m)]
              )
            }
            d = f(w)
          }
          var _ = j(l, d)
          if (-1 === _) return [a[0], t]
          if (0 === _) return [a[t.sign === o.sign ? 1 : -1], a[0]]
          ;(n =
            l.length + d.length <= 200
              ? (function (t, r) {
                  var n,
                    o,
                    i,
                    u,
                    a,
                    s,
                    p,
                    c = t.length,
                    l = r.length,
                    f = e,
                    y = v(r.length),
                    g = r[l - 1],
                    d = Math.ceil(f / (2 * g)),
                    w = S(t, d),
                    m = S(r, d)
                  for (
                    w.length <= c && w.push(0), m.push(0), g = m[l - 1], o = c - l;
                    o >= 0;
                    o--
                  ) {
                    for (
                      n = f - 1,
                        w[o + l] !== g && (n = Math.floor((w[o + l] * f + w[o + l - 1]) / g)),
                        i = 0,
                        u = 0,
                        s = m.length,
                        a = 0;
                      a < s;
                      a++
                    )
                      (i += n * m[a]),
                        (p = Math.floor(i / f)),
                        (u += w[o + a] - (i - p * f)),
                        (i = p),
                        u < 0 ? ((w[o + a] = u + f), (u = -1)) : ((w[o + a] = u), (u = 0))
                    for (; 0 !== u; ) {
                      for (n -= 1, i = 0, a = 0; a < s; a++)
                        (i += w[o + a] - f + m[a]) < 0
                          ? ((w[o + a] = i + f), (i = 0))
                          : ((w[o + a] = i), (i = 1))
                      u += i
                    }
                    y[o] = n
                  }
                  return (w = M(w, d)[0]), [h(y), h(w)]
                })(l, d)
              : (function (t, r) {
                  for (var n, o, i, u, a, s = t.length, p = r.length, c = [], l = [], f = e; s; )
                    if ((l.unshift(t[--s]), y(l), j(l, r) < 0)) c.push(0)
                    else {
                      ;(i = l[(o = l.length) - 1] * f + l[o - 2]),
                        (u = r[p - 1] * f + r[p - 2]),
                        o > p && (i = (i + 1) * f),
                        (n = Math.ceil(i / u))
                      do {
                        if (j((a = S(r, n)), l) <= 0) break
                        n--
                      } while (n)
                      c.push(n), (l = b(l, a))
                    }
                  return c.reverse(), [h(c), h(l)]
                })(l, d)),
            (i = n[0])
          var E = t.sign !== o.sign,
            A = n[1],
            O = t.sign
          return (
            'number' == typeof i ? (E && (i = -i), (i = new p(i))) : (i = new s(i, E)),
            'number' == typeof A ? (O && (A = -A), (A = new p(A))) : (A = new s(A, O)),
            [i, A]
          )
        }
        function j(t, e) {
          if (t.length !== e.length) return t.length > e.length ? 1 : -1
          for (var r = t.length - 1; r >= 0; r--) if (t[r] !== e[r]) return t[r] > e[r] ? 1 : -1
          return 0
        }
        function U(t) {
          var e = t.abs()
          return (
            !e.isUnit() &&
            (!!(e.equals(2) || e.equals(3) || e.equals(5)) ||
              (!(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) &&
                (!!e.lesser(49) || void 0)))
          )
        }
        function N(t, e) {
          for (var r, n, i, u = t.prev(), a = u, s = 0; a.isEven(); ) (a = a.divide(2)), s++
          t: for (n = 0; n < e.length; n++)
            if (!t.lesser(e[n]) && !(i = o(e[n]).modPow(a, t)).isUnit() && !i.equals(u)) {
              for (r = s - 1; 0 != r; r--) {
                if ((i = i.square().mod(t)).isUnit()) return !1
                if (i.equals(u)) continue t
              }
              return !1
            }
          return !0
        }
        ;(s.prototype = Object.create(a.prototype)),
          (p.prototype = Object.create(a.prototype)),
          (c.prototype = Object.create(a.prototype)),
          (s.prototype.add = function (t) {
            var e = G(t)
            if (this.sign !== e.sign) return this.subtract(e.negate())
            var r = this.value,
              n = e.value
            return e.isSmall ? new s(m(r, Math.abs(n)), this.sign) : new s(w(r, n), this.sign)
          }),
          (s.prototype.plus = s.prototype.add),
          (p.prototype.add = function (t) {
            var e = G(t),
              r = this.value
            if (r < 0 !== e.sign) return this.subtract(e.negate())
            var n = e.value
            if (e.isSmall) {
              if (l(r + n)) return new p(r + n)
              n = f(Math.abs(n))
            }
            return new s(m(n, Math.abs(r)), r < 0)
          }),
          (p.prototype.plus = p.prototype.add),
          (c.prototype.add = function (t) {
            return new c(this.value + G(t).value)
          }),
          (c.prototype.plus = c.prototype.add),
          (s.prototype.subtract = function (t) {
            var e = G(t)
            if (this.sign !== e.sign) return this.add(e.negate())
            var r = this.value,
              n = e.value
            return e.isSmall
              ? _(r, Math.abs(n), this.sign)
              : (function (t, e, r) {
                  var n
                  return (
                    j(t, e) >= 0 ? (n = b(t, e)) : ((n = b(e, t)), (r = !r)),
                    'number' == typeof (n = h(n)) ? (r && (n = -n), new p(n)) : new s(n, r)
                  )
                })(r, n, this.sign)
          }),
          (s.prototype.minus = s.prototype.subtract),
          (p.prototype.subtract = function (t) {
            var e = G(t),
              r = this.value
            if (r < 0 !== e.sign) return this.add(e.negate())
            var n = e.value
            return e.isSmall ? new p(r - n) : _(n, Math.abs(r), r >= 0)
          }),
          (p.prototype.minus = p.prototype.subtract),
          (c.prototype.subtract = function (t) {
            return new c(this.value - G(t).value)
          }),
          (c.prototype.minus = c.prototype.subtract),
          (s.prototype.negate = function () {
            return new s(this.value, !this.sign)
          }),
          (p.prototype.negate = function () {
            var t = this.sign,
              e = new p(-this.value)
            return (e.sign = !t), e
          }),
          (c.prototype.negate = function () {
            return new c(-this.value)
          }),
          (s.prototype.abs = function () {
            return new s(this.value, !1)
          }),
          (p.prototype.abs = function () {
            return new p(Math.abs(this.value))
          }),
          (c.prototype.abs = function () {
            return new c(this.value >= 0 ? this.value : -this.value)
          }),
          (s.prototype.multiply = function (t) {
            var r,
              n,
              o,
              i = G(t),
              u = this.value,
              p = i.value,
              c = this.sign !== i.sign
            if (i.isSmall) {
              if (0 === p) return a[0]
              if (1 === p) return this
              if (-1 === p) return this.negate()
              if ((r = Math.abs(p)) < e) return new s(S(u, r), c)
              p = f(r)
            }
            return new s(
              -0.012 * (n = u.length) - 0.012 * (o = p.length) + 15e-6 * n * o > 0
                ? O(u, p)
                : E(u, p),
              c
            )
          }),
          (s.prototype.times = s.prototype.multiply),
          (p.prototype._multiplyBySmall = function (t) {
            return l(t.value * this.value)
              ? new p(t.value * this.value)
              : P(Math.abs(t.value), f(Math.abs(this.value)), this.sign !== t.sign)
          }),
          (s.prototype._multiplyBySmall = function (t) {
            return 0 === t.value
              ? a[0]
              : 1 === t.value
              ? this
              : -1 === t.value
              ? this.negate()
              : P(Math.abs(t.value), this.value, this.sign !== t.sign)
          }),
          (p.prototype.multiply = function (t) {
            return G(t)._multiplyBySmall(this)
          }),
          (p.prototype.times = p.prototype.multiply),
          (c.prototype.multiply = function (t) {
            return new c(this.value * G(t).value)
          }),
          (c.prototype.times = c.prototype.multiply),
          (s.prototype.square = function () {
            return new s(q(this.value), !1)
          }),
          (p.prototype.square = function () {
            var t = this.value * this.value
            return l(t) ? new p(t) : new s(q(f(Math.abs(this.value))), !1)
          }),
          (c.prototype.square = function (t) {
            return new c(this.value * this.value)
          }),
          (s.prototype.divmod = function (t) {
            var e = k(this, t)
            return { quotient: e[0], remainder: e[1] }
          }),
          (c.prototype.divmod = p.prototype.divmod = s.prototype.divmod),
          (s.prototype.divide = function (t) {
            return k(this, t)[0]
          }),
          (c.prototype.over = c.prototype.divide =
            function (t) {
              return new c(this.value / G(t).value)
            }),
          (p.prototype.over = p.prototype.divide = s.prototype.over = s.prototype.divide),
          (s.prototype.mod = function (t) {
            return k(this, t)[1]
          }),
          (c.prototype.mod = c.prototype.remainder =
            function (t) {
              return new c(this.value % G(t).value)
            }),
          (p.prototype.remainder = p.prototype.mod = s.prototype.remainder = s.prototype.mod),
          (s.prototype.pow = function (t) {
            var e,
              r,
              n,
              o = G(t),
              i = this.value,
              u = o.value
            if (0 === u) return a[1]
            if (0 === i) return a[0]
            if (1 === i) return a[1]
            if (-1 === i) return o.isEven() ? a[1] : a[-1]
            if (o.sign) return a[0]
            if (!o.isSmall) throw new Error('The exponent ' + o.toString() + ' is too large.')
            if (this.isSmall && l((e = Math.pow(i, u)))) return new p(g(e))
            for (r = this, n = a[1]; !0 & u && ((n = n.times(r)), --u), 0 !== u; )
              (u /= 2), (r = r.square())
            return n
          }),
          (p.prototype.pow = s.prototype.pow),
          (c.prototype.pow = function (t) {
            var e = G(t),
              r = this.value,
              n = e.value,
              o = BigInt(0),
              i = BigInt(1),
              u = BigInt(2)
            if (n === o) return a[1]
            if (r === o) return a[0]
            if (r === i) return a[1]
            if (r === BigInt(-1)) return e.isEven() ? a[1] : a[-1]
            if (e.isNegative()) return new c(o)
            for (var s = this, p = a[1]; (n & i) === i && ((p = p.times(s)), --n), n !== o; )
              (n /= u), (s = s.square())
            return p
          }),
          (s.prototype.modPow = function (t, e) {
            if (((t = G(t)), (e = G(e)).isZero()))
              throw new Error('Cannot take modPow with modulus 0')
            var r = a[1],
              n = this.mod(e)
            for (t.isNegative() && ((t = t.multiply(a[-1])), (n = n.modInv(e))); t.isPositive(); ) {
              if (n.isZero()) return a[0]
              t.isOdd() && (r = r.multiply(n).mod(e)), (t = t.divide(2)), (n = n.square().mod(e))
            }
            return r
          }),
          (c.prototype.modPow = p.prototype.modPow = s.prototype.modPow),
          (s.prototype.compareAbs = function (t) {
            var e = G(t),
              r = this.value,
              n = e.value
            return e.isSmall ? 1 : j(r, n)
          }),
          (p.prototype.compareAbs = function (t) {
            var e = G(t),
              r = Math.abs(this.value),
              n = e.value
            return e.isSmall ? (r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1) : -1
          }),
          (c.prototype.compareAbs = function (t) {
            var e = this.value,
              r = G(t).value
            return (e = e >= 0 ? e : -e) === (r = r >= 0 ? r : -r) ? 0 : e > r ? 1 : -1
          }),
          (s.prototype.compare = function (t) {
            if (t === 1 / 0) return -1
            if (t === -1 / 0) return 1
            var e = G(t),
              r = this.value,
              n = e.value
            return this.sign !== e.sign
              ? e.sign
                ? 1
                : -1
              : e.isSmall
              ? this.sign
                ? -1
                : 1
              : j(r, n) * (this.sign ? -1 : 1)
          }),
          (s.prototype.compareTo = s.prototype.compare),
          (p.prototype.compare = function (t) {
            if (t === 1 / 0) return -1
            if (t === -1 / 0) return 1
            var e = G(t),
              r = this.value,
              n = e.value
            return e.isSmall
              ? r == n
                ? 0
                : r > n
                ? 1
                : -1
              : r < 0 !== e.sign
              ? r < 0
                ? -1
                : 1
              : r < 0
              ? 1
              : -1
          }),
          (p.prototype.compareTo = p.prototype.compare),
          (c.prototype.compare = function (t) {
            if (t === 1 / 0) return -1
            if (t === -1 / 0) return 1
            var e = this.value,
              r = G(t).value
            return e === r ? 0 : e > r ? 1 : -1
          }),
          (c.prototype.compareTo = c.prototype.compare),
          (s.prototype.equals = function (t) {
            return 0 === this.compare(t)
          }),
          (c.prototype.eq =
            c.prototype.equals =
            p.prototype.eq =
            p.prototype.equals =
            s.prototype.eq =
              s.prototype.equals),
          (s.prototype.notEquals = function (t) {
            return 0 !== this.compare(t)
          }),
          (c.prototype.neq =
            c.prototype.notEquals =
            p.prototype.neq =
            p.prototype.notEquals =
            s.prototype.neq =
              s.prototype.notEquals),
          (s.prototype.greater = function (t) {
            return this.compare(t) > 0
          }),
          (c.prototype.gt =
            c.prototype.greater =
            p.prototype.gt =
            p.prototype.greater =
            s.prototype.gt =
              s.prototype.greater),
          (s.prototype.lesser = function (t) {
            return this.compare(t) < 0
          }),
          (c.prototype.lt =
            c.prototype.lesser =
            p.prototype.lt =
            p.prototype.lesser =
            s.prototype.lt =
              s.prototype.lesser),
          (s.prototype.greaterOrEquals = function (t) {
            return this.compare(t) >= 0
          }),
          (c.prototype.geq =
            c.prototype.greaterOrEquals =
            p.prototype.geq =
            p.prototype.greaterOrEquals =
            s.prototype.geq =
              s.prototype.greaterOrEquals),
          (s.prototype.lesserOrEquals = function (t) {
            return this.compare(t) <= 0
          }),
          (c.prototype.leq =
            c.prototype.lesserOrEquals =
            p.prototype.leq =
            p.prototype.lesserOrEquals =
            s.prototype.leq =
              s.prototype.lesserOrEquals),
          (s.prototype.isEven = function () {
            return 0 == (1 & this.value[0])
          }),
          (p.prototype.isEven = function () {
            return 0 == (1 & this.value)
          }),
          (c.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0)
          }),
          (s.prototype.isOdd = function () {
            return 1 == (1 & this.value[0])
          }),
          (p.prototype.isOdd = function () {
            return 1 == (1 & this.value)
          }),
          (c.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1)
          }),
          (s.prototype.isPositive = function () {
            return !this.sign
          }),
          (p.prototype.isPositive = function () {
            return this.value > 0
          }),
          (c.prototype.isPositive = p.prototype.isPositive),
          (s.prototype.isNegative = function () {
            return this.sign
          }),
          (p.prototype.isNegative = function () {
            return this.value < 0
          }),
          (c.prototype.isNegative = p.prototype.isNegative),
          (s.prototype.isUnit = function () {
            return !1
          }),
          (p.prototype.isUnit = function () {
            return 1 === Math.abs(this.value)
          }),
          (c.prototype.isUnit = function () {
            return this.abs().value === BigInt(1)
          }),
          (s.prototype.isZero = function () {
            return !1
          }),
          (p.prototype.isZero = function () {
            return 0 === this.value
          }),
          (c.prototype.isZero = function () {
            return this.value === BigInt(0)
          }),
          (s.prototype.isDivisibleBy = function (t) {
            var e = G(t)
            return (
              !e.isZero() &&
              (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()))
            )
          }),
          (c.prototype.isDivisibleBy = p.prototype.isDivisibleBy = s.prototype.isDivisibleBy),
          (s.prototype.isPrime = function (e) {
            var r = U(this)
            if (r !== t) return r
            var n = this.abs(),
              i = n.bitLength()
            if (i <= 64) return N(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37])
            for (
              var u = Math.log(2) * i.toJSNumber(),
                a = Math.ceil(!0 === e ? 2 * Math.pow(u, 2) : u),
                s = [],
                p = 0;
              p < a;
              p++
            )
              s.push(o(p + 2))
            return N(n, s)
          }),
          (c.prototype.isPrime = p.prototype.isPrime = s.prototype.isPrime),
          (s.prototype.isProbablePrime = function (e, r) {
            var n = U(this)
            if (n !== t) return n
            for (var i = this.abs(), u = e === t ? 5 : e, a = [], s = 0; s < u; s++)
              a.push(o.randBetween(2, i.minus(2), r))
            return N(i, a)
          }),
          (c.prototype.isProbablePrime = p.prototype.isProbablePrime = s.prototype.isProbablePrime),
          (s.prototype.modInv = function (t) {
            for (var e, r, n, i = o.zero, u = o.one, a = G(t), s = this.abs(); !s.isZero(); )
              (e = a.divide(s)),
                (r = i),
                (n = a),
                (i = u),
                (a = s),
                (u = r.subtract(e.multiply(u))),
                (s = n.subtract(e.multiply(s)))
            if (!a.isUnit())
              throw new Error(this.toString() + ' and ' + t.toString() + ' are not co-prime')
            return -1 === i.compare(0) && (i = i.add(t)), this.isNegative() ? i.negate() : i
          }),
          (c.prototype.modInv = p.prototype.modInv = s.prototype.modInv),
          (s.prototype.next = function () {
            var t = this.value
            return this.sign ? _(t, 1, this.sign) : new s(m(t, 1), this.sign)
          }),
          (p.prototype.next = function () {
            var t = this.value
            return t + 1 < r ? new p(t + 1) : new s(n, !1)
          }),
          (c.prototype.next = function () {
            return new c(this.value + BigInt(1))
          }),
          (s.prototype.prev = function () {
            var t = this.value
            return this.sign ? new s(m(t, 1), !0) : _(t, 1, this.sign)
          }),
          (p.prototype.prev = function () {
            var t = this.value
            return t - 1 > -r ? new p(t - 1) : new s(n, !0)
          }),
          (c.prototype.prev = function () {
            return new c(this.value - BigInt(1))
          })
        for (var x = [1]; 2 * x[x.length - 1] <= e; ) x.push(2 * x[x.length - 1])
        var I = x.length,
          T = x[I - 1]
        function K(t) {
          return Math.abs(t) <= e
        }
        function B(t, e, r) {
          e = G(e)
          for (
            var n = t.isNegative(),
              i = e.isNegative(),
              u = n ? t.not() : t,
              a = i ? e.not() : e,
              s = 0,
              p = 0,
              c = null,
              l = null,
              f = [];
            !u.isZero() || !a.isZero();

          )
            (s = (c = k(u, T))[1].toJSNumber()),
              n && (s = T - 1 - s),
              (p = (l = k(a, T))[1].toJSNumber()),
              i && (p = T - 1 - p),
              (u = c[0]),
              (a = l[0]),
              f.push(r(s, p))
          for (
            var h = 0 !== r(n ? 1 : 0, i ? 1 : 0) ? o(-1) : o(0), y = f.length - 1;
            y >= 0;
            y -= 1
          )
            h = h.multiply(T).add(o(f[y]))
          return h
        }
        ;(s.prototype.shiftLeft = function (t) {
          var e = G(t).toJSNumber()
          if (!K(e)) throw new Error(String(e) + ' is too large for shifting.')
          if (e < 0) return this.shiftRight(-e)
          var r = this
          if (r.isZero()) return r
          for (; e >= I; ) (r = r.multiply(T)), (e -= I - 1)
          return r.multiply(x[e])
        }),
          (c.prototype.shiftLeft = function (t) {
            return (t = G(t)), new c(this.value << t.value)
          }),
          (p.prototype.shiftLeft = s.prototype.shiftLeft),
          (s.prototype.shiftRight = function (t) {
            var e,
              r = G(t).toJSNumber()
            if (!K(r)) throw new Error(String(r) + ' is too large for shifting.')
            if (r < 0) return this.shiftLeft(-r)
            for (var n = this; r >= I; ) {
              if (n.isZero() || (n.isNegative() && n.isUnit())) return n
              ;(n = (e = k(n, T))[1].isNegative() ? e[0].prev() : e[0]), (r -= I - 1)
            }
            return (e = k(n, x[r]))[1].isNegative() ? e[0].prev() : e[0]
          }),
          (c.prototype.shiftRight = function (t) {
            return (t = G(t)), new c(this.value >> t.value)
          }),
          (p.prototype.shiftRight = s.prototype.shiftRight),
          (s.prototype.not = function () {
            return this.negate().prev()
          }),
          (c.prototype.not = p.prototype.not = s.prototype.not),
          (s.prototype.and = function (t) {
            return B(this, t, function (t, e) {
              return t & e
            })
          }),
          (c.prototype.and = p.prototype.and = s.prototype.and),
          (s.prototype.or = function (t) {
            return B(this, t, function (t, e) {
              return t | e
            })
          }),
          (c.prototype.or = p.prototype.or = s.prototype.or),
          (s.prototype.xor = function (t) {
            return B(this, t, function (t, e) {
              return t ^ e
            })
          }),
          (c.prototype.xor = p.prototype.xor = s.prototype.xor)
        var L = 1 << 30
        function C(t) {
          var r = t.value,
            n =
              'number' == typeof r
                ? r | L
                : 'bigint' == typeof r
                ? r | BigInt(L)
                : (r[0] + r[1] * e) | 1073758208
          return n & -n
        }
        function z(t, e) {
          if (e.compareTo(t) <= 0) {
            var r = z(t, e.square(e)),
              n = r.p,
              i = r.e,
              u = n.multiply(e)
            return u.compareTo(t) <= 0 ? { p: u, e: 2 * i + 1 } : { p: n, e: 2 * i }
          }
          return { p: o(1), e: 0 }
        }
        function D(t, e) {
          return (t = G(t)), (e = G(e)), t.greater(e) ? t : e
        }
        function R(t, e) {
          return (t = G(t)), (e = G(e)), t.lesser(e) ? t : e
        }
        function Z(t, e) {
          if (((t = G(t).abs()), (e = G(e).abs()), t.equals(e))) return t
          if (t.isZero()) return e
          if (e.isZero()) return t
          for (var r, n, o = a[1]; t.isEven() && e.isEven(); )
            (r = R(C(t), C(e))), (t = t.divide(r)), (e = e.divide(r)), (o = o.multiply(r))
          for (; t.isEven(); ) t = t.divide(C(t))
          do {
            for (; e.isEven(); ) e = e.divide(C(e))
            t.greater(e) && ((n = e), (e = t), (t = n)), (e = e.subtract(t))
          } while (!e.isZero())
          return o.isUnit() ? t : t.multiply(o)
        }
        ;(s.prototype.bitLength = function () {
          var t = this
          return (
            t.compareTo(o(0)) < 0 && (t = t.negate().subtract(o(1))),
            0 === t.compareTo(o(0)) ? o(0) : o(z(t, o(2)).e).add(o(1))
          )
        }),
          (c.prototype.bitLength = p.prototype.bitLength = s.prototype.bitLength)
        var J = function (t, e, r, n) {
          ;(r = r || i), (t = String(t)), n || ((t = t.toLowerCase()), (r = r.toLowerCase()))
          var o,
            u = t.length,
            a = Math.abs(e),
            s = {}
          for (o = 0; o < r.length; o++) s[r[o]] = o
          for (o = 0; o < u; o++)
            if ('-' !== (l = t[o]) && l in s && s[l] >= a) {
              if ('1' === l && 1 === a) continue
              throw new Error(l + ' is not a valid digit in base ' + e + '.')
            }
          e = G(e)
          var p = [],
            c = '-' === t[0]
          for (o = c ? 1 : 0; o < t.length; o++) {
            var l
            if ((l = t[o]) in s) p.push(G(s[l]))
            else {
              if ('<' !== l) throw new Error(l + ' is not a valid character')
              var f = o
              do {
                o++
              } while ('>' !== t[o] && o < t.length)
              p.push(G(t.slice(f + 1, o)))
            }
          }
          return V(p, e, c)
        }
        function V(t, e, r) {
          var n,
            o = a[0],
            i = a[1]
          for (n = t.length - 1; n >= 0; n--) (o = o.add(t[n].times(i))), (i = i.times(e))
          return r ? o.negate() : o
        }
        function W(t, e) {
          if ((e = o(e)).isZero()) {
            if (t.isZero()) return { value: [0], isNegative: !1 }
            throw new Error('Cannot convert nonzero numbers to base 0.')
          }
          if (e.equals(-1)) {
            if (t.isZero()) return { value: [0], isNegative: !1 }
            if (t.isNegative())
              return {
                value: [].concat.apply(
                  [],
                  Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
                ),
                isNegative: !1,
              }
            var r = Array.apply(null, Array(t.toJSNumber() - 1)).map(
              Array.prototype.valueOf,
              [0, 1]
            )
            return r.unshift([1]), { value: [].concat.apply([], r), isNegative: !1 }
          }
          var n = !1
          if ((t.isNegative() && e.isPositive() && ((n = !0), (t = t.abs())), e.isUnit()))
            return t.isZero()
              ? { value: [0], isNegative: !1 }
              : {
                  value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                  isNegative: n,
                }
          for (var i, u = [], a = t; a.isNegative() || a.compareAbs(e) >= 0; ) {
            ;(i = a.divmod(e)), (a = i.quotient)
            var s = i.remainder
            s.isNegative() && ((s = e.minus(s).abs()), (a = a.next())), u.push(s.toJSNumber())
          }
          return u.push(a.toJSNumber()), { value: u.reverse(), isNegative: n }
        }
        function F(t, e, r) {
          var n = W(t, e)
          return (
            (n.isNegative ? '-' : '') +
            n.value
              .map(function (t) {
                return (function (t, e) {
                  return t < (e = e || i).length ? e[t] : '<' + t + '>'
                })(t, r)
              })
              .join('')
          )
        }
        function Q(t) {
          if (l(+t)) {
            var e = +t
            if (e === g(e)) return u ? new c(BigInt(e)) : new p(e)
            throw new Error('Invalid integer: ' + t)
          }
          var r = '-' === t[0]
          r && (t = t.slice(1))
          var n = t.split(/e/i)
          if (n.length > 2) throw new Error('Invalid integer: ' + n.join('e'))
          if (2 === n.length) {
            var o = n[1]
            if (('+' === o[0] && (o = o.slice(1)), (o = +o) !== g(o) || !l(o)))
              throw new Error('Invalid integer: ' + o + ' is not a valid exponent.')
            var i = n[0],
              a = i.indexOf('.')
            if ((a >= 0 && ((o -= i.length - a - 1), (i = i.slice(0, a) + i.slice(a + 1))), o < 0))
              throw new Error('Cannot include negative exponent part for integers')
            t = i += new Array(o + 1).join('0')
          }
          if (!/^([0-9][0-9]*)$/.test(t)) throw new Error('Invalid integer: ' + t)
          if (u) return new c(BigInt(r ? '-' + t : t))
          for (var f = [], h = t.length, v = h - 7; h > 0; )
            f.push(+t.slice(v, h)), (v -= 7) < 0 && (v = 0), (h -= 7)
          return y(f), new s(f, r)
        }
        function G(t) {
          return 'number' == typeof t
            ? (function (t) {
                if (u) return new c(BigInt(t))
                if (l(t)) {
                  if (t !== g(t)) throw new Error(t + ' is not an integer.')
                  return new p(t)
                }
                return Q(t.toString())
              })(t)
            : 'string' == typeof t
            ? Q(t)
            : 'bigint' == typeof t
            ? new c(t)
            : t
        }
        ;(s.prototype.toArray = function (t) {
          return W(this, t)
        }),
          (p.prototype.toArray = function (t) {
            return W(this, t)
          }),
          (c.prototype.toArray = function (t) {
            return W(this, t)
          }),
          (s.prototype.toString = function (e, r) {
            if ((e === t && (e = 10), 10 !== e)) return F(this, e, r)
            for (var n, o = this.value, i = o.length, u = String(o[--i]); --i >= 0; )
              (n = String(o[i])), (u += '0000000'.slice(n.length) + n)
            return (this.sign ? '-' : '') + u
          }),
          (p.prototype.toString = function (e, r) {
            return e === t && (e = 10), 10 != e ? F(this, e, r) : String(this.value)
          }),
          (c.prototype.toString = p.prototype.toString),
          (c.prototype.toJSON =
            s.prototype.toJSON =
            p.prototype.toJSON =
              function () {
                return this.toString()
              }),
          (s.prototype.valueOf = function () {
            return parseInt(this.toString(), 10)
          }),
          (s.prototype.toJSNumber = s.prototype.valueOf),
          (p.prototype.valueOf = function () {
            return this.value
          }),
          (p.prototype.toJSNumber = p.prototype.valueOf),
          (c.prototype.valueOf = c.prototype.toJSNumber =
            function () {
              return parseInt(this.toString(), 10)
            })
        for (var Y = 0; Y < 1e3; Y++) (a[Y] = G(Y)), Y > 0 && (a[-Y] = G(-Y))
        return (
          (a.one = a[1]),
          (a.zero = a[0]),
          (a.minusOne = a[-1]),
          (a.max = D),
          (a.min = R),
          (a.gcd = Z),
          (a.lcm = function (t, e) {
            return (t = G(t).abs()), (e = G(e).abs()), t.divide(Z(t, e)).multiply(e)
          }),
          (a.isInstance = function (t) {
            return t instanceof s || t instanceof p || t instanceof c
          }),
          (a.randBetween = function (t, r, n) {
            ;(t = G(t)), (r = G(r))
            var o = n || Math.random,
              i = R(t, r),
              u = D(t, r).subtract(i).add(1)
            if (u.isSmall) return i.add(Math.floor(o() * u))
            for (var s = W(u, e).value, p = [], c = !0, l = 0; l < s.length; l++) {
              var f = c ? s[l] : e,
                h = g(o() * f)
              p.push(h), h < f && (c = !1)
            }
            return i.add(a.fromArray(p, e, !1))
          }),
          (a.fromArray = function (t, e, r) {
            return V(t.map(G), G(e || 10), r)
          }),
          a
        )
      })()
      t.hasOwnProperty('exports') && (t.exports = o),
        void 0 ===
          (n = function () {
            return o
          }.call(e, r, e, t)) || (t.exports = n)
    },
    67435: (t, e) => {
      ;(e.endianness = function () {
        return 'LE'
      }),
        (e.hostname = function () {
          return 'undefined' != typeof location ? location.hostname : ''
        }),
        (e.loadavg = function () {
          return []
        }),
        (e.uptime = function () {
          return 0
        }),
        (e.freemem = function () {
          return Number.MAX_VALUE
        }),
        (e.totalmem = function () {
          return Number.MAX_VALUE
        }),
        (e.cpus = function () {
          return []
        }),
        (e.type = function () {
          return 'Browser'
        }),
        (e.release = function () {
          return 'undefined' != typeof navigator ? navigator.appVersion : ''
        }),
        (e.networkInterfaces = e.getNetworkInterfaces =
          function () {
            return {}
          }),
        (e.arch = function () {
          return 'javascript'
        }),
        (e.platform = function () {
          return 'browser'
        }),
        (e.tmpdir = e.tmpDir =
          function () {
            return '/tmp'
          }),
        (e.EOL = '\n'),
        (e.homedir = function () {
          return '/'
        })
    },
    70655: (t, e, r) => {
      'use strict'
      r.r(e),
        r.d(e, {
          __assign: () => i,
          __asyncDelegator: () => _,
          __asyncGenerator: () => b,
          __asyncValues: () => E,
          __await: () => m,
          __awaiter: () => c,
          __classPrivateFieldGet: () => q,
          __classPrivateFieldIn: () => k,
          __classPrivateFieldSet: () => M,
          __createBinding: () => f,
          __decorate: () => a,
          __exportStar: () => h,
          __extends: () => o,
          __generator: () => l,
          __importDefault: () => P,
          __importStar: () => O,
          __makeTemplateObject: () => S,
          __metadata: () => p,
          __param: () => s,
          __read: () => v,
          __rest: () => u,
          __spread: () => g,
          __spreadArray: () => w,
          __spreadArrays: () => d,
          __values: () => y,
        })
      var n = function (t, e) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }),
          n(t, e)
        )
      }
      function o(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null')
        function r() {
          this.constructor = t
        }
        n(t, e),
          (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()))
      }
      var i = function () {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
              return t
            }),
          i.apply(this, arguments)
        )
      }
      function u(t, e) {
        var r = {}
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n])
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0
          for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
            e.indexOf(n[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, n[o]) &&
              (r[n[o]] = t[n[o]])
        }
        return r
      }
      function a(t, e, r, n) {
        var o,
          i = arguments.length,
          u = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          u = Reflect.decorate(t, e, r, n)
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) && (u = (i < 3 ? o(u) : i > 3 ? o(e, r, u) : o(e, r)) || u)
        return i > 3 && u && Object.defineProperty(e, r, u), u
      }
      function s(t, e) {
        return function (r, n) {
          e(r, n, t)
        }
      }
      function p(t, e) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      }
      function c(t, e, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function u(t) {
            try {
              s(n.next(t))
            } catch (t) {
              i(t)
            }
          }
          function a(t) {
            try {
              s(n.throw(t))
            } catch (t) {
              i(t)
            }
          }
          function s(t) {
            var e
            t.done
              ? o(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e)
                    })).then(u, a)
          }
          s((n = n.apply(t, e || [])).next())
        })
      }
      function l(t, e) {
        var r,
          n,
          o,
          i,
          u = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this
            }),
          i
        )
        function a(a) {
          return function (s) {
            return (function (a) {
              if (r) throw new TypeError('Generator is already executing.')
              for (; i && ((i = 0), a[0] && (u = 0)), u; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((o = n.return) && o.call(n), 0)
                          : n.next) &&
                      !(o = o.call(n, a[1])).done)
                  )
                    return o
                  switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a
                      break
                    case 4:
                      return u.label++, { value: a[1], done: !1 }
                    case 5:
                      u.label++, (n = a[1]), (a = [0])
                      continue
                    case 7:
                      ;(a = u.ops.pop()), u.trys.pop()
                      continue
                    default:
                      if (
                        !(
                          (o = (o = u.trys).length > 0 && o[o.length - 1]) ||
                          (6 !== a[0] && 2 !== a[0])
                        )
                      ) {
                        u = 0
                        continue
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        u.label = a[1]
                        break
                      }
                      if (6 === a[0] && u.label < o[1]) {
                        ;(u.label = o[1]), (o = a)
                        break
                      }
                      if (o && u.label < o[2]) {
                        ;(u.label = o[2]), u.ops.push(a)
                        break
                      }
                      o[2] && u.ops.pop(), u.trys.pop()
                      continue
                  }
                  a = e.call(t, u)
                } catch (t) {
                  ;(a = [6, t]), (n = 0)
                } finally {
                  r = o = 0
                }
              if (5 & a[0]) throw a[1]
              return { value: a[0] ? a[1] : void 0, done: !0 }
            })([a, s])
          }
        }
      }
      var f = Object.create
        ? function (t, e, r, n) {
            void 0 === n && (n = r)
            var o = Object.getOwnPropertyDescriptor(e, r)
            ;(o && !('get' in o ? !e.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r]
                },
              }),
              Object.defineProperty(t, n, o)
          }
        : function (t, e, r, n) {
            void 0 === n && (n = r), (t[n] = e[r])
          }
      function h(t, e) {
        for (var r in t) 'default' === r || Object.prototype.hasOwnProperty.call(e, r) || f(e, t, r)
      }
      function y(t) {
        var e = 'function' == typeof Symbol && Symbol.iterator,
          r = e && t[e],
          n = 0
        if (r) return r.call(t)
        if (t && 'number' == typeof t.length)
          return {
            next: function () {
              return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
            },
          }
        throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
      }
      function v(t, e) {
        var r = 'function' == typeof Symbol && t[Symbol.iterator]
        if (!r) return t
        var n,
          o,
          i = r.call(t),
          u = []
        try {
          for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; ) u.push(n.value)
        } catch (t) {
          o = { error: t }
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return u
      }
      function g() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(v(arguments[e]))
        return t
      }
      function d() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length
        var n = Array(t),
          o = 0
        for (e = 0; e < r; e++)
          for (var i = arguments[e], u = 0, a = i.length; u < a; u++, o++) n[o] = i[u]
        return n
      }
      function w(t, e, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, i = e.length; o < i; o++)
            (!n && o in e) || (n || (n = Array.prototype.slice.call(e, 0, o)), (n[o] = e[o]))
        return t.concat(n || Array.prototype.slice.call(e))
      }
      function m(t) {
        return this instanceof m ? ((this.v = t), this) : new m(t)
      }
      function b(t, e, r) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
        var n,
          o = r.apply(t, e || []),
          i = []
        return (
          (n = {}),
          u('next'),
          u('throw'),
          u('return'),
          (n[Symbol.asyncIterator] = function () {
            return this
          }),
          n
        )
        function u(t) {
          o[t] &&
            (n[t] = function (e) {
              return new Promise(function (r, n) {
                i.push([t, e, r, n]) > 1 || a(t, e)
              })
            })
        }
        function a(t, e) {
          try {
            ;(r = o[t](e)).value instanceof m
              ? Promise.resolve(r.value.v).then(s, p)
              : c(i[0][2], r)
          } catch (t) {
            c(i[0][3], t)
          }
          var r
        }
        function s(t) {
          a('next', t)
        }
        function p(t) {
          a('throw', t)
        }
        function c(t, e) {
          t(e), i.shift(), i.length && a(i[0][0], i[0][1])
        }
      }
      function _(t) {
        var e, r
        return (
          (e = {}),
          n('next'),
          n('throw', function (t) {
            throw t
          }),
          n('return'),
          (e[Symbol.iterator] = function () {
            return this
          }),
          e
        )
        function n(n, o) {
          e[n] = t[n]
            ? function (e) {
                return (r = !r) ? { value: m(t[n](e)), done: 'return' === n } : o ? o(e) : e
              }
            : o
        }
      }
      function E(t) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
        var e,
          r = t[Symbol.asyncIterator]
        return r
          ? r.call(t)
          : ((t = y(t)),
            (e = {}),
            n('next'),
            n('throw'),
            n('return'),
            (e[Symbol.asyncIterator] = function () {
              return this
            }),
            e)
        function n(r) {
          e[r] =
            t[r] &&
            function (e) {
              return new Promise(function (n, o) {
                !(function (t, e, r, n) {
                  Promise.resolve(n).then(function (e) {
                    t({ value: e, done: r })
                  }, e)
                })(n, o, (e = t[r](e)).done, e.value)
              })
            }
        }
      }
      function S(t, e) {
        return (
          Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : (t.raw = e), t
        )
      }
      var A = Object.create
        ? function (t, e) {
            Object.defineProperty(t, 'default', { enumerable: !0, value: e })
          }
        : function (t, e) {
            t.default = e
          }
      function O(t) {
        if (t && t.__esModule) return t
        var e = {}
        if (null != t)
          for (var r in t)
            'default' !== r && Object.prototype.hasOwnProperty.call(t, r) && f(e, t, r)
        return A(e, t), e
      }
      function P(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function q(t, e, r, n) {
        if ('a' === r && !n) throw new TypeError('Private accessor was defined without a getter')
        if ('function' == typeof e ? t !== e || !n : !e.has(t))
          throw new TypeError(
            'Cannot read private member from an object whose class did not declare it'
          )
        return 'm' === r ? n : 'a' === r ? n.call(t) : n ? n.value : e.get(t)
      }
      function M(t, e, r, n, o) {
        if ('m' === n) throw new TypeError('Private method is not writable')
        if ('a' === n && !o) throw new TypeError('Private accessor was defined without a setter')
        if ('function' == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            'Cannot write private member to an object whose class did not declare it'
          )
        return 'a' === n ? o.call(t, r) : o ? (o.value = r) : e.set(t, r), r
      }
      function k(t, e) {
        if (null === e || ('object' != typeof e && 'function' != typeof e))
          throw new TypeError("Cannot use 'in' operator on non-object")
        return 'function' == typeof t ? e === t : t.has(e)
      }
    },
    24678: (t, e, r) => {
      'use strict'
      function n(t) {
        return new Promise((e, r) => {
          ;(t.oncomplete = t.onsuccess = () => e(t.result)),
            (t.onabort = t.onerror = () => r(t.error))
        })
      }
      function o(t, e) {
        const r = indexedDB.open(t)
        r.onupgradeneeded = () => r.result.createObjectStore(e)
        const o = n(r)
        return (t, r) => o.then((n) => r(n.transaction(e, t).objectStore(e)))
      }
      let i
      function u() {
        return i || (i = o('keyval-store', 'keyval')), i
      }
      function a(t, e = u()) {
        return e('readonly', (e) => n(e.get(t)))
      }
      function s(t, e, r = u()) {
        return r('readwrite', (r) => (r.put(e, t), n(r.transaction)))
      }
      function p(t, e = u()) {
        return e('readwrite', (e) => (t.forEach((t) => e.put(t[1], t[0])), n(e.transaction)))
      }
      function c(t, e = u()) {
        return e('readonly', (e) => Promise.all(t.map((t) => n(e.get(t)))))
      }
      function l(t, e, r = u()) {
        return r(
          'readwrite',
          (r) =>
            new Promise((o, i) => {
              r.get(t).onsuccess = function () {
                try {
                  r.put(e(this.result), t), o(n(r.transaction))
                } catch (t) {
                  i(t)
                }
              }
            })
        )
      }
      function f(t, e = u()) {
        return e('readwrite', (e) => (e.delete(t), n(e.transaction)))
      }
      function h(t, e = u()) {
        return e('readwrite', (e) => (t.forEach((t) => e.delete(t)), n(e.transaction)))
      }
      function y(t = u()) {
        return t('readwrite', (t) => (t.clear(), n(t.transaction)))
      }
      function v(t, e) {
        return (
          (t.openCursor().onsuccess = function () {
            this.result && (e(this.result), this.result.continue())
          }),
          n(t.transaction)
        )
      }
      function g(t = u()) {
        return t('readonly', (t) => {
          if (t.getAllKeys) return n(t.getAllKeys())
          const e = []
          return v(t, (t) => e.push(t.key)).then(() => e)
        })
      }
      function d(t = u()) {
        return t('readonly', (t) => {
          if (t.getAll) return n(t.getAll())
          const e = []
          return v(t, (t) => e.push(t.value)).then(() => e)
        })
      }
      function w(t = u()) {
        return t('readonly', (e) => {
          if (e.getAll && e.getAllKeys)
            return Promise.all([n(e.getAllKeys()), n(e.getAll())]).then(([t, e]) =>
              t.map((t, r) => [t, e[r]])
            )
          const r = []
          return t('readonly', (t) => v(t, (t) => r.push([t.key, t.value])).then(() => r))
        })
      }
      r.r(e),
        r.d(e, {
          clear: () => y,
          createStore: () => o,
          del: () => f,
          delMany: () => h,
          entries: () => w,
          get: () => a,
          getMany: () => c,
          keys: () => g,
          promisifyRequest: () => n,
          set: () => s,
          setMany: () => p,
          update: () => l,
          values: () => d,
        })
    },
  },
])
//# sourceMappingURL=1649.af33e1fad1eb2a97179f.js.map
