<template>
    <div class="progress-container">
      <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        progressBarWidth: '0%'
      };
    },
    mounted() {
      window.addEventListener('scroll', this.updateProgressBar);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.updateProgressBar);
    },
    methods: {
      updateProgressBar() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const totalHeight = document.body.clientHeight - windowHeight;
        const progress = (scrollY / totalHeight) * 100;
        this.progressBarWidth = progress + '%';
      }
    }
  };
  </script>
  
  <style>
  .progress-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #2f2a2a;
    z-index: 1000;
    margin-top: 8vh;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #00DFC0;
    transition: width 0.2s;
  }

  @media screen and (min-width: 768px) {
    .progress-container {
        margin-top: 0;
        margin-left: 20vw;
        width: 80vw;
    }
   }

   @media screen and (min-width: 1024px) { 
    .progress-container {
        margin-left: 16.6666666666666666666666vw;
        width: 83.3333333333333333333333vw;
    }
   }

   @media screen and (min-width: 1280px) { 
    .progress-container {
        margin-left: 12.5vw;
        width: 87.5vw;
    }
   }

   @media screen and (min-width: 1536px) { 
    .progress-container {
        margin-left: 10vw;
        width: 90vw;
    }
   }

  </style>