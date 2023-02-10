import HttpHelpers from './helpers';

const CountriesApiEndpoints = {
  getCountries: () => {
    return HttpHelpers.axiosInterceptor
      .get('all')
      .then((response) => response.data);
  },
  getCountriesByRegion: (region) => {
    return HttpHelpers.axiosInterceptor
      .get(`region/${region}`)
      .then((response) => response.data);
  },
  getCountriesByName: (name, params) => {
    return HttpHelpers.axiosInterceptor
      .get(`name/${name}`, { params })
      .then((response) => response.data);
  },
};

export default CountriesApiEndpoints;
