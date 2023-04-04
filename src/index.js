import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Title, StyledList, PokemonName } from "./styles";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => {
        const newPokemons = res.data.results.map((poke) => ({
          ...poke,
          clicked: false,
        }));
        setPokemons(newPokemons);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const handleClick = (index) => {
    const newPokemons = [...pokemons];
    newPokemons[index].clicked = !newPokemons[index].clicked;
    setPokemons(newPokemons);
  };

  return (
    <>
      <Title>POKEDEX</Title>
      <StyledList>
        {pokemons.map((poke, index) => (
          <PokemonName
            key={poke.name}
            onClick={() => handleClick(index)}
            clicked={poke.clicked}
            bg={`hsl(${index * 20}, 50%, 80%)`}
            hoverBg={`hsl(${index * 20}, 50%, 70%)`}
          >
            Name: {poke.name}
          </PokemonName>
        ))}
      </StyledList>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
