import React, { ReactNode, useEffect, useState } from 'react';

import {createContext} from 'react';

let countdownTimeout: NodeJS.Timeout;

interface CountedownContextData{
    seconds: number;
    minutes: number;
    isActive:boolean;
    hasFinished:boolean;
    handleCountedown:()=>void;
    resetCountedown:()=>void;
}

interface CountedownProviderProps{
    children:ReactNode;
}
export const countedownContext = createContext({} as CountedownContextData);

export default function CountedownProvider ({children}:CountedownProviderProps){

        const [time,setTime] = useState(Math.floor(25*60));
        const[isActive,setIsActive] = useState(false);
        const[hasFinished, setHasFinished] = useState(false);
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time%60);

        function handleCountedown(){
            setIsActive(!isActive);
        }
        function resetCountedown(){
            clearTimeout(countdownTimeout);
            setTime(Math.floor(0.017*60));
            setIsActive(false);
            setHasFinished(false);
        }



        useEffect(() =>{
            if(isActive && time > 0){
                countdownTimeout = setTimeout(() =>{
                    setTime(time - 1);
                },1000);
            }else if(isActive && time == 0){
                setHasFinished(true);
            }
        },[isActive,time]);



    return(
        <countedownContext.Provider
            value={{
                seconds,
                minutes,
                isActive,
                hasFinished,
                handleCountedown,
                resetCountedown
            }}
        >
            {children}
        </countedownContext.Provider>
    );
}
