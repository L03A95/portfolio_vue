<script>
export default {
  props: {
    title: String,
    image: String,
    descriptionEs: String,
    descriptionEn: String,
    github: String,
    domain: String,
    html: Boolean,
    css: Boolean,
    javascript: Boolean,
    react: Boolean,
    vue: Boolean,
    tail: Boolean,
    node: Boolean,
    redux: Boolean,
    express: Boolean,
    postgre: Boolean,
    sequelize: Boolean
  },
  data () {
    return {
        isActive: false
    }
  },
  methods: {
    handleActive () {
        this.isActive = !this.isActive
    }
  }
}
</script>

<template>
    <div class="card_wrapper">
        <p class="title">{{title}}</p>
        <img :src="image" class="card_img">

        <ul class="tags_wrapper">
            <li class="tag html" v-if="html"><img src='../../images/logo_html_800x800.png' class="tag_img">HTML</li>
            <li class="tag css" v-if="css"><img src="../../images/logo_css_800x800.png" class="tag_img">CSS</li>
            <li class="tag javascript" v-if="javascript"><img src="../../images/logo_javascript400x400.png" class="tag_img">Javascript</li>
            <li class="tag react" v-if="react"><img src="../../images/react_logo_2300x2000.png" class="tag_img">React.js</li>
            <li class="tag vue" v-if="vue"><img src="../../images/vuejs_logo.png" class="tag_img">Vue.js</li>
            <li class="tag tailwind" v-if="tail"><img src='../../images/tailwindcss_logo.png' class="tag_img">Tailwind</li>
            <li class="tag redux" v-if="redux"><img src="../../images/redux_logo_537x512.png" class="tag_img">Redux</li>
            <li class="tag node" v-if="node"><img src="../../images/node_logo.png" class="tag_img">Node.js</li>
            <li class="tag express" v-if="express"><img src="../../images/express_logo_930x930.png" class="tag_img">Express.js</li>
            <li class="tag postgre" v-if="postgre"><img src="../../images/postgre_logo.png" class="tag_img">PostgreSQL</li>
            <li class="tag sequelize" v-if="sequelize"><img src="../../images/sequelize_logo_920x920.png" class="tag_img">Sequelize</li>
        </ul>
        
        <div :class="{ 'info_active': isActive, 'info_inactive': !isActive }" :style="{ height: isActive ? '250px' : '0' }" class="transition position">
            <p class="detail_text" :style="{ display: isActive ? 'inline-block' : 'none' }">{{this.$store.state.language == 'EN' ? descriptionEn : descriptionEs}}</p> 
            <div class="link_img_wrapper">
                <a :href="github" v-if="github" target="_blank"><img src="../../images/github_logo.png" class="link_img img_link"></a>
                <a :href="domain" v-if="domain" target="_blank"><img src="../../images/site.png" class="link_img img_link"></a>
            </div>
        </div>
        <img src="../../images/flecha.png" class="arrow_btn" @click="handleActive" :style="{ transform: isActive ? 'rotate(270deg)' : 'rotate(90deg)',marginTop: isActive ? '550px' : '340px'}">            
    </div>
</template>

<style>

    .card_wrapper {
        width: 300px;
        display: flex;
        justify-content: top;
        flex-direction: column;
        align-items: center;
        background-color: #4f4a4a;
        padding: 24px 6px 24px 6px;
        border-radius: 5px;
        margin-top: 48px;
        height: 420px;
    }

    .tags_wrapper {
        display: inline-flex;
        flex-wrap: wrap;
        list-style: none;
        justify-content: center;
        position: relative;
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
        color: #dfdada;
        display: inline;
        font-family:monospace;
        font-weight: 600;
        font-size: xx-large
    }

    .tag_img {
        width: 20px;
        margin: 0px 5px 0px 0px;
    }

    .img_link {
        cursor: pointer;
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
        background-color: #696969;
    }

    .postgre {
        background-color: #2f6792;
    }

    .sequelize {
        background-color: #03afef;
    }

    .arrow_btn {
        width: 40px;
        margin-top: 6px;
        transition: 200ms;
        cursor: pointer;
        z-index: 1000;
        position: absolute;
    }

    .info_active {
        overflow: hidden;
        position: absolute;
        height: 250px;
        width: 300px;
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        margin-top: 360px;
        background-color: #4f4a4a;
        padding: 20px;
        z-index: 100;
        border-radius: 5px;
    }

    .info_inactive {
        height: 0;
        overflow: hidden;
        position: absolute;
        width: 300px;
        margin-top: 350px;
        background-color: #4f4a4a;
    }

    .transition {
        transition: 200ms;
    }

    .detail_text {
        color: #dfdada;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .link_img {
        width: 20px;
        margin-right: 10px;
    }

</style>