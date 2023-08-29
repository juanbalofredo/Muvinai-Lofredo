import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/Topbar";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import User from "./views/User";
import Login from "./views/Login";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App">
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/user/id/:id" element={<User />} />
                <Route path="/home" element={<Home />} />
                {/* Aca se muestra el login*/}
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
