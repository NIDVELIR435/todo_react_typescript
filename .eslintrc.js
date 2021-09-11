module.exports = {

   parser: '@typescript-eslint/parser',  // Указывает парсер ESLint

   extends: [

      'plugin:react/recommended',  // Использует рекомендуемые правила из @eslint-plugin-react

      'plugin:@typescript-eslint/recommended',  // Использует рекомендуемые правила из @typescript-eslint/eslint-plugin

   ],

   parserOptions: {

      ecmaVersion: 2018,  //Позволяет анализировать современные функции ECMAScript

      sourceType: 'module',  //Разрешает использование импорта

      ecmaFeatures: {

         jsx: true,  // Разрешает анализ JSX

      },

   },

   rules: {

      // Место для указания правил ESLint. Может использоваться для перезаписи правил, указанных в расширенных конфигах

      // например "@ typescript-eslint / явный-возвращаемый-тип-функции": "выкл.",

   },

   settings: {

      react: {

         version: 'detect',  // Указывает eslint-plugin-react автоматически определять версию React для использования

      },

   },

};