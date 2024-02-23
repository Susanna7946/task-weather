import {combineReducers, configureStore} from "@reduxjs/toolkit"
import weatherReducer from "./reducers/weatherSlice"
import selectedWeatherReducer from "./reducers/selectedWeatherSlice"

const rootReducer = combineReducers({
  weatherReducer,
  selectedWeatherReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: "https://api.openweathermap.org/data/2.5/weather"
        }
      })
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']