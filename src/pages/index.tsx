import Container from "../styles/pages/Home";
import  Head  from "next/head";
import  React from "react";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompleteChallenges from "../components/CompleteChallenges";
import Countedown from "../components/Countedown";
import ChallengeBox from "../components/ChallengeBox";
const  Home  : React.FC  =  ( ) =>  {
  return (
    <>
        <Head>
        <title>Homepage</title>
        </Head>

            <Container>
                <ExperienceBar />
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
    </>
  );
}
export default Home;
