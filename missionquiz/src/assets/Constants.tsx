type QUESTION_TYPE = {
  question: string
  answerOptions: string[]
  answer: string
  category: string
  set: number
  type: string
}

const QUESTION_LIST: QUESTION_TYPE[] = [
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if Tamil Nadu?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'Chennai',
    category: 'Geography',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if Pakistan?',
    answerOptions: ['Islamabad', 'Karachi', 'Lahore', 'Peshawar'],
    answer: 'Islamabad',
    category: 'Geography',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'Geography',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if Srilanka?',
    answerOptions: ['Colombo', 'Kandy', 'Galle', 'Jaffna'],
    answer: 'Colombo',
    category: 'Geography',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if Nepal?',
    answerOptions: ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur'],
    answer: 'Kathmandu',
    category: 'Geography',
    set: 1,
    type: 'multiple-choice',
  },

  {
    question: 'What is the largest planet in our solar system?',
    answerOptions: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
    category: 'Astronomy',
    set: 1,
    type: 'multiple-choice',
  },
  // need 10 more astronomy category questions
  {
    question: 'What is the closest planet to the Sun?',
    answerOptions: ['Venus', 'Earth', 'Mercury', 'Mars'],
    answer: 'Mercury',
    category: 'Astronomy',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the third planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Earth',
    category: 'Astronomy',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fourth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
    category: 'Astronomy',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fifth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Jupiter',
    category: 'Astronomy',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answerOptions: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
    category: 'Astronomy',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the third planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Earth',
    category: 'Astronomy',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fourth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
    category: 'Astronomy',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fifth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Jupiter',
    category: 'Astronomy',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the second planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Venus',
    category: 'Astronomy',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the third planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Earth',
    category: 'Astronomy',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fourth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
    category: 'Astronomy',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fifth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Jupiter',
    category: 'Astronomy',
    set: 5,
    type: 'multiple-choice',
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
    type: 'multiple-choice',
  },
  {
    question: 'What is the chemical symbol for water?',
    answerOptions: ['H2O', 'CO2', 'O2', 'NaCl'],
    answer: 'H2O',
    category: 'Science',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
    category: 'Astronomy',
    set: 5,
    type: 'multiple-choice',
  },
  //need more questions in Tamil language
  {
    question: 'இந்தியாவின் தலைநகரம் எது?',
    answerOptions: ['சென்னை', 'மும்பை', 'டெல்லி', 'கொல்கத்தா'],
    answer: 'டெல்லி',
    category: 'Geography',
    set: 1,
    type: 'connection',
  },
]

export const ASTRONOMY_IMAGE =
  'https://unicminds.com/wp-content/uploads/2024/03/Riddles-UnicMinds-1016x1024.webp'

export { QUESTION_LIST }
export type { QUESTION_TYPE }
