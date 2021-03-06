import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styling/theme'
import Badge from '@material-ui/core/Badge'
import Button from '../button/Button'

export default class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>

        <Container varriant={this.props.varriant}>
          <Title>{this.props.title}</Title>

          <ImageContainer>
            <Badge badgeContent={this.props.price} color="error">
              <Image src={this.props.img} />
            </Badge>
          </ImageContainer>

          <Button
            label='bekijk'
            url='detail'
            productid={this.props.id}
            type='secondary'
          />
        </Container>

      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 250px;
  padding-top: 25px;
  padding-bottom: 25px;
  
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  filter: drop-shadow(0px 4px 3px ${props => props.theme.colors.black + '25'});
  transition: .3s;

  :hover{
    border: 0;
    filter: drop-shadow(4px 4px 20px ${props => props.theme.colors.black + '25'});
  }
`

const Title = styled.span`
  max-width: 80%;
  max-height: 1.2em;
  margin-bottom: 10px;
  text-align: center;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10; 
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-size: 1.2em;
  font-weight: bold;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;

  span span{
    min-width: 60px;

    :before{
      content: '€'
    }
  }
`

const Image = styled.img`
  max-width: 150px;
  max-height: 150px; 
  border-radius: 10px;
`
