// import { type QUESTION_TYPE } from '../../assets/Constants'

// const Question = ({ quest }: { quest: QUESTION_TYPE }) => {
//   return (
//     <form className="question-container">
//       <p>
//         <strong>
//           <label>{quest.question}</label>
//         </strong>
//       </p>
//       <p>
//         <strong>Answer Options:</strong>
//         {quest.answerOptions.map((option, index) => (
//           <label key={index}>
//             <input type="radio" name="answer" value={option} />
//             {option}
//           </label>
//         ))}
//       </p>
//       <button type="submit">Submit</button>
//       {/* Additional content can be added here */}
//     </form>
//   )
// }
const Question = () => {
  return (
    <form className="question-container">
      <h1>Questions</h1>
      {/* Additional content can be added here */}
    </form>
  )
}

export default Question
