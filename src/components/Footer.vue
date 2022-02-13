<template>
  <footer>
    <p>&copy; <span id="year">{{ year }}</span> All rights reserved <span id="name">خیام</span></p>
  </footer>
</template>

<script>
var date = new Date()
var year = date.getFullYear()

export default {
  name: 'Footer',
  props: {
    year: {
      type: Number,
      default: year,
    }
  }
}
</script>


<style scoped>
footer{
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 0;
  color: #326c73;
}
#name{
  font-family: Amiri;
  color: #a14e58;
}

#year{
  color: #bcdfee;
}


@media screen and (max-width: 800px){
  footer{
  width: 100%;
  font-size: 2.5vw;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin: auto;
  color: #326c73;
}

}
</style>
