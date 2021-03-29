<template>
  <div
    class="center"
    @drop="handleDrop"
    @dragover="handleDragOver"
    @click="deselectCurComponent"
  >
    <div>
      <comp-wrapper
        v-for="(item, index) in componentData"
        :key="item.id"
        :style="getRealstyle(item.style, index)"
        :el="item"
        :initStyle="item.style"
        :active="curComp === item"
        :zIndex="index"
      >
        <component :is="item.component" :propValue="value"></component>
      </comp-wrapper>
    </div>
    <markLine ref="mark"></markLine>
    <contextMenu></contextMenu>
  </div>
</template>

<script>
import compWrapper from "../editer/compWrapper";
import compMenu from "@/custom-comp/compMenu";
import { mapState } from "vuex";
import deepclone from "@/utils/deepclone";
import createId from "@/utils/createId";
import getRealstyle from "@/utils/getRealstyle";
import markLine from "@/custom-comp/markLIne";
import contextMenu from "@/editer/contextMenu";
export default {
  data() {
    return {
      value: "input",
      getRealstyle,
    };
  },
  components: {
    compWrapper,
    markLine,
    contextMenu
  },
  computed: mapState(["componentData", "curComp"]),
  methods: {
    handleDrop(e) {
      //拖拽结束把拖拽元素提交至componentData
      e.preventDefault();
      e.stopPropagation();
      const component = deepclone(compMenu[e.dataTransfer.getData("index")]);
      let start = (component.style.left = e.offsetX);
      let width = component.style.width;
      let height = component.style.height;
      let heightStart = (component.style.top = e.offsetY);
      component.id = createId();
      console.log(component.style);
      this.$store.commit("addComponent", component);
      this.$store.commit("updateMarkLine");
    },
    handleDragOver(e) {
      //拖拽中改变形态
      e.preventDefault();
      if (e.dataTransfer.dropEffect !== "copy") {
        e.dataTransfer.dropEffect = "copy";
      }
    },
    deselectCurComponent(e) {
      //取选当前元素
      e.preventDefault();
      e.stopPropagation();
      this.$store.commit("setCurComp", null);
      this.$store.commit("closeContext")
    },
  },
};
</script>

<style lang="scss">
.center {
  background: #f5f5f5;
  width: 100%;
  overflow: auto;
  position: relative;
}
</style>