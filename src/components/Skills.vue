<script>
    import Carrousel from './Carrousel.vue'

    export default {
        components: {
            Carrousel
        }
    }
</script>

<template>
    <div class="bg-skills">
        <div class="skills_wrapper">
            <h3 class="skills_title" v-motion-slide-visible-bottom>{{this.$store.state.language == 'EN' ? 'Skills' : 'Habilidades'}}</h3>
            <div>

                <h5 class="skill-subtitle">Frontend:</h5>                
                <ul class="tags_wrapper">
                <li class="tag html"  ><img src='../images/logo_html_800x800.png' class="tag_img">HTML</li>
                <li class="tag css" ><img src="../images/logo_css_800x800.png" class="tag_img">CSS</li>
                <li class="tag javascript"><img src="../images/logo_javascript400x400.png" class="tag_img">Javascript</li>
                <li class="tag react" ><img src="../images/react_logo_2300x2000.png" class="tag_img">React.js</li>
                <li class="tag vue" ><img src="../images/vuejs_logo.png" class="tag_img">Vue.js</li>
                <li class="tag tailwind"><img src='../images/tailwindcss_logo.png' class="tag_img">Tailwind</li>
                <li class="tag redux" ><img src="../images/redux_logo_537x512.png" class="tag_img">Redux</li> </ul>
                <h5 class="skill-subtitle">Backend:</h5>
                <ul class="tags_wrapper">
                <li class="tag node" ><img src="../images/node_logo.png" class="tag_img">Node.js</li>
                <li class="tag express" ><img src="../images/express_logo_930x930.png" class="tag_img">Express.js</li>
                <li class="tag postgre" ><img src="../images/postgre_logo.png" class="tag_img">PostgreSQL</li>
                <li class="tag sequelize" ><img src="../images/sequelize_logo_920x920.png" class="tag_img">Sequelize</li>
                <li class="tag socketio" ><img src="../images/socketio_logo.png" class="tag_img">Socket.io</li>
                </ul>
            </div>
            <Carrousel class="carrousel"/> 
        </div>

        <div class="blob">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(0, 223, 192);"></stop>
                <stop offset="100%" style="stop-color: rgb(176, 239, 224);"></stop>
                </linearGradient>
            </defs>
            <path id="blob" d="M449,293.5Q430,337,397,365Q364,393,326.5,408Q289,423,249.5,425Q210,427,168.5,415.5Q127,404,79.5,379.5Q32,355,31.5,302.5Q31,250,47,205Q63,160,79.5,108.5Q96,57,153.5,67.5Q211,78,250,78.5Q289,79,334,84Q379,89,415.5,121Q452,153,460,201.5Q468,250,449,293.5Z" fill="url(#gradient)"></path>
        </svg>
        </div>
    </div>
</template>

<!-- 
    front end:
HTML, CSS, Javascript, React, Redux, Vue

back end:
Node.js , Express.js , PHP, Sequelize, Python

data base:
PostgreSQL, SQLite
 -->


<style scoped> 
    .blob {
        width: 300px;
        position: absolute;
        z-index: 1;
        filter: blur(140px);
    }
    .skills_title {
        color: #fff;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00DFC0, 0 0 20px #00DFC0, 0 0 25px #00DFC0, 0 0 30px #00DFC0, 0 0 35px #00DFC0;
        font-size: 40px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-family: 'lemonmilk';
    }

    .skill-subtitle {
        color:#dfdada;
        font-size: 16px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-left: 20px;
    }
    .bg-skills {
    }
    .carrousel {
        width: 85vw;
    }

    .skills_wrapper {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
    }



    @media screen and (min-width: 640px) {
            .editor {
            font-size: 14px;
        }

        .carrousel {
        width: 70vw;
        }
    }

    @media screen and (min-width: 768px) {
        .editor {
            font-size: 16px;
        }
        .skills_title {
            font-size: 80px;
        }

        .skill-subtitle {
            font-size: 32px;
        }
    }

    @media screen and (min-width: 1024px) {
        .editor {
            font-size: 18px;
        }
    }   

    @media screen and (min-width: 1280px) {
        .editor {
            font-size: 20px;
        }
    }

    @media screen and (min-width: 1536px) {

    }
</style>