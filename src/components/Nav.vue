<script>

</script>
<template>
    <div class="bg-nav">
        <ul class="ul-nav">
            <li class="ul-nav__li">Welcome</li>
            <li class="ul-nav__li">Skills</li>
            <li class="ul-nav__li">Projects</li>
            <li class="ul-nav__li">About me</li>
            <li class="ul-nav__li">Contact me</li>
        </ul>
    </div>
</template>
<style scoped>
    .bg-nav {
        background-color: #1f1a1a;
        height: 8vh;
    }

    .ul-nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 8vh;
    }

    .ul-nav__li {
        list-style-type: none;
        color: #dfdada;
        cursor: pointer;
        font-family:'Courier New', Courier, monospace;
        user-select: none;
        font-size: 90%;
    }

    .ul-nav__li:hover {
        color: #34F537;
        text-decoration: underline;
    }

    .ul-nav__li:active {
        color: #34F537;
        text-decoration: underline;

    }

    @media screen and (min-width: 768px) {
        .ul-nav {
            flex-direction: column;
            height: 50vh;
        }

        .bg-nav {
        height: 100vh;
        border-bottom: none;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
    }
    }

</style>