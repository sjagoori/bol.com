import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../../styling/theme'

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        {props.children}
      </Container>
    </ThemeProvider>
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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
  
  body{
      padding:0;
      margin:0;
      padding-top: 140px;
      background-color: ${props => props.theme.backgroundColor};
      font-family: 'Open Sans', sans-serif;
  }
`;