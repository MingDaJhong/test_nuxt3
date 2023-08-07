module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-scoped-var': 2,
    'block-spacing': [2, 'always'],
    'brace-style': 2,
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [2, { before: false, after: true }],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 2,
    curly: 2,
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'key-spacing': ['error', { mode: 'strict' }],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
    'no-console': 'off',
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-multi-spaces': 'error',
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-var': 2,
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    quotes: [2, 'single', 'avoid-escape'],
    'quote-props': [2, 'as-needed'],
    semi: [1, 'never'],
    'spaced-comment': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    indent: ['error', 2],
    'no-undef': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
