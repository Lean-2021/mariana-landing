import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import About from "./Components/About/About";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import Nav from './Components/NavBar/NavBar';
import Services from "./Components/ServicesProduct/Services";
import FormContact from "./Components/FormContact/FormContact";

function App() {

  return (
    <section>
      <Nav/> {/* componente Nav */}
      <Carousel/> {/*ejemplo - reemplazar por el componente sección Home-carousel */}
      <About/> {/*componente sección Sobre mi */}
      <Services/> {/*componente sección servicios */}
      <FormContact/> {/*componente sección Contacto */}
      <Footer/> {/*componente footer */}
    </section>
  )
}

export default App
