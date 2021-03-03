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
export default {
  data() {
    return {
      moving: true,
    };
  },
  computed: mapState(["widthLine", "heightLine"]),
  created() {
    // console.log(this.widthLine)
    // console.log(this.$store.state.widthLine)
  },
  mounted() {
   
  },
  updated(){
     console.log(this.widthLine)
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
    background: blue;
    width: 1px;
    height: 100%;
    z-index: 1;
  }
  .height {
    position: absolute;
    background: blue;
    height: 1px;
    width: 100%;
    z-index: 1;
  }
}
</style>