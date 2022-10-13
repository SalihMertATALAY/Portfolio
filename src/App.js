import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Home className="AboutMe"/>
      <div ref={AboutMe}> <AboutMe className="AboutMe"/></div>
      <Experience className="AboutMe"/>
      <Contact className="AboutMe"/>
    </div>
  );
}

export default App;
