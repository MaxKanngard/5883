const BASE_URL = 'https://restcountries.eu';
const SEARCH_PATH = 'rest/v2/name';

export const fetchCountryNames = async searchText => {
  const response = await fetch(`${BASE_URL}/${SEARCH_PATH}/${searchText}`);
  if (response.status === 200) {
    const json = await response.json();
    return json.map(country => country.name);
  }
  return [];
};
