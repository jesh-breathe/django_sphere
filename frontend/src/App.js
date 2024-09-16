import Headroom from 'react-headroom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Goal from './components/Goal';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Vision from './components/Vision';

function App() {
  return (
    <div className="App">
      <Headroom>
        <Navbar />
      </Headroom>
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Goal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
