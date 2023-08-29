import { Box, Typography } from "@mui/material";
import { GraficoRadar } from "../graficos/GraficoRadar";

const SeccionDos = () => {
  //La totalidad de estos datos se sacarian de la base de datos pro al no tener improvise numeros, pero es de amnera representativa
  return (
    <Box mr="2vw" display="flex" flexDirection="column">
      <Box
        data-aos-delay="400"
        data-aos="fade-up"
        bgcolor="secondary.main"
        width="25vw"
        height="37vh"
        borderRadius="5px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2" component="h2" mb="2vh" fontSize="2.3vw">
          Ganancias anuales
        </Typography>

        <Typography
          variant="h1"
          component="h1"
          mb={2}
          fontSize="3vw"
          fontWeight="bold"
        >
          $5083.87K
        </Typography>
        <Box display="flex" justifyContent="center" flexDirection="row">
          <Typography
            variant="h1"
            component="h1"
            fontSize="2.7vw"
            fontWeight="bold"
          >
            18%
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            mt={0.5}
            ml={2}
            fontSize={17}
            color="#c9c9c9"
            mb={2.2}
          >
            más que el <br /> año pasado
          </Typography>
        </Box>
      </Box>
      <Box
        mt="4vh"
        width="25vw"
        height="46vh"
        bgcolor="secondary.main"
        borderRadius="5px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <Typography
          variant="h2"
          component="h2"
          mt="4vh"
          mb="2vh"
          fontSize="2vw"
        >
          Promedio edad usuarios
        </Typography>
        <Box width="18vw" height="30vh">
          <GraficoRadar />
        </Box>
      </Box>
    </Box>
  );
};

export default SeccionDos;
