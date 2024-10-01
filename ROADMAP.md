# Roadmap

## Setup project

- Add dev tools
  - Prettier
  - ESlint
  - Typescript
  - Tailwind
  - Commit automations (husky,lint-stage)
  - Scripts

## Components

- QuestionComponent

  - <MultipleQuestion />
  - <BooleanQuestion />
  - <TextQuestion />

- QuestionType 'multiple' | 'boolean' | 'text'

- QuestionsMap
  Map<QuestionType, QuestionComponent>

- Games provider as global state

  - <GameProvider />
  - nextQuestion
  - previousQuestion
  - resetGame
  - currentQuestion
  - isEnd

- Question class

  - type
  - userAnswer
  - correctAnswer

- Final Score page

## Tests

- Vitest
- React testing library
