import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/background";
import ProjectDetails from "./components/ProjectDetails";
// import Education from "./components/Education";
import { Route, Routes } from "react-router-dom";
import Exp from "./components/Exp";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Background />
            <Navbar />

            <main>
              <Hero />
              <About />
              {/* <Education /> */}
              <Exp />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
        }
      />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
