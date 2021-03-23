import Container from "../styles/pages/Home";
import  Head  from "next/head";
import  React from "react";
import ExperienceBar from "../components/ExperienceBar";
const  Home  : React.FC  =  ( ) =>  {
  return (
    <>
        <Head>
        <title>Homepage</title>
        </Head>

            <Container>
                <ExperienceBar />
            </Container>
    </>
  );
}
export default Home;
