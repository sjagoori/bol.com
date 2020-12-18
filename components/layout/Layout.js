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
  margin-bottom: 40px;

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
      padding-top: 140px;
      background-color: ${props => props.theme.backgroundColor};
  }
`;