import { Box, Typography } from "@mui/material";



const InfoPers = ({ user }) => {
  //vencimiento de pago
  let fecha = user.alta;
  let dia = parseInt(fecha.substr(0, 2));
  let mes = parseInt(fecha.substr(3, 2));
  mes++;
  let diaFormateado = dia.toString().padStart(2, "0");
  let mesFormateado = mes.toString().padStart(2, "0");
  let nuevaFecha = `${diaFormateado}/${mesFormateado}/${fecha.substr(6)}`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="26vw"
      height="39vh"
      justifyContent="center"
      mt="2vh"
    >
      <Box
        ml="1vw"
        mr="1vw"
        sx={{
          "& .MuiBox-root": {
            maxHeight: "3.3vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            backgroundColor: "#243144",
            paddingRight: "40px",
            height: "3.3vh",
            color: "#cccaca",
            "& .MuiTypography-root": {
              display: "flex",
              color: "#dedede",
              overflow: "hidden",
              alignItems: "center",
              paddingLeft: "70px",
            },
          },
        }}
      >
        <Box mt={1}>
          <Typography>Nombre:</Typography>
          <Box>{user.name}</Box>
        </Box>
        <Box mt={1}>
          <Typography>Apellido:</Typography>
          <Box>{user.lastName}</Box>
        </Box>

        <Box mt={1}>
          <Typography>Nacimiento:</Typography>
          <Box>{user.born}</Box>
        </Box>
        <Box mt={1}>
          <Typography>DNI:</Typography>
          <Box>{user.dni}</Box>
        </Box>
        <Box mt={1}>
          <Typography>Plan:</Typography>
          <Box>{user.acces}</Box>
        </Box>
        <Box mt={1}>
          <Typography>Teléfono:</Typography>
          <Box>{user.phone}</Box>
        </Box>

        <Box mt={1}>
          <Typography>Email:</Typography>
          <Box>{user.email}</Box>
        </Box>
        <Box mt={1}>
          <Typography>Alta:</Typography>
          <Box>{user.vigencia}</Box>
        </Box>
        <Box mt={1}>
          <Typography>Próximo pago:</Typography>

          <Box>{nuevaFecha}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoPers;
