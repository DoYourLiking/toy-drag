<template>
  <div class="center">
    <component
      class="component"
      :is="input"
    />

   
  </div>
</template>

<script>
export default {
  data(){
    return{
      input:"input"
    }
  }
};
</script>

<style lang="scss">
.center {
  background: #f5f5f5;
  width: 100%;
  overflow: auto;
}
</style>