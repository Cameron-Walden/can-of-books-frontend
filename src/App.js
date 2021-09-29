import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import BestBooks from './components/BestBooks.js';
// import Footer from './components/Footer.js';

function App() {
  console.log(process.env.REACT_APP_SERVER)
  return (
    <>
    <Header />
    <h3>placeholder</h3>
    <BestBooks />
    </>
  );
}

export default App;