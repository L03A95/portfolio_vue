<script setup>
    import { AutoTyperVue } from "auto-typer-vue3";
    let text = ['World!', 'Developers!', 'Companies!']
</script>

<template>
    <div class="bg-home">
        <div class="presentation_wrapper">
            <h1>Liam Marlon Perez Lupia</h1>
            <h2>{{this.$store.state.language == 'EN' ? 'Full Stack web developer' : 'Desarrollador web Full Stack'}}</h2>  
        </div>
        <img src="../images/coding.png" class="coding_img">
    </div>
    
</template>

<style scoped>
    @import "auto-typer-vue3/dist/style.css";
    h1 {
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #00DFC0;
        margin-top: 45px;
        font-size: 24px;
    }

    h2 {
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #dfdada;
        font-size: 18px;
    }

    .presentation_wrapper {
        display: flex;
        flex-direction: column;
        /* margin-left: 48px; */
    }

    .bg-home {
        background-color: #2f2a2a;
        height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around
    }

    .coding_img {
        width: 90vw;
        align-self: flex-start;
    }

    @media screen and (min-width: 768px) {
        h1 {
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin-top: 45px;
            font-size: 64px;
        }

        h2 {
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: #dfdada;
            font-size: 32px;
        }

        .coding_img {
            width: 60vw;
            align-self: flex-end;
        }

        .presentation_wrapper {
            display: flex;
            flex-direction: column;
            margin-left: 48px;
        }

        .bg-home {
            justify-content: unset;
            flex-direction: column;
        }

    }

    @media screen and (min-width: 1024px) {
            .coding_img {
            width: 40vw;
            align-self: flex-end;
        }
    }

    @media screen and (min-width: 1280px) {

    }

    @media screen and (min-width: 1536px) {

    }
</style>