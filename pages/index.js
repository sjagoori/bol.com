import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Layout from '../components/layout/Layout'
import Product from '../components/product-card/Product'
import Footer from '../components/footer/Footer'
import { getData, getProducts, filterObject } from '../components/utils'
import LinearProgress from '@material-ui/core/LinearProgress'
import styled from 'styled-components'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { state: false }
  }

  async componentDidMount() {
      this.setState({ products: await getProducts('https://bol-helper.herokuapp.com/v1') })
      localStorage.getItem('postProduct') == null ? this.setProducts() : (JSON.parse(localStorage.getItem('postProduct')), this.setState({ state: true }))
  }

  async setProducts() {
    let preProduct = this.state.products.map(async key => Promise.resolve(await getData(key)))
    let postProduct = filterObject(await Promise.all(preProduct))

    localStorage.setItem('postProduct', JSON.stringify(filterObject(postProduct.map(key => key.offerData.offers ? key : false))))
    this.setState({ products: postProduct, state: true })
  }

  generateProducts() {
    return JSON.parse(localStorage.getItem('postProduct')).map((value, index) => {
      return <Product
        key={index}
        varriant={index % 3}
        id={value.id}
        title={value.title}
        img={value.images[5].url}
        price={value.offerData.offers[0].price}
      />
    })
  }

  render() {
    return (
      <>
        <Navbar
          links={{
            link1: { label: 'Link', url: '#' },
            link2: { label: 'Link', url: '#' },
            link3: { label: 'Link', url: '#' },
            link4: { label: 'Link', url: '#' },
            link5: { label: 'Link', url: '#' },
          }}
          cta={{ label: 'Source', url: 'https://github.com/sjagoori/bol.com' }}
        />
        <Layout>
          {this.state.state ? this.generateProducts() : <Loader><LinearProgress color="secondary" /></Loader>}
        </Layout>

        <Footer/>
      </>
    )
  }
}

const Loader = styled.div`
  margin-top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: calc(45vh + 140px);
  grid-column: 1 / 4;
`