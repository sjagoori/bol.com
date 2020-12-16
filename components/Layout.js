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
  margin: 0 auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
`;

const GlobalStyle = createGlobalStyle`
  body{
      padding:0;
      margin:0;
      padding-top: 140px;
      background-color: #FBF1F4;
  }
`;