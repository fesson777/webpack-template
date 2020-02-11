import Post from './Post'
import json from './assets/json.json'
import './styles/styles.css'

const post = new Post('Webpack title')

console.log("Post to String: ", post.toString())

console.log('JSON: ', json)