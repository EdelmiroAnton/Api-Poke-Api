import { useEffect, useState, forwardRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import "./styles.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function Modal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1550);
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        TransitionComponent={Transition}
        id="dialog"
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle
          id="dialog-title"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          Welcome to the Poke Api
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="dialog-description"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              textAlign: "justify",
              color: "grey",
            }}
          >
            With this simulator you can search over the 1010 Pokémons that the
            API offer to us. You will see its image, its name, their abilities
            and its type! Click the button to start!
          </DialogContentText>
        </DialogContent>
        <button onClick={closeModal} className="botonDialog">
          <span className="textButton">Comencemos!</span>
        </button>
      </Dialog>
    </>
  );
}

export default Modal;
