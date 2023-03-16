import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Pages/main/Main';
import About from './Pages/about/About';
import Error from './Pages/error/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
