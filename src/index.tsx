import {ThemeProvider} from "./context/theme/provider";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./styles/index.scss";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
)