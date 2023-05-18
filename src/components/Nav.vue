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
        background-color: #061413;
        height: 8vh;
        border-bottom: 1px solid #29C22B;
    }

    .ul-nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 8vh;
    }

    .ul-nav__li {
        list-style-type: none;
        color: #29C22B;
        cursor: pointer;
        font-family:'Courier New', Courier, monospace;
        user-select: none;
        font-size: 90%;
    }

    .ul-nav__li:hover {
        color: #34F537;
    }

    .ul-nav__li:active {
        color: #34F537;
    }

    @media screen and (min-width: 768px) {
        .ul-nav {
            flex-direction: column;
            height: 100vh;
        }

        .bg-nav {
        height: 100vh;
        border-bottom: none;
        border-right: 1px solid #29C22B;
    }
    }

</style>