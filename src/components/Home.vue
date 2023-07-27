<script setup>
    import { AutoTyperVue } from "auto-typer-vue3";
    let text = ['World!', 'Developers!', 'Companies!']
</script>

<template>
    <div class="bg-home">
        <div class="presentation_wrapper">
           
        </div>
    </div>
    
</template>

<style scoped>
    @import "auto-typer-vue3/dist/style.css";
    h1 {
        font-family:'Courier New', Courier, monospace;
        color: #29C22B;
        margin: 15px;
        font-size: 26px;
    }

    h2 {
        font-family:'Courier New', Courier, monospace;
        color: #29C22B;
        margin: 15px;
    }

    h3 {
        font-family:'Courier New', Courier, monospace;
        color: #29C22B;
        font-size: 22px;
    }

    .presentation_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bg-home {
        background-color: #2f2a2a;
        height: 100vh;
    }
</style>