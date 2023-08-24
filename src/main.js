import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion';




const getDefaultLanguage = () => {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.startsWith('es') ? 'ES' : 'EN';
  };

const store = createStore({
    state () {
        return {
            language: getDefaultLanguage()
        }
    },
    mutations: {
        switchLanguage (state) {
            state.language == 'ES' ? state.language = 'EN' : state.language = 'ES';
        }
    }
})

const app = createApp(App)
app.use(store)
app.use(MotionPlugin)

app.mount('#app')