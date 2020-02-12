import * as $ from 'jquery'
import Post from './Post.js'
import json from '@/json.json'
import xml from '@/data.xml'
import './styles/styles.css'
import WebpackLogo from '@/webpack-logo.png'
import csv from '@/data.csv'
import  './styles/less.less'
import './styles/scss.scss'
import './babel.js'
import React from 'react'
import {render} from 'react-dom'

const post = new Post('Webpack title', WebpackLogo)

$('pre').addClass('code2').html(post.toString())

console.log("Post to String: ", post.toString())

const App = () => (
    <div className="container">
        <h1>Webpack template</h1>

            <hr />
            
            <div className="logo" />

            <hr />

            <pre className="code" />

            <div className="box">
                <h2>Less is work</h2>
            </div>

            <div className="card">
                <h2>Scss is work</h2>
            </div>

            <div className="card">
                <h2>JS, TS, CSS, PNG, SVG, CSV, JSON, XML is work</h2>
            </div>

</div>
)

render(<App />, document.getElementById('app'))

// console.log('JSON: ', json)

// console.log('XML: ', xml)

// console.log('CSV: ', csv)
