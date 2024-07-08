import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules } from '@eslint/compat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.FlatConfig[]}*/
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },

  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  eslintPluginPrettierRecommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off', //'React' must be in scope when using JSX 
      'react/jsx-uses-react': 'off',
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      endOfLine: 'auto', //Delete `␍`
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
]
