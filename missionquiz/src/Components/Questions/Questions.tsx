import { useParams } from 'react-router-dom'
import Question from '../Question/Question'
import useSelectedSetContext from '../../Context/UseSelectedSet'
import { useEffect } from 'react'
import useSetContext from '../../Context/UseSetContext'

const Questions = () => {
  const { setId } = useParams()
  const { selectedSet, setSelectedSet } = useSelectedSetContext()
  const { rightAnswerCount, setRightAnswerCount } = useSetContext()
  setSelectedSet(setId ?? '')

  useEffect(() => {
    // You can perform any side effects here when the selected set changes
  }, [selectedSet])
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
