import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Home } from "./pages/Home";
import { Theme } from "./themes/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              fontFamily: "Poppins",
              backgroundColor: "#181a1b",
            },
          }}
        />
         <Home />
      </ThemeProvider>
     
    </>
  );
}

export default App;
