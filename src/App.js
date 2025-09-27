import NavBar from './components/Navbar';
import './App.css';
import HeroSec from './components/HeroSec';
import Features from './components/Features';
import StudentReviews from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <HeroSec/>
      <Features/>
      <StudentReviews/>
      <Footer/>
    </div>
  );
}

export default App;
