import './App.css';
import React from 'react';
import logo from './logo.svg'
import ContactForm from './components/contact/ContactForm';
import Navbar from './components/nav/Navbar';
import { hackerText } from './utils/functions'

function App() {
  return (
    <div className="bg-white App">
      <Navbar />
      <ContactForm />
      <div id="footer" className="pt-24 px-8">
            <p onMouseOver={hackerText} data-value="© 2023 WINTER HARDCASTLE" className="bg-white text-black text-sm font-light py-4 border-t">© 2023 WINTER HARDCASTLE</p>
      </div>
    </div>
  );
}

export default App;
