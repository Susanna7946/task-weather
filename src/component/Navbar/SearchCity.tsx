import React, { useState } from 'react';
import { selectedWeather } from "../../store/reducers/selectedWeatherSlice";
import { useAppDispatch } from "../../hooks/redux";
import './SearchCity.scss';

const SearchCity = () => {

  const dispatch = useAppDispatch();

  const [city, setCity] = useState('');
  const changeSelectedCity = () => {
    dispatch(selectedWeather.actions.changeSearchedCity(city));
  }

  return (
    <div className="search-wrapper">
      <input
        value={city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value) }/>
      <button onClick={changeSelectedCity}>Search City</button>
    </div>
  );
};

export default SearchCity;