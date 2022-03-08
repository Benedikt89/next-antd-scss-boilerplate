# frontend next

## Directory structure

### Level 1

```sh
content
  └── locales
     └── langCode.json

styles
   ├── _typography.less
   ├── and-css-variables.less
   ├── antd-variables.less
   └── globals.less

src
├── pages
│   ├── _app
│   ├── _error
│   │   └── [slug].tsx
│   ├── business
│   │   └── [slug].tsx
│   └── other domain...
│       └── [slug].tsx
├── redux
│   ├── redux.ts
│   ├── fetchHandler.ts
│   ├── app
│   │   ├── api
│   │   ├── actions
│   │   ├── reducer
│   │   └── selector
│   └── other domain...
│       ├── api
│       ├── actions
│       ├── reducer
│       └── selector
├── interfaces
│   └── other domain.ts
├── features
│   └── oter domain
│       ├── Component.tsx
│       └── component.module.less
└── components
    ├── component
    │   ├── Component.tsx
    │   └── component.module.less
    └── otherComponent
        ├── Component
        └── component.module.less
```


### Level 2

Redux structure by domain:

- `api` – services to fetch data; used by thunks in `actions`
- `actions` – action definitions, creators and thunks related to the domain;
- `selectors` – selectors from store related to the domain;
- `reducer` – data storing and transforming


Pages structure by domain:
- `index` – display page structure
- `page_name.module.scss` – styles for page;


Features structure by domain:
- `index` – display service with related data management
- `feature_name.module.scss` – styles for feature;
- `hooks` – common hooks

Above directories may group files into further subdirectories to group related functionalities.
However, subdirectory depth should not exceed 1 more level, with exception to route indexes paths,
that should follow URL pathname for easier file navigation.

## Environment variables

### Build

| name                   | description                                                     |
|------------------------|-----------------------------------------------------------------|
| `NEXT_PUBLIC_BASE_URL` | Base URL to front                                               |
| `NEXT_PUBLIC_ENV`      | Used to indicate deployment environment, defaults to `development` |


## Running

    yarn dev

### Commit messages

Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/).


### Coding style

Code is styled automatically using [prettier](https://prettier.io/) on each commit.

If you have not done this already, please make sure to configure your repository before you start commiting by running:

    yarn prepare

You can format your code manually by running:

    yarn format


#### Organizing imports

```js
// import from node_modules first
import Dependency from "dependency";
// * leave blank line *
// import from project using absolute path, base dir is parent of `src` directory
import AbsolutePath from "@Components/absolute/path";
// * leave blank line *
// import from project using relative path
import RelativePath from "../relative/path";
// * leave blank line *
// import styles last using relative path
import styles from "../relative/styles";
```


# Next JS App

This project was bootstrapped with [Next.js](https://nextjs.org/docs).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any errors in the console.


---
id: routing
title: Routing
sidebar_label: Routing
---


Routing is automatically handled by the Next.js. By default, Next.js will serve each file in `/pages` with a pathname matching the filename. Subfolders with index files under `/pages` directory are also supported and it's the preferred way in the boilerplate.
<br>

```sh
pages/business/[slug].tsx
pages/{yourAwesomePage}/[slug].tsx
```

*According to the above directory structure, file and folder names are defined as routes.*
*Note that `/home` routes to `/` as default and can be changed in `server/routes.ts`*

```sh
pages/business -> / or /business
pages/{yourAwesomePage} -> /{yourAwesomePage}
```

You may add custom routings to your app by using the `server/routes.ts`

### API Routing

API Routes can be implemented using [Next.js built-in API Routes](https://nextjs.org/docs/api-routes/introduction). An example is present in `/page/api/health-check.ts`.
