import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Signup from './pages/signup';
import Dashbaord from './components/Dashboard';


function App() {
  // const loadScript = function (url) {
  //   var s = document.createElement("script");
  //   s.src = url;
  //   s.onload = function () {
  //     window.gapi.load('auth2', function () {
  //       var auth2 = window.gapi.auth2.init({
  //         client_id: '425769475738-5nsmqrlatdene4ih1qfkj6grmt5bf18i.apps.googleusercontent.com'
  //       });
  //     });
  //   }
  //   document.head.appendChild(s)
  // }
  // loadScript("https://apis.google.com/js/client:platform.js")
  console.log(window.auth2)
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
