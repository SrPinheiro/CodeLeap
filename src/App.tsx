import { BrowserRouter } from "react-router-dom";
import Router from 'src/router';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "src/configs/themeConfig";
import { AuthProvider } from "src/contexts/AuthContext";
import { GlobalStyle } from "src/configs/GlobalStyle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <ToastContainer />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
