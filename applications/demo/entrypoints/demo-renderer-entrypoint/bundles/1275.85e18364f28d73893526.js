;(() => {
  var e,
    r,
    t = {
      72996: (e, r, t) => {
        var n,
          o = t(48764).lW,
          i =
            ((n =
              (n =
                'undefined' != typeof document && document.currentScript
                  ? document.currentScript.src
                  : void 0) || '/index.js'),
            function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              var r,
                i,
                a = void 0 !== e ? e : {}
              a.ready = new Promise(function (e, t) {
                ;(r = e), (i = t)
              })
              var s,
                u,
                c,
                l = Object.assign({}, a),
                f = [],
                d = './this.program',
                h = (e, r) => {
                  throw r
                },
                m = 'object' == typeof window,
                p = 'function' == typeof importScripts,
                v =
                  'object' == typeof process &&
                  'object' == typeof process.versions &&
                  'string' == typeof process.versions.node,
                g = ''
              function w(e) {
                return a.locateFile ? a.locateFile(e, g) : g + e
              }
              function y(e) {
                e instanceof Ee || S('exiting due to exception: ' + e)
              }
              if (v) {
                var _ = t(96877),
                  E = t(26470)
                ;(g = p ? E.dirname(g) + '/' : '//'),
                  (s = (e, r) => (
                    (e = ve(e) ? new URL(e) : E.normalize(e)),
                    _.readFileSync(e, r ? void 0 : 'utf8')
                  )),
                  (c = (e) => {
                    var r = s(e, !0)
                    return r.buffer || (r = new Uint8Array(r)), r
                  }),
                  (u = (e, r, t) => {
                    ;(e = ve(e) ? new URL(e) : E.normalize(e)),
                      _.readFile(e, function (e, n) {
                        e ? t(e) : r(n.buffer)
                      })
                  }),
                  process.argv.length > 1 && (d = process.argv[1].replace(/\\/g, '/')),
                  (f = process.argv.slice(2)),
                  process.on('uncaughtException', function (e) {
                    if (!(e instanceof Ee)) throw e
                  })
                var b = process.version.match(/^v(\d+)\./)[1]
                b < 15 &&
                  process.on('unhandledRejection', function (e) {
                    throw e
                  }),
                  (h = (e, r) => {
                    if (J()) throw ((process.exitCode = e), r)
                    y(r), process.exit(e)
                  }),
                  (a.inspect = function () {
                    return '[Emscripten Module object]'
                  })
              } else
                (m || p) &&
                  (p
                    ? (g = self.location.href)
                    : 'undefined' != typeof document &&
                      document.currentScript &&
                      (g = document.currentScript.src),
                  n && (g = n),
                  (g =
                    0 !== g.indexOf('blob:')
                      ? g.substr(0, g.replace(/[?#].*/, '').lastIndexOf('/') + 1)
                      : ''),
                  (s = (e) => {
                    var r = new XMLHttpRequest()
                    return r.open('GET', e, !1), r.send(null), r.responseText
                  }),
                  p &&
                    (c = (e) => {
                      var r = new XMLHttpRequest()
                      return (
                        r.open('GET', e, !1),
                        (r.responseType = 'arraybuffer'),
                        r.send(null),
                        new Uint8Array(r.response)
                      )
                    }),
                  (u = (e, r, t) => {
                    var n = new XMLHttpRequest()
                    n.open('GET', e, !0),
                      (n.responseType = 'arraybuffer'),
                      (n.onload = () => {
                        200 == n.status || (0 == n.status && n.response) ? r(n.response) : t()
                      }),
                      (n.onerror = t),
                      n.send(null)
                  }))
              var k,
                F = a.print || console.log.bind(console),
                S = a.printErr || console.warn.bind(console)
              Object.assign(a, l),
                (l = null),
                a.arguments && (f = a.arguments),
                a.thisProgram && (d = a.thisProgram),
                a.quit && (h = a.quit),
                a.wasmBinary && (k = a.wasmBinary)
              var A,
                D = a.noExitRuntime || !0
              'object' != typeof WebAssembly && le('no native wasm support detected')
              var P,
                M = !1
              function C(e, r) {
                e || le(r)
              }
              var T,
                j,
                x,
                O,
                R,
                z,
                B,
                N,
                I,
                U = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0
              function W(e, r, t) {
                for (var n = r + t, o = r; e[o] && !(o >= n); ) ++o
                if (o - r > 16 && e.buffer && U) return U.decode(e.subarray(r, o))
                for (var i = ''; r < o; ) {
                  var a = e[r++]
                  if (128 & a) {
                    var s = 63 & e[r++]
                    if (192 != (224 & a)) {
                      var u = 63 & e[r++]
                      if (
                        (a =
                          224 == (240 & a)
                            ? ((15 & a) << 12) | (s << 6) | u
                            : ((7 & a) << 18) | (s << 12) | (u << 6) | (63 & e[r++])) < 65536
                      )
                        i += String.fromCharCode(a)
                      else {
                        var c = a - 65536
                        i += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c))
                      }
                    } else i += String.fromCharCode(((31 & a) << 6) | s)
                  } else i += String.fromCharCode(a)
                }
                return i
              }
              function L(e, r) {
                return e ? W(j, e, r) : ''
              }
              function H(e, r, t, n) {
                if (!(n > 0)) return 0
                for (var o = t, i = t + n - 1, a = 0; a < e.length; ++a) {
                  var s = e.charCodeAt(a)
                  if (
                    (s >= 55296 &&
                      s <= 57343 &&
                      (s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++a))),
                    s <= 127)
                  ) {
                    if (t >= i) break
                    r[t++] = s
                  } else if (s <= 2047) {
                    if (t + 1 >= i) break
                    ;(r[t++] = 192 | (s >> 6)), (r[t++] = 128 | (63 & s))
                  } else if (s <= 65535) {
                    if (t + 2 >= i) break
                    ;(r[t++] = 224 | (s >> 12)),
                      (r[t++] = 128 | ((s >> 6) & 63)),
                      (r[t++] = 128 | (63 & s))
                  } else {
                    if (t + 3 >= i) break
                    ;(r[t++] = 240 | (s >> 18)),
                      (r[t++] = 128 | ((s >> 12) & 63)),
                      (r[t++] = 128 | ((s >> 6) & 63)),
                      (r[t++] = 128 | (63 & s))
                  }
                }
                return (r[t] = 0), t - o
              }
              function Y(e, r, t) {
                return H(e, j, r, t)
              }
              function V(e) {
                for (var r = 0, t = 0; t < e.length; ++t) {
                  var n = e.charCodeAt(t)
                  n <= 127
                    ? r++
                    : n <= 2047
                    ? (r += 2)
                    : n >= 55296 && n <= 57343
                    ? ((r += 4), ++t)
                    : (r += 3)
                }
                return r
              }
              function q() {
                var e = A.buffer
                ;(a.HEAP8 = T = new Int8Array(e)),
                  (a.HEAP16 = x = new Int16Array(e)),
                  (a.HEAP32 = R = new Int32Array(e)),
                  (a.HEAPU8 = j = new Uint8Array(e)),
                  (a.HEAPU16 = O = new Uint16Array(e)),
                  (a.HEAPU32 = z = new Uint32Array(e)),
                  (a.HEAPF32 = B = new Float32Array(e)),
                  (a.HEAPF64 = N = new Float64Array(e))
              }
              var X = [],
                G = [],
                K = [],
                $ = []
              function J() {
                return D
              }
              function Z() {
                if (a.preRun)
                  for ('function' == typeof a.preRun && (a.preRun = [a.preRun]); a.preRun.length; )
                    te(a.preRun.shift())
                be(X)
              }
              function Q() {
                a.noFSInit || Re.init.initialized || Re.init(),
                  (Re.ignorePermissions = !1),
                  Te.init(),
                  be(G)
              }
              function ee() {
                be(K)
              }
              function re() {
                if (a.postRun)
                  for (
                    'function' == typeof a.postRun && (a.postRun = [a.postRun]);
                    a.postRun.length;

                  )
                    oe(a.postRun.shift())
                be($)
              }
              function te(e) {
                X.unshift(e)
              }
              function ne(e) {
                G.unshift(e)
              }
              function oe(e) {
                $.unshift(e)
              }
              var ie = 0,
                ae = null,
                se = null
              function ue(e) {
                ie++, a.monitorRunDependencies && a.monitorRunDependencies(ie)
              }
              function ce(e) {
                if (
                  (ie--,
                  a.monitorRunDependencies && a.monitorRunDependencies(ie),
                  0 == ie && (null !== ae && (clearInterval(ae), (ae = null)), se))
                ) {
                  var r = se
                  ;(se = null), r()
                }
              }
              function le(e) {
                a.onAbort && a.onAbort(e),
                  S((e = 'Aborted(' + e + ')')),
                  (M = !0),
                  (P = 1),
                  (e += '. Build with -sASSERTIONS for more info.')
                var r = new WebAssembly.RuntimeError(e)
                throw (i(r), r)
              }
              var fe,
                de,
                he,
                me = 'data:application/octet-stream;base64,'
              function pe(e) {
                return e.startsWith(me)
              }
              function ve(e) {
                return e.startsWith('file://')
              }
              function ge(e) {
                try {
                  if (e == fe && k) return new Uint8Array(k)
                  if (c) return c(e)
                  throw 'both async and sync fetching of the wasm failed'
                } catch (e) {
                  le(e)
                }
              }
              function we() {
                if (!k && (m || p)) {
                  if ('function' == typeof fetch && !ve(fe))
                    return fetch(fe, { credentials: 'same-origin' })
                      .then(function (e) {
                        if (!e.ok) throw "failed to load wasm binary file at '" + fe + "'"
                        return e.arrayBuffer()
                      })
                      .catch(function () {
                        return ge(fe)
                      })
                  if (u)
                    return new Promise(function (e, r) {
                      u(
                        fe,
                        function (r) {
                          e(new Uint8Array(r))
                        },
                        r
                      )
                    })
                }
                return Promise.resolve().then(function () {
                  return ge(fe)
                })
              }
              function ye() {
                var e = { env: Tt, wasi_snapshot_preview1: Tt }
                function r(e, r) {
                  var t = e.exports
                  ;(a.asm = t),
                    (A = a.asm.memory),
                    q(),
                    (I = a.asm.__indirect_function_table),
                    ne(a.asm.__wasm_call_ctors),
                    ce()
                }
                function t(e) {
                  r(e.instance)
                }
                function n(r) {
                  return we()
                    .then(function (r) {
                      return WebAssembly.instantiate(r, e)
                    })
                    .then(function (e) {
                      return e
                    })
                    .then(r, function (e) {
                      S('failed to asynchronously prepare wasm: ' + e), le(e)
                    })
                }
                if ((ue(), a.instantiateWasm))
                  try {
                    return a.instantiateWasm(e, r)
                  } catch (e) {
                    S('Module.instantiateWasm callback failed with error: ' + e), i(e)
                  }
                return (
                  (k ||
                  'function' != typeof WebAssembly.instantiateStreaming ||
                  pe(fe) ||
                  ve(fe) ||
                  v ||
                  'function' != typeof fetch
                    ? n(t)
                    : fetch(fe, { credentials: 'same-origin' }).then(function (r) {
                        return WebAssembly.instantiateStreaming(r, e).then(t, function (e) {
                          return (
                            S('wasm streaming compile failed: ' + e),
                            S('falling back to ArrayBuffer instantiation'),
                            n(t)
                          )
                        })
                      })
                  ).catch(i),
                  {}
                )
              }
              pe((fe = 'fasttext-wasm.wasm')) || (fe = w(fe))
              var _e = {
                963844: () => {
                  Re.mount(NODEFS, { root: '.' }, '.')
                },
              }
              function Ee(e) {
                ;(this.name = 'ExitStatus'),
                  (this.message = 'Program terminated with exit(' + e + ')'),
                  (this.status = e)
              }
              function be(e) {
                for (; e.length > 0; ) e.shift()(a)
              }
              function ke(e, r, t, n) {
                le(
                  'Assertion failed: ' +
                    L(e) +
                    ', at: ' +
                    [r ? L(r) : 'unknown filename', t, n ? L(n) : 'unknown function']
                )
              }
              function Fe(e) {
                ;(this.excPtr = e),
                  (this.ptr = e - 24),
                  (this.set_type = function (e) {
                    z[(this.ptr + 4) >> 2] = e
                  }),
                  (this.get_type = function () {
                    return z[(this.ptr + 4) >> 2]
                  }),
                  (this.set_destructor = function (e) {
                    z[(this.ptr + 8) >> 2] = e
                  }),
                  (this.get_destructor = function () {
                    return z[(this.ptr + 8) >> 2]
                  }),
                  (this.set_refcount = function (e) {
                    R[this.ptr >> 2] = e
                  }),
                  (this.set_caught = function (e) {
                    ;(e = e ? 1 : 0), (T[(this.ptr + 12) >> 0] = e)
                  }),
                  (this.get_caught = function () {
                    return 0 != T[(this.ptr + 12) >> 0]
                  }),
                  (this.set_rethrown = function (e) {
                    ;(e = e ? 1 : 0), (T[(this.ptr + 13) >> 0] = e)
                  }),
                  (this.get_rethrown = function () {
                    return 0 != T[(this.ptr + 13) >> 0]
                  }),
                  (this.init = function (e, r) {
                    this.set_adjusted_ptr(0),
                      this.set_type(e),
                      this.set_destructor(r),
                      this.set_refcount(0),
                      this.set_caught(!1),
                      this.set_rethrown(!1)
                  }),
                  (this.add_ref = function () {
                    var e = R[this.ptr >> 2]
                    R[this.ptr >> 2] = e + 1
                  }),
                  (this.release_ref = function () {
                    var e = R[this.ptr >> 2]
                    return (R[this.ptr >> 2] = e - 1), 1 === e
                  }),
                  (this.set_adjusted_ptr = function (e) {
                    z[(this.ptr + 16) >> 2] = e
                  }),
                  (this.get_adjusted_ptr = function () {
                    return z[(this.ptr + 16) >> 2]
                  }),
                  (this.get_exception_ptr = function () {
                    if (Nt(this.get_type())) return z[this.excPtr >> 2]
                    var e = this.get_adjusted_ptr()
                    return 0 !== e ? e : this.excPtr
                  })
              }
              function Se(e, r, t) {
                throw (new Fe(e).init(r, t), e)
              }
              function Ae(e) {
                return (R[Rt() >> 2] = e), e
              }
              var De = {
                isAbs: (e) => '/' === e.charAt(0),
                splitPath: (e) =>
                  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
                normalizeArray: (e, r) => {
                  for (var t = 0, n = e.length - 1; n >= 0; n--) {
                    var o = e[n]
                    '.' === o
                      ? e.splice(n, 1)
                      : '..' === o
                      ? (e.splice(n, 1), t++)
                      : t && (e.splice(n, 1), t--)
                  }
                  if (r) for (; t; t--) e.unshift('..')
                  return e
                },
                normalize: (e) => {
                  var r = De.isAbs(e),
                    t = '/' === e.substr(-1)
                  return (
                    (e = De.normalizeArray(
                      e.split('/').filter((e) => !!e),
                      !r
                    ).join('/')) ||
                      r ||
                      (e = '.'),
                    e && t && (e += '/'),
                    (r ? '/' : '') + e
                  )
                },
                dirname: (e) => {
                  var r = De.splitPath(e),
                    t = r[0],
                    n = r[1]
                  return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : '.'
                },
                basename: (e) => {
                  if ('/' === e) return '/'
                  var r = (e = (e = De.normalize(e)).replace(/\/$/, '')).lastIndexOf('/')
                  return -1 === r ? e : e.substr(r + 1)
                },
                join: function () {
                  var e = Array.prototype.slice.call(arguments)
                  return De.normalize(e.join('/'))
                },
                join2: (e, r) => De.normalize(e + '/' + r),
              }
              function Pe() {
                if ('object' == typeof crypto && 'function' == typeof crypto.getRandomValues) {
                  var e = new Uint8Array(1)
                  return () => (crypto.getRandomValues(e), e[0])
                }
                if (v)
                  try {
                    var r = t(41775)
                    return () => r.randomBytes(1)[0]
                  } catch (e) {}
                return () => le('randomDevice')
              }
              var Me = {
                resolve: function () {
                  for (var e = '', r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
                    var n = t >= 0 ? arguments[t] : Re.cwd()
                    if ('string' != typeof n)
                      throw new TypeError('Arguments to path.resolve must be strings')
                    if (!n) return ''
                    ;(e = n + '/' + e), (r = De.isAbs(n))
                  }
                  return (
                    (r ? '/' : '') +
                      (e = De.normalizeArray(
                        e.split('/').filter((e) => !!e),
                        !r
                      ).join('/')) || '.'
                  )
                },
                relative: (e, r) => {
                  function t(e) {
                    for (var r = 0; r < e.length && '' === e[r]; r++);
                    for (var t = e.length - 1; t >= 0 && '' === e[t]; t--);
                    return r > t ? [] : e.slice(r, t - r + 1)
                  }
                  ;(e = Me.resolve(e).substr(1)), (r = Me.resolve(r).substr(1))
                  for (
                    var n = t(e.split('/')),
                      o = t(r.split('/')),
                      i = Math.min(n.length, o.length),
                      a = i,
                      s = 0;
                    s < i;
                    s++
                  )
                    if (n[s] !== o[s]) {
                      a = s
                      break
                    }
                  var u = []
                  for (s = a; s < n.length; s++) u.push('..')
                  return (u = u.concat(o.slice(a))).join('/')
                },
              }
              function Ce(e, r, t) {
                var n = t > 0 ? t : V(e) + 1,
                  o = new Array(n),
                  i = H(e, o, 0, o.length)
                return r && (o.length = i), o
              }
              var Te = {
                ttys: [],
                init: function () {},
                shutdown: function () {},
                register: function (e, r) {
                  ;(Te.ttys[e] = { input: [], output: [], ops: r }),
                    Re.registerDevice(e, Te.stream_ops)
                },
                stream_ops: {
                  open: function (e) {
                    var r = Te.ttys[e.node.rdev]
                    if (!r) throw new Re.ErrnoError(43)
                    ;(e.tty = r), (e.seekable = !1)
                  },
                  close: function (e) {
                    e.tty.ops.fsync(e.tty)
                  },
                  fsync: function (e) {
                    e.tty.ops.fsync(e.tty)
                  },
                  read: function (e, r, t, n, o) {
                    if (!e.tty || !e.tty.ops.get_char) throw new Re.ErrnoError(60)
                    for (var i = 0, a = 0; a < n; a++) {
                      var s
                      try {
                        s = e.tty.ops.get_char(e.tty)
                      } catch (e) {
                        throw new Re.ErrnoError(29)
                      }
                      if (void 0 === s && 0 === i) throw new Re.ErrnoError(6)
                      if (null == s) break
                      i++, (r[t + a] = s)
                    }
                    return i && (e.node.timestamp = Date.now()), i
                  },
                  write: function (e, r, t, n, o) {
                    if (!e.tty || !e.tty.ops.put_char) throw new Re.ErrnoError(60)
                    try {
                      for (var i = 0; i < n; i++) e.tty.ops.put_char(e.tty, r[t + i])
                    } catch (e) {
                      throw new Re.ErrnoError(29)
                    }
                    return n && (e.node.timestamp = Date.now()), i
                  },
                },
                default_tty_ops: {
                  get_char: function (e) {
                    if (!e.input.length) {
                      var r = null
                      if (v) {
                        var t = o.alloc(256),
                          n = 0
                        try {
                          n = _.readSync(process.stdin.fd, t, 0, 256, -1)
                        } catch (e) {
                          if (!e.toString().includes('EOF')) throw e
                          n = 0
                        }
                        r = n > 0 ? t.slice(0, n).toString('utf-8') : null
                      } else
                        'undefined' != typeof window && 'function' == typeof window.prompt
                          ? null !== (r = window.prompt('Input: ')) && (r += '\n')
                          : 'function' == typeof readline &&
                            null !== (r = readline()) &&
                            (r += '\n')
                      if (!r) return null
                      e.input = Ce(r, !0)
                    }
                    return e.input.shift()
                  },
                  put_char: function (e, r) {
                    null === r || 10 === r
                      ? (F(W(e.output, 0)), (e.output = []))
                      : 0 != r && e.output.push(r)
                  },
                  fsync: function (e) {
                    e.output && e.output.length > 0 && (F(W(e.output, 0)), (e.output = []))
                  },
                },
                default_tty1_ops: {
                  put_char: function (e, r) {
                    null === r || 10 === r
                      ? (S(W(e.output, 0)), (e.output = []))
                      : 0 != r && e.output.push(r)
                  },
                  fsync: function (e) {
                    e.output && e.output.length > 0 && (S(W(e.output, 0)), (e.output = []))
                  },
                },
              }
              function je(e) {
                le()
              }
              var xe = {
                ops_table: null,
                mount: function (e) {
                  return xe.createNode(null, '/', 16895, 0)
                },
                createNode: function (e, r, t, n) {
                  if (Re.isBlkdev(t) || Re.isFIFO(t)) throw new Re.ErrnoError(63)
                  xe.ops_table ||
                    (xe.ops_table = {
                      dir: {
                        node: {
                          getattr: xe.node_ops.getattr,
                          setattr: xe.node_ops.setattr,
                          lookup: xe.node_ops.lookup,
                          mknod: xe.node_ops.mknod,
                          rename: xe.node_ops.rename,
                          unlink: xe.node_ops.unlink,
                          rmdir: xe.node_ops.rmdir,
                          readdir: xe.node_ops.readdir,
                          symlink: xe.node_ops.symlink,
                        },
                        stream: { llseek: xe.stream_ops.llseek },
                      },
                      file: {
                        node: { getattr: xe.node_ops.getattr, setattr: xe.node_ops.setattr },
                        stream: {
                          llseek: xe.stream_ops.llseek,
                          read: xe.stream_ops.read,
                          write: xe.stream_ops.write,
                          allocate: xe.stream_ops.allocate,
                          mmap: xe.stream_ops.mmap,
                          msync: xe.stream_ops.msync,
                        },
                      },
                      link: {
                        node: {
                          getattr: xe.node_ops.getattr,
                          setattr: xe.node_ops.setattr,
                          readlink: xe.node_ops.readlink,
                        },
                        stream: {},
                      },
                      chrdev: {
                        node: { getattr: xe.node_ops.getattr, setattr: xe.node_ops.setattr },
                        stream: Re.chrdev_stream_ops,
                      },
                    })
                  var o = Re.createNode(e, r, t, n)
                  return (
                    Re.isDir(o.mode)
                      ? ((o.node_ops = xe.ops_table.dir.node),
                        (o.stream_ops = xe.ops_table.dir.stream),
                        (o.contents = {}))
                      : Re.isFile(o.mode)
                      ? ((o.node_ops = xe.ops_table.file.node),
                        (o.stream_ops = xe.ops_table.file.stream),
                        (o.usedBytes = 0),
                        (o.contents = null))
                      : Re.isLink(o.mode)
                      ? ((o.node_ops = xe.ops_table.link.node),
                        (o.stream_ops = xe.ops_table.link.stream))
                      : Re.isChrdev(o.mode) &&
                        ((o.node_ops = xe.ops_table.chrdev.node),
                        (o.stream_ops = xe.ops_table.chrdev.stream)),
                    (o.timestamp = Date.now()),
                    e && ((e.contents[r] = o), (e.timestamp = o.timestamp)),
                    o
                  )
                },
                getFileDataAsTypedArray: function (e) {
                  return e.contents
                    ? e.contents.subarray
                      ? e.contents.subarray(0, e.usedBytes)
                      : new Uint8Array(e.contents)
                    : new Uint8Array(0)
                },
                expandFileStorage: function (e, r) {
                  var t = e.contents ? e.contents.length : 0
                  if (!(t >= r)) {
                    ;(r = Math.max(r, (t * (t < 1048576 ? 2 : 1.125)) >>> 0)),
                      0 != t && (r = Math.max(r, 256))
                    var n = e.contents
                    ;(e.contents = new Uint8Array(r)),
                      e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0)
                  }
                },
                resizeFileStorage: function (e, r) {
                  if (e.usedBytes != r)
                    if (0 == r) (e.contents = null), (e.usedBytes = 0)
                    else {
                      var t = e.contents
                      ;(e.contents = new Uint8Array(r)),
                        t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))),
                        (e.usedBytes = r)
                    }
                },
                node_ops: {
                  getattr: function (e) {
                    var r = {}
                    return (
                      (r.dev = Re.isChrdev(e.mode) ? e.id : 1),
                      (r.ino = e.id),
                      (r.mode = e.mode),
                      (r.nlink = 1),
                      (r.uid = 0),
                      (r.gid = 0),
                      (r.rdev = e.rdev),
                      Re.isDir(e.mode)
                        ? (r.size = 4096)
                        : Re.isFile(e.mode)
                        ? (r.size = e.usedBytes)
                        : Re.isLink(e.mode)
                        ? (r.size = e.link.length)
                        : (r.size = 0),
                      (r.atime = new Date(e.timestamp)),
                      (r.mtime = new Date(e.timestamp)),
                      (r.ctime = new Date(e.timestamp)),
                      (r.blksize = 4096),
                      (r.blocks = Math.ceil(r.size / r.blksize)),
                      r
                    )
                  },
                  setattr: function (e, r) {
                    void 0 !== r.mode && (e.mode = r.mode),
                      void 0 !== r.timestamp && (e.timestamp = r.timestamp),
                      void 0 !== r.size && xe.resizeFileStorage(e, r.size)
                  },
                  lookup: function (e, r) {
                    throw Re.genericErrors[44]
                  },
                  mknod: function (e, r, t, n) {
                    return xe.createNode(e, r, t, n)
                  },
                  rename: function (e, r, t) {
                    if (Re.isDir(e.mode)) {
                      var n
                      try {
                        n = Re.lookupNode(r, t)
                      } catch (e) {}
                      if (n) for (var o in n.contents) throw new Re.ErrnoError(55)
                    }
                    delete e.parent.contents[e.name],
                      (e.parent.timestamp = Date.now()),
                      (e.name = t),
                      (r.contents[t] = e),
                      (r.timestamp = e.parent.timestamp),
                      (e.parent = r)
                  },
                  unlink: function (e, r) {
                    delete e.contents[r], (e.timestamp = Date.now())
                  },
                  rmdir: function (e, r) {
                    var t = Re.lookupNode(e, r)
                    for (var n in t.contents) throw new Re.ErrnoError(55)
                    delete e.contents[r], (e.timestamp = Date.now())
                  },
                  readdir: function (e) {
                    var r = ['.', '..']
                    for (var t in e.contents) e.contents.hasOwnProperty(t) && r.push(t)
                    return r
                  },
                  symlink: function (e, r, t) {
                    var n = xe.createNode(e, r, 41471, 0)
                    return (n.link = t), n
                  },
                  readlink: function (e) {
                    if (!Re.isLink(e.mode)) throw new Re.ErrnoError(28)
                    return e.link
                  },
                },
                stream_ops: {
                  read: function (e, r, t, n, o) {
                    var i = e.node.contents
                    if (o >= e.node.usedBytes) return 0
                    var a = Math.min(e.node.usedBytes - o, n)
                    if (a > 8 && i.subarray) r.set(i.subarray(o, o + a), t)
                    else for (var s = 0; s < a; s++) r[t + s] = i[o + s]
                    return a
                  },
                  write: function (e, r, t, n, o, i) {
                    if (!n) return 0
                    var a = e.node
                    if (
                      ((a.timestamp = Date.now()),
                      r.subarray && (!a.contents || a.contents.subarray))
                    ) {
                      if (i) return (a.contents = r.subarray(t, t + n)), (a.usedBytes = n), n
                      if (0 === a.usedBytes && 0 === o)
                        return (a.contents = r.slice(t, t + n)), (a.usedBytes = n), n
                      if (o + n <= a.usedBytes) return a.contents.set(r.subarray(t, t + n), o), n
                    }
                    if ((xe.expandFileStorage(a, o + n), a.contents.subarray && r.subarray))
                      a.contents.set(r.subarray(t, t + n), o)
                    else for (var s = 0; s < n; s++) a.contents[o + s] = r[t + s]
                    return (a.usedBytes = Math.max(a.usedBytes, o + n)), n
                  },
                  llseek: function (e, r, t) {
                    var n = r
                    if (
                      (1 === t
                        ? (n += e.position)
                        : 2 === t && Re.isFile(e.node.mode) && (n += e.node.usedBytes),
                      n < 0)
                    )
                      throw new Re.ErrnoError(28)
                    return n
                  },
                  allocate: function (e, r, t) {
                    xe.expandFileStorage(e.node, r + t),
                      (e.node.usedBytes = Math.max(e.node.usedBytes, r + t))
                  },
                  mmap: function (e, r, t, n, o) {
                    if (!Re.isFile(e.node.mode)) throw new Re.ErrnoError(43)
                    var i,
                      a,
                      s = e.node.contents
                    if (2 & o || s.buffer !== T.buffer) {
                      if (
                        ((t > 0 || t + r < s.length) &&
                          (s = s.subarray
                            ? s.subarray(t, t + r)
                            : Array.prototype.slice.call(s, t, t + r)),
                        (a = !0),
                        !(i = je()))
                      )
                        throw new Re.ErrnoError(48)
                      T.set(s, i)
                    } else (a = !1), (i = s.byteOffset)
                    return { ptr: i, allocated: a }
                  },
                  msync: function (e, r, t, n, o) {
                    return xe.stream_ops.write(e, r, 0, n, t, !1), 0
                  },
                },
              }
              function Oe(e, r, t, n) {
                var o = n ? '' : 'al ' + e
                u(
                  e,
                  (t) => {
                    C(t, 'Loading data file "' + e + '" failed (no arrayBuffer).'),
                      r(new Uint8Array(t)),
                      o && ce()
                  },
                  (r) => {
                    if (!t) throw 'Loading data file "' + e + '" failed.'
                    t()
                  }
                ),
                  o && ue()
              }
              var Re = {
                  root: null,
                  mounts: [],
                  devices: {},
                  streams: [],
                  nextInode: 1,
                  nameTable: null,
                  currentPath: '/',
                  initialized: !1,
                  ignorePermissions: !0,
                  ErrnoError: null,
                  genericErrors: {},
                  filesystems: null,
                  syncFSRequests: 0,
                  lookupPath: function (e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    if (!(e = Me.resolve(e))) return { path: '', node: null }
                    var t = { follow_mount: !0, recurse_count: 0 }
                    if (((r = Object.assign(t, r)), r.recurse_count > 8))
                      throw new Re.ErrnoError(32)
                    for (
                      var n = e.split('/').filter((e) => !!e), o = Re.root, i = '/', a = 0;
                      a < n.length;
                      a++
                    ) {
                      var s = a === n.length - 1
                      if (s && r.parent) break
                      if (
                        ((o = Re.lookupNode(o, n[a])),
                        (i = De.join2(i, n[a])),
                        Re.isMountpoint(o) && (!s || (s && r.follow_mount)) && (o = o.mounted.root),
                        !s || r.follow)
                      )
                        for (var u = 0; Re.isLink(o.mode); ) {
                          var c = Re.readlink(i)
                          i = Me.resolve(De.dirname(i), c)
                          var l = Re.lookupPath(i, { recurse_count: r.recurse_count + 1 })
                          if (((o = l.node), u++ > 40)) throw new Re.ErrnoError(32)
                        }
                    }
                    return { path: i, node: o }
                  },
                  getPath: (e) => {
                    for (var r; ; ) {
                      if (Re.isRoot(e)) {
                        var t = e.mount.mountpoint
                        return r ? ('/' !== t[t.length - 1] ? t + '/' + r : t + r) : t
                      }
                      ;(r = r ? e.name + '/' + r : e.name), (e = e.parent)
                    }
                  },
                  hashName: (e, r) => {
                    for (var t = 0, n = 0; n < r.length; n++)
                      t = ((t << 5) - t + r.charCodeAt(n)) | 0
                    return ((e + t) >>> 0) % Re.nameTable.length
                  },
                  hashAddNode: (e) => {
                    var r = Re.hashName(e.parent.id, e.name)
                    ;(e.name_next = Re.nameTable[r]), (Re.nameTable[r] = e)
                  },
                  hashRemoveNode: (e) => {
                    var r = Re.hashName(e.parent.id, e.name)
                    if (Re.nameTable[r] === e) Re.nameTable[r] = e.name_next
                    else
                      for (var t = Re.nameTable[r]; t; ) {
                        if (t.name_next === e) {
                          t.name_next = e.name_next
                          break
                        }
                        t = t.name_next
                      }
                  },
                  lookupNode: (e, r) => {
                    var t = Re.mayLookup(e)
                    if (t) throw new Re.ErrnoError(t, e)
                    for (var n = Re.hashName(e.id, r), o = Re.nameTable[n]; o; o = o.name_next) {
                      var i = o.name
                      if (o.parent.id === e.id && i === r) return o
                    }
                    return Re.lookup(e, r)
                  },
                  createNode: (e, r, t, n) => {
                    var o = new Re.FSNode(e, r, t, n)
                    return Re.hashAddNode(o), o
                  },
                  destroyNode: (e) => {
                    Re.hashRemoveNode(e)
                  },
                  isRoot: (e) => e === e.parent,
                  isMountpoint: (e) => !!e.mounted,
                  isFile: (e) => 32768 == (61440 & e),
                  isDir: (e) => 16384 == (61440 & e),
                  isLink: (e) => 40960 == (61440 & e),
                  isChrdev: (e) => 8192 == (61440 & e),
                  isBlkdev: (e) => 24576 == (61440 & e),
                  isFIFO: (e) => 4096 == (61440 & e),
                  isSocket: (e) => 49152 == (49152 & e),
                  flagModes: { r: 0, 'r+': 2, w: 577, 'w+': 578, a: 1089, 'a+': 1090 },
                  modeStringToFlags: (e) => {
                    var r = Re.flagModes[e]
                    if (void 0 === r) throw new Error('Unknown file open mode: ' + e)
                    return r
                  },
                  flagsToPermissionString: (e) => {
                    var r = ['r', 'w', 'rw'][3 & e]
                    return 512 & e && (r += 'w'), r
                  },
                  nodePermissions: (e, r) =>
                    Re.ignorePermissions ||
                    ((!r.includes('r') || 292 & e.mode) &&
                      (!r.includes('w') || 146 & e.mode) &&
                      (!r.includes('x') || 73 & e.mode))
                      ? 0
                      : 2,
                  mayLookup: (e) => Re.nodePermissions(e, 'x') || (e.node_ops.lookup ? 0 : 2),
                  mayCreate: (e, r) => {
                    try {
                      return Re.lookupNode(e, r), 20
                    } catch (e) {}
                    return Re.nodePermissions(e, 'wx')
                  },
                  mayDelete: (e, r, t) => {
                    var n
                    try {
                      n = Re.lookupNode(e, r)
                    } catch (e) {
                      return e.errno
                    }
                    var o = Re.nodePermissions(e, 'wx')
                    if (o) return o
                    if (t) {
                      if (!Re.isDir(n.mode)) return 54
                      if (Re.isRoot(n) || Re.getPath(n) === Re.cwd()) return 10
                    } else if (Re.isDir(n.mode)) return 31
                    return 0
                  },
                  mayOpen: (e, r) =>
                    e
                      ? Re.isLink(e.mode)
                        ? 32
                        : Re.isDir(e.mode) && ('r' !== Re.flagsToPermissionString(r) || 512 & r)
                        ? 31
                        : Re.nodePermissions(e, Re.flagsToPermissionString(r))
                      : 44,
                  MAX_OPEN_FDS: 4096,
                  nextfd: function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                      r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : Re.MAX_OPEN_FDS
                    for (var t = e; t <= r; t++) if (!Re.streams[t]) return t
                    throw new Re.ErrnoError(33)
                  },
                  getStream: (e) => Re.streams[e],
                  createStream: (e, r, t) => {
                    Re.FSStream ||
                      ((Re.FSStream = function () {
                        this.shared = {}
                      }),
                      (Re.FSStream.prototype = {}),
                      Object.defineProperties(Re.FSStream.prototype, {
                        object: {
                          get: function () {
                            return this.node
                          },
                          set: function (e) {
                            this.node = e
                          },
                        },
                        isRead: {
                          get: function () {
                            return 1 != (2097155 & this.flags)
                          },
                        },
                        isWrite: {
                          get: function () {
                            return 0 != (2097155 & this.flags)
                          },
                        },
                        isAppend: {
                          get: function () {
                            return 1024 & this.flags
                          },
                        },
                        flags: {
                          get: function () {
                            return this.shared.flags
                          },
                          set: function (e) {
                            this.shared.flags = e
                          },
                        },
                        position: {
                          get: function () {
                            return this.shared.position
                          },
                          set: function (e) {
                            this.shared.position = e
                          },
                        },
                      })),
                      (e = Object.assign(new Re.FSStream(), e))
                    var n = Re.nextfd(r, t)
                    return (e.fd = n), (Re.streams[n] = e), e
                  },
                  closeStream: (e) => {
                    Re.streams[e] = null
                  },
                  chrdev_stream_ops: {
                    open: (e) => {
                      var r = Re.getDevice(e.node.rdev)
                      ;(e.stream_ops = r.stream_ops), e.stream_ops.open && e.stream_ops.open(e)
                    },
                    llseek: () => {
                      throw new Re.ErrnoError(70)
                    },
                  },
                  major: (e) => e >> 8,
                  minor: (e) => 255 & e,
                  makedev: (e, r) => (e << 8) | r,
                  registerDevice: (e, r) => {
                    Re.devices[e] = { stream_ops: r }
                  },
                  getDevice: (e) => Re.devices[e],
                  getMounts: (e) => {
                    for (var r = [], t = [e]; t.length; ) {
                      var n = t.pop()
                      r.push(n), t.push.apply(t, n.mounts)
                    }
                    return r
                  },
                  syncfs: (e, r) => {
                    'function' == typeof e && ((r = e), (e = !1)),
                      Re.syncFSRequests++,
                      Re.syncFSRequests > 1 &&
                        S(
                          'warning: ' +
                            Re.syncFSRequests +
                            ' FS.syncfs operations in flight at once, probably just doing extra work'
                        )
                    var t = Re.getMounts(Re.root.mount),
                      n = 0
                    function o(e) {
                      return Re.syncFSRequests--, r(e)
                    }
                    function i(e) {
                      if (e) return i.errored ? void 0 : ((i.errored = !0), o(e))
                      ++n >= t.length && o(null)
                    }
                    t.forEach((r) => {
                      if (!r.type.syncfs) return i(null)
                      r.type.syncfs(r, e, i)
                    })
                  },
                  mount: (e, r, t) => {
                    var n,
                      o = '/' === t,
                      i = !t
                    if (o && Re.root) throw new Re.ErrnoError(10)
                    if (!o && !i) {
                      var a = Re.lookupPath(t, { follow_mount: !1 })
                      if (((t = a.path), (n = a.node), Re.isMountpoint(n)))
                        throw new Re.ErrnoError(10)
                      if (!Re.isDir(n.mode)) throw new Re.ErrnoError(54)
                    }
                    var s = { type: e, opts: r, mountpoint: t, mounts: [] },
                      u = e.mount(s)
                    return (
                      (u.mount = s),
                      (s.root = u),
                      o ? (Re.root = u) : n && ((n.mounted = s), n.mount && n.mount.mounts.push(s)),
                      u
                    )
                  },
                  unmount: (e) => {
                    var r = Re.lookupPath(e, { follow_mount: !1 })
                    if (!Re.isMountpoint(r.node)) throw new Re.ErrnoError(28)
                    var t = r.node,
                      n = t.mounted,
                      o = Re.getMounts(n)
                    Object.keys(Re.nameTable).forEach((e) => {
                      for (var r = Re.nameTable[e]; r; ) {
                        var t = r.name_next
                        o.includes(r.mount) && Re.destroyNode(r), (r = t)
                      }
                    }),
                      (t.mounted = null)
                    var i = t.mount.mounts.indexOf(n)
                    t.mount.mounts.splice(i, 1)
                  },
                  lookup: (e, r) => e.node_ops.lookup(e, r),
                  mknod: (e, r, t) => {
                    var n = Re.lookupPath(e, { parent: !0 }).node,
                      o = De.basename(e)
                    if (!o || '.' === o || '..' === o) throw new Re.ErrnoError(28)
                    var i = Re.mayCreate(n, o)
                    if (i) throw new Re.ErrnoError(i)
                    if (!n.node_ops.mknod) throw new Re.ErrnoError(63)
                    return n.node_ops.mknod(n, o, r, t)
                  },
                  create: (e, r) => (
                    (r = void 0 !== r ? r : 438), (r &= 4095), (r |= 32768), Re.mknod(e, r, 0)
                  ),
                  mkdir: (e, r) => (
                    (r = void 0 !== r ? r : 511), (r &= 1023), (r |= 16384), Re.mknod(e, r, 0)
                  ),
                  mkdirTree: (e, r) => {
                    for (var t = e.split('/'), n = '', o = 0; o < t.length; ++o)
                      if (t[o]) {
                        n += '/' + t[o]
                        try {
                          Re.mkdir(n, r)
                        } catch (e) {
                          if (20 != e.errno) throw e
                        }
                      }
                  },
                  mkdev: (e, r, t) => (
                    void 0 === t && ((t = r), (r = 438)), (r |= 8192), Re.mknod(e, r, t)
                  ),
                  symlink: (e, r) => {
                    if (!Me.resolve(e)) throw new Re.ErrnoError(44)
                    var t = Re.lookupPath(r, { parent: !0 }).node
                    if (!t) throw new Re.ErrnoError(44)
                    var n = De.basename(r),
                      o = Re.mayCreate(t, n)
                    if (o) throw new Re.ErrnoError(o)
                    if (!t.node_ops.symlink) throw new Re.ErrnoError(63)
                    return t.node_ops.symlink(t, n, e)
                  },
                  rename: (e, r) => {
                    var t,
                      n,
                      o = De.dirname(e),
                      i = De.dirname(r),
                      a = De.basename(e),
                      s = De.basename(r)
                    if (
                      ((t = Re.lookupPath(e, { parent: !0 }).node),
                      (n = Re.lookupPath(r, { parent: !0 }).node),
                      !t || !n)
                    )
                      throw new Re.ErrnoError(44)
                    if (t.mount !== n.mount) throw new Re.ErrnoError(75)
                    var u,
                      c = Re.lookupNode(t, a),
                      l = Me.relative(e, i)
                    if ('.' !== l.charAt(0)) throw new Re.ErrnoError(28)
                    if ('.' !== (l = Me.relative(r, o)).charAt(0)) throw new Re.ErrnoError(55)
                    try {
                      u = Re.lookupNode(n, s)
                    } catch (e) {}
                    if (c !== u) {
                      var f = Re.isDir(c.mode),
                        d = Re.mayDelete(t, a, f)
                      if (d) throw new Re.ErrnoError(d)
                      if ((d = u ? Re.mayDelete(n, s, f) : Re.mayCreate(n, s)))
                        throw new Re.ErrnoError(d)
                      if (!t.node_ops.rename) throw new Re.ErrnoError(63)
                      if (Re.isMountpoint(c) || (u && Re.isMountpoint(u)))
                        throw new Re.ErrnoError(10)
                      if (n !== t && (d = Re.nodePermissions(t, 'w'))) throw new Re.ErrnoError(d)
                      Re.hashRemoveNode(c)
                      try {
                        t.node_ops.rename(c, n, s)
                      } catch (e) {
                        throw e
                      } finally {
                        Re.hashAddNode(c)
                      }
                    }
                  },
                  rmdir: (e) => {
                    var r = Re.lookupPath(e, { parent: !0 }).node,
                      t = De.basename(e),
                      n = Re.lookupNode(r, t),
                      o = Re.mayDelete(r, t, !0)
                    if (o) throw new Re.ErrnoError(o)
                    if (!r.node_ops.rmdir) throw new Re.ErrnoError(63)
                    if (Re.isMountpoint(n)) throw new Re.ErrnoError(10)
                    r.node_ops.rmdir(r, t), Re.destroyNode(n)
                  },
                  readdir: (e) => {
                    var r = Re.lookupPath(e, { follow: !0 }).node
                    if (!r.node_ops.readdir) throw new Re.ErrnoError(54)
                    return r.node_ops.readdir(r)
                  },
                  unlink: (e) => {
                    var r = Re.lookupPath(e, { parent: !0 }).node
                    if (!r) throw new Re.ErrnoError(44)
                    var t = De.basename(e),
                      n = Re.lookupNode(r, t),
                      o = Re.mayDelete(r, t, !1)
                    if (o) throw new Re.ErrnoError(o)
                    if (!r.node_ops.unlink) throw new Re.ErrnoError(63)
                    if (Re.isMountpoint(n)) throw new Re.ErrnoError(10)
                    r.node_ops.unlink(r, t), Re.destroyNode(n)
                  },
                  readlink: (e) => {
                    var r = Re.lookupPath(e).node
                    if (!r) throw new Re.ErrnoError(44)
                    if (!r.node_ops.readlink) throw new Re.ErrnoError(28)
                    return Me.resolve(Re.getPath(r.parent), r.node_ops.readlink(r))
                  },
                  stat: (e, r) => {
                    var t = Re.lookupPath(e, { follow: !r }).node
                    if (!t) throw new Re.ErrnoError(44)
                    if (!t.node_ops.getattr) throw new Re.ErrnoError(63)
                    return t.node_ops.getattr(t)
                  },
                  lstat: (e) => Re.stat(e, !0),
                  chmod: (e, r, t) => {
                    var n
                    if (
                      !(n = 'string' == typeof e ? Re.lookupPath(e, { follow: !t }).node : e)
                        .node_ops.setattr
                    )
                      throw new Re.ErrnoError(63)
                    n.node_ops.setattr(n, {
                      mode: (4095 & r) | (-4096 & n.mode),
                      timestamp: Date.now(),
                    })
                  },
                  lchmod: (e, r) => {
                    Re.chmod(e, r, !0)
                  },
                  fchmod: (e, r) => {
                    var t = Re.getStream(e)
                    if (!t) throw new Re.ErrnoError(8)
                    Re.chmod(t.node, r)
                  },
                  chown: (e, r, t, n) => {
                    var o
                    if (
                      !(o = 'string' == typeof e ? Re.lookupPath(e, { follow: !n }).node : e)
                        .node_ops.setattr
                    )
                      throw new Re.ErrnoError(63)
                    o.node_ops.setattr(o, { timestamp: Date.now() })
                  },
                  lchown: (e, r, t) => {
                    Re.chown(e, r, t, !0)
                  },
                  fchown: (e, r, t) => {
                    var n = Re.getStream(e)
                    if (!n) throw new Re.ErrnoError(8)
                    Re.chown(n.node, r, t)
                  },
                  truncate: (e, r) => {
                    if (r < 0) throw new Re.ErrnoError(28)
                    var t
                    if (
                      !(t = 'string' == typeof e ? Re.lookupPath(e, { follow: !0 }).node : e)
                        .node_ops.setattr
                    )
                      throw new Re.ErrnoError(63)
                    if (Re.isDir(t.mode)) throw new Re.ErrnoError(31)
                    if (!Re.isFile(t.mode)) throw new Re.ErrnoError(28)
                    var n = Re.nodePermissions(t, 'w')
                    if (n) throw new Re.ErrnoError(n)
                    t.node_ops.setattr(t, { size: r, timestamp: Date.now() })
                  },
                  ftruncate: (e, r) => {
                    var t = Re.getStream(e)
                    if (!t) throw new Re.ErrnoError(8)
                    if (0 == (2097155 & t.flags)) throw new Re.ErrnoError(28)
                    Re.truncate(t.node, r)
                  },
                  utime: (e, r, t) => {
                    var n = Re.lookupPath(e, { follow: !0 }).node
                    n.node_ops.setattr(n, { timestamp: Math.max(r, t) })
                  },
                  open: (e, r, t) => {
                    if ('' === e) throw new Re.ErrnoError(44)
                    var n
                    if (
                      ((t = void 0 === t ? 438 : t),
                      (t =
                        64 & (r = 'string' == typeof r ? Re.modeStringToFlags(r) : r)
                          ? (4095 & t) | 32768
                          : 0),
                      'object' == typeof e)
                    )
                      n = e
                    else {
                      e = De.normalize(e)
                      try {
                        n = Re.lookupPath(e, { follow: !(131072 & r) }).node
                      } catch (e) {}
                    }
                    var o = !1
                    if (64 & r)
                      if (n) {
                        if (128 & r) throw new Re.ErrnoError(20)
                      } else (n = Re.mknod(e, t, 0)), (o = !0)
                    if (!n) throw new Re.ErrnoError(44)
                    if ((Re.isChrdev(n.mode) && (r &= -513), 65536 & r && !Re.isDir(n.mode)))
                      throw new Re.ErrnoError(54)
                    if (!o) {
                      var i = Re.mayOpen(n, r)
                      if (i) throw new Re.ErrnoError(i)
                    }
                    512 & r && !o && Re.truncate(n, 0), (r &= -131713)
                    var s = Re.createStream({
                      node: n,
                      path: Re.getPath(n),
                      flags: r,
                      seekable: !0,
                      position: 0,
                      stream_ops: n.stream_ops,
                      ungotten: [],
                      error: !1,
                    })
                    return (
                      s.stream_ops.open && s.stream_ops.open(s),
                      !a.logReadFiles ||
                        1 & r ||
                        (Re.readFiles || (Re.readFiles = {}),
                        e in Re.readFiles || (Re.readFiles[e] = 1)),
                      s
                    )
                  },
                  close: (e) => {
                    if (Re.isClosed(e)) throw new Re.ErrnoError(8)
                    e.getdents && (e.getdents = null)
                    try {
                      e.stream_ops.close && e.stream_ops.close(e)
                    } catch (e) {
                      throw e
                    } finally {
                      Re.closeStream(e.fd)
                    }
                    e.fd = null
                  },
                  isClosed: (e) => null === e.fd,
                  llseek: (e, r, t) => {
                    if (Re.isClosed(e)) throw new Re.ErrnoError(8)
                    if (!e.seekable || !e.stream_ops.llseek) throw new Re.ErrnoError(70)
                    if (0 != t && 1 != t && 2 != t) throw new Re.ErrnoError(28)
                    return (
                      (e.position = e.stream_ops.llseek(e, r, t)), (e.ungotten = []), e.position
                    )
                  },
                  read: (e, r, t, n, o) => {
                    if (n < 0 || o < 0) throw new Re.ErrnoError(28)
                    if (Re.isClosed(e)) throw new Re.ErrnoError(8)
                    if (1 == (2097155 & e.flags)) throw new Re.ErrnoError(8)
                    if (Re.isDir(e.node.mode)) throw new Re.ErrnoError(31)
                    if (!e.stream_ops.read) throw new Re.ErrnoError(28)
                    var i = void 0 !== o
                    if (i) {
                      if (!e.seekable) throw new Re.ErrnoError(70)
                    } else o = e.position
                    var a = e.stream_ops.read(e, r, t, n, o)
                    return i || (e.position += a), a
                  },
                  write: (e, r, t, n, o, i) => {
                    if (n < 0 || o < 0) throw new Re.ErrnoError(28)
                    if (Re.isClosed(e)) throw new Re.ErrnoError(8)
                    if (0 == (2097155 & e.flags)) throw new Re.ErrnoError(8)
                    if (Re.isDir(e.node.mode)) throw new Re.ErrnoError(31)
                    if (!e.stream_ops.write) throw new Re.ErrnoError(28)
                    e.seekable && 1024 & e.flags && Re.llseek(e, 0, 2)
                    var a = void 0 !== o
                    if (a) {
                      if (!e.seekable) throw new Re.ErrnoError(70)
                    } else o = e.position
                    var s = e.stream_ops.write(e, r, t, n, o, i)
                    return a || (e.position += s), s
                  },
                  allocate: (e, r, t) => {
                    if (Re.isClosed(e)) throw new Re.ErrnoError(8)
                    if (r < 0 || t <= 0) throw new Re.ErrnoError(28)
                    if (0 == (2097155 & e.flags)) throw new Re.ErrnoError(8)
                    if (!Re.isFile(e.node.mode) && !Re.isDir(e.node.mode))
                      throw new Re.ErrnoError(43)
                    if (!e.stream_ops.allocate) throw new Re.ErrnoError(138)
                    e.stream_ops.allocate(e, r, t)
                  },
                  mmap: (e, r, t, n, o) => {
                    if (0 != (2 & n) && 0 == (2 & o) && 2 != (2097155 & e.flags))
                      throw new Re.ErrnoError(2)
                    if (1 == (2097155 & e.flags)) throw new Re.ErrnoError(2)
                    if (!e.stream_ops.mmap) throw new Re.ErrnoError(43)
                    return e.stream_ops.mmap(e, r, t, n, o)
                  },
                  msync: (e, r, t, n, o) =>
                    e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0,
                  munmap: (e) => 0,
                  ioctl: (e, r, t) => {
                    if (!e.stream_ops.ioctl) throw new Re.ErrnoError(59)
                    return e.stream_ops.ioctl(e, r, t)
                  },
                  readFile: function (e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    if (
                      ((r.flags = r.flags || 0),
                      (r.encoding = r.encoding || 'binary'),
                      'utf8' !== r.encoding && 'binary' !== r.encoding)
                    )
                      throw new Error('Invalid encoding type "' + r.encoding + '"')
                    var t,
                      n = Re.open(e, r.flags),
                      o = Re.stat(e),
                      i = o.size,
                      a = new Uint8Array(i)
                    return (
                      Re.read(n, a, 0, i, 0),
                      'utf8' === r.encoding ? (t = W(a, 0)) : 'binary' === r.encoding && (t = a),
                      Re.close(n),
                      t
                    )
                  },
                  writeFile: function (e, r) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                    t.flags = t.flags || 577
                    var n = Re.open(e, t.flags, t.mode)
                    if ('string' == typeof r) {
                      var o = new Uint8Array(V(r) + 1),
                        i = H(r, o, 0, o.length)
                      Re.write(n, o, 0, i, void 0, t.canOwn)
                    } else {
                      if (!ArrayBuffer.isView(r)) throw new Error('Unsupported data type')
                      Re.write(n, r, 0, r.byteLength, void 0, t.canOwn)
                    }
                    Re.close(n)
                  },
                  cwd: () => Re.currentPath,
                  chdir: (e) => {
                    var r = Re.lookupPath(e, { follow: !0 })
                    if (null === r.node) throw new Re.ErrnoError(44)
                    if (!Re.isDir(r.node.mode)) throw new Re.ErrnoError(54)
                    var t = Re.nodePermissions(r.node, 'x')
                    if (t) throw new Re.ErrnoError(t)
                    Re.currentPath = r.path
                  },
                  createDefaultDirectories: () => {
                    Re.mkdir('/tmp'), Re.mkdir('/home'), Re.mkdir('/home/web_user')
                  },
                  createDefaultDevices: () => {
                    Re.mkdir('/dev'),
                      Re.registerDevice(Re.makedev(1, 3), {
                        read: () => 0,
                        write: (e, r, t, n, o) => n,
                      }),
                      Re.mkdev('/dev/null', Re.makedev(1, 3)),
                      Te.register(Re.makedev(5, 0), Te.default_tty_ops),
                      Te.register(Re.makedev(6, 0), Te.default_tty1_ops),
                      Re.mkdev('/dev/tty', Re.makedev(5, 0)),
                      Re.mkdev('/dev/tty1', Re.makedev(6, 0))
                    var e = Pe()
                    Re.createDevice('/dev', 'random', e),
                      Re.createDevice('/dev', 'urandom', e),
                      Re.mkdir('/dev/shm'),
                      Re.mkdir('/dev/shm/tmp')
                  },
                  createSpecialDirectories: () => {
                    Re.mkdir('/proc')
                    var e = Re.mkdir('/proc/self')
                    Re.mkdir('/proc/self/fd'),
                      Re.mount(
                        {
                          mount: () => {
                            var r = Re.createNode(e, 'fd', 16895, 73)
                            return (
                              (r.node_ops = {
                                lookup: (e, r) => {
                                  var t = +r,
                                    n = Re.getStream(t)
                                  if (!n) throw new Re.ErrnoError(8)
                                  var o = {
                                    parent: null,
                                    mount: { mountpoint: 'fake' },
                                    node_ops: { readlink: () => n.path },
                                  }
                                  return (o.parent = o), o
                                },
                              }),
                              r
                            )
                          },
                        },
                        {},
                        '/proc/self/fd'
                      )
                  },
                  createStandardStreams: () => {
                    a.stdin
                      ? Re.createDevice('/dev', 'stdin', a.stdin)
                      : Re.symlink('/dev/tty', '/dev/stdin'),
                      a.stdout
                        ? Re.createDevice('/dev', 'stdout', null, a.stdout)
                        : Re.symlink('/dev/tty', '/dev/stdout'),
                      a.stderr
                        ? Re.createDevice('/dev', 'stderr', null, a.stderr)
                        : Re.symlink('/dev/tty1', '/dev/stderr'),
                      Re.open('/dev/stdin', 0),
                      Re.open('/dev/stdout', 1),
                      Re.open('/dev/stderr', 1)
                  },
                  ensureErrnoError: () => {
                    Re.ErrnoError ||
                      ((Re.ErrnoError = function (e, r) {
                        ;(this.node = r),
                          (this.setErrno = function (e) {
                            this.errno = e
                          }),
                          this.setErrno(e),
                          (this.message = 'FS error')
                      }),
                      (Re.ErrnoError.prototype = new Error()),
                      (Re.ErrnoError.prototype.constructor = Re.ErrnoError),
                      [44].forEach((e) => {
                        ;(Re.genericErrors[e] = new Re.ErrnoError(e)),
                          (Re.genericErrors[e].stack = '<generic error, no stack>')
                      }))
                  },
                  staticInit: () => {
                    Re.ensureErrnoError(),
                      (Re.nameTable = new Array(4096)),
                      Re.mount(xe, {}, '/'),
                      Re.createDefaultDirectories(),
                      Re.createDefaultDevices(),
                      Re.createSpecialDirectories(),
                      (Re.filesystems = { MEMFS: xe })
                  },
                  init: (e, r, t) => {
                    ;(Re.init.initialized = !0),
                      Re.ensureErrnoError(),
                      (a.stdin = e || a.stdin),
                      (a.stdout = r || a.stdout),
                      (a.stderr = t || a.stderr),
                      Re.createStandardStreams()
                  },
                  quit: () => {
                    Re.init.initialized = !1
                    for (var e = 0; e < Re.streams.length; e++) {
                      var r = Re.streams[e]
                      r && Re.close(r)
                    }
                  },
                  getMode: (e, r) => {
                    var t = 0
                    return e && (t |= 365), r && (t |= 146), t
                  },
                  findObject: (e, r) => {
                    var t = Re.analyzePath(e, r)
                    return t.exists ? t.object : null
                  },
                  analyzePath: (e, r) => {
                    try {
                      e = (n = Re.lookupPath(e, { follow: !r })).path
                    } catch (e) {}
                    var t = {
                      isRoot: !1,
                      exists: !1,
                      error: 0,
                      name: null,
                      path: null,
                      object: null,
                      parentExists: !1,
                      parentPath: null,
                      parentObject: null,
                    }
                    try {
                      var n = Re.lookupPath(e, { parent: !0 })
                      ;(t.parentExists = !0),
                        (t.parentPath = n.path),
                        (t.parentObject = n.node),
                        (t.name = De.basename(e)),
                        (n = Re.lookupPath(e, { follow: !r })),
                        (t.exists = !0),
                        (t.path = n.path),
                        (t.object = n.node),
                        (t.name = n.node.name),
                        (t.isRoot = '/' === n.path)
                    } catch (e) {
                      t.error = e.errno
                    }
                    return t
                  },
                  createPath: (e, r, t, n) => {
                    e = 'string' == typeof e ? e : Re.getPath(e)
                    for (var o = r.split('/').reverse(); o.length; ) {
                      var i = o.pop()
                      if (i) {
                        var a = De.join2(e, i)
                        try {
                          Re.mkdir(a)
                        } catch (e) {}
                        e = a
                      }
                    }
                    return a
                  },
                  createFile: (e, r, t, n, o) => {
                    var i = De.join2('string' == typeof e ? e : Re.getPath(e), r),
                      a = Re.getMode(n, o)
                    return Re.create(i, a)
                  },
                  createDataFile: (e, r, t, n, o, i) => {
                    var a = r
                    e &&
                      ((e = 'string' == typeof e ? e : Re.getPath(e)), (a = r ? De.join2(e, r) : e))
                    var s = Re.getMode(n, o),
                      u = Re.create(a, s)
                    if (t) {
                      if ('string' == typeof t) {
                        for (var c = new Array(t.length), l = 0, f = t.length; l < f; ++l)
                          c[l] = t.charCodeAt(l)
                        t = c
                      }
                      Re.chmod(u, 146 | s)
                      var d = Re.open(u, 577)
                      Re.write(d, t, 0, t.length, 0, i), Re.close(d), Re.chmod(u, s)
                    }
                    return u
                  },
                  createDevice: (e, r, t, n) => {
                    var o = De.join2('string' == typeof e ? e : Re.getPath(e), r),
                      i = Re.getMode(!!t, !!n)
                    Re.createDevice.major || (Re.createDevice.major = 64)
                    var a = Re.makedev(Re.createDevice.major++, 0)
                    return (
                      Re.registerDevice(a, {
                        open: (e) => {
                          e.seekable = !1
                        },
                        close: (e) => {
                          n && n.buffer && n.buffer.length && n(10)
                        },
                        read: (e, r, n, o, i) => {
                          for (var a = 0, s = 0; s < o; s++) {
                            var u
                            try {
                              u = t()
                            } catch (e) {
                              throw new Re.ErrnoError(29)
                            }
                            if (void 0 === u && 0 === a) throw new Re.ErrnoError(6)
                            if (null == u) break
                            a++, (r[n + s] = u)
                          }
                          return a && (e.node.timestamp = Date.now()), a
                        },
                        write: (e, r, t, o, i) => {
                          for (var a = 0; a < o; a++)
                            try {
                              n(r[t + a])
                            } catch (e) {
                              throw new Re.ErrnoError(29)
                            }
                          return o && (e.node.timestamp = Date.now()), a
                        },
                      }),
                      Re.mkdev(o, i, a)
                    )
                  },
                  forceLoadFile: (e) => {
                    if (e.isDevice || e.isFolder || e.link || e.contents) return !0
                    if ('undefined' != typeof XMLHttpRequest)
                      throw new Error(
                        'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
                      )
                    if (!s) throw new Error('Cannot load without read() or XMLHttpRequest.')
                    try {
                      ;(e.contents = Ce(s(e.url), !0)), (e.usedBytes = e.contents.length)
                    } catch (e) {
                      throw new Re.ErrnoError(29)
                    }
                  },
                  createLazyFile: (e, r, t, n, o) => {
                    function i() {
                      ;(this.lengthKnown = !1), (this.chunks = [])
                    }
                    if (
                      ((i.prototype.get = function (e) {
                        if (!(e > this.length - 1 || e < 0)) {
                          var r = e % this.chunkSize,
                            t = (e / this.chunkSize) | 0
                          return this.getter(t)[r]
                        }
                      }),
                      (i.prototype.setDataGetter = function (e) {
                        this.getter = e
                      }),
                      (i.prototype.cacheLength = function () {
                        var e = new XMLHttpRequest()
                        if (
                          (e.open('HEAD', t, !1),
                          e.send(null),
                          !((e.status >= 200 && e.status < 300) || 304 === e.status))
                        )
                          throw new Error("Couldn't load " + t + '. Status: ' + e.status)
                        var r,
                          n = Number(e.getResponseHeader('Content-length')),
                          o = (r = e.getResponseHeader('Accept-Ranges')) && 'bytes' === r,
                          i = (r = e.getResponseHeader('Content-Encoding')) && 'gzip' === r,
                          a = 1048576
                        o || (a = n)
                        var s = this
                        s.setDataGetter((e) => {
                          var r = e * a,
                            o = (e + 1) * a - 1
                          if (
                            ((o = Math.min(o, n - 1)),
                            void 0 === s.chunks[e] &&
                              (s.chunks[e] = ((e, r) => {
                                if (e > r)
                                  throw new Error(
                                    'invalid range (' + e + ', ' + r + ') or no bytes requested!'
                                  )
                                if (r > n - 1)
                                  throw new Error(
                                    'only ' + n + ' bytes available! programmer error!'
                                  )
                                var o = new XMLHttpRequest()
                                if (
                                  (o.open('GET', t, !1),
                                  n !== a && o.setRequestHeader('Range', 'bytes=' + e + '-' + r),
                                  (o.responseType = 'arraybuffer'),
                                  o.overrideMimeType &&
                                    o.overrideMimeType('text/plain; charset=x-user-defined'),
                                  o.send(null),
                                  !((o.status >= 200 && o.status < 300) || 304 === o.status))
                                )
                                  throw new Error("Couldn't load " + t + '. Status: ' + o.status)
                                return void 0 !== o.response
                                  ? new Uint8Array(o.response || [])
                                  : Ce(o.responseText || '', !0)
                              })(r, o)),
                            void 0 === s.chunks[e])
                          )
                            throw new Error('doXHR failed!')
                          return s.chunks[e]
                        }),
                          (!i && n) ||
                            ((a = n = 1),
                            (n = this.getter(0).length),
                            (a = n),
                            F(
                              'LazyFiles on gzip forces download of the whole file when length is accessed'
                            )),
                          (this._length = n),
                          (this._chunkSize = a),
                          (this.lengthKnown = !0)
                      }),
                      'undefined' != typeof XMLHttpRequest)
                    ) {
                      if (!p)
                        throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc'
                      var a = new i()
                      Object.defineProperties(a, {
                        length: {
                          get: function () {
                            return this.lengthKnown || this.cacheLength(), this._length
                          },
                        },
                        chunkSize: {
                          get: function () {
                            return this.lengthKnown || this.cacheLength(), this._chunkSize
                          },
                        },
                      })
                      var s = { isDevice: !1, contents: a }
                    } else s = { isDevice: !1, url: t }
                    var u = Re.createFile(e, r, s, n, o)
                    s.contents
                      ? (u.contents = s.contents)
                      : s.url && ((u.contents = null), (u.url = s.url)),
                      Object.defineProperties(u, {
                        usedBytes: {
                          get: function () {
                            return this.contents.length
                          },
                        },
                      })
                    var c = {}
                    function l(e, r, t, n, o) {
                      var i = e.node.contents
                      if (o >= i.length) return 0
                      var a = Math.min(i.length - o, n)
                      if (i.slice) for (var s = 0; s < a; s++) r[t + s] = i[o + s]
                      else for (s = 0; s < a; s++) r[t + s] = i.get(o + s)
                      return a
                    }
                    return (
                      Object.keys(u.stream_ops).forEach((e) => {
                        var r = u.stream_ops[e]
                        c[e] = function () {
                          return Re.forceLoadFile(u), r.apply(null, arguments)
                        }
                      }),
                      (c.read = (e, r, t, n, o) => (Re.forceLoadFile(u), l(e, r, t, n, o))),
                      (c.mmap = (e, r, t, n, o) => {
                        Re.forceLoadFile(u)
                        var i = je()
                        if (!i) throw new Re.ErrnoError(48)
                        return l(e, T, i, r, t), { ptr: i, allocated: !0 }
                      }),
                      (u.stream_ops = c),
                      u
                    )
                  },
                  createPreloadedFile: (e, r, t, n, o, i, a, s, u, c) => {
                    var l = r ? Me.resolve(De.join2(e, r)) : e
                    function f(t) {
                      function f(t) {
                        c && c(), s || Re.createDataFile(e, r, t, n, o, u), i && i(), ce()
                      }
                      Browser.handledByPreloadPlugin(t, l, f, () => {
                        a && a(), ce()
                      }) || f(t)
                    }
                    ue(), 'string' == typeof t ? Oe(t, (e) => f(e), a) : f(t)
                  },
                  indexedDB: () =>
                    window.indexedDB ||
                    window.mozIndexedDB ||
                    window.webkitIndexedDB ||
                    window.msIndexedDB,
                  DB_NAME: () => 'EM_FS_' + window.location.pathname,
                  DB_VERSION: 20,
                  DB_STORE_NAME: 'FILE_DATA',
                  saveFilesToDB: function (e) {
                    let r =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                      t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}
                    var n = Re.indexedDB()
                    try {
                      var o = n.open(Re.DB_NAME(), Re.DB_VERSION)
                    } catch (e) {
                      return t(e)
                    }
                    ;(o.onupgradeneeded = () => {
                      F('creating db'), o.result.createObjectStore(Re.DB_STORE_NAME)
                    }),
                      (o.onsuccess = () => {
                        var n = o.result.transaction([Re.DB_STORE_NAME], 'readwrite'),
                          i = n.objectStore(Re.DB_STORE_NAME),
                          a = 0,
                          s = 0,
                          u = e.length
                        function c() {
                          0 == s ? r() : t()
                        }
                        e.forEach((e) => {
                          var r = i.put(Re.analyzePath(e).object.contents, e)
                          ;(r.onsuccess = () => {
                            ++a + s == u && c()
                          }),
                            (r.onerror = () => {
                              s++, a + s == u && c()
                            })
                        }),
                          (n.onerror = t)
                      }),
                      (o.onerror = t)
                  },
                  loadFilesFromDB: function (e) {
                    let r =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                      t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}
                    var n = Re.indexedDB()
                    try {
                      var o = n.open(Re.DB_NAME(), Re.DB_VERSION)
                    } catch (e) {
                      return t(e)
                    }
                    ;(o.onupgradeneeded = t),
                      (o.onsuccess = () => {
                        var n = o.result
                        try {
                          var i = n.transaction([Re.DB_STORE_NAME], 'readonly')
                        } catch (e) {
                          return void t(e)
                        }
                        var a = i.objectStore(Re.DB_STORE_NAME),
                          s = 0,
                          u = 0,
                          c = e.length
                        function l() {
                          0 == u ? r() : t()
                        }
                        e.forEach((e) => {
                          var r = a.get(e)
                          ;(r.onsuccess = () => {
                            Re.analyzePath(e).exists && Re.unlink(e),
                              Re.createDataFile(
                                De.dirname(e),
                                De.basename(e),
                                r.result,
                                !0,
                                !0,
                                !0
                              ),
                              ++s + u == c && l()
                          }),
                            (r.onerror = () => {
                              u++, s + u == c && l()
                            })
                        }),
                          (i.onerror = t)
                      }),
                      (o.onerror = t)
                  },
                },
                ze = {
                  DEFAULT_POLLMASK: 5,
                  calculateAt: function (e, r, t) {
                    if (De.isAbs(r)) return r
                    var n
                    if (((n = -100 === e ? Re.cwd() : ze.getStreamFromFD(e).path), 0 == r.length)) {
                      if (!t) throw new Re.ErrnoError(44)
                      return n
                    }
                    return De.join2(n, r)
                  },
                  doStat: function (e, r, t) {
                    try {
                      var n = e(r)
                    } catch (e) {
                      if (e && e.node && De.normalize(r) !== De.normalize(Re.getPath(e.node)))
                        return -54
                      throw e
                    }
                    ;(R[t >> 2] = n.dev),
                      (R[(t + 8) >> 2] = n.ino),
                      (R[(t + 12) >> 2] = n.mode),
                      (z[(t + 16) >> 2] = n.nlink),
                      (R[(t + 20) >> 2] = n.uid),
                      (R[(t + 24) >> 2] = n.gid),
                      (R[(t + 28) >> 2] = n.rdev),
                      (he = [
                        n.size >>> 0,
                        ((de = n.size),
                        +Math.abs(de) >= 1
                          ? de > 0
                            ? (0 | Math.min(+Math.floor(de / 4294967296), 4294967295)) >>> 0
                            : ~~+Math.ceil((de - +(~~de >>> 0)) / 4294967296) >>> 0
                          : 0),
                      ]),
                      (R[(t + 40) >> 2] = he[0]),
                      (R[(t + 44) >> 2] = he[1]),
                      (R[(t + 48) >> 2] = 4096),
                      (R[(t + 52) >> 2] = n.blocks)
                    var o = n.atime.getTime(),
                      i = n.mtime.getTime(),
                      a = n.ctime.getTime()
                    return (
                      (he = [
                        Math.floor(o / 1e3) >>> 0,
                        ((de = Math.floor(o / 1e3)),
                        +Math.abs(de) >= 1
                          ? de > 0
                            ? (0 | Math.min(+Math.floor(de / 4294967296), 4294967295)) >>> 0
                            : ~~+Math.ceil((de - +(~~de >>> 0)) / 4294967296) >>> 0
                          : 0),
                      ]),
                      (R[(t + 56) >> 2] = he[0]),
                      (R[(t + 60) >> 2] = he[1]),
                      (z[(t + 64) >> 2] = (o % 1e3) * 1e3),
                      (he = [
                        Math.floor(i / 1e3) >>> 0,
                        ((de = Math.floor(i / 1e3)),
                        +Math.abs(de) >= 1
                          ? de > 0
                            ? (0 | Math.min(+Math.floor(de / 4294967296), 4294967295)) >>> 0
                            : ~~+Math.ceil((de - +(~~de >>> 0)) / 4294967296) >>> 0
                          : 0),
                      ]),
                      (R[(t + 72) >> 2] = he[0]),
                      (R[(t + 76) >> 2] = he[1]),
                      (z[(t + 80) >> 2] = (i % 1e3) * 1e3),
                      (he = [
                        Math.floor(a / 1e3) >>> 0,
                        ((de = Math.floor(a / 1e3)),
                        +Math.abs(de) >= 1
                          ? de > 0
                            ? (0 | Math.min(+Math.floor(de / 4294967296), 4294967295)) >>> 0
                            : ~~+Math.ceil((de - +(~~de >>> 0)) / 4294967296) >>> 0
                          : 0),
                      ]),
                      (R[(t + 88) >> 2] = he[0]),
                      (R[(t + 92) >> 2] = he[1]),
                      (z[(t + 96) >> 2] = (a % 1e3) * 1e3),
                      (he = [
                        n.ino >>> 0,
                        ((de = n.ino),
                        +Math.abs(de) >= 1
                          ? de > 0
                            ? (0 | Math.min(+Math.floor(de / 4294967296), 4294967295)) >>> 0
                            : ~~+Math.ceil((de - +(~~de >>> 0)) / 4294967296) >>> 0
                          : 0),
                      ]),
                      (R[(t + 104) >> 2] = he[0]),
                      (R[(t + 108) >> 2] = he[1]),
                      0
                    )
                  },
                  doMsync: function (e, r, t, n, o) {
                    if (!Re.isFile(r.node.mode)) throw new Re.ErrnoError(43)
                    if (2 & n) return 0
                    var i = j.slice(e, e + t)
                    Re.msync(r, i, o, t, n)
                  },
                  varargs: void 0,
                  get: function () {
                    return (ze.varargs += 4), R[(ze.varargs - 4) >> 2]
                  },
                  getStr: function (e) {
                    return L(e)
                  },
                  getStreamFromFD: function (e) {
                    var r = Re.getStream(e)
                    if (!r) throw new Re.ErrnoError(8)
                    return r
                  },
                }
              function Be(e, r, t) {
                ze.varargs = t
                try {
                  var n = ze.getStreamFromFD(e)
                  switch (r) {
                    case 0:
                      return (o = ze.get()) < 0 ? -28 : Re.createStream(n, o).fd
                    case 1:
                    case 2:
                    case 6:
                    case 7:
                      return 0
                    case 3:
                      return n.flags
                    case 4:
                      var o = ze.get()
                      return (n.flags |= o), 0
                    case 5:
                      return (o = ze.get()), (x[(o + 0) >> 1] = 2), 0
                    case 16:
                    case 8:
                    default:
                      return -28
                    case 9:
                      return Ae(28), -1
                  }
                } catch (e) {
                  if (void 0 === Re || !(e instanceof Re.ErrnoError)) throw e
                  return -e.errno
                }
              }
              function Ne(e, r, t) {
                ze.varargs = t
                try {
                  var n = ze.getStreamFromFD(e)
                  switch (r) {
                    case 21509:
                    case 21505:
                    case 21510:
                    case 21511:
                    case 21512:
                    case 21506:
                    case 21507:
                    case 21508:
                    case 21523:
                    case 21524:
                      return n.tty ? 0 : -59
                    case 21519:
                      if (!n.tty) return -59
                      var o = ze.get()
                      return (R[o >> 2] = 0), 0
                    case 21520:
                      return n.tty ? -28 : -59
                    case 21531:
                      return (o = ze.get()), Re.ioctl(n, r, o)
                    default:
                      return -28
                  }
                } catch (e) {
                  if (void 0 === Re || !(e instanceof Re.ErrnoError)) throw e
                  return -e.errno
                }
              }
              function Ie(e, r, t, n) {
                ze.varargs = n
                try {
                  ;(r = ze.getStr(r)), (r = ze.calculateAt(e, r))
                  var o = n ? ze.get() : 0
                  return Re.open(r, t, o).fd
                } catch (e) {
                  if (void 0 === Re || !(e instanceof Re.ErrnoError)) throw e
                  return -e.errno
                }
              }
              function Ue(e, r, t, n, o) {}
              function We(e) {
                switch (e) {
                  case 1:
                    return 0
                  case 2:
                    return 1
                  case 4:
                    return 2
                  case 8:
                    return 3
                  default:
                    throw new TypeError('Unknown type size: ' + e)
                }
              }
              function Le() {
                for (var e = new Array(256), r = 0; r < 256; ++r) e[r] = String.fromCharCode(r)
                He = e
              }
              var He = void 0
              function Ye(e) {
                for (var r = '', t = e; j[t]; ) r += He[j[t++]]
                return r
              }
              var Ve = {},
                qe = {},
                Xe = {},
                Ge = 48,
                Ke = 57
              function $e(e) {
                if (void 0 === e) return '_unknown'
                var r = (e = e.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0)
                return r >= Ge && r <= Ke ? '_' + e : e
              }
              function Je(e, r) {
                return (
                  (e = $e(e)),
                  new Function(
                    'body',
                    'return function ' +
                      e +
                      '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
                  )(r)
                )
              }
              function Ze(e, r) {
                var t = Je(r, function (e) {
                  ;(this.name = r), (this.message = e)
                  var t = new Error(e).stack
                  void 0 !== t &&
                    (this.stack = this.toString() + '\n' + t.replace(/^Error(:[^\n]*)?\n/, ''))
                })
                return (
                  (t.prototype = Object.create(e.prototype)),
                  (t.prototype.constructor = t),
                  (t.prototype.toString = function () {
                    return void 0 === this.message ? this.name : this.name + ': ' + this.message
                  }),
                  t
                )
              }
              var Qe = void 0
              function er(e) {
                throw new Qe(e)
              }
              var rr = void 0
              function tr(e) {
                throw new rr(e)
              }
              function nr(e, r, t) {
                function n(r) {
                  var n = t(r)
                  n.length !== e.length && tr('Mismatched type converter count')
                  for (var o = 0; o < e.length; ++o) or(e[o], n[o])
                }
                e.forEach(function (e) {
                  Xe[e] = r
                })
                var o = new Array(r.length),
                  i = [],
                  a = 0
                r.forEach((e, r) => {
                  qe.hasOwnProperty(e)
                    ? (o[r] = qe[e])
                    : (i.push(e),
                      Ve.hasOwnProperty(e) || (Ve[e] = []),
                      Ve[e].push(() => {
                        ;(o[r] = qe[e]), ++a === i.length && n(o)
                      }))
                }),
                  0 === i.length && n(o)
              }
              function or(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                if (!('argPackAdvance' in r))
                  throw new TypeError('registerType registeredInstance requires argPackAdvance')
                var n = r.name
                if (
                  (e || er('type "' + n + '" must have a positive integer typeid pointer'),
                  qe.hasOwnProperty(e))
                ) {
                  if (t.ignoreDuplicateRegistrations) return
                  er("Cannot register type '" + n + "' twice")
                }
                if (((qe[e] = r), delete Xe[e], Ve.hasOwnProperty(e))) {
                  var o = Ve[e]
                  delete Ve[e], o.forEach((e) => e())
                }
              }
              function ir(e, r, t, n, o) {
                var i = We(t)
                or(e, {
                  name: (r = Ye(r)),
                  fromWireType: function (e) {
                    return !!e
                  },
                  toWireType: function (e, r) {
                    return r ? n : o
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: function (e) {
                    var n
                    if (1 === t) n = T
                    else if (2 === t) n = x
                    else {
                      if (4 !== t) throw new TypeError('Unknown boolean type size: ' + r)
                      n = R
                    }
                    return this.fromWireType(n[e >> i])
                  },
                  destructorFunction: null,
                })
              }
              var ar = [],
                sr = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }]
              function ur(e) {
                e > 4 && 0 == --sr[e].refcount && ((sr[e] = void 0), ar.push(e))
              }
              function cr() {
                for (var e = 0, r = 5; r < sr.length; ++r) void 0 !== sr[r] && ++e
                return e
              }
              function lr() {
                for (var e = 5; e < sr.length; ++e) if (void 0 !== sr[e]) return sr[e]
                return null
              }
              function fr() {
                ;(a.count_emval_handles = cr), (a.get_first_emval = lr)
              }
              var dr = {
                toValue: (e) => (e || er('Cannot use deleted val. handle = ' + e), sr[e].value),
                toHandle: (e) => {
                  switch (e) {
                    case void 0:
                      return 1
                    case null:
                      return 2
                    case !0:
                      return 3
                    case !1:
                      return 4
                    default:
                      var r = ar.length ? ar.pop() : sr.length
                      return (sr[r] = { refcount: 1, value: e }), r
                  }
                },
              }
              function hr(e) {
                return this.fromWireType(R[e >> 2])
              }
              function mr(e, r) {
                or(e, {
                  name: (r = Ye(r)),
                  fromWireType: function (e) {
                    var r = dr.toValue(e)
                    return ur(e), r
                  },
                  toWireType: function (e, r) {
                    return dr.toHandle(r)
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: hr,
                  destructorFunction: null,
                })
              }
              function pr(e, r) {
                switch (r) {
                  case 2:
                    return function (e) {
                      return this.fromWireType(B[e >> 2])
                    }
                  case 3:
                    return function (e) {
                      return this.fromWireType(N[e >> 3])
                    }
                  default:
                    throw new TypeError('Unknown float type: ' + e)
                }
              }
              function vr(e, r, t) {
                var n = We(t)
                or(e, {
                  name: (r = Ye(r)),
                  fromWireType: function (e) {
                    return e
                  },
                  toWireType: function (e, r) {
                    return r
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: pr(r, n),
                  destructorFunction: null,
                })
              }
              function gr(e, r) {
                if (!(e instanceof Function))
                  throw new TypeError(
                    'new_ called with constructor type ' + typeof e + ' which is not a function'
                  )
                var t = Je(e.name || 'unknownFunctionName', function () {})
                t.prototype = e.prototype
                var n = new t(),
                  o = e.apply(n, r)
                return o instanceof Object ? o : n
              }
              function wr(e) {
                for (; e.length; ) {
                  var r = e.pop()
                  e.pop()(r)
                }
              }
              function yr(e, r, t, n, o) {
                var i = r.length
                i < 2 &&
                  er(
                    "argTypes array size mismatch! Must at least get return value and 'this' types!"
                  )
                for (var a = null !== r[1] && null !== t, s = !1, u = 1; u < r.length; ++u)
                  if (null !== r[u] && void 0 === r[u].destructorFunction) {
                    s = !0
                    break
                  }
                var c = 'void' !== r[0].name,
                  l = '',
                  f = ''
                for (u = 0; u < i - 2; ++u)
                  (l += (0 !== u ? ', ' : '') + 'arg' + u),
                    (f += (0 !== u ? ', ' : '') + 'arg' + u + 'Wired')
                var d =
                  'return function ' +
                  $e(e) +
                  '(' +
                  l +
                  ') {\nif (arguments.length !== ' +
                  (i - 2) +
                  ") {\nthrowBindingError('function " +
                  e +
                  " called with ' + arguments.length + ' arguments, expected " +
                  (i - 2) +
                  " args!');\n}\n"
                s && (d += 'var destructors = [];\n')
                var h = s ? 'destructors' : 'null',
                  m = [
                    'throwBindingError',
                    'invoker',
                    'fn',
                    'runDestructors',
                    'retType',
                    'classParam',
                  ],
                  p = [er, n, o, wr, r[0], r[1]]
                for (
                  a && (d += 'var thisWired = classParam.toWireType(' + h + ', this);\n'), u = 0;
                  u < i - 2;
                  ++u
                )
                  (d +=
                    'var arg' +
                    u +
                    'Wired = argType' +
                    u +
                    '.toWireType(' +
                    h +
                    ', arg' +
                    u +
                    '); // ' +
                    r[u + 2].name +
                    '\n'),
                    m.push('argType' + u),
                    p.push(r[u + 2])
                if (
                  (a && (f = 'thisWired' + (f.length > 0 ? ', ' : '') + f),
                  (d +=
                    (c ? 'var rv = ' : '') +
                    'invoker(fn' +
                    (f.length > 0 ? ', ' : '') +
                    f +
                    ');\n'),
                  s)
                )
                  d += 'runDestructors(destructors);\n'
                else
                  for (u = a ? 1 : 2; u < r.length; ++u) {
                    var v = 1 === u ? 'thisWired' : 'arg' + (u - 2) + 'Wired'
                    null !== r[u].destructorFunction &&
                      ((d += v + '_dtor(' + v + '); // ' + r[u].name + '\n'),
                      m.push(v + '_dtor'),
                      p.push(r[u].destructorFunction))
                  }
                return (
                  c && (d += 'var ret = retType.fromWireType(rv);\nreturn ret;\n'),
                  (d += '}\n'),
                  m.push(d),
                  gr(Function, m).apply(null, p)
                )
              }
              function _r(e, r, t) {
                if (void 0 === e[r].overloadTable) {
                  var n = e[r]
                  ;(e[r] = function () {
                    return (
                      e[r].overloadTable.hasOwnProperty(arguments.length) ||
                        er(
                          "Function '" +
                            t +
                            "' called with an invalid number of arguments (" +
                            arguments.length +
                            ') - expects one of (' +
                            e[r].overloadTable +
                            ')!'
                        ),
                      e[r].overloadTable[arguments.length].apply(this, arguments)
                    )
                  }),
                    (e[r].overloadTable = []),
                    (e[r].overloadTable[n.argCount] = n)
                }
              }
              function Er(e, r, t) {
                a.hasOwnProperty(e)
                  ? ((void 0 === t ||
                      (void 0 !== a[e].overloadTable && void 0 !== a[e].overloadTable[t])) &&
                      er("Cannot register public name '" + e + "' twice"),
                    _r(a, e, e),
                    a.hasOwnProperty(t) &&
                      er(
                        'Cannot register multiple overloads of a function with the same number of arguments (' +
                          t +
                          ')!'
                      ),
                    (a[e].overloadTable[t] = r))
                  : ((a[e] = r), void 0 !== t && (a[e].numArguments = t))
              }
              function br(e, r) {
                for (var t = [], n = 0; n < e; n++) t.push(z[(r + 4 * n) >> 2])
                return t
              }
              function kr(e, r, t) {
                a.hasOwnProperty(e) || tr('Replacing nonexistant public symbol'),
                  void 0 !== a[e].overloadTable && void 0 !== t
                    ? (a[e].overloadTable[t] = r)
                    : ((a[e] = r), (a[e].argCount = t))
              }
              function Fr(e, r, t) {
                var n = a['dynCall_' + e]
                return t && t.length ? n.apply(null, [r].concat(t)) : n.call(null, r)
              }
              var Sr = []
              function Ar(e) {
                var r = Sr[e]
                return r || (e >= Sr.length && (Sr.length = e + 1), (Sr[e] = r = I.get(e))), r
              }
              function Dr(e, r, t) {
                return e.includes('j') ? Fr(e, r, t) : Ar(r).apply(null, t)
              }
              function Pr(e, r) {
                var t = []
                return function () {
                  return (t.length = 0), Object.assign(t, arguments), Dr(e, r, t)
                }
              }
              function Mr(e, r) {
                var t = (e = Ye(e)).includes('j') ? Pr(e, r) : Ar(r)
                return (
                  'function' != typeof t &&
                    er('unknown function pointer with signature ' + e + ': ' + r),
                  t
                )
              }
              var Cr = void 0
              function Tr(e) {
                var r = Ot(e),
                  t = Ye(r)
                return zt(r), t
              }
              function jr(e, r) {
                var t = [],
                  n = {}
                throw (
                  (r.forEach(function e(r) {
                    n[r] || qe[r] || (Xe[r] ? Xe[r].forEach(e) : (t.push(r), (n[r] = !0)))
                  }),
                  new Cr(e + ': ' + t.map(Tr).join([', '])))
                )
              }
              function xr(e, r, t, n, o, i) {
                var a = br(r, t)
                ;(e = Ye(e)),
                  (o = Mr(n, o)),
                  Er(
                    e,
                    function () {
                      jr('Cannot call ' + e + ' due to unbound types', a)
                    },
                    r - 1
                  ),
                  nr([], a, function (t) {
                    var n = [t[0], null].concat(t.slice(1))
                    return kr(e, yr(e, n, null, o, i), r - 1), []
                  })
              }
              function Or(e, r, t) {
                switch (r) {
                  case 0:
                    return t
                      ? function (e) {
                          return T[e]
                        }
                      : function (e) {
                          return j[e]
                        }
                  case 1:
                    return t
                      ? function (e) {
                          return x[e >> 1]
                        }
                      : function (e) {
                          return O[e >> 1]
                        }
                  case 2:
                    return t
                      ? function (e) {
                          return R[e >> 2]
                        }
                      : function (e) {
                          return z[e >> 2]
                        }
                  default:
                    throw new TypeError('Unknown integer type: ' + e)
                }
              }
              function Rr(e, r, t, n, o) {
                ;(r = Ye(r)), -1 === o && (o = 4294967295)
                var i = We(t),
                  a = (e) => e
                if (0 === n) {
                  var s = 32 - 8 * t
                  a = (e) => (e << s) >>> s
                }
                var u = r.includes('unsigned')
                or(e, {
                  name: r,
                  fromWireType: a,
                  toWireType: u
                    ? function (e, r) {
                        return this.name, r >>> 0
                      }
                    : function (e, r) {
                        return this.name, r
                      },
                  argPackAdvance: 8,
                  readValueFromPointer: Or(r, i, 0 !== n),
                  destructorFunction: null,
                })
              }
              function zr(e, r, t) {
                var n = [
                  Int8Array,
                  Uint8Array,
                  Int16Array,
                  Uint16Array,
                  Int32Array,
                  Uint32Array,
                  Float32Array,
                  Float64Array,
                ][r]
                function o(e) {
                  var r = z,
                    t = r[(e >>= 2)],
                    o = r[e + 1]
                  return new n(r.buffer, o, t)
                }
                or(
                  e,
                  {
                    name: (t = Ye(t)),
                    fromWireType: o,
                    argPackAdvance: 8,
                    readValueFromPointer: o,
                  },
                  { ignoreDuplicateRegistrations: !0 }
                )
              }
              function Br(e, r) {
                var t = 'std::string' === (r = Ye(r))
                or(e, {
                  name: r,
                  fromWireType: function (e) {
                    var r,
                      n = z[e >> 2],
                      o = e + 4
                    if (t)
                      for (var i = o, a = 0; a <= n; ++a) {
                        var s = o + a
                        if (a == n || 0 == j[s]) {
                          var u = L(i, s - i)
                          void 0 === r ? (r = u) : ((r += String.fromCharCode(0)), (r += u)),
                            (i = s + 1)
                        }
                      }
                    else {
                      var c = new Array(n)
                      for (a = 0; a < n; ++a) c[a] = String.fromCharCode(j[o + a])
                      r = c.join('')
                    }
                    return zt(e), r
                  },
                  toWireType: function (e, r) {
                    var n
                    r instanceof ArrayBuffer && (r = new Uint8Array(r))
                    var o = 'string' == typeof r
                    o ||
                      r instanceof Uint8Array ||
                      r instanceof Uint8ClampedArray ||
                      r instanceof Int8Array ||
                      er('Cannot pass non-string to std::string'),
                      (n = t && o ? V(r) : r.length)
                    var i = xt(4 + n + 1),
                      a = i + 4
                    if (((z[i >> 2] = n), t && o)) Y(r, a, n + 1)
                    else if (o)
                      for (var s = 0; s < n; ++s) {
                        var u = r.charCodeAt(s)
                        u > 255 &&
                          (zt(a), er('String has UTF-16 code units that do not fit in 8 bits')),
                          (j[a + s] = u)
                      }
                    else for (s = 0; s < n; ++s) j[a + s] = r[s]
                    return null !== e && e.push(zt, i), i
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: hr,
                  destructorFunction: function (e) {
                    zt(e)
                  },
                })
              }
              var Nr = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0
              function Ir(e, r) {
                for (var t = e, n = t >> 1, o = n + r / 2; !(n >= o) && O[n]; ) ++n
                if ((t = n << 1) - e > 32 && Nr) return Nr.decode(j.subarray(e, t))
                for (var i = '', a = 0; !(a >= r / 2); ++a) {
                  var s = x[(e + 2 * a) >> 1]
                  if (0 == s) break
                  i += String.fromCharCode(s)
                }
                return i
              }
              function Ur(e, r, t) {
                if ((void 0 === t && (t = 2147483647), t < 2)) return 0
                for (var n = r, o = (t -= 2) < 2 * e.length ? t / 2 : e.length, i = 0; i < o; ++i) {
                  var a = e.charCodeAt(i)
                  ;(x[r >> 1] = a), (r += 2)
                }
                return (x[r >> 1] = 0), r - n
              }
              function Wr(e) {
                return 2 * e.length
              }
              function Lr(e, r) {
                for (var t = 0, n = ''; !(t >= r / 4); ) {
                  var o = R[(e + 4 * t) >> 2]
                  if (0 == o) break
                  if ((++t, o >= 65536)) {
                    var i = o - 65536
                    n += String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i))
                  } else n += String.fromCharCode(o)
                }
                return n
              }
              function Hr(e, r, t) {
                if ((void 0 === t && (t = 2147483647), t < 4)) return 0
                for (var n = r, o = n + t - 4, i = 0; i < e.length; ++i) {
                  var a = e.charCodeAt(i)
                  if (
                    (a >= 55296 &&
                      a <= 57343 &&
                      (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++i))),
                    (R[r >> 2] = a),
                    (r += 4) + 4 > o)
                  )
                    break
                }
                return (R[r >> 2] = 0), r - n
              }
              function Yr(e) {
                for (var r = 0, t = 0; t < e.length; ++t) {
                  var n = e.charCodeAt(t)
                  n >= 55296 && n <= 57343 && ++t, (r += 4)
                }
                return r
              }
              function Vr(e, r, t) {
                var n, o, i, a, s
                ;(t = Ye(t)),
                  2 === r
                    ? ((n = Ir), (o = Ur), (a = Wr), (i = () => O), (s = 1))
                    : 4 === r && ((n = Lr), (o = Hr), (a = Yr), (i = () => z), (s = 2)),
                  or(e, {
                    name: t,
                    fromWireType: function (e) {
                      for (var t, o = z[e >> 2], a = i(), u = e + 4, c = 0; c <= o; ++c) {
                        var l = e + 4 + c * r
                        if (c == o || 0 == a[l >> s]) {
                          var f = n(u, l - u)
                          void 0 === t ? (t = f) : ((t += String.fromCharCode(0)), (t += f)),
                            (u = l + r)
                        }
                      }
                      return zt(e), t
                    },
                    toWireType: function (e, n) {
                      'string' != typeof n && er('Cannot pass non-string to C++ string type ' + t)
                      var i = a(n),
                        u = xt(4 + i + r)
                      return (
                        (z[u >> 2] = i >> s), o(n, u + 4, i + r), null !== e && e.push(zt, u), u
                      )
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: hr,
                    destructorFunction: function (e) {
                      zt(e)
                    },
                  })
              }
              function qr(e, r) {
                or(e, {
                  isVoid: !0,
                  name: (r = Ye(r)),
                  argPackAdvance: 0,
                  fromWireType: function () {},
                  toWireType: function (e, r) {},
                })
              }
              function Xr(e) {
                do {
                  var r = z[e >> 2],
                    t = z[(e += 4) >> 2],
                    n = z[(e += 4) >> 2]
                  e += 4
                  var o = L(r)
                  Re.createPath('/', De.dirname(o), !0, !0),
                    Re.createDataFile(o, null, T.subarray(n, n + t), !0, !0, !0)
                } while (z[e >> 2])
              }
              function Gr() {
                le('')
              }
              var Kr = []
              function $r(e, r) {
                var t
                for (Kr.length = 0, r >>= 2; (t = j[e++]); )
                  (r += (105 != t) & r), Kr.push(105 == t ? R[r] : N[r++ >> 1]), ++r
                return Kr
              }
              function Jr(e, r, t) {
                var n = $r(r, t)
                return _e[e].apply(null, n)
              }
              function Zr(e, r, t) {
                return Jr(e, r, t)
              }
              function Qr(e, r, t) {
                j.copyWithin(e, r, r + t)
              }
              function et(e) {
                le('OOM')
              }
              function rt(e) {
                j.length, et()
              }
              var tt = {}
              function nt() {
                return d || './this.program'
              }
              function ot() {
                if (!ot.strings) {
                  var e = {
                    USER: 'web_user',
                    LOGNAME: 'web_user',
                    PATH: '/',
                    PWD: '/',
                    HOME: '/home/web_user',
                    LANG:
                      (
                        ('object' == typeof navigator &&
                          navigator.languages &&
                          navigator.languages[0]) ||
                        'C'
                      ).replace('-', '_') + '.UTF-8',
                    _: nt(),
                  }
                  for (var r in tt) void 0 === tt[r] ? delete e[r] : (e[r] = tt[r])
                  var t = []
                  for (var r in e) t.push(r + '=' + e[r])
                  ot.strings = t
                }
                return ot.strings
              }
              function it(e, r, t) {
                for (var n = 0; n < e.length; ++n) T[r++ >> 0] = e.charCodeAt(n)
                t || (T[r >> 0] = 0)
              }
              function at(e, r) {
                var t = 0
                return (
                  ot().forEach(function (n, o) {
                    var i = r + t
                    ;(z[(e + 4 * o) >> 2] = i), it(n, i), (t += n.length + 1)
                  }),
                  0
                )
              }
              function st(e, r) {
                var t = ot()
                z[e >> 2] = t.length
                var n = 0
                return (
                  t.forEach(function (e) {
                    n += e.length + 1
                  }),
                  (z[r >> 2] = n),
                  0
                )
              }
              function ut(e) {
                try {
                  var r = ze.getStreamFromFD(e)
                  return Re.close(r), 0
                } catch (e) {
                  if (void 0 === Re || !(e instanceof Re.ErrnoError)) throw e
                  return e.errno
                }
              }
              function ct(e, r, t, n) {
                for (var o = 0, i = 0; i < t; i++) {
                  var a = z[r >> 2],
                    s = z[(r + 4) >> 2]
                  r += 8
                  var u = Re.read(e, T, a, s, n)
                  if (u < 0) return -1
                  if (((o += u), u < s)) break
                  void 0 !== n && (n += u)
                }
                return o
              }
              function lt(e, r, t, n) {
                try {
                  var o = ct(ze.getStreamFromFD(e), r, t)
                  return (z[n >> 2] = o), 0
                } catch (e) {
                  if (void 0 === Re || !(e instanceof Re.ErrnoError)) throw e
                  return e.errno
                }
              }
              function ft(e, r) {
                return (r + 2097152) >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * r : NaN
              }
              function dt(e, r, t, n, o) {
                try {
                  var i = ft(r, t)
                  if (isNaN(i)) return 61
                  var a = ze.getStreamFromFD(e)
                  return (
                    Re.llseek(a, i, n),
                    (he = [
                      a.position >>> 0,
                      ((de = a.position),
                      +Math.abs(de) >= 1
                        ? de > 0
                          ? (0 | Math.min(+Math.floor(de / 4294967296), 4294967295)) >>> 0
                          : ~~+Math.ceil((de - +(~~de >>> 0)) / 4294967296) >>> 0
                        : 0),
                    ]),
                    (R[o >> 2] = he[0]),
                    (R[(o + 4) >> 2] = he[1]),
                    a.getdents && 0 === i && 0 === n && (a.getdents = null),
                    0
                  )
                } catch (e) {
                  if (void 0 === Re || !(e instanceof Re.ErrnoError)) throw e
                  return e.errno
                }
              }
              function ht(e, r, t, n) {
                for (var o = 0, i = 0; i < t; i++) {
                  var a = z[r >> 2],
                    s = z[(r + 4) >> 2]
                  r += 8
                  var u = Re.write(e, T, a, s, n)
                  if (u < 0) return -1
                  ;(o += u), void 0 !== n && (n += u)
                }
                return o
              }
              function mt(e, r, t, n) {
                try {
                  var o = ht(ze.getStreamFromFD(e), r, t)
                  return (z[n >> 2] = o), 0
                } catch (e) {
                  if (void 0 === Re || !(e instanceof Re.ErrnoError)) throw e
                  return e.errno
                }
              }
              function pt(e) {
                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
              }
              function vt(e, r) {
                for (var t = 0, n = 0; n <= r; t += e[n++]);
                return t
              }
              var gt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                wt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
              function yt(e, r) {
                for (var t = new Date(e.getTime()); r > 0; ) {
                  var n = pt(t.getFullYear()),
                    o = t.getMonth(),
                    i = (n ? gt : wt)[o]
                  if (!(r > i - t.getDate())) return t.setDate(t.getDate() + r), t
                  ;(r -= i - t.getDate() + 1),
                    t.setDate(1),
                    o < 11 ? t.setMonth(o + 1) : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1))
                }
                return t
              }
              function _t(e, r) {
                T.set(e, r)
              }
              function Et(e, r, t, n) {
                var o = R[(n + 40) >> 2],
                  i = {
                    tm_sec: R[n >> 2],
                    tm_min: R[(n + 4) >> 2],
                    tm_hour: R[(n + 8) >> 2],
                    tm_mday: R[(n + 12) >> 2],
                    tm_mon: R[(n + 16) >> 2],
                    tm_year: R[(n + 20) >> 2],
                    tm_wday: R[(n + 24) >> 2],
                    tm_yday: R[(n + 28) >> 2],
                    tm_isdst: R[(n + 32) >> 2],
                    tm_gmtoff: R[(n + 36) >> 2],
                    tm_zone: o ? L(o) : '',
                  },
                  a = L(t),
                  s = {
                    '%c': '%a %b %d %H:%M:%S %Y',
                    '%D': '%m/%d/%y',
                    '%F': '%Y-%m-%d',
                    '%h': '%b',
                    '%r': '%I:%M:%S %p',
                    '%R': '%H:%M',
                    '%T': '%H:%M:%S',
                    '%x': '%m/%d/%y',
                    '%X': '%H:%M:%S',
                    '%Ec': '%c',
                    '%EC': '%C',
                    '%Ex': '%m/%d/%y',
                    '%EX': '%H:%M:%S',
                    '%Ey': '%y',
                    '%EY': '%Y',
                    '%Od': '%d',
                    '%Oe': '%e',
                    '%OH': '%H',
                    '%OI': '%I',
                    '%Om': '%m',
                    '%OM': '%M',
                    '%OS': '%S',
                    '%Ou': '%u',
                    '%OU': '%U',
                    '%OV': '%V',
                    '%Ow': '%w',
                    '%OW': '%W',
                    '%Oy': '%y',
                  }
                for (var u in s) a = a.replace(new RegExp(u, 'g'), s[u])
                var c = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                  ],
                  l = [
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
                  ]
                function f(e, r, t) {
                  for (var n = 'number' == typeof e ? e.toString() : e || ''; n.length < r; )
                    n = t[0] + n
                  return n
                }
                function d(e, r) {
                  return f(e, r, '0')
                }
                function h(e, r) {
                  function t(e) {
                    return e < 0 ? -1 : e > 0 ? 1 : 0
                  }
                  var n
                  return (
                    0 === (n = t(e.getFullYear() - r.getFullYear())) &&
                      0 === (n = t(e.getMonth() - r.getMonth())) &&
                      (n = t(e.getDate() - r.getDate())),
                    n
                  )
                }
                function m(e) {
                  switch (e.getDay()) {
                    case 0:
                      return new Date(e.getFullYear() - 1, 11, 29)
                    case 1:
                      return e
                    case 2:
                      return new Date(e.getFullYear(), 0, 3)
                    case 3:
                      return new Date(e.getFullYear(), 0, 2)
                    case 4:
                      return new Date(e.getFullYear(), 0, 1)
                    case 5:
                      return new Date(e.getFullYear() - 1, 11, 31)
                    case 6:
                      return new Date(e.getFullYear() - 1, 11, 30)
                  }
                }
                function p(e) {
                  var r = yt(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                    t = new Date(r.getFullYear(), 0, 4),
                    n = new Date(r.getFullYear() + 1, 0, 4),
                    o = m(t),
                    i = m(n)
                  return h(o, r) <= 0
                    ? h(i, r) <= 0
                      ? r.getFullYear() + 1
                      : r.getFullYear()
                    : r.getFullYear() - 1
                }
                var v = {
                  '%a': function (e) {
                    return c[e.tm_wday].substring(0, 3)
                  },
                  '%A': function (e) {
                    return c[e.tm_wday]
                  },
                  '%b': function (e) {
                    return l[e.tm_mon].substring(0, 3)
                  },
                  '%B': function (e) {
                    return l[e.tm_mon]
                  },
                  '%C': function (e) {
                    return d(((e.tm_year + 1900) / 100) | 0, 2)
                  },
                  '%d': function (e) {
                    return d(e.tm_mday, 2)
                  },
                  '%e': function (e) {
                    return f(e.tm_mday, 2, ' ')
                  },
                  '%g': function (e) {
                    return p(e).toString().substring(2)
                  },
                  '%G': function (e) {
                    return p(e)
                  },
                  '%H': function (e) {
                    return d(e.tm_hour, 2)
                  },
                  '%I': function (e) {
                    var r = e.tm_hour
                    return 0 == r ? (r = 12) : r > 12 && (r -= 12), d(r, 2)
                  },
                  '%j': function (e) {
                    return d(e.tm_mday + vt(pt(e.tm_year + 1900) ? gt : wt, e.tm_mon - 1), 3)
                  },
                  '%m': function (e) {
                    return d(e.tm_mon + 1, 2)
                  },
                  '%M': function (e) {
                    return d(e.tm_min, 2)
                  },
                  '%n': function () {
                    return '\n'
                  },
                  '%p': function (e) {
                    return e.tm_hour >= 0 && e.tm_hour < 12 ? 'AM' : 'PM'
                  },
                  '%S': function (e) {
                    return d(e.tm_sec, 2)
                  },
                  '%t': function () {
                    return '\t'
                  },
                  '%u': function (e) {
                    return e.tm_wday || 7
                  },
                  '%U': function (e) {
                    var r = e.tm_yday + 7 - e.tm_wday
                    return d(Math.floor(r / 7), 2)
                  },
                  '%V': function (e) {
                    var r = Math.floor((e.tm_yday + 7 - ((e.tm_wday + 6) % 7)) / 7)
                    if (((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && r++, r)) {
                      if (53 == r) {
                        var t = (e.tm_wday + 371 - e.tm_yday) % 7
                        4 == t || (3 == t && pt(e.tm_year)) || (r = 1)
                      }
                    } else {
                      r = 52
                      var n = (e.tm_wday + 7 - e.tm_yday - 1) % 7
                      ;(4 == n || (5 == n && pt((e.tm_year % 400) - 1))) && r++
                    }
                    return d(r, 2)
                  },
                  '%w': function (e) {
                    return e.tm_wday
                  },
                  '%W': function (e) {
                    var r = e.tm_yday + 7 - ((e.tm_wday + 6) % 7)
                    return d(Math.floor(r / 7), 2)
                  },
                  '%y': function (e) {
                    return (e.tm_year + 1900).toString().substring(2)
                  },
                  '%Y': function (e) {
                    return e.tm_year + 1900
                  },
                  '%z': function (e) {
                    var r = e.tm_gmtoff,
                      t = r >= 0
                    return (
                      (r = ((r = Math.abs(r) / 60) / 60) * 100 + (r % 60)),
                      (t ? '+' : '-') + String('0000' + r).slice(-4)
                    )
                  },
                  '%Z': function (e) {
                    return e.tm_zone
                  },
                  '%%': function () {
                    return '%'
                  },
                }
                for (var u in ((a = a.replace(/%%/g, '\0\0')), v))
                  a.includes(u) && (a = a.replace(new RegExp(u, 'g'), v[u](i)))
                var g = Ce((a = a.replace(/\0\0/g, '%')), !1)
                return g.length > r ? 0 : (_t(g, e), g.length - 1)
              }
              function bt(e, r, t, n, o) {
                return Et(e, r, t, n)
              }
              function kt(e) {
                ;(P = e), J() || (a.onExit && a.onExit(e), (M = !0)), h(e, new Ee(e))
              }
              function Ft(e, r) {
                ;(P = e), kt(e)
              }
              function St(e) {
                if (e instanceof Ee || 'unwind' == e) return P
                h(1, e)
              }
              function At(e) {
                var r = V(e) + 1,
                  t = Bt(r)
                return H(e, T, t, r), t
              }
              var Dt = function (e, r, t, n) {
                  e || (e = this),
                    (this.parent = e),
                    (this.mount = e.mount),
                    (this.mounted = null),
                    (this.id = Re.nextInode++),
                    (this.name = r),
                    (this.mode = t),
                    (this.node_ops = {}),
                    (this.stream_ops = {}),
                    (this.rdev = n)
                },
                Pt = 365,
                Mt = 146
              Object.defineProperties(Dt.prototype, {
                read: {
                  get: function () {
                    return (this.mode & Pt) === Pt
                  },
                  set: function (e) {
                    e ? (this.mode |= Pt) : (this.mode &= ~Pt)
                  },
                },
                write: {
                  get: function () {
                    return (this.mode & Mt) === Mt
                  },
                  set: function (e) {
                    e ? (this.mode |= Mt) : (this.mode &= ~Mt)
                  },
                },
                isFolder: {
                  get: function () {
                    return Re.isDir(this.mode)
                  },
                },
                isDevice: {
                  get: function () {
                    return Re.isChrdev(this.mode)
                  },
                },
              }),
                (Re.FSNode = Dt),
                Re.staticInit(),
                (a.FS_createPath = Re.createPath),
                (a.FS_createDataFile = Re.createDataFile),
                (a.FS_createPreloadedFile = Re.createPreloadedFile),
                (a.FS_unlink = Re.unlink),
                (a.FS_createLazyFile = Re.createLazyFile),
                (a.FS_createDevice = Re.createDevice),
                Le(),
                (Qe = a.BindingError = Ze(Error, 'BindingError')),
                (rr = a.InternalError = Ze(Error, 'InternalError')),
                fr(),
                (Cr = a.UnboundTypeError = Ze(Error, 'UnboundTypeError')),
                'function' == typeof atob && atob
              var Ct,
                Tt = {
                  __assert_fail: ke,
                  __cxa_throw: Se,
                  __syscall_fcntl64: Be,
                  __syscall_ioctl: Ne,
                  __syscall_openat: Ie,
                  _embind_register_bigint: Ue,
                  _embind_register_bool: ir,
                  _embind_register_emval: mr,
                  _embind_register_float: vr,
                  _embind_register_function: xr,
                  _embind_register_integer: Rr,
                  _embind_register_memory_view: zr,
                  _embind_register_std_string: Br,
                  _embind_register_std_wstring: Vr,
                  _embind_register_void: qr,
                  _emscripten_fs_load_embedded_files: Xr,
                  abort: Gr,
                  emscripten_asm_const_int: Zr,
                  emscripten_memcpy_big: Qr,
                  emscripten_resize_heap: rt,
                  environ_get: at,
                  environ_sizes_get: st,
                  fd_close: ut,
                  fd_read: lt,
                  fd_seek: dt,
                  fd_write: mt,
                  strftime_l: bt,
                },
                jt =
                  (ye(),
                  (a._main = function () {
                    return (jt = a._main = a.asm.__main_argc_argv).apply(null, arguments)
                  })),
                xt = function () {
                  return (xt = a.asm.malloc).apply(null, arguments)
                },
                Ot = (a.___getTypeName = function () {
                  return (Ot = a.___getTypeName = a.asm.__getTypeName).apply(null, arguments)
                }),
                Rt =
                  ((a.__embind_initialize_bindings = function () {
                    return (a.__embind_initialize_bindings =
                      a.asm._embind_initialize_bindings).apply(null, arguments)
                  }),
                  function () {
                    return (Rt = a.asm.__errno_location).apply(null, arguments)
                  }),
                zt = function () {
                  return (zt = a.asm.free).apply(null, arguments)
                },
                Bt = function () {
                  return (Bt = a.asm.stackAlloc).apply(null, arguments)
                },
                Nt = function () {
                  return (Nt = a.asm.__cxa_is_pointer_type).apply(null, arguments)
                }
              function It() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                var r = jt
                e.unshift(d)
                var t = e.length,
                  n = Bt(4 * (t + 1)),
                  o = n >> 2
                e.forEach((e) => {
                  R[o++] = At(e)
                }),
                  (R[o] = 0)
                try {
                  var i = r(t, n)
                  return Ft(i), i
                } catch (e) {
                  return St(e)
                }
              }
              function Ut() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f
                function t() {
                  Ct ||
                    ((Ct = !0),
                    (a.calledRun = !0),
                    M ||
                      (Q(),
                      ee(),
                      r(a),
                      a.onRuntimeInitialized && a.onRuntimeInitialized(),
                      Wt && It(e),
                      re()))
                }
                ie > 0 ||
                  (Z(),
                  ie > 0 ||
                    (a.setStatus
                      ? (a.setStatus('Running...'),
                        setTimeout(function () {
                          setTimeout(function () {
                            a.setStatus('')
                          }, 1),
                            t()
                        }, 1))
                      : t()))
              }
              if (
                ((a.dynCall_fiij = function () {
                  return (a.dynCall_fiij = a.asm.dynCall_fiij).apply(null, arguments)
                }),
                (a.dynCall_viijf = function () {
                  return (a.dynCall_viijf = a.asm.dynCall_viijf).apply(null, arguments)
                }),
                (a.dynCall_jiji = function () {
                  return (a.dynCall_jiji = a.asm.dynCall_jiji).apply(null, arguments)
                }),
                (a.dynCall_viijii = function () {
                  return (a.dynCall_viijii = a.asm.dynCall_viijii).apply(null, arguments)
                }),
                (a.dynCall_iiiiij = function () {
                  return (a.dynCall_iiiiij = a.asm.dynCall_iiiiij).apply(null, arguments)
                }),
                (a.dynCall_iiiiijj = function () {
                  return (a.dynCall_iiiiijj = a.asm.dynCall_iiiiijj).apply(null, arguments)
                }),
                (a.dynCall_iiiiiijj = function () {
                  return (a.dynCall_iiiiiijj = a.asm.dynCall_iiiiiijj).apply(null, arguments)
                }),
                (a.___emscripten_embedded_file_data = 943176),
                (a.addRunDependency = ue),
                (a.removeRunDependency = ce),
                (a.FS_createPath = Re.createPath),
                (a.FS_createDataFile = Re.createDataFile),
                (a.FS_createPreloadedFile = Re.createPreloadedFile),
                (a.FS_createLazyFile = Re.createLazyFile),
                (a.FS_createDevice = Re.createDevice),
                (a.FS_unlink = Re.unlink),
                (se = function e() {
                  Ct || Ut(), Ct || (se = e)
                }),
                a.preInit)
              )
                for (
                  'function' == typeof a.preInit && (a.preInit = [a.preInit]);
                  a.preInit.length > 0;

                )
                  a.preInit.pop()()
              var Wt = !0
              return a.noInitialRun && (Wt = !1), Ut(), e.ready
            })
        e.exports = i
      },
      54993: (e, r, t) => {
        'use strict'
        'undefined' != typeof window && window.innerHeight,
          Math.round(425),
          new Set([
            'newMessage',
            'newScheduledMessage',
            'deleteMessages',
            'deleteScheduledMessages',
            'deleteHistory',
          ])
        const n = new Set(['image/png', 'image/jpeg', 'image/gif']),
          o = new Set(['video/mp4']),
          i =
            (new Set([
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
            new Set([...n, ...o]),
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
            ]),
            new Map())
        function a(e) {
          return e instanceof ArrayBuffer || e instanceof ImageBitmap
        }
        var s = t(72996),
          u = t.n(s)
        const c = t.p + 'fasttext-wasm.bd5b9292c04d265a9bfb.wasm'
        let l
        const f = u()({ locateFile: (e, r) => (e.endsWith('.wasm') ? c : r + e) }).then((e) => {
          ;(l = e), console.log('[FASTTEXT] Worker ready')
        })
        function d(e) {
          return e.split('\n')[0].replace('__label__', '').trim()
        }
        !(function (e, r) {
          function t(e, t) {
            ;(e.channel = r), t ? postMessage(e, t) : postMessage(e)
          }
          !(function (e) {
            ;(self.onerror = (r) => {
              console.error(r),
                e({
                  type: 'unhandledError',
                  error: { message: r.error.message || 'Uncaught exception in worker' },
                })
            }),
              self.addEventListener('unhandledrejection', (r) => {
                console.error(r),
                  e({
                    type: 'unhandledError',
                    error: { message: r.reason.message || 'Uncaught rejection in worker' },
                  })
              })
          })(t),
            (onmessage = (n) => {
              n.data?.channel === r &&
                (async function (e, r, t, n) {
                  switch (
                    (n ||
                      (n = (e) => {
                        t({ type: 'update', update: e })
                      }),
                    r.type)
                  ) {
                    case 'init': {
                      const { args: t } = r,
                        o = 'function' == typeof e ? e('init', n, ...t) : e.init?.(n, ...t)
                      await o
                      break
                    }
                    case 'callMethod': {
                      const { messageId: n, name: o, args: s, withCallback: u } = r
                      try {
                        if (n && u) {
                          const e = function () {
                            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                              r[o] = arguments[o]
                            const i = r[r.length - 1]
                            t(
                              { type: 'methodCallback', messageId: n, callbackArgs: r },
                              a(i) ? [i] : void 0
                            )
                          }
                          i.set(n, e), s.push(e)
                        }
                        const r = 'function' == typeof e ? await e(o, ...s) : await e[o](...s),
                          { arrayBuffer: c } =
                            ('object' == typeof r && 'arrayBuffer' in r && r) || {}
                        n &&
                          t({ type: 'methodResponse', messageId: n, response: r }, c ? [c] : void 0)
                      } catch (e) {
                        n &&
                          t({ type: 'methodResponse', messageId: n, error: { message: e.message } })
                      }
                      n && i.delete(n)
                      break
                    }
                    case 'cancelProgress': {
                      const e = i.get(r.messageId)
                      e && (e.isCanceled = !0)
                      break
                    }
                  }
                })(e, n.data, t)
            })
        })({
          detectLanguage: async function (e, r) {
            l || (await f)
            const t = await l.makePrediction('predict', e, '1', r.toString())
            if (t.length) return d(t)
          },
          detectLanguageProbability: async function (e, r, t) {
            l || (await f)
            const n = await l.makePrediction('predict-prob', e, r.toString(), t.toString())
            if (n.length)
              return (function (e) {
                return e
                  .trim()
                  .split('\n')
                  .map((e) => {
                    const [r, t] = e.split(' ')
                    return { label: d(r), prob: parseFloat(t) }
                  })
              })(n)
          },
        })
      },
      26470: (e) => {
        'use strict'
        function r(e) {
          if ('string' != typeof e)
            throw new TypeError('Path must be a string. Received ' + JSON.stringify(e))
        }
        function t(e, r) {
          for (var t, n = '', o = 0, i = -1, a = 0, s = 0; s <= e.length; ++s) {
            if (s < e.length) t = e.charCodeAt(s)
            else {
              if (47 === t) break
              t = 47
            }
            if (47 === t) {
              if (i === s - 1 || 1 === a);
              else if (i !== s - 1 && 2 === a) {
                if (
                  n.length < 2 ||
                  2 !== o ||
                  46 !== n.charCodeAt(n.length - 1) ||
                  46 !== n.charCodeAt(n.length - 2)
                )
                  if (n.length > 2) {
                    var u = n.lastIndexOf('/')
                    if (u !== n.length - 1) {
                      ;-1 === u
                        ? ((n = ''), (o = 0))
                        : (o = (n = n.slice(0, u)).length - 1 - n.lastIndexOf('/')),
                        (i = s),
                        (a = 0)
                      continue
                    }
                  } else if (2 === n.length || 1 === n.length) {
                    ;(n = ''), (o = 0), (i = s), (a = 0)
                    continue
                  }
                r && (n.length > 0 ? (n += '/..') : (n = '..'), (o = 2))
              } else
                n.length > 0 ? (n += '/' + e.slice(i + 1, s)) : (n = e.slice(i + 1, s)),
                  (o = s - i - 1)
              ;(i = s), (a = 0)
            } else 46 === t && -1 !== a ? ++a : (a = -1)
          }
          return n
        }
        var n = {
          resolve: function () {
            for (var e, n = '', o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
              var a
              i >= 0 ? (a = arguments[i]) : (void 0 === e && (e = process.cwd()), (a = e)),
                r(a),
                0 !== a.length && ((n = a + '/' + n), (o = 47 === a.charCodeAt(0)))
            }
            return (n = t(n, !o)), o ? (n.length > 0 ? '/' + n : '/') : n.length > 0 ? n : '.'
          },
          normalize: function (e) {
            if ((r(e), 0 === e.length)) return '.'
            var n = 47 === e.charCodeAt(0),
              o = 47 === e.charCodeAt(e.length - 1)
            return (
              0 !== (e = t(e, !n)).length || n || (e = '.'),
              e.length > 0 && o && (e += '/'),
              n ? '/' + e : e
            )
          },
          isAbsolute: function (e) {
            return r(e), e.length > 0 && 47 === e.charCodeAt(0)
          },
          join: function () {
            if (0 === arguments.length) return '.'
            for (var e, t = 0; t < arguments.length; ++t) {
              var o = arguments[t]
              r(o), o.length > 0 && (void 0 === e ? (e = o) : (e += '/' + o))
            }
            return void 0 === e ? '.' : n.normalize(e)
          },
          relative: function (e, t) {
            if ((r(e), r(t), e === t)) return ''
            if ((e = n.resolve(e)) === (t = n.resolve(t))) return ''
            for (var o = 1; o < e.length && 47 === e.charCodeAt(o); ++o);
            for (var i = e.length, a = i - o, s = 1; s < t.length && 47 === t.charCodeAt(s); ++s);
            for (var u = t.length - s, c = a < u ? a : u, l = -1, f = 0; f <= c; ++f) {
              if (f === c) {
                if (u > c) {
                  if (47 === t.charCodeAt(s + f)) return t.slice(s + f + 1)
                  if (0 === f) return t.slice(s + f)
                } else a > c && (47 === e.charCodeAt(o + f) ? (l = f) : 0 === f && (l = 0))
                break
              }
              var d = e.charCodeAt(o + f)
              if (d !== t.charCodeAt(s + f)) break
              47 === d && (l = f)
            }
            var h = ''
            for (f = o + l + 1; f <= i; ++f)
              (f !== i && 47 !== e.charCodeAt(f)) || (0 === h.length ? (h += '..') : (h += '/..'))
            return h.length > 0
              ? h + t.slice(s + l)
              : ((s += l), 47 === t.charCodeAt(s) && ++s, t.slice(s))
          },
          _makeLong: function (e) {
            return e
          },
          dirname: function (e) {
            if ((r(e), 0 === e.length)) return '.'
            for (
              var t = e.charCodeAt(0), n = 47 === t, o = -1, i = !0, a = e.length - 1;
              a >= 1;
              --a
            )
              if (47 === (t = e.charCodeAt(a))) {
                if (!i) {
                  o = a
                  break
                }
              } else i = !1
            return -1 === o ? (n ? '/' : '.') : n && 1 === o ? '//' : e.slice(0, o)
          },
          basename: function (e, t) {
            if (void 0 !== t && 'string' != typeof t)
              throw new TypeError('"ext" argument must be a string')
            r(e)
            var n,
              o = 0,
              i = -1,
              a = !0
            if (void 0 !== t && t.length > 0 && t.length <= e.length) {
              if (t.length === e.length && t === e) return ''
              var s = t.length - 1,
                u = -1
              for (n = e.length - 1; n >= 0; --n) {
                var c = e.charCodeAt(n)
                if (47 === c) {
                  if (!a) {
                    o = n + 1
                    break
                  }
                } else
                  -1 === u && ((a = !1), (u = n + 1)),
                    s >= 0 && (c === t.charCodeAt(s) ? -1 == --s && (i = n) : ((s = -1), (i = u)))
              }
              return o === i ? (i = u) : -1 === i && (i = e.length), e.slice(o, i)
            }
            for (n = e.length - 1; n >= 0; --n)
              if (47 === e.charCodeAt(n)) {
                if (!a) {
                  o = n + 1
                  break
                }
              } else -1 === i && ((a = !1), (i = n + 1))
            return -1 === i ? '' : e.slice(o, i)
          },
          extname: function (e) {
            r(e)
            for (var t = -1, n = 0, o = -1, i = !0, a = 0, s = e.length - 1; s >= 0; --s) {
              var u = e.charCodeAt(s)
              if (47 !== u)
                -1 === o && ((i = !1), (o = s + 1)),
                  46 === u ? (-1 === t ? (t = s) : 1 !== a && (a = 1)) : -1 !== t && (a = -1)
              else if (!i) {
                n = s + 1
                break
              }
            }
            return -1 === t || -1 === o || 0 === a || (1 === a && t === o - 1 && t === n + 1)
              ? ''
              : e.slice(t, o)
          },
          format: function (e) {
            if (null === e || 'object' != typeof e)
              throw new TypeError(
                'The "pathObject" argument must be of type Object. Received type ' + typeof e
              )
            return (function (e, r) {
              var t = r.dir || r.root,
                n = r.base || (r.name || '') + (r.ext || '')
              return t ? (t === r.root ? t + n : t + '/' + n) : n
            })(0, e)
          },
          parse: function (e) {
            r(e)
            var t = { root: '', dir: '', base: '', ext: '', name: '' }
            if (0 === e.length) return t
            var n,
              o = e.charCodeAt(0),
              i = 47 === o
            i ? ((t.root = '/'), (n = 1)) : (n = 0)
            for (var a = -1, s = 0, u = -1, c = !0, l = e.length - 1, f = 0; l >= n; --l)
              if (47 !== (o = e.charCodeAt(l)))
                -1 === u && ((c = !1), (u = l + 1)),
                  46 === o ? (-1 === a ? (a = l) : 1 !== f && (f = 1)) : -1 !== a && (f = -1)
              else if (!c) {
                s = l + 1
                break
              }
            return (
              -1 === a || -1 === u || 0 === f || (1 === f && a === u - 1 && a === s + 1)
                ? -1 !== u && (t.base = t.name = 0 === s && i ? e.slice(1, u) : e.slice(s, u))
                : (0 === s && i
                    ? ((t.name = e.slice(1, a)), (t.base = e.slice(1, u)))
                    : ((t.name = e.slice(s, a)), (t.base = e.slice(s, u))),
                  (t.ext = e.slice(a, u))),
              s > 0 ? (t.dir = e.slice(0, s - 1)) : i && (t.dir = '/'),
              t
            )
          },
          sep: '/',
          delimiter: ':',
          win32: null,
          posix: null,
        }
        ;(n.posix = n), (e.exports = n)
      },
      41775: () => {},
      96877: () => {},
    },
    n = {}
  function o(e) {
    var r = n[e]
    if (void 0 !== r) return r.exports
    var i = (n[e] = { exports: {} })
    return t[e](i, i.exports, o), i.exports
  }
  ;(o.m = t),
    (o.x = () => {
      var e = o.O(void 0, [8764], () => o(54993))
      return o.O(e)
    }),
    (e = []),
    (o.O = (r, t, n, i) => {
      if (!t) {
        var a = 1 / 0
        for (l = 0; l < e.length; l++) {
          for (var [t, n, i] = e[l], s = !0, u = 0; u < t.length; u++)
            (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[u]))
              ? t.splice(u--, 1)
              : ((s = !1), i < a && (a = i))
          if (s) {
            e.splice(l--, 1)
            var c = n()
            void 0 !== c && (r = c)
          }
        }
        return r
      }
      i = i || 0
      for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1]
      e[l] = [t, n, i]
    }),
    (o.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e
      return o.d(r, { a: r }), r
    }),
    (o.d = (e, r) => {
      for (var t in r)
        o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] })
    }),
    (o.f = {}),
    (o.e = (e) => Promise.all(Object.keys(o.f).reduce((r, t) => (o.f[t](e, r), r), []))),
    (o.u = (e) => e + '.b82306b8b2576a90e0ba.js'),
    (o.miniCssF = (e) => {}),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      var e
      o.g.importScripts && (e = o.g.location + '')
      var r = o.g.document
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script')
        t.length && (e = t[t.length - 1].src)
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser')
      ;(e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (o.p = e)
    })(),
    (() => {
      var e = { 1275: 1 }
      o.f.i = (r, t) => {
        e[r] || importScripts(o.p + o.u(r))
      }
      var r = (self.webpackChunktelegram_t = self.webpackChunktelegram_t || []),
        t = r.push.bind(r)
      r.push = (r) => {
        var [n, i, a] = r
        for (var s in i) o.o(i, s) && (o.m[s] = i[s])
        for (a && a(o); n.length; ) e[n.pop()] = 1
        t(r)
      }
    })(),
    (r = o.x),
    (o.x = () => o.e(8764).then(r)),
    o.x()
})()
//# sourceMappingURL=1275.85e18364f28d73893526.js.map
