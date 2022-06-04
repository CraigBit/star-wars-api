// import 'bootswatch/dist/darkly/bootstrap.min.css';

// fetch('https://swapi.dev/api/people/1/')
//   .then((data) => {
//     return data.json();
//   })
//   .then((result) => {
//     console.log(result);
//   });
export default class SwapiOperator {
  _apiBeginning = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  async getData(url) {
    const data = await fetch(`${this._apiBeginning}${url}`);
    if (!data.ok) {
      throw new Error(`Error, did not receive ${url}, status ${data.status}`);
    }
    const body = await data.json();
    return body;
  }

  getAllPeople = async () => {
    const res = await this.getData('/people');
    return res.results.map(this._transformPerson);
  };

  getOneCharacter = async (id) => {
    const character = await this.getData(`/people/${id}`);
    return this._transformPerson(character);
  };

  getAllPlanets = async () => {
    const res = await this.getData('/planets');
    return res.results.map(this._transformPlanet);
  };

  getOnePlanet = async (id) => {
    const planet = await this.getData(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const starship = await this.getData('/starships');
    return starship.results.map(this._transformStarship);
  };

  getOneStarship = async (id) => {
    const starship = await this.getData(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  _extractId(item) {
    const isRegExp = /\/([0-9]*)\/$/;
    return item.url.match(isRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}

// const swapi = new SwapiOperator();
// swapi
//   .getAllPeople()
//   .then((chars) => chars.map((item) => console.log(item.name)));

// swapi.getOneCharacter(3).then((person) => console.log(person.name));

// getData('https://swapi.dev/api/people/1/')
//   .then((body) => console.log(body))
//   .catch((err) => console.log('ERROR', err));
