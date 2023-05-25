<script setup>
    import { AutoTyperVue } from "auto-typer-vue3";
    let text = ['World!', 'Developers!', 'Companies!']
</script>

<template>
    <div class="bg-home">
        <div class="presentation_wrapper">
           <AutoTyperVue componentTag="h1" :text="''" repeat="false" writtenBeginningWord="Liam Marlon Perez Lupia" startDelay="500"  typingDelay="100"/>
            <AutoTyperVue componentTag="h2" :text="''" repeat="false" writtenBeginningWord="Fullstack web developer." startDelay="3000"  typingDelay="100"/>
            <AutoTyperVue componentTag="h3" id="main-auto-typer" :text="text" writtenBeginningWord="Hello " startDelay="5500" waitBeforeDeleteDelay="2000" typingDelay="100"/> 
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
        background-color: #020c0b;
        height: 100vh;
    }
</style>