import React from 'react';
import {Container} from '../styles/components/experienceBar';

const ExperienceBar: React.FC = ( ) =>{
    return (
       <Container>
           <span className="initialXp"> 0 xp</span>
           <div>
               <span style={{width: '50%'}}> <p>300 xp</p></span>
           </div>
            <span className="maxXp">600 xp</span>
       </Container>
    );
}

export default ExperienceBar;
