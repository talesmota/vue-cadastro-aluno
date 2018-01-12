<template>
  <div>
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
            <td>{{ ++index }}</td>
            <td>{{ aluno.name }}</td>
            <td>{{ aluno.email }}</td>
            <td>
              <router-link to="" class="table-action">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </router-link>
              <router-link to="">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </router-link>
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
  }
}
</script>
<style scoped>
  
  .table-action{ margin: 0 10px; }

</style>

