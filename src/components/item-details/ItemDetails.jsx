import React, { Component } from 'react';
import SwapiOperator from '../../services/swapi-operator';
import './ItemDetails.css';
import Spinner from '../spinner/Spinner';

export default class ItemDetails extends Component {
  swapi = new SwapiOperator();

  state = {
    item: null,
    loading: true,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    this.setState({ loading: true });
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then(this.onItemUpdated);
  }

  onItemUpdated = (item) => {
    const { getImageUrl } = this.props;
    this.setState({ item, loading: false, image: getImageUrl(item) });
  };

  render() {
    if (!this.state.item) return <span>Select an item from the list</span>;

    const { item, loading, image } = this.state;

    const loadingShown = loading ? <Spinner /> : null;
    const characterShown = !loading ? (
      <OneItem image={image} item={item} />
    ) : null;

    return (
      <div className="item-details card">
        {characterShown}
        {loadingShown}
      </div>
    );
  }
}

const OneItem = ({ item, image }) => {
  const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <React.Fragment>
      <img className="item-image" src={image} alt="character" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
