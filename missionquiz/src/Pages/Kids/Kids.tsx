import Category from '../../Components/Category/Category'
import useStageContext from '../../Context/UseStageContext'

const Kids = () => {
  const { setStage } = useStageContext()
  setStage('kids')

  return (
    <div>
      <Category />
    </div>
  )
}

export default Kids
