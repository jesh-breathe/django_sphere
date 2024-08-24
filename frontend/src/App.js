import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Headroom from 'react-headroom';

function App() {
  return (
    <div className="App">
      <Headroom>
        <Navbar />
      </Headroom>
      <Hero />
    </div>
  );
}

export default App;
