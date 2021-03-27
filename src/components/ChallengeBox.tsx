import React,{ useContext} from 'react';
import {ContainerActiveChallenge, ContainerNoActiveChallenge} from '../styles/components/ChallengeBox';
import ImageLevelUp from '../assets/icons/level-up.svg';
import BodyImage from '../assets/icons/body.svg';
import EyeImage from '../assets/icons/eye.svg';

import {challengeBoxContext} from '../context/ChallengeBoxContext';
import { countedownContext } from '../context/CountedownContext';

const ChallengeBox: React.FC = ( ) =>{
    const {activeChallenge, destroyChallenge, handleChallengeCompleted} = useContext(challengeBoxContext);
    const {resetCountedown} = useContext(countedownContext);

    function handleFaliedButton() {
        resetCountedown();
        destroyChallenge();
    }

    function handleSucceedButton() {
        handleChallengeCompleted();
        resetCountedown();
    }
    return(
        <>
            {activeChallenge ? (
                 <ContainerActiveChallenge>
                    <span> Ganhe  {activeChallenge.amount} xp</span>

                    {activeChallenge.type == 'body' ? (
                        <BodyImage />
                    ):(
                        <EyeImage />
                    )}
                    <strong>Novo Desafio</strong>
                    <p>{activeChallenge.description} </p>
                    <footer>
                        <button
                            className="FaliedButton"
                            onClick={handleFaliedButton}
                        >
                            Falied
                        </button>

                        <button
                            className="SucceedButton"
                            onClick={handleSucceedButton}
                        >
                            Succeed
                        </button>
                    </footer>
             </ContainerActiveChallenge>
            ):(
                <ContainerNoActiveChallenge>
                    <p>Complete um ciclo para receber um desafio</p>
                    <ImageLevelUp />
                    <p>Suba de nivel completando desafios</p>
                </ContainerNoActiveChallenge>
            )}
        </>
    );
}

export default ChallengeBox;
