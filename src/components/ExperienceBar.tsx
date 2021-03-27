import React, { useContext, useEffect, useState } from 'react';
import { challengeBoxContext } from '../context/ChallengeBoxContext';
import {Container} from '../styles/components/ExperienceBar';

const ExperienceBar: React.FC = ( ) =>{
    const {
        currentXp,
        xpNextLevel,
        percentXp,
        hasFinishedAnimationChangeXp
    } = useContext(challengeBoxContext);

    return (
       <Container>
           <span className="initialXp"> 0 xp</span>
           <div>
               <span
                    className={
                    hasFinishedAnimationChangeXp ?
                    'currentXpHasFinishedAnimation': 'currentXpHasNoFinishedAnimation'}
                    style={{width: `${percentXp}%`}}
                >
                    {currentXp} xp
                </span>
           </div>
            <span className="maxXp">{xpNextLevel}xp</span>

       </Container>
    );
}

export default ExperienceBar;
