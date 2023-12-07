;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [4037],
  {
    5384: (t) => {
      t.exports = function (t) {
        return {
          name: 'Nested Text',
          aliases: ['nt'],
          contains: [
            t.inherit(t.HASH_COMMENT_MODE, { begin: /^\s*(?=#)/, excludeBegin: !0 }),
            {
              variants: [{ match: [/^\s*/, /-/, /[ ]/, /.*$/] }, { match: [/^\s*/, /-$/] }],
              className: { 2: 'bullet', 4: 'string' },
            },
            { match: [/^\s*/, />/, /[ ]/, /.*$/], className: { 2: 'punctuation', 4: 'string' } },
            {
              match: [/^\s*(?=\S)/, /[^:]+/, /:\s*/, /$/],
              className: { 2: 'attribute', 3: 'punctuation' },
            },
            {
              match: [/^\s*(?=\S)/, /[^:]*[^: ]/, /[ ]*:/, /[ ]/, /.*$/],
              className: { 2: 'attribute', 3: 'punctuation', 5: 'string' },
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=4037.531b832cd97d6daa1ae4.js.map
