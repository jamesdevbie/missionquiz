import React, { useEffect, useState } from 'react'
import './CountDown.css'
interface CountDownProps {
  submitHandler: (e?: React.MouseEvent<HTMLButtonElement>) => void
  nextHandler?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  startCounter: boolean
  displayTimer: string
}

const CountDown: React.FC<CountDownProps> = ({
  submitHandler,
  startCounter,
  displayTimer,
}) => {
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    counterhandler()
  }, [timeLeft, startCounter])

  const counterhandler = () => {
    let timer: ReturnType<typeof setTimeout>
    if (startCounter) {
      timer = setTimeout(
        () => (timeLeft > 0 ? setTimeLeft(timeLeft - 1) : submitHandler()),
        1000
      )
    } else {
      setTimeLeft(10)
    }
    return () => {
      clearTimeout(timer)
    }
  }

  return (
    <div className="counter-container" style={{ display: displayTimer }}>
      <p>{timeLeft}</p>
    </div>
  )
}

export default CountDown
