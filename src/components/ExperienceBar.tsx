import React, { useContext, useEffect, useState } from 'react';
import { challengeBoxContext } from '../context/ChallengeBoxContext';
import {Container} from '../styles/components/ExperienceBar';

const ExperienceBar: React.FC = ( ) =>{
    const {
        levelUpModal,
        resetLevelUpModal,
        currentXp,
        xpNextLevel,
    } = useContext(challengeBoxContext);

    let percentXp = ((currentXp*100) / xpNextLevel);
    const[nameClassePercentXp, setNameClassePercentXp] = useState('InitialXpWidith');
    const[tempCurrentXp, setTempCurrentXp] = useState(currentXp);
    const[tempPercentXp, setTempPercentXp] = useState(percentXp);


   useEffect(() =>{
        if(levelUpModal){
            setTimeout(() =>{
                setTempPercentXp(100);
                setTempCurrentXp(xpNextLevel);
            },200);

            setTimeout(() =>{
                setTempPercentXp(0);
                setTempCurrentXp(0);

            },1800);

            setTimeout(() =>{
                setTempPercentXp(percentXp);
                setTempCurrentXp(currentXp);
            },2500);
            resetLevelUpModal();
        }else{
            setTimeout(() =>{
                setTempPercentXp(percentXp);
                setTempCurrentXp(currentXp);
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
           <span className="initialXp"> 0xp</span>
           <div>
               <span
                    className={`${nameClassePercentXp}`}
                    style={{width: `${tempPercentXp}%`}}
                >
                    {tempCurrentXp == 0 ? '' : `${tempCurrentXp}xp`}
                </span>
           </div>
            <span className="maxXp">{xpNextLevel}xp</span>

       </Container>
    );
}

export default ExperienceBar;
