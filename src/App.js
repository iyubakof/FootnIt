import React from 'react';
import Navigation from './constants/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RecipeContainer from './components/Recipes/RecipeContainer';
import About from './components/About/About';

import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/recipes" /*component={RecipeContainer}*/>
            <RecipeContainer />
          </Route>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/cuisines">
            {/* Cuisines */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
