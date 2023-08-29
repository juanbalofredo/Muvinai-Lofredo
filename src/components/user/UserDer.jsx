import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { GrafDonut } from "../graficos/GraficoDonut";

const UserDer = ({ user }) => {
  const estate = useSelector((state) => state.wei);

  //cuenta cuantas veces entro a cada sucursal para despues pasarle los datos al grafico

  const dataLeft = {
    labels: ["Microcentro", "Pilar", "Belgrano"],
    datasets: [
      {
        label: "Gente:",
        data: [
          user.acceso.filter((a) => a.sede === "Microcentro").length,
          user.acceso.filter((a) => a.sede === "Pilar").length,
          user.acceso.filter((a) => a.sede === "Belgrano").length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const dataCenter = {
    labels: ["Aceptado", "Rechazado"],
    datasets: [
      {
        label: "Gente:",
        data: [
          user.pagos.filter((a) => a.aceptado === true).length,
          user.pagos.filter((a) => a.aceptado === false).length,
        ],
        backgroundColor: ["rgba(167, 201, 87,0.2)", "rgba(239, 35, 60,0.2)"],
        borderColor: ["#a7c957", "#ef233c"],
        borderWidth: 2,
      },
    ],
  };
  const dataRight = {
    labels: ["Apto           ", "Plan"],
    datasets: [
      {
        label: "Gente:",
        data: [
          user.edicion.filter((a) => a.que === "apto").length,
          user.edicion.filter((a) => a.que === "plan").length,
        ],
        backgroundColor: ["rgba(251, 139, 36,0.2)", "rgba(46, 196, 182,0.2)"],
        borderColor: ["rgba(251, 139, 36,1)", "rgba(46, 196, 182,1)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Box
      display="flex"
      borderRadius="5px"
      sx={{
        height: "40vh",
        width: "38.7vw",
        backgroundColor: "secondary.main",
        boxShadow: "1px 1px 9px rgba(0, 0, 0, 0.1)",
      }}
      mb={5}
    >
      {" "}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        ml="3vw"
        sx={{
          height: "40vh",
          width: "15vw",
          backgroundColor: "secondary.main",
          borderRadius: "5px",
        }}
      >
        {estate === "right" ? (
          <>
            <Typography fontSize="1.6vw">Ediciones totales</Typography> <br />
            <Typography fontSize="5vw">{user.edicion.length}</Typography>
          </>
        ) : estate === "center" ? (
          <>
            <Typography fontSize="1.6vw">Pagos totales</Typography> <br />
            <Typography fontSize="5vw">{user.pagos.length}</Typography>
          </>
        ) : (
          <>
            <Typography fontSize="1.6vw">Accesos totales</Typography> <br />
            <Typography fontSize="5vw">{user.acceso.length}</Typography>
          </>
        )}
      </Box>
      <Box mt={7} width={300} display="flex">
        {" "}
        {estate === "left" ? (
          <GrafDonut data={dataLeft} />
        ) : estate === "center" ? (
          <GrafDonut data={dataCenter} />
        ) : estate === "right" ? (
          <GrafDonut data={dataRight} />
        ) : null}
      </Box>
    </Box>
  );
};

export default UserDer;
