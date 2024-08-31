import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Header from './Header'
import BookingForm from './BookingForm';
import PlanSection from './PlanSection';
import Memories from './Memories'
import Lounge from './Lounge'
import Travellers from './Travellers'
import Subscribe from './Subscribe'
import Footer from './Footer';
import About from './Components/About'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BookingForm />
      <PlanSection />
      <Memories />
      <Lounge />
      <Travellers />
      <Subscribe />
      <Footer />
          <Routes>
            <Route path='/About' element={<About />} />
          </Routes>
    </div>
  );
}

export default App;
