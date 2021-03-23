import React from 'react';
 import {Container }from '../styles/components/Profile';
 import ProfileImage from "../assets/profileImage2.jpeg";
 import LevelImage from '../assets/icons/level.svg';

 const Profile:React.FC = () =>{

    return(
        <Container>
            <img className="imageProfile" src={ProfileImage} alt=""/>
            <div>
                <span>André Teixeira</span>
                <span>
                    <LevelImage /> &nbsp;
                    level
                </span>
            </div>
        </Container>
    );
 }

 export default Profile;
