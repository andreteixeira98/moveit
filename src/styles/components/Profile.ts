import styled from 'styled-components';

export const Container = styled.div`

    display:flex;
    flex-direction:row;
    font-family: 16px 'Roboto', sans-serif;

    line-height: 2;
    letter-spacing:2px;



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

    div span:first-child{
        font-weight:600;

    }

    div span img{
        width:30px;
        height:30px
    }
`;
