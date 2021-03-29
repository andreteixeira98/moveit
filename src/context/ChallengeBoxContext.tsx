import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

import Cookies from 'js-cookie';

import challenges from '../data/challenges.json';

import {countedownContext} from '../context/CountedownContext';
import LevelUpMoldal from '../components/LevelUpModal';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface challengeBoxContextData{

    activeChallenge:Challenge;
    startNewChallenge:()=>void;
    level: number;
    levelUpModal:boolean;
    closedLevelUpModal:()=>void;
    isLevelUpModalOpen:boolean;
    currentXp: number;
    xpNextLevel:number;
    levelUp:()=>void;
    resetLevelUpModal:()=>void;
    challengesCompleted:number;
    handleChallengeCompleted:()=>void;
    destroyChallenge:()=>void;
}

interface ChallengeBoxProviderProps{
    children:ReactNode;
    level: number;
    currentXp: number;
    challengesCompleted:number;
}
export const challengeBoxContext = createContext( {}as challengeBoxContextData);

export function ChallengeBoxProvider({children,...res}:ChallengeBoxProviderProps){

    const {hasFinished} = useContext(countedownContext);


    const[activeChallenge, setActiveChallenge] = useState(null);
    const [challengesCompleted, setChallengesCompleted] = useState(res.challengesCompleted ?? 0);
    const[level,setLevel] = useState(res.level ?? 1);
    const[levelUpModal, setLevelUpModal]  = useState(false);
    const[isLevelUpModalOpen,setIsLevelUpModalOpen ] = useState(false);
    const[currentXp,setCurrentXp] = useState(res.currentXp ?? 0);
    const xpNextLevel = Math.pow((level + 1)*4, 2);

    function startNewChallenge(){
        const indexChallenge = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[indexChallenge];
        setActiveChallenge(challenge as Challenge);

    }

    function handleChallengeCompleted(){
        const {amount} = activeChallenge;

        let finalXp = currentXp + amount;
        if(finalXp >= xpNextLevel){
            finalXp = finalXp - xpNextLevel;
            levelUp();
            setLevelUpModal(true);
        }else{
            resetLevelUpModal();
        }

        setCurrentXp(finalXp);
        setChallengesCompleted(challengesCompleted + 1);
        destroyChallenge();
    }
    //TO DO
    function levelUp(){
        setLevel(level + 1);
        setTimeout(() =>{
            setIsLevelUpModalOpen(true);
        },1200);
    }
    function resetLevelUpModal(){
        setLevelUpModal(false);
    }

    function destroyChallenge(){
        setActiveChallenge(null);
    }

    function closedLevelUpModal(){
        setIsLevelUpModalOpen(false);
    }

    useEffect(() =>{
        Cookies.set('level', String(level),{expires:30});
        Cookies.set('currentXp', String(currentXp),{expires:30});
        Cookies.set('challengesCompleted', String(challengesCompleted),{expires:30});
    },[level, currentXp, challengesCompleted]);

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
                levelUpModal,
                isLevelUpModalOpen,
                closedLevelUpModal,
                currentXp,
                xpNextLevel,
                levelUp,
                resetLevelUpModal,
                challengesCompleted,
                handleChallengeCompleted,
                destroyChallenge
            }}
        >
            {children}
            {isLevelUpModalOpen && <LevelUpMoldal />}
        </challengeBoxContext.Provider>
    );
}
