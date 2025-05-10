import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+918217455216" />
    </div>
  );
}

export default Layout; 