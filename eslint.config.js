
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**'
    ]
  },

  {
    files: ['src/**/*.js', 'vite.config.js', 'eslint.config.js'],

    plugins: {
      js
    },

    extends: ['js/recommended'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn'
    }
  }
]);
