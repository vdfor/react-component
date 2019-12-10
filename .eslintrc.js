module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    extraFileExtensions: ['tsx', 'ts'],
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'import/extensions': ['error', 'always', { ts: 'never', tsx: 'never', js: 'never' }],
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'linebreak-style': ['off', 'error', 'windows'],
    'max-len': ['error', 200],
    'no-console': ['off'],
    'no-constant-condition': ['off'],
    'no-restricted-imports': [
      'error',
      {
        paths: [{
          name: 'styled-components',
          message: 'Please import from styled-components/macro.',
        }],
        patterns: [
          '!styled-components/macro',
        ],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['ts', 'tsx'] }],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.json', '.js'],
      },
    },
  },
};
