import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useSetContext from '../../Context/UseSetContext'
import { QUESTION_LIST, type QUESTION_TYPE } from '../../assets/Constants'

import './Category.css'
import useStageContext from '../../Context/UseStageContext'

const Category = () => {
  const { stage, setStage } = useStageContext()

  const { optionId } = useParams()
  console.log('optionId:', optionId)
  const navigate = useNavigate()
  // ...existing code...
  const {
    setOne,
    setTwo,
    setThree,
    setFour,
    setSetOne,
    setSetTwo,
    setSetThree,
    setSetFour,
  } = useSetContext()

  let categorizedQ: QUESTION_TYPE[] = QUESTION_LIST.filter((ql) => {
    if (optionId === 'kids') {
      console.log('Inside Kids')
      return ql.category.toLowerCase() === optionId.toLowerCase()
    }
    return ql.category.toLowerCase() === optionId.toLowerCase()
  }).map((q, index) => ({
    ...q,
    index,
  }))

  console.log('Categorized Questions:', categorizedQ)

  let categorySetCount: number = 20
  let noOfSets: number = categorySetCount / 5
  let setCard: number[] = new Array(noOfSets).fill(0)

  useEffect(() => {}, [setOne, setTwo, setThree, setFour])

  const setHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.id === '1') {
      setSetOne(() => categorizedQ.filter((q) => q.set === 1))
      navigate(`/${optionId}/set1`, { state: setOne })
    } else if (target.id === '2') {
      setSetTwo(categorizedQ.filter((q) => q.set === 2))
      navigate(`/${optionId}/set2`, { state: categorizedQ })
    } else if (target.id === '3') {
      setSetThree(categorizedQ.filter((q) => q.set === 3))
      navigate(`/${optionId}/set3`, { state: setThree })
    } else if (target.id === '4') {
      setSetFour(categorizedQ.filter((q) => q.set === 4))
      navigate(`/${optionId}/set4`, { state: setFour })
    }
  }

  return (
    <>
      <div className="category-header">
        {!optionId ? (
          <h1 className="heading">{`Welcome to ${kidsID} Category`}</h1>
        ) : (
          <h1 className="heading">
            {`You are Lucky 😜
          welcome to ${optionId} Category`}
          </h1>
        )}
      </div>
      <div className="category-content" onClick={setHandler}>
        {setCard.map((_, index) => {
          return (
            <div className="set-card-container">
              <Link
                className="set-link"
                to={`/${optionId}/set${index + 1}`}
                key={index}
              >
                <div className="set-card" id={`${index + 1}`}>
                  <h2>{`Set ${index + 1}`}</h2>
                  <img
                    src="https://unicminds.com/wp-content/uploads/2024/03/Riddles-UnicMinds-1016x1024.webp"
                    alt={`Set ${index + 1}`}
                  />
                </div>
                {/* Render questions for this set */}
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Category
