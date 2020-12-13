import axios from 'axios'

export const getData = async (productid) => {
  let proxy = 'https://shacors.herokuapp.com/'
  let link = 'https://api.bol.com/catalog/v4/products/' + productid + '?apikey=' + process.env.API_KEY + '&format=json'
  let base = proxy + link
  return await axios.get(base).then(response => response.status == 200 ? response.data.products[0] : false).catch(error => console.log(error.response))
}

export const getProducts = async (url) => {
  return await axios.get(url).then(response => response.data)
}

export const filterObject = dataset => {
  return dataset.filter(item => typeof item === 'object')
}