import React, {useState } from 'react';
import { AppProps} from 'next/app';
import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from '../styles/theme';
import Cookies from 'js-cookie';
const MyApp: React.FC<AppProps> = ({ Component, pageProps}) => {
    const[isDark, setIsDark] = useState( Cookies.get('isDark') ? true : false);
  return (
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <Component {...pageProps} isDark={isDark} setIsDark={setIsDark}/>
                <GlobalStyle />
            </ThemeProvider>
  );
}
export default MyApp;


