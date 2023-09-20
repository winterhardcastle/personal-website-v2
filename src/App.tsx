
import React from 'react';
import Navbar from './components/nav/Navbar';
import AppRoutes from './AppRoutes';
import Footer from './components/nav/Footer';

function App() {
  return (
    <div className="text-center bg-white App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
