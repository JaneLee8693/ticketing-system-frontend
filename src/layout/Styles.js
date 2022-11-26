import React from 'react';
import { Header } from '../layout/navigation/Header';
import { Footer } from './navigation/Footer';


export const Styles = () => {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <Header />
      </header>

      <main className="main">Main content page</main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>  

  )
}
