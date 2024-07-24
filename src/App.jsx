import Header from './components/Header';
import Home from './components/Home';
import Body from './components/Body';
import About from './components/About';
import './App.css';
import Service from './components/Service';
import Expertize from './components/Expertize';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      {/* <Body /> */}
      <div>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/home" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/skills" element={<Expertize />} />
          <Route path="/portfolio/services" element={<Service />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
