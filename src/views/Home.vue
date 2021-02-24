<template>
  <div class="home">
    <left-editer></left-editer>
    <center-view></center-view>
    <right-option></right-option>
  </div>
</template>

<script>
// @ is an alias to /src
import centerView from '@/components/centerView.vue'
import leftEditer from '@/components/leftEditer.vue'
import rightOption from '@/components/rightOption.vue'

export default {
  name: 'Home',
  components: {
    rightOption,
    centerView,
    leftEditer
  }
}
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    justify-content: space-between;
    min-height: 800px;
  }
</style>