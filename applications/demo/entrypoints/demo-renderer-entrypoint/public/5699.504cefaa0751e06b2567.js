;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [5699],
  {
    25850: (e) => {
      e.exports = function (e) {
        return {
          name: 'Julia REPL',
          contains: [
            {
              className: 'meta.prompt',
              begin: /^julia>/,
              relevance: 10,
              starts: { end: /^(?![ ]{6})/, subLanguage: 'julia' },
            },
          ],
          aliases: ['jldoctest'],
        }
      }
    },
  },
])
//# sourceMappingURL=5699.504cefaa0751e06b2567.js.map
