import { Box, Button, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import InfoPers from "./InfoPers";
import Swal from "sweetalert2";
import EditarInfo from "./EditarInfo";


const Info = (props) => {

  
  const guardarInfo = () => {
    //mandariamos los datos al sevidor para que cambie los datos en la base de datos
    Swal.fire({
      title: "Seguro que querés guardar cambios?",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Guardado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Los cambios no se guardaron", "", "info");
      }
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        "& .MuiButtonBase-root": {
          height: "2vw",
          width: "24vw",
          color: "white",
          marginTop: "10px",
          "& .MuiSvgIcon-root": {
            color: "white",
            fontSize: "1.5vw",
          },
        },
      }}
    >
      <InfoPers user={props.user} />
      <Box ml="1vw">
        <EditarInfo props={props} />
        <Box>
          <Button
            sx={{
              backgroundColor: "rgba(0, 125, 21,0.8)",
              ":hover": {
                backgroundColor: "#009419",
              },
            }}
            onClick={guardarInfo}
          >
            Guardar
          </Button>
        </Box>
        <Box
          display="flex"
          width="23.9vw"
          justifyContent="space-between"
          sx={{
            "& .MuiButtonBase-root": {
              width: "11.6vw",
            },
          }}
        >
          <Button
            sx={{
              backgroundColor: "#32425c",
              ":hover": { backgroundColor: "#425675" },
            }}
          >
            <Link
              underline="none"
              variant="link"
              target="blank"
              href={"https://wa.me/" + props.user.phone}
            >
              <WhatsAppIcon />
            </Link>
          </Button>
          <Button
            sx={{
              backgroundColor: "#32425c",
              ":hover": { backgroundColor: "#425675" },
            }}
          >
            <Link
              underline="none"
              variant="link"
              href={"mailto:" + props.user.email}
            >
              <MailIcon />
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
