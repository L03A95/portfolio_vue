<script setup>
  import { defineComponent } from 'vue'
  import Nav from './components/Nav.vue'
  import Home from './components/Home.vue'
  import Skills from './components/Skills.vue'
  import Proyects from './components/Proyects/Proyects.vue'
  import ContactMe from './components/ContactMe.vue'


</script>

<template>
  <div class="app_wrapper">
    <Nav class="nav"></Nav>
    <Home class="home"></Home>
    <Skills class="skills"></Skills>
    <Proyects class="proyects"></Proyects>
    <ContactMe class="contact_me"></ContactMe>
  </div>
  
</template>

<style>
.app_wrapper {
  display:grid;
  grid-template-areas: 
  "header"
  "main"
  "skills"
  "proyects"
  "contact_me"
  ;

  grid-template-rows: 8vh;
  grid-template-columns: auto;
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

.proyects {
  grid-area: proyects;
}

.contact_me {
  grid-area: contact_me;
}

@media screen and (min-width: 640px) {
 
}

@media screen and (min-width: 768px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main"
    "header skills skills skills skills"
    "header proyects proyects proyects proyects"
    "header contact_me contact_me contact_me contact_me"
    ;
    grid-template-rows: repeat(2,auto);
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
    "header proyects proyects proyects proyects proyects"
    "header contact_me contact_me contact_me contact_me contact_me"
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
    "header proyects proyects proyects proyects proyects proyects proyects"
    "header contact_me contact_me contact_me contact_me contact_me contact_me contact_me"
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
    "header proyects proyects proyects proyects proyects proyects proyects proyects proyects"
    "header contact_me contact_me contact_me contact_me contact_me contact_me contact_me contact_me contact_me"
    ;

    grid-template-columns: repeat(10, 1fr);
  }

  .nav {
    width: 10vw;
  }
}
</style>
