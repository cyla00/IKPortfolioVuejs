<template>
  <div id="contact">
    <p>If you would like to contact me, send me an Email!</p>
    <div>
      <div id="wrapper">
        <input v-model="name" type="text" id="name" name="name" placeholder="Name">
        <input v-model="email" type="text" id="email" name="email" placeholder="name@company.com">
        <input v-model="subject" type="text" id="subject" name="subject" placeholder="Subject">

        <label for="content">your message here!</label>
        <textarea v-model="content" id="content" name="content" cols="30" rows="10"></textarea>

        <input id="submit" type="submit" value="Send!" v-on:click="sendEmail()">
      </div>
    </div>
  </div>
</template>



<script>
var axios = require('axios')
var Swal = require('sweetalert2')

export default {
  name: 'Contact',
  data(){
    return{
      name: '',
      email: '',
      subject: '',
      content: '',
    }
  },
  methods: {
    sendEmail: function(){

      function validateEmail(email){
        var re = /\S+@\S+\.\S+/
        return re.test(email)
      }

      if(this.name && validateEmail(this.email) && this.subject && this.content){
        axios.post('http://localhost:3000/contactme', {
          name: Buffer.from(this.name).toString('base64'),
          email: Buffer.from(this.email).toString('base64'),
          subject: Buffer.from(this.subject).toString('base64'),
          content: Buffer.from(this.content).toString('base64'),
        }).then(async response => {
          if(response.status == 200){
            await Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Message sent!',
              timerProgressBar: true,
              showConfirmButton: false,
              timer: 2000,
            })
            window.location.href = '/contact'
          }
        }).catch(err => {
          console.log(err.message)
          Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'error',
              title: 'Something went wrong, unable to send the message',
            })
        })
      }
      else{
        Swal.fire({
          toast: true,
          icon: 'info',
          title: 'Fill the fields correctly',
        })
      } 
    }
  }
}
</script>

<style scoped>
p{
  font-size: 2em;
  color: #bcdfee;
}
#contact{
  text-align: center;
}
#wrapper{
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
}
input{
  margin: 1em;
  font-size: 1em;
  padding: 1em;
  background-color: #bdffff;
  font-family: Kanit;
  border: none;
  color: #364545;
  opacity: .6;
  color: black;
}
#submit{
  width: 20% !important;
  margin: auto;
  font-family: Kanit;
  background-color: #915783;
  opacity: 9;
}
#submit:hover{
  background-color: #e66aa1;
}

#content{
  height: 10em;
  margin: 1em;
  font-size: 1em;
  padding: 1em;
  background-color: #bdffff;
  font-family: Kanit;
  border: none;
  opacity: .6;
}
label{
  font-size: 1.4em;
  color: #bcdfee;
}

</style>