import { Component } from 'react';
import Row from '../row/Row';
import { PlanetList } from '../sw-components/Item-lists';
import PlanetDetails from '../sw-components/Planet-details';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        leftElem={<PlanetList onItemSelected={this.onItemSelected} />}
        rightElem={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
