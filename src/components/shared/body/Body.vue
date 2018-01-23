<template>
  <div class="nti-body">
      <slot name="menu"></slot>
      <div class="content">
        <transition name="painel-fade">
            <slot name="content" v-show="visible"></slot>
        </transition>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            visible:false
        }
    }
    
}
</script>

<style sccoped>
.nti-body{
    display: block;
    margin-top:90px;
}

.content{
    margin-left: 300px;
    display: block;
}

.painel-fade-enter, .painel-fade-leave-active{
    opacity: 0;
}
.painel-fade-enter-active,.painel-fade-leave-active{
    transition: opacity .5s;
}
</style>
