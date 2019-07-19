module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    extraFileExtensions: ['tsx', 'ts'],
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  root: true,
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'comma-dangle': ['error', 'never'],
    "import/no-extraneous-dependencies": ["off"],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'linebreak-style': ['off', 'error', 'windows'],
    'max-len': ['error', 200],
    'no-console': ['off'],
    'no-constant-condition': ['off'],
    "no-restricted-imports": [
      "error",
      {
        "paths": [{
          "name": "styled-components",
          "message": "Please import from styled-components/macro."
        }],
        "patterns": [
          "!styled-components/macro"
        ]
      }
    ],
    "react-hooks/rules-of-hooks": ["error"],
    "react-hooks/exhaustive-deps": ["warn"],
    'react/jsx-filename-extension': ['error', { extensions: ['ts', 'tsx'] }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.json', '.js']
      }
    },
    'import/extensions': ['.ts', '.tsx', '.js']
  }
};
