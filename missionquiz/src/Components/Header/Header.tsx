import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img className="logo-img" src="/vite.svg" alt="Vite logo" />
        </div>
        <div className="header-right-content">
          <h1>Peniel Evangelical Church</h1>
          <p>Mission festival - 2025</p>
          <h2 className="quiz">Bible Quiz</h2>
        </div>
      </div>
    </header>
  )
}

export { Header }
