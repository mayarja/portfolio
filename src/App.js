import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import NavbarCo from "./components/navbar/NavbarCo";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavbarCo />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
