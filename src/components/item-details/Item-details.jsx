import React, { Component } from 'react';
import './Item-details.css';
import Spinner from '../spinner/Spinner';
import OneItem from './One-item';

export default class ItemDetails extends Component {
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
      <OneItem image={image} item={item}>
        {this.props.children}
      </OneItem>
    ) : null;

    return (
      <div className="item-details card">
        {characterShown}
        {loadingShown}
      </div>
    );
  }
}
