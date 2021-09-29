import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Cards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
