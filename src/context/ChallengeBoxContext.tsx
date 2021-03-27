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
    level: number;
    currentXp: number;
    xpNextLevel:number;
    percentXp: number;
    hasFinishedAnimationChangeXp:boolean;
    levelUp:()=>void;
    challengesCompleted:number;
    handleChallengeCompleted:()=>void;
    destroyChallenge:()=>void;
}

interface ChallengeBoxProviderProps{
    children:ReactNode;
    activeChallenge:Challenge;
    level: number;
    currentXp: number;
    xpNextLevel:number;
    percentXp: number;
    hasFinishedAnimationChangeXp:boolean;
    challengesCompleted:number;
}
export const challengeBoxContext = createContext( {}as challengeBoxContextData);

export const ChallengeBoxProvider: React.FC = ({children}:ChallengeBoxProviderProps) =>{

    const {hasFinished} = useContext(countedownContext);


    const[activeChallenge, setActiveChallenge] = useState(null);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const[level,setLevel] = useState(1);
    const[currentXp,setCurrentXp] = useState(0);
    const xpNextLevel = Math.pow((level + 1)*4, 2);
    let percentXp = ((currentXp*100) / xpNextLevel);

    let hasFinishedAnimationChangeXp = false;

    function startNewChallenge(){
        const indexChallenge = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[indexChallenge];
        setActiveChallenge(challenge as Challenge);
    }

   async function animationChangeXp(){
        const {amount} = activeChallenge;

        let finalXp = currentXp + amount;
        if(finalXp >= xpNextLevel){
            percentXp = 100;
            setCurrentXp(xpNextLevel);
            setTimeout(() => {

                hasFinishedAnimationChangeXp = true;
                percentXp = 0;
            },1500);

            setTimeout(() => {
                hasFinishedAnimationChangeXp = false;
                finalXp = finalXp - xpNextLevel;
                levelUp();
                setCurrentXp(finalXp);
                percentXp =  ((currentXp*100) / xpNextLevel);
            },2000);



        }else {
            setCurrentXp(finalXp);

        }

    }

    function handleChallengeCompleted(){
        animationChangeXp();
        setChallengesCompleted(challengesCompleted + 1);
        destroyChallenge();
    }
    function levelUp(){
        setLevel(level + 1);
    }

    function destroyChallenge(){
        setActiveChallenge(null);
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
                startNewChallenge,
                level,
                currentXp,
                xpNextLevel,
                percentXp,
                hasFinishedAnimationChangeXp,
                levelUp,
                challengesCompleted,
                handleChallengeCompleted,
                destroyChallenge
            }}
        >
            {children}
        </challengeBoxContext.Provider>
    );
}

export default ChallengeBoxProvider;
