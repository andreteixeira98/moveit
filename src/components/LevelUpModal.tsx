import React, { useContext,memo } from 'react';

import {Overlay, Container, ButtonClosed } from '../styles/components/LevelUpModal';
import ImageClosed from '../assets/icons/close.svg';
import ImageLevelUp from '../assets/icons/levelup.svg';
import { challengeBoxContext} from '../context/ChallengeBoxContext';

const LevelUpMoldal:React.FC = () =>{
    const {level,  closedLevelUpModal} = useContext(challengeBoxContext);

    return(
       <Overlay>
           <Container>
           <header>
                <span>Level {level}</span>
                <ImageLevelUp />
           </header>
           <strong>Parabéns!!</strong>
           <p>Você alcançou um novo nivel</p>
            <ButtonClosed
                onClick={closedLevelUpModal}
            >
                <ImageClosed />
            </ButtonClosed>
       </Container>
       </Overlay>
    );
}

export default memo(LevelUpMoldal);
