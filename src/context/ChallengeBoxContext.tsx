import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import challenges from '../data/challenges.json';

import {countedownContext} from '../context/CountedownContext';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface challengeBoxContextData{

    activeChallenge:Challenge;
    startNewChallenge:()=>void;
}

interface ChallengeBoxProviderProps{
    children:ReactNode;
}
export const challengeBoxContext = createContext( {}as challengeBoxContextData);

export const ChallengeBoxProvider: React.FC = ({children}:ChallengeBoxProviderProps) =>{

    const {hasFinished} = useContext(countedownContext);
    const[activeChallenge, setActiveChallenge] = useState(null);

    function startNewChallenge(){
        const indexChallenge = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[indexChallenge];
        setActiveChallenge(challenge as Challenge);
    }

    useEffect(()=>{
        if(hasFinished){
            startNewChallenge();
        }
    },[hasFinished]);
    return(
        <challengeBoxContext.Provider
            value={{
                activeChallenge,
                startNewChallenge
            }}
        >
            {children}
        </challengeBoxContext.Provider>
    );
}

export default ChallengeBoxProvider;
