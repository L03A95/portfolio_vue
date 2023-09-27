<template>
    <div class="about_bg">
        <h3 class="about_title" v-motion-slide-visible-bottom>{{ this.$store.state.language == 'EN' ? 'About me' : 'Sobre mi'}}</h3>
        <p class="about_text">{{this.$store.state.language == 'EN' ? `Hello world!👋 I'm Liam, a talented web developer from Argentina. My interest in programming started when I was 9 years old, but the first time I actually coded was when I was 15 years old. It was a game developed with Unity and C++. At that point, my programming knowledge was limited, but I managed to create a simple game 👾.

        When I turned 17 years old, I began learning through YouTube tutorials. Then, at the age of 18, I joined a bootcamp called "Soy Henry" where I acquired most of my programming knowledge and skills 👨‍💻. This bootcamp encompassed 700 hours of intensive learning.

        Currently, I am actively seeking my first job as a software developer 💼.` : `¡Hola mundo!👋 Soy Liam, un desarrollador web talentoso de Argentina. Mi interes en programación empezó cuando tenia 9 años, pero la primera vez que programé fue a los 15 años. Desarrolle un juego utilizando Unity y el lenguaje C++. En ese entonces mi conocimiento en la programación era limitado, pero pude crear un juego bastante simple 👾.
        
        A los 17, comenzé a aprender programación a travez de tutoriales de Youtube y a los 18, entre al bootcam de "Soy Henry" donde he aprendido gran parte de mi conocimiento en la programación 👨‍💻. Este bootcamp tomó unas 700 horas de aprendizaje.
        
        Actualmente me encuentro en la busqueda activa de mi primer trabajo como desarrollador de software 💼.`}}</p>

        <div class="blob one">
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

<style>
    .blob {
        width: 300px;
        position: absolute;
        z-index: 1;
        filter: blur(100px);
        /* overflow: hidden; */
    }

    .one {
        transform: translate(10vw, 100px);
    }

    .about_title {
        font-size: 40px;
        color: #fff;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00DFC0, 0 0 20px #00DFC0, 0 0 25px #00DFC0, 0 0 30px #00DFC0, 0 0 35px #00DFC0;
        font-size: 40px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-family: 'lemonmilk';
    }
       

    .about_text {
        font-family:monospace;
        font-size: 18px;
        margin: 20px;
        color: #dfdada;
        padding: 20px;
        border-radius: 5px;
        max-width: 600px;
    }

    .about_bg {

        text-align: center;
        display: grid;
        place-items: center;
    }

    @media screen and (min-width: 768px) {
        .about_title {
            font-size: 80px;
        }

        .about_text {
            font-size: 24px;
        }
    }
</style>