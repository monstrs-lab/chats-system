;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1641],
  {
    87061: (e) => {
      e.exports = function (e) {
        return {
          name: 'Backus–Naur Form',
          contains: [
            { className: 'attribute', begin: /</, end: />/ },
            {
              begin: /::=/,
              end: /$/,
              contains: [
                { begin: /</, end: />/ },
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
              ],
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=1641.479953981aeba31270a2.js.map
