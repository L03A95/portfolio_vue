<script setup>
    import { AutoTyperVue } from "auto-typer-vue3";
    let text = ['World!', 'Developers!', 'Companies!']
</script>

<template>
    <div class="bg-home">
        <div class="presentation_wrapper">
            <h1>Liam Marlon Perez Lupia</h1>
            <h2>Full Stack web developer</h2>  
        </div>
    </div>
    
</template>

<style scoped>
    @import "auto-typer-vue3/dist/style.css";
    h1 {
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #dfdada;
        margin-top: 45px;
        font-size: 64px;
    }

    h2 {
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #dfdada;
        font-size: 32px;
    }

    .presentation_wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 48px;
    }

    .bg-home {
        background-color: #2f2a2a;
        height: 100vh;
    }
</style>