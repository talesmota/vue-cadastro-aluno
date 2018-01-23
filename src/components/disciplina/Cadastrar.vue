<template>
  <div>
        <h1 v-if="!this.id">Cadastrar Disciplina</h1>
        <h1 v-else>Editar Disciplina</h1>
        <form @submit.prevent="grava()">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Digite seu nome" 
                    v-model="disciplina.name" v-validate data-vv-rules="required|min:3|max:30" data-vv-as="Nome"  />
                <div class="alert alert-danger" role="alert" v-show="errors.has('name')">{{ errors.first('name') }}</div>
            </div>
            <div class="form-group">
                <label for="code">Código:</label>
                <input type="text" class="form-control" id="code" name="code" placeholder="Digite o código da disciplina"
                    v-model="disciplina.code" v-validate data-vv-rules="required|min:3" data-vv-as="Disciplina" />
                <div class="alert alert-danger" role="alert" v-show="errors.has('code')">{{ errors.first('code') }}</div>
            </div>
            
            <div class="form-group">
                    <label for="state">Alunos:</label>
                    <div class="lista-alunos">
                        <div class="aluno-box" v-for="aluno in alunos" :key="aluno.id">                        
                            <label  class="checkbox-inline">
                                <input :checked="isChecked(aluno)" type="checkbox" id="inlineCheckbox1" value="option1" @change="addAluno(aluno)"> {{ aluno.name }}
                            </label>
                        </div>
                    </div>
            </div>
            
            <div class="botao">
                <button class="btn btn-default" >Voltar</button>
                <button class="btn btn-primary" >Cadsatrar</button>
            </div>
        </form>
    </div>
</template>

<script>

import Disciplina from "../../domain/Disciplina.js";
import DisciplinaService from "../../services/disciplina/DisciplinaService.js";
import AlunoService from "../../services/aluno/AlunoService.js";
export default {

    data(){
        return {
            id:this.$route.params.id,
            disciplina: new Disciplina(),
            alunos:[]
        }
    },
     created() {
        this.service = new DisciplinaService(this.$resource);
         if (this.id) {
             console.log(this.id);
            this.service.busca(this.id).then(disciplina => {
                 this.disciplina= disciplina;
                 this.disciplina.students=[];
             });
             this.service.getAlunos(this.id).then(resp=>{
                resp.map(aluno=>{
                    this.disciplina.students.push(aluno.id);
                });
             });
         }
        this.alunos = new AlunoService(this.$resource);
        this.alunos = this.alunos.lista().then(
                resp=>{
                   this.alunos=resp;
                   console.log(this.alunos);
                }

           );
         
        
    },
    methods:{
        grava() {
            this.$validator.validateAll().then(success => {
                if (success) {
                console.log(this.disciplina);
                this.service.cadastra(this.disciplina).then(resp => {
                    this.disciplina = new Disciplina();
                    this.$router.push({ name: "listar-disciplinas" });
                });
                }
            });
        },
        addAluno(aluno){
            let index = this.disciplina.students.indexOf(aluno.id);
            if(index == -1){
                this.disciplina.students.push(aluno.id);
            }else{
                this.disciplina.students.splice(index,1);
            }
            console.log("ALUNOS: ",this.disciplina.students);
        },
        isChecked(aluno){
            console.log("ALUNO: ", (this.disciplina.students.indexOf(aluno.id)>-1))
            return this.disciplina.students.indexOf(aluno.id)>-1;
        }
    }
}
</script>

<style scoped>
form {
  margin: 20px 30px;
}
label[for="state"],
label[for="city"] {
  width: 100%;
}
.botao {
  float: right;
  margin: 30px 0;
}
.lista-alunos{
    display: flex;
    flex-wrap: wrap;
}
.lista-alunos .aluno-box {
    width: 50%;
}
</style>
