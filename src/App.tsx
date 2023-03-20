import React from 'react';
import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Main from './Pages/main/Main';
import About from './Pages/about/About';
import Error from './Pages/error/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
