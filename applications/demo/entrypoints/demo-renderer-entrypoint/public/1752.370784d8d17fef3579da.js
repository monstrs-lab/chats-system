;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1752],
  {
    23961: (e) => {
      e.exports = function (e) {
        return {
          name: 'Leaf',
          contains: [
            {
              className: 'function',
              begin: '#+[A-Za-z_0-9]*\\(',
              end: / \{/,
              returnBegin: !0,
              excludeEnd: !0,
              contains: [
                { className: 'keyword', begin: '#+' },
                { className: 'title', begin: '[A-Za-z_][A-Za-z_0-9]*' },
                {
                  className: 'params',
                  begin: '\\(',
                  end: '\\)',
                  endsParent: !0,
                  contains: [
                    { className: 'string', begin: '"', end: '"' },
                    { className: 'variable', begin: '[A-Za-z_][A-Za-z_0-9]*' },
                  ],
                },
              ],
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=1752.370784d8d17fef3579da.js.map
