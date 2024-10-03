# Roadmap

## Setup project (100%)

- Add dev tools
  - Prettier
  - ESlint
  - Typescript
  - Tailwind
  - Commit automations (husky,lint-stage)
  - Scripts

## Components (70%)

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

## Key Handler (100%)

- Create a hook to add a global event handler to manage basic actions
- Focus trap?

## Tests

- Vitest
- React testing library

## State persistence

- Local Storage?

## Notes
