import ItemDetails from '../item-details/Item-details';
import ItemParts from '../item-details/Item-parts';
import WithSwapiService from '../hoc-helpers/With-swapi-service';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <ItemParts field="gender" label="Gender" />
      <ItemParts field="eyeColor" label="Eye Color" />
      <ItemParts field="birthYear" label="Birth Year" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getOneCharacter,
    getImageUrl: swapi.getPersonImage,
  };
};

export default WithSwapiService(PersonDetails, mapMethodsToProps);
