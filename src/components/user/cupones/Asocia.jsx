import { Box, Typography } from "@mui/material";


const Asocia = (asos) => {

  return (
    <Box
      mb={0.5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="5px"
      bgcolor="#243144"
      sx={{ height: "3vh", width: "25vw" }}
    >
      <Typography>
        {asos.user.fecha} - {asos.user.hasta}
      </Typography>
      <Typography ml="2vw" color="#c9c9c9">
        {" "}
        {asos.user.sede}
      </Typography>
    </Box>
  );
};

export default Asocia;
