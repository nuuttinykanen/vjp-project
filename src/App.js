import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Etusivu from './pages/Etusivu';
import Keskustelu from './pages/Keskustelu';

function App() {
  return ( 
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path='/' exact element={<Etusivu/>} />
          <Route path='/keskustelu' element={<Keskustelu/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;