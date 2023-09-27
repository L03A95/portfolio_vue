<script>

</script>

<template>
    <div class="bg_footer">
        <div class="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
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
        <a class="a_btn" :href="this.$store.state.language == 'EN' ? 'https://drive.google.com/uc?export=download&id=1CKQyrSXpVg2UIox1-9K1l3hfjZeWMKuZ' : 'https://drive.google.com/uc?export=download&id=1Obv5hJq-nvyJGkZGLNtJhlMlTXVF9laY'" download>
            <button class="resume_btn">{{this.$store.state.language == 'EN' ? 'Download resume' : 'Descargar CV'}}</button>
        </a>
    </div>
</template>

<style>
    .wave {
    position: absolute;
    top: -120px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
}

.wave .shape-fill {
    fill: #00DFC0;
}

    .a_btn {
        width: 90%;
    }

    .bg_footer {
        margin-top: 100px;
        height: 30vh;
        background: #00DFC0;
        padding-top: 5vh;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        position: relative;
    }

    .social_img {
        width: 40px;
        margin-left: 20px;
        cursor: pointer;
    }


    .social_text {
        color:#4f4a4a ;
        font-family: 'Poppins';
        font-size: 13px;
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
            font-size: 16px;
        }
    }

    @media screen and (min-width: 1024px) { 
        .social_text {
            font-size: 16px;
        }

        .social_img { 
            width: 50px;
        }
    }
</style>