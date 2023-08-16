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
                errors = 'Name must be at least 4 characters and max 30 characters'
            }
            else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.email)) {
                errors = 'You must enter a valid email address'
            }
            else if (this.subject ? this.subject.length > 60 || this.subject.length < 4 : true) {
                errors = 'The subject must be at least 4 characters and max 60 characters'
            }


        if ((this.name ? this.name.length > 30 || this.name.length < 4 : true) || (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.email)) || (this.subject ? this.subject.length > 60 || this.subject.length < 4 : true)) {
            Swal.fire({
                icon: 'error',
                title: 'There was an error in the form',
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
</template>
<style>

    .swal-text { 
        color: #dfdada !important;
    }
    .swal-wrapper {
        background-color: #4f4a4a;
    }

    .swal-title {
        color: #dfdada;
    }

    .swal-btn {
        background-color: #2f2a2a;
        color: #dfdada;
    }

    .contact_wrapper {
        background-color: #2f2a2a;
        text-align: center;
        display: grid;
        place-items: center;
    }

    .contact-title {
        color: #00DFC0;
        font-size: 40px;
        margin-top: 70px;
        margin-bottom: 50px;
        font-family: 'lemonmilk';
    }

    .form_wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
        justify-content: center;
        background-color: #4f4a4a;
        padding: 5vh 0;
        border-radius: 5px;
        margin: 3vh;
    }

    .input-name {
        height: 40px;
        width: 36vw;
        margin: 1vw;
        background-color: #5f5a5a;
        border: none;
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
        background-color: #5f5a5a;
        border: none;
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
        background-color: #5f5a5a;
        border: none;
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
        background: #2f2a2a;
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
    }

    .input-name,.input-message,.input-subject:focus {
        outline: none;
    }

    @media screen and (min-width: 768px) {
        .contact-title {
            font-size: 80px;
        }

        .form_wrapper {
            width: 70vw;
        }

        .input-name {
            width: 30vw;
            font-size: 24px;
        }

        .input-subject {
            width: 62vw;
            font-size: 24px;
        }

        .input-message {
            width: 62vw;
            font-size: 24px;
        }

        .input_btn {
            width: 62vw;
        }
     }

    @media screen and (min-width: 1024px) {
        .form_wrapper {
        display: block;
        text-align: center;
        flex-wrap: wrap;
        width: 32vw;
        justify-content: center;
        background-color: #4f4a4a;
        padding: 5vh 0;
        border-radius: 5px;
        margin: 10vh;
    }

    .input-name {
        height: 40px;
        width: 14vw;
        margin: 1vw;
        background-color: #5f5a5a;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        padding-left: 10px;
    }

    .input-subject {
        width: 30vw;
        height: 40px;
        background-color: #5f5a5a;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        padding-left: 10px;
    }

    .input-message {
        width: 30vw;
        height: 20vh;
        margin: 1vw;
        resize: none;
        background-color: #5f5a5a;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        padding-left: 10px;
        padding-top: 5px;
    }
    
    .input_btn {
        width: 30vw;
        height: 40px;
        background: #2f2a2a;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        cursor: pointer;
    }

    .input_btn:active {
        background-color: #3f3a3a;
    }
     }

    @media screen and (min-width: 1280px) { }

    @media screen and (min-width: 1536px) { }
</style>