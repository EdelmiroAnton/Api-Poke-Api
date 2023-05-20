import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

function Card() {
  const [name, setName] = useState(null);
  const [img, setImg] = useState(null);
  const [abilities, setAbilities] = useState([]);

  const URL = `https://pokeapi.co/api/v2/pokemon/${30}/`;

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch(URL);
      const result = await data.json();
      console.log(result);
      setName(result.name);
      setImg(result.sprites.front_default);
      setAbilities(result.abilities);
      // console.log(abilities.map((el) => el.ability.name));
    };
    fetchPokemon();
  }, []);

  console.log(abilities);
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
            {/* Add to the first character the rest of the string */}
            {el.ability.name.slice(1)}
          </li>
        ))}
      </ul>
      <Modal />
    </>
  );
}

export default Card;
