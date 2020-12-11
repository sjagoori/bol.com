import axios from 'axios'

export const getData = async (cat, loc) => {
  let base = 'https://shacors.herokuapp.com/https://api.bol.com/' + cat + '/v4/' + loc + '?apikey=' + process.env.API_KEY + '&offers=cheapest&includeAttributes=false&format=json'
  return await axios.get(base).then(response => response.data)
}