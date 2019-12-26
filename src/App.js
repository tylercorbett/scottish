import React from 'react';
import './App.css';
import Contact from './components/contact/Contact';
import Order from './components/order/Order';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Order />
    </div>
  );
}

export default App;
