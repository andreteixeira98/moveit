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

const CountedownProvider: React.FC= ({children}:CountedownProviderProps) =>{

        const [time,setTime] = useState(0.05*60);
        const[isActive,setIsActive] = useState(false);
        const[hasFinished, setHasFinished] = useState(false);
        const minutes = Math.floor(time/60);
        const seconds = time%60;

        function handleCountedown(){
            setIsActive(!isActive);
        }
        function resetCountedown(){
            clearTimeout(countdownTimeout);
            setTime(0.05*60);
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

export default CountedownProvider;
