;(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([
  [5066],
  {
    84802: (e) => {
      e.exports = function (e) {
        const n = {
            keyword: ['rec', 'with', 'let', 'in', 'inherit', 'assert', 'if', 'else', 'then'],
            literal: ['true', 'false', 'or', 'and', 'null'],
            built_in: [
              'import',
              'abort',
              'baseNameOf',
              'dirOf',
              'isNull',
              'builtins',
              'map',
              'removeAttrs',
              'throw',
              'toString',
              'derivation',
            ],
          },
          a = { className: 'subst', begin: /\$\{/, end: /\}/, keywords: n },
          s = {
            className: 'string',
            contains: [{ className: 'char.escape', begin: /''\$/ }, a],
            variants: [
              { begin: "''", end: "''" },
              { begin: '"', end: '"' },
            ],
          },
          t = [
            e.NUMBER_MODE,
            e.HASH_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            s,
            {
              begin: /[a-zA-Z0-9-_]+(\s*=)/,
              returnBegin: !0,
              relevance: 0,
              contains: [{ className: 'attr', begin: /\S+/, relevance: 0.2 }],
            },
          ]
        return (a.contains = t), { name: 'Nix', aliases: ['nixos'], keywords: n, contains: t }
      }
    },
  },
])
//# sourceMappingURL=5066.312689f7482fa73676f8.js.map
