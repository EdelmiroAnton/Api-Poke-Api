import { useEffect, useState } from "react";
import { theme } from "../../theme.js";

//Material UI
import { Box, ThemeProvider, Typography } from "@mui/material";

//Components
import Modal from "../Modal/Modal";
import ButtonSubtractID from "../ButtonSubtractID/ButtonSubtractID";
import ButtonSumId from "../ButtonSumId/ButtonSumId";
import ButtonOkId from "../ButtonOkId/ButtonOkId";

//Styles
import "./styles.css";

function Card() {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [type, setType] = useState([]);
  const [value, setValue] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handlerSum = () => {
    setId(id + 1);
  };

  const handlerSubtract = () => {
    setId(id - 1);
  };

  const getValue = (e) => {
    setValue(Number(e.target.value))
    // const val = e.target.value;
    // const stringToNum = Number(val);
    // setValue(stringToNum);
  };
  console.log(value)

  const searchPokemon = () => {
    if (value > 1010) {
      alert("No exist Pokemons with this ID!");
      setValue("");
    } else if (value === "") {
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
      setName(result.name);
      setImg(result.sprites.front_default);
      setAbilities(result.abilities);
      setType(result.types);
    };
    fetchPokemon();
  }, [id]);

  // To show the card component after 1510 milisecs
  setTimeout(() => {
    setShowCard(true);
  }, 1510);

  return (
    <>
      {showCard && (
        <>
          <ThemeProvider theme={theme}>
            <Box className="card">
              <img src={img} alt="pokemon_image" className="pokemonImg" />

              <Typography
                variant={theme.typography.h2}
                fontFamily={theme.typography.fontFamily}
                sx={{ textAlign: "center" }}
              >
                {name.toUpperCase()}
              </Typography>
              <Typography
                sx={{ textAlign: "center" }}
                variant={theme.typography.h4}
                fontFamily={theme.typography.fontFamily}
              >
                ID: {id}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "auto",
                  backgroundColor: "#FFFBAC",
                  minHeight: "110px",
                }}
                fontFamily={theme.typography.fontFamily}
              >
                <Typography variant={theme.typography.h4}>Abilities</Typography>
                <ul className="card_list">
                  {abilities.map((el) => (
                    <li key={name.id} className="card_item">
                      {/* Get and Uppercase the first character of the string */}
                      {el.ability.name.charAt(0).toUpperCase()}
                      {/* Add the first character to the rest of the string */}
                      {el.ability.name.slice(1)}
                    </li>
                  ))}
                </ul>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "auto",
                  backgroundColor: "#FFD495",
                  minHeight: "90px",
                }}
                fontFamily={theme.typography.fontFamily}
              >
                <Typography variant={theme.typography.h4}>
                  Pokémon <br />
                  Type
                </Typography>
                <ul className="card_list">
                  {type.map((el) => (
                    <li key={name.id} className="card_item">
                      {el.type.name.charAt(0).toUpperCase()}
                      {el.type.name.slice(1)}
                    </li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ backgroundColor: "#FAAB78" }}>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <ButtonSubtractID handlerSubtract={handlerSubtract} id={id} />
                  <ButtonOkId searchPokemon={searchPokemon} />
                  <ButtonSumId handlerSum={handlerSum} id={id} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <input
                    className="input_id"
                    placeholder="Type ID"
                    type="number"
                    id="inputValue"
                    onChange={getValue}
                  />
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
        </>
      )}
      <Modal />
    </>
  );
}

export default Card;
