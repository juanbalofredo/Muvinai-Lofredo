import { Box } from "@mui/material";
import Avatar from "./Avatar";
import Volver from "./Volver";
import Info from "./Info";
import BotonesAvatar from "./BotonesAvatar";

const UserIzq = ({ user }) => {

  
  return (
    <Box
      display="flex"
      flexDirection="column"
      ml="2vw"
      sx={{
        width: "26vw",
        height: "87vh",
        backgroundColor: "secondary.main",
        boxShadow: "10px 1px 9px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
      }}
    >
      <Volver />
      <Box display="flex">
        <Avatar user={user} /><BotonesAvatar user={user}/>
      </Box>
      <Info user={user} />
    </Box>
  );
};

export default UserIzq;
