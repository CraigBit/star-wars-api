import { Component } from 'react';
import './App.css';

import SwapiOperator from './services/swapi-operator';
import { SwapiServiceProvider } from './components/swapi-service-context/Swapi-service-context';

import ErrorBoundary from './components/error-boundary/Error-boundary';

import Header from './components/header/Header';
import RandomPlanet from './components/random-planet/Random-planet';
import PeoplePage from './components/pages/People-page';
import PlanetsPage from './components/pages/Planets-page';
import StarshipsPage from './components/pages/Starships-page';

class App extends Component {
  swapi = new SwapiOperator();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapi}>
          <div className="container-fluid">
            <Header />
            <RandomPlanet />

            <PeoplePage />

            <PlanetsPage />

            <StarshipsPage />

            {/* <PeoplePage getItems={this.swapi.getAllPeople} />
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
          </div> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
