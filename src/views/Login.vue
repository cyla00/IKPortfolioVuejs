<template>
  <div>
    <h1>Login</h1>
    <div class="input-field">
      <input type="text" v-model="email" name="email" id="email" placeholder="Enter Email">
    </div>
    <div class="input-field">
      <input type="password" v-model="password" name="password" id="password" placeholder="Enter Password">
    </div>
    <input id="input" type="submit" value="Login">
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      email: '',
      password: '',
      response: undefined,
    }
  },
  mounted(){
    var axios = require('axios')
    var SHA256 = require("crypto-js/sha256")
    const Swal = require('sweetalert2')
    var submit = document.querySelector('#input')

    submit.addEventListener('click', () => {
      axios.post('http://localhost:3000/login', null, {
        auth: {
          username: this.email, 
          password: SHA256(this.password),
        }
      })
      .then(async function (response) {
        if(response.status == 200){
          await Swal.fire({
            toast: true,
            timerProgressBar: true,
            position: 'top-end',
            icon: 'success',
            title: 'successfully logged',
            showConfirmButton: false,
            timer: 1500
          })
          if(response.data.id){
            localStorage.setItem('usr_id', response.data.id)
            window.location.href = '/admin'
          }
        }
      }).catch(async err => {
        await Swal.fire({
          toast: true,
          icon: 'error',
          title: 'invalid',
        })
        window.location.href = '/'
      })
    })
  }
}
</script>


<style scoped>
div{
  color: aqua;
}
</style>