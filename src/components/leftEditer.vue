<template>
  <div class="leftEditer" @dragstart="handleDragstart">
    <div v-for="(comp, index) in compMenu" :key="index" draggable="true" :data-index="index">
      <i :class="comp.icon"></i>
      <span>{{ comp.label }}</span>
    </div>
  </div>
</template>

<script>
import compMenu from "../custom-comp/compMenu";
export default {
  name: "HelloWorld",
  data() {
    return {
      compMenu,
    };
  },
  created(){
    console.log(compMenu)
  },
  methods:{
    handleDragstart(e){
      e.dataTransfer.setData("index",e.target.dataset.index)
    }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.leftEditer {
  flex: 0, 0, 80px;
  width: 180px;
  background: white;
}
</style>
