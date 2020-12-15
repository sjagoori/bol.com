import styled, { createGlobalStyle } from 'styled-components'

export default function Layout(props) {
  return (
    <Container>
      <GlobalStyle />
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  margin-left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  border: 1px solid black; 
`;

const GlobalStyle = createGlobalStyle`
  body{
      padding:0;
      margin:0;
      padding-top: 140px;
      background-color: #FBF1F4;
  }
`;