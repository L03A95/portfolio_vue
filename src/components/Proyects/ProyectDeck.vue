<script setup>
import ProyectCard from './ProyectCard.vue';
</script>

<template>
    <div class="projects_wrapper">
        <ProyectCard title="RGB Guesser" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/aforvf9e2oray3nv0e8j.jpg" html="True" css="True" javascript="True" react="True" github="https://github.com/L03A95/rgb-guesser" domain="https://rgb-guesser.vercel.app/" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ut voluptates deserunt iste corrupti, aspernatur explicabo, ratione impedit velit nemo ipsum commodi, excepturi at amet ducimus in ullam facilis similique?"/>

        <ProyectCard title="Wiki Dog" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/nkrxrusg5rftmzpl7jjo.jpg" html="True" css="True" javascript="True" react="True" redux="true" express="true" postgre="true" sequelize="True" github="https://github.com/L03A95/PI-Dogs-main" domain="https://pi-dogs-main-d0f1f8muz-l03a95.vercel.app/" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ut voluptates deserunt iste corrupti, aspernatur explicabo, ratione impedit velit nemo ipsum commodi, excepturi at amet ducimus in ullam facilis similique?"/>

        <ProyectCard title="Computer Store" image="https://res.cloudinary.com/drdvrqevv/image/upload/t_scale/ghhbndwhjrz7ert6fsdf.jpg" html="True" css="True" javascript="True" react="True" redux="true" express="true" postgre="true" sequelize="True" github="https://github.com/eduardocarlostoledo/proyecto-final" domain="https://storecomputer.netlify.app/" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ut voluptates deserunt iste corrupti, aspernatur explicabo, ratione impedit velit nemo ipsum commodi, excepturi at amet ducimus in ullam facilis similique?"/>

        <ProyectCard title="Live Chat" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/ajbybd4dvpxzfzc2bnpf.jpg" html="True" css="True" javascript="True" react="True" node="true" github="https://github.com/L03A95/rgb-guesser" domain="https://rgb-guesser.vercel.app/" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ut voluptates deserunt iste corrupti, aspernatur explicabo, ratione impedit velit nemo ipsum commodi, excepturi at amet ducimus in ullam facilis similique?"/>

        <ProyectCard title="My portfolio" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/ajbybd4dvpxzfzc2bnpf.jpg" html="True" css="True" javascript="True" vue="True" github="https://github.com/L03A95/portfolio_vue"  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ut voluptates deserunt iste corrupti, aspernatur explicabo, ratione impedit velit nemo ipsum commodi, excepturi at amet ducimus in ullam facilis similique?"/>

        <ProyectCard title="Dogs tag" image="https://res.cloudinary.com/drdvrqevv/image/upload/c_scale,h_141,w_240/aforvf9e2oray3nv0e8j.jpg" html="True" tail="True" github="https://github.com/L03A95/rgb-guesser" domain="https://rgb-guesser.vercel.app/" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ut voluptates deserunt iste corrupti, aspernatur explicabo, ratione impedit velit nemo ipsum commodi, excepturi at amet ducimus in ullam facilis similique?"/>
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