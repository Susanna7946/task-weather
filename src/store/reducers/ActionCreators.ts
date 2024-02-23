import axios, {AxiosError} from "axios";
import {AppDispatch} from "../store";
import {weatherSlice} from "./weatherSlice";

export const fetchWeather = (city:string) => async (dispatch: AppDispatch) => {
  dispatch(weatherSlice.actions.weatherFetching())
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?`,
    {
      params: {
        q: city,
        appid: process.env.OPEN_WEATHER_MAP_KEY,
        cnt: 5,
      }
    })
    .then((res) => {
        dispatch(weatherSlice.actions.weatherFetchingSuccess(
          res.data.list.map((item: any) => ({
            ...item.weather[0],
            temperature: {
              temp: item.main.temp,
              temp_max: item.main.temp_max,
              temp_min: item.main.temp_min,
            },
            date: item.dt_txt,
          })))
        );
      }
    )
    .catch((e: AxiosError) => {
        dispatch(weatherSlice.actions.weatherFetchingError(e.message))
      }
    )
}