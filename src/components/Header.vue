<template>
  <header>
    <div id="logo">
      <a href="/"><img src="../../public/icon.png" alt=""></a>
    </div>
    <div id="menu_link">
      <a href="/">About</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
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
#menu_link a{
  margin-right: 5%;
  text-decoration: none;
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
</style>