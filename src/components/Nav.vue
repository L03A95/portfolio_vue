<script>
export default {
    data() {
    return {
      activeSection: null
        };
    },
    methods: {
        changeLanguage () {
            this.$store.commit('switchLanguage')
            console.log(this.$store.state.language)
        },
        scrollToSection(sectionId) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            this.activeSection = sectionId;
            }
        }
    },
    computed: {
        toggleCheckbox() {
            if(this.$store.state.language == "EN") {
                return true
            }
            else {
                return false
            }
        }
    }
}

</script>
<template>
    <div class="bg-nav">
        <label class="switch">
            <input type="checkbox" @click="changeLanguage" :checked="toggleCheckbox">
            <div class="slider round"></div>
        </label>
        
        <ul class="ul-nav">
            <li class="ul-nav__li" :class="{ active: activeSection === 'about_me'}" @click="scrollToSection('about_me')">{{this.$store.state.language == 'EN' ? 'About me' : 'Sobre mi'}}</li>
            <li class="ul-nav__li" :class="{ active: activeSection === 'projects'}" @click="scrollToSection('projects')">{{this.$store.state.language == 'EN' ? 'Projects' : 'Proyectos'}}</li>
            <li class="ul-nav__li" :class="{ active: activeSection === 'contact_me'}" @click="scrollToSection('contact_me')" >{{this.$store.state.language == 'EN' ? 'Contact me' : 'Contáctame'}}</li>
        </ul>
    </div>
</template>
<style scoped>

    .resume_btn {
        height: 32px;
        width: fit-content;
    }
    .bg-nav {
        background-color: #191414;
        height: 8vh;
        z-index: 10000000;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .ul-nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 8vh;
        width: 70vw;
    }

    .ul-nav__li {
        list-style-type: none;
        color: #dfdada;
        cursor: pointer;
        font-family: 'lemonmilk';
        user-select: none;
        font-size: 10px;
    }

    .ul-nav__li:hover {
        color: #00DFC0;
        text-decoration: underline;
    }

    .ul-nav__li:active {
        color: #00DFC0;
        text-decoration: underline;

    }

    .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    }   

    .switch input {
    display: none;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dfdada;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    }

    .slider:before {
    position: absolute;
    content: image-set("https://em-content.zobj.net/thumbs/120/joypixels/340/flag-spain_1f1ea-1f1f8.png" 4.5x);
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #dfdada;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    }
    
    input:focus + .slider {
    box-shadow: 0 0 1px #101010;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    content: image-set("https://em-content.zobj.net/thumbs/120/joypixels/340/flag-united-kingdom_1f1ec-1f1e7.png" 4.5x);
    }

    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        .ul-nav {
            flex-direction: column;
            height: 50vh;
            width: fit-content;
        }

        .bg-nav {
        height: 100vh;
        border-bottom: none;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
    }
    }

    @media screen and (min-width: 1024px) {

    }

    @media screen and (min-width: 1280px) {

    }

    @media screen and (min-width: 1536px) {
        
    }

</style>