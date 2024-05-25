import '../styles/Card.css'

const Card = ({ pokemon, onCardClick }) => {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  )
}

export default Card
