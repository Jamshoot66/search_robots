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
### Тестовые запросы
#### Google
| запрос | описание | результат |
| :--- | --- | --- |
| https://www.google.com/search?as_sitesearch=https://robots.sergeygorshkov.com&q=споры | статика | ✔ |
| https://www.google.com/search?as_sitesearch=https://robots.sergeygorshkov.com&q=великая | скрипт, 0сек | ✔ |
| https://www.google.com/search?as_sitesearch=https://robots.sergeygorshkov.com&q=рождаться | скрипт, 1сек | ✔ |
| https://www.google.com/search?as_sitesearch=https://robots.sergeygorshkov.com&q=вступиться | скрипт, 5сек | ✔ |
| https://www.google.com/search?as_sitesearch=https://robots.sergeygorshkov.com&q=бородой  | скрипт, 10сек | ❌ |

#### Yandex
| запрос | описание | результат |
| :--- | --- | --- |
| https://yandex.ru/search/?lr=51&text=споры%20site:https://robots.sergeygorshkov.com| статика | ✔ |
| https://yandex.ru/search/?lr=51&text=великая%20site:https://robots.sergeygorshkov.com| скрипт, 0сек | ❌ |

## Лог событий:
```bash 
3. 07.02.2020 Yandex проиндексировал только статический контент, скрипты проигнорированы.
2. 06.02.2020 Google проиндексирова и статический, и контент, сгенерированный скриптом в течение первых 5 секудн
1. 05.02.2020 23-00 Сайт создан и добавлен в поисковые консоли google и yandex
```

Проект сделан на [Create React App](https://github.com/facebook/create-react-app).

## Стандартные скрипты для сборки:

Старт локального сервера (хост на [http://localhost:3000](http://localhost:3000) )
### `npm start`

Сборка бандла; результат будет в папке `build`.
### `npm run build`
