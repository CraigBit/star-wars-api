import { Component } from 'react';
import './Item-list.css';
// import SwapiOperator from '../../services/swapi-operator';
import Spinner from '../spinner/Spinner';

class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getItems } = this.props;

    getItems().then((itemList) => this.setState({ itemList }));
  }

  renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  render() {
    const { itemList } = this.state;

    if (!itemList) return <Spinner />;

    const items = this.renderItems(itemList);

    return <ul className="item-list list-group embed">{items}</ul>;
  }
}
export default ItemList;
