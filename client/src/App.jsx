import Nav from "./components/Nav";
import Banner from "./views/Banner";
import About from "./views/About";
import Experiences from "./views/Experiences";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Banner />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experiences" element={<Experiences />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
