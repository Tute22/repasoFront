import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Card = () => {
    const [pokemon, setPokemon] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{
        axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({data})=>setPokemon(data))
    },[])

  return (
    <>
    {pokemon.name && <div>
        <h4>{pokemon.name.toUpperCase()}</h4>
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="img" />
        <div>
        <div>
          <p>HEIGHT: {pokemon.height}</p>
          <p>WEIGHT: {pokemon.weight}</p>
          <p>TYPE: {pokemon.types[0].type.name.toUpperCase()}</p>
        </div>
      </div>
      </div>}
      </>
  )
}
