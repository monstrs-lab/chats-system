;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1360],
  {
    42012: (e) => {
      e.exports = function (e) {
        return {
          name: 'Clojure REPL',
          contains: [
            {
              className: 'meta.prompt',
              begin: /^([\w.-]+|\s*#_)?=>/,
              starts: { end: /$/, subLanguage: 'clojure' },
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=1360.e7ac69c602ae84d8ea85.js.map
