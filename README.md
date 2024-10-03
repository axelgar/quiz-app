# Cint UI Team Take Home Assessment 🏠

## Introduction

This is my solution for the Cint UI home assessment test.

## How to run the app

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run dev mode:

   ```bash
   npm run dev
   ```

3. Visit http://localhost:5173 and you should see the app up and running 🎉

## Solution

I tried to implement first a very simple solution to have the essential requirements and then build on top with features I think can be useful for the experience and some refactors along the way. I've been trying to do it as I would approach any project so I tried to document my thoughts/ideas in the [ROADMAP.md](./ROADMAP.md) file to help me along the way, also the git history might be useful.

## Scripts

`npm run lint`: Runs ESlint and checks that there are no linting errors

`npm run test`: Script to run the tests

`npm run format`: Script to fix all the code formatting using Prettier, it is run before every commit.

`npm run prepare`: Script to run the first time you clone the repository to prepare husky

## Stack used

I decided to go with a simple SPA with no framework (like Next.js) since it is a very simple application. And I decided to use Vite as it is the build tool recommended by the React team.

For the styles I decided to go with Tailwind since I am very used to it and it allows me to go quick for basic design layouts.

#### Tooling/DX

- [Vite](https://vite.dev/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/) / [lint-stage](https://github.com/lint-staged/lint-staged)

#### Tech

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)

#### Testing

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)

## Code/structure standards used

- Props destructuring always inside the component (when needed) and not in the params

  ```tsx
      const ComponentName = (props: Props) => {
          const {children, className, ...} = props
          // ...
      }
  ```

- Use always `index.ts` files to export only the public or code that needs to be used outside. If there is any import with a nested path it's a bad sign:

  - `import {ComponentName} from ../../components/ComponentName` ❌
  - `import {ComponentName} from ../../components` ✅

- Every component has to be inside a folder with required code like constants or utils and its tests.

## Possible next steps

- Show difficulty
- Keep track of questions already used and not repeat
- Evaluate if refactor to use pagination instead of one page
- Add persistent state (allowing rankings with users and nicknames)
- Add e2e tests (Playright?)
- Improve on ESlint rules / warn about the code standards
- Improve feedback on UI
  - Add confirmation modal if user is going to finish with not answered questions
  - Make pager buttons have hover visual feedback
