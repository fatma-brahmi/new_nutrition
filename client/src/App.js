import { Switch, Route, Link } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Profilnutri from './components/profil.js/Profilnutri';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Articls } from './components/articl/Articls';

import AddArticl from './components/addArticl/AddArticl';
import Home from './components/home/Home';
import ListArticl from './components/articl/ListArticl';
import Apropos from './components/aPropos/Apropos';
import Editprofil from './components/editprofil/Editprofil';
import Messenger from './components/messenger/Messenger';

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route exact path="/" component={Home}/>
        
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Signin} />
        
        {/*<Route path="/" />*/}
        <Route path='/add' component={AddArticl}/>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/listes" component={ListArticl}/>
        <PrivateRoute path="/profil" component={Profilnutri}/>
        <PrivateRoute path="/apropos" component={Apropos}/>
        <PrivateRoute path="/edit/:id" component={Editprofil}/>
        <PrivateRoute path="/messenger" component={Messenger}/>
       
      </Switch>
    </div>
  );
}

export default App;
