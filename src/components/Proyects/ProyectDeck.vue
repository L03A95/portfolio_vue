<script setup>
import ProyectCard from './ProyectCard.vue';
</script>

<template>
    <div class="projects_wrapper">
        <ProyectCard title="RGB Guesser" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/aforvf9e2oray3nv0e8j.jpg" html="True" css="True" javascript="True" react="True" github="https://github.com/L03A95/rgb-guesser" domain="https://rgb-guesser.vercel.app/" description="RGB Guesser es un juego que he desarrollado utilizando React. La jugabilidad consiste en acertar el codigo hexadecimal o RGB de los colores que van apareciendo en la pantalla y asi lograr la mayor cantidad de puntos posibles. "/>

        <ProyectCard title="Wiki Dog" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/nkrxrusg5rftmzpl7jjo.jpg" html="True" css="True" javascript="True" react="True" redux="true" express="true" postgre="true" sequelize="True" github="https://github.com/L03A95/PI-Dogs-main" domain="https://pi-dogs-main-d0f1f8muz-l03a95.vercel.app/" description="Este es el primer proyecto que desarrolle Full Stack. Es una pagina informativa sobre perros, la cual hace un llamado a una API externa y asi obtiene informacion sobre razas de perros y ademas cuenta con una base de datos propia."/>

        <ProyectCard title="Computer Store" image="https://res.cloudinary.com/drdvrqevv/image/upload/t_scale/ghhbndwhjrz7ert6fsdf.jpg" html="True" css="True" javascript="True" react="True" redux="true" express="true" postgre="true" sequelize="True" github="https://github.com/eduardocarlostoledo/proyecto-final" domain="https://storecomputer.netlify.app/" description="Este proyecto lo desarrollamos entre 6 personas. Fue uno de los mas importantes ya que aprendi como trabajar con metodologias agiles como SCRUM, el manejo de Github y trabajo en equipo. Tardamos un mes en desarrollarlo."/>

        <ProyectCard title="Live Chat" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/ajbybd4dvpxzfzc2bnpf.jpg" html="True" css="True" javascript="True" react="True" node="true" github="https://github.com/L03A95/rgb-guesser" domain="https://rgb-guesser.vercel.app/" description="Este es mi primer proyecto utilizando la libreria Socket.io. Esto me permitio aprender sobre web sockets para desarrollar aplicaciones web que requieran de una comunicación a tiempo real tanto del cliente como el servidor."/>

        <ProyectCard title="My portfolio" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/ajbybd4dvpxzfzc2bnpf.jpg" html="True" css="True" javascript="True" vue="True" github="https://github.com/L03A95/portfolio_vue"  description="Mi portafolio fue la primera aplicación que desarrolle con la libreria Vue.js, me sirvio para aprenden demasiadas cosas sobre este lenguaje ya que fue muy desafiante para mi."/>

        <ProyectCard title="Dogs tag" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/aforvf9e2oray3nv0e8j.jpg" html="True" tail="True" github="https://github.com/L03A95/rgb-guesser" domain="https://rgb-guesser.vercel.app/" description="Este proyecto lo inicie cuando apenas comenzaba a aprender Tailwind, me enseño a manejarme con todas las clases y modularización que posee esta libreria, es muy util a la hora de dar estilos ya que resulta mas rapido y comodo."/>
    </div>

</template>

<style>
.projects_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items:flex-start;
}
</style>