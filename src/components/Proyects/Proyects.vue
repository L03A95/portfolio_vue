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
        /* height: 100vh; */
        text-align: center;
        background-color: #1f1a1a;
        opacity: 1;
        background: radial-gradient(circle, transparent 20%, #1f1a1a 20%, #1f1a1a 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #1f1a1a 20%, #1f1a1a 80%, transparent 80%, transparent) 100px 100px, linear-gradient(#00DFC0 8px, transparent 8px) 0 -4px, linear-gradient(90deg, #00DFC0 8px, #1f1a1a 8px) -4px 0;
        background-size: 200px 200px, 200px 200px, 100px 100px, 100px 100px;
    }

    .proyects_title {
        color: #fff;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00DFC0, 0 0 20px #00DFC0, 0 0 25px #00DFC0, 0 0 30px #00DFC0, 0 0 35px #00DFC0;
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
