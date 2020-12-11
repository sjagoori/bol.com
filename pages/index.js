import React from 'react'
import { getData } from '../components/utils'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    console.log(await getData('catalog','products/1004004011187773'))
  }

  render() {
    return (
      <>
        Hello World!
      </>
    )
  }
}