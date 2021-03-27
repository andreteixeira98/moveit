import styled from "styled-components";

export const Container = styled.header`

    width:80%;
    display: flex;
    flex-direction: row;

    align-items:center;
    background: var(--background);
    color: var(--text);
    font-size:1rem;

    line-height: 2;
    letter-spacing:2px;

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
    div span.initialAnimation{
        transition: width 2s;
    }


    div span.currentXpHasNoFinishedAnimation{
        height:5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: var(--green);
        color: var(--text);

        transition:background-color 2s;

    }
    div span.currentXpHasFinishedAnimation{
        height:5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: var(--gray-line);
        color:var(--text);

    }

    span.maxXp{
        margin-top: 2rem;
        margin-left: 0.5rem;
    }


`;





