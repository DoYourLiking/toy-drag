<template>
  <div class="compWrapper" :class="{active:this.active}" >
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        active:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
    .compWrapper{
        position: absolute;
    }
</style>>
