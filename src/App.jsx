import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav scrollToSection={scrollToSection}/>
      <Banner />
      <About />
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
