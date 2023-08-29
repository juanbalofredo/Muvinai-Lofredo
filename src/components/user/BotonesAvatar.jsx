import { Button, Box } from "@mui/material";
import Apto from "./Apto";
import { useState } from "react";
import Swal from "sweetalert2";

const BotonesAvatar = (props) => {
  const [estado, setEstado] = useState(true);
  //Estas funciones modificarian e planstatus a false lo que cambiaria si tiene que pagar el proximo mes y hasta cuando puede pasar
  const cambiarEstado = () => {
    setEstado(true);
  };
  const cambiarBaja = () => {
    Swal.fire({
      title: "Dar de baja al usuario",
      text: "seguro",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Listo!",
          "Usuario dado de baja, mientras siga vigente su último pago se permitirá acceso"
        );
        setEstado(false);
      }
    });
  };
  const cambiarEstadoF = () => {
    Swal.fire({
      title: "Invalidar acceso al usuario",
      text: "No se puede volver atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Listo!",
          "Usuario invalidado, no podrá volver al establecimiento y su pago se devolverá"
        );
        setEstado(false);
      }
    });
  };

  return (
    <Box
      ml="2vw"
      mt="2vh"
      sx={{
        "& .MuiButtonBase-root": {
          color: "white",
          backgroundColor: "#32425c",
          width: "10vw",
          height: "4vh",
          marginTop: "1.5vh",
          ":hover": {
            backgroundColor: "#425675",
          },
        },
      }}
    >
      <Box>
        {estado ? (
          <Button onClick={cambiarBaja}>Dar de baja</Button>
        ) : (
          <Button onClick={cambiarEstado}>Dar de alta</Button>
        )}
      </Box>
      <Box>
        <Button onClick={cambiarEstadoF}>Invalidar acceso</Button>
      </Box>
      <Apto user={props.user} />
    </Box>
  );
};

export default BotonesAvatar;
