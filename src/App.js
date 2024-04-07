//import logo from './logo.svg';
import './App.css';
import Mentors from './components/Mentors';
import Navbar from './components/Navbar';
import Slides from './components/Slides';
import Faq from './components/Faq';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slides/>
      <Mentors/>
      <About/>
      <Faq/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
