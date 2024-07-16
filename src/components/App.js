import React from 'react';
import NavBar from './NavBar';
import { Routes, Route} from "react-router-dom"
import AddMovie from './AddMovie';
import Home from "./Home";
import Movies from "./Movies";
import MovieDetails from './MovieDetails';

function App() {
  

  return (
      <div>
        
        <NavBar/>
          <Routes>
              <Route path="/movies/new"
                element={<AddMovie/>}>
              </Route>
              <Route exact path="/movies/:id"
              element = {<MovieDetails/>}>  
              </Route>
              <Route path="/movies"
                element = {<Movies/>}>
              </Route>
              <Route exact path="/"
                element = {<Home/>}>
              </Route>
              <Route path="*"
                element ={<h2>404 not found</h2>}>
              </Route>
          </Routes>
        
      </div>
  )
}
    

export default App;
