import { Component } from 'react';
import Row from '../row/Row';
import { StarshipList } from '../sw-components/Item-lists';
import StarshipDetails from '../sw-components/Starship-details';

export default class StarshipsPage extends Component {
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
        leftElem={<StarshipList onItemSelected={this.onItemSelected} />}
        rightElem={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
