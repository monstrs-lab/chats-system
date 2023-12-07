;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [4747],
  {
    4998: (e) => {
      e.exports = function (e) {
        const n = { className: 'number', begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/ }
        return {
          name: 'Apache config',
          aliases: ['apacheconf'],
          case_insensitive: !0,
          contains: [
            e.HASH_COMMENT_MODE,
            {
              className: 'section',
              begin: /<\/?/,
              end: />/,
              contains: [
                n,
                { className: 'number', begin: /:\d{1,5}/ },
                e.inherit(e.QUOTE_STRING_MODE, { relevance: 0 }),
              ],
            },
            {
              className: 'attribute',
              begin: /\w+/,
              relevance: 0,
              keywords: {
                _: [
                  'order',
                  'deny',
                  'allow',
                  'setenv',
                  'rewriterule',
                  'rewriteengine',
                  'rewritecond',
                  'documentroot',
                  'sethandler',
                  'errordocument',
                  'loadmodule',
                  'options',
                  'header',
                  'listen',
                  'serverroot',
                  'servername',
                ],
              },
              starts: {
                end: /$/,
                relevance: 0,
                keywords: { literal: 'on off all deny allow' },
                contains: [
                  { className: 'meta', begin: /\s\[/, end: /\]$/ },
                  {
                    className: 'variable',
                    begin: /[\$%]\{/,
                    end: /\}/,
                    contains: ['self', { className: 'number', begin: /[$%]\d+/ }],
                  },
                  n,
                  { className: 'number', begin: /\b\d+/ },
                  e.QUOTE_STRING_MODE,
                ],
              },
            },
          ],
          illegal: /\S/,
        }
      }
    },
  },
])
//# sourceMappingURL=4747.6721b86b7a387645ba38.js.map
