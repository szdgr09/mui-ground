import "./App.css";
import ResponsiveDrawer from "./layout/drawer/Drawer";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "./theme/theme";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  ...themeOptions,
});

function App() {
  console.log("window", window);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <ResponsiveDrawer />
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
