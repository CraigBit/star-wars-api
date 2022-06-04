import ItemDetails from '../item-details/Item-details';
import ItemParts from '../item-details/Item-parts';
import WithSwapiService from '../hoc-helpers/With-swapi-service';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <ItemParts field="population" label="Population" />
      <ItemParts field="rotationPeriod" label="Rotation Period" />
      <ItemParts field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getOnePlanet,
    getImageUrl: swapi.getPlanetImage,
  };
};

export default WithSwapiService(PlanetDetails, mapMethodsToProps);
