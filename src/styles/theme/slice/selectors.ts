import {createSelector} from '@reduxjs/toolkit';
import {RootState} from "@/types";
import {initialState} from "@/styles/theme/slice/index";
import {isSystemDark} from "@/styles/theme/utils";
import {themes} from "@/styles/theme/themes";


export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.dark : themes.light;
    }
    return themes[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);
