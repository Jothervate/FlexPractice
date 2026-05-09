import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // 1. 基礎設定與環境變數
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'], // Vue 3 推薦配置
  skipPrettier, // 關閉與 Prettier 衝突的規則

  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 在這裡自定義你的規則
      'vue/multi-word-component-names': 'off', // 關閉元件名稱必須多單字限制 (視個人習慣)
      'no-unused-vars': 'warn',
      'no-console': 'warn', // console 設為 warn，不會阻止測試進行
      'vue/no-v-html': 'warn', // 防止 XSS 攻擊
      'vue/prefer-template': 'warn', // 建議使用模板字符串
    },
  },
];