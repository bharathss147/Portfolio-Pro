import Loader from "./components/Loader";
import AmbientBackground from "./components/AmbientBackground";
import GlowCursor from "./components/GlowCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Dezigno from "./components/Dezigno";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Loader />
      <AmbientBackground />
      <GlowCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Dezigno />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
