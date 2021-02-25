<template>
  <div
    class="compWrapper"
    :class="{ active: this.active }"
    @mousedown="dragOrSelect"
    @click.stop="stopPropagation($event)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    initStyle: {
      type: Object,
      required: true,
    },
    el: {
      type: Object,
      required: true,
    },
    zIndex: {},
  },
  methods: {
    dragOrSelect(e) {
      if (this.el.component != "v-input") {
        //文本文档需要修改本身数值
        e.preventDefault();
      }
      e.stopPropagation();
      //选中当前元素
      this.$store.commit("setCurComp", this.el);
      const pos = { ...this.initStyle };
      //闭包保存每次点击前的初始位置
      const curX = pos.left;
      const curY = pos.top;
      let startX = e.clientX;
      let startY = e.clientY;
      const move = (moveE) => {
        pos.left = Number(moveE.clientX) - Number(startX) + curX;
        pos.top = Number(moveE.clientY) - Number(startY) + curY;
        console.log(pos);
        this.$store.commit("setCurCompStyle", pos);
        this.$nextTick(()=>{
           let  a=document.getElementById("app").offsetTop
        })
      };
      const mouseUp = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", mouseUp);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", mouseUp);
    },
    stopPropagation(e) {
      //用来防止鼠标抬起时的click事情传播到center中的取选事件
      e.stopPropagation();
    },
  },
};
</script>

<style scoped lang="scss">
.compWrapper {
  position: absolute;
  &.active {
    border: 1px solid blue;
  }
  overflow: hidden;
}
</style>>
