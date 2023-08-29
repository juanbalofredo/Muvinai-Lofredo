import { Box, Typography } from "@mui/material";
import Cupones from "./cupones/Cupones";
import Asocia from "./cupones/Asocia";
import * as React from "react";
import AgregarCupon from "./cupones/AgregarCupon";

const UserCup = ({ user }) => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="5px"
        sx={{
          height: "18vh",
          width: "26vw",
          backgroundColor: "secondary.main",
          boxShadow: "1px 1px 9px rgba(0, 0, 0, 0.1)",
        }}
        mb="4vh"
        ml="2vw"
      >
        <AgregarCupon />
        <Box
          mt="1vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="15vh"
          sx={{ overflow: "auto" }}
        >
          {user.cupones.map((a) => (
            <Cupones user={a} />
          ))}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="5px"
        sx={{
          height: "18vh",
          width: "26vw",
          backgroundColor: "secondary.main",
          boxShadow: "1px 1px 9px rgba(0, 0, 0, 0.1)",
        }}
        mb="4vh"
        ml="2vw"
      >
        <Box
          display="flex"
          alignItems="center"
          height="5vh"
          justifyContent="space-between"
          width="26vw"
        >
          <Typography ml="30%">Asociaciones pasadas</Typography>{" "}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ overflow: "auto" }}
        >
          {user.asociaciones.map((a) => (
            <Asocia user={a} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UserCup;
