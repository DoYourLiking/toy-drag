<template>
  <div v-show="moving" class="markLine">
    <div >
      <div
        class="width"
        v-for="line in showColumns"
        :key="Number(line)"
        :style="{ left: line + 'px', position: 'absolute' }"
      ></div>
    </div>
    <div >
      <div
        class="height"
        v-for="line in showLines"
        :key="Number(line)"
        :style="{ top: line + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import eventBus from "@/utils/eventBus";
export default {
  data() {
    return {
      moving: false,
      showLines: [],
      showColumns: [],
      diff: 3,
      lineSet:new Set(),
      column:new Set()
    };
  },

  computed: mapState(["widthLine", "heightLine", "curComp"]),
  
  created() {
    this.lineSet=new Set(this.heightLine);
    this.column=new Set(this.widthLine)
  },
  watch: {
  
   
  },
  mounted() {
    eventBus.$on("move", () => {
      this.moving = true;
      this.computeWidth(this.curComp);
    }),
      eventBus.$on("unmove", () => {
        this.moving = false;
        this.showLines=[]
        this.showColumns=[]
      });
  },
  updated() {
     this.lineSet=new Set(this.heightLine);
    this.column=new Set(this.widthLine)
  },
  methods: {
    computeWidth(cur) {
      let left = cur.style.left;
      let width = cur.style.width;
      let top = cur.style.top;
      let height = cur.style.height;
      this.diffAndshow(left, "left", this.column, this.showColumns,0);
      this.diffAndshow(left+(width>>1), "", this.column, this.showColumns,1);
      this.diffAndshow(left+width, "", this.column, this.showColumns,2);
      this.diffAndshow(top, "top", this.lineSet, this.showLines,0);
      this.diffAndshow(top+height, "", this.lineSet, this.showLines,1);
    },
    diffAndshow(value, direction, set, arr,item) {
      for (let i = -this.diff; i <= this.diff; i++) {
        if (set.has(value + i)) {
          if(!arr.includes(value+i))this.$set(arr,item,value+i)
          if(direction=="left"||direction=="top")this.$store.commit("setCurCompStyle", { [direction]: value + i });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.markLine {
  position: absolute;
  width: 100%;
  height: 800px;
  .width {
    position: absolute;
    background: gray;
    width: 1px;
    height: 100%;
    z-index: 1;
    opacity: 50%;
  }
  .height {
    position: absolute;
    background: gray;
    height: 1px;
    width: 100%;
    z-index: 1;
    opacity: 50%;
  }
}
</style>