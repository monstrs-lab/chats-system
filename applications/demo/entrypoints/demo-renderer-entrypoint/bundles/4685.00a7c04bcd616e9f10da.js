;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [4685],
  {
    8895: (e) => {
      e.exports = function (e) {
        return {
          name: 'Mojolicious',
          subLanguage: 'xml',
          contains: [
            { className: 'meta', begin: '^__(END|DATA)__$' },
            { begin: '^\\s*%{1,2}={0,2}', end: '$', subLanguage: 'perl' },
            {
              begin: '<%{1,2}={0,2}',
              end: '={0,1}%>',
              subLanguage: 'perl',
              excludeBegin: !0,
              excludeEnd: !0,
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=4685.00a7c04bcd616e9f10da.js.map
