;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1967],
  {
    35112: (n) => {
      n.exports = function (n) {
        return {
          name: 'PHP template',
          subLanguage: 'xml',
          contains: [
            {
              begin: /<\?(php|=)?/,
              end: /\?>/,
              subLanguage: 'php',
              contains: [
                { begin: '/\\*', end: '\\*/', skip: !0 },
                { begin: 'b"', end: '"', skip: !0 },
                { begin: "b'", end: "'", skip: !0 },
                n.inherit(n.APOS_STRING_MODE, {
                  illegal: null,
                  className: null,
                  contains: null,
                  skip: !0,
                }),
                n.inherit(n.QUOTE_STRING_MODE, {
                  illegal: null,
                  className: null,
                  contains: null,
                  skip: !0,
                }),
              ],
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=1967.2f4c5706c2a55c17941a.js.map
