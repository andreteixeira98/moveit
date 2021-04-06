import styled from 'styled-components';

export const Container = styled.div`
    width: 12%;
    height: 1rem;
    position:absolute;
    right:10%;
    margin-top:2rem;
    line-height: 2;
    padding: 0;
    display:flex;
    flex-direction: row;
    align-items: center;
    button{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        width:3.5rem;
        height: 1.5rem;
        border:0;
        padding: 0;

        outline:none;
        border-radius:1rem;




    }
    button div{
        position:absolute;
        width:1.5rem;
        height:1.5rem;
        border-radius:50%;
        background:var(--white);
    }
    button.dark-mode-enable{
        background:var(--blue);

    }
    button.dark-mode-enable div{
        right:0;
    }
    button.dark-mode-disable{
        background:#DCDDE0;

    }
    button.dark-mode-disable div{
        left:0;
    }
`;
