import { Box, Typography } from "@mui/material";

const Cupones = (cupon) => {
  
  return (
    <Box
      mb={0.5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#243144"
      borderRadius="5px"
      sx={{ height: "3vh", width: "25vw" }}
    >
      <Typography justifyContent="space-between" width="6vw">
        {cupon.user.cupon} - {cupon.user.descuento}%
      </Typography>
      <Typography ml="2vw" color="#c9c9c9">
        {" "}
        {cupon.user.fecha}
      </Typography>
    </Box>
  );
};

export default Cupones;
