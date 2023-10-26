import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';


function App() {
  return(
    <Router>
      <>
        <Nav/>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/About"/>
          <Route path="/Projects" />
          <Route path="/Contact" />
        </Routes>
      </>
    </Router>
  )
}

export default App;
