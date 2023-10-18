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
    'import/no-absolute-path': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.js'],
};
