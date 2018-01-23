import ListarAlunos from './components/aluno/Listar.vue';
import CadastrarAluno from './components/aluno/Cadastrar.vue';

import ListarDisciplina from './components/disciplina/Listar.vue';
import CadastrarDisciplina from './components/disciplina/Cadastrar.vue';

import Home from './components/home/Home.vue';
export const ROUTES=[
    {
        path:'', 
        component:Home, 
        title:"Home", 
        name:"home",  
        visible:true,
    },    
    {
        path:'/alunos/listar', 
        component: ListarAlunos, 
        title:"Listar Alunos", 
        name:"listar-alunos",  
        visible:true        
    },
    {
        path:'/alunos/cadastrar', 
        component: CadastrarAluno, 
        title:"Cadastrar Aluno", 
        name:"cadastrar-aluno",  
        visible:true        
    },
    {
        path:'/alunos/:id', 
        component: CadastrarAluno, 
        title:"Cadastrar Aluno", 
        name:"ver-aluno",  
        visible:true        
    },
    {
        path:'/disciplinas/listar', 
        component: ListarDisciplina, 
        title:"Listar Disciplina", 
        name:"listar-disciplinas",  
        visible:true        
    },
    {
        path:'/disciplinas/cadastrar', 
        component: CadastrarDisciplina, 
        title:"Cadastrar Disciplina", 
        name:"cadastrar-disciplina",  
        visible:true        
    },
     {
        path:'/disciplinas/:id', 
        component: CadastrarDisciplina, 
        title:"Cadastrar Disciplina", 
        name:"ver-disciplina",  
        visible:true        
    },
];