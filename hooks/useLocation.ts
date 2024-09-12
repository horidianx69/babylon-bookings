// This code defines a custom React hook called useLocation, 
// which provides utility functions for retrieving location data 
// (countries, states, and cities) using the country-state-city library

import { Country, State, City } from 'country-state-city';

// This defines the useLocation hook. Inside this hook, we have a set of 
// functions that allow us to interact with the country-state-city library to
//  fetch specific location data.
const useLocation = () => {
  const getCountryByCode = (countryCode: string) => {
    return Country.getAllCountries().find((country) => country.isoCode === countryCode);
  };

  const getStateByCode = (countryCode: string, stateCode: string) => {
    return State.getAllStates().find(
      (state) => state.countryCode === countryCode && state.isoCode === stateCode
    );
  };

  const getCountryStates = (countryCode: string) => {
    return State.getAllStates().filter((state) => state.countryCode === countryCode);
  };

  const getStateCities = (countryCode: string, stateCode?: string) => {
    return City.getAllCities().filter(
      (city) => city.countryCode === countryCode && city.stateCode === stateCode
    );
  };

// The hook returns an object containing references to the location-related functions.
// Additionally, Country.getAllCountries is directly exposed to retrieve all countries at once.
  return {
    getAllCountries: Country.getAllCountries,
    getCountryByCode,
    getStateByCode,
    getCountryStates,
    getStateCities,
  };
};

export default useLocation;

