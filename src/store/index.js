import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curComp: null,
    curCompZIndex: null,
    menuTop: 0,
    menuLeft: 0,
    menuShow: false,
    componentData: [],
  },
  mutations: {
    addComponent(state, component) {
      state.componentData.push(component);
    },
    setCurComp(state, comp) {
      state.curComp = comp;
    },
    setCurCompStyle(state, pos) {
      console.log(pos)
      if (pos.top) {
        state.curComp.style.top = pos.top;
      }
      if (pos.left) {
        state.curComp.style.left = pos.left;
      }
      if(pos.width){
        state.curComp.style.width = pos.width;
      }
      if(pos.height){
        state.curComp.style.height = pos.height;
      }
    },
  },
  actions: {},
  modules: {},
});
