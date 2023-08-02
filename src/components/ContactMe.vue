<script>

</script>
<template>
    <div class="contact_wrapper">
        <h3 class="contact-title">Contact me!</h3>
        <form class="form_wrapper">
            <input placeholder="Name" class="input-name">
            <input placeholder="Email" class="input-name">
            <input placeholder="Subject" class="input-subject">
            <textarea placeholder="Message" class="input-message"></textarea>
            <button class="input_btn">Send</button>
        </form>
    </div>
</template>
<style>
    .contact_wrapper {
        height: 100vh;
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
    }

    .input-name {
        height: 30px;
        width: 14vw;
        margin: 1vw;
    }

    .input-subject {
        width: 30vw;
        height: 30px;
    }

    .input-message {
        width: 30vw;
        height: 20vh;
        margin: 1vw;
        resize: none;
    }
    
    .input_btn {

    }
</style>