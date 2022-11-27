import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import CustomProvider from "./components/CustomProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
