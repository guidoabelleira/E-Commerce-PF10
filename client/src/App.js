import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <h1>Hola</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
