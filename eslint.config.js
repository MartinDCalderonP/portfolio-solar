import astroPlugin from 'eslint-plugin-astro'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import tseslint from 'typescript-eslint'

const GENERAL_RULES = {
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-multiple-empty-lines': 'error',
  'no-nested-ternary': 'error'
}

const TS_SCOPE = { files: ['**/*.ts'] }

const TS_PARSER_OPTIONS = {
  parserOptions: {
    project: true,
    tsconfigRootDir: import.meta.dirname
  }
}

export default [
  {
    ignores: [
      '.astro',
      'coverage',
      'dist',
      'build',
      'node_modules',
      'public',
      'src/**/*.astro/**',
      '**/*.test.ts'
    ]
  },

  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    ...TS_SCOPE,
    languageOptions: {
      ...config.languageOptions,
      ...TS_PARSER_OPTIONS
    }
  })),

  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    ...TS_SCOPE
  })),

  { ...TS_SCOPE, rules: { ...GENERAL_RULES } },

  ...astroPlugin.configs['flat/recommended'],

  jsxA11yPlugin.flatConfigs.recommended,

  {
    rules: {
      'jsx-a11y/heading-has-content': 'off',
      'jsx-a11y/media-has-caption': 'off'
    }
  }
]
