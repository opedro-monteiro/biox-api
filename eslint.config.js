import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  // Config do ESLint
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['prettier'],
    extends: [
      ...compat.extends('@rocketseat/eslint-config/node'),
      'plugin:prettier/recommended', // <- ESSA LINHA IMPORTANTE
    ],
    rules: {
      // Garante que o prettier seja considerado um "problema" pelo eslint
      'prettier/prettier': 'warn',
    },
  },
])
