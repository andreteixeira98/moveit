import React, { useContext, useState,memo } from 'react';
 import {Container }from '../styles/components/Profile';
 import ProfileImage from "../assets/profileImage2.jpeg";
 import LevelImage from '../assets/icons/level.svg';
import { challengeBoxContext } from '../context/ChallengeBoxContext';

 const Profile:React.FC = () =>{
     const {level} = useContext(challengeBoxContext);
     const[tempLevel, setTempLevel] = useState(1);

     setTimeout(() =>{
       setTempLevel(level);
     },1200);

    return(
        <Container>
            <img className="imageProfile" src={ProfileImage} alt=""/>
            <div>
                <strong>André Teixeira</strong>
                <span>
                    <LevelImage /> &nbsp;
                    level {tempLevel}
                </span>
            </div>
        </Container>
    );
 }

 export default memo(Profile);
