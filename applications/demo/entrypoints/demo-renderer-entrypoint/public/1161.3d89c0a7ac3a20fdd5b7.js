;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1161],
  {
    1161: function (e) {
      'undefined' != typeof self && self,
        (e.exports = (function (e) {
          var t = {}
          function o(n) {
            if (t[n]) return t[n].exports
            var i = (t[n] = { i: n, l: !1, exports: {} })
            return e[n].call(i.exports, i, i.exports, o), (i.l = !0), i.exports
          }
          return (
            (o.m = e),
            (o.c = t),
            (o.d = function (e, t, n) {
              o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
            }),
            (o.r = function (e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
            }),
            (o.t = function (e, t) {
              if ((1 & t && (e = o(e)), 8 & t)) return e
              if (4 & t && 'object' == typeof e && e && e.__esModule) return e
              var n = Object.create(null)
              if (
                (o.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
              )
                for (var i in e)
                  o.d(
                    n,
                    i,
                    function (t) {
                      return e[t]
                    }.bind(null, i)
                  )
              return n
            }),
            (o.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default
                    }
                  : function () {
                      return e
                    }
              return o.d(t, 'a', t), t
            }),
            (o.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }),
            (o.p = ''),
            o((o.s = 0))
          )
        })([
          function (e, t, o) {
            'use strict'
            ;(function (t) {
              var o = t.AudioContext || t.webkitAudioContext,
                n = function e() {
                  var t = this,
                    o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  if (!e.isRecordingSupported())
                    throw new Error('Recording is not supported in this browser')
                  ;(this.state = 'inactive'),
                    (this.config = Object.assign(
                      {
                        bufferLength: 4096,
                        encoderApplication: 2049,
                        encoderFrameSize: 20,
                        encoderPath: 'encoderWorker.min.js',
                        encoderSampleRate: 48e3,
                        maxFramesPerPage: 40,
                        mediaTrackConstraints: !0,
                        monitorGain: 0,
                        numberOfChannels: 1,
                        recordingGain: 1,
                        resampleQuality: 3,
                        streamPages: !1,
                        wavBitDepth: 16,
                        sourceNode: { context: null },
                      },
                      o
                    )),
                    (this.encodedSamplePosition = 0),
                    this.initAudioContext(),
                    (this.initialize = this.initWorklet().then(function () {
                      return t.initEncoder()
                    }))
                }
              ;(n.isRecordingSupported = function () {
                var e =
                  t.navigator && t.navigator.mediaDevices && t.navigator.mediaDevices.getUserMedia
                return o && e && t.WebAssembly
              }),
                (n.version = '8.0.3'),
                (n.prototype.clearStream = function () {
                  this.stream &&
                    (this.stream.getTracks
                      ? this.stream.getTracks().forEach(function (e) {
                          return e.stop()
                        })
                      : this.stream.stop())
                }),
                (n.prototype.close = function () {
                  return (
                    this.monitorGainNode.disconnect(),
                    this.recordingGainNode.disconnect(),
                    this.sourceNode && this.sourceNode.disconnect(),
                    this.clearStream(),
                    this.encoder &&
                      (this.encoderNode.disconnect(),
                      this.encoder.postMessage({ command: 'close' })),
                    this.config.sourceNode.context ? Promise.resolve() : this.audioContext.close()
                  )
                }),
                (n.prototype.encodeBuffers = function (e) {
                  if ('recording' === this.state) {
                    for (var t = [], o = 0; o < e.numberOfChannels; o++) t[o] = e.getChannelData(o)
                    this.encoder.postMessage({ command: 'encode', buffers: t })
                  }
                }),
                (n.prototype.initAudioContext = function () {
                  ;(this.audioContext = this.config.sourceNode.context
                    ? this.config.sourceNode.context
                    : new o()),
                    (this.monitorGainNode = this.audioContext.createGain()),
                    this.setMonitorGain(this.config.monitorGain),
                    (this.recordingGainNode = this.audioContext.createGain()),
                    this.setRecordingGain(this.config.recordingGain)
                }),
                (n.prototype.initEncoder = function () {
                  var e = this
                  this.audioContext.audioWorklet
                    ? ((this.encoderNode = new AudioWorkletNode(
                        this.audioContext,
                        'encoder-worklet',
                        { numberOfOutputs: 0 }
                      )),
                      (this.encoder = this.encoderNode.port))
                    : (console.log(
                        'audioWorklet support not detected. Falling back to scriptProcessor'
                      ),
                      (this.encodeBuffers = function () {
                        return delete e.encodeBuffers
                      }),
                      (this.encoderNode = this.audioContext.createScriptProcessor(
                        this.config.bufferLength,
                        this.config.numberOfChannels,
                        this.config.numberOfChannels
                      )),
                      (this.encoderNode.onaudioprocess = function (t) {
                        var o = t.inputBuffer
                        return e.encodeBuffers(o)
                      }),
                      this.encoderNode.connect(this.audioContext.destination),
                      (this.encoder = new t.Worker(this.config.encoderPath)))
                }),
                (n.prototype.initSourceNode = function () {
                  var e = this
                  return this.config.sourceNode.context
                    ? ((this.sourceNode = this.config.sourceNode), Promise.resolve())
                    : t.navigator.mediaDevices
                        .getUserMedia({ audio: this.config.mediaTrackConstraints })
                        .then(function (t) {
                          ;(e.stream = t),
                            (e.sourceNode = e.audioContext.createMediaStreamSource(t))
                        })
                }),
                (n.prototype.initWorker = function () {
                  var e = this,
                    t = (this.config.streamPages ? this.streamPage : this.storePage).bind(this)
                  return (
                    (this.recordedPages = []),
                    (this.totalLength = 0),
                    new Promise(function (o) {
                      e.encoder.addEventListener('message', function n(i) {
                        var r = i.data
                        switch (r.message) {
                          case 'ready':
                            o()
                            break
                          case 'page':
                            ;(e.encodedSamplePosition = r.samplePosition), t(r.page)
                            break
                          case 'done':
                            e.encoder.removeEventListener('message', n), e.finish()
                        }
                      }),
                        e.encoder.start && e.encoder.start()
                      var n = e.config,
                        i =
                          (n.sourceNode,
                          (function (e, t) {
                            if (null == e) return {}
                            var o,
                              n,
                              i = (function (e, t) {
                                if (null == e) return {}
                                var o,
                                  n,
                                  i = {},
                                  r = Object.keys(e)
                                for (n = 0; n < r.length; n++)
                                  (o = r[n]), t.indexOf(o) >= 0 || (i[o] = e[o])
                                return i
                              })(e, t)
                            if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e)
                              for (n = 0; n < r.length; n++)
                                (o = r[n]),
                                  t.indexOf(o) >= 0 ||
                                    (Object.prototype.propertyIsEnumerable.call(e, o) &&
                                      (i[o] = e[o]))
                            }
                            return i
                          })(n, ['sourceNode']))
                      e.encoder.postMessage(
                        Object.assign(
                          {
                            command: 'init',
                            originalSampleRate: e.audioContext.sampleRate,
                            wavSampleRate: e.audioContext.sampleRate,
                          },
                          i
                        )
                      )
                    })
                  )
                }),
                (n.prototype.initWorklet = function () {
                  return this.audioContext.audioWorklet
                    ? this.audioContext.audioWorklet.addModule(this.config.encoderPath)
                    : Promise.resolve()
                }),
                (n.prototype.pause = function (e) {
                  var t = this
                  if ('recording' === this.state)
                    return (
                      (this.state = 'paused'),
                      this.recordingGainNode.disconnect(),
                      e && this.config.streamPages
                        ? new Promise(function (e) {
                            t.encoder.addEventListener('message', function o(n) {
                              'flushed' === n.data.message &&
                                (t.encoder.removeEventListener('message', o), t.onpause(), e())
                            }),
                              t.encoder.start && t.encoder.start(),
                              t.encoder.postMessage({ command: 'flush' })
                          })
                        : (this.onpause(), Promise.resolve())
                    )
                }),
                (n.prototype.resume = function () {
                  'paused' === this.state &&
                    ((this.state = 'recording'),
                    this.recordingGainNode.connect(this.encoderNode),
                    this.onresume())
                }),
                (n.prototype.setRecordingGain = function (e) {
                  ;(this.config.recordingGain = e),
                    this.recordingGainNode &&
                      this.audioContext &&
                      this.recordingGainNode.gain.setTargetAtTime(
                        e,
                        this.audioContext.currentTime,
                        0.01
                      )
                }),
                (n.prototype.setMonitorGain = function (e) {
                  ;(this.config.monitorGain = e),
                    this.monitorGainNode &&
                      this.audioContext &&
                      this.monitorGainNode.gain.setTargetAtTime(
                        e,
                        this.audioContext.currentTime,
                        0.01
                      )
                }),
                (n.prototype.start = function () {
                  var e = this
                  return 'inactive' === this.state
                    ? ((this.state = 'loading'),
                      (this.encodedSamplePosition = 0),
                      this.audioContext
                        .resume()
                        .then(function () {
                          return e.initialize
                        })
                        .then(function () {
                          return Promise.all([e.initSourceNode(), e.initWorker()])
                        })
                        .then(function () {
                          ;(e.state = 'recording'),
                            e.encoder.postMessage({ command: 'getHeaderPages' }),
                            e.sourceNode.connect(e.monitorGainNode),
                            e.sourceNode.connect(e.recordingGainNode),
                            e.monitorGainNode.connect(e.audioContext.destination),
                            e.recordingGainNode.connect(e.encoderNode),
                            e.onstart()
                        })
                        .catch(function (t) {
                          throw ((e.state = 'inactive'), t)
                        }))
                    : Promise.resolve()
                }),
                (n.prototype.stop = function () {
                  var e = this
                  return 'paused' === this.state || 'recording' === this.state
                    ? ((this.state = 'inactive'),
                      this.recordingGainNode.connect(this.encoderNode),
                      this.monitorGainNode.disconnect(),
                      this.clearStream(),
                      new Promise(function (t) {
                        e.encoder.addEventListener('message', function o(n) {
                          'done' === n.data.message &&
                            (e.encoder.removeEventListener('message', o), t())
                        }),
                          e.encoder.start && e.encoder.start(),
                          e.encoder.postMessage({ command: 'done' })
                      }))
                    : Promise.resolve()
                }),
                (n.prototype.storePage = function (e) {
                  this.recordedPages.push(e), (this.totalLength += e.length)
                }),
                (n.prototype.streamPage = function (e) {
                  this.ondataavailable(e)
                }),
                (n.prototype.finish = function () {
                  if (!this.config.streamPages) {
                    var e = new Uint8Array(this.totalLength)
                    this.recordedPages.reduce(function (t, o) {
                      return e.set(o, t), t + o.length
                    }, 0),
                      this.ondataavailable(e)
                  }
                  this.onstop()
                }),
                (n.prototype.ondataavailable = function () {}),
                (n.prototype.onpause = function () {}),
                (n.prototype.onresume = function () {}),
                (n.prototype.onstart = function () {}),
                (n.prototype.onstop = function () {}),
                (e.exports = n)
            }).call(this, o(1))
          },
          function (e, t) {
            var o
            o = (function () {
              return this
            })()
            try {
              o = o || new Function('return this')()
            } catch (e) {
              'object' == typeof window && (o = window)
            }
            e.exports = o
          },
        ]))
    },
  },
])
//# sourceMappingURL=1161.3d89c0a7ac3a20fdd5b7.js.map
