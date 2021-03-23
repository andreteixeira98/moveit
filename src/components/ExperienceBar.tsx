import React from 'react';
import {Container} from '../styles/components/ExperienceBar';

const ExperienceBar: React.FC = ( ) =>{
    return (
       <Container>
           <span className="initialXp"> 0 xp</span>
           <div>

               <span style={{width: '50%'}}>300xp</span>
           </div>
            <span className="maxXp">600 xp</span>
       </Container>
    );
}

export default ExperienceBar;
