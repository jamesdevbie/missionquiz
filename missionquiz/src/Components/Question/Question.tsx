import { useEffect, useState } from 'react'
import useSetContext from '../../Context/UseSetContext'
import './Question.css'
import useSelectedSetContext from '../../Context/UseSelectedSet'
import { useNavigate } from 'react-router'

const Question = () => {
  const {
    setOne,
    setTwo,
    setThree,
    setFour,
    rightAnswerCount,
    setRightAnswerCount,
  } = useSetContext()
  const { selectedSet } = useSelectedSetContext()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [display, setDisplay] = useState('block')
  const [rightAnswer, setRightAnswer] = useState<string | null>(null)
  const [wrongAnswer, setWrongAnswer] = useState<string | null>(null)
  const [resultDisplay, setResultDisplay] = useState('none')

  useEffect(() => {}, [
    currentQuestion,
    setSelectedAnswer,
    rightAnswerCount,
    selectedAnswer,
  ])
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.setItem('rightAnswerCount', JSON.stringify(rightAnswerCount))
  }, [rightAnswerCount])

  const questionSet =
    selectedSet === 'set1'
      ? setOne
      : selectedSet === 'set2'
      ? setTwo
      : selectedSet === 'set3'
      ? setThree
      : setFour

  const answerOptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value)
    console.log(selectedAnswer)
    /*if (selectedAnswer === questionSet[currentQuestion]?.answer) {
      setUserAnswer({
        question: questionSet[currentQuestion],
        rightAnswer: questionSet[currentQuestion]?.answer,
        answer: selectedAnswer,
        result:
          selectedAnswer === questionSet[currentQuestion]?.answer
            ? `Thats the Right Answer - ${selectedAnswer}`
            : `That's wrong - The correct answer is ${questionSet[currentQuestion]?.answer}`,
      })
      console.log(userAnswer)
    } */
  }

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (currentQuestion === 0 || currentQuestion < 4) {
      setIsSubmitClicked(!isSubmitClicked)
    } else {
      setDisplay('none')
      setResultDisplay('block')
    }
    if (selectedAnswer === questionSet[currentQuestion]?.answer) {
      setRightAnswer(`Thats the Right Answer - ${selectedAnswer}`)
      setRightAnswerCount((prevCount) => prevCount + 1)
    } else {
      setWrongAnswer(
        `That's wrong - The correct answer is ${questionSet[currentQuestion]?.answer}`
      )
    }
  }

  const nextHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (currentQuestion === 0 || currentQuestion < 4) {
      setIsSubmitClicked(!isSubmitClicked)
      setCurrentQuestion(currentQuestion + 1)
      setRightAnswer(null)
      setWrongAnswer(null)
      setSelectedAnswer(null)
    }
  }

  // if (e.target.value === questionSet[currentQuestion]?.answer) {
  //   result = `<span> Thats the Right Answer</span>`
  // } else {
  //   result = `<span> That's wrong - The correct answer is ${questionSet[currentQuestion]?.answer}</span>`
  // }

  return (
    <div className="question">
      <div className="question-container">
        <form>
          <h3>
            {`${currentQuestion + 1}. `}
            {questionSet[currentQuestion]?.question}
          </h3>
          {questionSet[currentQuestion]?.answerOptions.map((option, index) => (
            <span key={index}>
              <input
                type="radio"
                id={`option-${index}`}
                name="answer"
                value={option}
                onChange={answerOptionHandler}
                checked={selectedAnswer === option}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </span>
          ))}

          <br></br>
          {rightAnswer && (
            <div className="right-result">
              <h2 className="right-answer">{rightAnswer} 😎😎</h2>
            </div>
          )}
          {wrongAnswer && (
            <div className="wrong-result">
              <h2 className="wrong-answer">{wrongAnswer} 😭😭😭</h2>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {!isSubmitClicked ? (
              <button onClick={submitHandler} style={{ display }}>
                Submit
              </button>
            ) : (
              <button onClick={nextHandler}>Next</button>
            )}
          </div>
          <div
            className="result"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <button
              style={{ display: resultDisplay }}
              onClick={(e) => {
                e.preventDefault()
                navigate('/result')
              }}
            >
              Result
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Question
