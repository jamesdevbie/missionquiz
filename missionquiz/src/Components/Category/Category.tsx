import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { QUESTION_LIST } from '../../assets/Constants'
import { type QUESTION_TYPE } from '../../assets/Constants'

import './Category.css'

const Category = () => {
  const { optionId } = useParams()
  const navigate = useNavigate()
  let categorizedQ: {}[] = QUESTION_LIST.filter(
    (ql) => ql.category === optionId
  )
  categorizedQ = categorizedQ.map((q, index) => {
    return {
      ...q,
      index,
    }
  })

  console.log(categorizedQ)

  let categorySetCount: number = 20
  let noOfSets: number = categorySetCount / 5
  let setCard: number[] = new Array(noOfSets).fill(0)
  const [setOne, setSetOne] = useState<QUESTION_TYPE[]>([])
  const [setTwo, setSetTwo] = useState<QUESTION_TYPE[]>([])
  const [setThree, setSetThree] = useState<QUESTION_TYPE[]>([])
  const [setFour, setSetFour] = useState<QUESTION_TYPE[]>([])

  useEffect(() => {}, [setOne, setTwo, setThree, setFour])

  const setHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target.id === '1') {
      setSetOne(() => categorizedQ.filter((q) => q.set === 1))
      navigate(`/${optionId}/set1`)
    } else if (e.target.id === '2') {
      setSetTwo(() => categorizedQ.filter((q) => q.set === 2))
      navigate(`/${optionId}/set2`)
      console.log(setTwo)
    } else if (e.target.id === '3') {
      setSetThree(() => categorizedQ.filter((q) => q.set === 3))
      navigate(`/${optionId}/set3`)
      console.log(setThree)
    } else if (e.target.id === '4') {
      setSetFour(() => categorizedQ.filter((q) => q.set === 4))
      navigate(`/${optionId}/set4`)
      console.log(setFour)
    }
  }

  return (
    <>
      <div className="category-header">
        <h1 className="heading">
          {`You are Lucky 😜 
          welcome to ${optionId} Category`}
        </h1>
      </div>
      <div className="category-content" onClick={setHandler}>
        {setCard.map((_, index) => {
          return (
            <div key={index} className="set-card" id={`${index + 1}`}>
              <h2>{`Set ${index + 1}`}</h2>
              <img
                src="https://unicminds.com/wp-content/uploads/2024/03/Riddles-UnicMinds-1016x1024.webp"
                alt={`Set ${index + 1}`}
              />
              {/* Render questions for this set */}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Category
