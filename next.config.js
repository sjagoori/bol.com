const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
  }
}