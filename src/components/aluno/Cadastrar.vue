<template>
    <div>
        <h1>Cadastrar Aluno</h1>
        <form>
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
                    v-model="aluno.cell" v-validate data-vv-rules="required|Numeric|min:6" data-vv-as="Celular" />
                <div class="alert alert-danger" role="alert" v-show="errors.has('cell')">{{ errors.first('cell') }}</div>
            </div>
            <div class="form-group">
                <label for="cell">Curso:</label>
                <select class="form-control">
                    <option value="1">Arquitetura e Urbanismo</option>
                    <option value="2">Administração</option>
                    <option value="3">Artes Cênicas</option>
                    <option value="4">Ciência da Computação</option>
                    <option value="5">Ciência e Tecnologia de Alimentos</option>
                    <option value="6">Ciências Biológicas</option>
                    <option value="7">Ciências Econômicas</option>
                    <option value="8">Direito</option>
                    <option value="9">Educação Física</option>
                    <option value="10">Engenharia Ambiental</option>                    
                </select>
            </div>
            <div class="form-inline">
                <div class="form-group col-lg-6">
                    <label for="state">Estado:</label>
                    <select name="state" id="state" class="form-control">
                        <option value="-1">Escolha seu Estado</option>
                    </select>
                </div>
                <div class="form-group  col-lg-6">
                    <label for="city">Cidade:</label>
                    <select id="city" name="city" class="form-control">
                        <option value="-1">Escolha sua Cidade</option>
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
import Aluno from '../../domain/Aluno.js';
export default {
    data(){
        return {
            aluno:new Aluno()
        }
    }
}
</script>

<style scoped>
form{
    margin:20px 30px;
}
label[for="state"],
label[for="city"]{
    width:100%;
}
.botao{
    float: right;
    margin: 30px 0;
}
</style>