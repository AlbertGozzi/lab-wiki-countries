import React from 'react';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span> WikiCountries </span>
      </header>
      <main>
        <div className="row">
          <CountryList countries={countries}/>
          <Switch>
            <Route path='/:countryCca3' component={CountryDetail}/>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
