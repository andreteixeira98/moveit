import React, { ReactNode, useEffect, useState } from 'react';

import {createContext} from 'react';


export const CountedownContext = createContext({} as ReactNode);

const CountedownProvider: React.FC = () =>{
    const [time,setTime] = useState(25*60);

    function handleCountedown(){

    }

    useEffect(() =>{
        if(time > 0){
            setTimeout(() =>{
                setTime(time - 1);
            },1000);
        }
    },[time]);

    return(

    );
}

export default CountedownProvider;



