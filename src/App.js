
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';





function App() {

  


  return (
    <div>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/teamDetails/:idTeam">
           <TeamDetail></TeamDetail> 
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
