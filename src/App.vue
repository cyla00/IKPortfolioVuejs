<template>
<Header/>

<router-view/>

<Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  }
}
</script>


<style>
body{
  margin: 0;
  padding: 0;
  background-color: #191c23;
  background-position: center;
  background-size: fill;
}

#app {
  min-height: 100vh;
  font-family: Kanit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-auto-rows: 100px 1fr 60px;
}

@media screen and (max-width: 800px){
  #app{
    grid-auto-rows: 15vw 1fr;
  }
}
</style>
