import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
]);
