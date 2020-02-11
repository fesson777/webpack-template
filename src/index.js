import Post from './Post'
import json from './assets/json.json'
import './styles/styles.css'
import WebpackLogo from './assets/webpack-logo.png'

const post = new Post('Webpack title', WebpackLogo)

console.log("Post to String: ", post.toString())

console.log('JSON: ', json)