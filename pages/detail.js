import React from 'react'
import Link from 'next/link'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styling/theme'
import Button from '../components/button/Button'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { state: false };
  }

  componentDidMount() {
    let dataset = JSON.parse(localStorage.getItem('postProduct'))
    this.setState({ productDetails: dataset.find(key => key.id == this.props.query.id ? key : null), state: true })
  }

  static getInitialProps({ query }) {
    return { query }
  }

  render() {
    let view = this.state.state ?
      <ThemeProvider theme={theme}>
        <Container>

          <ImageContainer>
            <div></div>
            <Image src={this.state.productDetails.media[0].url} />
          </ImageContainer>

          <DescriptionContainer>
            <Link href='/'><BackButton>◄</BackButton></Link>
            <Title>{this.state.productDetails.title}</Title>
            <Description>{this.state.productDetails.shortDescription}</Description>
            <ActionContianer>
            <Price>{this.state.productDetails.offerData.offers[0].price}</Price>
            <Button
              label='kopen'
              url={this.state.productDetails.urls[0].value}
              type='primary'
            />
            </ActionContianer>
          </DescriptionContainer>
          
        </Container>
      </ThemeProvider>
      :
      <div>Loading</div>

    return (
      <>
        {view}
      </>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const DescriptionContainer = styled.div`
  width:  45%;
  padding: 20px;
  height: 90%;

  @media (max-width: 800px) {
    width: 75%
  }
`

const ImageContainer = styled.div`
  width: 50%; 
  height: 90%; 
  align-self: center;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 800px) {
    padding: 0;
    width: 100%;
  }
`
const ActionContianer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 800px) {
    width: 80%;
  }
`

const BackButton = styled.div`
  width: 50px;
  height: 24px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 1.4em;

`

const Description = styled.p`
  width: 80%;
  max-height: 200px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10; 
  -webkit-box-orient: vertical;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const Price = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;;
  
  font-size: 1.5em;
  font-weight: 600;
  
  padding-left: 10px;
  padding-right: 10px;
  
  width: 80px;
  height: 50px;

  border-radius: 30px 5px 30px 5px;

  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};

  &:before {
    content: '€'
  }
`

const Image = styled.img`
  max-width: 300px;
  max-height: 300px; 

  @media (max-width: 800px) {
    max-width: 100%;
  }
`