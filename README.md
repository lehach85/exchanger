# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Описание проекта

Необходимо разработать веб-приложение для отображения статистики на основе данных, полученных через REST API. Приложение должно иметь несколько страниц, между которыми можно переключаться с помощью роутера. Кроме того, на одной из страниц приложения необходимо отображать график с помощью библиотеки Highcharts.

### Требования к реализации

1. Приложение должно быть написано на React.
2. Данные для отображения статистики должны получаться через REST API. API для получения данных можно выбрать любое, например, можно использовать API Github для получения информации о проектах и их статистике.
3. Для навигации между страницами приложения необходимо использовать роутер. Можно использовать стандартный роутер React или любой другой подходящий роутинг-пакет (например, React Router).
4. На одной из страниц приложения необходимо отобразить график с помощью библиотеки Highcharts. График должен отображать какую-либо статистику, полученную через REST API. Вид, тип и цвета графика можно выбрать самостоятельно.
5. Приложение должно быть адаптивным и корректно отображаться на разных устройствах.
6. Приложение должно упаковываться в Docker контейнер.
7. В корневой папке проекта должен быть файл Dockerfile, который содержит все необходимые инструкции для сборки и запуска контейнера.
8. Для запуска контейнера должен быть описан скрипт в файле package.json.
