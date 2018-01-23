<template>
  <div>
    <!-- <nti-header></nti-header> -->
    <nti-body>
      <nti-menu slot="menu"></nti-menu>
      
        <router-view slot="content"></router-view>
    </nti-body>
    <!-- <nti-footer></nti-footer> -->
  </div>
</template>

<script>

import Menu from './components/shared/menu/Menu.vue';
import Body from './components/shared/body/Body.vue';
export default {
  components:{
    'nti-menu':Menu,
    'nti-body':Body
  },
  name: 'app'
}
</script>

<style>

</style>
