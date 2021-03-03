import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Array.prototype.delete=function(value){
  let res=this.indexOf(value)
  if(res!==-1){
    this.splice(res,1)
  }
}
Array.prototype.add=function(value){
  if(!this.includes(value)){
    this.push(value)
  }
}
export default new Vuex.Store({
  state: {
    curComp: null,
    curCompZIndex: null,
    menuTop: 0,
    menuLeft: 0,
    menuShow: false,
    componentData: [],
    widthLine:[],
    heightLine:[],
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
      if(pos.width){
        state.curComp.style.width = pos.width;
      }
      if(pos.height){
        state.curComp.style.height = pos.height;
      }
    },
    addWidthLine(state,{start,center,end}){
      state.widthLine.delete(state.curComp?.style.left)
      state.widthLine.delete(state.curComp?.style.left+state.curComp?.style.width/2)
      state.widthLine.delete(state.curComp?.style.left+state.curComp?.style.width)
      state.widthLine.add(start)
      state.widthLine.add(center)
      state.widthLine.add(end)
    },
    addHeightLine(state,{start,center,end}){
      state.heightLine.delete(state.curComp?.style.top)
      state.heightLine.delete(state.curComp?.style.top+state.curComp?.style.height/2)
      state.heightLine.delete(state.curComp?.style.top+state.curComp?.style.height)
      state.heightLine.add(start)
      state.heightLine.add(center)
      state.heightLine.add(end)
    }
  },
  actions: {},
  modules: {},
});
