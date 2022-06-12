import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import About from "./Components/About/About";
import Carousel from "./Components/Carousel/Carousel";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Nav from './Components/NavBar/NavBar';
import Services from "./Components/ServicesProduct/Services";

function App() {

  return (
    <div>
      <Nav/> {/* componente Nav */}
      <Carousel/> {/*ejemplo - reemplazar por el componente sección Home-carousel */}
      <About/> {/*componente sección Sobre mi */}
      <Services/> {/*componente sección servicios */}
      <Contact/> {/*ejemplo - reemplazar por el componente sección Contacto */}
      <Footer/> {/*componente footer */}
    </div>
  )
}

export default App
