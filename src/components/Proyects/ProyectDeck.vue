<script setup>
import ProyectCard from './ProyectCard.vue';
</script>

<template>
    <div class="projects_wrapper">
        <ProyectCard title="RGB Guesser" image="/images/rgb_guesser.png" html="True" css="True" javascript="True" react="True" github="https://github.com/L03A95/rgb-guesser" domain="https://rgb-guesser.vercel.app/" descriptionEs="RGB Guesser es un juego que he desarrollado utilizando React. La jugabilidad consiste en acertar el codigo hexadecimal o RGB de los colores que van apareciendo en la pantalla y asi lograr la mayor cantidad de puntos posibles." descriptionEn="RGB Guesser is a game that I've developed using React. The game consists of guessing the hexadecimal or RGB code of the colors that show up on the screen, and in that way, collecting the most points."/>

        <ProyectCard title="Wiki Dog" image="/images/wiki_dog.png" html="True" css="True" javascript="True" react="True" redux="true" express="true" postgre="true" sequelize="True" github="https://github.com/L03A95/PI-Dogs-main" domain="https://pi-dogs-main-d0f1f8muz-l03a95.vercel.app/" descriptionEs="Este es el primer proyecto que desarrolle Full Stack. Es una pagina informativa sobre perros, la cual hace un llamado a una API externa y asi obtiene informacion sobre razas de perros y ademas cuenta con una base de datos propia." descriptionEn="This is the first full-stack project that I've developed. It's an informative page about dog breeds that uses an external API to obtain information on dog breeds, and it also has its own database."/>

        <ProyectCard title="Computer Store" image="/images/computer_store.png" html="True" css="True" javascript="True" react="True" redux="true" express="true" postgre="true" sequelize="True" github="https://github.com/eduardocarlostoledo/proyecto-final" domain="https://storecomputer.netlify.app/" descriptionEs="Desarrollamos este proyecto entre 6 personas. Fue uno de los más importantes, ya que aprendí cómo trabajar con metodologías ágiles como SCRUM, el manejo de Github y el trabajo en equipo. Nos llevó un mes desarrollarlo." descriptionEn="We developed this project among 6 people. It was one of the most important ones, as I learned how to work with agile methodologies like SCRUM, GitHub management, and teamwork. It took us a month to develop it."/>

        <ProyectCard title="Live Chat" image="/images/live_chat.png" html="True" css="True" javascript="True" react="True" node="true" socketio="True" github="https://github.com/L03A95/react-chat" domain="https://livechatweb.vercel.app/" descriptionEs="Este es mi primer proyecto utilizando la libreria Socket.io. Esto me permitio aprender sobre web sockets para desarrollar aplicaciones web que requieran de una comunicación a tiempo real tanto del cliente como el servidor." descriptionEn="This was my first project using the socket.io library. This allowed me to learn about web sockets for developing web applications that require real-time communication between both the client and the server."/>

        <ProyectCard title="My portfolio" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/ajbybd4dvpxzfzc2bnpf.jpg" html="True" css="True" javascript="True" vue="True" github="https://github.com/L03A95/portfolio_vue"  descriptionEs="Mi portafolio fue la primera aplicación que desarrolle con la libreria Vue.js, me sirvio para aprenden demasiadas cosas sobre esta libreria como modularizacion de componentes, renderizados condicionales, estados, Composition Api, options API y mas." descriptionEn="My portfolio was the first application I developed using the Vue.js library. It served me to learn a lot of things about this library, such as component modularization, conditional rendering, states, Composition API, options API, and more."/>

        <ProyectCard title="Dogs tag" image="/images/dogs_tag.png" html="True" tail="True" github="https://github.com/L03A95/dogs_tag" descriptionEs="Este proyecto lo inicie cuando apenas comenzaba a aprender Tailwind, me enseño a manejarme con todas las clases y modularización que posee esta libreria, es muy util a la hora de dar estilos ya que resulta mas rapido y comodo." descriptionEn="I started this project when I was just beginning to learn Tailwind. It taught me how to navigate through all the classes and modularization that this library offers. It's very useful when it comes to styling since it's faster and more convenient."/>

        <ProyectCard title="Parrilla Tornado" image="/images/Parrilla_tornado.jpg" html="True" css="True" javascript="True" react="True" github="https://github.com/L03A95/rgb-guesser" domain="https://rgb-guesser.vercel.app/" descriptionEs="He creado una aplicación y una pagina web para esta parrilla ubicada en el delta de Tigre. La pagina consiste en mostrar información sobre la parrilla y un menú, desde la aplicación pueden crear, editar y eliminar menus, que estos mismos se van a ver renderizados en la pagina para los clientes." descriptionEn="RGB Guesser is a game that I've developed using React. The game consists of guessing the hexadecimal or RGB code of the colors that show up on the screen, and in that way, collecting the most points."/>

        <ProyectCard title="Coppel App" image="/images/coppel.jpg"  javascript="True" react="True" github="https://github.com/L03A95/rgb-guesser" descriptionEs="RGB Guesser es un juego que he desarrollado utilizando React. La jugabilidad consiste en acertar el codigo hexadecimal o RGB de los colores que van apareciendo en la pantalla y asi lograr la mayor cantidad de puntos posibles." descriptionEn="RGB Guesser is a game that I've developed using React. The game consists of guessing the hexadecimal or RGB code of the colors that show up on the screen, and in that way, collecting the most points."/>
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