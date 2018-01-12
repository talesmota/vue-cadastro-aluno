<template>
 <div class="nav-side-menu">
    <div class="brand">NTI</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div class="menu-list">
  
            <ul id="menu-content" class="menu-content collapse out">
                <li>
                  <router-link :to="{name:'home'}">
                      <i class="fa fa-home fa-lg"></i> Home
                  </router-link>  
                </li>

                <li  data-toggle="collapse" data-target="#products" class="collapsed active">
                    
                  <router-link to="">
                    <i class="fa fa-book fa-lg"></i> Disciplina <span class="arrow"></span>
                  </router-link>
                </li>
                <ul class="sub-menu collapse" id="products">
                    <li class="active">
                        <router-link :to="{name:'listar-disciplinas'}">
                            Listar disciplinas
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'cadastrar-disciplina'}">
                            Cadastrar disciplina
                        </router-link>
                    </li>
                </ul>


                <li data-toggle="collapse" data-target="#service" class="collapsed">
                    <router-link to="">
                      <i class="fa fa-users fa-lg"></i> Alunos <span class="arrow"></span>
                    </router-link>
                </li>  
                <ul class="sub-menu collapse" id="service">
                  <li class="active">
                        <router-link :to="{name:'listar-alunos'}">
                            Listar Alunos
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'cadastrar-aluno'}">
                            Cadastrar Aluno
                        </router-link>
                    </li>
                </ul>             
            </ul>
     </div>
</div>
</template>
<script>

import { ROUTES } from '../../../routes';
export default {
  data(){
    return {
      routes: ROUTES
    }
  },
  created(){
  }
}
</script>
<style>

</style>
