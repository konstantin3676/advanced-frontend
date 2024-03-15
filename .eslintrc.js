module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
  ],
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
  plugins: ['react', 'i18next'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-deprecated': 'off',
    'react/display-name': 'off',
    'n/handle-callback-err': 'off',
    'multiline-ternary': 'off',
  },
};
