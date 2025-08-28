import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useSetContext from '../../Context/UseSetContext'
import useSelectedSetContext from '../../Context/UseSelectedSet'
import Question from '../Question/Question'

const Questions = () => {
  const { setId } = useParams()
  const { setSelectedSet } = useSelectedSetContext()
  const { rightAnswerCount, setRightAnswerCount } = useSetContext()
  setSelectedSet(setId ?? '')

  useEffect(() => {
    setRightAnswerCount(0)
  }, [])
  return (
    <>
      <div
        style={{
          textAlign: 'right',
          marginRight: '100px',
          marginTop: '20px',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Correct Answer:{' '}
          <span style={{ color: 'yellow' }}>{rightAnswerCount}</span>
        </h2>
      </div>
      <Question />
    </>
  )
}

export default Questions
