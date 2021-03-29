import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: auto;

  margin-bottom: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--text);

  section{
    width:70%;
    margin-top:2rem;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:2rem;

  }
  section div{
    flex:1;
    width:100%;
    height:100%;
    display:flex;


  }

  section div.leftColumn{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;

  }

  section div.rightColumn{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;


  }

  `;
export default  Container;
