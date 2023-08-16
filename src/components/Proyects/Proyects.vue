<script>
import ProyectDeck from './ProyectDeck.vue';


export default {
    components: {
        ProyectDeck
    }
}
</script>

<template>
    <div class="bg-proyects">
        <h3 class="proyects_title" v-motion-slide-visible-bottom>{{this.$store.state.language == 'EN' ? 'Projects' : 'Proyectos'}}</h3>
        <ProyectDeck/>
    </div>
</template>

<style>
    .bg-proyects {
        background-color: #2f2a2a;
        /* height: 100vh; */
        text-align: center;
    }

    .proyects_title {
        color: #00DFC0;
        font-size: 40px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-family: 'lemonmilk';
        display: inline-block;
        position: relative;
    }

    @media screen and (min-width: 768px) {
        .proyects_title {
            font-size: 80px;
        }
    }

    @media screen and (min-width: 1024px) {

    }

    @media screen and (min-width: 1280px) {

    }

    @media screen and (min-width: 1536px) {
        
    }
</style>
