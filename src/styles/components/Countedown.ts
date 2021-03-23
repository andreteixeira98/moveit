import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;


`;

export const DivCounter = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;

    div{
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;

        background: var(--white);
    }
    div strong{
        flex:1;
        display:flex;
        flex-direction:row;

        justify-content:space-evenly;
        font-size: 8.5rem;
        font-weight:bold 700;

    }

    div strong:first-child{
        border-right: 1px solid #f0f1f3;
    }

    div strong:last-child{
        border-left: 1px solid #f0f1f3;
    }
    >strong{
        font-size: 8.5rem;
        font-weight:600;
    }

`;

export const Button = styled.button`
    width:100%;
    height:4rem;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin-top:2rem;

    background: var(--blue-dark);
    color: var(--white);

    border-radius:5px;

    border:none;
`;
