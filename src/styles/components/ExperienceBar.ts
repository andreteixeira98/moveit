import styled from "styled-components";

export const Container = styled.header`

    width:80%;
    display: flex;
    flex-direction: row;

    align-items:center;
    background: var(--background);
    color: var(--title);


    font-weight: 500;
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

        position: relative;

        margin-top: 2rem;

        border-radius: 5px;
        background: var(--gray-line);


    }
    div span{
        height:5px;
        position:absolute;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: var(--green);
        text-align:right;

    }

    span.maxXp{
        margin-top: 2rem;
        margin-left: 0.5rem;
    }


`;





