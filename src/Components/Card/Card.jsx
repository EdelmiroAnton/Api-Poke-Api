import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

function Card() {
  const [name, setName] = useState(null);
  const [img, setImg] = useState(null);

  const URL = `https://pokeapi.co/api/v2/pokemon/${1}/`;

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch(URL);
      const result = await data.json();
      // console.log()
      setName(result.name);
      setImg(result.sprites.front_default);
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <img src={img} alt="pokemon_image" />
      <div>{name}</div>
      <Modal />
    </>
  );
}

export default Card;
