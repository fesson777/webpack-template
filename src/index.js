import Post from './Post.js'
import json from '@/json.json'
import xml from '@/data.xml'
import './styles/styles.css'
import WebpackLogo from '@/webpack-logo.png'
import csv from '@/data.csv'

const post = new Post('Webpack title', WebpackLogo)

console.log("Post to String: ", post.toString())

// console.log('JSON: ', json)

// console.log('XML: ', xml)

// console.log('CSV: ', csv)