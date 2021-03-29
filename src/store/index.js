import Vue from "vue";
import Vuex from "vuex";
import swap from "../utils/swap.js";
Vue.use(Vuex);
Array.prototype.delete = function(value) {
  let res = this.indexOf(value);
  if (res !== -1) {
    this.splice(res, 1);
  }
};
Array.prototype.add = function(value) {
  if (!this.includes(value)) {
    this.push(value);
  }
};
export default new Vuex.Store({
  state: {
    curComp: null,
    curCompZIndex: null,
    menuTop: 0,
    menuLeft: 0,
    menuShow: false,
    componentData: [],
    widthLine: [],
    heightLine: [],
  },
  mutations: {
    addComponent(state, component) {
      state.componentData.push(component);
    },
    setCurComp(state, comp) {
      state.curComp = comp;
    },
    setCurCompStyle(state, pos) {
      if (pos.top) {
        state.curComp.style.top = pos.top;
      }
      if (pos.left) {
        state.curComp.style.left = pos.left;
      }
      if (pos.width) {
        state.curComp.style.width = pos.width;
      }
      if (pos.height) {
        state.curComp.style.height = pos.height;
      }
    },
    updateMarkLine(state) {
      state.widthLine = [];
      state.heightLine = [];
      state.componentData.forEach((element) => {
        if (element !== state.curComp) {
          let left = element.style.left;
          let top = element.style.top;
          let width = element.style.width;
          let height = element.style.height;
          let add = function(left, width, set) {
            set.push(left);
            set.push(left + (width >> 1));
            set.push(left + width);
          };
          add(left, width, state.widthLine);
          add(top, height, state.heightLine);
        }
      });
      console.log();
    },
    showContextMenu(state, { top, left }) {
      state.menuShow = true;
      state.menuTop = top;
      state.menuLeft = left;
    },
    closeContext(state) {
      state.menuShow = false;
    },
    SetCurIndex(state, zIndex) {
      state.curCompZIndex = zIndex;
      console.log(zIndex);
    },
    delete(state) {
      console.log(state.curCompZIndex);
      console.log(state.componentData.splice(state.curCompZIndex, 1));
    },
    up(state) {
      if (state.curCompZIndex == state.componentData.length - 1) {
        alert("已经最高了");
      } else {
        swap(state.componentData, state.curCompZIndex, state.curCompZIndex + 1);
      }
    },
    down(state) {
      if(state.curCompZIndex ===0 ){
        alert("已经到底了")
      }else{
        swap(state.componentData,state.curCompZIndex,state.curCompZIndex-1)
      }
    },
    toTop(state) {
      if (state.curCompZIndex == state.componentData.length - 1) {
        alert("已经最高了");
      }else{
        swap(state.componentData, state.curCompZIndex, state.curCompZIndex .length-1)
      }
    },
    toBottom(state) {
      if(state.curCompZIndex ===0 ){
        alert("已经到底了")
      }else{
        swap(state.componentData, state.curCompZIndex, 0)
      }
    },
  },
  actions: {},
  modules: {},
});
