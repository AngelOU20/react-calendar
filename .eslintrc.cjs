module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: 'off',
    'import/no-absolute-path': 'off',
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off',
    'comma-dangle': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.js'],
};
