<script setup>
    import Carrousel from './Carrousel.vue'
    import Editor from './Editor.vue'
</script>

<template>
    <div class="bg-skills">
        <div class="skills_wrapper">
            <h3 class="skills_title">{{this.$store.state.language == 'EN' ? 'Skills' : 'Habilidades'}}</h3>
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
                </ul>
            </div>
            <Carrousel class="carrousel"/> 
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
    .skills_title {
        color: #00DFC0;
        font-size: 32px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .skill-subtitle {
        color:#dfdada;
        font-size: 16px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .bg-skills {
         background-color: #2f2a2a;  /* #020c0b  color q debe ser*/
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