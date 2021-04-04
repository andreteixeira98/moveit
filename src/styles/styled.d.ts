/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components';
import {darkTheme, lightTheme} from './theme';

export type DarkTheme =  typeof darkTheme
export type LightTheme =  typeof lightTheme;

declare module 'styled-components'{
    export interface DefaultTheme  extends LightTheme{

    }
    export interface DarkTheme extends DarkTheme{

    }
}

