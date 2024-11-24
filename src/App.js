import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Components/nav-bar/NavBar";
import { Banner } from "./Components/Banner/Banner";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <div className="conteiner-fluid">
        <div class="header">
          <header class="header-desktop">
            <div class="header-top">
            Top
            </div>
            <div class="header-middle">
            <Banner/>
            </div>
            <div class="header-bottom">
            <NavBar/>
            </div>
          </header>
          <header class="header-mobile">
            <NavBar mensaje="Las Delicias de Mafer"/>
          </header>
        </div>
        <div class="body">

        </div>
        <div class="footer">

        </div>
      </div>
    </div>
  );
}

export default App;
