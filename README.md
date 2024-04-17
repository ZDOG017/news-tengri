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

## Этапы и Методологии Разработки

### 1. Выбор Технологий

Для реализации проекта были выбраны следующие технологии:

- **Vite и React**: использованы для разработки фронтенда за их производительность и удобство использования.
- **Axios**: применен для выполнения HTTP-запросов к API, что обеспечивает эффективное взаимодействие с сервером.

### 2. Модульная Разработка

Каждый компонент новостной ленты был разработан как отдельный модуль, что упрощает масштабирование и поддержку кода.

### 3. Использование Компонентной Архитектуры

Использование React позволило построить приложение с переиспользуемыми компонентами, обеспечивая гибкость и легкость внесения изменений.

### 4. Тестирование и Отладка

Проведение тестов и отладка были выполнены для гарантии корректной работы всех компонентов приложения, включая пользовательский интерфейс, взаимодействие с API и обработку ошибок.

### 5. Роутинг

Использование `react-router-dom` для управления навигацией в приложении позволяет эффективно организовать переходы между различными страницами без перезагрузки, что улучшает пользовательский опыт.

# Примеры Кода

## 1. Выбор Технологий

### Использование Axios для HTTP-запросов
```jsx
import axios from 'axios';
// Базовый URL и ключ API из переменных окружения для запросов к API
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// Пример функции для получения списка новостей
export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  id,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        id
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
```
## 2. Модульная разработка
Пример кода из NewsItem.jsx:
```jsx
import React from 'react';
import { Card } from 'semantic-ui-react';

const NewsItem = ({ title, description, imageUrl, newsUrl }) => (
  <Card
    image={imageUrl}
    header={title}
    description={description}
    href={newsUrl}
    target="_blank"
  />
);

export default NewsItem;
```

Этот компонент представляет собой отдельный модуль новостной ленты, который используется для отображения конкретной новости. Модульная разработка позволяет переиспользовать NewsItem в различных частях приложения, упрощая поддержку и расширение функционала.

## 3. Использование компонентной архитектуры
Пример кода из NewsList.jsx:
```jsx
import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => (
  <div>
    {news.map(item => (
      <NewsItem key={item.id} {...item} />
    ))}
  </div>
);

export default NewsList;
```

NewsList является компонентом, который использует NewsItem для создания списка новостей. Это показывает, как компонентная архитектура способствует созданию переиспользуемых и модульных компонентов, которые могут быть легко собраны в более крупные единицы.

## 4. Тестирование и отладка
Для тестирования и отладки в проекте используются инструменты разработчика и возможности логирования ошибок, как показано в обработке ошибок в функции getNews. Тестирование пользовательского интерфейса, взаимодействия с API и обработка ошибок критически важны для убеждения в надёжности и стабильности приложения.

## 5. Роутинг
Роутинг в приложении React обычно реализуется с помощью библиотеки react-router-dom, которая позволяет управлять навигацией между различными компонентами без перезагрузки страницы. Это способствует созданию пользовательского интерфейса, который ведет себя как одностраничное приложение (SPA).

Пример кода для роутинга:
```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';
import Categories from './Categories';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={NewsList} />
      <Route path="/news/:id" component={NewsDetail} />
      <Route path="/categories" component={Categories} />
    </Switch>
  </Router>
);
```
В этом примере Router оборачивает все компоненты навигации. Switch используется для выбора между маршрутами в зависимости от URL, который соответствует одному из Route. Каждый Route связывает путь URL с компонентом, который будет отображаться при переходе по этому пути.

/ – корневой путь, который отображает список всех новостей (NewsList).
/news/:id – детальный просмотр новости, где :id является переменной, представляющей идентификатор конкретной новости. Компонент NewsDetail использует этот идентификатор для отображения подробной информации о новости.
/categories – путь для отображения списка доступных категорий новостей в компоненте Categories.
Такой подход позволяет эффективно управлять различными разделами приложения, предоставляя пользователям плавный и интуитивно понятный опыт навигации.

# Лицензия

Этот проект лицензирован по лицензии MIT. Это означает, что вы можете свободно использовать, копировать, модифицировать и распространять этот код, при условии включения оригинального уведомления о лицензии и авторских прав в любых копиях или значимых частях кода.

Для более подробной информации см. файл `LICENSE` включенный в этот проект.

## Текст лицензии MIT

```text
MIT License

Copyright (c) 2024 Soltan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
