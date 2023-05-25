<script setup>
    import Carrousel from './Carrousel.vue'
    import Editor from './Editor.vue'
</script>

<template>
    <div class="bg-skills">
        <div class="skills_wrapper">
            <Carrousel class="carrousel"/> 
            <Editor class="editor"/>
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
    .bg-skills {
         background-color: #041614;  /* #020c0b  color q debe ser*/
        height: 100vh;
    }
    .carrousel {
        width: 85vw;
    }

    .skills_wrapper {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .editor {
        font-size: 11px;
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