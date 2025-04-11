import js from '@eslint/js'
import tailwindcss from 'eslint-plugin-tailwindcss'
import globals from 'globals'

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    plugins: {
      tailwindcss
    },
    rules: {
      'tailwindcss/classnames-order': 'warn'
    },

    ignores: [
      'public/**/*',
      '**/node_modules/**',
      'resources/**',
      'dist/**',
      'assets/**',
      'themes/opu/assets/**',
      'themes/opu/node_modules/**',
      '.husky/**',
      '.cache/**'
    ]
  }
]
