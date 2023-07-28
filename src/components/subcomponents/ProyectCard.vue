<script>
export default {
  props: {
    title: String,
    image: String
  }
}

import html from '../images/logo_html_800x800.png'

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
            <li class="tag">HTML</li>
            <li class="tag">CSS</li>
            <li class="tag">Javascript</li>
            <li class="tag">React.js</li>
            <li class="tag">Vue.js</li>
            <li class="tag">Tailwind</li>
            <li class="tag">Redux</li>
            <li class="tag">Node.js</li>
            <li class="tag">Express.js</li>
            <li class="tag">PostgreSQL</li>
            <li class="tag">Sequelize</li>
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
        background-color: bisque;
        padding: 3px;
        border-radius: 4px;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: 600;
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






