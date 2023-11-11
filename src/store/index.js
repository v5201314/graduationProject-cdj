//该文件用于创建Vuex中最核心的store

//引入Vuex 和Vue
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//准备 actions
const actions = {
    
}

//准备 mutations
const mutations = {
    //改变控制轮播图显示的状态
    changeCarouselIsShow(state) {
        state.carouselIsShow=!state.carouselIsShow
    },
}

//准备 state
const state = {
    //是否显示轮播图
    carouselIsShow: false,
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})