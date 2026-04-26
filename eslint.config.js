// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...storybook.configs["flat/recommended"],
  
  // ==========================================
  // AI DRIFT PREVENTION RULES (ADDED THIS)
  // ==========================================
  {
    files: ["src/**/*.{ts,tsx}"], // Only apply to YOUR code, not vendor/
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value.raw=/^#/]",
          message: "🚨 DRIFT ERROR: Raw HEX color detected. Use semantic Tailwind classes (e.g., bg-primary)."
        },
        {
          selector: "Literal[value.raw=/rgb\\(/]",
          message: "🚨 DRIFT ERROR: Raw RGB color detected. Use semantic Tailwind classes."
        },
        {
          selector: "Literal[value.raw=/dark:\\w/]",
          message: "🚨 DRIFT ERROR: Do not use 'dark:' prefix. Dark mode is handled by CSS variables."
        },
        {
          selector: "Literal[value.raw=/text-\\[\\d+px\\]/]",
          message: "🚨 DRIFT ERROR: Arbitrary text size detected. Use the type scale (text-xs, text-sm, etc.)."
        }
      ]
    }
  }
]);