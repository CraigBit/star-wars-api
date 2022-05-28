import { Component } from 'react';
import ItemList from '../item-list/Item-list';
import ItemDetails from '../item-details/ItemDetails';
import Row from '../row/Row';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 2,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        getItems={this.props.getItems}
        onItemSelected={this.onPersonSelected}
        renderItem={({ name, birthYear }) => `${name} (${birthYear})`}
      />
    );

    const persons = (
      <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return <Row leftElem={itemList} rightElem={persons} />;
  }
}
