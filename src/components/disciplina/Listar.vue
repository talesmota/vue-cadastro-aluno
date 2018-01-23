<template>
  <div class="table-responsive">
      <h1>Listar Disciplinas</h1>
      <table class="table">
        <thead>
          <th>#</th>
          <th>Nome</th>
          <th>Código</th>  
          <th></th>
        </thead> 
        <tbody>
          <tr v-for="(disciplina, index) in disciplinas" :key="disciplina.id">
            
            <td><router-link :to="{name:'ver-disciplina', params:{id:disciplina.id}}">{{ ++index }}</router-link></td>
            <td><router-link :to="{name:'ver-disciplina', params:{id:disciplina.id}}">{{ disciplina.name }}</router-link></td>
            <td><router-link :to="{name:'ver-disciplina', params:{id:disciplina.id}}">{{ disciplina.code }}</router-link></td>
            <td>
              <router-link to="" class="table-action">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </router-link>
              <a to="#" @click="remover(disciplina)">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </a>
            </td>
            
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
import DisciplinaService from '../../services/disciplina/DisciplinaService.js';
export default {
  data(){
    return {
      disciplinas:{}
    }
  },
  created(){
    this.service = new DisciplinaService(this.$resource);
    this.service
      .lista()
      .then(
        disciplina=>this.disciplinas=disciplina,
        err=>{}
      )
  },
  methods:{
    remover(disciplina){
      this.service = new DisciplinaService(this.$resource);
    this.service
      .apaga(disciplina.id)
      .then(
        disciplinas=>{
        let index = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(index,1);
        },
        err=>{}
      )
    }
  }
}
</script>
<style scoped>
  
  .table-action{ margin: 0 10px; }

</style>

