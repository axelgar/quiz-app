# Roadmap

## Setup project (100%)

- Add dev tools
  - Prettier
  - ESlint
  - Typescript
  - Tailwind
  - Commit automations (husky,lint-stage)
  - Scripts

## Components (60%)

- QuestionComponent

  - <MultipleQuestion />
  - <BooleanQuestion />
  - <TextQuestion />
  - <QuestionContainer>
  - <QuestionCounter>
  - <Pager>

- QuestionType 'multiple' | 'boolean' | 'text'

- QuestionsMap
  Map<QuestionType, QuestionComponent>

- Games provider as global state (80%)

  - <GameProvider />
  - nextQuestion
  - previousQuestion
  - resetGame
  - currentQuestion
  - isEnd <= Use status at the end, they need to be exclusive

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
