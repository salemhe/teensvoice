import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Programs from './routes/Programs';
import Signup from './routes/Signup';
import Blog from './routes/Blog';
import Volonteer from './routes/Volonteer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/programs' element={<Programs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/volunteer' element={<Volonteer />} />
      </Routes>

      
      
    </div>
  );
}

export default App;
