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
    console.log(this.props)
    return (
      <ThemeProvider theme={theme}>
        <Container type={this.props.type}>
          <Link href={this.props.url}>
            <InnerLink>
              <span><Icon /></span>
              <span>{this.props.label}</span>
            </InnerLink>
          </Link>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
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
`
const InnerLink = styled.div`
  text-decoration: none;
  text-transform: capitalize;
  color: ${props => props.theme.colors.white};
  margin-right: 15px;

  svg{
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