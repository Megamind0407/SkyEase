import Navbar from './Navbar';
import Header from './Header'
import BookingForm  from './BookingForm';
import PlanSection from './PlanSection';
import Memories from './Memories'
import Lounge from './Lounge'
import Travellers from './Travellers'
import Subscribe from './Subscribe'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <BookingForm/>
      <PlanSection/>
      <Memories/>
      <Lounge/>
      <Travellers/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
