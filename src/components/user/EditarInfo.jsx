import * as React from "react";
import { Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const EditarInfo = ({ props }) => {

 
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

  return (
    <Box>
      <Button
        sx={{
          backgroundColor: "#32425c",
          ":hover": { backgroundColor: "#425675" },
        }}
        onClick={handleClickOpen}
      >
        Editar información
      </Button>
      {/* //Nombre/Apellido/Plan activo/Dni/Telefono/Alta/Email/Nacimiento */}

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
          {"Editar Informacion"}
        </DialogTitle>
        <DialogContent
          sx={{
            height: "54vh",
            width: "25vw",
            borderRadius: "5px",
            "& .MuiTextField-root": {
              width: "22.4vw",
            },
          }}
        >
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              Nombre
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "18vw" }}
              name="name"
              type="text"
              defaultValue={props.user.name}
            />
          </Box>
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              Apellido
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "18vw" }}
              name="lastName"
              type="text"
              defaultValue={props.user.lastName}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" height="4vh" alignItems="center">
            <DialogContentText id="alert-dialog-slide-description">
              Plan Activo
            </DialogContentText>
            SI:
            <input type="checkbox" /> NO: <input type="checkbox" />
          </Box>
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              DNI
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "18vw" }}
              name="dni"
              type="number"
              defaultValue={props.user.dni}
            />
          </Box>
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              Teléfono
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "20vw" }}
              name="phone"
              defaultValue={props.user.phone}
            />
          </Box>
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              Alta
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "18vw" }}
              name="alta"
              defaultValue={props.user.alta}
            />
          </Box>
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              Email
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "18vw" }}
              name="mail"
              type="mail"
              defaultValue={props.user.email}
            />
          </Box>
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              Nacimiento
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "18vw" }}
              name="born"
              defaultValue={props.user.born}
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

export default EditarInfo;
