<template>
  <div id="wrapper">
    <dl>
      <p v-if="projects == false" id="notFound">no projects found!</p>
      <dt v-for="project in projects" v-bind:key="project._id" class="project_card">
        <p>{{project.date}}</p>
        <h4>{{project.title}}</h4>
        <button class="open" v-on:click="modalOn(project._id, project.date, project.image_link, project.title, project.description)">View More</button>
      </dt>
    </dl>
  </div>

  <div class="modal" v-if="modalState">
    <p id="date">date: {{modalDate}}</p>
    <div>
      <img v-bind:src="modalImage" alt="project_image">
    </div>
    <h1>{{modalTitle}}</h1>
    <p id="description">{{modalDescription}}</p>
    <button v-on:click="this.modalState = false">X</button>
  </div>

</template>



<script>
var axios = require('axios')

export default {
  name: 'Projects',
  data(){
    return{
      back: 0,
      projects: undefined,
      modalState: false,
      modalId: '',
      modalTitle: '',
      modalDate: '',
      modalImage: '',
      modalDescription: '',
    }
  },
  methods: {
    modalOn: function(id, date, image, title, description){
      this.back = 1
      this.modalId = id
      this.modalTitle = title
      this.modalDate = date
      this.modalImage = image
      this.modalDescription = description
      this.modalState = true
    }
  },
  mounted(){
    axios.get('http://localhost:3000/api/projects')
    .then((data) => {
      if(data.data.lenght == 0){this.projects = false}
      this.projects = data.data
      })
    .catch((err) => {
      console.log(err.message)
    })
  }
}
</script>

<style scoped>
#wrapper{
  margin: auto;
}
#notFound{
  color: #e32424;
  font-size: 1.5em;
}

dl{
  display: flex;
  flex-direction: column-reverse;
}
.project_card{
  display: grid;
  grid-template-columns: 10% 80% 10%;
  -webkit-border-radius: 20px;
	-khtml-border-radius: 20px;	
	-moz-border-radius: 20px;
	border-radius: 20px;
  margin: 1em;
  padding: 0.5em;
  width: 70vw;
  box-shadow: 0em 0em 2em black;
  color: #bcdfee;
}

.project_card button{
  -webkit-border-radius: 20px;
	-khtml-border-radius: 20px;	
	-moz-border-radius: 20px;
	border-radius: 20px;
  border: none;
  background-color: #e66aa1;
}
.project_card button:hover{
  background-color: #915783;
  transition: 0.2s;
}
.project_card h4{
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: start;
  font-size: 1.5em;
}
.project_card p{
  display: flex;
  justify-content: start;
  color: #a14e58;
}

.modal{
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 50em;
  text-align: center;
  background-color: #568080;
  -webkit-border-radius: 20px;
	-khtml-border-radius: 20px;	
	-moz-border-radius: 20px;
	border-radius: 20px;
  display: grid;
  grid-template-rows: 5% 60% 10% 20% 5%;
  color: #181D23;
}
.modal button{
  font-size: 1em;
  display: flex;
  justify-content: center;
  border-radius: 5%;
  border: solid 1px #181D23;
  border-radius: 5px;
  background: none;
  margin: auto;
  box-shadow: none;
}
.modal button:hover{
  background-color: #D36262;
  transition: 0.2s;
}
.modal img{
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.modal div{
  overflow: hidden;
}
#date{
  display: flex;
  justify-content: start;
  margin: 1em;
}
.modal h1{
  font-size: 3em;
  margin: 0;
}
#description{
  font-size: 1.4em;
  margin: 0;
  padding: 0.5em;
}


@media screen and (max-width: 800px){

#wrapper{
  margin: 0;
}
  .project_card{
  display: grid;
  grid-template-columns: 20% 80%;
  margin: auto;
  margin-bottom: 5vw;
  -webkit-border-radius: 20px;
	-khtml-border-radius: 20px;	
	-moz-border-radius: 20px;
	border-radius: 20px;
  width: 80vw;
  height: 100%;
  box-shadow: 0em 0em 2em black;
  color: #bcdfee;
}

.project_card button{
  position: absolute;
  width: 80vw;
  height: 10vw;
  background: none;
  text-indent: -9999px;
}
.project_card button:hover{
  background: none;
}

.project_card h4{
  margin: auto;
  font-size: 4vw;
}
.project_card p{
  display: flex;
  justify-content: start;
  color: #a14e58;
  font-size: 3vw;
}

.modal{
  margin: auto;
  position: absolute;
  width: 100%;
  height: 85vh;
  text-align: center;
  background-color: #568080;
  -webkit-border-radius: 20px;
	-khtml-border-radius: 20px;	
	-moz-border-radius: 20px;
	border-radius: 20px;
  display: grid;
  grid-template-rows: 10vw 50vw 10vw;
  color: #181D23;
}

.modal h1{
  font-size: 6vw;
}

#description{
  font-size: 4vw;
  margin: 0;
  padding: 0.5em;;
}

.modal button{
  font-size: 5vw;
  border: none;
  border-radius: 0;
  display: flex;
  padding: 1.4vw;
  justify-content: baseline;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-color: #a14e58;
}

}
</style>