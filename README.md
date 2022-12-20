# Vice Media Group Portforlio

Live url:
[https://vice-2ef34.web.app/](https://vice-2ef34.web.app/)

[NextJS](http://nextjs.org) + [React](https://reactjs.org) + [Typescript](https://www.typescriptlang.org) + [Tailwind CSS](https://tailwindcss.com) + [Storybook](http://storybook.js.org) + [ESLint](https://eslint.org) + [Prettier](https://prettier.io) + [Husky](https://github.com/typicode/husky) + [Jest](https://jestjs.io) + [jest-dom (React Testing Library)](https://github.com/testing-library/jest-dom) + [Cypress](https://www.cypress.io)

## Initial setup:

1. Install the node.js
   https://nodejs.org/en/download/

2. Install the latest version of [pnpm package manager](https://pnpm.io/installation#using-npm)
   `npm install -g pnpm` or `brew install pnpm`

3. Install the dependencies
   `pnpm install && pnpm pre-commit:install`

## Running

`pnpm dev`

## Production build

`pnpm build`

To run the server with the production build:

`pnpm start`

## Testing

Live mode
`pnpm test`

E2E tests
`pnpm e2e`

Pre-commit checks
`pnpm pre-commit`

## Deploying to [Google Firebase](http://firebase.google.com):

Login:
`firebase login`

Deploy hosting and functions:
`firebase deploy`

## Design decisions

- [NextJS](https://nextjs.org) - React frameworks with Server Side Rendering and a lot of other features
- [Google Firebase](http://firebase.google.com) - The database and hosting from Google
- [Tailwind CSS](https://tailwindcss.com) + [PostCSS](http://postcss.org) for tree-shakable utility classes and minimum amount of hand-written CSS
- [ESLint](http://eslint.org) + [Prettier](http://prettier.io) for linting and prettifying the codeHusky for pre-commit hooks
- [Jest](https://jestjs.io) - Testing Framework with a focus on simplicity.
- [Cypress](http://cypress.io) + [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) for the end-to-end testing
