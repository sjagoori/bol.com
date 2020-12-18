import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styling/theme'
import Link from 'next/link'
import Icon from '../assets/svg/chevron-right'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  generateURL(url, productid) {
    return { pathname: url, query: { id: productid } }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Link href={this.generateURL(this.props.url, this.props.productid)}>
          <Container type={this.props.type}>
            <Icon />
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

  cursor: pointer;
  display: block;
  width: 150px;
  height: ${props => {
    if (props.type == 'primary') return '50px';
    if (props.type == 'secondary') return '33px';
  }};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => {
    if (props.type == 'primary') return props.theme.colors.primary;
    if (props.type == 'secondary') return props.theme.colors.secondary;
  }};

svg {
    margin-left: -15px;
    fill: white;
    opacity: 0;
    margin-right: 10px;
    transition:  opacity .1s ease-in-out;
  }

  :hover{
     svg {
      opacity: 1;
    }
  }
`