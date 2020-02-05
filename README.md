# Эксперимент по оценке индексации контента, сгенерированного скриптом
Суть в том, чтобы проверить как в 2к20 поисковые роботы умеют понимать и инексировать js.

Тестовые случаи:
* статический текст
* текст, сгенерированный скриптом при первой возможности
* текст, сгенерированный через 0,5сек
* текст, сгенерированный через 1сек
* текст, сгенерированный через 5сек
* текст, сгенерированный через 10сек

## Адрес сайта:
https://robots.sergeygorshkov.com/

## Лог событий:
```bash 
1. 05.02.2020 23-00 Сайт создан и добавлен в поисковые консоли google и yandex
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
