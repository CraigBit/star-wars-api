import { Component } from 'react';
import ItemList from '../item-list/Item-list';
import Characters from '../characters-details/Characters';
import ErrorIndicator from '../error/ErrorIndicator';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 2,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            getItems={this.props.getItems}
            onItemSelected={this.onPersonSelected}
            renderItem={({ name, gender, birthYear }) =>
              `${name} (${gender}, ${birthYear})`
            }
          />
        </div>
        <div className="col-md-6">
          <Characters personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
