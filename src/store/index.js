//该文件用于创建Vuex中最核心的store

//引入Vuex 和Vue
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//准备 actions
const actions = {
    jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        if (context.state.count % 2)
            context.commit('JIA', value)
    },
    jiaWait(context, value) {
      setTimeout(()=>{
        context.commit('JIA', value)
      },500)
     
    }
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
    carouselIsShow: true,
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})