import React, { useContext,memo } from 'react';
import  { challengeBoxContext } from '../context/ChallengeBoxContext';

import {Container} from '../styles/components/CompleteChallenges';


const CompleteChallenges:React.FC = () =>{
    const {challengesCompleted} = useContext(challengeBoxContext);
    return(
        <Container>
            <span >Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </Container>
    );
}
export default memo(CompleteChallenges);

