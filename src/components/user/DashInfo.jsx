import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tabla from "./Tabla";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { way } from "../../apipet";

const DashInfo = ({ user }) => {
  const dispatch = useDispatch();
  const estate = useSelector((state) => state.wei);
  const [alignment, setAlignment] = useState(estate);

  const handleAlignment = (event, newAlignment) => {
    way(newAlignment, dispatch);
    setAlignment(newAlignment);
  };

  return (
    <Box
      width="67vw"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box>
        {" "}
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            "& .MuiToggleButton-root": {
              width: "22.3vw",
              height:"4vh",
              borderRadius: "5px",
            },
          }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            Ingresos
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            Pagos
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            Modificaciones
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {alignment === "left" ? (
        <Tabla props={user.acceso} kind="ingresos" />
      ) : alignment === "center" ? (
        <Tabla props={user.pagos} kind="pagos" />
      ) : (
        <Tabla props={user.edicion} kind="ediciones" />
      )}
    </Box>
  );
};

export default DashInfo;
