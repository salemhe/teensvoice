// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/navbar/Navbar';
// import Home from './routes/Home';
// import About from './routes/About';
// import Contact from './routes/Contact';
// import Programs from './routes/Programs';
// import Signup from './routes/Signup';
// import Blog from './routes/Blog';
// import Volonteer from './routes/Volonteer';

// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// // import Navbar from './components/navbar/Navbar';
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import Programs from "./routes/Programs";
// import Signup from "./routes/Signup";


// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/programs" element={<Programs />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path='/blog' element={<Blog />} />
//         <Route path='/volunteer' element={<Volonteer />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Programs from "./routes/Programs";
import Signup from "./routes/Signup";
import Blog from "./routes/Blog";
import Volonteer from "./routes/Volonteer";
import Drug from "./routes/Drug";
import Crime from "./routes/Crime";
import Firstlove from "./routes/Firstlove";
import Private from "./routes/Private";
import Vpolicy from "./routes/Vpolicy";
import Thanks from "./routes/ThanksPage";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/volunteer" element={<Volonteer />} />
        <Route path="/drugabuse" element={<Drug />} />
        <Route path="/cybercrime" element={<Crime />} />
        <Route path="/firstlove" element={<Firstlove />} />
        <Route path="/privacypolicy" element={<Private />} />
        <Route path="/Volunteerpolicy" element={<Vpolicy />} />
        <Route path= "/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
