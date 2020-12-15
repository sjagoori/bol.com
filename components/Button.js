import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styling/theme'
import Link from 'next/link'
import Icon from '../assets/svg/chevron-right'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.url)
    return (
      <ThemeProvider theme={theme}>
        <Link href={this.props.url}>
          <Container type={this.props.type}>
              <span><Icon /></span>
              <span>{this.props.label}</span>
          </Container>
        </Link>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  text-decoration: none;
  text-transform: capitalize;
  color: ${props => props.theme.colors.white};
  
  span {
    margin-left: -10px;

    :first-child{
      margin-right: 5px;
    }
  }

  cursor: pointer;
  display: block;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: ${props => {
    if (props.type == 'primary') return props.theme.colors.primary;
    if (props.type == 'secondary') return props.theme.colors.secondary;
  }};

  :hover{
     svg {
      opacity: 1;
    }
  }

  svg{
    fill: white;
    opacity: 0;
    margin-right: 15px;
    transition:  opacity .1s ease-in-out;
  }
`
const InnerLink = styled.div`

`