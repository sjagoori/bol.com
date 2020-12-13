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
  width: 100%;
  border: 1px solid red; 
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #e6e6e6; */
`

const Image = styled.img`
    max-width: 100px;
`
