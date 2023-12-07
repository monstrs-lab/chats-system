;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [1917],
  {
    43412: (e) => {
      e.exports = function (e) {
        const a = e.COMMENT(/\{/, /\}/, { contains: ['self'] })
        return {
          name: 'Parser3',
          subLanguage: 'xml',
          relevance: 0,
          contains: [
            e.COMMENT('^#', '$'),
            e.COMMENT(/\^rem\{/, /\}/, { relevance: 10, contains: [a] }),
            { className: 'meta', begin: '^@(?:BASE|USE|CLASS|OPTIONS)$', relevance: 10 },
            {
              className: 'title',
              begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$',
            },
            { className: 'variable', begin: /\$\{?[\w\-.:]+\}?/ },
            { className: 'keyword', begin: /\^[\w\-.:]+/ },
            { className: 'number', begin: '\\^#[0-9a-fA-F]+' },
            e.C_NUMBER_MODE,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=1917.c1085d26acb823245416.js.map
