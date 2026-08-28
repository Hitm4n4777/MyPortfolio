import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Background from "./components/background";

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Contact/>
      </main>

    </div>
  );
}

export default App;