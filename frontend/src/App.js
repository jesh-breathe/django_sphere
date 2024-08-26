import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Headroom from 'react-headroom';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Headroom>
        <Navbar />
      </Headroom>
      <Hero />
      <About />
    </div>
  );
}

export default App;
