import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AgregarCupon = () => {
  const estate = useSelector((state) => state.name);
  const [input, setInput] = useState({
    fecha: "",
    descuento: "",
    cupon: "",
    worker: estate,
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAceptar = () => {
    setOpen(false); 
   //aca amndariamos la informacion con el input, incluyendo el trabajador que lo realizo al servidor

  };

  function setear(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        height={50}
        justifyContent="space-between"
        width="26vw"
      >
        <Typography ml="45%">Cupones</Typography>{" "}
        <Button
          sx={{
            width: "20px",
            borderRadius: "5px",
          }}
          onClick={handleClickOpen}
        >
          <AddIcon sx={{ fontSize: "25px", color: "white" }} />
        </Button>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          fontSize={20}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {"Agregar uso de cupón"}
        </DialogTitle>
        <DialogContent
          sx={{ height: "260px", width: "350px", borderRadius: "5px" }}
        >
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              Porcentaje de descuento
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "300px" }}
              name="descuento"
              value={input.descuento}
              onChange={setear}
            />
          </Box>

          <Box mt={3}>
            <DialogContentText id="alert-dialog-slide-description">
              Fecha de uso
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "300px" }}
              name="fecha"
              value={input.fecha}
              onChange={setear}
            />
          </Box>
          <Box mt={3}>
            <DialogContentText id="alert-dialog-slide-description">
              Nombre de la institución del cupón
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "300px" }}
              name="cupon"
              value={input.cupon}
              onChange={setear}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "white" }}>
            Cancelar
          </Button>
          <Button onClick={handleAceptar} sx={{ color: "white" }}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AgregarCupon;
