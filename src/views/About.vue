<template>

  <div id="home_wrapper">
    <div id="intro">
      <p id="title">Hello, I'm Ismail</p>
      <p id="subtitle">Web developer</p>
      <p id="description">Focusing on Wep Applications development<br>Front-End & Back-End.</p>
      <p id="check">check out some of my <a href="/projects">Projects</a> !</p>
    </div>

    <h2>Some of the technologies I use:</h2>
    <div id="tech-stack">
      <div class="tech">
        <img src="../assets/node.png" alt="node">
        <h3>NodeJs</h3>
      </div>  
      <div class="tech">
        <img src="../assets/express.png" alt="express">
        <h3>ExpressJs</h3>
      </div>

      <div class="tech">
        <img src="../assets/vue.png" alt="vuejs">
        <h3>VueJs</h3>
      </div>

      <div class="tech">
        <img src="../assets/py.png" alt="python">
        <h3>Python</h3>
      </div>

      <div class="tech">
        <img src="../assets/django.png" alt="django">
        <h3>Django</h3>
      </div>

      <div class="tech">
        <img src="../assets/html.png" alt="html">
        <h3>HTML</h3>
      </div>

      <div class="tech">
        <img src="../assets/css.png" alt="css">
        <h3>CSS</h3>
      </div>

      <div class="tech">
        <img src="../assets/mongo.png" alt="mongodb">
        <h3>MongoDB</h3>
      </div>

      <div class="tech">
        <img src="../assets/sql.png" alt="sql">
        <h3>SQL</h3>
      </div>
    </div>
  </div>

</template>



<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
#home_wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#intro{
  margin: auto;
  font-size: 2em;
  color: #bcdfee;
}
#intro p{
  margin: 0;
}
#title{
  font-size: 3em;
}
#subtitle{
  font-size: 0.7em;
  color: #4f8084;
}
#check{
  margin-top: 4% !important; 
  font-size: 0.6em;
}
#check a{
  font-size: 1.4em;
  text-decoration: none;
  color: #e66aa1;
  animation: pulse 1.5s alternate infinite;
  -webkit-animation: pulse 1.5s alternate infinite;
}
@keyframes pulse {
  from {opacity:1}
  to {opacity:0}
}
@-webkit-keyframes pulse {
  from {opacity:1}
  to {opacity:0}
}
#check a:hover{
  animation: none;
}

#tech-stack{
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin-bottom: 10em;
  background-color: rgba(123, 181, 181, 0.6);
}
.tech{
  text-align: center;
  margin: 1em;
  color: black;
}
.tech img{
  width: 2em;
  height: 2em;
}
h3{
  margin: 0;
}
h2{
  margin: 0;
  display: flex;
  justify-content: center;
  color: black;
  background-color: rgba(123, 181, 181, 0.6);
}
</style>