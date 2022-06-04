import { SwapiServiceConsumer } from '../swapi-service-context/Swapi-service-context';

const WithSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapi) => {
          const serviceProps = mapMethodsToProps(swapi);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default WithSwapiService;
