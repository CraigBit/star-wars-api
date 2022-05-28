import Header from './components/header/Header';
import RandomPlanet from './components/random-planet/Random-planet';
import { Component } from 'react';
import Row from './components/row/Row';
import SwapiOperator from './services/swapi-operator';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import ItemDetails from './components/item-details/ItemDetails';

import './App.css';

class App extends Component {
  swapi = new SwapiOperator();

  render() {
    const {
      getOneCharacter,
      getOneStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapi;

    const personDetails = (
      <ItemDetails
        getImageUrl={getPersonImage}
        getData={getOneCharacter}
        itemId={13}
      />
    );

    const starshipDetails = (
      <ItemDetails
        getImageUrl={getStarshipImage}
        getData={getOneStarship}
        itemId={5}
      />
    );

    return (
      <ErrorBoundary>
        <div className="container-fluid">
          <Header />
          <RandomPlanet />
          <Row leftElem={personDetails} rightElem={starshipDetails} />

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
      </ErrorBoundary>
    );
  }
}

export default App;
