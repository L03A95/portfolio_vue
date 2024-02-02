<script>
import {ref} from 'vue'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

// const input = ref({
//     name: '',
//     email: '',
//     subject: '',
//     message:''
// })

// const handleInputChange = (event) => {
//     input[event.target.name] = event.target.value
// }


export default {
    data() {
        return {
        name: '',
        email: '',
        subject: '',
        message:''
        }
    },
    methods: {
        sendMail () {

        let errors = ''

        if(this.name ? this.name.length > 30 || this.name.length < 4 : true) {
                errors = this.$store.state.language == 'EN' ? 'Name must be at least 4 characters and max 30 characters' : 'El nombre debe contener al menos 4 caracteres y maximo 30'
            }
            else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.email)) {
                errors = this.$store.state.language == 'EN' ? 'You must enter a valid email address' : 'Ingresa un email valido'
            }
            else if (this.subject ? this.subject.length > 60 || this.subject.length < 4 : true) {
                errors = this.$store.state.language == 'EN' ? 'The subject must be at least 4 characters and max 60 characters' : 'El asunto debe contener al menos 4 caracteres y maximo 60'
            }


        if ((this.name ? this.name.length > 30 || this.name.length < 4 : true) || (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.email)) || (this.subject ? this.subject.length > 60 || this.subject.length < 4 : true)) {
            Swal.fire({
                icon: 'error',
                title: this.$store.state.language == 'EN' ? "There's an error in the form" : 'Hay un error en el formulario',
                text: errors,
                customClass: {
                    popup: 'swal-wrapper',
                    title: 'swal-title',
                    htmlContainer: 'swal-text'
                }
            })
            return;
        }

        emailjs.init('4hg5wsIkVDcYDKOoL')
        emailjs.send("service_uc6r896","template_8ckcjhs",{
        subject: this.subject,
        from_name: this.name,
        message: this.message,
        from_email: this.email,
        reply_to: this.email,
        }).then(res => 
        Swal.fire({
            icon: 'success',
            title: this.$store.state.language == 'EN' ? 'Email sent succesfully!' : 'Correo enviado exitosamente!',
            confirmButtonText: 'Ok',
            customClass: {
                popup: 'swal-wrapper',
                title: 'swal-title',
                confirmButton: 'swal-btn'
            }
        }));

        this.value = {
            name: '',
            email: '',
            subject: '',
            message:''
        };

        this.name = ''
        this.email = ''
        this.subject = ''
        this.message = ''
        },
         handleInputChange  (event) {
        this[event.target.name] = event.target.value
        }
    }
}

</script>
<template>
    <div class="contact_wrapper">
        <div class="contact_container">
        <div>
           <h3 class="contact-title" v-motion-slide-visible-bottom>{{this.$store.state.language == 'EN' ? 'Contact me!' : 'Contáctame!'}}</h3> 
        </div>
        
        <form class="form_wrapper">
            <input :placeholder="this.$store.state.language == 'EN' ? 'Name' : 'Nombre'" class="input-name" name="name" v-on:change="handleInputChange" v-bind:value="name">
            <input :placeholder="this.$store.state.language == 'EN' ? 'Email' : 'Correo Electrónico'" class="input-name" name="email" v-on:change="handleInputChange" v-bind:value="email">
            <input :placeholder="this.$store.state.language == 'EN' ? 'Subject' : 'Asunto'" class="input-subject" name="subject" v-on:change="handleInputChange" v-bind:value="subject">
            <textarea :placeholder="this.$store.state.language == 'EN' ? 'Message' : 'Mensaje'" class="input-message" name="message" v-on:change="handleInputChange" v-bind:value="message"></textarea>
            <input type="button" class="input_btn" :value="this.$store.state.language == 'EN' ? 'Send' : 'Enviar'" v-on:click="sendMail">
        </form>
        </div>
        <div class="blob three">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(0, 223, 192);"></stop>
                <stop offset="100%" style="stop-color: rgb(176, 239, 224);"></stop>
                </linearGradient>
            </defs>
            <path id="blob" d="M449,293.5Q430,337,397,365Q364,393,326.5,408Q289,423,249.5,425Q210,427,168.5,415.5Q127,404,79.5,379.5Q32,355,31.5,302.5Q31,250,47,205Q63,160,79.5,108.5Q96,57,153.5,67.5Q211,78,250,78.5Q289,79,334,84Q379,89,415.5,121Q452,153,460,201.5Q468,250,449,293.5Z" fill="url(#gradient)"></path>
        </svg>
        </div>
    </div>
</template>
<style>
.contact_container {
    z-index: 100;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}

    .blob {
        width: 300px;
        position: absolute;
        z-index: 1;
        filter: blur(10px);
    }

    .three {
        transform: translate(-400px, 200px);
        z-index: -1000;
    }

    .swal-text { 
        color: #dfdada !important;
    }
    .swal-wrapper {
        background-color: #4f4a4a;
        position: absolute;
    }

    .swal-title {
        color: #dfdada;
    }

    .swal-btn {
        background-color: #2f2a2a;
        color: #dfdada;
    }

    .contact_wrapper {
        text-align: center;
        display: grid;
        place-items: center;
    }

    .contact-title {
        color: #fff;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00DFC0, 0 0 20px #00DFC0, 0 0 25px #00DFC0, 0 0 30px #00DFC0, 0 0 35px #00DFC0;
        font-size: 40px;
        margin-top: 70px;
        margin-bottom: 50px;
        font-family: 'lemonmilk';
    }

    .form_wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        justify-content: center;
        /* backdrop-filter: blur(10px); */
        background-color: rgba(1,1,1,0.3);

        /* border: 2px solid rgba(0, 223, 192, 0.05);
        box-shadow: 0 0 30px rgba(0, 223, 192, 0.3);  */
        padding: 5vh 0;
        border-radius: 5px;
        margin: 5%;
        margin-bottom: 20vh;
    }

    .input-name {
        height: 40px;
        width: 36vw;
        margin: 1vw;
        background: rgba(0,0,0,0.2);

        border: 1px solid #252525;
        border-radius: 5px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        padding-left: 10px;
        font-size: 14px;
    }

    .input-subject {
        width: 74vw;
        height: 40px;
        background: rgba(0,0,0,0.2);

        border: 1px solid #252525;

        border-radius: 5px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        padding-left: 10px;
        font-size: 14px;
    }

    .input-message {
        width: 74vw;
        height: 24vh;
        margin: 1vw;
        resize: none;
        background: rgba(0,0,0,0.2);

        border: 1px solid #252525;

        border-radius: 5px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        padding-left: 10px;
        padding-top: 5px;
        font-size: 14px;
    }
    
    .input_btn {
        width: 74vw;
        height: 40px;
    
        background: rgba(0,0,0,0.5);
        border: none;
        border-radius: 5px;
        font-family: 'lemonmilk';
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        cursor: pointer;
    }

    .input_btn:active {
        background-color: #3f3a3a;
        color: #00DFC0;
    }

    .input-name,.input-message,.input-subject:focus {
        outline: none;
    }

    @media screen and (min-width: 768px) {
        .contact-title {
            font-size: 80px;
        }

        /* .form_wrapper {
            width: 70vw;
        } */

        .input-name {
            width: 30vw;
            font-size: 18px;
        }

        .input-subject {
            width: 62vw;
            font-size: 18px;
        }

        .input-message {
            width: 62vw;
            font-size: 18px;
        }

        .input_btn {
            width: 62vw;
        }
     }

    @media screen and (min-width: 1024px) {
        .form_wrapper {
            max-width: 800px;
    }

    .input-name {
        max-width: 321px;
    }

    .input-subject {
        max-width: 680px;
    }

    .input-message {
        max-width: 680px;
    }
    
    .input_btn {
        max-width: 680px;
    }

    .input_btn:active {

    }
     }

    @media screen and (min-width: 1280px) { }

    @media screen and (min-width: 1536px) { }
</style>