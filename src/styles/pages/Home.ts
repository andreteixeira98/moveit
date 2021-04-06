import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  color: var(--text);
  >div{
    margin-top:2rem;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  section{
    width:70%;
    margin-top:3rem;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:2rem;

  }
  section div{
      width: 100%;
  }

  section div.leftColumn{
      //width: 100%;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;

  }

  section div.rightColumn{
   // width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;


  }

  `;
export default  Container;
