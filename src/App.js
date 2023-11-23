import React from 'react';
import { useState, useEffect } from 'react';


/******Styles  **********/
import './index.css';
/*======================== */

/********** Components ****************/
import NavBar from './Components/NavBar/NavBar';
import TopBar from './Components/TopBar/topBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Produits from './Components/Produits/Produits';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';




function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

  return (
    <div className="App">

      <TopBar scrolling={scrolling} />
      <NavBar scrolling={scrolling} />

      <Home />

      <About />

      <Services />

      <Produits />

      <Gallery />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
