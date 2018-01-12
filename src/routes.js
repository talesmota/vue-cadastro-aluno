import ListarAlunos from './components/aluno/Listar.vue';
import CadastrarAluno from './components/aluno/Cadastrar.vue';
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
    
];