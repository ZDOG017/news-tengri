# NEWS TENGRI

## Оглавление

- [Установка и запуск](#установка-и-запуск)
- [Документация API](#документация-api)
- [Примеры кода](#примеры-кода)
- [Лицензия](#лицензия)

## Описание

Этот проект создан в рамках 2-го этапа тестирования в nFactorial Incubator. Целью проекта является разработка новостной ленты для веб-сайта. В рамках проекта были добавлены следующие функциональности:

- Категории новостей
- Отдельные страницы для просмотра новостей
- Отображение сегодняшней даты
- Пагинация
- Получение новостей с использованием API

## Установка и запуск

Для установки проекта на ваш компьютер выполните следующие шаги:

1. **Склонировать репозиторий**:
   Сначала вам нужно склонировать репозиторий с проектом на свой компьютер. Откройте терминал (или командную строку) и выполните следующую команду:

   ```bash
   git clone https://github.com/ZDOG017/news-tengri

   ```

2. **Перейти в директорию проекта**:
    Перейдите в директорию проекта, используя команду cd:
    ```bash
    cd news-tengri

    ```

3. **Установить зависимости**:
   После перехода в директорию проекта установите зависимости, выполнив команду:

   ```bash
   npm install
   ```
   В файле package.json уже прописаны зависимости проекта, поэтому вам не нужно устанавливать React, Vite, Axios и react-router-dom отдельно. Команда npm install, которую я упоминал в инструкции выше, автоматически установит все зависимости, указанные в разделах "dependencies" и "devDependencies" файла package.json.

4. **Запустить проект в режиме разработки**:
   После установки зависимостей можно запустить проект в режиме разработки. Для этого выполните команду:

   ```bash
   npm run dev
   ```
   Это запустит локальный сервер разработки, и ваш проект будет доступен по адресу http://localhost:3000 (будет написано в консоли).

5. **Использование**:
   После успешного запуска проекта вы сможете просматривать его в браузере. Внесите необходимые изменения в код и наблюдайте за результатами в реальном времени.

## Документация API

Currents API предоставляет доступ к последним новостям со всего мира. API сервиса обслуживается по следующему URL: https://api.currentsapi.services/v1/.

### Endpoint /latest-news

Этот эндпоинт предоставляет поток последних новостей со всего мира.

#### Пример запроса

GET /latest-news

```json
{
    "status": "ok",
    "news": [
        {
            "id": "e1749cf0-8a49-4729-88b2-e5b4d03464ce",
            "title": "US House speaker Nancy Pelosi backs congressional legislation on Hong Kong",
            "description": "US House speaker Nancy Pelosi on Wednesday threw her support behind legislation meant to back Hong Kong's anti-government protesters.Speaking at a news conference featuring Hong Kong activists Joshua Wong Chi-fung and Denise Ho, who testified before the Congressional-Executive Commission on China (C...",
            "url": "https://www.scmp.com/news/china/politics/article/3027994/us-house-speaker-nancy-pelosi-backs-congressional-legislation",
            "author": "Robert Delaney",
            "image": "None",
            "language": "en",
            "category": [
                "world"
            ],
            "published": "2019-09-18 21:08:58 +0000"
        },
        ...
    ]
}
```

### Endpoint /search

Этот эндпоинт позволяет выполнять поиск новостей по различным параметрам, таким как язык, категория, ключевые слова, дата публикации и т. д.

Пример запроса

GET /search

```json
{
    "status": "ok",
    "news": [
        {
            "id": "e1749cf0-8a49-4729-88b2-e5b4d03464ce",
            "title": "US House speaker Nancy Pelosi backs congressional legislation on Hong Kong",
            "description": "US House speaker Nancy Pelosi on Wednesday threw her support behind legislation meant to back Hong Kong's anti-government protesters.Speaking at a news conference featuring Hong Kong activists Joshua Wong Chi-fung and Denise Ho, who testified before the Congressional-Executive Commission on China (C...",
            "url": "https://www.scmp.com/news/china/politics/article/3027994/us-house-speaker-nancy-pelosi-backs-congressional-legislation",
            "author": "Robert Delaney",
            "image": "None",
            "language": "en",
            "category": [
                "world"
            ],
            "published": "2019-09-18 21:08:58 +0000"
        },
        ...
    ]
}
```