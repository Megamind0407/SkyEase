import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import BookingForm from './BookingForm';
import PlanSection from './PlanSection';
import Memories from './Memories';
import Lounge from './Lounge';
import Travellers from './Travellers';
import Subscribe from './Subscribe';
import Footer from './Footer';
import About from './Components/About/About';

function App() {
  const location = useLocation(); 

  return (
    <div className="App">
      <Navbar />
      {location.pathname === '/' && (
        <>
          <Header />
          <BookingForm />
          <PlanSection />
          <Memories />
          <Lounge />
          <Travellers />
          <Subscribe />
        </>
      )}
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
