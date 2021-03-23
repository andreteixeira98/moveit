import React from 'react';
import {Button, Container, DivCounter} from '../styles/components/Countedown';

const Countedown:React.FC = () =>{
        return(
            <Container>
                <DivCounter>
                    <div>
                        <strong>2</strong>
                        <strong>5</strong>
                    </div>

                    <strong>:</strong>

                    <div>
                        <strong>0</strong>
                        <strong>0</strong>
                    </div>
                </DivCounter>
                <Button>Iniciar Um Ciclo</Button>
            </Container>
        );
}

export default Countedown;
