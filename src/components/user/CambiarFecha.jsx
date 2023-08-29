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

const CambiarFecha = () => {


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
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button
          sx={{
            color: "white",
            width: "5vw",
            borderRadius: "5px",
          }}
          onClick={handleClickOpen}
        >
          Cambiar fecha
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
          {"Nueva fecha de apto medico"}
        </DialogTitle>
        <DialogContent
          sx={{ height: "10vh", width: "20vw", borderRadius: "5px" }}
        >
          <Box>
            <DialogContentText id="alert-dialog-slide-description">
              Fecha
            </DialogContentText>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              sx={{ width: "18vw" }}
              name="descuento"
              type="date"
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

export default CambiarFecha;
