<script>
</script>

<template>
      <div class="logos">
        <div class="logos-slide">
            <img src="/images/logo_html_800x800.png" />
            <img src="/images/logo_css_800x800.png" />
            <img src="/images/logo_javascript400x400.png" />
            <img src="/images/react_logo_2300x2000.png" />        
            <img src="/images/redux_logo_537x512.png"/>        
            <img src="/images/vuejs_logo.png"/>        
            <img src="/images/node_logo.png" />
            <img src="/images/express_logo_930x930.png" />
            <!-- <img src="/images/php_logo.png" /> -->
            <img src="/images/tailwindcss_logo.png"/>
            <img src="/images/socketio_logo.png">
            <img src="/images/sequelize_logo_920x920.png"/>
            <img src="/images/postgre_logo.png" />
            <!-- <img src="/images/python_logo.png"/> -->
        </div>

        <div class="logos-slide">
            <img src="/images/logo_html_800x800.png" />
            <img src="/images/logo_css_800x800.png" />
            <img src="/images/logo_javascript400x400.png" />
            <img src="/images/react_logo_2300x2000.png" />        
            <img src="/images/redux_logo_537x512.png"/>        
            <img src="/images/vuejs_logo.png"/>        
            <img src="/images/node_logo.png" />
            <img src="/images/express_logo_930x930.png" />
            <!-- <img src="/images/php_logo.png" /> -->
            <img src="/images/socketio_logo.png">
            <img src="/images/tailwindcss_logo.png"/>
            <img src="/images/sequelize_logo_920x920.png"/>
            <img src="/images/postgre_logo.png" />
            <!-- <img src="/images/python_logo.png"/> -->
            </div>
        </div>  
</template>

<style>
    @keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 60px 0;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

/* .logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
} */

/* .logos:hover .logos-slide {
  animation-play-state: paused;
} */

.logos-slide {
  display: inline-block;
  animation: 25s slide infinite linear;
}

.logos-slide img {
  height: 70px;
  margin: 0 10px;
}

</style>