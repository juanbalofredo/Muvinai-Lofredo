import { Box, Typography } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import "aos/dist/aos.css";
import { GrafMensual } from "../graficos/GraficoMensual";
import { GrafDonut } from "../graficos/GraficoDonut";

const data = {
  labels: [],
  datasets: [
    {
      label: "Gente",
      data: [900, 1000],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 175, 204, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 175, 204, 1)"],
      borderWidth: 2,
    },
  ],
};

const TextoIni = () => {
  return (
    <Box display="flex">
      <Box>
        <Box display="flex">
          <Box width="15vw" fontSize="large" ml="2vw">
            <Typography
              variant="h1"
              component="h1"
              fontSize={"4vw"}
              fontWeight="bold"
            >
              Muvinai <br /> Lofredo
            </Typography>
          </Box>
          <Box
            width="24vw"
            height="20vh"
            bgcolor="secondary.main"
            borderRadius="5px"
            data-aos="fade-up"
            data-aos-delay="100"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              display="flex"
              justifyContent="center"
              alignItems="center"
              variant="h1"
              component="h1"
              mb={2}
              mt={2}
              fontSize="2vw"
            >
              Usuarios registrados
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography fontWeight="bold" fontSize="2.6vw">
                13.762
              </Typography>
              <EmojiPeopleIcon sx={{ fontSize: "4vw" }} />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          mt="4vh"
          width="41vw"
          height="20vh"
          bgcolor="secondary.main"
          borderRadius="5px"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {" "}
          <Box display="flex" justifyContent="space-between" width="41vw">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              ml="5vw"
            >
              <Typography
                fontSize="1,7vw"
                variant="h3"
                component="h3"
                fontWeight=""
              >
                Mujeres
              </Typography>
              <br />{" "}
              <Typography fontSize="2vw" fontWeight="bold" color="#c9c9c9">
                58%
              </Typography>
            </Box>
            <Box
              width="18vw"
              display="flex"
              alignContent="center"
              justifyContent="center"
            >
              <GrafDonut data={data} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              mr="5vw"
            >
              <Typography
                fontSize="1,7vw"
                variant="h3"
                component="h3"
                fontWeight=""
              >
                Hombres
              </Typography>
              <br />{" "}
              <Typography fontSize="2vw" fontWeight="bold" color="#c9c9c9">
                42%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        ml="2vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          backgroundColor: "secondary.main",
          boxShadow: "0px 7px 9px rgba(0, 0, 0, 0.1)",
        }}
        data-aos="fade-up"
        data-aos-delay="300"
        width="25vw"
        height="44vh"
        borderRadius="5px"
      >
        {" "}
        <Typography variant="h2" component="h2" mb={4} mt={0} fontSize="2.3vw">
          Ganancias mensuales
        </Typography>
        <Box width="23vw">
          <GrafMensual />
        </Box>
      </Box>
    </Box>
  );
};

export default TextoIni;
