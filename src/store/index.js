import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Array.prototype.delete = function (value) {
  let res = this.indexOf(value);
  if (res !== -1) {
    this.splice(res, 1);
  }
};
Array.prototype.add = function (value) {
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
    updateMarkLine(state){
        state.widthLine=[]
        state.heightLine=[]
      state.componentData.forEach(element => {
        if(element!==state.curComp){
          let left=element.style.left
          let top=element.style.top
          let width=element.style.width
          let height=element.style.height
          let add=function(left,width,set){
            set.push(left)
            set.push(left+(width>>1))
            set.push(left+width)
          }
          add(left,width,state.widthLine)
          add(top,height,state.heightLine)
        }
      });
      console.log()
    },
    showContextMenu(state, { top, left }) {
      state.menuShow = true
      state.menuTop = top
      state.menuLeft = left
    },

  },
  actions: {},
  modules: {},
});
