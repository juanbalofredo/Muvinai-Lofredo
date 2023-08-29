import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Volver = () => {
  const navigate = useNavigate();
  const volver = () => {
    navigate("/home");
  };

  return (
    <Button
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      sx={{
        height: "30px",
        width: "50px",
        marginTop: "20px",
        marginLeft: "25px",
      }}
      onClick={volver}
    >
      <ArrowBackIcon
        sx={{
          color: "white",
          fontSize: "30px",
          ":hover": {
            color: "#d1d1d1",
          },
        }}
      />
    </Button>
  );
};

export default Volver;
