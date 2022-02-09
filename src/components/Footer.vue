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
</style>
