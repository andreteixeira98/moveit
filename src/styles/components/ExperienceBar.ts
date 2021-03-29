import styled from "styled-components";

export const Container = styled.header`

    width:78%;
    display: flex;
    flex-direction: row;

    align-items:center;
    background: var(--background);
    color: var(--text);
    font-size:1rem;

    line-height: 2;

    span.initialXp{
        margin-right: 0.25rem;
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
        height:5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        text-align: right;
        margin-right:0;

        background: var(--green);
        color: var(--text);
    }
    div span.InitialXpWidith{
        transition: background-color 1s;
        transition:width 1s;
    }
    div span.percentXpChangeForWidith100{
        transition:width 1s;
    }
    div span.percentXpChangeForWidith0{
        transition: background-color 1.5s;
    }

    span.maxXp{
        margin-top: 2rem;
        margin-left: 0.25rem;
    }


`;





