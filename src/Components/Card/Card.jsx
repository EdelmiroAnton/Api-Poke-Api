import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { Button } from "@mui/material";

function Card() {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [type, setType] = useState([]);
  const [value, setValue] = useState("");

  const handlerSum = () => {
    setId(id + 1);
  };

  const handlerSubtract = () => {
    setId(id - 1);
  };
  const getValue = (e) => {
    setValue(e.target.value);
  };
  const searchPokemon = () => {
    if (value > 1010) {
      alert("No exist Pokemons with this ID!");
      setValue("");
    }
    else if (value === "") {
      alert("Please, type a number from 1 to 1010");
    } else {
      setId(value);
    }
  };

  const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch(URL);
      const result = await data.json();
      console.log(result);
      setName(result.name);
      setImg(result.sprites.front_default);
      setAbilities(result.abilities);
      setType(result.types);
    };
    fetchPokemon();
  }, [id]);

  return (
    <>
      <img src={img} alt="pokemon_image" />
      <div>{id}</div>
      <h3>{name.toUpperCase()}</h3>
      <h4>Abilities</h4>
      <ul>
        {abilities.map((el) => (
          <li key={name.id}>
            {/* Get and Uppercase the first character of the string */}
            {el.ability.name.charAt(0).toUpperCase()}
            {/* Add the first character to the rest of the string */}
            {el.ability.name.slice(1)}
          </li>
        ))}
      </ul>
      <h4>Pokémon Type</h4>
      <ul>
        {type.map((el) => (
          <li key={name.id}>
            {el.type.name.charAt(0).toUpperCase()}
            {el.type.name.slice(1)}
          </li>
        ))}
      </ul>
      <div>
        <Button onClick={handlerSum} disabled={id === 1010}>
          +
        </Button>
        <Button onClick={handlerSubtract} disabled={id === 1}>
          -
        </Button>
        <Button onClick={searchPokemon}>OK</Button>
      </div>
      <input type="number" value={value} id="inputValue" onChange={getValue} />
      <Modal />
    </>
  );
}

export default Card;
