# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Environment variables


### Использование переменных локально
Что бы использовать пременные окружения в приложении необходимо в проект добавить файл .env

Например:

```bash
NUXT_ENV_API_URL=https://test-api-url.com/
```

Файл .env должен быть добавлен в .gitignore
В тестовом окружении переменные в этом файле будут недоступны.

### Использование переменных в dev и prod окружениях

Переменные окружения доступные приложению в тестовых окружениях хранятся в **.helm/values.yaml**
Что бы добавить новую переменную необходмо в **.helm/values.yaml** для dev и prod веток добавить переменную(название произвольное)

![Alt text](https://syn.su/images/documentation/new-variable.png "New variable")

Далее в файле **.helm/_helpers.tpl** присваиваем значение из values

Например

```bash
- name: NUXT_ENV_API_URL
  value: "{{ $globals.apiUrl }}"
```

![Alt text](https://syn.su/images/documentation/helpers.png "New variable")

Далее добавляем в файле **.helm/cmd/app/entrypoint.sh** строку по аналогии с существующими

```bash
find ./ -type f -exec sed -i "s/BUILDTEMPLATE-NUXT-ENV-API-URL/${NUXT_ENV_API_URL//\//\\/}/g" {} \;
```

![Alt text](https://syn.su/images/documentation/entrypoint.png "New variable")

В проекте переменнные доступны как **process.env.NUXT_ENV_API_URL**
