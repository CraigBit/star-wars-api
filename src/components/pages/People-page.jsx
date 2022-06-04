import { Component } from 'react';
import Row from '../row/Row';
import { PersonList } from '../sw-components/Item-lists';
import PersonDetails from '../sw-components/Person-details';

export default class PeoplePage extends Component {
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
        leftElem={<PersonList onItemSelected={this.onItemSelected} />}
        rightElem={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}
