<script setup>
  import Nav from './components/Nav.vue'
  import Home from './components/Home.vue'
</script>

<template>
  <div class="app_wrapper">
    <Nav class="nav"/>
    <Home class="home"/>
  </div>
  
</template>

<style>
.app_wrapper {
  display:grid;
  grid-template-areas: 
  "header"
  "main"
  ;

  grid-template-rows: 8vh;
  grid-template-columns: 100vw;
}

.nav {
  grid-area: header;
}

.home {
  grid-area: main;
}

@media screen and (min-width: 640px) {
 
}

@media screen and (min-width: 768px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main"
    ;

    grid-template-columns: repeat(auto-fill, 20vw);
  }
}

@media screen and (min-width: 1024px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main main"
    ;

    grid-template-columns: repeat(auto-fill, 16.66666666666vw);
  }
}


@media screen and (min-width: 1280px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main main main main"
    ;

    grid-template-columns: repeat(auto-fill, 12.5vw);
  }
}



@media screen and (min-width: 1536px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main main main main main main"
    ;

    grid-template-columns: repeat(auto-fill, 10vw);
  }
}
</style>
