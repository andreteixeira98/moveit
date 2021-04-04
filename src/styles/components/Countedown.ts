import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;


`;

export const DivCounter = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;

    >div{
        max-height: 14rem;
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;

        background: var(--background);
    }
    div strong{
        display:flex;
       flex:1;
        flex-direction:row;

        justify-content:space-evenly;
        font-size: 7.5rem;
        font-weight:700;
        color:var(--title);

    }

    div strong:first-child{
        border-right: 1px solid var(--background)
    }

    div strong:last-child{
        border-left: 1px solid var(--background)
    }
    >strong{
        font-size: 7.5rem;
        color:var(--title);
    }

`;

export const ButtonCountedownNoActive = styled.button`
    width:100%;
    height:5rem;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin-top:1.25rem;

    background: var(--blue);
    color: var(--white);

    border-radius:5px;
    transition:background-color 0.5s;

    border:none;
    &:hover {
        background: var(--blue-dark);
    }
`;

export const ButtonCountedownActive = styled.button`
    width:100%;
    height:5rem;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin-top:1.25rem;

    background: var(--white);
    color: var(--title);

    border-radius:5px;
    transition:background-color 0.2s;

    border:none;
    &:hover {
        background: var(--red);
        color: var(--white);
    }

`;

export const ButtonHasFinishedDisable= styled.button`
    width:100%;
    height:5rem;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin-top:1.25rem;

    background: var(--background);
    color: var(--text);
    font-weight:700;

    border-radius:5px;
    transition:background-color 0.5s;

    border:none;
    &:hover {
       cursor:not-allowed;
    }
`;
