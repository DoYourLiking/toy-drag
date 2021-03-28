<template>
  <div v-show="moving" class="markLine" >
    <div v-show="widthLine.length">
      <div
        class="width"
        v-for="line in widthLine"
        :key="Number(line)"
        :style="{ left: line + 'px',position:'absolute' }"
      ></div>
    </div>
    <div v-show="heightLine.length">
      <div
        class="height"
        v-for="line in heightLine"
        :key="Number(line)"
        :style="{ top: line + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import eventBus from '@/utils/eventBus'
export default {
  data() {
    return {
      moving: false,
      columnLineSet:new Set(this.widthLine),
      linesSet:new Set(this.heightLine),
    };
  },
  computed: mapState(["widthLine", "heightLine","curComp"]),
  created() {
    // console.log(this.widthLine)
    // console.log(this.$store.state.widthLine)
  },
  mounted() {
    eventBus.$on("move",()=>{
      this.moving=true
    }),
    eventBus.$on("unmove",()=>{
      this.moving=false
    })
  },
  updated(){
     
  },
  methods: {
    add() {},
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