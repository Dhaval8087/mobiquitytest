import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/toastr/build/toastr.css'
import SeasonList from "./components/season/seasonlist";
import WinnerList from "./components/season/winnerlist";
const App = () => (
  <Router>
    <div className="App">
      <Switch>
        {/* Student List Registration */}
        <Route exact path="/" component={SeasonList} />
        <Route exact path="/winners/:season" component={WinnerList} />
        
      </Switch>
    </div>
  </Router>
);

export default App;