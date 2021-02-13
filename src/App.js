import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Signup from './pages/signup';
import Cookies from 'js-cookie';
import { BackendURL } from './components/BackendURL';


function App() {
  // fetch("https://84c38a1d66f9.ngrok.io/cookie", {
  //   method: "GET",
  //   headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     credentials: 'include'
  //   }
  // )

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
