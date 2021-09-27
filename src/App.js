import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">

        <nav className="navbar">
          <ul>
            <li className="home-active">
              <NavLink to="/" exact className="navlink" activeClassName="active-navlink">Home</NavLink>
            </li>

            <li className="about-active">
              <NavLink to="/about" exact className="navlink" activeClassName="active-navlink">About</NavLink>
            </li>

            <li>
              <NavLink to="/service" exact className="navlink" activeClassName="active-navlink">Services</NavLink>
            </li>
          </ul>
        </nav>
        <br/>
        

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/service">
            <Service />
          </Route>

          <Route path="/">
            <Home />
            <img src={logo} alt="logo" class="logo"></img>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About(){
  return( 
  <div>
    <h2>About</h2>
    <p>This is About Page</p>
  </div>
  );
}

function Service(){
  return( 
    <div>
      <h2>Services</h2>
      <p>This is Services Page</p>
    </div>
    );
}

function Home(){
  return( 
    <div>
      <h2>Home</h2>
      <p>This is Home Page</p>
    </div>
    );
}

export default App;
