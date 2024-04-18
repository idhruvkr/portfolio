import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import './App.css';
import Service from './components/Service';
import Expertize from './components/Expertize';

function App() {

  return (
    <>
      <Header />
      <Body />
      <About />
      <Service />
      <Expertize />
    </>
  )
}

export default App
