import React from 'react';
import { AppProps} from 'next/app';
import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import CountedownProvider from '../context/CountedownContext';
import ChallengeBoxProvider from '../context/ChallengeBoxContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
   <ThemeProvider theme={theme}>
        <CountedownProvider>
            <ChallengeBoxProvider>
                 <Component {...pageProps} />
            </ChallengeBoxProvider>
        </CountedownProvider>
         <GlobalStyle />
   </ThemeProvider>
  );
}
export default MyApp;
