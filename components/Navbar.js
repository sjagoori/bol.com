import styled from "styled-components";
import React from 'react'
import Link from 'next/link'
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div>
          {Object.keys(this.props.links).map((key, index) => {
            return <Link href={this.props.links[key].url}>{this.props.links[key].label}</Link>
          })}
        </div>
        <div>
          <Link href={this.props.cta.url}>{this.props.cta.label}</Link>
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
  /* border: 1px solid #0000a4; */
  background-color: #FFFFFF;
  position: fixed;
  top: 40px;
  border-radius: 5px;
  overflow: hidden;
  height: 60px;
  width: 95%;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  filter: drop-shadow(3px 4px 4px rgba(179, 179, 179, 0.25));

  div {
    /* border-right: .5px solid #0000a4; */
    display: flex; 
    align-items: center;
    justify-content: space-around;
    height: 100%;
    max-width: 1000px;
    padding-left: 20px;
    padding-right: 20px;

    a {
      cursor: pointer;
      padding-left: 20px;
      padding-right: 20px;
      margin-right: 10px;
      margin-left: -15px;
      text-decoration: none;
      color: black;
      padding-right: 20px;
      border-right: 1px solid black;

      &:last-child {
        border: 0;
      }

      &::before {
        content: 'ᐅ';
        padding-left: 5px;
        padding-right: 5px;
        opacity: 0;
        transition:  opacity .3s ease-in-out;
      }

      &:hover {
        color:#0000a4;
        &::before {
          opacity: 1;
        }
      }
    }

  &:last-child {
    padding: 0;
    border-left: .5px solid grey;
    /* width: 150px; */
    height: 70%;
    justify-content: center;
    background-color: #0000a4;
    transition: .3s;
    margin-right: 1vw;
    border-radius: 5px;

    & a {
        margin-left: -15px;
        padding: 0 2vw 0;
    }
    
    &:hover{
      background-color: #2137FF70;
      box-shadow: inset -2px 0px 4px rgba(0, 0, 0, 0.35);

      & a {
        color: #FFFFFF;
      }
    }

    & a {
      color: white;
    }
  }
}
` 