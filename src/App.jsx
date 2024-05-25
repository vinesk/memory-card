// components/App.jsx
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(
    () => Number(localStorage.getItem('bestScore')) || 0
  )
  const [pokemons, setPokemons] = useState([])
  const [clickedPokemons, setClickedPokemons] = useState([])

  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[cards[i], cards[j]] = [cards[j], cards[i]]
    }
    return cards
  }

  const handleCardClick = (pokemon) => {
    if (clickedPokemons.includes(pokemon.id)) {
      setScore(0)
      setClickedPokemons([])
    } else {
      setScore((prevScore) => prevScore + 1)
      const newBestScore = Math.max(bestScore, score + 1)
      setBestScore(newBestScore)
      localStorage.setItem('bestScore', newBestScore)
      setClickedPokemons((prevClickedPokemons) => [
        ...prevClickedPokemons,
        pokemon.id,
      ])
    }
    setPokemons((prevPokemons) => shuffleCards([...prevPokemons]))
  }

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      const data = await response.json()
      const promises = data.results.map((result) =>
        fetch(result.url).then((res) => res.json())
      )
      const pokemonData = await Promise.all(promises)
      setPokemons(pokemonData)
    }

    fetchPokemons()
  }, [])

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <Main pokemons={pokemons} onCardClick={handleCardClick} />
      <Footer />
    </div>
  )
}

export default App
