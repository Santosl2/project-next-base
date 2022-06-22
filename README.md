[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)
[![Next.JS](https://img.shields.io/badge/NextJS-blue)](https://nextjs.org/)
[![React.js](https://img.shields.io/badge/-ReactJS-blue)](https://pt-br.reactjs.org/)
[![Typescript](https://img.shields.io/badge/-Typescript-blue)](https://www.typescriptlang.org/)

<div align="center">
    <h1 color="#ffff" >Boilerplate with Next JS, Typescript, ESlint, Prettier, Storybook, Testing Library, Styled Components and Husky</h1>
    </br>
</div>

- [Instalation](#instalation)
- [Project Structure Recomendation](#project-structure-recomendation)

# <strong>Instalation</strong>

Just clone this repo or use as a template and enjoy!
</br>

## Project Structure Recomendation

- src
  - components
    - Button/
      - Button.stories.tsx (Docs)
      - Button.styles.(ts) (Styles)
      - Button.tsx (Component)
      - Button.types.tsx (Interface/Types)
      - index.ts (Export Button.tsx)
  - pages (all Pages)
  - shared
    - hooks
      - use[Hook Name].ts (Ex.: useAuth.ts)
      - index.ts (export all hooks)
    - contexts
      - [ContextName]Context.tsx (Ex.: AuthContext.tsx)
    - services (API Call config)
    - tests
      - integration (Integration tests)
      - unit (Unit Tests)
      - utils (All utils to tests)

Thanks!
