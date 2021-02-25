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
  },
  actions: {},
  modules: {},
});
