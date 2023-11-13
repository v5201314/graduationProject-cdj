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
        state.carouselIsShow = !state.carouselIsShow
    },
    //用户登陆后存储用户信息 并且备份到sessionStorage 防止刷新消失
    changeUserInfo(state, value) {
        state.userInfo = value
        window.sessionStorage.setItem('userInfo',JSON.stringify(value))
    }
}

//准备 state
const state = {
    //是否显示轮播图
    carouselIsShow: false,
    //用户信息 从sessionStorage中读取数据 如果没有就为空 {}
    userInfo:JSON.parse(window.sessionStorage.getItem('userInfo'))||{},
}


//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})