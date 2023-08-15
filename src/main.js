import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



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
app.use(VueSweetalert2);
app.use(store)

app.mount('#app')