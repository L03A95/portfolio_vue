<script setup>
    import { AutoTyperVue } from "auto-typer-vue3";
    let text = ['World!', 'Developers!', 'Companies!']
</script>

<template>
    <div class="bg-home">
        <AutoTyperVue componentTag="h1" id="main-auto-typer" :text="text" writtenBeginningWord="Hello "/>
    </div>
    
</template>

<style scoped>
    @import "auto-typer-vue3/dist/style.css";
    h1 {
        font-family:'Courier New', Courier, monospace;
        color: #29C22B;
    }

    .bg-home {
        background-color: #020c0b;
        height: 100vh;
    }
</style>