import Header from './components/header/Header';
import RandomPlanet from './components/random-planet/Random-planet';
import { Component } from 'react';
import ItemList from './components/item-list/Item-list';
import Characters from './components/characters-details/Characters';

import './App.css';
import PeoplePage from './components/people page/People-page';
import SwapiOperator from './services/swapi-operator';

class App extends Component {
  swapi = new SwapiOperator();

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <RandomPlanet />

        <PeoplePage getItems={this.swapi.getAllPeople} />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              getItems={this.swapi.getAllPlanets}
              onItemSelected={this.onPersonSelected}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <Characters />
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              getItems={this.swapi.getAllStarships}
              onItemSelected={this.onPersonSelected}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <Characters />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
