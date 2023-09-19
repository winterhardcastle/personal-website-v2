import './App.css';
import React from 'react';
import logo from './logo.svg'
import ContactForm from './components/contact/ContactForm';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
