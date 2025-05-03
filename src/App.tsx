import { BrowserRouter } from "react-router-dom";
import Router from 'src/pages/router';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "src/configs/themeConfig";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
