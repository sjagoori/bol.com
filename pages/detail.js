import React from 'react'
import Link from 'next/link'

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
    let view = this.state.state ? <div>
      <Link href='/'>Back</Link>
      {this.state.productDetails.title}
      {this.state.productDetails.longDescription}
      {this.state.productDetails.rating}
      {this.state.productDetails.specsTag}
      {this.state.productDetails.offerData.offers[0].price}
      {this.state.productDetails.urls[0].value}
    </div> : <div>Loading</div>

    return (
      <>
        {view}
      </>
    )
  }
}