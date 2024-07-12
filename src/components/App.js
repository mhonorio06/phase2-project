import React, {useState} from 'react';
import NavBar from './NavBar';
import { Switch, Route} from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Movies from "./Movies";

function App() {
  const [page, setPage] = useState("/");

  return (
      <div>
        <NavBar onChangePage={setPage} />
        
            <Switch>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/movies">
                <Movies/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
        
      </div>
  )
}
    

export default App;
