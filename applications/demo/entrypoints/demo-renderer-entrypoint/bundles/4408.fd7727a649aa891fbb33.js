;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [4408],
  {
    13146: (e) => {
      e.exports = function (e) {
        return {
          name: 'FIX',
          contains: [
            {
              begin: /[^\u2401\u0001]+/,
              end: /[\u2401\u0001]/,
              excludeEnd: !0,
              returnBegin: !0,
              returnEnd: !1,
              contains: [
                {
                  begin: /([^\u2401\u0001=]+)/,
                  end: /=([^\u2401\u0001=]+)/,
                  returnEnd: !0,
                  returnBegin: !1,
                  className: 'attr',
                },
                {
                  begin: /=/,
                  end: /([\u2401\u0001])/,
                  excludeEnd: !0,
                  excludeBegin: !0,
                  className: 'string',
                },
              ],
            },
          ],
          case_insensitive: !0,
        }
      }
    },
  },
])
//# sourceMappingURL=4408.fd7727a649aa891fbb33.js.map
