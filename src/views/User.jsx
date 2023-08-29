import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { datosFalsos } from "../data/datosFalsos";
import { useParams } from "react-router-dom";
import DashInfo from "../components/user/DashInfo";
import UserIzq from "../components/user/UserIzq";
import UserDer from "../components/user/UserDer";
import UserCup from "../components/user/UserCup";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const newId = parseInt(id);

  useEffect(() => {
    setUser(datosFalsos.find((a) => a.id === newId));
  }, [newId]);

  if (user) {
    return (
      <Box display="flex">
        <UserIzq user={user} />
        <Box display="flex" ml="2vw" flexDirection="column">
          <Box display="flex">
            <Box>
              <UserDer user={user} />
            </Box>
            <Box>
              <UserCup user={user} />
            </Box>
          </Box>
          <DashInfo user={user} />
        </Box>
      </Box>
    );
  } else {
    <CircularProgress />;
  }
};

export default User;
