import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  Input,
  TextField,
} from "@mui/material";
import "./styles.css";
import ButtonSubtractID from "../ButtonSubtractID/ButtonSubtractID";
import { theme } from "../../theme.js";

function Card() {
  const [id, setId] = useState(16);
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [type, setType] = useState([]);
  const [value, setValue] = useState("");
  const [showCard, setShowCard] = useState(false);

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
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <ButtonSubtractID handlerSubtract={handlerSubtract} id={id} />

                  <Button
                    onClick={handlerSum}
                    disabled={id === 1010}
                    sx={{
                      padding: "0",
                      minWidth: "30px",
                      height: "30px",
                      color: "black",
                      border: "0",
                      borderRadius: "50%",
                      backgroundColor: "#DDDDDD",
                    }}
                  >
                    +
                  </Button>
                  <Button
                    onClick={searchPokemon}
                    sx={{
                      padding: "0",
                      minWidth: "30px",
                      height: "30px",
                      color: "black",
                      border: "0",
                      borderRadius: "50%",
                      backgroundColor: "#DDDDDD",
                    }}
                  >
                    OK
                  </Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <input
                    className="input_id"
                    placeholder="ID"
                    type="number"
                    // inputMode="numeric"
                    value={value}
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
