import styled from 'styled-components';

export const Container = styled.div`

    display:flex;
    flex-direction:row;
    align-items:center;
    line-height: 2;




    .imageProfile{
        width:5.5rem;
        height:5.5rem;
        border-radius:50%;

    }

    div{
        display:flex;
        flex-direction:column;

        margin-left: 2rem;
        margin-top: 0.5rem;

    }
    div strong{
        font-size:1.5rem;
    }

    div span{
        font-weight:400;
    }
`;
