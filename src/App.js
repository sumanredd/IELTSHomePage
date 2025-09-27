import NavBar from './components/Navbar';
import HeroSec from './components/HeroSec';
import Features from './components/Features';
import StudentReviews from './components/Testimonials';
import Footer from './components/Footer';
import { BeatLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
  <BeatLoader color="#2563eb" size={15} margin={5} />
</div>
      ) : (
        <div>
          <NavBar />
          <HeroSec />
          <Features />
          <StudentReviews />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
