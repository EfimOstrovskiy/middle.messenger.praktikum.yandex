[![Netlify Status](https://api.netlify.com/api/v1/badges/145e31c3-3c8b-4fc6-a0e8-fd088c29602d/deploy-status)](https://app.netlify.com/sites/stunning-sunshine-f7ae9b/deploys)

# Netlify
### https://stunning-sunshine-f7ae9b.netlify.app

# Figma
### https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=1%3A498&t=wm2Cd0HS7oAbkzvN-0


## `npm run dev`

Команда для запуска приложения в dev-режиме.
Все изменения обновляются в `runtime`

## `npm run build`

Команда для выполнения сборки приложения.
Итоговая сборкка находится в папке `/dist`

## `npm run start`

Команда для выполнения сборки приложения, а также запуска сервера.
Итоговая сборкка находится в папке `/dist`, сервер `localhost` запуститься на порту `3000`

## `LiteComponent`

Шаблонизатор создный для данного приложения. В первой итерации
имеет возможность анализировать шаблон для поиска и формировании `props`,
а также формирования готовой `node` для встраивания в `DOM-дерево`

## `Component и EventBus`

Добавлено два базовых класса `Component` и `EventBus`. Данные классы
позволяют сделать ранее реализованные компоненты реактивными, а также
взаимодействовать с ними, с применением принципа жизненного цикла компонентов
