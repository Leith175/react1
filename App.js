import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import {BrowserRouter as Router,Switch,route,link} from "react-router-dom";

import Home from "./Home";
import MoviePage from "./pages/MoviePage";
const App = () => {
  console.log("hello");
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">movies</Link>
          </li>
      
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/movies" component={MoviePage} />
      </Switch>
    </div>
  );
};

export default App;
