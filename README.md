# Booking

![image under construction](https://ps.w.org/easy-under-construction/assets/banner-772x250.png?rev=2417171)

### [Storybook library](https://main--630fbaba720a6e9d6481a8d8.chromatic.com)

# Technical Stack

[![next js](public/made-with-next.js.svg)](https://nextjs.org)\
[![typescript](public/made-with-typescript.svg)](https://www.typescriptlang.org)\
[![redux](public/made-with-redux.svg)](https://redux.js.orgorg)\
[![redux](public/made-with-tailwindcss.svg)](https://tailwindcss.com/)\
[![atomic design system](public/made-with-storybook-atomic-design.svg)](https://bradfrost.com/blog/post/atomic-design-and-storybook/)

[//]: # ([![Deploy NextJs with Vercel Production]&#40;https://github.com/rhannachi/booking/actions/workflows/next-production.deploy.yml/badge.svg?branch=main&#41;]&#40;https://github.com/rhannachi/booking/actions/workflows/next-production.deploy.yml&#41;)

[//]: # ()
[//]: # ([![Deploy NextJs with Vercel Preview]&#40;https://github.com/rhannachi/booking/actions/workflows/next-development.deploy.yml/badge.svg?branch=development&#41;]&#40;https://github.com/rhannachi/booking/actions/workflows/next-development.deploy.yml&#41;)

[//]: # ()
[//]: # ([![Deploy Storybook with Chromatic]&#40;https://github.com/rhannachi/booking/actions/workflows/storybook.deploy.yml/badge.svg&#41;]&#40;https://github.com/rhannachi/booking/actions/workflows/storybook.deploy.yml&#41;)

#
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/bda46f072719446d80f0c402601d8a59)](https://www.codacy.com/gh/rhannachi/booking/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rhannachi/booking&amp;utm_campaign=Badge_Grade)\
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/rhannachi/booking.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/rhannachi/booking/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/rhannachi/booking.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/rhannachi/booking/alerts/)
[![Known Vulnerabilities](https://snyk.io/test/github/rhannachi/booking/badge.svg)](https://snyk.io/test/github/rhannachi/booking)

[![GitHub Workflows Actions](https://github.com/rhannachi/booking/actions/workflows/workflow.yml/badge.svg)](https://github.com/rhannachi/booking/actions/workflows/workflow.yml)\
[![codecov](https://codecov.io/gh/rhannachi/booking/branch/main/graph/badge.svg?token=1IOJYLLJC9)](https://codecov.io/gh/rhannachi/booking)


## Getting Started

To install MongoDB on macOS:
```bash
brew update
brew tap mongodb/brew
brew install mongodb-community@6.0
brew install mongosh
# start service
brew services start mongodb-community@6.0
# install mongodb-compass GUI
brew install mongodb-compass
```

Environment variables
```bash
touch .env
echo DB_URI=mongodb://localhost:27017/booking > .env
```

To start development locally:
```bash
yarn dev
```

To populate the database with data stored locally in the "mocks" folder:

```bash
curl --location --request POST 'http://localhost:3000/api/seeding/rooms' --header 'Accept: application/json'
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

```
src/
├── components
│   ├── Atoms
│   │   ├── Button
│   │   │   ├── Button.stories.tsx
│   │   │   └── Button.tsx
│   │   ├── Checkbox
│   │   └── Icon
│   │       ├── Icon.stories.tsx
│   │       ├── Icon.tsx
│   │       └── svgs
│   ├── Molecules
│   │   ├── Carousel
│   │   │   ├── Carousel.fixture.ts
│   │   │   ├── Carousel.stories.tsx
│   │   │   └── Carousel.tsx
│   │   ├── Loader
│   │   │   ├── Loader.stories.tsx
│   │   │   └── Loader.tsx
│   │   └── SearchField
│   │       ├── SearchField.stories.tsx
│   │       └── SearchField.tsx
│   ├── Organisms
│   │   ├── Card
│   │   │   ├── CardBooking.stories.tsx
│   │   │   ├── CardDefault.stories.tsx
│   │   │   ├── Card.fixtures.tsx
│   │   │   └── Card.tsx
│   │   ├── CardList
│   │   │   ├── CardListBooking.stories.tsx
│   │   │   ├── CardListDefault.stories.tsx
│   │   │   ├── CardList.fixtures.tsx
│   │   │   └── CardList.tsx
│   │   └── Toast
│   │       ├── Toast.fixtures.tsx
│   │       ├── Toast.stories.tsx
│   │       └── Toast.tsx
│   ├── Pages
│   │   └── Home
│   │       ├── Home.stories.tsx
│   │       └── Home.tsx
│   └── Templates
│       ├── Footer
│       │   ├── Footer.stories.tsx
│       │   └── Footer.tsx
│       ├── Header
│       │   ├── Header.stories.tsx
│       │   └── Header.tsx
│       └── Layout
│           ├── Layout.stories.tsx
│           └── Layout.tsx
├── containers
│   ├── helpers
│   │   └── home.mapper.tsx
│   └── Home.container.tsx
├── helpers
│   └── constants.ts
├── mocks
│   ├── fixtures
│   │   └── rooms.ts
│   └── http.ts
├── pages
│   ├── api
│   │   ├── room
│   │   │   └── [id].ts
│   │   ├── rooms
│   │   └── seeding
│   │       └── rooms
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── server
│   ├── config
│   │   └── env.ts
│   ├── controllers
│   │   └── room.ts
│   ├── factories
│   │   ├── apiError.ts
│   │   └── roomErrors.ts
│   ├── helpers
│   ├── middlewares
│   │   └── errors.ts
│   ├── repository
│   │   ├── db.ts
│   │   └── models
│   │       └── room.ts
│   ├── routes
│   └── services
│       └── room.ts
├── services
│   ├── http.ts
│   └── room.service.ts
├── shared
│   └── schemas
│       ├── errors.ts
│       ├── http.ts
│       └── room.ts
├── store
│   ├── room
│   │   ├── room.slice.ts
│   │   └── room.thunk.ts
│   ├── rootReducer.ts
│   └── store.ts
└── styles
    └── globals.scss
```


![Architecture](/assets/dependencies.png)