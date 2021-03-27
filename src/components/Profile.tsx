import React, { useContext } from 'react';
 import {Container }from '../styles/components/Profile';
 import ProfileImage from "../assets/profileImage2.jpeg";
 import LevelImage from '../assets/icons/level.svg';
import { challengeBoxContext } from '../context/ChallengeBoxContext';

 const Profile:React.FC = () =>{
     const {level} = useContext(challengeBoxContext);

    return(
        <Container>
            <img className="imageProfile" src={ProfileImage} alt=""/>
            <div>
                <strong>André Teixeira</strong>
                <span>
                    <LevelImage /> &nbsp;
                    level {level}
                </span>
            </div>
        </Container>
    );
 }

 export default Profile;
