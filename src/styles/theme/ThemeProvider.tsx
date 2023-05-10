import React from "react";
import {useSelector} from "react-redux";
import {selectTheme} from "@/styles/theme/slice/selectors";
import {ThemeProvider as OriginalThemeProvider} from 'styled-components';


export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const theme = useSelector(selectTheme);

  return (
    <OriginalThemeProvider theme={theme}>
      {props.children}
    </OriginalThemeProvider>
  );
}