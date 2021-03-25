import React, { useContext } from 'react';
import {
    ButtonCountedownActive,
    ButtonCountedownNoActive,
    ButtonHasFinishedDisable,
    Container, DivCounter
} from '../styles/components/Countedown';

import {countedownContext } from '../context/CountedownContext';

const Countedown:React.FC = () =>{
    const {
        seconds,
        minutes,
        isActive,
        hasFinished,
        handleCountedown,
        resetCountedown
    } = useContext(countedownContext);

    const [minutes1, minutes2] = String(minutes).padStart(2,'0').split('');
    const [seconds1, seconds2] = String(seconds).padStart(2,'0').split('');
        return(
            <Container>
                <DivCounter>
                    <div>
                        <strong>{minutes1}</strong>
                        <strong>{minutes2}</strong>
                    </div>

                    <strong>:</strong>

                    <div>
                        <strong>{seconds1}</strong>
                        <strong>{seconds2}</strong>
                    </div>
                </DivCounter>
                {!hasFinished ?(
                    <>
                        {!isActive ?(
                        <ButtonCountedownNoActive
                            onClick={handleCountedown}
                        >
                            Iniciar Um Ciclo
                        </ButtonCountedownNoActive>
                        ):(
                        <ButtonCountedownActive
                            onClick={resetCountedown}
                        >
                            Abandonar Ciclo
                        </ButtonCountedownActive>
                        )}
                    </>
                ):(
                    <ButtonHasFinishedDisable disabled>
                        Ciclo Encerrado
                    </ButtonHasFinishedDisable>
                )}
            </Container>
        );
}

export default Countedown;

