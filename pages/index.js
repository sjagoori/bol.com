import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Product from '../components/Product'
import { getData, getProducts, filterObject } from '../components/utils'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { state: false }
  }

  async componentDidMount() {
    console.warn('componentDidMount:', this.state.state)
    this.setState({ products: await getProducts('https://bol-helper.herokuapp.com/v1') })
    localStorage.getItem('postProduct') == null ? this.setProducts() : (JSON.parse(localStorage.getItem('postProduct')), this.setState({ state: true }))
  }

  async setProducts() {
    console.warn('setProducts:', this.state.state)
    let preProduct = this.state.products.map(async key => Promise.resolve(await getData(key)))
    let postProduct = filterObject(await Promise.all(preProduct))
    localStorage.setItem('postProduct', JSON.stringify(postProduct))
    this.setState({ products: postProduct, state: true })
  }

  generateProducts() {
    console.warn('generateProducts:', this.state.state)
    return JSON.parse(localStorage.getItem('postProduct')).map((value, index) => {
      return <Product
        key={index}
        id={value.id}
        title={value.title}
        img={value.images[5].url}
        price={value.offerData.offers[0].price}
      />
    })
  }

  render() {
    console.warn('render:', this.state.state)
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
          cta={{ label: 'CTA', url: '#' }}
        />
        
        <Layout>
          {this.state.state ? this.generateProducts() : <div>Loading</div>}
        </Layout>
      </>
    )
  }
}