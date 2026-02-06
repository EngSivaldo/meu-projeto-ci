import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node, // Reconhece 'module', 'require', etc.
        ...globals.jest, // Reconhece 'test', 'expect', etc.
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
