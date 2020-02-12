import * as $ from 'jquery'
import Post from './Post.js'
import json from '@/json.json'
import xml from '@/data.xml'
import './styles/styles.css'
import WebpackLogo from '@/webpack-logo.png'
import csv from '@/data.csv'
import  './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack title', WebpackLogo)

$('pre').addClass('code2').html(post.toString())

console.log("Post to String: ", post.toString())

// console.log('JSON: ', json)

// console.log('XML: ', xml)

// console.log('CSV: ', csv)