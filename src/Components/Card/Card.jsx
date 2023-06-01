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
  const [id, setId] = useState(1); //Initial ID
  const [name, setName] = useState(""); //State to get the name of the pokemon from the API
  const [img, setImg] = useState(null); //State to get the img of the pokemon from the API
  const [abilities, setAbilities] = useState([]); //State to get the ability of the pokemon from the API
  const [type, setType] = useState([]); //State to get the pokemon type from the API
  const [value, setValue] = useState(""); //State to handle the input ID value
  const [showCard, setShowCard] = useState(false); //State that manage to show the main card after the Splash


  //Function to sum 1 to the ID
  const handlerSum = () => {
    setId(id + 1);
  };

  //Function to subtract 1 to the ID
  const handlerSubtract = () => {
    setId(id - 1);
  };

  //Function to get the ID from the input. Is triggered when the user press a key
  const getInputId = (e) => {
    //Input validation, only accept numbers from 0 to 9
    const inputId = document.querySelector("#inputValue");
    let valueInput = e.target.value;
    inputId.value = valueInput.replace(/[^0-9]/g, "");

    let val = Number(e.target.value);
    setValue(val);
  };

  // Function triggered when the user click the "OK" button
  const searchPokemon = () => {
    if (value > 1010) {
      alert("No exist Pokemons with this ID!");
      setValue("");
    } else if (value === "") {
      alert("Please, type a number from 1 to 1010");
    } else {
      setId(value);
      setValue("");
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

  // Show the card component after 1510 milisecs (after the Splash)
  setTimeout(() => {
    setShowCard(true);
  }, 1510);

  return (
    <>
      {showCard && (
        <>
          <ThemeProvider theme={theme}>
            <Box className="card">
              {/* POKEMON IMAGE */}
              <img src={img} alt="pokemon_image" className="pokemonImg" />

              {/* POKEMON NAME */}
              <Typography
                variant={theme.typography.h2}
                fontFamily={theme.typography.fontFamily}
                sx={{ textAlign: "center" }}
              >
                {name.toUpperCase()}
              </Typography>

              {/* POKEMON ID */}
              <Typography
                sx={{ textAlign: "center" }}
                variant={theme.typography.h4}
                fontFamily={theme.typography.fontFamily}
              >
                ID: {id}
              </Typography>

              {/* POKEMON ABILITIES */}
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

              {/* POKEMON TYPE */}
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

              {/* BUTTONS */}
              <Box sx={{ backgroundColor: "#FAAB78" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <input
                    className="input_id"
                    placeholder="# ID"
                    type="text"
                    id="inputValue"
                    onKeyUp={getInputId}
                    minlength="1"
                    maxlength="4"
                    title="Type a number from 1 to 1010"
                    autoFocus
                  />
                  <ButtonOkId searchPokemon={searchPokemon} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <ButtonSubtractID handlerSubtract={handlerSubtract} id={id} />
                  <ButtonSumId handlerSum={handlerSum} id={id} />
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
