import Card from './Card'
import '../styles/Main.css'

const Main = ({ pokemons, onCardClick }) => {
  return (
    <main className="main">
      {pokemons.map((pokemon, index) => (
        <Card
          key={index}
          pokemon={pokemon}
          onCardClick={() => onCardClick(pokemon)}
        />
      ))}
    </main>
  )
}

export default Main
