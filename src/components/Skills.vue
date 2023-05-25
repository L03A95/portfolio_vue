<script setup>
    import Carrousel from './Carrousel.vue'
</script>

<template>
    <div class="bg-skills">
        <div class="skills_wrapper">
           <Carrousel class="carrousel"/> 
        </div>
    </div>
</template>

<style scoped> 
    .bg-skills {
         background-color: #041614;  /* #020c0b  color q debe ser*/
        height: 100vh;
    }
    .carrousel {
        width: 85vw;
    }

    .skills_wrapper {
        margin-top: 100px;
        display: flex;
        justify-content: center;
    }
</style>