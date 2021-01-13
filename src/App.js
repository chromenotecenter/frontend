import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Signup from './pages/signup';
import Cookies from 'js-cookie';
import { BackendURL } from './components/BackendURL';
import Dashbaord from './components/Dashboard';


function App() {
  // let csrf = Cookies.get('csfrtoken');
  // if (!csrf){
  //   fetch(BackendURL + 'api/csfr_token',{method: "GET", credentials: 'include'}).then(response => response.json())
  //   // .then(res_token => Cookies.set('csrftoken', res_token['csrf_token'], {path: ''});)

  // }
  console.log("hi bruce")
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/dashboard' exact component={Dashbaord} />
      </Switch>
    </Router>
  );
}

export default App;
