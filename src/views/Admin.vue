<template>
  <div>
    <input id="logout" type="submit" value="logout">

    <div>
      <input type="text" v-model="title" name="title" id="title" placeholder="Enter Title">
      <input type="text" v-model="description" name="description" id="description" placeholder="Enter description">
      <input type="text" v-model="link" name="link" id="link" placeholder="Enter image link">
      <input id="add" type="submit" value="+">
    </div>

    
    <dl>
      <dt v-for="project in projects" v-bind:key="project._id" class="project_card">
        <p>{{project.date}}</p>
        <h4>{{project.title}}</h4>
        <p>{{project.description}}</p>
        <p>{{project._id}}</p>
        <input class="modify" type="submit" value="modify" v-on:click="">
        <input class="delete" type="submit" value="delete" v-on:click="remove_project(project)">
      </dt>
    </dl>
  </div>
    
</template>

<script>
var axios = require('axios')
var Swal = require('sweetalert2')


export default {
  name: 'Admin',
  data(){
    return{
      projects: undefined,
      title: '',
      description: '',
      link: '',
    }
  },
  methods: {
    remove_project: function(project){

      Swal.fire({
        toast: true,
        title: 'Do you want to delete the project?',
        showCancelButton: true,
        confirmButtonText: 'delete',
        confirmButtonColor: 'red',
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post('http://localhost:3000/admin/remove', {
            data: {
              id: project._id,
              check_id: localStorage.getItem('usr_id')
            }
            }).then(async response => {
            if(response.status == 200){
              await Swal.fire({
                toast: true,
                timerProgressBar: true,
                position: 'top-end',
                icon: 'success',
                title: 'successfully deleted the project',
                showConfirmButton: false,
                timer: 1500
              })
              window.location.href = '/admin'
            }
          }).catch(async err => {
            console.log(err.message)
            await Swal.fire({
              toast: true,
              icon: 'error',
              title: 'delete error',
            })
            window.location.href = '/admin'
          })
        }
      })
    }
  },
  mounted(){
    axios.get('http://localhost:3000/api/projects')
    .then((data) => {
      this.projects=data.data
      })
    .catch((err) => {
      console.log(err.message)
    })



    var add_project = document.querySelector('#add')

    function isValidUrl(_string){
      const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
      return matchPattern.test(_string)
    }

    add_project.addEventListener('click', () => {
      if(this.title && this.description && isValidUrl(this.link)){
        axios.post('http://localhost:3000/admin/add', {
          data: {
            title: this.title,
            description: this.description,
            link: this.link,
            id: localStorage.getItem('usr_id'),
          }
        }).then(async response => {
          if(response){
            await Swal.fire({
              toast: true,
              timerProgressBar: true,
              position: 'top-end',
              icon: 'success',
              title: 'successfully added project',
              showConfirmButton: false,
              timer: 1500
            })
            window.location.href = '/admin'
          }
        }).catch(async err => {
          console.log(err.message)
          await Swal.fire({
            toast: true,
            icon: 'error',
            title: 'invalid',
          })
        localStorage.clear()
        window.location.href = '/'
        })
      }
      else{
        Swal.fire({
          toast: true,
          icon: 'error',
          title: 'could not add the project',
        })
      }
    })

    var logout = document.querySelector('#logout')
    logout.addEventListener('click', () => {
      var confirmation = window.confirm('are you sure?')
      if(confirmation){
        localStorage.clear()
        window.location.href = '/'
      }
    })
  }
}
</script>


<style scoped>
dl{
  display: flex;
  flex-direction: column-reverse;
}
</style>