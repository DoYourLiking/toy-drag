<template>
  <div class="leftEditer">
    <div v-for="(comp, index) in compmentList" :key="index">
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </div>
    <div draggable="true">输入框</div>
  </div>
</template>

<script>
import compmentList from "@/custom-comp/compment-list";
export default {
  name: "HelloWorld",
  data() {
    return {
      compmentList,
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.leftEditer {
  flex: 0, 0, 80px;
  width: 180px;
  background: white;
}
</style>
