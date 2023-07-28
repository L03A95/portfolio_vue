<script>
export default {
  props: {
    title: String,
    image: String
  }
}

import html from '../../images/logo_html_800x800.png'
import css from "../../images/logo_css_800x800.png"
import js from "../../images/logo_javascript400x400.png"
import react from "../../images/react_logo_2300x2000.png"
import redux from "../../images/redux_logo_537x512.png"
import vue from "../../images/vuejs_logo.png"
import node from "../../images/node_logo.png"
import express from "../../images/express_logo_930x930.png"
import php from "../../images/php_logo.png"
import sequelize from "../../images/sequelize_logo_920x920.png"
import postgre from "../../images/postgre_logo.png"
import py from "../../images/python_logo.png"

            // <img src="../images/logo_html_800x800.png" />
            // <img src="../images/logo_css_800x800.png" />
            // <img src="../images/logo_javascript400x400.png" />
            // <img src="../images/react_logo_2300x2000.png" />        
            // <img src="../images/redux_logo_537x512.png"/>        
            // <img src="../images/vuejs_logo.png"/>        
            // <img src="../images/node_logo.png" />
            // <img src="../images/express_logo_930x930.png" />
            // <img src="../images/php_logo.png" />
            // <img src="../images/sequelize_logo_920x920.png"/>
            // <img src="../images/postgre_logo.png" />
            // <img src="../images/python_logo.png"/>
</script>

<template>
    <div class="card_wrapper">
        <p class="title">{{title}}</p>
        <img :src="image" class="card_img">

        <ul class="tags_wrapper">
            <li class="tag html"><img src='../../images/logo_html_800x800.png' class="tag_img">HTML</li>
            <li class="tag css"><img src="../../images/logo_css_800x800.png" class="tag_img">CSS</li>
            <li class="tag javascript"><img src="../../images/logo_javascript400x400.png" class="tag_img">Javascript</li>
            <li class="tag react"><img src="../../images/react_logo_2300x2000.png" class="tag_img">React.js</li>
            <li class="tag vue"><img src="../../images/vuejs_logo.png" class="tag_img">Vue.js</li>
            <li class="tag tailwind"><img src='../../images/tailwindcss_logo.png' class="tag_img">Tailwind</li>
            <li class="tag redux"><img src="../../images/redux_logo_537x512.png" class="tag_img">Redux</li>
            <li class="tag node"><img src="../../images/node_logo.png" class="tag_img">Node.js</li>
            <li class="tag express"><img src="../../images/express_logo_930x930.png" class="tag_img">Express.js</li>
            <li class="tag postgre"><img src="../../images/postgre_logo.png" class="tag_img">PostgreSQL</li>
            <li class="tag sequelize"><img src="../../images/sequelize_logo_920x920.png" class="tag_img">Sequelize</li>
        </ul>        
    </div>
</template>

<style>
    .card_wrapper {
        width: 300px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #4f4a4a;
        padding: 24px 6px 24px 6px;
        border-radius: 5px;
    }

    .tags_wrapper {
        display: inline-flex;
        flex-wrap: wrap;
        list-style: none;
        justify-content: center;
    }

    .tag {
        margin: 5px;
        background-color: #000;
        color: #fff;
        padding: 4px;
        border-radius: 4px;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: 600;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .card_img {
        aspect-ratio: 16/9;
        width: 250px;
        margin: 12px 0px 24px 0px;
    }

    .title {
        color: #fff;
        display: inline;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        font-size: large;
    }

    .tag_img {
        width: 20px;
        margin: 0px 5px 0px 0px;
    }

    .html {
        background-color: #ef652a;
    }

    .css {
        background-color: #008fd5;
    }

    .javascript {
        background-color: #f0db4f;
    }

    .react {
        background-color: #61dafb;
    }

    .vue {
        background-color: #3fb984;
    }

    .redux {
        background-color: #764abc;
    }

    .tailwind {
        background-color:#16bbba ;
    }

    .node {
        background-color: #90c53f;
    }

    .express {
        background-color: #494949;
    }

    .postgre {
        background-color: #2f6792;
    }

    .sequelize {
        background-color: #03afef;
    }

</style>



// HTML,CSS,Javascript, React, Vue, Tailwind, Redux, Node.js, Express, PostreSQL, Sequelize
//
// HTML = h
// CSS = c
// Javascript = j
// React = R
// Redux = r
// Vue = v
// Node = n
// Express = e
// Postgre = p
// Sequelize = s
//
//
//
//
//
//
//
//
//






