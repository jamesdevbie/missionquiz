import './Stage.css'
import { useNavigate } from 'react-router-dom'
import useStageContext from '../../Context/UseStageContext'
import { useEffect } from 'react'

const Stage = () => {
  const navigate = useNavigate()

  const { setStage } = useStageContext()

  useEffect(() => {
    setStage('')
  }, [])

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const selectedId = event.currentTarget.id
    setStage(selectedId)
    selectedId === 'adult' ? navigate('/adult') : navigate('/kids')
  }

  return (
    <div className="stage-container">
      <h1>Choose Your Level🔎</h1>
      <div className="stage-options">
        <div className="kid" id="kid" onClick={clickHandler}></div>
        <div className="adult" id="adult" onClick={clickHandler}></div>
      </div>
    </div>
  )
}

export default Stage
