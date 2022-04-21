const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchAPI() {
  const response = await fetch(api);
  const apii = await response.json();
  return apii;
}

export default fetchAPI;
