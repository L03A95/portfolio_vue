<script setup>
import ProyectDeck from './ProyectDeck.vue';



</script>

<template>
    <div class="bg-proyects">
        <h3 class="proyects_title">Proyects</h3>
        <ProyectDeck/>
    </div>
</template>

<style>
    .bg-proyects {
        background-color: #2f2a2a;
        height: 100vh;
        text-align: center;
    }

    .proyects_title {
        color:#dfdada;
        font-size: 80px;
        margin: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
