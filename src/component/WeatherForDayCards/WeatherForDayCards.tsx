import React from 'react';
import WeatherForDayCard from "../WeatherForDayCard/WeatherForDayCard";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import './WeatherForDayCards.scss'
import {selectedWeather} from "../../store/reducers/selectedWeatherSlice";

const WeatherForDayCards = () => {
  const { weather, isLoading, error } = useAppSelector(state => state.weatherReducer);
  const { selectedDateId } = useAppSelector(state => state.selectedWeatherReducer);

  const dispatch = useAppDispatch();

  const selectDay = (id: number) => {
    dispatch(selectedWeather.actions.changeSelectedDateId(id));
  }

  return (
    <div className="cards-wrapper">
      {
        !isLoading && weather.map((item) =>
          <WeatherForDayCard
            id={item.id}
            icon={item.icon}
            temp={item.temperature.temp}
            dateString={item.date}
            selectDay={selectDay}
            selected={selectedDateId === item.id}
          />
        )
      }
    </div>
  );
};

export default WeatherForDayCards;