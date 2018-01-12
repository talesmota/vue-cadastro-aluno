<template>
  <div class="nti-body">
      <slot name="menu"></slot>
      <div class="content">
        <slot name="content"></slot>
      </div>
  </div>
</template>

<script>
export default {

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
</style>
