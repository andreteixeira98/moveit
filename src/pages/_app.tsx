import React, {  useEffect, useState } from 'react';
import { AppProps} from 'next/app';
import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from '../styles/theme';
import AlterTheme from '../components/AlterTheme';
import Cookies from 'js-cookie';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const[isDark, setIsDark] = useState( Cookies.get('isDark') ? true : false);

    useEffect(() =>{
        if(isDark) {
            Cookies.set('isDark', 'true',{expires:30});
        }else{
            Cookies.set('isDark', '',{expires:30});
        }

    },[isDark]);
  return (
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <AlterTheme setDark={setIsDark}/>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
  );
}
export default MyApp;


