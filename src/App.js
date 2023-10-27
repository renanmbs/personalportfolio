import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';
import { About } from './components/about/about';


function App() {
  return(
    <Router>
      <>
        <Nav/>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Projects" />
          <Route path="/Contact" />
        </Routes>
      </>
    </Router>
  )
}

export default App;
