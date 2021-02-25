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
    setCurComp(state,comp){
      state.curComp=comp
    },
    setCurCompStyle(state,pos){
      state.curComp.style.top=pos.top
      state.curComp.style.left=pos.left
    }
  },
  actions: {},
  modules: {},
});
