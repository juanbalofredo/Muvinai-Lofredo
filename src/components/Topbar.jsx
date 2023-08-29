import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Box, Button, Fade } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { loggedOut } from "../peso";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Topbar = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [opene, setOpene] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setOpene(false);
  };
  const logOuter = async (e) => {
    dispatch(loggedOut());
    navigate("/login");
    handleClose();
    setOpene(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl(null);
    setOpene(true);
  };

  return (
    <Box display="flex" justifyContent="end" p={1}>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>{" "}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClick2}>Cerrar sesión</MenuItem>
      </Menu>
      <Dialog
        open={opene}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Seguro que queres cerrar sesion?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Al cerrar sesión perdés todos los datos guardados en el
            localstorage, como tu nombre, si sos usuario o no y puede afectar
            las funciones al ser una prueba
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose2}
            sx={{
              color: "white",
              backgroundColor: "#5c5c5c",
              ":hover": {
                backgroundColor: "#424242",
              },
            }}
          >
            Cancelar
          </Button>
          <Button
            onClick={logOuter}
            sx={{
              color: "white",
              backgroundColor: "#5c5c5c",
              ":hover": {
                backgroundColor: "#424242",
              },
            }}
          >
            Cerrar sesion
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Topbar;
