<script>
    
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
        font-family: 'lemonmilk';
        color: #00DFC0;
        margin-top: 45px;
        font-size: 24px;
    }

    h2 {
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #9e9e9e;
        font-size: 16px;
    }

    .presentation_wrapper {
        display: block;
    }

    .bg-home {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        min-height: 100vh;
    }

    .coding_img {
        width: 90vw;
        align-self: flex-start;
    }

    @media screen and (min-width: 768px) {
        h1 {
            font-family: 'lemonmilk';
            margin-top: 45px;
            font-size: 64px;
        }

        h2 {
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: #9e9e9e;
            font-size: 28px;
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