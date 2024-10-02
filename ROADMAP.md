# Roadmap

## Setup project (100%)

- Add dev tools
  - Prettier
  - ESlint
  - Typescript
  - Tailwind
  - Commit automations (husky,lint-stage)
  - Scripts

## Components (20%)

- QuestionComponent

  - <MultipleQuestion />
  - <BooleanQuestion />
  - <TextQuestion />
  - <QuestionContainer> (has header, counter and button?) add back button?
  - <QuestionCounter>
  - How to show total of questions?

- QuestionType 'multiple' | 'boolean' | 'text'

- QuestionsMap
  Map<QuestionType, QuestionComponent>

- Games provider as global state (50%)

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

## Fetch data (100%)

- questions.json

## Tests

- Vitest
- React testing library

## State persistence

- Local Storage?
