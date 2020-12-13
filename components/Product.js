import React from 'react'
import styled from 'styled-components'

export default class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Elem>
        <ImageContainer>
          <Image src={this.props.img} />
        </ImageContainer>
        <p>{this.props.title}</p>
        {this.props.price}
      </Elem>
    )
  }
}

const Elem = styled.div`
  padding: 10px;
  border: 1px solid red; 
  background-color: white;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  border: 1px solid blue;
`

const Image = styled.img`
  max-width: 200px;
  max-height: 200px; 
  border: 1px solid green;
`
