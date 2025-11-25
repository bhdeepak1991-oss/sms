import { BrowserRouter } from "react-router-dom";
import SidemenuComponent from "./components/home/sidemenu-component";
import FooterComponent from "./components/home/footer-component";
import HeaderComponent from "./components/home/header-component";
import PmsRouter from "./components/pms-router";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderComponent />
        <SidemenuComponent />
        <div className="content-wrapper">
          <PmsRouter />
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
