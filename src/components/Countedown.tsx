import React, { useEffect, useState } from 'react';
import {ButtonCountedownActive, ButtonCountedownNoActive, Container, DivCounter} from '../styles/components/Countedown';

let countdownTimeout: NodeJS.Timeout;

const Countedown:React.FC = () =>{

    const [time,setTime] = useState(25*60);
    const[isActive,setIsActive] = useState(false);
    const[hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time%60);

    const [minutes1, minutes2] = String(minutes).padStart(2,'0').split('');
    const [seconds1, seconds2] = String(seconds).padStart(2,'0').split('');

    function handleCountedown(){
        setIsActive(!isActive);
        console.log(isActive);
    }
    function resetCountedown(){
        clearTimeout(countdownTimeout);
        setTime(25*60);
        setIsActive(false);
    }

    useEffect(() =>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() =>{
                setTime(time - 1);
            },1000);
        }else if(isActive && time == 0){
            setHasFinished(true);
        }
    },[isActive,time]);

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
            </Container>
        );
}

export default Countedown;
