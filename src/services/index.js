import CountriesApiEndpoints from './countries.api';
import * as helpers from './helpers';

const Api = {
  ...helpers,
  countries: CountriesApiEndpoints,
};

export default Api;
