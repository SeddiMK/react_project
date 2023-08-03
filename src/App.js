import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Create from './components/Create';
import About from './components/About';
import Note from './components/Note';
import Error from './components/Error';

function App() {
  return (
    <>
      <div className="main">
        <Router>
          <Header></Header>
          <div className="main-page">
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/create" element={<Create />} />
              <Route exact path="/note/" element={<Note />} />
              <Route exact path="/note/:noteURL" element={<Note />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
