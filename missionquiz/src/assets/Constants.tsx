type QUESTION_TYPE = {
  question: string
  answerOptions: string[]
  answer: string
  category: string
  set: number
}

const QUESTION_LIST: QUESTION_TYPE[] = [
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 1,
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 2,
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 3,
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 4,
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 1,
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 2,
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 3,
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 4,
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 1,
  },

  {
    question: 'What is the largest planet in our solar system?',
    answerOptions: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
    category: 'Astronomy',
    set: 2,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answerOptions: [
      'Harper Lee',
      'Mark Twain',
      'Ernest Hemingway',
      'F. Scott Fitzgerald',
    ],
    answer: 'Harper Lee',
    category: 'Literature',
    set: 3,
  },
  {
    question: 'What is the chemical symbol for water?',
    answerOptions: ['H2O', 'CO2', 'O2', 'NaCl'],
    answer: 'H2O',
    category: 'Science',
    set: 4,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
    category: 'Astronomy',
    set: 5,
  },
  //need more questions from astronomy and geography
]

export const ASTRONOMY_IMAGE =
  'https://unicminds.com/wp-content/uploads/2024/03/Riddles-UnicMinds-1016x1024.webp'

export { QUESTION_LIST }
export type { QUESTION_TYPE }
