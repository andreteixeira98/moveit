import styled from "styled-components";

export const Container = styled.header`

    width:80vw;
    display: flex;
    flex-direction: row;

    align-items:center;
    background: var(--background);
    color: var(--title);

    font-family: 400 16px 'Della Respira', sans-serif;
    font-weight: 500;
    line-height: 2;

    span.initialXp{
        margin-right: 0.5rem;
        margin-top: 2rem;

    }
    div{
        height:5px;
        flex:1;
        display: flex;
        flex-direction: row;

        margin-top: 2rem;

        border-radius: 5px;
        background: var(--gray-line);


    }
    div span{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: var(--green);


        text-align:right;

    }
    div span p{
        margin-right:-4%;
    }

    span.maxXp{
        margin-top: 2rem;
        margin-left: 0.5rem;
    }


`;





