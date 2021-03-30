<template>
  <div
    class="compWrapper"
    :class="{ active: this.active }"
    @mousedown="dragOrSelect"
    @click.stop="stopPropagation($event)"
    ref="wrapper"
    @contextmenu.prevent="showSetZindex"
  >
    <slot></slot>
  </div>
</template>

<script>
import eventBus from "../utils/eventBus.js";
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
      this.$store.commit("SetCurIndex",this.zIndex)
      
      let dragStartTime = Date.now();
      const pos = { ...this.initStyle };
        //闭包保存每次点击前的初始位置
        const curX = pos.left;
        const curY = pos.top;
      if (e.button === 0) {
        //左键拖动改变元素位置
        
        let startX = e.clientX;
        let startY = e.clientY;
        const leftmove = (moveE) => {
          
          pos.left = Number(moveE.clientX) - Number(startX) + curX;
          pos.top = Number(moveE.clientY) - Number(startY) + curY;
          this.$store.commit("setCurCompStyle", pos);
          this.$store.commit("updateMarkLine");
          this.$nextTick(() => {
            eventBus.$emit("move");
            this.$store.commit("updateMarkLine");
          });
        };
        const leftmouseUp = (e) => {
          this.$nextTick(() => {
            eventBus.$emit("unmove");
          });
          document.removeEventListener("mousemove", leftmove);
          document.removeEventListener("mouseup", leftmouseUp);
        };
        document.addEventListener("mousemove", leftmove);
        document.addEventListener("mouseup", leftmouseUp);
      } else {
        //右键拖动改变元素大小
        let rightMove = () => {
          eventBus.$emit("move");
        };
        document.addEventListener("mousemove", rightMove);
        const rightmouseup = (e) => {
          let pos = {};
          console.log(
            (pos.width = /[0-9]*/.exec(this.$refs.wrapper.style.width)[0]),
            (pos.height = /[0-9]*/.exec(this.$refs.wrapper.style.height)[0]),pos
          );
          this.$store.commit("setCurCompStyle", pos);
          this.$nextTick(()=>{
            this.$store.commit("updateMarkLine");
          })
          console.log(this.$store.state.componentData)
          let DragendTime = Date.now();
          if (DragendTime - dragStartTime <= 200) {
            this.$store.commit("showContextMenu",{left:e.clientX-80,top:e.clientY-40})
            console.log("contextMenu")
          }
          eventBus.$emit("unmove");
          document.removeEventListener("mousemove", rightMove);
          document.removeEventListener("mouseup", rightmouseup);
        };
        document.addEventListener("mouseup", rightmouseup,false);
      }
    },
    stopPropagation(e) {
      //用来防止鼠标抬起时的click事情传播到center中的取选事件
      e.stopPropagation();
    },
    showSetZindex() {},
  },
};
</script>

<style scoped lang="scss">
.compWrapper {
  position: absolute;
  overflow: hidden;
  resize: both;
  &.active {
    border: 1px solid blue;
  }
}
</style>>
