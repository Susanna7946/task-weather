import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TempType } from "../../common/enums/tempType.enum";
interface selectedState {
  tempType: TempType,
  selectedDateId: number,
  searchedCity: string,
}

const initialState: selectedState = {
  tempType: TempType.CELSIUS,
  selectedDateId: 0,
  searchedCity: 'Yerevan',
}

export const selectedWeather = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeTempType(state: selectedState, action: PayloadAction<TempType>)  {
      state.tempType = action.payload;
    },
    changeSelectedDateId(state: selectedState, action: PayloadAction<number> ) {
      state.selectedDateId = action.payload;
    },
    changeSearchedCity(state: selectedState, action: PayloadAction<string> ) {
      state.searchedCity = action.payload;
    },
  },
})

export default selectedWeather.reducer;