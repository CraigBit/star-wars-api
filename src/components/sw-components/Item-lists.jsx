import ItemList from '../item-list/Item-list';
import WithData from '../hoc-helpers/With-data';
import WithSwapiService from '../hoc-helpers/With-swapi-service';

const withChildFunction = (Wrapped, func) => {
  return (props) => {
    return <Wrapped {...props}>{func}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllStarships,
  };
};

const PersonList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
);

const PlanetList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps
);

const StarshipList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
