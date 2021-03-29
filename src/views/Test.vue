<template>
  <ul @click="eventProxy($event)">
    <div v-for="(item, index) in arr" :key="index" @click="dele(index)" >
        <div>
            <input type="text" :value="item">
        </div>
    </div>
    <option value="" type="select">
        <section v-for="(item, index) in arr" :key="index" :data-id="index" :value="arr[index]"></section>
    </option>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      arr: ["我是人", "我是猪", "我是癞蛤蟆"],
    };
  },
  methods: {
    eventProxy(e) {
    //   console.log(e.target.dataset.id);
    //   this.arr.splice(e.target.dataset.id, 1);
    //   console.log(this.arr)
    },
    dele(index){
        this.arr.splice(index,1)
    }
  },
  updated(){
     
  }
};
</script>

<style>
</style>