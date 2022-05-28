import React, { Component } from 'react';
import SwapiOperator from '../../services/swapi-operator';
import './Characters.css';
import Spinner from '../spinner/Spinner';

export default class Characters extends Component {
  swapi = new SwapiOperator();

  state = {
    person: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    this.setState({ loading: true });
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapi.getOneCharacter(personId).then(this.onPersonUpdated);
  }

  onPersonUpdated = (person) => {
    this.setState({ person, loading: false });
  };

  render() {
    if (!this.state.person) return <span>Select a person from the list</span>;

    const { person, loading } = this.state;

    const loadingShown = loading ? <Spinner /> : null;
    const characterShown = !loading ? <OneCharacter person={person} /> : null;

    return (
      <div className="person-details card">
        {characterShown}
        {loadingShown}
      </div>
    );
  }
}

const OneCharacter = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <React.Fragment>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="character"
      />

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