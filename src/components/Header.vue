<template>
  <header>
    <div id="logo">
      <a href="/"><img src="../../public/icon.png" alt=""></a>
    </div>
    <div id="menu_link">
      <div class="btn">
        <a href="/">About</a>
      </div>
      
      <div class="btn">
        <a href="/projects">Projects</a>
      </div>
      
      <div class="btn">
        <a href="/contact">Contact</a>
      </div>
      
    </div>
  </header>
</template>



<script>
export default {
  name: 'Header',
  props: {
    
  }
}
</script>



<style scoped>
header{
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 1em;
}
#menu_link{
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
}
.btn{
  margin-right: 5%;
}
#menu_link a{
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #e66aa1;
  font-size: 1.5em;
}
#menu_link a:hover{
  color: #915783;
  animation: pulse 0.5s alternate infinite;
  -webkit-animation: pulse 0.5s alternate infinite;
}
@keyframes pulse {
  from {color: #915783}
  to {color: #e66aa1}
}
@-webkit-keyframes pulse {
  from {color: #915783}
  to {color: #e66aa1}
}
#logo img{
  width: 5em;
}



@media screen and (max-width: 800px){

  header{
  padding: 4vw;
  font-size: 3vw;
}


  #logo img{
  width: 10vw;
}

.btn{
  margin-right: 4vw;
}



}
</style>