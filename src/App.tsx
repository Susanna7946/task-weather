import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchWeather } from "./store/reducers/ActionCreators";
import Navbar from "./component/Navbar/Navbar";
import WeatherForDayCards from "./component/WeatherForDayCards/WeatherForDayCards";
import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const { searchedCity } = useAppSelector(state => state.selectedWeatherReducer);

  useEffect(() => {
    dispatch(fetchWeather(searchedCity));
  }, [searchedCity])

  return (
    <div>
      <Navbar/>
      <div className="content">
        <WeatherForDayCards/>
      </div>
    </div>
  );
}

export default App;
