# Тестовое задание

### Описание проекта

Веб-приложение для отображения статистики по валютам

### Требования к реализации

1. Приложение реализовано на React+TS. Сборщик Vite.
2. Для получения данных по валютам изпользуется API CryptoCompare (https://min-api.cryptocompare.com/documentation). 
3. Для навигации между страницами приложения используется React Router.
4. Для отображения графика используется библиотека Highcharts.
5. Приложение имеет адаптивный дизайн, подход mobile first
6. Приложение упаковано в Docker контейнер. В корневой папке проекта находиться файл Dockerfile, который содержит все необходимые инструкции для сборки и запуска контейнера.

### Запуск проекта

- npm install - уставновка пакетов
- npm run dev - запуск проекта
- открываем приложение в браузере по адресу http://localhost:3000/

### Особенности сборки
- Node 20.7.0
- Vite 4.4.5
- TS 5.0.2
- React 18.2.0
- React router 6.16.0
- Архитектура по методологии FSD (https://feature-sliced.design/ru/docs)
- Highcharts (11.1.0) & highcharts-react-official (3.2.1)
