import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../styling/theme'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <h1>Over</h1>
            <p>Op Bol.com deals vind je elke dag de nieuwste en leukste deals van bol.com!</p>
          </div>
          <div>
            <p>Made with ❤️ - < a href='https://www.github.com/sjagoori'> Shabier</a> ©{new Date().getFullYear()}</p>
          </div>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  align-self: flex-end;
  width: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};

  div {
    padding: 0 20px 0 20px;

    :first-child {
      max-width: 50%;
    }

    :last-child {
      align-self: flex-end;
      display:flex;
      flex-direction: column;
      align-items: flex-end;
      color: ${props => props.theme.colors.grey};
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.grey};
    }
  }

  :hover{
    a {
      color: ${props => props.theme.colors.yellow};
    }
  }

  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;

    div {
    padding: 0 20px 0 20px;

      :first-child {
        max-width: 100%;
      }
      :last-child {
        align-self: flex-start;
      }
    }
  }
`