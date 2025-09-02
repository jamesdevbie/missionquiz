type QUESTION_TYPE = {
  question: string
  answerOptions: string[]
  answer: string
  category: string
  set: number
  type: string
  image?: string
}

const QUESTION_LIST: QUESTION_TYPE[] = [
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'ஆதி',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if Tamil Nadu?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'Chennai',
    category: 'ஆதி',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'ஆதி',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'ஆதி',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if Pakistan?',
    answerOptions: ['Islamabad', 'Karachi', 'Lahore', 'Peshawar'],
    answer: 'Islamabad',
    category: 'ஆதி',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'ஆதி',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'ஆதி',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if India?',
    answerOptions: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi',
    category: 'ஆதி',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if Srilanka?',
    answerOptions: ['Colombo', 'Kandy', 'Galle', 'Jaffna'],
    answer: 'Colombo',
    category: 'ஆதி',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the capital if Nepal?',
    answerOptions: ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur'],
    answer: 'Kathmandu',
    category: 'ஆதி',
    set: 1,
    type: 'multiple-choice',
  },

  {
    question: 'What is the largest planet in our solar system?',
    answerOptions: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
    category: 'சங்கீ',
    set: 1,
    type: 'multiple-choice',
  },
  // need 10 more சங்கீ category questions
  {
    question: 'What is the closest planet to the Sun?',
    answerOptions: ['Venus', 'Earth', 'Mercury', 'Mars'],
    answer: 'Mercury',
    category: 'சங்கீ',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the third planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Earth',
    category: 'சங்கீ',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fourth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
    category: 'சங்கீ',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fifth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Jupiter',
    category: 'சங்கீ',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answerOptions: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
    category: 'சங்கீ',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the third planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Earth',
    category: 'சங்கீ',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fourth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
    category: 'சங்கீ',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fifth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Jupiter',
    category: 'சங்கீ',
    set: 1,
    type: 'multiple-choice',
  },
  {
    question: 'What is the second planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Venus',
    category: 'சங்கீ',
    set: 2,
    type: 'multiple-choice',
  },
  {
    question: 'What is the third planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Earth',
    category: 'சங்கீ',
    set: 3,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fourth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
    category: 'சங்கீ',
    set: 4,
    type: 'multiple-choice',
  },
  {
    question: 'What is the fifth planet from the Sun?',
    answerOptions: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Jupiter',
    category: 'சங்கீ',
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
    category: 'சங்கீ',
    set: 5,
    type: 'multiple-choice',
  },
  //need more questions in Tamil language
  {
    question: 'என்ன வசனம் என்று கண்டுபிடி ?',
    answerOptions: ['சென்னை', 'மும்பை', 'டெல்லி', 'கொல்கத்தா'],
    answer:
      'சங்கீதம் :20:7 சிலர் இரதங்களைக் குறித்தும், சிலர் குதிரைகளைக் குறித்தும் மேன்மை பாராட்டுகிறார்கள். நாங்களோ எங்கள் தேவனாகிய கர்த்தருடைய நாமத்தைக் குறித்தே மேன்மை பாராட்டுவோம்.',
    category: 'ஆதி',
    image: 'connection1.jpg',
    set: 1,
    type: 'connection',
  },
]

export const சங்கீ_IMAGE =
  'https://unicminds.com/wp-content/uploads/2024/03/Riddles-UnicMinds-1016x1024.webp'

export { QUESTION_LIST }
export type { QUESTION_TYPE }
