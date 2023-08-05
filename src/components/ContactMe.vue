<script setup>
import {ref} from 'vue'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const input = ref({
    name: '',
    email: '',
    subject: '',
    message:''
})

const handleInputChange = (event) => {
    input[event.target.name] = event.target.value
    console.log(input[event.target.name])
    console.log(event.target.value)
}


const sendMail = () => {
    if(input.name ? input.name.length > 30 || input.name.length < 4 : true) {
        console.log("po weon")
        return 0;
    }
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input.email)) {
        console.log("mal email")
        return 0;
    }
    else if (input.subject ? input.subject.length > 60 || input.subject.length < 4 : true) {
        console.log("mal subject")
        return 0;
    }

    emailjs.init('4hg5wsIkVDcYDKOoL')
    emailjs.send("service_uc6r896","template_8ckcjhs",{
    subject: input.subject,
    from_name: input.name,
    message: input.message,
    from_email: input.email,
    reply_to: input.email,
    }).then(res => 
    Swal.fire({
        icon: 'success',
        title: 'Email sent succesfully!',
        confirmButtonText: 'Ok',
        customClass: {
            popup: 'swal-wrapper',
            title: 'swal-title',
            confirmButton: 'swal-btn'
        }
    }));



    input.value = {
        name: '',
        email: '',
        subject: '',
        message:''
    };
}

</script>
<template>
    <div class="contact_wrapper">
        <h3 class="contact-title">Contact me!</h3>
        <form class="form_wrapper">
            <input placeholder="Name" class="input-name" name="name" v-on:change="handleInputChange" v-bind:value="input.name">
            <input placeholder="Email" class="input-name" name="email" v-on:change="handleInputChange" v-bind:value="input.email">
            <input placeholder="Subject" class="input-subject" name="subject" v-on:change="handleInputChange" v-bind:value="input.subject">
            <textarea placeholder="Message" class="input-message" name="message" v-on:change="handleInputChange" v-bind:value="input.message"></textarea>
            <input type="button" class="input_btn" value="Send" v-on:click="sendMail">
        </form>
    </div>
</template>
<style>
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
        height: 100vh;
        background-color: #2f2a2a;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
    }

    .contact-title {
        color:#dfdada;
        font-size: 80px;
        margin: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .form_wrapper {
        display: flex;
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
</style>