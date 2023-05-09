import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ThemeKeyType, ThemeState} from "@/styles/theme/slice/types";
import {getThemeFromStorage} from "@/styles/theme/utils";

export const initialState: ThemeState = {
  selected: getThemeFromStorage(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
  },
});

export default themeSlice;

export const {actions: themeActions, reducer} = themeSlice;

