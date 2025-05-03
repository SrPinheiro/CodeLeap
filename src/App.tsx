import { BrowserRouter } from "react-router-dom";
import Router from 'src/router';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "src/configs/themeConfig";
import { AuthProvider } from "src/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
