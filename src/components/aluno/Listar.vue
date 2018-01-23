<template>
  <div class="table-responsive">
      <h1>Listar Alunos</h1>
      <table class="table">
        <thead>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>  
          <th></th>
        </thead> 
        <tbody>
          <tr v-for="(aluno, index) in alunos" :key="aluno.id">
            
            <td><router-link :to="{name:'ver-aluno', params:{id:aluno.id}}">{{ ++index }}</router-link></td>
            <td><router-link :to="{name:'ver-aluno', params:{id:aluno.id}}">{{ aluno.name }}</router-link></td>
            <td><router-link :to="{name:'ver-aluno', params:{id:aluno.id}}">{{ aluno.email }}</router-link></td>
            <td>
              <router-link :to="{name:'ver-aluno', params:{id:aluno.id}}" class="table-action">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </router-link>
              <a href="#" @click="remover(aluno)">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </a>
            </td>
            
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
import AlunoService from '../../services/aluno/AlunoService.js';
export default {
  data(){
    return {
      alunos:{}
    }
  },
  created(){
    this.service = new AlunoService(this.$resource);
    this.service
      .lista()
      .then(
        alunos=>this.alunos=alunos,
        err=>{}
      )
  },
  methods:{
    remover(aluno){
      this.service = new AlunoService(this.$resource);
    this.service
      .apaga(aluno.id)
      .then(
        alunos=>{
        let index = this.alunos.indexOf(aluno);
        this.alunos.splice(index,1);
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

