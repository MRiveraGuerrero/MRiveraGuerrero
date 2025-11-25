import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* Projects section placeholder - can be expanded later */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-gray-400">
            Coming soon... Check out my GitHub for more!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
