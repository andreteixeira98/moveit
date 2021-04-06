import React, { memo, useEffect, useState } from 'react';
import {Container} from '../styles/components/AlterTheme';
import Cookies from 'js-cookie';
interface typeProps{
    isDark:boolean;
    setIsDark:(isDark:boolean)=>void;
}

function AlterTheme(props:typeProps) {
    //const [currentRange, setCurrentRange] = useState(props.isDark ? '1' : '0');

    function handleDarkTheme(){
       props.setIsDark(!props.isDark);
    }

    useEffect(() =>{
        if(props.isDark) {
            Cookies.set('isDark', 'true',{expires:30});
        }else{
            Cookies.set('isDark', '',{expires:30});
        }
    },[props.isDark]);

    return(
        <Container>
            <span>dark mode</span> &nbsp;
            <button
                className={props.isDark? 'dark-mode-enable' : 'dark-mode-disable'}
                onClick={handleDarkTheme}
            >
                <div/>
            </button>
        </Container>
    );
}

export default memo(AlterTheme);
