<script setup>
  import Nav from './components/Nav.vue'
  import Home from './components/Home.vue'
  import Skills from './components/Skills.vue'
</script>

<template>
  <div class="app_wrapper">
    <Nav class="nav"/>
    <Home class="home"/>
    <Skills class="skills"/>
  </div>
  
</template>

<style>
.app_wrapper {
  display:grid;
  grid-template-areas: 
  "header"
  "main"
  "skills"
  ;

  grid-template-rows: 8vh;
  grid-template-columns: 100vw;
}

.nav {
  grid-area: header;
  position:fixed;
  width: 100vw;
}

.home {
  grid-area: main;
}

.skills {
  grid-area: skills;
}

@media screen and (min-width: 640px) {
 
}

@media screen and (min-width: 768px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main"
    "header skills skills skills skills"
    ;
    grid-template-rows: repeat(2,100vh);
    grid-template-columns: repeat(5, 1fr);
  }

  .nav {
    width: 20vw;
  }
}

@media screen and (min-width: 1024px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main main"
    "header skills skills skills skills skills"

    ;

    grid-template-columns: repeat(6, 1fr);
  }
  .nav {
    width: 16.6666666666666666666666vw;
  }

}


@media screen and (min-width: 1280px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main main main main"
    "header skills skills skills skills skills skills skills"

    ;

    grid-template-columns: repeat(8, 1fr);
  }

  .nav {
    width: 12.5vw;
  }
}



@media screen and (min-width: 1536px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main main main main main main"
    "header skills skills skills skills skills skills skills skills skills"

    ;

    grid-template-columns: repeat(10, 1fr);
  }

  .nav {
    width: 10vw;
  }
}
</style>
