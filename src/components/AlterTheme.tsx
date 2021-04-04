import React from 'react';
import {CgSun} from 'react-icons/cg';
import {FaMoon} from 'react-icons/fa';
interface typeProps{
    setDark:(isDark:boolean)=>void;
}
function AlterTheme(props:typeProps) {
    function handleDarkTheme() {
        props.setDark(true);
    }
    function handleLightTheme(){
        props.setDark(false);
    }
    return(
        <div>
            <button
                onClick={handleLightTheme}
            >
                <CgSun />
            </button>

            <button
                onClick={handleDarkTheme}
            >
                <FaMoon />
            </button>
        </div>
    );
}

export default AlterTheme;
