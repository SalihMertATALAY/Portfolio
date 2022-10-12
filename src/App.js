import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Experience/>
    </div>
  );
}

export default App;
