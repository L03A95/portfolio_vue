<script>
  import { defineComponent } from 'vue'
  import Nav from './components/Nav.vue'
  import Home from './components/Home.vue'
  import Skills from './components/Skills.vue'
  import Proyects from './components/Proyects/Proyects.vue'
  import ContactMe from './components/ContactMe.vue'
  import ProgressBar from './components/ProgressBar.vue'
  import Footer from './components/Footer.vue'
  import AboutMe from './components/AboutMe.vue'

  export default {
  components: {
    Nav, Home ,Skills, Proyects, ContactMe, ProgressBar, Footer, AboutMe
  }
};
</script>

<template>
  <div class="app_wrapper">
    <Nav class="nav"></Nav>
    <ProgressBar></ProgressBar>
    <Home class="home"></Home>
    <AboutMe class="about_me" id="about_me"></AboutMe>
    <Skills class="skills"></Skills>
    <Proyects class="proyects" id="projects"></Proyects>
    <ContactMe class="contact_me" id="contact_me"></ContactMe>
    <Footer class="footer"></Footer>
  </div>
  
</template>

<style>
.app_wrapper {
  display:grid;
  grid-template-areas: 
  "header"
  "main"
  "about_me"
  "skills"
  "proyects"
  "contact_me"
  "footer"
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

.about_me {
  grid-area: about_me;
}

.footer {
  grid-area: footer;
}

@media screen and (min-width: 640px) {
 
}

@media screen and (min-width: 768px) {
  .app_wrapper {
    grid-template-areas: 
    "header main main main main"
    "header about_me about_me about_me about_me"
    "header skills skills skills skills"
    "header proyects proyects proyects proyects"
    "header contact_me contact_me contact_me contact_me"
    "header footer footer footer footer"
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
    "header about_me about_me about_me about_me about_me"
    "header skills skills skills skills skills"
    "header proyects proyects proyects proyects proyects"
    "header contact_me contact_me contact_me contact_me contact_me"
    "header footer footer footer footer footer"
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
    "header about_me about_me about_me about_me about_me about_me about_me"
    "header skills skills skills skills skills skills skills"
    "header proyects proyects proyects proyects proyects proyects proyects"
    "header contact_me contact_me contact_me contact_me contact_me contact_me contact_me"
    "header footer footer footer footer footer footer footer"
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
    "header about_me about_me about_me about_me about_me about_me about_me about_me about_me"
    "header skills skills skills skills skills skills skills skills skills"
    "header proyects proyects proyects proyects proyects proyects proyects proyects proyects"
    "header contact_me contact_me contact_me contact_me contact_me contact_me contact_me contact_me contact_me"
    "header footer footer footer footer footer footer footer footer footer"
    ;

    grid-template-columns: repeat(10, 1fr);
  }

  .nav {
    width: 10vw;
  }
}
</style>
