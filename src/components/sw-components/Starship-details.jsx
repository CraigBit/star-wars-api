import ItemDetails from '../item-details/Item-details';
import ItemParts from '../item-details/Item-parts';
import WithSwapiService from '../hoc-helpers/With-swapi-service';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <ItemParts field="model" label="Model" />
      <ItemParts field="length" label="Length" />
      <ItemParts field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getOneStarship,
    getImageUrl: swapi.getStarshipImage,
  };
};

export default WithSwapiService(StarshipDetails, mapMethodsToProps);
