import { Box } from "@mui/material";
import UserBoard from "../components/dash/UserDash";
import SeccionDos from "../components/dash/SeccionDos";
import TextoIni from "../components/dash/TextoIni";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //Inicializamos animaciones
  AOS.init({
    duration: 1000,
  });

  return (
    <Box display="flex">
      <Box ml="2vw" mr="2vw" mt={0} display="flex" flexDirection="column">
        <TextoIni />
        <UserBoard />
      </Box>
      <SeccionDos />
    </Box>
  );
};

export default Home;
