import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";
import apto from "../../img/apto.pdf";
import { Input } from "@mui/icons-material";
import CambiarFecha from "./CambiarFecha";

const Apto = (props) => {
  
  var [aptoValido, setAptoValido] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const cambiarApto = () => {
    setAptoValido(!aptoValido);
  };

  const cambiarFecha = () => {
    // mandamos nueva fecha  a base de datos
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //para subir nuevo apto tendria que poder amndarle el nuevo a la base de datos
  return (
    <Box display="flex">
      <Box display="flex" flexDirection="column">
        <Button
          color="primary"
          variant="secondary"
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "200px",
            backgroundColor: "#32425c",
            ":hover": {
              backgroundColor: "#425675",
            },
          }}
        >
          Apto medico
        </Button>
        <Typography color="#c9c9c9">
          Fecha caducidad: {props.user.apto[0].expiration}
        </Typography>
        <Typography color="#c9c9c9">
          {!aptoValido ? "Aprobado" : "No aprobado"}
        </Typography>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            download={apto}
            href={apto}
            underline="none"
            color="inherit"
            variant="link"
          >
            {" "}
            Descargar
          </Link>
        </MenuItem>
        <MenuItem onClick={cambiarFecha}>
          <CambiarFecha />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Subir nuevo<Input type="file"></Input>
        </MenuItem>
        <MenuItem>
          Aprobado :<input type="checkbox" onChange={cambiarApto} />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Apto;
