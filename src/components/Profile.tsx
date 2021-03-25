import React from 'react';
 import {Container }from '../styles/components/Profile';
 import ProfileImage from "../assets/profileImage2.jpeg";
 import LevelImage from '../assets/icons/level.svg';

 const Profile:React.FC = () =>{

    return(
        <Container>
            <img className="imageProfile" src={ProfileImage} alt=""/>
            <div>
                <strong>André Teixeira</strong>
                <span>
                    <LevelImage /> &nbsp;
                    level {1}
                </span>
            </div>
        </Container>
    );
 }

 export default Profile;
