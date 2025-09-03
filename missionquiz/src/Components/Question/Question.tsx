import { useEffect, useState, useRef } from 'react'
import useSetContext from '../../Context/UseSetContext'
import './Question.css'
import useSelectedSetContext from '../../Context/UseSelectedSet'
import { useNavigate } from 'react-router'
import CountDown from '../CountDown/CountDown'
import useStageContext from '../../Context/UseStageContext'
import useQuestionContext from '../../Context/useQuestionContext'

const Question = () => {
  const {
    setOne,
    setTwo,
    setThree,
    setFour,
    rightAnswerCount,
    setRightAnswerCount,
  } = useSetContext()

  const { stage } = useStageContext()
  const { questionSet, setQuestionSet } = useQuestionContext()
  const { selectedSet } = useSelectedSetContext()

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [display, setDisplay] = useState('block')
  const [rightAnswer, setRightAnswer] = useState<string | null>(null)
  const [wrongAnswer, setWrongAnswer] = useState<string | null>(null)
  const [otherAnswer, setOtherAnswer] = useState<string | null>(null)
  const [connectionAnswer, setConnectionAnswer] = useState<string | null>(null)
  const [resultDisplay, setResultDisplay] = useState('none')
  const [startCounter, setStartCounter] = useState(true)
  const [displayTimer, setDisplayTimer] = useState('block')

  const navigate = useNavigate()

  const submitRef = useRef<HTMLButtonElement | null>(null)
  const resultRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {}, [
    currentQuestion,
    setSelectedAnswer,
    rightAnswerCount,
    selectedAnswer,
  ])

  useEffect(() => {
    submitRef.current?.focus()
    setOtherAnswer(null)
  }, [])

  useEffect(() => {
    setQuestionSet(
      selectedSet === 'set1'
        ? setOne
        : selectedSet === 'set2'
        ? setTwo
        : selectedSet === 'set3'
        ? setThree
        : setFour
    )
  }, [selectedSet])

  useEffect(() => resultRef.current?.focus(), [resultDisplay])

  useEffect(() => {
    localStorage.setItem('rightAnswerCount', JSON.stringify(rightAnswerCount))
  }, [rightAnswerCount])

  console.log('Question Set:', selectedSet)

  const answerOptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value)
  }

  const submitHandler = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault()
    if (currentQuestion === 0 || currentQuestion < 4) {
      setIsSubmitClicked(!isSubmitClicked)
      setStartCounter(!startCounter)
      setDisplayTimer('none')
    } else {
      setDisplay('none')
      setResultDisplay('block')
      setDisplayTimer('none')
    }

    if (selectedAnswer === questionSet[currentQuestion]?.answer) {
      setRightAnswer(`Thats the Right Answer - ${selectedAnswer}`)
      setRightAnswerCount((prevCount) => prevCount + 1)
    } else if (questionSet[currentQuestion]?.type === 'others') {
      setOtherAnswer(
        `The Correct Answer is ${questionSet[currentQuestion]?.answer}`
      )
    } else if (questionSet[currentQuestion]?.type === 'connection') {
      setConnectionAnswer(`${questionSet[currentQuestion]?.answer}`)
    } else {
      setWrongAnswer(
        `That's wrong - The correct answer is ${questionSet[currentQuestion]?.answer}`
      )
    }
  }

  const nextHandler = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault()
    if (currentQuestion === 0 || currentQuestion < 4) {
      setIsSubmitClicked(!isSubmitClicked)
      setCurrentQuestion(currentQuestion + 1)
      setRightAnswer(null)
      setWrongAnswer(null)
      setSelectedAnswer(null)
      setStartCounter(true)
      setDisplayTimer('block')
    }
  }

  console.log('questionSet', questionSet)

  return (
    <div className="question">
      <div className="question-container">
        <form>
          <h3>
            {`${currentQuestion + 1}. ${
              questionSet[currentQuestion]?.question
            }`}
          </h3>
          {questionSet[currentQuestion]?.type === 'multiple-choice' ? (
            questionSet[currentQuestion]?.answerOptions.map((option, index) => (
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
            ))
          ) : questionSet[currentQuestion]?.type === 'connection' ? (
            <div className="connection">
              <img
                src={`${window.location.origin}/src/assets/Images/${questionSet[currentQuestion]?.image}`}
                alt="Connection"
              />
            </div>
          ) : (
            'null'
          )}

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
          {otherAnswer && (
            <div className="other-result">
              <h2 className="other-answer">{otherAnswer} 😎😎😎</h2>
            </div>
          )}
          {connectionAnswer && (
            <div className="connection-result">
              <h2 className="connection-answer">{connectionAnswer} 😎😎</h2>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {!isSubmitClicked ? (
              <button
                onClick={submitHandler}
                style={{ display }}
                ref={submitRef}
              >
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
              ref={resultRef}
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
      <div className="counter">
        {stage === 'adult' && (
          <CountDown
            submitHandler={submitHandler}
            nextHandler={nextHandler}
            startCounter={startCounter}
            displayTimer={displayTimer}
          />
        )}
      </div>
    </div>
  )
}

export default Question
