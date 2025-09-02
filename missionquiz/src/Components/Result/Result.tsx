import { useEffect } from 'react'
import './Result.css'

const Result = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="result-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2%',
        }}
      >
        <h1 style={{ color: 'black' }}>Quiz Result</h1>
        <div className="image"></div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <p style={{ fontSize: '2rem', color: 'black' }}>
          <em>
            <span style={{ color: 'red' }}>Congratulations! </span>You answered{' '}
            <strong
              style={{
                color: 'black',
                fontSize: '2.5rem',
                border: '1px solid cyan',
                borderRadius: '0.5rem',
                backgroundColor: 'yellow',
                padding: '0.5rem 1rem',
              }}
            >
              {localStorage.getItem('rightAnswerCount')}
            </strong>{' '}
            questions correctly!
          </em>
        </p>
      </div>
    </div>
  )
}

export default Result
