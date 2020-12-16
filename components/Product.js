import React from 'react'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styling/theme'

export default class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>

        <Elem varriant={this.props.varriant}>
          <Title>{this.props.title}</Title>

          <ImageContainer>
            <Image src={this.props.img} />
          </ImageContainer>

          <Link href={{ pathname: '/detail', query: { id: this.props.id } }}>
            <BuyButton>Bekijk product</BuyButton>
          </Link>
        </Elem>

      </ThemeProvider>
    )
  }
}

const Elem = styled.div`
  width: 100%;
  height: 230px;
  padding-top: 25px;
  padding-bottom: 25px;
  
  border-radius: 5px;
  background-color: white;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.25));
  transition: .3s;

  :hover{
    border: 0;
    filter: drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.25));
  }
`

const Title = styled.span`
  max-width: 80%;
  max-height: 1.2em;
  text-align: center;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10; 
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-size: 1.2em;
  font-weight: bold;
`

const BuyButton = styled.div`
  cursor: pointer;
  height: 30px;
  width: 130px;
  padding: 2px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #000;
  color: white; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 200px;
`

const Image = styled.img`
  max-width: 150px;
  max-height: 150px; 
  border-radius: 10px;
`
