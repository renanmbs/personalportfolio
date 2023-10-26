import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';


function App() {
  return(
    <Router>
      <>
        <Nav/>
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/About"/>
          <Route path="/Projects" />
          <Route path="/Contact" />
        </Switch>
      </>
    </Router>
  )
}

export default App;
