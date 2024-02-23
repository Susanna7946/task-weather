import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../../models/weather";

interface WeatherState {
  weather: Weather[],
  isLoading: boolean,
  error: string,
}

const initialState: WeatherState = {
  weather: [],
  isLoading: false,
  error: '',
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherFetching(state: WeatherState)  {
      state.isLoading = true;
    },
    weatherFetchingSuccess(state: WeatherState, action: PayloadAction<Weather[]> ) {
      state.isLoading = false;
      state.weather = action.payload;
    },
    weatherFetchingError(state: WeatherState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

export default weatherSlice.reducer;