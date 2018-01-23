<template>
    <div>
        <h1 v-if="!this.id">Cadastrar Aluno</h1>
        <h1 v-else>Editar Aluno</h1>
        <form @submit.prevent="grava()">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Digite seu nome" 
                    v-model="aluno.name" v-validate data-vv-rules="required|min:3|max:30" data-vv-as="Nome"  />
                <div class="alert alert-danger" role="alert" v-show="errors.has('name')">{{ errors.first('name') }}</div>
            </div>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="text" class="form-control" id="email" name="email" placeholder="Digite seu e-mail"
                    v-model="aluno.email" v-validate data-vv-rules="required|email" data-vv-as="E-mail" />
                <div class="alert alert-danger" role="alert" v-show="errors.has('email')">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group">
                <label for="cell">Celular:</label>
                <input type="tel" class="form-control" id="cell" name="cell" placeholder="Digite seu celular" 
                    v-mask="'(##) #####-####'"
                    v-model="aluno.cell" v-validate data-vv-rules="required|min:11" data-vv-as="Celular" />
                <div class="alert alert-danger" role="alert" v-show="errors.has('cell')">{{ errors.first('cell') }}</div>
            </div>
            <div class="form-group">
                <label for="curso">Curso:</label>
                <select class="form-control" id="curso" name="curso"
                    v-model="aluno.course" v-validate data-vv-rules="required|min_value:0" data-vv-as="Curso" >
                    <option value="-1" selected>Escolha seu Curso</option>
                    <option v-for="curso in this.cursos" :key="curso.id" :value="curso.id">{{ curso.name }}</option>
                </select>
                <div class="alert alert-danger" role="alert" v-show="errors.has('curso')">É necessário escolher um curso</div>
            </div>
            <div class="form-inline">
                <div class="form-group col-lg-6">
                    <label for="state">Estado:</label>
                    <select name="state" id="state" class="form-control"
                        v-model="selectedOptions.state" @change="changeEstado()" >
                        <option value="-1">Escolha seu Estado</option>
                        <option v-for="(estado, index) in this.cidades.getEstados()" :key="estado[0]" :value="index">{{ estado[1] }}</option>
                    </select>
                </div>
                <div class="form-group  col-lg-6">
                    <label for="city">Cidade:</label>
                    <select id="city" name="city" class="form-control" v-model="selectedOptions.city" @change="changeCidade()">
                        <option value="-1">Escolha sua Cidade</option>
                        <option v-for="cidade in this.cidadesDoEstado" :key="cidade[0]" :value="cidade[1]">{{ cidade[1] }}</option>
                    </select>
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

import Aluno from "../../domain/Aluno.js";
import { CURSOS } from "../../domain/Cursos.js";
import Cidades from "../../domain/Cidades.js";

import { mask } from "vue-the-mask"; //component de Mascara

import AlunoService from "../../services/aluno/AlunoService.js";
export default {
  directives: { mask },
  data() {
    return {
      id: this.$route.params.id,
      aluno: new Aluno(),
      cursos: CURSOS,
      cidades: new Cidades(),
      selectedOptions:{
          state:'',
          city:''
      },
      cidadesDoEstado: ""
    };
  },
  created() {
    this.service = new AlunoService(this.$resource);
    if (this.id) {
      this.service.busca(this.id).then(aluno => {
            this.aluno = aluno;
            this.selectedOptions.state = this.cidades.findEstado(this.aluno.state);
            this.selectedOptions.city = this.aluno.city;
            this.changeEstado();
        });
    }
    
  },
  methods: {
    changeEstado() {
      console.log(this.cidades.findEstado("MG"));
      this.cidadesDoEstado = this.cidades.getCidades(this.selectedOptions.state);

    },
    changeCidade(){
        let _estado = this.cidades.getEstados();
        this.aluno.state = _estado[this.selectedOptions.state][0];
        this.aluno.city = this.selectedOptions.city;

    },
    grava() {
      this.$validator.validateAll().then(success => {
        if (success) {
          console.log(this.aluno);
          this.aluno.cell = this.aluno.cell.replace(/[^0-9]/g, "");
          this.service.cadastra(this.aluno).then(resp => {
            this.aluno = new Aluno();
            this.$router.push({ name: "listar-alunos" });
          });
        }
      });
    }
  }
};
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
</style>