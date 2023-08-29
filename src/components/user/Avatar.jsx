import { Box, Button } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";



const Avatar = (props) => {


  const [fotoNueva, SetFotoNueva] = useState(null);
  const nuevaFoto = (e) => {
    console.log(e.target.files[0]);
    SetFotoNueva(e.target.files[0]);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt="1vh"
      ml="2vw"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="10vw"
      >
        <Box ml="7vw" sx={{ position: "absolute", zIndex: 1 }}>
          <input
            accept="image/*"
            type="file"
            onChange={nuevaFoto}
            id="icon-button-file"
            style={{ display: "none", width: "20px" }}
          />
          <label htmlFor="icon-button-file">
            <Button
              variant="contained"
              component="span"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                width: "10px",
                ":hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <EditIcon />
            </Button>
          </label>
        </Box>
        <Box
          component="img"
          borderRadius="5px"
          sx={{
            height: "22vh",
            width: "10vw",
            boxShadow: "0px 7px 9px rgba(0, 0, 0, 0.3)",
            zIndex: 0,
          }}
          alt="avatar"
          src={fotoNueva ? URL.createObjectURL(fotoNueva) : props.user.avatar}
        />{" "}
      </Box>

    </Box>
  );
};

export default Avatar;
