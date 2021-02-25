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
        :key="index"
        :style="getRealstyle(item.style,index)"
      >
        <component :is="item.component"></component>
      </comp-wrapper>
    </div>
  </div>
</template>

<script>
import compWrapper from "../editer/compWrapper";
import compMenu from "@/custom-comp/compMenu";
import { mapState } from "vuex";
import deepclone from "@/utils/deepclone";
import createId from '@/utils/createId'
export default {
  data() {
    return {
      input: "input",
    };
  },
  components: {
    compWrapper,
  },
  computed: mapState(["componentData"]),
  methods: {
    handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      const component =deepclone(compMenu[e.dataTransfer.getData("index")]);
      component.style.left = e.offsetX;
      component.style.top = e.offsetY;
      component.id = createId();
      console.log(component)
      this.$store.commit('addComponent',component)
    },
    handleDragOver(e) {
      e.preventDefault();
      if (e.dataTransfer.dropEffect !== "copy") {
        e.dataTransfer.dropEffect = "copy";
      }
    },
    deselectCurComponent() {
      //取选当前元素
    },
    getRealstyle(style,index){
      const result = { ...style }
            if (result.width) {
                result.width += 'px'
            }

            if (result.height) {
                result.height += 'px'
            }

            if (result.top) {
                result.top += 'px'
            }

            if (result.left) {
                result.left += 'px'
            }

            if (result.rotate) {
                result.transform = 'rotate(' + result.rotate + 'deg)'
            }
            // 按顺序添加 z-index 层级
            result.zIndex = index

            return result
    }
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