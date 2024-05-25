import '../styles/Header.css'

const Header = ({ score, bestScore }) => {
  return (
    <header className="header">
      <h1 className="title">Memory Card</h1>
      <div className="scores">
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
      </div>
    </header>
  )
}

export default Header
