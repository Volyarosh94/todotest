module.exports = {
  root: true,
  env: {
    browser: 'true',
  },
  extends: [
    '@wemake-services/typescript/recommended',
    '@wemake-services/javascript',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
}
