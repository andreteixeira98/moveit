import styled from 'styled-components';

export const ContainerNoActiveChallenge = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

    padding:2rem 2rem;

    font-size:1.5rem;
    font-weight:500;
    text-align:center;

    background: var(--background);
    color: var(--text);
    p:last-child {
        font-size:1rem;
        font-weight:400;
    }
`;

export const ContainerActiveChallenge = styled.div`
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    text-align: center;

    padding:2rem 2rem;



    background: var(--background);

    span{
        width: 100%;
        color: var(--blue);
        font-size: 1.25rem;
        font-weight: 600;
        border-bottom: 1px solid var(--gray-line);
        text-align:center;
    }
    strong{
        font-size: 1.75rem;
        font-weight: bold 700;

    }
    p{
        text-align:center;
    }
    footer{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:5rem;
    }
    footer button{
        height: 3rem;
        width:8rem;
        border:none;
        border-radius:5px;

    }
    footer button.FaliedButton{
        background: var(--red);
        color: var(--white);
    }
    footer button.FaliedButton:hover{
       filter:brightness(0.9);
    }

    footer button.SucceedButton{
        background: var(--green);
        color: var(--white);
    }

    footer button.SucceedButton:hover{
       filter:brightness(0.9);
    }
`;
