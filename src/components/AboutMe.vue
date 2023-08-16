<template>
    <div class="about_bg">
        <h3 class="about_title" v-motion-slide-visible-bottom>{{ this.$store.state.language == 'EN' ? 'About me' : 'Sobre mi'}}</h3>
        <p class="about_text">{{this.$store.state.language == 'EN' ? `Hello world!👋 I'm Liam, a talented web developer from Argentina. My interest in programming started when I was 9 years old, but the first time I actually coded was when I was 15 years old. It was a game developed with Unity and C++. At that point, my programming knowledge was limited, but I managed to create a simple game 👾.

        When I turned 17 years old, I began learning through YouTube tutorials. Then, at the age of 18, I joined a bootcamp called "Soy Henry" where I acquired most of my programming knowledge and skills 👨‍💻. This bootcamp encompassed 700 hours of intensive learning.

        Currently, I am actively seeking my first job as a software developer 💼.` : `¡Hola mundo!👋 Soy Liam, un desarrollador web talentoso de Argentina. Mi interes en programación empezó cuando tenia 9 años, pero la primera vez que programé fue a los 15 años. Desarrolle un juego utilizando Unity y el lenguaje C++. En ese entonces mi conocimiento en la programación era limitado, pero pude crear un juego bastante simple 👾.
        
        A los 17, comenzé a aprender programación a travez de tutoriales de Youtube y a los 18, entre al bootcam de "Soy Henry" donde he aprendido gran parte de mi conocimiento en la programación 👨‍💻. Este bootcamp tomó unas 700 horas de aprendizaje.
        
        Actualmente me encuentro en la busqueda activa de mi primer trabajo como desarrollador de software 💼.`}}</p>
    </div>
    
</template>

<style>
    .about_title {
        font-size: 40px;
        color: #00DFC0;
        font-size: 40px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-family: 'lemonmilk';
    }

    .about_text {
        font-family: monospace;
        font-size: 18px;
        margin: 20px;
        color: #dfdada;
        background-color: #5f5a5a;
        padding: 20px;
        border-radius: 5px;
        max-width: 600px;
    }

    .about_bg {
        background-color: #2f2a2a;
        text-align: center;
        display: grid;
        place-items: center;
    }

    @media screen and (min-width: 768px) {
        .about_title {
            font-size: 80px;
        }
    }
</style>