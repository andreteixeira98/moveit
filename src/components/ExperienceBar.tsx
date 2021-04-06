import React, { useContext, useEffect, useState,memo } from 'react';
import { challengeBoxContext } from '../context/ChallengeBoxContext';
import {Container} from '../styles/components/ExperienceBar';

const ExperienceBar: React.FC = ( ) =>{
    const {
        level,
        levelUpModal,
        resetLevelUpModal,
        currentXp,
        xpNextLevel,
    } = useContext(challengeBoxContext);

    let percentXp = ((currentXp*100) / xpNextLevel);
    const[nameClassePercentXp, setNameClassePercentXp] = useState('InitialXpWidith');
    const[tempCurrentXp, setTempCurrentXp] = useState(0);
    const[tempPercentXp, setTempPercentXp] = useState(0);
    const[tempXpNextLevel, setTemXpNextLevel] = useState(0);


   useEffect(() =>{
        if(levelUpModal){
            setTimeout(() =>{
                setTempPercentXp(100);
                setTemXpNextLevel(Math.pow((level)*4, 2));
                setTempCurrentXp(tempXpNextLevel);
            },200);

            setTimeout(() =>{
                setTempPercentXp(0);
                setTempCurrentXp(0);

            },1800);

            setTimeout(() =>{
                setTempPercentXp(percentXp);
                setTempCurrentXp(currentXp);
                setTemXpNextLevel(xpNextLevel);
            },2500);
            resetLevelUpModal();
        }else{
            setTimeout(() =>{
                setTempPercentXp(percentXp);
                setTempCurrentXp(currentXp);
                setTemXpNextLevel(xpNextLevel);
            },200);
        }
   },[currentXp]);

   useEffect(() =>{
    if(tempPercentXp == 100){
        setNameClassePercentXp('percentXpChangeForWidith100');
    }else if(tempPercentXp == 0){
        setNameClassePercentXp('percentXpChangeForWidith0');
    }else if(tempPercentXp == percentXp){
        setNameClassePercentXp('InitialXpWidith');
    }
   },[tempPercentXp]);

    return (
       <Container>
           <span className="initialXp"> &nbsp;&nbsp;0xp</span>
           <div>
               <span
                    className={`${nameClassePercentXp}`}
                    style={{width: `${tempPercentXp.toPrecision(3)}%`}}
                >
                    {tempCurrentXp == 0 ? '' : `${tempCurrentXp}xp`}
                </span>
           </div>
            <span className="maxXp">{tempXpNextLevel}xp</span>

       </Container>
    );
}

export default memo(ExperienceBar);
