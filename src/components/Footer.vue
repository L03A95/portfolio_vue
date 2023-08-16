<template>
    <div class="bg_footer">
        <div class="social_img__wrapper">
            <a href="https://github.com/L03A95" target="_blank"><img src="../images/github_logo.png" class="social_img"></a>
            <a href="https://www.linkedin.com/in/liam-perez-lupia-33a189257/" target="_blank"><img src="../images/linkedin_logo.png" class="social_img"></a> 
        </div>
        <div>
            <div>
                <img src="../images/phone_logo.png" class="small_logo"><p class="social_text">+54 9 11 3767-6146</p>
            </div>
            <div>
                <img src="../images/email_logo.png" class="small_logo"><p class="social_text">liamperezlupia53@gmail.com</p>
            </div>
        </div>
        <a class="a_btn" :href="this.$store.state.language == 'EN' ? '../assets/CV-Liam-Enlish.pdf' : '../assets/CV-Liam-Español.pdf'" :download="this.$store.state.language == 'EN' ? 'CV-Liam-Enlish.pdf' : 'CV-Liam-Español.pdf'"><button class="resume_btn">{{this.$store.state.language == 'EN' ? 'Download resume' : 'Descargar CV'}}</button></a>
    </div>
</template>

<style>
    .a_btn {
        width: 90%;
    }
    .bg_footer {
        height: 30vh;
        background: #1f1a1a;
        padding-top: 5vh;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .social_img {
        width: 50px;
        margin-left: 20px;
        cursor: pointer;
    }


    .social_text {
        color:#4f4a4a ;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        display: inline-block;
    }

    .small_logo {
        width: 18px;
        margin-right: 10px;
    }

    .resume_btn {
        width:100%;
        height: 8vh;
        background: #2f2a2a;
        border: none;
        border-radius: 5px;
        font-family: 'lemonmilk';
        font-weight: 600;
        font-size: large;
        color: #dfdada;
        cursor: pointer;
    }

    .resume_btn:active {
        background-color: #3f3a3a;
        color:#00DFC0;
    }

    @media screen and (min-width: 768px) { 
        .social_text {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 1024px) { 
        .social_text {
            font-size: 18px;
        }
    }
</style>