import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

function Card() {
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [type, setType] = useState([]);

  const URL = `https://pokeapi.co/api/v2/pokemon/${302}/`;

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
  }, []);

  console.log(type);
  return (
    <>
      <img src={img} alt="pokemon_image" />
      <h3>{name.toUpperCase()}</h3>
      <h4>Abilities</h4>
      <ul>
        {abilities.map((el) => (
          <li>
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
          <li>
            {el.type.name.charAt(0).toUpperCase()}
            {el.type.name.slice(1)}
          </li>
        ))}
      </ul>
      <Modal />
    </>
  );
}

export default Card;
