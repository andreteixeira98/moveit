import Container from "../styles/pages/Home";
import  Head  from "next/head";
import {GetServerSideProps} from 'next';
import  React from "react";

import Cookies from "js-cookie";

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompleteChallenges from "../components/CompleteChallenges";
import Countedown from "../components/Countedown";
import ChallengeBox from "../components/ChallengeBox";
import CountedownProvider from "../context/CountedownContext";
import {ChallengeBoxProvider} from "../context/ChallengeBoxContext";
import AlterTheme from "../components/AlterTheme";
interface TypeProps{
    isDark:boolean;
    setIsDark:(isDark:boolean)=>void;
}
export default function Home(props:TypeProps) {

  return (
    <CountedownProvider>
        <ChallengeBoxProvider
        level={Number(Cookies.get('level') ?? 1)}
        currentXp={Number(Cookies.get('currentXp')  ?? 0)}
        challengesCompleted={Number(Cookies.get('challengesCompleted')  ?? 0)}
        >
            <main>
            <Head>
                <title>moveit | Inicio</title>
            </Head>
            <Container>
                <div className="divContainerExperienceBar-AlterTheme">
                    <ExperienceBar />
                    <AlterTheme isDark={props.isDark} setIsDark={props.setIsDark}/>
                </div>
                <section>
                    <div className="leftColumn">
                        <Profile />
                        <CompleteChallenges />
                        <Countedown />
                    </div>

                    <div className="rightColumn">
                        <ChallengeBox />
                    </div>
                </section>
            </Container>
            </main>
        </ChallengeBoxProvider>
    </CountedownProvider>

  );
}
export const getServerSiderProps: GetServerSideProps = async ({req}) =>{
    const {level, currentXp, challengesCompleted} = req.cookies;

    return{
        props:{
            level: Number(level),
            currentXp: Number(currentXp),
            challengesCompleted: Number(challengesCompleted)
        }

    }
};
